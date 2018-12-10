const storage = (Vue) => {
  Vue.prototype.$storage = (key, val) => {
    if (!window.sessionStorage) {
      console.error('Your browser does not support sessionStorage')
      return
    }

    if (!key) {
      return window.sessionStorage
    } else if (!val) {
      return window.sessionStorage.getItem(key)
    } else {
      window.sessionStorage.setItem(key, val)
      return true
    }
  }

  Vue.prototype.$localStorage = (key, val) => {
    if (!window.localStorage) {
      console.error('Your browser does not support localStorage')
      return
    }
    if (!key) {
      return window.localStorage
    } else if (!val) {
      return window.localStorage.getItem(key)
    } else {
      window.localStorage.setItem(key, val)
      return true
    }
  }

  Vue.prototype.$rmStorage = (key) => {
    if (key) {
      window.sessionStorage.removeItem(key)
    } else {
      window.sessionStorage.clear()
    }
  }

  Vue.prototype.$rmLocalStorage = (key) => {
    if (key) {
      localStorage.removeItem(key)
    } else {
      localStorage.clear()
    }
  }
}

export default storage
