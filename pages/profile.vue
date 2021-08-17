<template>
  <v-row>
    <v-col>
      <v-form>
        <v-text-field
          v-model="discord_id"
          label="自分のディスコードID"
        />
        <v-text-field
          v-model="message"
          label="自己紹介メッセージ入力欄"
        />
      </v-form>
      <v-btn @click="createProfile">Profile作成</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      discord_id: null,
      message: null
    }
  },
  methods: {
    async createProfile() {
      const uri = 'http://localhost:3000/api/v1/profiles'
      const params = {
        discord_id: this.discord_id,
        message: this.message
      }
      const headers = {
        Authorization: `Bearer ${this.$auth0.getAccessToken()}`
      }
      await this.$axios.post(uri, params, { headers: headers }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
