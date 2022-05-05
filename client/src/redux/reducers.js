const initState = {
    playerOne: '',
    playerTwo: '',
    playerThree: '',
    playerFour: '',
    question_cat: 9,
    question_difficulty: 'easy',
    amount_of_questions:10,
    num_players:1,
    quizData: [],
    score:0
}

const reducer = (state=initState, action) =>{

    switch(action.type){
        case "ADD_PLAYERONE":
        return {
            ...state, 
            playerOne: action.value
        }
        case "ADD_PLAYERTWO":
        return {
            ...state, 
            playerTwo: action.value
        }
        case "ADD_PLAYERTHREE":
        return {
            ...state, 
            playerThree: action.value
        }
        case "ADD_PLAYERFOUR":
        return {
            ...state, 
            playerFour: action.value
        }
        case "UPDATE_NUM_PLAYERS":
        return {
            ...state, 
            num_players: action.value
        }
        case "UPDATE_CAT":
        return {
            ...state, 
            question_cat: action.value
        }
        case "SET_DIFFICULTY":
        return {
            ...state, 
            question_difficulty: action.value
        }
        case "ADD_QUIZDATA":
            return {
                ...state, 
                quizData: action.value
            }
        case "UPDATE_SCORE":
            return {
                ...state, 
                score: state.score+1
            }
        case "RESET":
            return initState
            
        default: 
            return state;
    }
}
export default reducer