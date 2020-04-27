// const user = JSON.parse(localStorage.getItem("user"));
// import Quiz from '../controller/quiz'

export const quiz = {
    namespaced: true,
    state: {
        quiz: null,
        evaluate: null
    },

    actions: {
        assginQuizAct({ commit }, value) {
            commit('assginQuiz', value)
        }
    },
    mutations: {
        assginQuiz(state, value) {
            state.quiz = value;
        }
    },
};