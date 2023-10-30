<template>
  <v-app>
    <v-main>
      <router-view class="cont"/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data(){
    return{

    }
  }
};
</script>

<style scoped>
*{
  background-color: var(--v-fondo-base);
}
.cont{
  padding: 20px 20px 20px 20px;
}
</style>
