<template>
    <div>
        <!-- 입력창 -->
        <span>
            <input type="text" id="todo" />
            <button @click="addTodoItem()">Add</button>
        </span>

        <!-- 리스트 -->
        <todo-item v-for="item in todoItems" :key="item.key" :data="item" ref="todoItems" @removeTodoItem="removeTodoItem(item)"></todo-item>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: "todo-app",
    components: {
        'todo-item': TodoItem
    },
    data () {
        return {
            todoItems: []
        }
    },
    created () {
        if (this.storageAvailable('localStorage')) {
            let todoItems = localStorage.getItem('todoItems')
            this.todoItems = (todoItems == null)? []:JSON.parse(todoItems)
            console.log('=============todo items;', this.todoItems)
        }
        else {
            alert('localStorage를 지원하지 않는 브라우저입니다')
        }
    },
    methods: {
        storageAvailable (type) {
            try {
                var storage = window[type],
                    x = '__storage_test__';
                storage.setItem(x, x);
                storage.removeItem(x);
                return true;
            }
            catch(e) {
                return e instanceof DOMException && (
                    // Firefox를 제외한 모든 브라우저
                    e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // 코드가 존재하지 않을 수도 있기 때문에 테스트 이름 필드도 있습니다.
                    // Firefox를 제외한 모든 브라우저
                    e.name === 'QuotaExceededError' ||
                    // Firefox
                    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                    // 이미 저장된 것이있는 경우에만 QuotaExceededError를 확인하십시오.
                    storage.length !== 0;
            }
        },
        addTodoItem () {
            let el = document.getElementById('todo')
            if(!el)
                return

            let val = el.value + ''
            val = val.replace(/(^\s*)|(\s*$)/gi, '')
            if (val == null || val == '') {
                alert('할일을 입력해주세요')
                return
            }
                
            this.todoItems.push({
                name: val,
                state: 'A',
                key: Number(new Date())
            })
            this.syncTodoItem()
            el.value = ''
        },
        removeTodoItem (item) {
            if(item == null || item.key == null || item.key == "")
                return

            let idx = _.indexOf(this.todoItems, item)
            this.todoItems.splice(idx, 1)
            this.syncTodoItem()
        },
        syncTodoItem () {
            localStorage.setItem('todoItems', JSON.stringify(this.todoItems))
        }
    }
}
</script>

<style>

</style>
