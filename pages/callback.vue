<template>
  <p>waiting ...</p>
</template>

<script>
export default {
  mounted() {
    this.$auth0.setTokenByQuery()
    this.$store.dispatch('authentication/logIn')
    this.login()
    this.$router.replace('/')
  },
  methods: {
    async login() {
      const uri = "http://localhost:3000/api/v1/login"
      const headers = { Authorization: `Bearer ${this.$auth0.getAccessToken()}` }
      await this.$axios.get(uri, { headers: headers }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
