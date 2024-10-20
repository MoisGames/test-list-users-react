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
    sortCompanyUsers() {
        this._users.sort((a,b) => {
            if (a.company.name > b.company.name) {
                return 1
            }
            if (a.company.name < b.company.name) {
                return -1
            }
            return 0
        })
    }
    sortCityUsers() {
        this._users.sort((a,b) => {
            if (a.address.city > b.address.city) {
                return 1
            }
            if (a.address.city < b.address.city) {
                return -1
            }
            return 0
        })
    }
    get profiles() {
        return this._profiles
    }
    get users() {
        return this._users
    }
}