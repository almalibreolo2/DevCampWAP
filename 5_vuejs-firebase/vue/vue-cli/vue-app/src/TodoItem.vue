<template>
    <li>
        {{ item.name }}
        <button @click="removeTodoItem()">delete</button>
    </li>
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
        }
    }
}
</script>

<style>

</style>
