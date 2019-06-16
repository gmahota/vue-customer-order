<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <div>
          <v-toolbar flat color="white">
            <v-toolbar-title>Lista de Clientes</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">Novo</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container grid-list-md>
                   
                    <v-layout wrap>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.code" label="Codigo"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.name" label="Descrição"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.contact[0].mobile" label="Telefone"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
                  <v-btn color="blue darken-1" flat @click="save">Gravar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table :headers="headers" :items="customers" class="elevation-1">
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.id }}</td>
              <td class="text-xs-left">{{ props.item.code }}</td>
              <td class="text-xs-left">{{ props.item.name }}</td>
              <td class="text-xs-left">{{ props.item.email }}</td>
              <td class="text-xs-left">{{ props.item.contact[0].mobile }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
 
<script>
export default {
  name: "CustomerList",
  data() {
    return {
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
          visibility: "hidden"
        },
        { text: "Codigo", value: "code" },
        { text: "Nome", value: "name" },
        { text: "Email", value: "email" },
        { text: "Telefone", value: "mobile" }
      ],
      editedIndex: -1,
      editedItem: {
        id: 0,
          code: "",
          name: "",
          desc: "",
          email: "",
          contact:[
            { 
                id: 0, code:"", district:"", city:"", address:"",
                zone:"",mobile:"",primary: true
            }
          ],
          type: "Client",
          status: "Aberto",
          other: ""
      },
      defaultItem: {
        id: 0,
          code: "",
          name: "",
          desc: "",
          email: "",
          contact:[
            { 
                id: 0, code:"", district:"", city:"", address:"",
                zone:"",mobile:"",primary: true
            }
          ],
          type: "Client",
          status: "Aberto",
          other: ""
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo" : "Novo";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.customers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.customers.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.customers.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.customers[this.editedIndex], this.editedItem);
      } else {
        this.customers.push(this.editedItem);
      }
      this.close();
    }
  },

  //CHANGE: Add the 'removeBook' prop
  props: ["customers"]
};
</script>