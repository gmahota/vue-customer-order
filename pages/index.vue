<template>
  <div id="home">
    <articles>
      <banner />
    </articles>

    <about />

    <subscribe />

    <social />
  </div>


  <!-- <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center row fill-height>

      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">

          </v-carousel-item>
        </v-carousel>
      </v-flex>
      <v-flex xs12>
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
    </v-layout>
  </v-container> -->
</template>

<script>
//Template: https://free-blog.vuetifyjs.com/?ref=vuetifyjs.com
  export default {
    name: 'Home',
    components: {
      About: () => import('@/components/home/About'),
      Articles: () => import('@/components/home/Articles'),
      Banner: () => import('@/components/home/Banner'),
      Social: () => import('@/components/home/Social'),
      Subscribe: () => import('@/components/home/Subscribe')
    }
  }
</script>

