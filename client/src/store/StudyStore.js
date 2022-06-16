import {makeAutoObservable} from "mobx";

export default class StudyStore {
    constructor() {
        this._study = []
        
        this._selectedModule = null
        makeAutoObservable(this)
    }
  
    setStudy(study) {
        this._study = study
    }
    setSelectedModule(mod) {
        this._selectedModule = mod
    }
    get selectedModule() {
        return this._selectedModule
    }
    get study() {
        return this._study
    }
}