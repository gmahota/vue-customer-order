<template>
  <v-layout column justify-center align-center>
    <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div>

    <v-flex xs12 sm8 md6>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="order in orders" :key="order.orderId">
              <v-hover>
                <v-card
                 :color="order.color"
                  max-width="200"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                >
                  <v-card-title>
                    Pedido:
                    <span class="title font-weight-light">{{order.orderId}}</span>
                  </v-card-title>

                  <v-card-text
                    class="headline font-weight-bold"
                  >{{order.customer}}</v-card-text>

                  <v-card-actions>
                    <v-list-tile class="grow">
                    
                      <v-list-tile-content>
                        <v-list-tile-title>{{order.dueDate}}</v-list-tile-title>
                      </v-list-tile-content>

                      
                    </v-list-tile>
                  </v-card-actions>
     
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    title: "services",
    orders: [
      {
        orderId: "1/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: '#c5deea'
      },
      {
        orderId: "2/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#F44336"
      },
      {
       orderId: "3/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      }, {
        orderId: "4/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#E91E63"
      },
      {
        orderId: "5/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#F44336"
      },
      {
       orderId: "6/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "1/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "2/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
       orderId: "3/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      }, {
        orderId: "4/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "5/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
       orderId: "6/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00"
        ,
        color: "#FFFFFF"
      }
    ]
  })
};
</script>
