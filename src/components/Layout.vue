<template>
    <v-app>
      <v-navigation-drawer app>
         <v-card
            class="mx-auto"
            width="300"
          >
            <v-list>
              <v-list-item link>
                <v-list-item-icon>
                  <v-icon>home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-group
                prepend-icon="account_circle"
                value="true"
              >
                <template v-slot:activator>
                  <v-list-item-title>Users</v-list-item-title>
                </template>

                <v-list-group
                  no-action
                  sub-group
                  value="true"
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Admin</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="(admin, i) in admins"
                    :key="i"
                    link
                  >
                    <v-list-item-title v-text="admin[0]"></v-list-item-title>
                    <v-list-item-icon>
                      <v-icon v-text="admin[1]"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>

                <v-list-group
                  sub-group
                  no-action
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Actions</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item
                    v-for="(crud, i) in cruds"
                    :key="i"
                  >
                    <v-list-item-title v-text="crud[0]"></v-list-item-title>
                    <v-list-item-action>
                      <v-icon v-text="crud[1]"></v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-group>
              </v-list-group>
            </v-list>
          </v-card>
      </v-navigation-drawer>

      <v-app-bar app>
        <div style="width: 100%">
            Material Design
            <div class="float-right">
                <v-avatar>
                  <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                </v-avatar>
                <span>superuser</span>
                <!-- <v-btn text icon color="black" @click="darkTheme">
                    <v-icon>nights_stay</v-icon>
                </v-btn>
                <v-btn text icon color="amber" @click="lightTheme">
                    <v-icon>wb_sunny</v-icon>
                </v-btn>
                <v-btn text icon color="red">
                  <v-icon>power_settings_new</v-icon>
                </v-btn> -->

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn text icon color="black" @click="darkTheme" v-on="on">
                        <v-icon>nights_stay</v-icon>
                    </v-btn>
                  </template>
                  <span>夜间模式</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn text icon color="amber" @click="lightTheme" v-on="on">
                        <v-icon>wb_sunny</v-icon>
                    </v-btn>
                  </template>
                  <span>日间模式</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn text icon color="red" v-on="on">
                      <v-icon>power_settings_new</v-icon>
                    </v-btn>
                  </template>
                  <span>注销登录</span>
                </v-tooltip>
            </div>
        </div>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-content>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
            <!-- <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs> -->
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app>
        <p style="text-align: center;width: 100%">Copyright © 2019</p>
      </v-footer>
    </v-app>
</template>

<script>
export default {
  name: 'Layout',
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard'
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'about'
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }
    ],
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  }),
  methods: {
    lightTheme () {
      this.$vuetify.theme.isDark = false
    },
    darkTheme () {
      this.$vuetify.theme.isDark = true
    }
  }
}
</script>
