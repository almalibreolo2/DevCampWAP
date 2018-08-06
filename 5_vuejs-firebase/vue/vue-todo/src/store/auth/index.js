import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'

// namespaced라는 속성은 독립적인 속성을 갖게 해주는 옵션 
//  : 모듈이 독립적이거나 재사용되기를 원한다면 namespaced: true 옵션을 사용
export default {
    namespaced: true,
    state,
    getters,
    mutations
}