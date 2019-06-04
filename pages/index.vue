<template>
  <v-container grid-list-md text-xs-center>
    <v-layout aalign-center justify-center row fill-height>
      <v-flex xs6>
        <v-card flat>
              <v-card-text>
                <v-layout align-center mb-3>
                  <v-avatar color="grey" class="mr-3"></v-avatar>
                  <strong class="title">BEM VINDO AO AGNUS CRM</strong>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-account</v-icon>
                  </v-btn>
                </v-layout>

                <p>Nos dias de hoje, as Organizações procuram integração, automatização e mobilidade nos processos de negócio. </p>

                <p>A integração, automatização e amobilidade tornam-se aspectos estratégicos para reduzir custos, complexidade e tempo, assim como para aumentar a produtividade.</p>

                <p>A satisfação do cliente e a performance de TI. Com estas questões em mente, apresentamos os nossos produtos.</p>
              </v-card-text>
            </v-card>

      </v-flex>
      <v-flex xs6>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" ></v-carousel-item>
        </v-carousel>
      </v-flex>

      

    </v-layout>


    <v-row-expand-transition>
      <v-flex xs6>
        <v-sheet height="500">
          <h1> Roadmap</h1>
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

