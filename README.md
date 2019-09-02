# VueForceNextTick

>   When you need to ensure the DOM has been updated Vue's nextTick just doesn't work. You will need to use the double requestAnimationFrame method. This is an elegant wrapper to allow you to use the double requestAnimationFrame method within your Vue applications either globally Vue.$forceNextTick(callback) or within a method this.$forceNextTick(callback)


## Table of contents
* [VueForceNextTick](#vuepapaparse)
* [Installation](#installation)
* [Default import](#default-import)
* [Usage](#usage)
  * [Global Example](#global)
  * [Within a component](#component)
* [Example Vue Component](#example-vue-component)

## Installation

```bash
npm i vue-force-next-tick

# or

yarn add vue-force-next-tick
```

## Usage

## Default import
```javascript
import Vue from 'vue'
import VueForceNextTick from 'vue-force-next-tick'
Vue.use(VueForceNextTick)
```

## Usage

### Global Example
```javascript
Vue.$forceNextTick(() => {
  // You code here.
})
```

### Within a component
```javascript
methods: {
  yourMethod () {
    this.$forceNextTick(() => {
      // You code here.
    })
  }
}
```

### EXAMPLE VUE COMPONENT
```javascript
<template>
  <button
    @click="doSomethingBig"
  >
    Unparse Sample Data
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
