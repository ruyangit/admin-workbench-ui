<template>
   <LocaleProvider :locale='locale' >
        <div class='root'><router-view /></div>
     </LocaleProvider>
</template>

<script>
import { LocaleProvider } from "ant-design-vue";
export default {
  components: {
    LocaleProvider
  },
  computed: {
    locale() {
      return this.$i18n.messages[this.$i18n.locale];
    }
  }
};
</script>