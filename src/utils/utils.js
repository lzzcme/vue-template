const utils = {
  // 是否安卓
  isAndroid: () => {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    return isAndroid
  },
  // 是否ios
  isIOS: () => {
    let u = navigator.userAgent
    let isIOS = !!u.match(/\(i[^]+( U)? CPU.+Mac OS X/)
    return isIOS
  },
  // 是否微信浏览器
  isWechat: () => {
    let ua = navigator.userAgent.toLowerCase()
    let isWeixin = ua.indexOf('micromessenger') !== -1
    return isWeixin
  },
  // 是否线上环境
  isOnline: () => {
    let flag = window.location.href.indexOf('192.168.10.151') < 0
    return flag
  },
  // 获得当前路径rootUrl
  getRootUrl: () => {
    let protocol = window.location.protocol
    let host = window.location.host
    let pathname = window.location.pathname.split('/')[1]
    return protocol + '//' + host + '/' + pathname
  },
  // 日期格式化
  formatDate: (value) => {
    if (typeof (value) === 'string') value = value.replace(/-/g, '/')
    let d = new Date(value)
    let month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
    let ds = d.getFullYear() + '-' + month + '-' + day
    return ds
  },
  // 函数防抖 即触发事件后在 n 秒内函数只能执行一次
  debounce: (func, wait) => {
    let timeout
    return function () {
      let context = this
      let args = arguments
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  },
  // 函数节流 即连续触发事件但是在 n 秒中只执行一次函数
  throttle: (func, wait) => {
    let previous = 0
    return function() {
      let now = Date.now()
      let context = this
      let args = arguments
      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    }
  },
  // 返回顶部
  goTop: () => {
    let delta = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    delta && window.scrollBy(0, - delta / 9.8)
    delta && requestAnimationFrame(this.returnTop)
  }
}

export default utils
