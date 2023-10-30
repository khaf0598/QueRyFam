<template>
  <div>
    <v-card color="primary"
      class="my-bar v-navigation-drawer v-navigation-drawer--absolute v-navigation-drawer--open v-navigation-drawer--temporary theme--dark">
      <!--<v-card color="primary" class="my-bar fill-height">-->
      <v-list dark color="primary">
        <v-list-item @click="mostrar_menu()">
          <v-icon>mdi-menu</v-icon>
        </v-list-item>
        <v-divider></v-divider>
        <br>
        <v-list-item-group v-model="ventana" mandatory>
          <v-list-item v-for="(item) in secciones" :key="item.posicion">
            <v-list-item-icon>
              <v-tooltip color="black" right>
                <template v-slot:activator="{ attrs, on }">
                  <v-icon v-bind="attrs" v-on="on" v-text="item.icono"></v-icon>
                </template>
                <span>{{ item.nombre }}</span>
              </v-tooltip>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.nombre"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-navigation-drawer v-model="ventanaDesplegada" temporary absolute class="my-bar" dark color="primary">
      <v-list>
        <v-list-item @click="ocultar_menu()" class="px-2">
          <v-icon>mdi mdi-close</v-icon>
        </v-list-item>

      </v-list>

      <v-divider></v-divider>
      <br>
      <v-list-item-group v-model="ventana" mandatory>
        <v-list-item v-for="(item) in secciones" :key="item.posicion">
          <v-list-item-icon>
            <v-tooltip right>
              <template v-slot:activator="{ attrs, on }">
                <v-icon v-bind="attrs" v-on="on" v-text="item.icono"></v-icon>
              </template>
              <span>{{ item.nombre }}</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.nombre"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-item-group>
    </v-navigation-drawer>
    <router-view class="my-router-view" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      secciones: [
        {
          icono: 'mdi-account-hard-hat',
          nombre: 'Trabajadores',
          routerName: 'Trabajadores',
          posicion: 0,
        }, {
          icono: 'mdi-account-question',
          nombre: 'Puestos',
          routerName: 'Puestos',
          posicion: 1,
        }, {
          icono: 'mdi mdi-home-heart',
          nombre: 'Parentescos',
          routerName: 'Parentescos',
          posicion: 2,
        }, {
          icono: 'mdi-logout',
          nombre: 'Cerrar Sesión',
          posicion: 3,
        },
      ],
      ventana: null,
      ventanaDesplegada: false,
    }
  },
  watch: {
    "ventana"() {
      let seccion = this.$route.name;

      switch (this.ventana) {
        case 0:
          if (seccion != 'Trabajadores') {
            this.$router.push({ name: 'Trabajadores' });
          }
          break;

        case 1:
          if (seccion != 'Parentescos') {
            this.$router.push({ name: 'Parentescos' });
          }
          break;

        case 2:
          if (seccion != 'Puestos') {
            this.$router.push({ name: 'Puestos' });
          }
          break;
        case 3:
          this.cerrarSesion();
          break;
        default:

          break;
      }
    }
  },
  methods: {
    ventanaInicio() {
      let seccion = this.$route.name;
      let posicion = this.secciones.filter(item => item.routerName === seccion)[0].posicion;

      if (this.ventana != posicion) {
        this.ventana = posicion
      }
    },
    mostrar_menu() {
      this.ventanaDesplegada = true;
    },
    ocultar_menu() {
      this.ventanaDesplegada = false;
    },
    cambiarLogin() {
      this.$router.push({ name: 'Login' });
    },
    cerrarSesion() {
      localStorage.removeItem('token');
      this.cambiarLogin();
    },
  },
  mounted() {
    let token = localStorage.getItem('token');
    if (!token || token === "") {
      this.cambiarLogin();
    }
  },
}
</script>

<style scoped>
.main-cont {
  width: 100%;
  height: 100%;
  background-color: var(--v-fondo-base);

}

.my-bar {
  border-radius: 0 !important;
  position: fixed;
  height: 100%;
  width: 52px;
}

.my-router-view {
  position: relative;
  width: calc(100% - 56px);
  left: 52px;
  padding: 0 !important;
  background-color: var(--v-fondo-base);
}
</style>