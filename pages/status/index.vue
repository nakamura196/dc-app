<template>
  <div>
    <v-sheet color="grey lighten-2">
      <v-container fluid class="py-2 px-0 mx-0">
        <v-breadcrumbs class="py-0" :items="bh">
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
    <v-container class="mt-5 mb-10" fluid>
      <h3 class="mb-5">{{ title }}</h3>
      <p class="mb-5">
        <span style="color: #4caf50">■</span>: 登録済み
        <span class="ml-5" style="color: #f44336">■</span>: 未登録
        <span class="ml-5" style="color: black">■</span>: 存在しない
      </p>
      <div id="tbl-bdr">
        <table style="width: 100%">
          <tr>
            <th></th>
            <th class="pa-1" colspan="54">Volume</th>
          </tr>
          <tr>
            <th></th>
            <th class="pa-1" v-for="n in 54" :key="n">{{ n }}</th>
          </tr>
          <tr v-for="(item, key) in items" :key="key">
            <td class="pa-1" :id="key">
              <template v-if="bib[key]">
                <a :href="bib[key]['公開元サイト']" target="_blank">{{
                  bib[key].name
                }}</a>
              </template>
              <template v-else>
                {{ '* ' + key }}
              </template>
            </td>
            <td
              v-for="n in 54"
              :key="n"
              :style="`background-color: ${getColor(item, n, key)};`"
            ></td>
          </tr>
        </table>
      </div>
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
        `https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/status.json`
      )

      const exists = await $axios.$get(
        `https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/exists.json`
      )

      const bib = await $axios.$get(
        `https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/data/bib.json`
      )

      return { items, exists, bib }
    }
  }

  get title() {
    return this.$t('登録状況')
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

  getColor(item: any, n: number, target: string) {
    const exists = (this as any).exists
    const n_zfill = String(n).padStart(2, '0')
    if (exists[target] && exists[target][n_zfill]) {
      return 'black'
    }
    return item[n_zfill] ? '#4CAF50' : '#F44336'
  }
}
</script>
<style>
#tbl-bdr table,
#tbl-bdr td,
#tbl-bdr th {
  border-collapse: collapse;
  border: 1px solid lightgray;
}
</style>
