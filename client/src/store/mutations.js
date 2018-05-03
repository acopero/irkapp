import { logger } from '@/helpers'

const mutations = {
  // Fija la lista de usuarios que se ve en contactos
  SET_USERS_LIST (state, data) {
    logger('commiting SET_USERS_LIST')
    state.users = data
    logger(data[0]['name'])
  },
  // Fija los datos del chat activo
  SET_CHAT (state, data) {
    logger('commiting SET_CHAT')
    state.chat.from = data.from
    state.chat.conversation = data.conversation
  },
  // Fija la ventana principal
  SETWINDOW (state, data) {
    logger('commiting SETWINDOW')
    state.mainWindow = data
  },
  // Agrega un chat con un nuevo usuario al array chats
  ADD_CHAT (state, data) {
    logger('commiting ADD_CHAT', data)
    state.chats.push(data)
  },
  // Agrega un nuevo mensaje a la conversación
  ADD_MSG (state, chat, message) {
    logger('commiting ADD_MSG')
    const chate = state.chats.find(item => item === chat)
    chate.conversation.push(message)
  },
  // borrar
  SETSNACK (state, data) {
    state.snack = data
  },
  // No se usa?
  SET_GAPI (state, gapi) {
    logger('commiting SET_GAPI')
    state.gapi = gapi
  },
  // Fija las credenciales de la cuenta de Google
  SET_CREDENTIALS (state, credentials) {
    logger('commiting SET_CREDENTIALS')
    state.app.id = credentials.id
    state.app.email = credentials.email
    state.app.name = credentials.name
  },
  // Cambia la aplicación a activa
  SWITCH_ACTIVE: state => {
    logger('commiting SWITCH_ACTIVE')
    state.app.active = !state.app.active
  },
  // Elimina todas las alert de array
  CLEAR_ALERTS: state => {
    logger('commiting CLEAR_ALERTS')
    state.alerts = []
  },
  // Agrega un nuevo mensaje de alert
  ADD_ALERT: (state, msg) => {
    logger('commiting ADD_ALERT')
    state.alerts.push(msg)
  },
  // Fija el objeto WebSocket
  SET_SOCKET: (state, socket) => {
    logger('commiting SET_SOCKET')
    state.socket = socket
  }
}

export default mutations
