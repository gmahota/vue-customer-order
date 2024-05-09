<template>
  <v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card >
        <h1>{{ msg }}</h1>

        <CustomerList :customers="customers"/>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>  
</template>

<script>
export default {
name: "Clientes",
  data() {
    return {
      msg: "Gestão de Clientes",
      //Eventually this hardcoded list will be replaced with data from our REST API
      customers: [
        {
          id: 1,
          code: "C001",
          name: "Andre Bastos Mahota",
          desc: "Guimarães Mahota",
          email: "adre.joao@gmail.com",
          contact:[
              { id: 1, code:"C001", district:"Maputo", city:"Maputo", address:"Maputo",zone:"Baixa",mobile:"+2583736366232",primary: true}
          ],
          type: "Client",
          status: "Aberto",
          other: "Cliente so vem na epoca de dezembro!!"
        },
        {
          id: 2,
          code: "C002",
          name: "Mario Joao",
          desc: "Mario Joao",
          email: "mario.joao@gmail.com",
          contact:[
            { 
                id: 1, code:"C001", district:"Maputo", city:"Maputo", address:"Maputo",
                zone:"Baixa",mobile:"+25882742342",primary: true
            }
          ],
          type: "Client",
          status: "Aberto",
          other: "Cliente so vem na epoca de dezembro!!"
        },
      ]
    };
  },
  components: {
    CustomerList: () => import("@/components/core/CustomerList.vue")
  }
}
</script>

<style>

</style>