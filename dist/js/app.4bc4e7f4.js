(function(){"use strict";var t={8729:function(t,e,a){var o=a(6369),r=function(){var t=this,e=t._self._c;return e("v-app",[e("v-main",[e("router-view",{staticClass:"cont"})],1)],1)},i=[],s={data(){return{}}},l=s,n=a(1001),c=(0,n.Z)(l,r,i,!1,null,"da077a86",null),u=c.exports,d=a(2631),v=function(){var t=this,e=t._self._c;return e("div",[e("v-card",{staticClass:"my-bar v-navigation-drawer v-navigation-drawer--absolute v-navigation-drawer--open v-navigation-drawer--temporary theme--dark",attrs:{color:"primary"}},[e("v-list",{attrs:{dark:"",color:"primary"}},[e("v-list-item",{on:{click:function(e){return t.mostrar_menu()}}},[e("v-icon",[t._v("mdi-menu")])],1),e("v-divider"),e("br"),e("v-list-item-group",{attrs:{mandatory:""},model:{value:t.ventana,callback:function(e){t.ventana=e},expression:"ventana"}},t._l(t.secciones,(function(a){return e("v-list-item",{key:a.posicion},[e("v-list-item-icon",[e("v-tooltip",{attrs:{color:"black",right:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-icon",t._g(t._b({domProps:{textContent:t._s(a.icono)}},"v-icon",o,!1),r))]}}],null,!0)},[e("span",[t._v(t._s(a.nombre))])])],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.nombre)}})],1)],1)})),1)],1)],1),e("v-navigation-drawer",{staticClass:"my-bar",attrs:{temporary:"",absolute:"",dark:"",color:"primary"},model:{value:t.ventanaDesplegada,callback:function(e){t.ventanaDesplegada=e},expression:"ventanaDesplegada"}},[e("v-list",[e("v-list-item",{staticClass:"px-2",on:{click:function(e){return t.ocultar_menu()}}},[e("v-icon",[t._v("mdi mdi-close")])],1)],1),e("v-divider"),e("br"),e("v-list-item-group",{attrs:{mandatory:""},model:{value:t.ventana,callback:function(e){t.ventana=e},expression:"ventana"}},t._l(t.secciones,(function(a){return e("v-list-item",{key:a.posicion},[e("v-list-item-icon",[e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-icon",t._g(t._b({domProps:{textContent:t._s(a.icono)}},"v-icon",o,!1),r))]}}],null,!0)},[e("span",[t._v(t._s(a.nombre))])])],1),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(a.nombre)}})],1)],1)})),1),e("v-list-item",{on:{click:t.cerrarSesion}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-logout")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("Cerrar Sesión")])],1)],1)],1),e("router-view",{staticClass:"my-router-view"})],1)},m=[],p=(a(560),{data(){return{secciones:[{icono:"mdi-account-hard-hat",nombre:"Trabajadores",routerName:"Trabajadores",posicion:0},{icono:"mdi-account-question",nombre:"Puestos",routerName:"Puestos",posicion:1},{icono:"mdi mdi-home-heart",nombre:"Parentescos",routerName:"Parentescos",posicion:2},{icono:"mdi-logout",nombre:"Cerrar Sesión",posicion:3}],ventana:null,ventanaDesplegada:!1}},watch:{ventana(){let t=this.$route.name;switch(this.ventana){case 0:"Trabajadores"!=t&&this.$router.push({name:"Trabajadores"});break;case 1:"Parentescos"!=t&&this.$router.push({name:"Parentescos"});break;case 2:"Puestos"!=t&&this.$router.push({name:"Puestos"});break;case 3:this.cerrarSesion();break;default:break}}},methods:{ventanaInicio(){let t=this.$route.name,e=this.secciones.filter((e=>e.routerName===t))[0].posicion;this.ventana!=e&&(this.ventana=e)},mostrar_menu(){this.ventanaDesplegada=!0},ocultar_menu(){this.ventanaDesplegada=!1},cambiarLogin(){this.$router.push({name:"Login"})},cerrarSesion(){localStorage.removeItem("token"),this.cambiarLogin()}},mounted(){let t=localStorage.getItem("token");t&&""!==t||this.cambiarLogin()}}),b=p,g=(0,n.Z)(b,v,m,!1,null,"4eed9ae5",null),f=g.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-login-div"},[e("v-card",{staticClass:"my-form-login",attrs:{cols:"12",xl:"12",lg:"12",md:"12",sm:"12"}},[e("v-card-title",[t._v("Login")]),e("v-card-text",[e("v-form",{ref:"form"},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",t._b({attrs:{label:"Usuario","prepend-inner-icon":"mdi-account"},model:{value:t.dataLogin.usuario,callback:function(e){t.$set(t.dataLogin,"usuario",e)},expression:"dataLogin.usuario"}},"v-text-field",t.inputUsuario,!1))],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",t._b({attrs:{label:"Contraseña","prepend-inner-icon":"mdi-key"},model:{value:t.dataLogin.contrasena,callback:function(e){t.$set(t.dataLogin,"contrasena",e)},expression:"dataLogin.contrasena"}},"v-text-field",t.inputPassword,!1))],1),e("v-col",{staticClass:"d-flex",attrs:{cols:"12","justify-center":""}},[e("v-btn",{staticClass:"my-btn ml-auto mr-auto",attrs:{color:"primary"},on:{click:function(e){return t.validarLogin()}}},[t._v("ENTRAR")])],1)],1)],1)],1)],1)],1)},_=[],P=a(4161),x={data(){return{inputUsuario:{outlined:!1,dense:!0,required:!0,rules:[t=>null!==t||"Campo Requerido"]},inputPassword:{outlined:!1,dense:!0,required:!0,type:"password",rules:[t=>null!==t||"Campo Requerido"]},dataLogin:{usuario:null,contrasena:null}}},methods:{validarLogin(){this.$refs.form.validate()&&this.postLogin()},postLogin(){P.Z.post("Authentication/Login",this.dataLogin).then((t=>{localStorage.setItem("token",t.data.token),localStorage.getItem("token")&&this.cambiarLogin()})).catch((t=>{localStorage.removeItem("token")}))},cambiarLogin(){this.$router.push({name:"Contenedor"})}},mounted(){}},k=x,D=(0,n.Z)(k,h,_,!1,null,"288ab400",null),y=D.exports,C=function(){var t=this,e=t._self._c;return t.dataUser?e("div",{staticClass:"cont"},[e("div",{staticClass:"foto-fondo"},[t.dataUser.foto?e("v-img",{staticClass:"img-fondo",attrs:{src:t.dataUser.foto,gradient:"to top, rgba(0,0,0,.8), rgba(0,0,0,.5)",height:"350",width:"100%"}}):t._e(),e("span",{staticClass:"white--text text-fondo"},[t._v(t._s(t.dataUser.nombre)+" "+t._s(t.dataUser.apellidoP)+" "+t._s(t.dataUser.apellidoM)+" "),e("span",{staticClass:"subtext-fondo"},[t._v("("+t._s(t.dataUser.puesto)+")")])])],1),e("div",{staticClass:"cont-data"},[e("v-card",{attrs:{width:"100%"}},[e("v-card-title",{staticClass:"d-flex justify-center"},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-icon",[t._v("mdi-cellphone")]),t._v(" "+t._s(t.dataUser.numCelular)+" ")],1),e("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(t.dataUser.familiares)+" "),e("v-simple-table",[[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(" Familiar ")]),e("th",{staticClass:"text-left"},[t._v(" Edad ")])])]),e("tbody",t._l(t.dataUser.familiares,(function(a){return e("tr",{key:a.idFamilia},[e("td",[t._v(t._s(a.nombre)+" "+t._s(a.apellidoP)+" "+t._s(a.apellidoM))]),e("td",[t._v(t._s(a.edad))])])})),0)]],2)],1)],1)],1)],1)],1)]):t._e()},j=[],w={data(){return{dataUser:{}}},methods:{getDatosQr(t){const e=P.Z.create({baseURL:"https://aavisor.azurewebsites.net/api"});e.get("Trabajador/Buscar/"+t).then((t=>{this.dataUser=Object.assign({},t.data)})).catch((t=>{console.log(t)}))}},mounted(){let t=this.$route.params.id;this.getDatosQr(t)}},T=w,F=(0,n.Z)(T,C,j,!1,null,"788aecea",null),S=F.exports,q=function(){var t=this,e=t._self._c;return e("div",[e("v-data-table",{attrs:{headers:t.headers,items:t.catTrabajadores},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"d-flex justify-center"},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:a,on:o}){return[e("v-btn",t._g(t._b({staticClass:"ml-auto mr-5 mt-5",attrs:{icon:""},on:{click:function(e){return t.getTrabajadores()}}},"v-btn",a,!1),o),[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-reload")])],1)]}}])},[e("span",[t._v("Recargar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:a,on:o}){return[e("v-btn",t._g(t._b({staticClass:"mr-5 mt-5",attrs:{icon:""},on:{click:function(e){return t.openDialog()}}},"v-btn",a,!1),o),[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-plus")])],1)]}}])},[e("span",[t._v("Nuevo Registro")])])],1)]},proxy:!0},{key:"item.nombreCompleto",fn:function({item:e}){return[t._v(" "+t._s(e.nombre)+" "+t._s(e.apellidoP)+" "+t._s(e.apellidoM)+" ")]}},{key:"item.acciones",fn:function({item:a}){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openDialog(a)}}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Editar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openDialogDelete(a)}}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}],null,!0)},[e("span",[t._v("Eliminar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openPreview(a)}}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1)]}}],null,!0)},[e("span",[t._v("Visualizar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:"",href:a.qr.url,download:"nombre_de_archivo.jpg",target:"_blank"}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-qrcode-scan")])],1)]}}],null,!0)},[e("span",[t._v("Descargar QR")])])]}}],null,!0)}),e("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",{attrs:{color:"fondo"}},[e("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[e("v-toolbar-title",[t._v(t._s(t.titleDialog)+" Registro")]),e("v-toolbar-items",{staticClass:"ml-auto"},[e("v-btn",{attrs:{text:""},on:{click:function(e){return t.validationForm()}}},[e("v-icon",[t._v("mdi-content-save")])],1),e("v-btn",{attrs:{text:""},on:{click:function(t){}}},[e("v-icon",[t._v("mdi-eye")])],1),e("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",[t._v(" mdi-close ")])],1)],1)],1),e("v-form",{ref:"form"},[e("v-card",{staticClass:"my-card",attrs:{elevation:"5"}},[e("v-card-title",[t._v("Datos Personales  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"12"}},[e("v-text-field",t._b({staticClass:"mr-3",attrs:{label:"Nombre(s)"},model:{value:t.user.nombre,callback:function(e){t.$set(t.user,"nombre",e)},expression:"user.nombre"}},"v-text-field",t.inputText,!1))],1),e("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"12"}},[e("v-text-field",t._b({staticClass:"mr-3",attrs:{label:"Apellido Paterno"},model:{value:t.user.apellidoP,callback:function(e){t.$set(t.user,"apellidoP",e)},expression:"user.apellidoP"}},"v-text-field",t.inputText,!1))],1),e("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"12"}},[e("v-text-field",t._b({staticClass:"mr-3",attrs:{label:"Apellido Materno"},model:{value:t.user.apellidoM,callback:function(e){t.$set(t.user,"apellidoM",e)},expression:"user.apellidoM"}},"v-text-field",t.inputText,!1))],1),e("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"12"}},[e("v-autocomplete",t._b({staticClass:"mr-3",attrs:{items:t.catPuestos,"item-value":"idPuesto","item-text":"nombre",label:"Puesto"},model:{value:t.user.idPuesto,callback:function(e){t.$set(t.user,"idPuesto",e)},expression:"user.idPuesto"}},"v-autocomplete",t.inputAutocomplete,!1))],1),e("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"12"}},[e("v-text-field",t._b({staticClass:"mr-3",attrs:{label:"Teléfono Móvil"},model:{value:t.user.numCelular,callback:function(e){t.$set(t.user,"numCelular",e)},expression:"user.numCelular"}},"v-text-field",t.inputTelMovil,!1))],1),e("v-col",{attrs:{cols:"12",xl:"4",lg:"4",md:"4",sm:"12"}},[t.cambioFoto?e("v-file-input",t._b({staticClass:"mr-3",attrs:{label:"Fotografia",accept:"image/png, image/jpeg, image/jpg"},on:{change:t.convertToBase64},model:{value:t.fotoBase64,callback:function(e){t.fotoBase64=e},expression:"fotoBase64"}},"v-file-input",t.inputImage,!1)):t._e()],1)],1),e("v-row",["Editar"===t.titleDialog?e("v-col",{attrs:{cols:"12"}},[e("v-checkbox",{attrs:{label:"Cambiar Imagen"},model:{value:t.cambioFoto,callback:function(e){t.cambioFoto=e},expression:"cambioFoto"}})],1):t._e(),e("v-col",{attrs:{cols:"12"}},[!t.cambioFoto&&t.user.foto?e("v-img",{attrs:{"max-height":"500","max-width":"500",src:t.user.foto,contain:""}}):t._e()],1)],1)],1)],1),e("v-card",{staticClass:"my-card",attrs:{elevation:"5"}},[e("v-card-title",[t._v("Datos de familiares  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{attrs:{headers:t.headersFamiliares,items:t.user.familiares,"hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"d-flex mt-2"},[e("v-btn",{staticClass:"ml-auto",attrs:{color:"primary"},on:{click:function(e){return t.addFamiliar()}}},[t._v(" Agregar ")])],1)]},proxy:!0},{key:"item.idParentezco",fn:function({item:a}){return[e("v-autocomplete",t._b({attrs:{items:t.catParentescos,"item-value":"idParentesco","item-text":"nombre"},model:{value:a.idParentezco,callback:function(e){t.$set(a,"idParentezco",e)},expression:"item.idParentezco"}},"v-autocomplete",t.inputAutocomplete,!1))]}},{key:"item.nombre",fn:function({item:a}){return[e("v-text-field",t._b({model:{value:a.nombre,callback:function(e){t.$set(a,"nombre",e)},expression:"item.nombre"}},"v-text-field",t.inputText,!1))]}},{key:"item.apellidoP",fn:function({item:a}){return[e("v-text-field",t._b({model:{value:a.apellidoP,callback:function(e){t.$set(a,"apellidoP",e)},expression:"item.apellidoP"}},"v-text-field",t.inputText,!1))]}},{key:"item.apellidoM",fn:function({item:a}){return[e("v-text-field",t._b({model:{value:a.apellidoM,callback:function(e){t.$set(a,"apellidoM",e)},expression:"item.apellidoM"}},"v-text-field",t.inputText,!1))]}},{key:"item.edad",fn:function({item:a}){return[e("v-text-field",t._b({model:{value:a.edad,callback:function(e){t.$set(a,"edad",e)},expression:"item.edad"}},"v-text-field",t.inputEdad,!1))]}},{key:"item.acciones",fn:function({item:a}){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.deleteFamiliar(a)}}},"v-btn",o,!1),r),[e("v-icon",[t._v("mdi-trash-can")])],1)]}}],null,!0)},[e("span",[t._v("Eliminar")])])]}}],null,!0)})],1)],1)],1)],1),e("v-card",{staticClass:"my-card",attrs:{elevation:"5"}},[e("v-card-title",[t._v("Tipo de QR  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-radio-group",{attrs:{mandatory:""},model:{value:t.user.qr.tipoQR,callback:function(e){t.$set(t.user.qr,"tipoQR",e)},expression:"user.qr.tipoQR"}},[e("v-row",t._l(t.opcionesQr,(function(t){return e("v-col",{key:t.value,attrs:{cols:"12",xl:"3",lg:"3",md:"3",sm:"6"}},[e("v-list-item",[e("v-radio",{attrs:{value:t.value}}),e("v-img",{attrs:{"max-height":"150","max-width":"200",src:t.imageUrl,contain:""}})],1)],1)})),1)],1)],1)],1)],1),e("v-card-text",{staticClass:"d-flex align-left"},[e("v-checkbox",{staticClass:"mr-3",attrs:{label:"El QR lleva logo?"},model:{value:t.user.qr.imagenQR,callback:function(e){t.$set(t.user.qr,"imagenQR",e)},expression:"user.qr.imagenQR"}}),t.user.qr.imagenQR&&t.cambioFotoQr?e("v-file-input",t._b({staticClass:"mr-3",attrs:{accept:"image/png, image/jpeg, image/jpg"},on:{change:t.convertQrToBase64},model:{value:t.qrBase64,callback:function(e){t.qrBase64=e},expression:"qrBase64"}},"v-file-input",t.inputImage,!1)):t._e()],1),e("v-card-text",[e("v-row",["Editar"===t.titleDialog?e("v-col",{attrs:{cols:"12"}},[e("v-checkbox",{attrs:{label:"Cambiar Imagen"},model:{value:t.cambioFotoQr,callback:function(e){t.cambioFotoQr=e},expression:"cambioFotoQr"}})],1):t._e(),e("v-col",{attrs:{cols:"12"}},[!t.cambioFotoQr&&t.user.qr.urlImagenQR?e("v-img",{attrs:{"max-height":"500","max-width":"500",src:t.user.qr.urlImagenQR,contain:""}}):t._e()],1)],1)],1)],1),e("div",{staticStyle:{height:"30px"}})],1)],1)],1),e("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e("v-card",[e("v-card-title",[t._v('Se eliminará a "'+t._s(t.userDelete.nombre)+" "+t._s(t.userDelete.apellidoP)+" "+t._s(t.userDelete.apellidoM)+'"')]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"success"},on:{click:function(e){return t.closeDialogDelete()}}},[t._v("Cancelar")]),e("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){return t.deleteTrabajador()}}},[t._v("Eliminar")])],1)],1)],1),e("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialogPreview,callback:function(e){t.dialogPreview=e},expression:"dialogPreview"}},[e("v-card",{attrs:{color:"fondo"}},[e("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[e("v-toolbar-title",[t._v("Datos de "+t._s(t.userPreview.nombre))]),e("v-toolbar-items",{staticClass:"ml-auto"},[e("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.closeDialogPreview()}}},[e("v-icon",[t._v(" mdi-close ")])],1)],1)],1),e("v-card",{staticClass:"mx-auto"},[e("v-card",{staticClass:"d-flex justify-center",attrs:{dark:""}},[e("v-img",{staticClass:"img-user-preview",staticStyle:{position:"absolute",top:"10px","border-radius":"50%",width:"200px",height:"200px","z-index":"2"},attrs:{src:t.userPreview.foto}}),e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/forest.jpg",gradient:"to top, rgba(0,0,0,.44), rgba(0,0,0,.44)",height:"220"}})],1),e("v-card-title",{staticClass:"d-flex justify-center mt-150"},[t._v(" "+t._s(t.userPreview.nombre)+" "+t._s(t.userPreview.apellidoP)+" "+t._s(t.userPreview.apellidoM)+" ("+t._s(t.userPreview.puesto)+") ")])],1)],1)],1)],1)},Q=[],R=(a(8858),a(1318),a(3228),{data(){return{inputText:{outlined:!1,dense:!1,required:!0,rules:[t=>null!==t&&""!==t||"Dato requerido"]},inputAutocomplete:{outlined:!1,dense:!1,required:!0,clearable:!0,rules:[t=>null!==t&&""!==t||"Dato requerido"]},inputTelMovil:{outlined:!1,dense:!1,required:!0,type:"number",inputmode:"numeric",counter:10,rules:[t=>null===t||""===t?"Dato requerido":!t||10==t.length||"Número no valido"]},inputEdad:{outlined:!1,dense:!1,required:!0,type:"number",inputmode:"numeric",counter:2,rules:[t=>null===t||""===t?"Dato requerido":!(t.length>2)||""]},inputMail:{outlined:!1,dense:!0,required:!0,type:"phone",rules:[t=>null===t||""===t?"Dato requerido":!!/.+@.+/.test(t)||"Formato no valido"]},inputImage:{required:!0,rules:[t=>null!==t&&""!==t||"Dato requerido"]},headers:[{text:"Nombre Completo",value:"nombreCompleto",align:"center",sortable:!0},{text:"Puesto",value:"puesto",align:"center",sortable:!0},{text:"Celular",value:"numCelular",align:"center",sortable:!0},{value:"acciones",align:"center",sortable:!1}],headersFamiliares:[{text:"Parentesco",value:"idParentezco",align:"center",sortable:!1},{text:"Nombre(s)",value:"nombre",align:"center",sortable:!1},{text:"Apellido Paterno",value:"apellidoP",align:"center",sortable:!1},{text:"Apellido Materno",value:"apellidoM",align:"center",sortable:!1},{text:"Edad",value:"edad",align:"center",sortable:!1},{value:"acciones",align:"center",sortable:!1}],catTrabajadores:[],catPuestos:[],catParentescos:[],user:{nombre:null,apellidoP:null,apellidoM:null,idPuesto:null,qr:{idQr:null,url:null,tipoQR:null,imagenQR:!1,urlImagenQR:null},numCelular:null,foto:null,familiares:[]},defaultUser:{nombre:null,apellidoP:null,apellidoM:null,idPuesto:null,qr:{idQr:null,url:null,tipoQR:null,imagenQR:!1,urlImagenQR:null},numCelular:null,foto:null,familiares:[]},userDelete:{nombre:null,apellidoP:null,apellidoM:null},defaultUserDelete:{nombre:null,apellidoP:null,apellidoM:null},userPreview:{idTrabajador:null,nombre:null,apellidoP:null,apellidoM:null,idPuesto:null,puesto:null,idQR:null,numCelular:null,foto:null,familiares:[{idFamilia:null,idParentezco:null,parentezco:null,nombre:null,apellidoP:null,apellidoM:null,edad:null}]},userPreviewDefault:{idTrabajador:null,nombre:null,apellidoP:null,apellidoM:null,idPuesto:null,puesto:null,idQR:null,numCelular:null,foto:null,familiares:[{idFamilia:null,idParentezco:null,parentezco:null,nombre:null,apellidoP:null,apellidoM:null,edad:null}]},idTrabajador:null,idFamiliar:0,titleDialog:"",cambioFoto:!0,cambioFotoQr:!0,ulrUserQr:null,imageUrl:null,fotoBase64:null,qrBase64:null,opcionesQr:[{value:1,imageUrl:"https://aavisor.azurewebsites.net/QRs/Plantillas/Qr1.png"},{value:2,imageUrl:"https://aavisor.azurewebsites.net/QRs/Plantillas/Qr2.png"},{value:3,imageUrl:"https://aavisor.azurewebsites.net/QRs/Plantillas/Qr3.png"},{value:4,imageUrl:"https://aavisor.azurewebsites.net/QRs/Plantillas/Qr4.png"}],dialog:!1,dialog2:!1,dialogDelete:!1,dialogPreview:!1}},methods:{mountedComponente(){this.getTrabajadores(),this.getPuestos(),this.getParentescos()},getTrabajadores(){P.Z.get("Trabajador/Listar").then((t=>{this.catTrabajadores=t.data})).catch((t=>{console.log(t)}))},postTrabajadores(){P.Z.post("Trabajador/Crear",this.user).then((t=>{this.getTrabajadores(),this.closeDialog(),this.closeDialog2()})).catch((t=>{console.log(t)}))},putTrabajadores(){this.user.foto=this.cambioFoto?this.user.foto:null,this.user.qr.urlImagenQR=this.cambioFotoQr?this.user.qr.urlImagenQR:null,P.Z.put("Trabajador/Actualizar/"+this.idTrabajador,this.user).then((t=>{this.getTrabajadores(),this.closeDialog(),this.closeDialog2()})).catch((t=>{console.log(t)}))},deleteTrabajador(){P.Z.put("Trabajador/Desactivar/"+this.idTrabajador).then((t=>{this.getTrabajadores(),this.closeDialogDelete()})).catch((t=>{console.log(t)}))},getPuestos(){P.Z.get("Puesto/Listar").then((t=>{this.catPuestos=t.data})).catch((t=>{console.log(t)}))},getParentescos(){P.Z.get("Parentesco/Listar").then((t=>{this.catParentescos=t.data})).catch((t=>{console.log(t)}))},getDatosQr(t){P.Z.get("Trabajador/Buscar/"+t).then((t=>{this.userPreview=Object.assign({},t.data),this.userPreview.familiares=JSON.parse(JSON.stringify(t.data.familiares))})).catch((t=>{console.log(t)}))},validationForm(){this.$refs.form.validate()&&("Nuevo"===this.titleDialog?this.postTrabajadores():this.putTrabajadores())},openDialog(t){this.cambioFoto=!0,this.cambioFotoQr=!0,this.dialog=!0,this.titleDialog=t?"Editar":"Nuevo",t&&(this.cambioFoto=!1,this.cambioFotoQr=!1,this.idTrabajador=t.idTrabajador,this.user=Object.assign({},t),this.user.familiares=JSON.parse(JSON.stringify(t.familiares)),this.user.qr=Object.assign({},t.qr))},closeDialog(){this.dialog=!1,this.user=Object.assign({},this.defaultUser),this.user.familiares=JSON.parse(JSON.stringify([])),this.user.qr=Object.assign({},this.defaultUser.qr),this.idTrabajador=null,this.idFamiliar=0,this.$refs.form.reset()},openDialogDelete(t){this.userDelete=Object.assign({},t),this.userDelete.qr=Object.assign({},t.qr),this.idTrabajador=t.idTrabajador,this.dialogDelete=!0},closeDialogDelete(){this.dialogDelete=!1,this.userDelete=Object.assign({},this.defaultUser),this.userDelete.qr=Object.assign({},this.defaultUser.qr)},openPreview(t){t.idQR;this.$router.push({name:"Visualizar",params:{id:15}})},closeDialogPreview(){this.dialogPreview=!1},downloadQr(t){this.ulrUserQr=t.qr.url,P.Z.get(this.ulrUserQr,{responseType:"blob"}).then((t=>{const e=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=e,a.setAttribute("download","nombre_de_archivo.jpg"),a.click(),window.URL.revokeObjectURL(e)})).catch((t=>{console.error("Error al descargar la imagen",t)}))},openDialog2(){this.dialog2=!0},closeDialog2(){this.dialog2=!1,this.user=Object.assign({},this.defaultUser),this.user.familiares=[],this.idFamiliar=0,this.$refs.form.reset()},convertToBase64(){if(this.fotoBase64){const t=new FileReader;t.onload=t=>{const e=t.target.result;this.user.foto=e.split(",")[1]},t.readAsDataURL(this.fotoBase64)}},convertQrToBase64(){if(this.qrBase64){const t=new FileReader;t.onload=t=>{const e=t.target.result;this.user.qr.urlImagenQR=e.split(",")[1]},t.readAsDataURL(this.qrBase64)}},addFamiliar(){this.user.familiares.push({idFamilia:this.idFamiliar++,idParentezco:null,nombre:null,apellidoP:null,apellidoM:null,edad:null})},deleteFamiliar(t){const e=this.user.familiares.indexOf(t);this.user.familiares.splice(e,1)}},mounted(){this.mountedComponente()}}),O=R,U=(0,n.Z)(O,q,Q,!1,null,"10e92e7c",null),Z=U.exports,$=function(){var t=this,e=t._self._c;return e("div",[e("v-data-table",{attrs:{headers:t.headers,items:t.catParentescos},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"d-flex justify-center"},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:a,on:o}){return[e("v-btn",t._g(t._b({staticClass:"ml-auto mr-5 mt-5",attrs:{icon:""},on:{click:function(e){return t.getParentescos()}}},"v-btn",a,!1),o),[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-reload")])],1)]}}])},[e("span",[t._v("Recargar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:a,on:o}){return[e("v-btn",t._g(t._b({staticClass:"mr-5 mt-5",attrs:{icon:""},on:{click:function(e){return t.openDialog()}}},"v-btn",a,!1),o),[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-plus")])],1)]}}])},[e("span",[t._v("Nuevo Registro")])])],1)]},proxy:!0},{key:"item.acciones",fn:function({item:a}){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openDialog(a)}}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Editar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openDialogDelete(a)}}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}],null,!0)},[e("span",[t._v("Eliminar")])])]}}],null,!0)}),e("v-dialog",{staticStyle:{"padding-bottom":"30px"},attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",{attrs:{color:"fondo"}},[e("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[e("v-toolbar-title",[t._v(t._s(t.titleDialog)+" Registro")]),e("v-toolbar-items",{staticClass:"ml-auto"},[e("v-btn",{attrs:{text:""},on:{click:function(e){return t.validationForm()}}},[e("v-icon",[t._v("mdi-content-save")])],1),e("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",[t._v(" mdi-close ")])],1)],1)],1),e("v-form",{ref:"form"},[e("v-card",{staticClass:"my-card",attrs:{elevation:"5"}},[e("v-card-title",[t._v("Parentesco  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",t._b({attrs:{label:"Parentesco"},model:{value:t.parentesco.nombre,callback:function(e){t.$set(t.parentesco,"nombre",e)},expression:"parentesco.nombre"}},"v-text-field",t.inputText,!1))],1),e("v-col",{attrs:{cols:"12"}},[e("v-textarea",t._b({staticClass:"mr-3",attrs:{label:"Descripción"},model:{value:t.parentesco.descripcion,callback:function(e){t.$set(t.parentesco,"descripcion",e)},expression:"parentesco.descripcion"}},"v-textarea",t.inputText,!1))],1)],1)],1)],1)],1)],1)],1),e("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e("v-card",[e("v-card-title",[t._v('Se eliminará el parentesco de "'+t._s(t.parentescoDelete.nombre)+'"')]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"success"},on:{click:function(e){return t.closeDialogDelete()}}},[t._v("Cancelar")]),e("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){return t.deletePuesto()}}},[t._v("Eliminar")])],1)],1)],1)],1)},L=[],M={data(){return{inputText:{outlined:!1,dense:!1,required:!0,rules:[t=>null!==t&&""!==t||"Dato requerido"]},headers:[{text:"Parentesco",value:"nombre",align:"center",sortable:!1},{text:"Descripción",value:"descripcion",align:"center",sortable:!1},{value:"acciones",align:"center",sortable:!1}],catParentescos:[],parentesco:{idParentesco:null,nombre:null,descripcion:null},defaultParentesco:{idParentesco:null,nombre:null,descripcion:null},parentescoDelete:{idParentesco:null,nombre:null,descripcion:null},defaultParentescoDelete:{idParentesco:null,nombre:null,descripcion:null},idParentesco:null,titleDialog:"",dialog:!1,dialogDelete:!1}},methods:{mountedComponente(){this.getParentescos()},getParentescos(){P.Z.get("Parentesco/Listar").then((t=>{this.catParentescos=t.data})).catch((t=>{console.log(t)}))},postParentesco(){P.Z.post("Parentesco/Crear",this.parentesco).then((t=>{this.getParentescos(),this.dialog=!1})).catch((t=>{console.log(t)}))},putParentesco(){P.Z.put("Parentesco/Actualizar/"+this.idParentesco,this.parentesco).then((t=>{this.getParentescos(),this.dialog=!1})).catch((t=>{console.log(t)}))},deletePuesto(){P.Z.put("Parentesco/Desactivar/"+this.idParentesco).then((t=>{this.getParentescos(),this.dialogDelete=!1})).catch((t=>{console.log(t)}))},validationForm(){this.$refs.form.validate()&&("Nuevo"===this.titleDialog?this.postParentesco():this.putParentesco())},openDialog(t){this.dialog=!0,this.titleDialog=t?"Editar":"Nuevo",t&&(this.idParentesco=t.idParentesco,this.parentesco=Object.assign({},t))},closeDialog(){this.dialog=!1,this.parentesco=Object.assign({},this.defaultParentesco),this.idParentesco=null,this.$refs.form.reset()},openDialogDelete(t){this.parentescoDelete=Object.assign({},t),this.idParentesco=t.idParentesco,this.dialogDelete=!0},closeDialogDelete(){this.dialogDelete=!1,this.parentescoDelete=Object.assign({},this.defaultParentesco)}},mounted(){this.mountedComponente()}},z=M,N=(0,n.Z)(z,$,L,!1,null,"62ad001c",null),E=N.exports,A=function(){var t=this,e=t._self._c;return e("div",[e("v-data-table",{attrs:{headers:t.headers,items:t.catPuestos},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"d-flex justify-center"},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:a,on:o}){return[e("v-btn",t._g(t._b({staticClass:"ml-auto mr-5 mt-5",attrs:{icon:""},on:{click:function(e){return t.getPuestos()}}},"v-btn",a,!1),o),[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-reload")])],1)]}}])},[e("span",[t._v("Recargar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:a,on:o}){return[e("v-btn",t._g(t._b({staticClass:"mr-5 mt-5",attrs:{icon:""},on:{click:function(e){return t.openDialog()}}},"v-btn",a,!1),o),[e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-plus")])],1)]}}])},[e("span",[t._v("Nuevo Registro")])])],1)]},proxy:!0},{key:"item.acciones",fn:function({item:a}){return[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openDialog(a)}}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Editar")])]),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({attrs:o,on:r}){return[e("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.openDialogDelete(a)}}},"v-btn",o,!1),r),[e("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}],null,!0)},[e("span",[t._v("Eliminar")])])]}}],null,!0)}),e("v-dialog",{staticStyle:{"padding-bottom":"30px"},attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",{attrs:{color:"fondo"}},[e("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[e("v-toolbar-title",[t._v(t._s(t.titleDialog)+" Registro")]),e("v-toolbar-items",{staticClass:"ml-auto"},[e("v-btn",{attrs:{text:""},on:{click:function(e){return t.validationForm()}}},[e("v-icon",[t._v("mdi-content-save")])],1),e("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.closeDialog()}}},[e("v-icon",[t._v(" mdi-close ")])],1)],1)],1),e("v-form",{ref:"form"},[e("v-card",{staticClass:"my-card",attrs:{elevation:"5"}},[e("v-card-title",[t._v("Puesto  "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",t._b({attrs:{label:"Puesto"},model:{value:t.puesto.nombre,callback:function(e){t.$set(t.puesto,"nombre",e)},expression:"puesto.nombre"}},"v-text-field",t.inputText,!1))],1),e("v-col",{attrs:{cols:"12"}},[e("v-textarea",t._b({staticClass:"mr-3",attrs:{label:"Descripción"},model:{value:t.puesto.descripcion,callback:function(e){t.$set(t.puesto,"descripcion",e)},expression:"puesto.descripcion"}},"v-textarea",t.inputText,!1))],1)],1)],1)],1)],1)],1)],1),e("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e("v-card",[e("v-card-title",[t._v('Se eliminará el puesto de "'+t._s(t.puestoDelete.nombre)+'"')]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"success"},on:{click:function(e){return t.closeDialogDelete()}}},[t._v("Cancelar")]),e("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){return t.deletePuesto()}}},[t._v("Eliminar")])],1)],1)],1)],1)},B=[],I={data(){return{inputText:{outlined:!1,dense:!1,required:!0,rules:[t=>null!==t&&""!==t||"Dato requerido"]},headers:[{text:"Puesto",value:"nombre",align:"center",sortable:!1},{text:"Descripción",value:"descripcion",align:"center",sortable:!1},{value:"acciones",align:"center",sortable:!1}],catPuestos:[],puesto:{idPuesto:null,nombre:null,descripcion:null},defaultPuesto:{idPuesto:null,nombre:null,descripcion:null},puestoDelete:{idPuesto:null,nombre:null,descripcion:null},defaultPuestoDelete:{idPuesto:null,nombre:null,descripcion:null},idPuesto:null,titleDialog:"",dialog:!1,dialogDelete:!1}},methods:{mountedComponente(){this.getPuestos()},getPuestos(){P.Z.get("Puesto/Listar").then((t=>{this.catPuestos=t.data})).catch((t=>{console.log(t)}))},postPuesto(){P.Z.post("Puesto/Crear",this.puesto).then((t=>{this.getPuestos(),this.dialog=!1})).catch((t=>{console.log(t)}))},putPuesto(){P.Z.put("Puesto/Actualizar/"+this.idPuesto,this.puesto).then((t=>{this.getPuestos(),this.dialog=!1})).catch((t=>{console.log(t)}))},deletePuesto(){P.Z.put("Puesto/Desactivar/"+this.idPuesto).then((t=>{this.getPuestos(),this.dialogDelete=!1})).catch((t=>{console.log(t)}))},validationForm(){this.$refs.form.validate()&&("Nuevo"===this.titleDialog?this.postPuesto():this.putPuesto())},openDialog(t){this.dialog=!0,this.titleDialog=t?"Editar":"Nuevo",t&&(this.idPuesto=t.idPuesto,this.puesto=Object.assign({},t))},closeDialog(){this.dialog=!1,this.puesto=Object.assign({},this.defaultPuesto),this.idPuesto=null,this.$refs.form.reset()},openDialogDelete(t){this.puestoDelete=Object.assign({},t),this.idPuesto=t.idPuesto,this.dialogDelete=!0},closeDialogDelete(){this.dialogDelete=!1,this.puestoDelete=Object.assign({},this.defaultPuesto)}},mounted(){this.mountedComponente()}},J=I,V=(0,n.Z)(J,A,B,!1,null,"3bfa1838",null),G=V.exports;o["default"].use(d.ZP);const H=[{path:"/",name:"Login",component:y},{path:"/Panel",name:"Contenedor",component:f,children:[{path:"/Panel/Trabajadores",name:"Trabajadores",component:Z},{path:"/Panel/Parentescos",name:"Parentescos",component:E},{path:"/Panel/Puestos",name:"Puestos",component:G}]},{path:"/Visualizar/:id",name:"Visualizar",component:S}],K=new d.ZP({routes:H});var W=K,X=a(3822);o["default"].use(X.ZP);var Y=new X.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),tt=a(707),et=a.n(tt),at=(a(8556),a(6808));o["default"].use(et());var ot=new(et())({theme:{options:{customProperties:!0},themes:{light:{primary:"#0072C8",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",fondo:"#FFFFFF"}}},lang:{locales:{es:at.Z},current:"es"}});o["default"].config.productionTip=!1,new o["default"]({router:W,store:Y,vuetify:ot,render:t=>t(u)}).$mount("#app"),P.Z.defaults.transformRequest=[t=>JSON.stringify(t)],P.Z.defaults.baseURL="https://aavisor.azurewebsites.net/api",P.Z.defaults.headers.get["Accept"]="application/json",P.Z.defaults.headers.common["Content-Type"]="application/json";let rt=localStorage.getItem("token");rt&&(P.Z.defaults.headers.common["Authorization"]=rt),P.Z.interceptors.request.use((t=>{let e=localStorage.getItem("token");return e&&(t.headers["Authorization"]=e),t})),o["default"].prototype.$http=P.Z}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,o,r,i){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],i=t[u][2];for(var l=!0,n=0;n<o.length;n++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](o[n])}))?o.splice(n--,1):(l=!1,i<s&&(s=i));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],l=o[1],n=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(n)var u=n(a)}for(e&&e(o);c<s.length;c++)i=s[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},o=self["webpackChunktrabajo_am"]=self["webpackChunktrabajo_am"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(8729)}));o=a.O(o)})();
//# sourceMappingURL=app.4bc4e7f4.js.map