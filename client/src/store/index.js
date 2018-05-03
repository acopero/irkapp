/**
 * Administra el estado
 *
 * Crea un objeto Vuex con las variables para la comunicación entre
 * componentes y los métodos para modificarlas.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import ws from '../ws'
import { logger } from '@/helpers'
import {
  alerts as datosAlerts,
  users as datosUsers
} from '../../test/datosprueba'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // borrar
    ws: ws,
    // Objeto WebSocket
    socket: null,
    // Los usuarios de contactos
    users: datosUsers,
    // Los datos del chat activo en la ventana Chat
    chat: {
      id: null,
      from: 'Chat',
      conversation: null
    },
    // Cambia el selector de ventanas entre toolbar y chat
    mainWindow: 'toolbar',
    // Almacena todas las conversaciones con los usuarios
    chats: [],
    // borrar
    snack: {
      show: false,
      content: '',
      timeout: 10000
    },
    // La instancia de Google Apis
    gapi: null,
    // Datos generales de quien esta logeado
    app: {
      // Si la aplicación está activa
      active: false,
      id: null,
      name: null,
      email: null
    },
    // Array con los mensajes alert
    alerts: []
  },
  actions,
  mutations
})
