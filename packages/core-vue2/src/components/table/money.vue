<template>
  <span>
    ￥{{data}}
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>
