const user = JSON.parse(localStorage.getItem("user"));
import cardService from '../controller/cardService'

export const createCard = {
    namespaced: true,
    state: {
        item: { index: "", text: "", explain: "", author_id: '', author: '', cardFolderId: '', show: true },
        arrayCardCreate: [
            { index: 1, text: "", explain: "", author_id: '', author: '', cardFolderId: '', show: true },
            { index: 2, text: "", explain: "", author_id: '', author: '', cardFolderId: '', show: true },
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
                filtersItemWithValue[i - 1].author = user.user.fullname;
                filtersItemWithValue[i - 1].author_id = user.user._id;
                filtersItemWithValue[i - 1].index = 1;
            }
            let object = {
                title: value.title,
                description: value.description,
                author_id: user.user._id,
                author: user.user.fullname,
                author_email: user.user.email,
                author_img: '',
                arrayCard: filtersItemWithValue,
            };
            state.object = object;
            console.log(state.object)
        },
    },
};