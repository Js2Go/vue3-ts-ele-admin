<template>
  <!-- <img alt="Vue logo" src="./assets/img/logo.png" />
  <h1 class="hhh flex">我的</h1>
  <HelloWorld :msg="msg" />
  <el-button
    type="primary"
    @click="onClick"
  >
    点我吧
  </el-button>
  <el-input v-model="color" /> -->
  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" src="./assets/img/store.jpg" alt="Man looking at item at a store">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>
  </div>

  <form>
    <input class="border border-transparent shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
    <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
      Sign up
    </button>
  </form>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const msg: Ref<string> = ref('Hello Vue 3.0 + Vite')
    const color: Ref<string> = ref('red')

    const onClick = () => {
      console.log('emmm')
    }

    return {
      msg,
      color,
      onClick
    }
  }
}
</script>
