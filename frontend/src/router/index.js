import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);

import EcuacionesNoLineales from '@/components/ecuacionesNoLineales/EcuacionesNoLineales'
import Edit from '@/components/ecuacionesNoLineales/Edit'
import Delete from '@/components/ecuacionesNoLineales/Delete_'
import Add from '@/components/ecuacionesNoLineales/Add'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ecuaciones-no-lineales',
      name: 'Ecuaciones no lineales',
      component: EcuacionesNoLineales
    },
    {
      path: '/ecuaciones-no-lineales/:ecuacionesId/edit',
      name: 'Editar',
      component: Edit
    },
    {
      path: '/ecuaciones-no-lineales/:ecuacionesId/delete',
      name: 'Borrar',
      component: Delete
    },
    {
      path: '/ecuaciones-no-lineales/new',
      name: 'Agregar',
      component: Add
    }
  ],
  mode: 'history'
})
