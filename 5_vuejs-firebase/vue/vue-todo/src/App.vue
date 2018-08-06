<template>
  <div id="app">
    <todo-header></todo-header>
    
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
    <!-- <todo-input @addTodo="addTodoItem"></todo-input>
    <todo-list :propsdata="todoItems" @removeTodo="removeTodoItem"></todo-list>
    <todo-footer @clearTodoItems="clearAllItems"></todo-footer> -->
  </div>
</template>

<script>
// 지난 주에 했었던 ES5 기반 컴포넌트 등록 방식
// var TodoHeader = {
//   template: ''
// }

// new Vue({
//   components: {
//     TodoHeader
//   }
// })

// Vue CLI로 생성한 컴포넌트 등록 방식 (ES6 modules)
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  // data () {
  //   return {
  //     todoItems: this.$store.state.todoItems
  //   }
  // },
  // created () {
  //     for (let i=0; i<localStorage.length; i++) {
  //         let key = localStorage.key(i)
  //         if(key !== 'loglevel:webpack-dev-server' && key !== 'todoItems') {
  //             this.todoItems.push(key)
  //         }
  //     }
  // },
  // methods: {
    // addTodoItem (value) {
      // localStorage.setItem(value, value)
      // this.todoItems.push(value);
    // },
    // removeTodoItem (todoItem, index) {
    //   localStorage.removeItem(todoItem)
    //   this.todoItems.splice(index, 1)
    // },
    // clearAllItems () {
    //   this.todoItems = []

    //   let todoItemsStr = localStorage.getItem('todoItems')
    //   localStorage.clear()
    //   localStorage.setItem('todoItems', todoItemsStr)
    // }
  // }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>