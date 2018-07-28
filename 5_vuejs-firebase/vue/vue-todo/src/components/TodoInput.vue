<template>
    <div class="inputBox shadow">
        <input v-model="inputText" type="text" @keyup.enter="addTodo" placeholder="할일을 입력해주세요." />
        <span class="addContainer">
            <i class="fas fa-plus addBtn" @click="addTodo"></i>
        </span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            inputText: ''
        }
    },
    methods: {
        addTodo () {
            let value = this.inputText
            if(value != null && value !== '') {
                // localStorage.setItem(value, value)
                this.$emit('addTodo', value.trim())
                this.inputText = ''
            }
        }
    }
}
</script>

<style scoped>
    input:focus {
    outline: none;
    }
    .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    }
    .inputBox input {
    border-style: none;
    font-size: 0.9rem;
    }
    .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    }
    .addBtn {
    color: white;
    vertical-align: middle;
    cursor: pointer;
    }
</style>
