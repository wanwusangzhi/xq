import reducers from './reducers/index.js'
import actions from './actions/index.js'

class Store {
  constructor() {
    this.state = {}
    this.actions = {}
    this.reducers = {}
    Store.createReducers.call(this)
    Store.createActions.call(this)
  }
  /**
   * create state and reducers
   */
  static createReducers() {
    for (const key in reducers) {
      this.state[key] = Object.assign(reducers[key].state || {})
      this.reducers[key] = Object.assign(reducers[key].reducers || {})
    }
  }
  /**
   * create action
   */
  static createActions() {
    for (const key in actions) {
      this.actions[key] = Object.assign(actions[key].actions)
    }
  }

  dispatch(methodName, payload) {
    let method = null
    try {
      method = _getFunction(this.actions, methodName)
      if (!method) {
        throw new Error(`name '${methodName}' is not found`)
      }
      if (typeof method !== 'function') {
        throw new Error(`name '${methodName}' is not method`)
      }
      return method({
        state: this.state[methodName.split(/\/|\./g).shift()],
        globalState: this.state,
        dispatch: (methodName, payload) => {
          this.dispatch(methodName, payload)
        },
        commit: (commitName, commitPayload) => {
          return this.commit(commitName, commitPayload)
        }
      }, payload)
    } catch (e) {
      console.error(e)
    }
  }
  /**
   * 提交
   */
  commit(methodName, payload) {
    let method = null
    try {
      method = _getFunction(this.reducers, methodName)
      return method({
        state: this.state[methodName.split(/\/|\./g).shift()],
        globalState: this.state,
        dispatch: (methodName, payload) => {
          this.dispatch(methodName, payload)
        },
        commit: (commitName, commitPayload) => {
          return this.commit(commitName, commitPayload)
        }
      }, payload)
    } catch (e) {
      console.error(e)
    }
  }
}

const _getFunction = (obj, methodName) => {
  return methodName.split(/\/|\./g).reduce((a, b) => {
    return a[b]
  }, obj)
}

const appStore = new Store()

export default appStore