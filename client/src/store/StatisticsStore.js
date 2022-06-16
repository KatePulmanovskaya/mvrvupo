import {makeAutoObservable} from "mobx";

export default class StatisticsStore {
    constructor() {
        this._stat = []
        
        makeAutoObservable(this)
    }
  
    setStat(data) {
        this._stat = data
    }
    
    get stat() {
        return this._stat
    }
}