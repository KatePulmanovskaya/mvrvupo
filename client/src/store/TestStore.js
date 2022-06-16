import {makeAutoObservable} from "mobx";

export default class TestsStore {
    constructor() {
        this._tests = []
        this._questions=[]
        this._answers=[]
        makeAutoObservable(this)
    }
  
    setTests(data) {
        this._tests = data
    }

    setQuestions(data) {
        this._questions = data
    }

    setAnswers(data) {
        this._answers = data
    }
    
    get tests() {
        return this._tests
    }

    get questions() {
        return this._questions
    }

    get answers() {
        return this._answers
    }
}