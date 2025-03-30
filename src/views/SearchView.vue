<template>
  <div>
    <h2>Search Filter</h2>
    <input v-model="searchQuery" placeholder="Search items..." />
    <ul>
      <li v-for="item in filteredItems" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const items = ref(['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Mango'])

const filteredItems = computed(() => {
  return items.value.filter((item) => item.toLowerCase().includes(searchQuery.value.toLowerCase()))
})
</script>

<style>
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
</style>
