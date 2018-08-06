export const mutations = {
    addTodoItem (state, value) {
        state.todoItems.push(value)
        localStorage.setItem(value, value)
    },
    // removeTodoItem (state, { todoItem, index }) {
    removeTodoItem (state, payload) {
        let index = _.indexOf(state.todoItems, payload.todoItem)
        localStorage.removeItem(payload.todoItem)
        state.todoItems.splice(index, 1)
    },
    clearAllItems (state) {
        state.todoItems = []

        let todoItemsStr = localStorage.getItem('todoItems')
        localStorage.clear()
        localStorage.setItem('todoItems', todoItemsStr)
    }
}