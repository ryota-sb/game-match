<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>Game Match</v-card-title>
        <div v-if="loggedIn">
          <v-card-text>ログイン中</v-card-text>
          <v-card-text>{{ getIdToken }}</v-card-text>
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
  computed: {
    loggedIn() {
      return this.$auth0.isAuthenticated()
    },
    getIdToken() {
      return window.localStorage.getItem('idToken')
    }
  }
}
</script>
