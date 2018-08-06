<template>
    <div>
        <header>
            <!-- <h1>{{ headerMessage + ':D' }}</h1> -->
            <!-- <h1>{{ reverseHeader }}</h1> -->
            <!-- <h1>{{ this.$store.getters.reverseMessage }}</h1> -->
            <h1>{{ message }}/{{ reverseMessage }}</h1>
        </header>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    created () {
        console.log(this.$store.state)
    },
    data () {
        return {
            headerMessage: 'Todo App'
        }
    },
    computed: {
        reverseHeader () {
            return this.headerMessage.split('').reverse().join('')
        },
        ...mapState(['message']),
        ...mapGetters(['reverseMessage'])
    }
}
</script>

<style scoped>
  h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>
