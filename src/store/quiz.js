// const user = JSON.parse(localStorage.getItem("user"));
// import Quiz from '../controller/quiz'

export const quiz = {
    namespaced: true,
    state: {
        quiz: null,
        evaluate: null,
        correctAnswer: [],
        incorrectAnswer: [],
    },

    actions: {
        assginQuizAct({ commit }, value) {
            commit("assginQuiz", value);
        },
    },
    mutations: {
        assginQuiz(state, value) {
            state.quiz = value;
        },
        correct(state, value) {
            state.correctAnswer.push(value);
        },
        incorrect(state, value) {
            state.incorrectAnswer.push(value);
        },
    },
};