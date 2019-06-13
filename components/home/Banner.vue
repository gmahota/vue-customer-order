<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="require('@/assets/background/bg7.jpg')"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light">
            Por traz das Tecnologias
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Encontre soluções para todos os todos os seus problemas com a informação digital
          </div>
          <v-btn
            color="primary"
            depressed
            round
          >
            Subscribe
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>