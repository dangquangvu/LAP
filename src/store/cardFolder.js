//getAllCardFolder
// const user = JSON.parse(localStorage.getItem("user"));
// import cardService from "../controller/cardService";
export const cardFolder = {
    namespaced: true,
    state: {
        arrCardFolder: [],
        arrShow: [{
            author_id: "",
        }, ],
    },

    actions: {
        submit({ commit }, value) {
            commit("arrCardFolderVux", value);
        },
    },
    mutations: {
        arrCardFolderVux(state, value) {
            state.arrCardFolder = value;
            if (value.length > 6) {
                state.arrShow.slice(0, 6);
            } else {
                state.arrShow = value;
            }
            console.log(state.arrShow, "eeeeeeeeeeee");
        },
    },
};