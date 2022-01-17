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
      <h3 class="mb-5">コレクション一覧</h3>
      <v-row>
        <v-col col="6" md="4" v-for="(item, key) in items" :key="key">
          <v-card
            flat
            outlined
            :to="
              localePath({
                //name: 'item-collection-index',
                //params: { collection: item.value },
                name: 'collection',
                params: { collection: item.value },
              })
            "
          >
            <div class="text-center pa-5">{{ item.label }}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Item extends Vue {
  /*
  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { result: payload }
    } else {
      const id = app.context.params.id

      const response = await $axios.$get(
        //`https://nakamura196.github.io/kocr/runs/model_codh/item/${id}.json`
        `https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/item/${id}.json`
      )

      const bib = await $axios.$get(
        `https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/bib.json`
      )

      let item = response //[id]

      return { item, bib }
    }
  }
  */

  items: any[] = [
    {
      value: 'ise',
      label: '伊勢物語',
    },
    {
      value: 'eiga',
      label: '栄花物語',
    },
    {
      value: 'ookagami',
      label: '大鏡',
    },
  ]

  baseUrl: any = process.env.BASE_URL

  head() {
    const title = this.title
    return {
      title,
    }
  }

  created() {}

  get title() {
    return (this as any).$t('list')
  }

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
