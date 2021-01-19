<template>
  <h1>{{ msg }}</h1>
  <h2>{{ double }}</h2>
  <button @click="incre">count is: {{ count }}</button>
  <Other v-model:msg="msg" @load="load" />
</template>

<script lang="ts">
interface Props {
  msg: string
}

import { computed, ComputedRef, reactive, Ref, ref, toRefs } from 'vue'
import Other from './Other.vue'

export default {
  name: 'HelloWorld',
  components: {
    Other
  },
  props: {
    msg: {
      required: true,
      type: String
    }
  },
  setup(props: Props) {
    const count: Ref<number> = ref(0)

    const double: ComputedRef = computed(() => count.value * 2)

    const incre = () => {
      count.value++
    }
    
    const load = () => {
      console.log('load from child component')
    }
  
    const data = reactive({
      count,
      double,
      incre,
      load
    })

    return toRefs(data)
  }
}
</script>
