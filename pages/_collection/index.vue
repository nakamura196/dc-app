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

      <v-select :items="items" filled rounded v-model="page"></v-select>

      <v-btn color="primary" rounded depressed @click="move()">移動</v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Item extends Vue {
  baseUrl: any = process.env.BASE_URL

  page: any = null

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { result: payload }
    } else {
      const id = app.context.params.collection

      const response = await $axios.$get(
        `https://raw.githubusercontent.com/nakamura196/dc/main/docs/base/${id}.json`
      )

      let items = [] // = response

      for (const item of response) {
        items.push({
          text: item.page,
          value: item.objectID,
        })
      }

      return { items }
    }
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }

  move() {
    const page = this.page
    if (page) {
      this.$router.push(
        (this as any).localePath({
          name: 'collection-id',
          params: {
            collection: this.$route.params.collection,
            id: page,
          },
        })
      )
    }
  }

  title: any = this.$t(this.$route.params.collection)

  get bh() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }
}
</script>
