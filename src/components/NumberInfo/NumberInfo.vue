<template>
    <div :class="cls">
        <div v-if="title" class="numberInfoTitle">
            {{title}}
        </div>
        <div v-if="subTitle" class="numberInfoSubTitle">
            {{subTitle}}
        </div>
        <div class="numberInfoValue" :style="{'margin-top:gap':gap}">
        <span>
            {{total}}
                <em v-if="suffix" class="suffix">{{suffix}}</em>
        </span>

            <span v-if="status || subTotal" class="subTotal">
            {{subTotal}}
            <a-icon v-if="status" :type="`caret-${status}`" />}
            </span>
        </div>
    </div>
</template>

<script>
import { Icon } from "ant-design-vue";
import classNames from "classnames";
export default {
  props: [
    "theme",
    "title",
    "subTitle",
    "total",
    "subTotal",
    "status",
    "suffix",
    "gap"
  ],
  components: {
    AIcon: Icon
  },
  computed: {
    cls() {
      const { theme } = this;
      return classNames("numberInfo", {
        ["numberInfo" + theme]: theme
      });
    }
  }
};
</script>