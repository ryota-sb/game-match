<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>Game Match</v-card-title>
        <v-card-text v-if="loggedIn">ログイン中</v-card-text>
        <v-card-text v-else>ログインしていません</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$auth0.isAuthenticated()
    }
  }
}
</script>
