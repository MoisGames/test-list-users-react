import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._users = []
        this._profiles = []
        makeAutoObservable(this)
    }
    setProfiles(profiles) {
        this._profiles = profiles
    }
    setUsers(users) {
        this._users = users
    }
    get profiles() {
        return this._profiles
    }
    get users() {
        return this._users
    }
}