<template>
  <div>
    <v-data-table :headers="headers" :items="catTrabajadores" :search="search">
      <template v-slot:top>
        <div class="d-flex justify-center">
          <v-text-field v-model="search" v-bind="inputSearch" />
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn v-bind="attrs" v-on="on" icon class="ml-auto mr-5 mt-5" @click="getTrabajadores()">
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

      <!--<template v-slot:[`item.nombreCompleto`]="{ item }">
        {{ item.nombre }} {{ item.apellidoP }} {{ item.apellidoM }}
      </template>-->

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

        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <v-btn v-bind="attrs" v-on="on" icon @click="openPreview(item)">
              <v-icon small>mdi-eye</v-icon>
            </v-btn>
          </template>
          <span>Visualizar</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ attrs, on }">
            <v-btn v-bind="attrs" v-on="on" icon :href="item.qr.url" download="nombre_de_archivo.jpg" target="_blank">
              <v-icon small>mdi-qrcode-scan</v-icon>
            </v-btn>
          </template>
          <span>Descargar QR</span>
        </v-tooltip>
      </template>
    </v-data-table>

    <!--<v-btn @click="dialog2 = true">a</v-btn>-->

    <v-dialog v-model="dialog" persistent fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="fondo">
        <v-toolbar flat dark color="primary">
          <v-toolbar-title>{{ titleDialog }} Registro</v-toolbar-title>
          <v-toolbar-items class="ml-auto">
            <v-btn text @click="validationForm()">
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
            <v-btn text @click="">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn dark text @click="closeDialog()">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-form ref="form">
          <v-card class="my-card" elevation="5">
            <v-card-title>Datos Personales &#160;<span style="color: red;">*</span></v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                  <v-text-field v-model="user.nombre" label="Nombre(s)" class="mr-3" v-bind="inputText" />
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                  <v-text-field v-model="user.apellidoP" label="Apellido Paterno" class="mr-3" v-bind="inputText" />
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                  <v-text-field v-model="user.apellidoM" label="Apellido Materno" class="mr-3" v-bind="inputText" />
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                  <v-autocomplete v-model="user.idPuesto" :items="catPuestos" item-value="idPuesto" item-text="nombre"
                    label="Puesto" class="mr-3" v-bind="inputAutocomplete" />
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                  <v-text-field v-model="user.numCelular" label="Teléfono Móvil" class="mr-3" v-bind="inputTelMovil" />
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4" sm="12">
                  <v-file-input v-model="fotoBase64" label="Fotografia" class="mr-3" v-if="cambioFoto"
                    accept="image/png, image/jpeg, image/jpg" v-bind="inputImage" @change="convertToBase64" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" v-if="titleDialog === 'Editar'">
                  <v-checkbox v-model="cambioFoto" label="Cambiar Imagen" />
                </v-col>
                <v-col cols="12">
                  <v-img max-height="500" max-width="500" v-if="!cambioFoto && user.foto" :src="user.foto" contain />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="my-card" elevation="5">
            <v-card-title>Datos de familiares &#160;<span style="color: red;">*</span></v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-data-table :headers="headersFamiliares" :items="user.familiares" hide-default-footer>
                    <template v-slot:top>
                      <div class="d-flex mt-2">
                        <v-btn color="primary" class="ml-auto" @click="addFamiliar()">
                          Agregar
                        </v-btn>
                      </div>
                    </template>
                    <template v-slot:[`item.idParentezco`]="{ item }">
                      <v-autocomplete v-model="item.idParentezco" :items="catParentescos" item-value="idParentesco"
                        item-text="nombre" v-bind="inputAutocomplete" />
                    </template>
                    <template v-slot:[`item.nombre`]="{ item }">
                      <v-text-field v-model="item.nombre" v-bind="inputText" />
                    </template>
                    <template v-slot:[`item.apellidoP`]="{ item }">
                      <v-text-field v-model="item.apellidoP" v-bind="inputText" />
                    </template>
                    <template v-slot:[`item.apellidoM`]="{ item }">
                      <v-text-field v-model="item.apellidoM" v-bind="inputText" />
                    </template>
                    <template v-slot:[`item.edad`]="{ item }">
                      <v-text-field v-model="item.edad" v-bind="inputEdad" />
                    </template>
                    <template v-slot:[`item.acciones`]="{ item }">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ attrs, on }">
                          <v-btn icon v-bind="attrs" v-on="on" @click="deleteFamiliar(item)">
                            <v-icon>mdi-trash-can</v-icon>
                          </v-btn>
                        </template>
                        <span>Eliminar</span>
                      </v-tooltip>
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="my-card" elevation="5">
            <v-card-title>Tipo de QR &#160;<span style="color: red;">*</span></v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-radio-group v-model="user.qr.tipoQR" mandatory>
                    <v-row>
                      <v-col v-for="opcion in opcionesQr" :key="opcion.value" cols="12" xl="3" lg="3" md="3" sm="6">
                        <v-list-item>
                          <v-radio :value="opcion.value"></v-radio>
                          <v-img max-height="150" max-width="200" :src="opcion.imageUrl" contain />
                        </v-list-item>
                      </v-col>
                    </v-row>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text class="d-flex align-left">
              <v-checkbox v-model="user.qr.imagenQR" label="El QR lleva logo?" class="mr-3" />
              <v-file-input v-model="qrBase64" v-if="user.qr.imagenQR && cambioFotoQr" class="mr-3"
                accept="image/png, image/jpeg, image/jpg" v-bind="inputImage" @change="convertQrToBase64" />
            </v-card-text>
            <v-card-text>
              <v-row>
                <v-col cols="12" v-if="titleDialog === 'Editar'">
                  <v-checkbox v-model="cambioFotoQr" label="Cambiar Imagen" />
                </v-col>
                <v-col cols="12">
                  <v-img max-height="500" max-width="500" v-if="!cambioFotoQr && user.qr.urlImagenQR"
                    :src="user.qr.urlImagenQR" contain />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <div style="height: 30px;"></div>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" persistent width="500">
      <v-card>
        <v-card-title>Se eliminará a "{{ userDelete.nombre }} {{ userDelete.apellidoP }} {{ userDelete.apellidoM
        }}"</v-card-title>
        <v-card-actions>
          <v-btn text color="success" @click="closeDialogDelete()">Cancelar</v-btn>
          <v-btn text color="error" @click="deleteTrabajador()">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogPreview" persistent fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="fondo">
        <v-toolbar flat dark color="primary">
          <v-toolbar-title>Datos de {{ userPreview.nombre }}</v-toolbar-title>
          <v-toolbar-items class="ml-auto">
            <v-btn dark text @click="closeDialogPreview()">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card class="mx-auto">
          <v-card dark class="d-flex justify-center">
            <v-img class="img-user-preview"
              style="position: absolute; top: 10px; border-radius: 50%; width: 200px; height: 200px; z-index: 2;"
              :src="userPreview.foto" />

            <v-img src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
              gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)" height="220" />
          </v-card>
          <v-card-title class="d-flex justify-center mt-150">
            {{ userPreview.nombre }} {{ userPreview.apellidoP }} {{ userPreview.apellidoM }} ({{ userPreview.puesto }})
          </v-card-title>


        </v-card>
      </v-card>
    </v-dialog>

    <!--<v-dialog v-model="dialog2" width="800" persistent>
        <v-card>
          <v-img height="170px" src="../assets/wave.svg">
            <v-img height="170px" src="../assets/wave1.svg">
              <v-app-bar flat color="rgba(0, 0, 0, 0)">
                <v-toolbar-title class="text-h6 white--text pl-0">
                  Nuevo Registro
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn color="white" icon @click="closeDialog2()">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-app-bar>
            </v-img>
          </v-img>
  
          <v-card-text>
            <v-form ref="form">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-text-field v-model="user.nombre" label="Nombre(s)" v-bind="inputText" />
                </v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <v-text-field v-model="user.apellidoP" label="Apellido Paterno" class="mr-3" v-bind="inputText" />
                  <v-text-field v-model="user.apellidoM" label="Apellido Materno" class="ml-3" v-bind="inputText" />
                </v-col>
                <v-col cols="12" class="d-flex justify-center">
                  <v-autocomplete v-model="user.idPuesto" label="Puesto" class="mr-3" v-bind="inputAutocomplete" />
                  <v-text-field v-model="user.numCelular" label="Teléfono Móvil" class="ml-3" v-bind="inputTelMovil" />
                </v-col>
                <br>
                <v-col cols="12">
                  <v-data-table :headers="headersFamiliares" :items="user.familiares" :key="idFamiliar">
                    <template v-slot:top>
                      <div class="d-flex mt-2">
                        <v-btn color="primary" class="ml-auto" @click="addFamiliar()">
                          Agregar
                        </v-btn>
                      </div>
                    </template>
                    <template v-slot:[`item.idParentezco`]="{ item }">
                      <v-autocomplete v-model="item.idParentezco" v-bind="inputAutocomplete" />
                    </template>
                    <template v-slot:[`item.nombre`]="{ item }">
                      <v-text-field v-model="item.nombre" v-bind="inputText" />
                    </template>
                    <template v-slot:[`item.apellidoP`]="{ item }">
                      <v-text-field v-model="item.apellidoP" v-bind="inputText" />
                    </template>
                    <template v-slot:[`item.apellidoM`]="{ item }">
                      <v-text-field v-model="item.apellidoM" v-bind="inputText" />
                    </template>
                    <template v-slot:[`item.edad`]="{ item }">
                      <v-text-field v-model="item.edad" v-bind="inputEdad" />
                    </template>
                    <template v-slot:[`item.acciones`]="{ item }">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ attrs, on }">
                          <v-btn icon v-bind="attrs" v-on="on" @click="deleteFamiliar(item)">
                            <v-icon>mdi-trash-can</v-icon>
                          </v-btn>
                        </template>
                        <span>Eliminar</span>
                      </v-tooltip>
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="error" class="ml-auto" @click="closeDialog2()">Cancelar</v-btn>
            <v-btn text color="success">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>-->
  </div>
</template>
  
<script>
import axios from 'axios'

export default {
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
      inputAutocomplete: {
        outlined: false,
        dense: false,
        required: true,
        clearable: true,
        rules: [
          (v) => {
            if (v === null || v === "") {
              return "Dato requerido";
            }
            return true;
          },
        ],
      },
      inputTelMovil: {
        outlined: false,
        dense: false,
        required: true,
        type: "number",
        inputmode: "numeric",
        counter: 10,
        rules: [
          (v) => {
            if (v === null || v === "") {
              return "Dato requerido";
            } else if (v && v.length != 10) {
              return "Número no valido";
            }
            return true;
          },
        ],
      },
      inputEdad: {
        outlined: false,
        dense: false,
        required: true,
        type: "number",
        inputmode: "numeric",
        counter: 2,
        rules: [
          (v) => {
            if (v === null || v === "") {
              return "Dato requerido";
            } else if (v.length > 2) {
              return "";
            }
            return true;
          },
        ],
      },
      inputMail: {
        outlined: false,
        dense: true,
        required: true,
        type: "phone",
        rules: [
          (v) => {
            if (v === null || v === "") {
              return "Dato requerido";
            } else if (!/.+@.+/.test(v)) {
              return "Formato no valido";
            }
            return true;
          },
        ],
      },
      inputImage: {
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
        /*{
          text: "Nombre Completo",
          value: "nombreCompleto",
          align: "center",
          sortable: true,
        },*/{
          text: "Nombre",
          value: "nombre",
          align: "center",
          sortable: true,
        }, {
          text: "Apellido Paterno",
          value: "apellidoP",
          align: "center",
          sortable: true,
        }, {
          text: "Apellido Materno",
          value: "apellidoM",
          align: "center",
          sortable: true,
        }, {
          text: "Puesto",
          value: "puesto",
          align: "center",
          sortable: true,
        }, {
          text: "Celular",
          value: "numCelular",
          align: "center",
          sortable: true,
        }, {
          value: "acciones",
          align: "center",
          sortable: false,
        }
      ],
      headersFamiliares: [
        {
          text: "Parentesco",
          value: "idParentezco",
          align: "center",
          sortable: false,
        }, {
          text: "Nombre(s)",
          value: "nombre",
          align: "center",
          sortable: false,
        }, {
          text: "Apellido Paterno",
          value: "apellidoP",
          align: "center",
          sortable: false,
        }, {
          text: "Apellido Materno",
          value: "apellidoM",
          align: "center",
          sortable: false,
        }, {
          text: "Edad",
          value: "edad",
          align: "center",
          sortable: false,
        }, {
          value: "acciones",
          align: "center",
          sortable: false,
        }
      ],

      catTrabajadores: [],
      catPuestos: [],
      catParentescos: [],

      user: {
        nombre: null,
        apellidoP: null,
        apellidoM: null,
        idPuesto: null,
        qr: {
          idQr: null,
          url: null,
          tipoQR: null,
          imagenQR: false,
          urlImagenQR: null,
        },
        numCelular: null,
        foto: null,
        familiares: [],
      },
      defaultUser: {
        nombre: null,
        apellidoP: null,
        apellidoM: null,
        idPuesto: null,
        qr: {
          idQr: null,
          url: null,
          tipoQR: null,
          imagenQR: false,
          urlImagenQR: null,
        },
        numCelular: null,
        foto: null,
        familiares: [],
      },

      userDelete: {
        nombre: null,
        apellidoP: null,
        apellidoM: null,
      },
      defaultUserDelete: {
        nombre: null,
        apellidoP: null,
        apellidoM: null,
      },

      userPreview: {
        idTrabajador: null,
        nombre: null,
        apellidoP: null,
        apellidoM: null,
        idPuesto: null,
        puesto: null,
        idQR: null,
        numCelular: null,
        foto: null,
        familiares: [
          {
            idFamilia: null,
            idParentezco: null,
            parentezco: null,
            nombre: null,
            apellidoP: null,
            apellidoM: null,
            edad: null
          }
        ]
      },
      userPreviewDefault: {
        idTrabajador: null,
        nombre: null,
        apellidoP: null,
        apellidoM: null,
        idPuesto: null,
        puesto: null,
        idQR: null,
        numCelular: null,
        foto: null,
        familiares: [
          {
            idFamilia: null,
            idParentezco: null,
            parentezco: null,
            nombre: null,
            apellidoP: null,
            apellidoM: null,
            edad: null
          }
        ]
      },

      idTrabajador: null,
      idFamiliar: 0,
      titleDialog: "",
      cambioFoto: true,
      cambioFotoQr: true,

      ulrUserQr: null,
      imageUrl: null,
      fotoBase64: null,
      qrBase64: null,
      opcionesQr: [
        {
          value: 1,
          imageUrl: "https://aavisor.azurewebsites.net/QRs/Plantillas/Qr1.png",
        }, {
          value: 2,
          imageUrl: "https://aavisor.azurewebsites.net/QRs/Plantillas/Qr2.png",
        }, {
          value: 3,
          imageUrl: "https://aavisor.azurewebsites.net/QRs/Plantillas/Qr3.png",
        }, {
          value: 4,
          imageUrl: "https://aavisor.azurewebsites.net/QRs/Plantillas/Qr4.png",
        },
      ],

      dialog: false,
      dialog2: false,
      dialogDelete: false,
      dialogPreview: false,
      token: null
    }
  },
  methods: {
    mountedComponente() {
      this.getTrabajadores();
      this.getPuestos();
      this.getParentescos();
    },
    getTrabajadores() {
      const axiosInstance = axios.create({
        baseURL: 'https://aavisor.azurewebsites.net/api',
        headers: {
          'Authorization': this.token
        }
      });
      axiosInstance.
        get("Trabajador/Listar")
        .then((response) => {
          this.catTrabajadores = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    },
    postTrabajadores() {
      axios
        .post("Trabajador/Crear", this.user)
        .then((response) => {
          this.getTrabajadores();
          this.closeDialog();
          this.closeDialog2();
        })
        .catch((error) => {
          console.log(error)
        })
    },
    putTrabajadores() {
      this.user.foto = this.cambioFoto ? this.user.foto : null,
        this.user.qr.urlImagenQR = this.cambioFotoQr ? this.user.qr.urlImagenQR : null,
        axios
          .put("Trabajador/Actualizar/" + this.idTrabajador, this.user)
          .then((response) => {
            this.getTrabajadores();
            this.closeDialog();
            this.closeDialog2();
          })
          .catch((error) => {
            console.log(error)
          })
    },
    deleteTrabajador() {
      axios
        .put("Trabajador/Desactivar/" + this.idTrabajador)
        .then((response) => {
          this.getTrabajadores();
          this.closeDialogDelete();
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getPuestos() {
      const axiosInstance = axios.create({
        baseURL: 'https://aavisor.azurewebsites.net/api',
        headers: {
          'Authorization': this.token
        }
      });
      axiosInstance.
        get("Puesto/Listar")
        .then((response) => {
          this.catPuestos = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getParentescos() {
      const axiosInstance = axios.create({
        axiosInstance: 'https://aavisor.azurewebsites.net/api',
        headers: {
          'Authorization': this.token
        }
      });
      axiosInstance
        .get("Parentesco/Listar")
        .then((response) => {
          this.catParentescos = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getDatosQr(idQr) {
      const axiosInstance = axios.create({
        axiosInstance: 'https://aavisor.azurewebsites.net/api',
        headers: {
          'Authorization': this.token
        }
      });
      axiosInstance.
        get("Trabajador/Buscar/" + idQr)
        .then((response) => {
          this.userPreview = Object.assign({}, response.data)
          this.userPreview.familiares = JSON.parse(JSON.stringify(response.data.familiares))
        })
        .catch((error) => {
          console.log(error)
        })
    },

    validationForm() {
      if (this.$refs.form.validate()) {
        this.titleDialog === "Nuevo" ? this.postTrabajadores() : this.putTrabajadores();
      }
    },

    openDialog(item) {
      this.cambioFoto = true;
      this.cambioFotoQr = true;
      this.dialog = true;
      this.titleDialog = item ? "Editar" : "Nuevo";

      if (item) {
        this.cambioFoto = false;
        this.cambioFotoQr = false;
        this.idTrabajador = item.idTrabajador
        this.user = Object.assign({}, item);
        this.user.familiares = JSON.parse(JSON.stringify(item.familiares));
        this.user.qr = Object.assign({}, item.qr);
      }
    },
    closeDialog() {
      this.dialog = false;
      this.user = Object.assign({}, this.defaultUser);
      this.user.familiares = JSON.parse(JSON.stringify([]))
      this.user.qr = Object.assign({}, this.defaultUser.qr);
      this.idTrabajador = null;
      this.idFamiliar = 0;
      this.$refs.form.reset();
    },
    openDialogDelete(item) {
      this.userDelete = Object.assign({}, item);
      this.userDelete.qr = Object.assign({}, item.qr);
      this.idTrabajador = item.idTrabajador;
      this.dialogDelete = true;
    },
    closeDialogDelete() {
      this.dialogDelete = false;
      this.userDelete = Object.assign({}, this.defaultUser);
      this.userDelete.qr = Object.assign({}, this.defaultUser.qr);
    },

    openPreview(item) {
      /*this.getDatosQr(item.idQR)
      this.dialogPreview = true;*/
      let idQr = item.idQR
      this.$router.push({ name: 'Visualizar', params: { id: idQr } });
    },
    closeDialogPreview() {
      this.dialogPreview = false;
    },

    downloadQr(item) {
      this.ulrUserQr = item.qr.url;

      axios
        .get(this.ulrUserQr, { responseType: 'blob' })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));

          const enlace = document.createElement('a');
          enlace.href = url;
          enlace.setAttribute('download', 'nombre_de_archivo.jpg');

          enlace.click();

          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error('Error al descargar la imagen', error);
        });

    },

    openDialog2() {
      this.dialog2 = true;
    },
    closeDialog2() {
      this.dialog2 = false;
      //this.$refs.form.reset();
      this.user = Object.assign({}, this.defaultUser);
      this.user.familiares = []
      this.idFamiliar = 0;
      this.$refs.form.reset();
    },

    convertToBase64() {
      if (this.fotoBase64) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          this.user.foto = base64String.split(',')[1];
        };
        reader.readAsDataURL(this.fotoBase64);
      }
    },
    convertQrToBase64() {
      if (this.qrBase64) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          this.user.qr.urlImagenQR = base64String.split(',')[1];
        };
        reader.readAsDataURL(this.qrBase64);
      }
    },

    addFamiliar() {
      this.user.familiares.push({
        idFamilia: this.idFamiliar++,
        idParentezco: null,
        nombre: null,
        apellidoP: null,
        apellidoM: null,
        edad: null
      })
    },
    deleteFamiliar(item) {
      const idx = this.user.familiares.indexOf(item)
      this.user.familiares.splice(idx, 1)
    },
  },
  mounted() {
    this.token = localStorage.getItem('token')
    this.mountedComponente();
  }
}
</script>
  
<style scoped>
.cont {
  padding: 20px 20px 20px 20px;
}

.my-card {
  margin: 30px 50px 0px 50px;
}
</style>