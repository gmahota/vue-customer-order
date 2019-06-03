<template>
  <v-container>
    <v-row-expand-transition>
      <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-row-expand-transition>

    <v-row-expand-transition>
      <v-item-group v-model="window" class="shrink mr-4" mandatory tag="v-flex">
        <v-item v-for="n in length" :key="n">
          <div slot-scope="{ active, toggle }">
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon>mdi-record</v-icon>
            </v-btn>
          </div>
        </v-item>
      </v-item-group>

      <v-flex>
        <v-window v-model="window" class="elevation-1" vertical>
          <v-window-item v-for="n in length" :key="n">
            <v-card flat>
              <v-card-text>
                <v-layout align-center mb-3>
                  <v-avatar color="grey" class="mr-3"></v-avatar>
                  <strong class="title">Title {{ n }}</strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-layout>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-row-expand-transition>

    <v-row-expand-transition>
      <v-flex>
        <v-sheet height="500">
          <v-calendar :now="today" :value="today" color="primary">
            <template v-slot:day="{ present, past, date }">
              <v-layout fill-height>
                <template v-if="past && tracked[date]">
                  <v-sheet
                    v-for="(percent, i) in tracked[date]"
                    :key="i"
                    :title="category[i]"
                    :color="colors[i]"
                    :width="`${percent}%`"
                    height="100%"
                    tile
                  ></v-sheet>
                </template>
              </v-layout>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-row-expand-transition>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "Index",
    length: 3,
    window: 2,
    items: [
      {
        src: require("~/assets/background/bg3.jpg")
      },
      {
        src: require("~/assets/background/bg2.jpg")
      },
      {
        src: require("~/assets/background/bg6.jpg")
      },
      {
        src: require("~/assets/background/bg4.jpg")
      }
    ],
    today: "2019-01-10",
    tracked: {
      "2019-01-09": [23, 45, 10],
      "2019-01-08": [10],
      "2019-01-07": [0, 78, 5],
      "2019-01-06": [0, 0, 50],
      "2019-01-05": [0, 10, 23],
      "2019-01-04": [2, 90],
      "2019-01-03": [10, 32],
      "2019-01-02": [80, 10, 10],
      "2019-01-01": [20, 25, 10]
    },
    colors: ["#1867c0", "#fb8c00", "#000000"],
    category: ["Development", "Meetings", "Slacking"]
  })
};
</script>

