import Vue from 'vue';
import Vuex from 'vuex';
import SurveyQuestions from '../questions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        questions: SurveyQuestions.startSurvey(),
        progress: 10,
        page: 1,
        photo: undefined, 
        signed: false,
        answers: {}
    },
    mutations: {
        increment (state) {
            state.page += 1
        }, 
        decrement (state) {
            state.page -= 1
        }, 
        proceed (state) {
            let percentage = 1 / state.questions.length * 100;
            state.progress += Math.round(percentage);
            if (state.progress > 100) {
           state.progress = 100;
            }
        },
        previous (state) {
            let percentage = 1 / state.questions.length * 100;
            state.progress -=  Math.round(percentage);
            if (state.progress < 0) {
                state.progress = 0;
            }
        },
        updatePhoto (state, photo) {
            state.photo = photo
        },
        updateSignature(state, signed) {
            state.signed = signed
        },
        updateAnswers(state, answers) {
            state.answers = answers;
        }
    }
})