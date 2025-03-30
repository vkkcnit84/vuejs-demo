<template>
  <div class="scroll-container" ref="scrollContainer" @scroll="handleScroll">
    <div v-for="(post, index) in posts" :key="post.id" class="post">
      <h3>{{ index + 1 }}: {{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <div v-if="loading" class="loading">Loading more posts...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

const posts = ref([])
const page = ref(1)
const limit = 10
const loading = ref(false)
const scrollContainer = ref(null)

const loadPosts = async () => {
  if (loading.value) return
  loading.value = true

  setTimeout(async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        params: { _page: page.value, _limit: limit },
      })

      posts.value = [...posts.value, ...response.data]
      page.value++
    } catch (error) {
      console.error('Error fetching data', error)
    }

    loading.value = false
  }, 1500)
}

const handleScroll = () => {
  const container = scrollContainer.value
  if (!container || loading.value) return

  if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
    loadPosts()
  }
}

onMounted(() => {
  loadPosts()
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style>
.scroll-container {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}

.post {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}

.loading {
  text-align: center;
  padding: 10px;
  font-weight: bold;
}
</style>
