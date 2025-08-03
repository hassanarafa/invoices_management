<template>
  <div class="layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <img src="@/assets/logo.webp" alt="Logo" class="logo" />
        <h2>My App</h2>
      </div>

      <nav class="nav">
        <router-link to="/home" class="nav-link" active-class="active">Dashboard</router-link>
        <router-link to="/customers" class="nav-link" active-class="active">Customers</router-link>
        <router-link to="/invoices" class="nav-link" active-class="active">Invoices</router-link>
        <router-link to="/setup" class="nav-link" active-class="active">Setup</router-link>
      </nav>
    </aside>

    <!-- Main content area -->
    <div class="main">
      <!-- Topbar -->
      <header class="topbar">
        <input type="text" placeholder="Search..." class="search" />
        <div class="topbar-actions">
          <button class="icon-button">⚙️</button>
          <button class="icon-button">🔔</button>
        </div>
      </header>

      <!-- Page Content -->
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Layout Base */
.layout {
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #1e2a45;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  text-align: center;
  margin-bottom: 3rem;
}

.sidebar-header .logo {
  height: 60px;
  margin-bottom: 0.5rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link {
  padding: 0.8rem 1rem;
  border-radius: 8px;
  color: #e4e7ec;
  text-decoration: none;
  transition: background 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  background-color: #314162;
  color: #fff;
}

/* Main Area */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f4f6f8;
}

/* Topbar */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.search {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
}

.topbar-actions {
  display: flex;
  gap: 1rem;
}

.icon-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Content */
.content {
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .main {
    width: 100%;
  }

  .search {
    width: 100%;
  }
}
</style>
