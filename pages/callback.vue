<template>
  <p>waiting ...</p>
</template>

<script>
export default {
  mounted() {
    this.$auth0.setTokenByQuery()
    this.$store.dispatch('logIn')
    this.$router.replace('/')
  }
}
</script>
