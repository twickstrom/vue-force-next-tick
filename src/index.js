const doubleRequestAnimationFrame = (callback) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback)
  })
}

const forceNextTick = (callback) => {
  if (callback && typeof callback === 'function') {
    doubleRequestAnimationFrame(callback)
  } else {
    return new Promise(resolve => {
      doubleRequestAnimationFrame(resolve)
    })
  }
}

const VueForceNextTick = {
  install (app) {
    if ('config' in app && 'globalProperties' in app.config) {
      app.config.globalProperties.$forceNextTick = forceNextTick
    } else {
      app.$forceNextTick = forceNextTick
      app.prototype.$forceNextTick = forceNextTick
    }
  }
}

export default VueForceNextTick
