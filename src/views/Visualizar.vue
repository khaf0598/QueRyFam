<template>
  <div class="cont" v-if="dataUser">
    <div class="foto-fondo">
      <v-img v-if="dataUser.foto" :src="dataUser.foto" gradient="to top, rgba(0,0,0,.8), rgba(0,0,0,.5)" height="350"
        width="100%" class="img-fondo" />
      <span class="white--text text-fondo">{{ dataUser.nombre }} {{ dataUser.apellidoP }} {{ dataUser.apellidoM }} <span
          class="subtext-fondo">({{ dataUser.puesto }})</span></span>
    </div>
    <div class="cont-data">
      <!--<v-img v-if="dataUser.foto" :src="dataUser.foto" class="img-foto" height="200" width="200" />-->
      <v-card width="100%">
        <v-card-title class="d-flex justify-center">
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <v-icon>mdi-cellphone</v-icon> {{ dataUser.numCelular }}
            </v-col>
            <v-col cols="12">
              <v-simple-table>
                <template>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Familiar
                      </th>
                      <th class="text-left">
                        Edad
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="familiar in dataUser.familiares" :key="familiar.idFamilia">
                      <td>{{ familiar.nombre }} {{ familiar.apellidoP }} {{ familiar.apellidoM }}</td>
                      <td>{{ familiar.edad }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      dataUser: {},
    }
  },
  methods: {
    getDatosQr(idQr) {
      const axiosInstance = axios.create({
        baseURL: 'https://aavisor.azurewebsites.net/api', // Define aquí tu URL base específica
        // Otras configuraciones específicas para esta instancia, como encabezados, transformaciones, etc.
      });
      axiosInstance.
        get("Trabajador/Buscar/" + idQr)
        .then((response) => {
          this.dataUser = Object.assign({}, response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {
    let idQr = this.$route.params.id
    this.getDatosQr(idQr);
  }
}
</script>

<style scoped>
.cont {
  padding: 0 0 0 0 !important;
}

.foto-fondo {
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-fondo {
  position: absolute;
  font-size: 200%;
  text-align: center;
}

.subtext-fondo {
  font-size: 60%;
}

.cont-data {
  display: flex;
  width: 100%;
  height: auto;
}

.img-foto {
  position: absolute;
  max-height: 100%;
  border-radius: 50%;
  top: 25%;
  left: 30px;
}

.info-card {
  position: inherit;
  z-index: -1;
}
</style>
  