import { createStore } from 'vuex';


export default createStore({
    state: {
        leftMenuCategory: ""
    },
    mutations: {
        SET_LEFT_MENU_CATEGORY(state, category) {
            state.leftMenuCategory = category;
        }
    }
})