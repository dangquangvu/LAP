// const user = JSON.parse(localStorage.getItem("user"));
export const createCard = {
    namespaced: true,
    state: {
        item: { index: "", text: "", explain: "" },
        arrayCardCreate: [
            { index: 1, text: "", explain: "" },
            { index: 2, text: "", explain: "" },
        ],
    },

    actions: {
        action_addCard({ commit }) {
            commit("addCard");
        },
    },
    mutations: {
        addCard(state) {
            let index = state.arrayCardCreate.length;
            let newItem = Object.assign({}, state.item);
            newItem.index = index + 1;
            console.log(newItem);
            state.arrayCardCreate.push(newItem);
            console.log("array ", state.arrayCardCreate);
        },
        editItem(state, value) {
            if (value.text) {
                state.arrayCardCreate[value.index - 1].text = value.text;
            } else {
                state.arrayCardCreate[value.index - 1].explain = value.explain;
            }
            console.log(state.arrayCardCreate);
        },
    },
};