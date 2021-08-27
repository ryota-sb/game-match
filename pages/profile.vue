<template>
  <v-row>
    <v-col>
      <v-form>
        <v-file-input
          accept="image/*"
          label="プロフィール画像の選択"
          @change="imagePicked"
        />
        <v-img 
          v-if="uploadImageUrl"
          :src="uploadImageUrl"
          max-width="150"
          max-height="150"
        />
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
      message: null,
      uploadImageUrl: null
    }
  },
  methods: {
    async createProfile() {
      const uri = 'http://localhost:3000/api/v1/profiles'
      const params = {
        discord_id: this.discord_id,
        message: this.message,
        image: this.uploadImageUrl
      }
      const headers = { Authorization: `Bearer ${this.$auth0.getAccessToken()}` }
      await this.$axios.post(uri, params, { headers: headers }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    imagePicked(file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(file)
        fr.addEventListener('load', () => {
          this.uploadImageUrl = fr.result
          console.log(this.uploadImageUrl)
        })
      } else {
        this.uploadImageUrl = null
      }
    }
  }
}
</script>
