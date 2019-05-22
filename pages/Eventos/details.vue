<template>
  <v-layout column justify-center align-center>

    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-flex xs12 sm8 md6>
      
       <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>
              <v-flex
                v-for="card in cards"
                :key="card.title"
                v-bind="{ [`xs${card.flex}`]: true }"
              >
                <v-hover>
                  <v-card  slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    class="mx-auto">
                    
                    <v-img
                      :src="card.src"
                      height="200px" 
                      aspect-ratio="16/9"
                      
                    >
                      <v-container
                        fill-height
                        fluid
                        pa-2
                      >
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
    
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>bookmark</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>share</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                

                </v-hover>

                <NuxtLink :to="'/eventos/details?'+card.cardId">
                    {{ card.title }}
                </NuxtLink>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>

        <div class="right">
            <NuxtChild :key="$route.params.id" />
        </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    title:'services',
    cards: [
      { cardId:1, title: 'Desafio N4', src: require('~/assets/eventos/desafio1.png') , flex: 12,date : '' },
      { cardId:2, title: 'Desafio Bilene', src: require('~/assets/eventos/desafio2.png'), flex: 6 },
      { cardId:3, title: 'Desafio Papilon', src: require('~/assets/eventos/desafio3.png'), flex: 6 }
    ],
    items: [
      {
        text: 'Eventos',
        disabled: false,
        href: '/'
      },
      {
        text: 'Ciclismo',
        disabled: false,
        href: '/'
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }
    ]
  })
}
</script>
