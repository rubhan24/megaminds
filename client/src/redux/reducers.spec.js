import { type } from "express/lib/response";
import reducer from "../redux/reducers"

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

describe("Reducer", () => {
    test("it initialises with no questions, players etc", () => {
      const initReturn = reducer(undefined, { type: "@@INIT" });
      expect(initReturn).toEqual({
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
      });
    });

    // test("it adds player one")
    // const fakeAdd = reducer(
    //   {
    //     playerOne: ''
    //   }
    //   {
    //     type: "ADD_PLAYERONE"
    //   }
    // )
    // expect(fakeAdd).toMatch(
    //   playerOne: ''
    // )

  
});

