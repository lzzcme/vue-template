export default (Vue, Cookie) => {
  Vue.prototype.$cookies = Cookie

  Vue.prototype.$cookie = (name, value, options) => {
    if (name && typeof name === 'string') {
      if (value === undefined) {
        return Cookie.get(name)
      } else {
        if (typeof options === 'object') {
          Cookie.set(name, value, options)
        } else {
          Cookie.set(name, value, { expires: 1 }) // 1d
        }
      }
    } else {
      return Cookie()
    }
  }

  Vue.prototype.$rmCookie = (name, options) => {
    if (name && typeof name === 'string') {
      if (typeof options === 'object') {
        return Cookie.remove(name, options)
      } else {
        return Cookie.remove(name)
      }
    } else {
      let cookies = Cookie()
      for (let cookie in cookies) {
        Cookie.remove(cookie)
      }
    }
  }
}
