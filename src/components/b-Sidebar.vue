<template>
  <aside class="sidebar">
    <div class="user-info">
      <img src="@/assets/profile-placeholder.png" alt="User" class="avatar" />
      <div class="details">
        <p class="name">Jamaal Koko</p>
        <p class="email">info@jamaal-koko.com</p>
      </div>
    </div>

    <nav class="nav-menu">
      <router-link to="/" class="nav-item">🏠 Dashboard</router-link>
      <router-link to="/customers" class="nav-item">👥 Customers</router-link>
      <router-link to="/invoices" class="nav-item">🧾 Invoices</router-link>
      <router-link to="/setup" class="nav-item">⚙️ Setup</router-link>
    </nav>
  </aside>
</template>

<script>
export default {}
</script>

<style scoped>
.sidebar {
  width: 240px;
  background-color: #ffffff;
  height: 100vh;
  padding: 1rem;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #e5e7eb;
}

.details {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

.name {
  font-weight: 600;
}

.email {
  font-size: 0.8rem;
  color: #6b7280;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-item {
  text-decoration: none;
  font-weight: 500;
  color: #374151;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.nav-item:hover,
.router-link-exact-active {
  background-color: #f3f4f6;
}
</style>
