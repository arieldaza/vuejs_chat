import { reactive } from "vue";

const store = reactive({
    username: 'ariel.daza',
    updateUsername(username){
        this.username = username;
    }
});

export default store;