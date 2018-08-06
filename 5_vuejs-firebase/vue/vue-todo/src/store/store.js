import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { state } from './state.js'
import { getters } from './getters.js'
import { mutations } from './mutations.js'
// 위와 같은 코드임. import와 관련된 문법은 여러가지 방법이 있음.
// import * as state from './state.js'
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

import auth from './auth/index.js'

// use() 라는 함수는 Vue에서 제공하는 plugin 임.
// Vue.use(VueRouter)
// Vue.use(Bootstrap)
// Vue.use(ZingChart)
Vue.use(Vuex)

// const storage = {
//     fetch () {
//         let arr = []
//         for (let i=0; i<localStorage.length; i++) {
//             let key = localStorage.key(i)
//             if(key !== 'loglevel:webpack-dev-server' && key !== 'todoItems') {
//                 arr.push(key)
//             }
//         }
//         return arr
//     }
// }

export const store =  new Vuex.Store({
    // state: {},
    // getters: {},
    // mutations: {},
    // actions: {}
    
    modules: {
        auth
    },
    
    state,
    getters,
    mutations

    // state: {
    //     message: 'Vuex message',
    //     todoItems: storage.fetch() || []
    // },
    // getters: {
    //     reverseMessage (state) {
    //         return state.message.split('').reverse().join('')
    //     }
    // },
    // mutations: {
    //     addTodoItem (state, value) {
    //         state.todoItems.push(value)
    //         localStorage.setItem(value, value)
    //     },
    //     // removeTodoItem (state, { todoItem, index }) {
    //     removeTodoItem (state, payload) {
    //         let index = _.indexOf(state.todoItems, payload.todoItem)
    //         localStorage.removeItem(payload.todoItem)
    //         state.todoItems.splice(index, 1)
    //     },
    //     clearAllItems (state) {
    //         state.todoItems = []
    
    //         let todoItemsStr = localStorage.getItem('todoItems')
    //         localStorage.clear()
    //         localStorage.setItem('todoItems', todoItemsStr)
    //     }
    // }
})