<template>
  <div>
    <v-data-table :headers="headers" :items="catPuestos" :search="search" :loading="loadingTable">
      <template v-slot:top>
        <div class="d-flex justify-center">
          <v-text-field v-model="search" v-bind="inputSearch" class="mr-5" />
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn v-bind="attrs" v-on="on" icon class="ml-auto mr-5 mt-5" @click="getPuestos()">
                <v-icon color="primary">mdi-reload</v-icon>
              </v-btn>
            </template>
            <span>Recargar</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn v-bind="attrs" v-on="on" icon class="mr-5 mt-5" @click="openDialog()">
                <v-icon color="primary">mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Nuevo Registro</span>
          </v-tooltip>
        </div>
      </template>

      <template v-slot:[`item.acciones`]="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <v-btn v-bind="attrs" v-on="on" icon @click="openDialog(item)">
              <v-icon small>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Editar</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <v-btn v-bind="attrs" v-on="on" icon @click="openDialogDelete(item)">
              <v-icon small>mdi-trash-can</v-icon>
            </v-btn>
          </template>
          <span>Eliminar</span>
        </v-tooltip>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" persistent fullscreen hide-overlay transition="dialog-bottom-transition"
      style="padding-bottom: 30px;">
      <v-card color="fondo">
        <v-toolbar flat dark color="primary">
          <v-toolbar-title>{{ titleDialog }} Puesto</v-toolbar-title>
          <v-toolbar-items class="ml-auto">
            <v-btn text @click="validationForm()" :loading="loadingDialog">
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
            <v-btn dark text @click="closeDialog()" :loading="loadingDialog">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-form ref="form">
          <v-card class="my-card" elevation="5">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="puesto.nombre" label="Puesto" v-bind="inputText" :loading="loadingDialog" />
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="puesto.descripcion" label="Descripción" class="mr-3" v-bind="inputText"
                    :loading="loadingDialog" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" persistent width="500">
      <v-card>
        <v-card-title>Se eliminará el puesto de "{{ puestoDelete.nombre }}"</v-card-title>
        <v-card-actions>
          <v-btn text color="success" @click="closeDialogDelete()" :loading="loadingDelete">Cancelar</v-btn>
          <v-btn text color="error" @click="deletePuesto()" :loading="loadingDelete">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <MiAlerta ref="MiAlerta" />
  </div>
</template>

<script>
import axios from 'axios';
import MiAlerta from '@/MiAlerta.vue';

export default {
  components: {
    MiAlerta
  },
  data() {
    return {
      inputSearch: {
        clearable: true,
        class: "v-input__slot",
        label: "Buscar",
        clearIcon: 'mdi-close-circle',
        appendIcon: 'mdi-magnify',
        hideDetails: true,
      },
      inputText: {
        outlined: false,
        dense: false,
        required: true,
        rules: [
          (v) => {
            if (v === null || v === "") {
              return "Dato requerido";
            }
            return true;
          },
        ],
      },

      search: "",
      headers: [
        {
          text: "Puesto",
          value: "nombre",
          align: "center",
          sortable: false,
        }, {
          text: "Descripción",
          value: "descripcion",
          align: "center",
          sortable: false,
        }, {
          value: "acciones",
          align: "center",
          sortable: false,
        }
      ],
      catPuestos: [],

      puesto: {
        idPuesto: null,
        nombre: null,
        descripcion: null,
      },
      defaultPuesto: {
        idPuesto: null,
        nombre: null,
        descripcion: null,
      },

      puestoDelete: {
        idPuesto: null,
        nombre: null,
        descripcion: null,
      },
      defaultPuestoDelete: {
        idPuesto: null,
        nombre: null,
        descripcion: null,
      },

      idPuesto: null,

      titleDialog: "",
      dialog: false,
      dialogDelete: false,

      loadingTable: false,
      loadingDialog: false,
      loadingDelete: false,
    }
  },
  methods: {
    mountedComponente() {
      this.getPuestos();
    },

    getPuestos() {
      this.loadingTable = true;
      axios
        .get("Puesto/Listar")
        .then((response) => {
          this.catPuestos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loadingTable = false;
        })
    },
    postPuesto() {
      this.loadingDialog = true;
      axios
        .post("Puesto/Crear", this.puesto)
        .then((response) => {
          this.miAlerta(200)
          this.getPuestos();
          this.closeDialog()
        })
        .catch((error) => {
          console.log(error)
          this.miAlerta(500)
        })
        .finally(() => {
          this.loadingDialog = false;
        })
    },
    putPuesto() {
      this.loadingDialog = true;
      axios
        .put("Puesto/Actualizar/" + this.idPuesto, this.puesto)
        .then((response) => {
          this.miAlerta(200)
          this.getPuestos();
          this.closeDialog()
        })
        .catch((error) => {
          console.log(error)
          this.miAlerta(500)
        })
        .finally(() => {
          this.loadingDialog = false;
        })
    },
    deletePuesto() {
      this.loadingDelete = true;
      axios
        .put("Puesto/Desactivar/" + this.idPuesto)
        .then((response) => {
          this.miAlerta(200)
          this.getPuestos();
          this.closeDialogDelete()
        })
        .catch((error) => {
          console.log(error)
          this.miAlerta(500)
        })
        .finally(() => {
          this.loadingDelete = false;
        })
    },

    validationForm() {
      if (this.$refs.form.validate()) {
        this.titleDialog === "Nuevo" ? this.postPuesto() : this.putPuesto();
      }
    },

    openDialog(item) {
      this.dialog = true;
      this.titleDialog = item ? "Editar" : "Nuevo";

      if (item) {
        this.idPuesto = item.idPuesto;
        this.puesto = Object.assign({}, item);
      }
    },
    closeDialog() {
      this.dialog = false;
      this.puesto = Object.assign({}, this.defaultPuesto);
      this.idPuesto = null;
      this.$refs.form.reset();
    },

    openDialogDelete(item) {
      this.puestoDelete = Object.assign({}, item)
      this.idPuesto = item.idPuesto;
      this.dialogDelete = true;
    },
    closeDialogDelete() {
      this.dialogDelete = false;
      this.puestoDelete = Object.assign({}, this.defaultPuesto);
    },

    miAlerta(code) {
      this.$refs.MiAlerta.mostrar(code);
    },
  },
  mounted() {
    this.mountedComponente();
  },
}
</script>

<style scoped></style>