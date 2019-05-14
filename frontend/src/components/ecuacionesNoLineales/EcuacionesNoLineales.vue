<template>
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <h2>Metodos</h2>
          <b-button size="sm" variant="primary" :to="{ name:'Agregar' }">Agregar</b-button>
          <div class="coll-md-12">
            <b-table striped hover :items="ecuacionesNoLineales" :fields="fields">
              <template slot="action" slot-scope="data">
                <b-button size="5em" variant="primary" :to="{name: 'Editar', params: {ecuacionesId: data.item.id}}">Editar</b-button>
                <b-button size="5em" variant="danger" :to="{name: 'Borrar', params: {ecuacionesId: data.item.id}}">Eliminar</b-button>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
       data() {
         return {
           fields: [
             //{ key: 'xn', label: 'Xn'},
             //{ key: 'xi', label: 'xi'},
             //{ key: 'xu', label: 'xm'},
             //{ key: 'fxm', label: 'f(xm)'},
             //{ key: 'error', label: 'Error'},
             { key: 'tittle', label: 'Titulo'},
             { key: 'description', label: 'Descripcion'},
             { key: 'action', label: ''}
           ],
           ecuacionesNoLineales: []
         }
       },
      methods: {
         getEcuaciones() {
           const path = 'http://127.0.0.1:8000/api/v1.0/ecuacionesNoLineales/';
           axios.get(path).then((response) => {
             this.ecuacionesNoLineales = response.data
           })
             .catch((error) => {
               console.log(error)
             })
         }
      },
      created() {
         this.getEcuaciones()
      }
    }
</script>

<style scoped>

</style>
