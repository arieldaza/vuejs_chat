const getters = {
    getMessages: (state) => (channelId) => {
        return state.messages.filter((message) => message.channelId === parseInt(channelId));
    },
    getUnreadMessages: (state, getters) => (channelId) => {
       return getters.getMessages(channelId).filter((message) => message.read === false).length;
    },
    getContactsFromMessages: (state, getters, rootState, rootGetters) => (channelId) => {
        return getters.getMessages(channelId)
            .map((message) => message.author)
            .filter((message, index, self) => self.indexOf(message) == index);
    }
}

export default getters