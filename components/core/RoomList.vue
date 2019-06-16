<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <div>
          <v-toolbar flat color="white">
            <v-toolbar-title>Lista de Quartos</v-toolbar-title>
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
                        <v-text-field v-model="editedItem.desc" label="Descrição"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-combobox
                          v-model="editedItem.type"
                          :items="roomTypeList"
                          label="Selecione o Tipo de Quarto"
                        ></v-combobox>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-combobox
                          v-model="editedItem.status"
                          :items="roomStatusList"
                          label="Selecione o Estado"
                        ></v-combobox>
                        <!-- <v-text-field v-model="editedItem.status" label="Status"></v-text-field> -->
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
          <v-data-table :headers="headers" :items="rooms" class="elevation-1">
            <template v-slot:items="props">
              <td class="text-xs-left">{{ props.item.id }}</td>
              <td class="text-xs-left">{{ props.item.code }}</td>
              <td class="text-xs-left">{{ props.item.desc }}</td>
              <td class="text-xs-left">{{ props.item.type }}</td>
              <td class="text-xs-left">{{ props.item.status }}</td>
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
  name: "RoomList",
  data() {
    return {
      roomStatusList: [
        "Disponível",
        "Frigo contado",
        "Em Limpesa",
        "Em Manutenção"
      ],
      roomTypeList: ["Suite", "Duplo", "Simples","Casal"],
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
          visibility: "hidden"
        },
        { text: "Quarto", value: "code" },
        { text: "Descrição", value: "desc" },
        { text: "Tipo", value: "type" },
        { text: "Estado", value: "status" }
      ],
      editedIndex: -1,
      editedItem: {
        id: 0,
        code: "",
        desc: 0,
        type: "Simples",
        status: "Disponivel"
      },
      defaultItem: {
        id: 0,
        code: "",
        desc: 0,
        type: "Simples",
        status: "Disponivel"
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
      this.editedIndex = this.rooms.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.rooms.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.rooms.splice(index, 1);
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
        Object.assign(this.rooms[this.editedIndex], this.editedItem);
      } else {
        this.rooms.push(this.editedItem);
      }
      this.close();
    }
  },

  //CHANGE: Add the 'removeBook' prop
  props: ["rooms"],
  components: {
    room: () => import("@/components/core/Room.vue")
  }
};
</script>