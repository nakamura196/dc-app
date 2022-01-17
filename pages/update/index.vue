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
      <h2>{{ title }}</h2>

      <v-card
        flat
        outlined
        v-for="(item, key) in items"
        :key="key"
        class="mt-5"
      >
        <div class="pa-4">
          <span class="success--text">{{ getDate(item.date) }}</span
          ><br />
          <b>{{ item.user }}</b> さんが <b>{{ getName(item) }}</b> の第
          <b>{{ item.vol }}</b> 巻を追加しました。
        </div>
      </v-card>

      <!--  class="mt-5 py-5" -->
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
//
// import * as algoliasearch from 'algoliasearch'
// import config from '@/plugins/algolia.config.js'

@Component({
  components: {},
})
export default class Item extends Vue {
  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { result: payload }
    } else {
      const items = await $axios.$get(
        //`https://nakamura196.github.io/kocr/runs/model_codh/update.json`
        `https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/update.json`
      )

      items.reverse()

      const bib = await $axios.$get(
        `https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/bib.json`
      )

      return { items, bib }
    }
  }

  get title() {
    return this.$t('更新履歴')
  }

  getDate(unixtime: number) {
    let dateTime = new Date(unixtime * 1000)
    return dateTime.toLocaleString('ja-JP')
  }

  get bh() {
    return [
      {
        text: this.$t('top'),
        disabled: false,
        href: 'https://genji.dl.itc.u-tokyo.ac.jp',
        exact: true,
      },
      {
        text: this.$t('genji-ai'),
        disabled: false,
        to: this.localePath({ name: 'index' }),
        exact: true,
      },
      {
        text: this.title,
      },
    ]
  }

  getName(item: any) {
    let id = item.id
    let target = id.split('-')[0]
    const bib = (this as any).bib
    if (bib[target]) {
      return bib[target].name
    } else {
      return target
    }
  }
}
</script>
