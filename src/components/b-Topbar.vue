<template>
  <header class="topbar">
    <div class="welcome-text">Welcome, Admin</div>
    <div class="actions">
      <button>🔔</button>
      <button>👤</button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  background-color: #ffffff;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-text {
  font-weight: 600;
  font-size: 1.1rem;
  color: #374151;
}

.actions button {
  background: none;
  border: none;
  font-size: 1.25rem;
  margin-left: 1rem;
  cursor: pointer;
  color: #4b5563;
}
</style>
