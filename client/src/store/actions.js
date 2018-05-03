import { logger } from '@/helpers'
import ws from '../ws'

const actions = {
  // Cambiar la venta principal
  CHANGEWINDOW ({ commit }, win) {
    commit('SETWINDOW', win)
  },
  // borrar
  PSEUDOPROFILE ({ commit }, profile) {
    const snack = {
      show: true,
      content: `<div>Hola {{ profile.nickname }}!</div>
                <v-btn>No soy {{ profile.nickname }}</v-btn>`,
      timeout: 10000
    }
    commit('SETSNACK', snack)
  },
  // borrar
  SIGN ({ commit }, snack) {
    logger('SIGN')
    commit('SETSNACK', snack)
  },
  // Crea el WebSocket y activa la aplicación
  ACTIVATE ({ commit }, credentials) {
    const socket = ws() // transitoriamente
    commit('SET_CREDENTIALS', credentials)
    commit('SWITCH_ACTIVE')
    commit('SET_SOCKET', socket)
  },
  // Busca los datos y cambia el chat activo
  CHANGE_CHAT ({ state, commit }, user) {
    let chat = state.chats.find(item => {
      return item.from === user
    })
    commit('SET_CHAT', chat)
  }
}

export default actions
