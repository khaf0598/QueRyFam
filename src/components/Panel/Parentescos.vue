<template>
  <div>
    <v-data-table :headers="headers" :items="catParentescos" :search="search" :loading="loadingTable">
      <template v-slot:top>
        <div class="d-flex justify-center">
          <v-text-field v-model="search" v-bind="inputSearch" class="ml-auto mr-5" />
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn v-bind="attrs" v-on="on" icon class="ml-auto mr-5 mt-5" @click="getParentescos()">
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
          <v-toolbar-title>{{ titleDialog }} Parentesco</v-toolbar-title>
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
                  <v-text-field v-model="parentesco.nombre" label="Parentesco" v-bind="inputText"
                    :loading="loadingDialog" />
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="parentesco.descripcion" label="Descripción" class="mr-3" v-bind="inputText"
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
        <v-card-title>Se eliminará el parentesco de "{{ parentescoDelete.nombre }}"</v-card-title>
        <v-card-actions>
          <v-btn text color="success" @click="closeDialogDelete()" :loading="loadingDelete">Cancelar</v-btn>
          <v-btn text color="error" @click="deletePuesto()" :loading="loadingDelete">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <MiAlerta ref="MiAlerta"/>
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
          text: "Parentesco",
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
      catParentescos: [],

      parentesco: {
        idParentesco: null,
        nombre: null,
        descripcion: null,
      },
      defaultParentesco: {
        idParentesco: null,
        nombre: null,
        descripcion: null,
      },

      parentescoDelete: {
        idParentesco: null,
        nombre: null,
        descripcion: null,
      },
      defaultParentescoDelete: {
        idParentesco: null,
        nombre: null,
        descripcion: null,
      },

      idParentesco: null,

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
      this.getParentescos();
    },
    getParentescos() {
      this.loadingTable = true;
      axios
        .get("Parentesco/Listar")
        .then((response) => {
          this.catParentescos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loadingTable = false;
        })
    },
    postParentesco() {
      this.loadingDialog = true;
      axios
        .post("Parentesco/Crear", this.parentesco)
        .then((response) => {
          this.miAlerta(200);
          this.getParentescos();
          this.closeDialog()
        })
        .catch((error) => {
          console.log(error);
          this.miAlerta(500)
        })
        .finally(() => {
          this.loadingDialog = false;
        })
    },
    putParentesco() {
      this.loadingDialog = true;
      axios
        .put("Parentesco/Actualizar/" + this.idParentesco, this.parentesco)
        .then((response) => {
          this.miAlerta(200);
          this.getParentescos();
          this.closeDialog()
        })
        .catch((error) => {
          console.log(error);
          this.miAlerta(500)
        })
        .finally(() => {
          this.loadingDialog = false;
        })
    },
    deletePuesto() {
      this.loadingDelete = true;
      axios
        .put("Parentesco/Desactivar/" + this.idParentesco)
        .then((response) => {
          this.miAlerta(200);
          this.getParentescos();
          this.closeDialogDelete()
        })
        .catch((error) => {
          console.log(error);
          this.miAlerta(500)
        })
        .finally(() => {
          this.loadingDelete = false;
        })
    },

    validationForm() {
      if (this.$refs.form.validate()) {
        this.titleDialog === "Nuevo" ? this.postParentesco() : this.putParentesco();
      }
    },

    openDialog(item) {
      this.dialog = true;
      this.titleDialog = item ? "Editar" : "Nuevo";

      if (item) {
        this.idParentesco = item.idParentesco;
        this.parentesco = Object.assign({}, item);
      }
    },
    closeDialog() {
      this.dialog = false;
      this.parentesco = Object.assign({}, this.defaultParentesco);
      this.idParentesco = null;
      this.$refs.form.reset();
    },

    openDialogDelete(item) {
      this.parentescoDelete = Object.assign({}, item)
      this.idParentesco = item.idParentesco;
      this.dialogDelete = true;
    },
    closeDialogDelete() {
      this.dialogDelete = false;
      this.parentescoDelete = Object.assign({}, this.defaultParentesco);
    },

    miAlerta(code){
      this.$refs.MiAlerta.mostrar(code);
    },
  },
  mounted() {
    this.mountedComponente();
  },
}
</script>
  
<style scoped></style>