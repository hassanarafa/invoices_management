<template>
  <div class="dashboard-wrapper">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <img src="@/assets/logo.webp" alt="Logo" class="logo" />
        <h2>My App</h2>
      </div>
      <ul class="menu">
        <router-link to="/home" class="menu-item" active-class="active">
          <li>Dashboard</li>
        </router-link>
        <router-link to="/customers" class="menu-item" active-class="active">
          <li>Customers</li>
        </router-link>
        <router-link to="/invoices" class="menu-item" active-class="active">
          <li>Invoices</li>
        </router-link>
        <router-link to="/setup" class="menu-item" active-class="active">
          <li>Setup</li>
        </router-link>
      </ul>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Topbar -->
      <header class="topbar">
        <input type="text" placeholder="Search..." class="search-bar" />
        <div class="topbar-actions">
          <button class="icon-button">⚙️</button>
          <button class="icon-button">🔔</button>
        </div>
      </header>

      <section class="dashboard-body">
        <router-view />
      </section>
    </div>
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.sidebar {
  width: 240px;
  background: #2e3a59;
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 2rem;
}

.sidebar-header .logo {
  width: 50px;
  margin-bottom: 0.5rem;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 0.75rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.menu li.active, .menu li:hover {
  background: #1d253b;
  border-radius: 8px;
}

.menu-item .active {
  background: #1d253b;
  border-radius: 8px;
}

.main-content {
  flex: 1;
  background: #f5f6fa;
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-bar {
  width: 300px;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.icon-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-left: 1rem;
  cursor: pointer;
}

.dashboard-body {
  padding: 2rem;
  overflow-y: auto;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.alert progress {
  width: 100%;
  height: 10px;
  border-radius: 8px;
  background: #eee;
  accent-color: red;
  margin: 1rem 0;
}

.overview .status-bar div {
  margin: 0.5rem 0;
}

.overview .unpaid {
  color: red;
  font-weight: bold;
}

.overview .paid {
  color: green;
  font-weight: bold;
}

.summary-grid {
  display: flex;
  gap: 1.5rem;
}

.summary-card {
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  background: #fff;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.summary-card.warning {
  border-left: 4px solid orange;
}

.summary-card.danger {
  border-left: 4px solid crimson;
}

.summary-card.success {
  border-left: 4px solid green;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .main-content {
    width: 100%;
  }

  .summary-grid {
    flex-direction: column;
  }

  .search-bar {
    width: 100%;
  }
}
</style>