<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-4">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>

    <v-container class="my-5">
      <h3 class="mb-10">{{ title }}</h3>
      <div class="text-center mt-5">
        <v-btn
          class="mx-1"
          color="primary"
          depressed
          rounded
          :to="
            localePath({
              /*
              name: 'item-id-viewer',
              params: {
                id,
              },
              query,
              */
            })
          "
          >{{ $t('新編 日本古典文学全集 でみる')
          }}</v-btn
        >
        </div>
    </v-container>

    <SimilarItems2 :item="item" />
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { result: payload }
    } else {
      const collection = app.context.params.collection
      const id = app.context.params.id

      const response = await $axios.$get(
        `https://raw.githubusercontent.com/nakamura196/dc/main/docs/item/${collection}/${id}.json`
      )

      let item = response

      return { item }
    }
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }

  title: any = "新編 日本古典文学全集 p." + Number(this.$route.params.id)

  get bh() {
    let collection = this.$route.params.collection
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.$t(collection),
        disabled: false,
        to: this.localePath({
          name: 'collection',
          params: { collection },
        }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
