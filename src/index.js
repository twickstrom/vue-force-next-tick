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
  install (Vue) {
    Vue.$forceNextTick = forceNextTick
    Vue.prototype.$forceNextTick = forceNextTick
  }
}

export default VueForceNextTick
