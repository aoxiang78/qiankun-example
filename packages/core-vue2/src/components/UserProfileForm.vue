<template>
  <div>
    <form @submit="handleSubmit">
      <label>
        Name:
        <input type="text" v-model="user.name" />
      </label>
      <label>
        Public email:
        <select  v-model="user.email">
          <option value="">Select a verified email to display</option>
          <option value="you@example.com">you@example.com</option>
        </select>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return { user: JSON.parse(JSON.stringify(this.$store.state.globalModel)) }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.$store.dispatch('globalModel/setGlobalModel', this.user)
    }
  }
}
</script>
