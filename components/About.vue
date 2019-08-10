<template>
  <div class="about">
    <section class="about-contact">
      <a href="https://github.com/YanKnAun">Github</a>
      ·
      <a href="mailto:758915673@qq.com">Email</a>
      ·
      xxxx
    </section>

    <section class="about-right">
      © 2019 YAN
    </section>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/style/variables.less';

.about {
  cursor: default;
  margin-bottom: @gapOuter;
  background-color: #ffffffc4;
  &-contact {
    color: @monorFontColor;
    margin-bottom: @gapInner;
    a {
      text-decoration: none;
      color: @monorFontColor;
    }
  }
  &-right {
    color: @monorFontColor;
  }
}
</style>
