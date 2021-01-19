<template>
  <input :value="msg" @input="input" />
  <button @click="load">点我就很棒哦</button>
  <div>{{ x }}, {{ y }}</div>
</template>

<script lang="ts">
import { toRefs } from 'vue'
import useMousePosition from '../hooks/useMousePosition'

interface Props {
  msg: string
}

export default {
  name: 'Other',
  props: {
    msg: {
      required: true,
      type: String
    }
  },
  emits: ['load', 'update:msg'],
  setup(props: Props, { emit }) {
    const input = (e: any) => {
      emit('update:msg', e.target.value)
    }

    const load = () => {
      emit('load')
    }

    const { x, y } = toRefs(useMousePosition())

    return {
      input,
      load,
      x,
      y
    }
  }
}
</script>
