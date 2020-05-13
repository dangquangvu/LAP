export const test = {
    namespaced: true,
    state: {
        quiz: null,
        evaluate: null,
        correctAnswer: [],
        incorrectAnswer: [],
    },
    actions: {
        setQuizAct({ commit }, value) {
            commit('setQuiz', value);
        }
    },
    mutations: {
        setQuiz(state, value) {
            state.quiz = value;
        }
    },
};