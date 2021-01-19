import { onMounted, onUnmounted, reactive } from 'vue'

const useMousePosition = () => {
  const point = reactive({
    x: 0,
    y: 0
  })

  const mouseMove = (e: MouseEvent) => {
    point.x = e.pageX
    point.y = e.pageY
  }

  onMounted(() => {
    document.addEventListener('mousemove', mouseMove)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', mouseMove)
  })

  return point
}

export default useMousePosition
