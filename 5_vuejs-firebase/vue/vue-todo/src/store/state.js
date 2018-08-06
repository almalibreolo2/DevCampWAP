import { storage } from '../utils/storage.js'

export const state = {
    message: 'Vuex message',
    todoItems: storage.fetch() || []
}