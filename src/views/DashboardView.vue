<template>
  <div class="dashboard">
    <h1>Vue.js Demo Dashboard</h1>
    <div class="grid">
      <router-link to="/infinite-scroll" class="card">
        <h3>Infinite Scroll</h3>
        <p>Load more content as you scroll.</p>
      </router-link>

      <router-link to="/search" class="card">
        <h3>Search</h3>
        <p>Filter items based on your input.</p>
      </router-link>

      <router-link to="/another-feature" class="card">
        <h3>Coming Soon</h3>
        <p>More demos will be added here.</p>
      </router-link>
    </div>
  </div>
</template>

<style>
.dashboard {
  text-align: center;
  padding: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.card:hover {
  background: #007bff;
  color: white;
}
</style>
