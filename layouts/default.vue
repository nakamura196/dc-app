<template>
  <v-app>
    <div>
      <v-navigation-drawer v-model="drawer" app :temporary="true" width="300">
        <v-list>
          <v-list-item link :to="localePath({ name: 'index' })">
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>
          <nuxt-link
            :to="
              localePath({
                name: 'index',
              })
            "
            style="color: inherit; text-decoration: inherit"
          >
            {{ $t(siteName) }}
          </nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn depressed btn v-on="on">
              <v-icon class="mr-2">mdi-translate</v-icon>
              <!-- v-if="$vuetify.breakpoint.name != 'xs'" -->
              <template v-if="false">
                {{ $i18n.locale == 'ja' ? '日本語' : 'English' }}
                <v-icon class="ml-2">mdi-menu-down</v-icon></template
              >
            </v-btn>
          </template>

          <v-list>
            <v-list-item :to="switchLocalePath('ja')">
              <v-list-item-title>日本語</v-list-item-title>
            </v-list-item>
            <v-list-item :to="switchLocalePath('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer :dark="true" class="mt-5">
      <v-container>
        <p class="text-center my-5">裏源氏勉強会</p>
      </v-container>
    </v-footer>

    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      large
      color="error"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class search extends Vue {
  fab: boolean = false

  drawer: boolean = false
  baseUrl: string = process.env.BASE_URL || ''
  siteName: string = process.env.siteName || ''

  // isSignedIn: boolean = false;

  created() {}

  onScroll(e: any): void {
    if (typeof window === 'undefined') return
    const top = window.pageYOffset || e.target.scrollTop || 0
    this.fab = top > 20
  }

  toTop(): void {
    // @ts-ignore
    this.$vuetify.goTo(0)
  }
}
</script>
<style>
a {
  text-decoration: none;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
* {
  text-transform: none;
}
</style>
