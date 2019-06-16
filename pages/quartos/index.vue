<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card >
        <h1>{{ msg }}</h1>

        <RoomList :rooms="rooms"/>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: "Home",
  //Note that our "data" object is returned from a function call;
  //this is required to ensure every instance has its own "data" object which can be managed independently
  data() {
    return {
      msg: "Gestão dos Quartos",
      //Eventually this hardcoded list will be replaced with data from our REST API
      rooms: [
        {
          id: 1,
          code: "Room 1",
          desc: "Quarto 1",
          type: "Suite",
          status: "Disponivel"
        },
        {
          id: 2,
          code: "Room 2",
          desc: "Quarto 2",
          type: "Duplo",
          status: "Em Manutenção"
        },
        {
          id: 3,
          code: "Room 3",
          desc: "Quarto 3",
          type: "Simples",
          status: "Reservado"
        }
      ]
    };
  },
  components: {
    RoomList: () => import("@/components/core/RoomList.vue")
  }
};
</script>