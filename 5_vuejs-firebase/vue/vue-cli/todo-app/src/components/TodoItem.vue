<template>
    <b-list-group-item>
        <i class="todoChecked fa" @click="changeTodoState" :class="(item.state == null || item.state == 'C')? 'fa-check-circle':'fa-check-circle-o'"></i>
        <span :class="(item.state == null || item.state == 'C')? 'completeTodoItem':''">{{ item.name }}</span>
        <i class="fa fa-trash-o btnRemove" @click="removeTodoItem"></i>
    </b-list-group-item>
</template>

<script>
export default {
    name: 'todo-item',
    props: {
        data: Object
    },
    data () {
        return {
            item: this.data
        }
    },
    methods: {
        removeTodoItem () {
            this.$emit('removeTodoItem', this.data)
        },
        changeTodoState () {
            let state = this.item.state
            this.item.state = (state == null || state == "A")? 'C':'A'
            this.$emit('syncTodoItem', this.data)
        }
    }
}
</script>

<style>
    .todoChecked {
        margin-right: 10px;
        color: green;
        cursor: pointer;
        font-size: 25px;
    }
    .btnRemove {
        float: right;
        background-color: #fff;
        border: none;
        color: #ff0000;
        font-size: 22px;
        cursor: pointer;
    }
    .completeTodoItem {
        text-decoration: line-through;
        color:gray;
        font-style: italic;
    }
</style>