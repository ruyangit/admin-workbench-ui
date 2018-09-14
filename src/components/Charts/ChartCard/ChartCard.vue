<template>
    <a-card :loading="loading" :bodyStyle="{padding: '20px 24px 8px 24px'}">
        <div class="chartCard" >
            <div :class="classNames('chartTop',{['chartTopMargin']:!$slots.default && !$slots.footer})">
                <div class="avatar">{{avatar}}</div>
                <div class="metaWrap">
                    <div class="meta">
                      <span class="title">{{title}}</span>
                      <span class="action">
                        <slot name="action"></slot>
                      </span>
                    </div>
                    <div class="total" v-if="total">{{total}}</div>
                </div>
            </div>
            <div class="content" ref="cardRef" :style="{height: contentHeight || 'auto'}" v-if="$slots.default">
              <div class="contentFixed">
                <slot></slot>
              </div>
            </div>
              <div v-if="$slots.footer" :class="classNames('footer',{['footerMargin']:!$slots.default})">
                <slot name="footer"></slot>
              </div>
        </div>
    </a-card>
</template>

<script>
import { Card } from "ant-design-vue";
import classNames from "classnames";
export default {
  props: {
    loading: { default: false, type: Boolean },
    avatar: { type: String },
    title: { type: String },
    action: { type: String },
    total: { type: String },
    contentHeight: { type: String }
  },
  components: {
    ACard: Card
  },
  methods: {
    classNames
  }
};
</script>
<style lang="less">
@import url("./index.less");
</style>