<template>
  <aside class="sidebar">
    <div class="logo">🚀</div>
    <nav>
      <router-link to="/" exact>
        <span>🏠</span>
      </router-link>
      <router-link to="/analytics">
        <span>📊</span>
      </router-link>
      <router-link to="/settings">
        <span>⚙️</span>
      </router-link>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 64px;
  background-color: #1f2937;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

nav a {
  color: #9ca3af;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;
}

nav a.router-link-active {
  color: #ffffff;
}
</style>
