<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Estas seguro de que deseas eliminar esto?</h3>
          <p>Titulo: {{ this.element.tittle }}</p>
          <p>Titulo: {{ this.element.description }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-button v-on:click="Delete" variant="danger">Eliminar</b-button>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import swal from 'sweetalert'
    export default {
        data() {
          return {
            ecuacionesId: this.$route.params.ecuacionesId,
            element: {
              tittle: '',
              description: ''
            }
          }
        },
      methods: {
        getEcuaciones() {
          const path = `http://127.0.0.1:8000/api/v1.0/ecuacionesNoLineales/${this.ecuacionesId}/`;
          axios.get(path).then((response) => {
            this.element.tittle = response.data.tittle;
            this.element.description = response.data.description
          })
            .catch((error => {
              console.log(error)
            }))
        },
        Delete() {
          const path = `http://127.0.0.1:8000/api/v1.0/ecuacionesNoLineales/${this.ecuacionesId}/`;
          axios.delete(path).then((response) => {
            location.href = '/ecuaciones-no-lineales'
          })
            .catch((error) => {
              swal('No es posible eliminar esto', '', 'error')
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
