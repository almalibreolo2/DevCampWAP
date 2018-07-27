<template>
  <div id="app">
    <!-- Header -->
    <todo-header></todo-header>
  </div>
</template>

<script>
// import 로드할 파일 from '로드할 파일 위치'
import TodoHeader from './components/TodoHeader.vue'

export default {
  data () {
    return {
      message: 'Hello Vue CLI:)'
    }
  },
  components: {
    'todo-header': TodoHeader
  }
}
</script>

<style>
</style>
