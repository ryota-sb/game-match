<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>{{ this.$auth.$state.user.sub }}</v-card-title>
        <v-card-title>{{ this.$auth.$state }}</v-card-title>
        <v-btn @click="logout">logout</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
