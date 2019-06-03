<template>
  <v-layout column justify-center align-center>
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

                  <v-card-text class="headline font-weight-bold">{{order.customer}}</v-card-text>

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

    <v-btn fab bottom right color="blue" dark fixed @click="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">Janela de Pedido</v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs6>
              <v-text-field prepend-icon="order" placeholder="Nr. Pedido"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field placeholder="Cliente"></v-text-field>
            </v-flex>

            <v-flex xs12 lg6>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="computedDateFormatted"
                    label="Data"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
              <!-- <p>
                Date in ISO format:
                <strong>{{ date }}</strong>
              </p> -->
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancelar</v-btn>
          <v-btn flat @click="dialog = false">Gravar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    title: "services",
    dialog: false,
    drawer: false,
    date: new Date().toISOString().substr(0, 10),
    //dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    orders: [
      {
        orderId: "1/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#c5deea"
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
      },
      {
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
        orderId: "7/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "8/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "9/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "10/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "11/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      },
      {
        orderId: "12/2019",
        customer: "Guimarães Mahota",
        dueDate: "22/05/2019 21:10:00",
        color: "#FFFFFF"
      }
    ]
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  },
  props: {
    source: String
  }
};
</script>

