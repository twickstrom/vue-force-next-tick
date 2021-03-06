# VueForceNextTick

>   When you need to ensure the DOM has been updated Vue's nextTick just doesn't work. You will need to use the double requestAnimationFrame method. This is an elegant wrapper to allow you to use the double requestAnimationFrame method within your Vue applications either globally `Vue.$forceNextTick(callback)` or within a method `this.$forceNextTick(callback)`


## Table of contents
* [VueForceNextTick](#vueforcenexttick)
* [Installation](#installation)
* [Default import](#default-import)
* [A bit of History](#a-bit-of-history)
* [Usage](#usage)
  * [Global Example](#global-example)
  * [Within a component](#within-a-component)
* [Example Vue Component](#example-vue-component)

## Installation

```bash
npm i vue-force-next-tick

# or

yarn add vue-force-next-tick
```

## Default import
```javascript
import Vue from 'vue'
import VueForceNextTick from 'vue-force-next-tick'
Vue.use(VueForceNextTick)
```

## A bit of History

How does [double requestanimationframe](https://stackoverflow.com/questions/44145740/how-does-double-requestanimationframe-work) work

VueJS: How to wait for a browser re-render? [Vue.nextTick doesn't seem to cover it.](https://github.com/vuejs/vue/issues/9200)

Inspired by the advice of [Justineo] (https://github.com/Justineo)

## Usage

### Global Example
```javascript
Vue.$forceNextTick(() => {
  // Your code here.
})

// or 

await Vue.$forceNextTick()
```

### Within a component
```javascript
methods: {
  yourMethod () {
    this.$forceNextTick(() => {
      // Your code here.
    })
  }
  
  // or 
  
  async yourMethod () {
    await this.$forceNextTick()
    // Your code here.
  }
}
```

### EXAMPLE VUE COMPONENT
```javascript
<template>
  <button
    @click="doSomethingBig"
  >
    Lets count to 10 million!
  </button>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      done: false
    }
  },
  methods: {
    doSomethingBig () {
      this.loading = true
      this.$forceNextTick(() => {
        for (var i = 1; i<10000000; ++i){
        	this.done = !i
        }
        this.done = true
        this.loading = false
      })
    }
  }
}
</script>
```
