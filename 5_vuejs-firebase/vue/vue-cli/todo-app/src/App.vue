<template>
  <div id="app">
    <!-- Header -->
    <todo-header></todo-header>

    <!-- Content -->
    <todo-app></todo-app>
  </div>
</template>

<script>
// import 로드할 파일 from '로드할 파일 위치'
import TodoHeader from './components/TodoHeader.vue'
import TodoApp from './components/TodoApp.vue'

export default {
  data () {
    return {
      message: 'Hello Vue CLI:)'
    }
  },
  components: {
    'todo-header': TodoHeader,
    'todo-app': TodoApp
  }
}
</script>

<style>
  #app {
    margin: 0px;
    padding: 50px;
  }
</style>
