<template>
  <ai-send-captcha-button :size="size" :disabled="start" @click="handleClick" v-text="tmpStr" />
</template>

<script>
import { Button } from "ant-design-vue";
const SendCaptchaButton = {
  extends: Button,
  components: {
    "ai-send-captcha-button": Button
  },
  data() {
    return {
      tmpStr: this.initStr,
      runStr: "{%s}秒后重试",
      resetStr: "重新获取",
      timer: null,
      start: false,
      runSecond: this.second,
      lastSecond: 0
    };
  },
  props: {
    initStr: {
      type: String,
      default: "获取验证码"
    },
    second: {
      default: 60,
      validator(val) {
        return /^\d*$/.test(val);
      }
    },
    value: {
      default: false,
      type: Boolean
    },
    storageKey: {
      default: "SendCaptchaStorageKey",
      type: String
    }
  },
  methods: {
    run() {
      let lastSecond = this.lastSecond;
      let second = lastSecond ? lastSecond : this.runSecond;
      if (this.storageKey) {
        const runSecond = new Date().getTime() + second * 1000;
        window.sessionStorage.setItem(this.storageKey, runSecond);
      }
      if (!lastSecond) {
        this.tmpStr = this.getStr(second);
      }
      this.timer = setInterval(() => {
        second--;
        this.tmpStr = this.getStr(second);
        second <= 0 && this.timeout();
      }, 1000);
    },
    timeout() {
      this.tmpStr = this.resetStr;
      this.start = false;
      this.$emit("input", false);
      clearInterval(this.timer);
    },
    getStr(second) {
      return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g, second);
    },
    handleClick() {
      // this.start = true;
      this.$emit("click");
    }
  },
  watch: {
    value(val) {
      this.start = val;
      if (!val) {
        clearInterval(this.timer);
        if (this.storageKey) {
          window.sessionStorage.removeItem(this.storageKey);
          this.lastSecond = 0;
        }
      } else {
        this.run();
      }
    }
  },
  created() {
    const lastSecond = ~~(
      (window.sessionStorage.getItem(this.storageKey) - new Date().getTime()) /
      1000
    );
    if (lastSecond > 0 && this.storageKey) {
      this.$emit("input", true);
      this.tmpStr = this.getStr(lastSecond);
      this.lastSecond = lastSecond;
    }
  },
  beforeDestroy() {
    !this.storageKey && this.timeout();
  }
};
export default SendCaptchaButton;
</script>