<template>
  <div>
      <div class="d-flex flex-row" style="margin-left: 15px; margin-bottom: 15px;">
        <button id="show-modal" href="/#ADD" @click.prevent="show" type="button" class="btn btn-success float-left p-2">Add</button>
      </div>
      <div class="body">
          <table class="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.idd">
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>
                <button v-on:click="btnTmpl(user)" style="margin-right: 10px" type="button" class="btn btn-outline-info">Detalhar</button>
                <button @click="edit(user)" style="margin-right: 10px" type="button" class="btn btn-outline-primary">Editar</button>
                <button v-on:click="btnHps(user)" type="button" class="btn btn-outline-danger">Deletar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <modal name="modal-tambah" :adaptive="true" :width="400">
            <div class="modal-header">
                <h4 class="modal-title" v-show="!validView && !update">Adicionar</h4>
                <h4 class="modal-title" v-show="update">Editar</h4>
                <h4 class="modal-title" v-show="validView && !update">Informações</h4>
            </div>
            <div class="modal-body">
                <form @submit.prevent="add">
                    <input type="hidden" v-model="form.id">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input :disabled="validView" v-model="form.name" name="name" type="text" class="form-control" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input :disabled="validView" v-model="form.email" name="email" type="email" class="form-control" id="email" required>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <button style="margin-right: 10px" v-show="!update" v-if="!validView"  type="submit" class="btn btn-outline-success">Submit</button>
                        <button style="margin-right: 10px" v-on:click="btnUpd(form)" v-show="update" v-if="!validView" type="button" class="btn btn-outline-success">Update</button>
                        <button v-on:click="btnClos" type="button" class="btn btn-outline-success">Close</button>
                    </div>
                 </form>     
            </div>
        </modal>
  </div>
</template>

<script> 
import axios from 'axios'

export default {
  data(){
    return{
        form: {
          id: '',
          name: '',
          email: ''
        },
        users: '',
        update: false,
        validView: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
      load(){
          axios.get('http://localhost:3000/users').then(res => {
          this.users = res.data
        }).catch ((err) => {
          console.log('tidak ada koneksi');
          
        })
      },
      show() {
              this.$modal.show('modal-tambah')
          },
      hide() {
              this.$modal.hide('modal-tambah')
              this.validView = false
          }, 
      add(){
          axios.post('http://localhost:3000/users/', this.form).then(res => {
              alert( 'Name = ' + this.form.name + " " + 'Email= ' + this.form.email + ' ' + '')
              this.form.name = ''
              this.form.email=''
              this.load()
              this.$modal.hide('modal-tambah')
          })
          },
      edit(user){
          this.$modal.show('modal-tambah')
          this.update= true
          this.form.id = user.id
          this.form.name = user.name
          this.form.email = user.email
      },
      btnUpd(form){
           return axios.put('http://localhost:3000/users/' + form.id , {name: this.form.name, email:this.form.email}).then(res => {
              this.load()
              this.form.name=''
              this.form.email=''
              this.$modal.hide('modal-tambah')
              this.update= false
          }).catch((err) => {
            console.log('data tidak berhasil di update');
          })
      },
      btnHps(user){
          return axios.delete('http://localhost:3000/users/' + user.id).then(res => {
            this.load()
          })

      },
      btnTmpl(user){
        this.$modal.show('modal-tambah')
        this.validView = true
        this.form.name = user.name
        this.form.email = user.email
      },
      btnClos(){
        this.$modal.hide('modal-tambah')
        this.validView = false
        this.update= false
      }

    }
}
</script>

<style scoped>
#body{
  margin-top: 15px;
}


</style>
