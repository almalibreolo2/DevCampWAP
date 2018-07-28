<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodo="addTodoItem"></todo-input>
    <todo-list :propsdata="todoItems" @removeTodo="removeTodoItem"></todo-list>
    <todo-footer @clearTodoItems="clearAllItems"></todo-footer>
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
  data () {
    return {
      todoItems: []
    }
  },
  created () {
      for (let i=0; i<localStorage.length; i++) {
          let key = localStorage.key(i)
          if(key !== 'loglevel:webpack-dev-server' && key !== 'todoItems') {
              this.todoItems.push(key)
          }
      }
  },
  methods: {
    addTodoItem (value) {
      localStorage.setItem(value, value)
			this.todoItems.push(value);
    },
    removeTodoItem (todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    },
    clearAllItems () {
      this.todoItems = []
      localStorage.clear()
      localStorage.setItem('todoItems', '[{"name":"asdfs","state":"A","key":1532597406962},{"name":"ds","state":"A","key":1532597408448},{"name":"ffff","state":"A","key":1532597409916},{"name":"sdf","state":"A","key":1532597412187},{"name":"222","state":"C","key":1532698272396},{"name":"sdfsadf","state":"A","key":1532698564253},{"name":"ss","state":"C","key":1532698565555},{"name":"22","state":"C","key":1532698566747}]')
    }
  }
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