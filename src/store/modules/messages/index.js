import getters from "./getters"

const module = {
    namespaced : true,
    state() {
        return {
            messages : [
                {
                    id: 1,
                    author: 1,
                    message: 'Hola Mundo',
                    timestamp: new Date().toLocaleDateString(),
                    read: false,
                    channelId: 1
                },
                {
                    id: 2,
                    author: 2,
                    message: 'Hola Mundo 2',
                    timestamp: new Date().toLocaleDateString(),
                    read: false,
                    channelId: 2
                },
                {
                    id: 3,
                    author: 2,
                    message: 'Hola Mundo 2',
                    timestamp: new Date().toLocaleDateString(),
                    read: false,
                    channelId: 2
                },
                {
                    id: 4,
                    author: 1,
                    message: 'Hola Mundo 2222',
                    timestamp: new Date().toLocaleDateString(),
                    read: false,
                    channelId: 2
                }
            ]
        }
    },
    getters,
    mutations: {
        addMessage(state, newMessage) {
            state.messages.push({
                id: Date.now(),
                author: 1,
                message: newMessage.message,
                timestamp: new Date().toLocaleTimeString(),
                read: true,
                channelId: parseInt(newMessage.channelId)
            })
        }
    },
    actions: {
        addMessage({ commit, state, rootState }, message) {
            console.log(message);
            commit('addMessage', message);
        }
    }
}

export default module