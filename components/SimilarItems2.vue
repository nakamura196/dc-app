<template>
  <div>
    <v-sheet class="pa-4 my-5" color="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" :sm="8"
            ><h3>類似度の高い見開きページ</h3>
            <!--
            <div class="my-0">
              <ul>
                <li>
                  『校異源氏物語』のテキストデータと、くずし字OCR結果のテキストデータ間の編集距離を用いて、類似度の高い見開きページを表示しています。詳細については、<nuxt-link
                    :to="localePath({ name: 'about' })"
                    >{{ $t('about-ai') }}</nuxt-link
                  >
                  をご確認ください。
                </li>
              </ul>
            </div>
            -->
          </v-col>
          <v-col cols="12" :sm="4"
            ><v-select
              v-model="select"
              :items="items"
              :label="$t('target')"
            ></v-select
          ></v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container>
      <v-row>
        <template v-for="(arr, attr) in arr">
          <v-col
            cols="12"
            md="6"
            v-if="select == 'all' || attr == select"
            :key="attr"
          >
            <h3 class="mb-3 mt-5">
              {{ labels[attr] }}

              <template v-if="bib[attr]">
                <v-menu
                  v-if="!['', '?'].includes(bib[attr]['書誌情報'])"
                  :close-on-content-click="false"
                  :nudge-width="200"
                  offset-x
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ma-1"
                      v-bind="attrs"
                      depressed
                      rounded
                      small
                      v-on="on"
                      color="primary"
                      >書誌情報をみる</v-btn
                    >
                  </template>

                  <v-card>
                    <v-list>
                      <v-list-item
                        v-for="(item, key) in bib[attr]['書誌情報'].split('\n')"
                        :key="key"
                      >
                        <v-list-item-title>{{ item }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-menu>

                <v-btn
                  v-if="bib[attr]['公開元サイト']"
                  color="primary"
                  text
                  small
                  class="ma-1"
                  target="_blank"
                  :href="bib[attr]['公開元サイト']"
                >
                  公開元サイトをみる
                  <v-icon class="ml-1">mdi-open-in-new</v-icon>
                </v-btn>
              </template>
            </h3>

            <ul class="horizontal-list">
              <li v-for="(obj, index) in arr" :key="index" class="item">
                <v-card
                  style="width: 300px"
                  :key="index"
                  class="mb-5"
                  flat
                  outlined
                  :style="
                    item.koui && item.koui.includes(obj.objectID)
                      ? 'background-color : #FFF59D'
                      : ''
                  "
                >
                  <a
                    :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=${obj.manifest}&canvas=${obj.canvas}`"
                    target="_blank"
                  >
                    <v-img
                      :src="obj.image"
                      contain
                      style="height: 150px"
                      width="100%"
                      class="grey lighten-2"
                    ></v-img>
                  </a>

                  <div class="pa-4" style="height: 120px; overflow-y: auto">
                    <a
                      :href="`http://codh.rois.ac.jp/software/iiif-curation-viewer/demo/?manifest=${obj.manifest}&canvas=${obj.canvas}`"
                      target="_blank"
                    >
                      <b> {{ obj.vol_str }} {{ obj.page }}{{ obj.type }} </b>
                    </a>

                    <div class="" v-if="obj.line">
                      <small
                        >先頭行と最も類似度が高い行:
                        {{ Number(obj.line) }}</small
                      >
                    </div>

                    <div v-if="obj.curation" class="mt-2">
                      <v-btn
                        icon
                        :href="`http://codh.rois.ac.jp/software/kuronet-text-editor/demo/?curation=https://raw.githubusercontent.com/nakamura196/kocr/main/docs/runs/model_codh/output/${attr}-${String(
                          obj.vol
                        ).padStart(2, '0')}/json/curation.json&canvas=${
                          obj.canvas
                        }`"
                        target="_blank"
                      >
                        <v-icon>mdi-ocr</v-icon>
                      </v-btn>
                    </div>
                  </div>
                  <v-card-actions class="pa-0">
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </li>
            </ul>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component /*, Watch */ } from 'vue-property-decorator'

import axios from 'axios'

@Component
export default class SimilarItems extends Vue {
  @Prop({ default: {} })
  item!: any

  legend: any = {}

  baseUrl: any = process.env.BASE_URL

  arr: any[] = []

  select: string = 'all'

  items: any[] = []

  labels: any = {}

  bib: any = {}

  async created() {
    const data: any = {}

    const item = this.item

    const itemSetIds: any[] = [
      {
        text: this.$t('all') + `（${Object.keys(item.related).length}）`,
        value: 'all',
      },
    ]

    const related = item.related

    const labels: any = {}
    for (let itemSetId in related) {
      let text = data[itemSetId] ? data[itemSetId].name : itemSetId

      itemSetIds.push({
        value: itemSetId,
        text,
      })

      labels[itemSetId] = text
    }

    this.items = itemSetIds

    this.arr = related

    this.labels = labels

    this.bib = data
  }
}
</script>
<style>
.horizontal-list {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  padding-left: 0px !important;
  padding-right: 0px;
}
.item {
  /* 横スクロール用 */
  display: inline-block;
  /* 見た目調整 */
  margin-right: 16px;
}
</style>
