<template>
  <v-row>
    <v-col>
      <v-card>
        <div v-if="loggedIn">
          <v-card-text>ログイン中</v-card-text>
          <v-card-text>{{ this.$auth0.getAccessToken() }}</v-card-text>
          <v-btn to="/logout" nuxt>ログアウト</v-btn>
        </div>
        <div v-else>
          <v-card-text>ログインしていません</v-card-text>
          <v-btn to="/login" nuxt>ログインする</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.authentication.isAuth)
  },
  computed: {
    loggedIn() {
      return this.$auth0.isAuthenticated()
    }
  }
}
</script>
