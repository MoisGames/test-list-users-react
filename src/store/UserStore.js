import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._users = []
        this._newUsers = []
        makeAutoObservable(this)
    }
    setNewUsers(newUsers) {
        this._newUsers = newUsers
    }
    setUsers(users) {
        this._users = users
    }
    get newUsers() {
        return this._newUsers
    }
    get users() {
        return this._users
    }
}