// const user = JSON.parse(localStorage.getItem("user"));
// import cardService from "../controller/cardService";
export const cardPool = {
    namespaced: true,
    state: {
        arrPool: [],
        result: {},
        // value show all flash card of folder
        showCardPool: {},
    },
    actions: {
        addItemInArrAct({ commit, state }, value) {
            let exist = state.arrPool.filter((item) => {
                item.idFolder == value.idFolder;
            });
            if (!exist) {
                commit("addItemInArr", value);
            }
        },
        getValueAct({ commit }, id) {
            commit("getValue", id);
        },
        addElmArrCardPoolAct({ commit }, id, value) {
            commit("addElmArrCardPool", id, value);
        },
    },
    mutations: {
        addItemInArr(state, value) {
            state.arrPool.push(value);
        },
        setShow(state, value) {
            state.showCardPool = value;
        },
        getValue(state, idFolder) {
            let result = state.arrPool.fifter((item) => item.idFolder == idFolder);
            state.result = result;
        },
        addElmArrCardPool(state, idFolder, value) {
            for (let i = 0; i < state.arrPool.length; i++) {
                if (state.arrPool[i].idFolder == idFolder) {
                    state.arrPool[i].arrPool.push(value);
                }
            }
            console.log(state.arrPool);
        },
    },
};