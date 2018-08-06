<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="index" class="shadow">
                {{ todoItem }}
                <span class="removeBtn">
                    <i class="fas fa-trash-alt" @click="removeTodo({todoItem, index})"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    // data () {
    //     return {
    //         todoItems: this.$store.state.todoItems
    //     }
    // },
    // created () {
    //     for (let i=0; i<localStorage.length; i++) {
    //         let key = localStorage.key(i)
    //         if(key !== 'loglevel:webpack-dev-server' && key !== 'todoItems') {
    //             this.todoItems.push(key)
    //         }
    //     }
    // },
    // props: {
    //     propsdata: Array
    // },
    methods: {
      ...mapMutations({
        'removeTodo': 'removeTodoItem'
      })
        // // removeTodo (todoItem, index) {
        // removeTodo (payload) {
        //   // let payload = {
        //   //   todoItem,
        //   //   index
        //   // }
        //   this.$store.commit('removeTodoItem', payload)

        //   // this.$emit('removeTodo', todoItem, index)
        //   // this.todoItems.splice(index, 1)
        //   // localStorage.removeItem(todoItem)
        // }
    }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
    cursor: pointer;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-move {
    transition: transform 1s;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
