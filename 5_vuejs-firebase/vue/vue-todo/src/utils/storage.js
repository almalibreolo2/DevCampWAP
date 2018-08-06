export const storage = {
    fetch () {
        let arr = []
        for (let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i)
            if(key !== 'loglevel:webpack-dev-server' && key !== 'todoItems') {
                arr.push(key)
            }
        }
        return arr
    }
}