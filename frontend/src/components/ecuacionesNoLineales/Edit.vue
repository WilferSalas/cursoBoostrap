<template>
    <div class="container">
      <div class="col text-left">
        <h2>Editar</h2>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <form @submit="onSubmit">
                  <div class="form-group row">
                    <label for="tittle" class="col-sm-2 col-form-label">Titulo</label>
                    <div class="col-sm">
                      <input type="text" placeholder="Titulo" name="tittle" class="form-control" v-model.trim="form.tittle">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="description" class="col-sm-2 col-form-label">Descripcion</label>
                    <div class="col-sm">
                      <textarea name="description" class="form-control" placeholder="Descripcion" rows="3" v-model.trim="form.description"></textarea>
                    </div>
                  </div>
                  <div class="rows">
                    <div class="col text-left">
                      <b-button type="submit" variant="primary">Editar</b-button>
                      <b-button type="submit" class="btn-large-space" variant="primary" :to="{name: 'HelloWorld'}">Cancelar</b-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios/index';
  import swal from 'sweetalert'
    export default {
        data() {
          return {
            ecuacionesID: this.$route.params.ecuacionesId,
            form: {
              title: '',
              description: ''
            }
          }
        },
      methods: {
        onSubmit(event){
          event.preventDefault();
          const path = `http://127.0.0.1:8000/api/v1.0/ecuacionesNoLineales/${this.ecuacionesID}/`;
          axios.put(path, this.form).then((response) => {
            this.form.tittle = response.data.tittle;
            this.form.description = response.data.description
          })
            .catch((error => {
              console.log(error)
            }));
          swal('Ecuacion actualizada exitosamente', '', 'success')
        },
        getEcuaciones() {
          const path = `http://127.0.0.1:8000/api/v1.0/ecuacionesNoLineales/${this.ecuacionesID}/`;
          axios.get(path).then((response) => {
            this.form.tittle = response.data.tittle;
            this.form.description = response.data.description
          })
            .catch((error => {
              console.log(error)
            }))
        }
      },
      created() {
          this.getEcuaciones()
      }
    }
</script>

<style scoped>

</style>
