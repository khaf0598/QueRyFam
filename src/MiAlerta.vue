<template>
  <div>
    <v-alert :value="alerta" class="miAlerta" dark border="left" :type="tipoAlerta" transition="slide-y-transition"
      @click="ocultar()">
      {{ mensajeAlerta }}
    </v-alert>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      alerta: false,
      tipoAlerta: 'info',
      mensajeAlerta: "",

      alertOptions: {
        422: {
          tipoAlerta: "warning",
          mensajeAlerta: "Faltan datos obligatorios.",
        },
        200: {
          tipoAlerta: "success",
          mensajeAlerta: "La operación se completó con éxito.",
        },
        400: {
          tipoAlerta: "warning",
          mensajeAlerta: "Hubo un problema con los datos proporcionados.",
        },
        401: {
          tipoAlerta: "error",
          mensajeAlerta: "No tienes permiso para realizar esta acción.",
        },
        404: {
          tipoAlerta: "error",
          mensajeAlerta: "El recurso que estás buscando no se ha encontrado.",
        },
        405: {
          tipoAlerta: "error",
          mensajeAlerta: "El método de solicitud utilizado no está permitido.",
        },
        409: {
          tipoAlerta: "warning",
          mensajeAlerta: "El recurso que intentas crear ya existe.",
        },
        500: {
          tipoAlerta: "error",
          mensajeAlerta: "Hubo un error en el servidor.",
        },
      },
    };
  },

  methods: {
    mostrar(code) {
      this.mensajeAlerta = this.alertOptions[code].mensajeAlerta ? this.alertOptions[code].mensajeAlerta : null;
      this.tipoAlerta = this.alertOptions[code].tipoAlerta ? this.alertOptions[code].tipoAlerta : null;

      this.alerta = true;

      setTimeout(this.ocultar, 2500)
    },
    ocultar() {
      this.alerta = false;
    }
  },
};
</script>
  
<style scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
}

.miAlerta {
  position: absolute;
  left: auto;
  right: auto;
  top: 5px;
  cursor: pointer;
  transition: top .5s ease-in;
}
</style>