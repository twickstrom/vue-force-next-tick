const doubleRequestAnimationFrame = (callback) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback)
  })
}

const VueForceNextTick = {
  install (Vue) {
    Vue.$forceNextTick = doubleRequestAnimationFrame
    Vue.prototype.$forceNextTick = doubleRequestAnimationFrame
  }
}

export default VueForceNextTick
