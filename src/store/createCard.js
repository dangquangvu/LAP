const user = JSON.parse(localStorage.getItem("user"));
import cardService from '../controller/cardService'

export const createCard = {
    namespaced: true,
    state: {
        item: { index: "", text: "", explain: "", show: true },
        arrayCardCreate: [
            { index: 1, text: "", explain: "", show: true },
            { index: 2, text: "", explain: "", show: true },
        ],
        object: {},
    },

    actions: {
        action_addCard({ commit }) {
            commit("addCard");
        },
        createCard({ commit, state }, value) {
            commit("submitDataCreateCard", value);
            return cardService.createCardFolder(state.object).then(data => {
                return Promise.resolve(data)
            }).catch(err => {
                return Promise.reject(err)
            })
        },
    },
    mutations: {
        addCard(state) {
            let index = state.arrayCardCreate.length;
            let newItem = Object.assign({}, state.item);
            newItem.index = index + 1;
            state.arrayCardCreate.push(newItem);
        },
        addTextField(state, value) {
            if (value.text) {
                state.arrayCardCreate[value.index - 1].text = value.text;
            } else {
                state.arrayCardCreate[value.index - 1].explain = value.explain;
            }
        },
        removeItem(state, index) {
            state.arrayCardCreate[index - 1].show = false;
        },
        submitDataCreateCard(state, value) {
            let filtersItemAlive = state.arrayCardCreate.filter(
                (item) => item.show != false
            );
            let filtersItemWithValue = filtersItemAlive.filter(
                (item) => item.text != "" || item.explain != ""
            );
            for (let i = 1; i <= filtersItemWithValue.length; i++) {
                filtersItemWithValue[i - 1].index = i;
            }
            let object = {
                title: value.title,
                description: value.description,
                author: user.user._id,
                arrayCard: filtersItemWithValue,
            };
            state.object = object;
            console.log(state.object)
        },
    },
};