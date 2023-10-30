<template>
  <div class="my-login-div">
    <v-card class="my-form-login" cols="12" xl="12" lg="12" md="12" sm="12">
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
              <v-btn class="my-btn ml-auto mr-auto" color="primary" @click="validarLogin()">ENTRAR</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

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
    }
  },
  methods: {
    validarLogin() {
      if (this.$refs.form.validate()) {
        this.postLogin()
      }
    },
    postLogin() {
      axios
        .post("Authentication/Login", this.dataLogin)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          if (localStorage.getItem('token')) {
            this.cambiarLogin()
          }
        })
        .catch((error) => {
          localStorage.removeItem('token');
        })
    },
    cambiarLogin() {
      this.$router.push({ name: 'Contenedor' });
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
.my-login-div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--v-gray2-base);
}

/*.my-form-login{
  
}*/
.my-btn {
  width: 50%;
}
</style>