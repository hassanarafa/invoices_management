<template>
  <section class="customers-container">
    <!-- Page Header -->
    <div class="header">
      <div>
        <h1 class="title">👥 Customers</h1>
        <p class="subtitle">Manage your company’s customers and contacts</p>
      </div>
      <button class="btn-primary">+ Add Customer</button>
    </div>

    <!-- Summary Cards -->
    <div class= "summary-grid">
      <div class="summary-card total">2 Total Customers</div>
      <div class="summary-card active">2 Active</div>
      <div class="summary-card inactive">0 Inactive</div>
      <div class="summary-card contacts">0 Active Contacts</div>
      <div class="summary-card contacts-inactive">0 Inactive Contacts</div>
      <div class="summary-card today">0 Logged In Today</div>
    </div>

    <!-- Search + Filters -->
    <div class="filter-bar">
      <input type="text" placeholder="Search customers..." class="search-input" />
      <i class="fas fa-search search-icon"></i>
    </div>

    <!-- Customers Table -->
    <div class="table-wrapper">
      <table class="customers-table">
        <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>#</th>
          <th>Company</th>
          <th>Primary Contact</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Active</th>
          <th>Groups</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td>9</td>
          <td>
            <div class="company-info">
              <div>Autopoets Planeet</div>
              <div class="links">
                <a href="#">View</a>
                <a href="#">Contacts</a>
                <a href="#" class="danger">Delete</a>
              </div>
            </div>
          </td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><input type="checkbox" checked /></td>
          <td>
            <span class="tag">Sipi Financiele</span>
            <span class="tag">Car Restyling</span>
          </td>
          <td>02-08-2025</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>6</td>
          <td>Yvonne Fawzi Rashed</td>
          <td>-</td>
          <td>-</td>
          <td>0542478804</td>
          <td><input type="checkbox" checked /></td>
          <td><span class="tag">Trading</span></td>
          <td>19-07-2025</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <span>Showing 1 to 2 of 2 entries</span>
      <div class="pagination-controls">
        <button>Prev</button>
        <span>1</span>
        <button>Next</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomersView'
}
</script>

<style scoped>
.customers-container {
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
}

.subtitle {
  font-size: 0.875rem;
  color: #6b7280;
}

.btn-primary {
  background: #111827;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.summary-card {
  padding: 1rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-align: center;
  background: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.summary-card.total {
  background-color: #f3f4f6;
}

.summary-card.active {
  background-color: #d1fae5;
  color: #065f46;
}

.summary-card.inactive {
  background-color: #fee2e2;
  color: #991b1b;
}

.summary-card.contacts {
  background-color: #bfdbfe;
  color: #1d4ed8;
}

.summary-card.contacts-inactive {
  background-color: #fde68a;
  color: #92400e;
}

.summary-card.today {
  background-color: #e5e7eb;
  color: #374151;
}

.filter-bar {
  position: relative;
  margin-bottom: 1.5rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.table-wrapper {
  overflow-x: auto;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.customers-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.customers-table th,
.customers-table td {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
}

.customers-table tr:hover {
  background-color: #f3f4f6;
}

.company-info {
  display: flex;
  flex-direction: column;
}

.links {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  display: flex;
  gap: 0.75rem;
}

.links a {
  color: #2563eb;
  text-decoration: none;
}

.links a.danger {
  color: #dc2626;
}

.tag {
  background: #e5e7eb;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  margin-right: 0.25rem;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-controls button {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
}
</style>
