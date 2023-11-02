<template>
  <div class="my-login-div">
    <v-col xl="4" lg="4" md="4" sm="8" xs="12">
      <v-card>
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="dataLogin.usuario" label="Usuario" prepend-inner-icon="mdi-account"
                  v-bind="inputUsuario" />
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="dataLogin.contrasena" label="Contraseña" prepend-inner-icon="mdi-key"
                  v-bind="inputPassword" />
              </v-col>
              <v-col cols="12" class="d-flex" justify-center>
                <v-btn class="my-btn ml-auto mr-auto" color="primary" @click="validarLogin()">Ingresar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      inputUsuario: {
        outlined: false,
        dense: true,
        required: true,
        rules: [
          (v) => {
            if (v === null) {
              return "Campo Requerido";
            }
            return true;
          },
        ],
      },
      inputPassword: {
        outlined: false,
        dense: true,
        required: true,
        type: "password",
        rules: [
          (v) => {
            if (v === null) {
              return "Campo Requerido";
            }
            return true;
          },
        ],
      },

      dataLogin: {
        usuario: null,
        contrasena: null,
      },
    };
  },
  methods: {
    validarLogin() {
      if (this.$refs.form.validate()) {
        this.postLogin();
      }
    },
    postLogin() {
      axios
        .post("Authentication/Login", this.dataLogin)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          if (localStorage.getItem("token")) {
            this.cambiarLogin();
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
        });
    },
    cambiarLogin() {
      this.$router.push({ name: "Contenedor" });
    },
  },
};
</script>

<style scoped>
.my-login-div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-btn {
  width: 50%;
}
</style>