<template>
  <div>
    <section class="mb-5">
      <v-parallax src="img/ogp/home.jpg" height="300">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-center">
            <b>{{ $t(siteName) }} </b>
          </h1>
          <v-btn
            large
            class="mt-5"
            :to="
              localePath({
                name: 'list',
              })
            "
            color="primary"
            >{{ $t('閲覧する') }}</v-btn
          >
        </v-layout>
      </v-parallax>
    </section>

    <v-container>
      <!--
      <v-row>
        <v-col col="6">
          <v-card flat outlined :to="localePath({ name: 'status' })">
            <div class="text-center pa-5">登録状況</div>
          </v-card>
        </v-col>
        <v-col col="6">
          <v-card flat outlined :to="localePath({ name: 'update' })">
            <div class="text-center pa-5">更新履歴</div>
          </v-card>
        </v-col>
      </v-row>
      -->
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      siteName: process.env.siteName,
    }
  },
  head() {
    const title = this.$t(this.siteName)
    return {
      titleTemplate: null,
      title,
    }
  },
}
</script>
