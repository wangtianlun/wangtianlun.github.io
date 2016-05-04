<template lang="jade">
  .app
    .content
      router-view(class="view" transition-mode="out-in")
</template>

<script>

export default {
  data () {
    return {
      msg: 'Hello Vue1!'
    }
  }
}
</script>

<style lang="less">
@import "./style/common.less";

</style>
