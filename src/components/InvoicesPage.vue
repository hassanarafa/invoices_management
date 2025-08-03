<template>
  <section class="invoice-container">
    <!-- Header -->
    <div class="header">
      <h1 class="title">Invoices</h1>
      <button class="btn-primary">+ Create New Invoice</button>
    </div>

    <!-- Summary Boxes -->
    <div class="summary-grid">
      <StatusBox label="Unpaid" value="2 / 2" color="text-red-600" />
      <StatusBox label="Paid" value="0 / 2" color="text-green-600" />
      <StatusBox label="Partially Paid" value="0 / 2" color="text-yellow-600" />
      <StatusBox label="Overdue" value="0 / 2" color="text-orange-600" />
      <StatusBox label="Draft" value="0 / 2" color="text-gray-500" />
    </div>

    <!-- Table and Controls -->
    <div class="table-wrapper">
      <div class="table-controls">
        <div class="left">
          <select class="control-select">
            <option>25</option>
          </select>
          <button class="btn-secondary">Export</button>
        </div>
        <div class="right">
          <input v-model="search" type="text" placeholder="Search..." class="search-input" />
        </div>
      </div>

      <table class="invoice-table">
        <thead>
        <tr>
          <th>Invoice #</th>
          <th>Amount</th>
          <th>Total Tax</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Project</th>
          <th>Tags</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="invoice in filteredInvoices" :key="invoice.id">
          <td>{{ invoice.number }}</td>
          <td>{{ invoice.amount }}</td>
          <td>{{ invoice.tax }}</td>
          <td>{{ invoice.date }}</td>
          <td>{{ invoice.customer }}</td>
          <td>{{ invoice.project }}</td>
          <td>{{ invoice.tags }}</td>
          <td>{{ invoice.dueDate }}</td>
          <td><span class="status-pill unpaid">Unpaid</span></td>
        </tr>
        </tbody>
      </table>

      <div class="pagination">
        <span>Showing 1 to 2 of 2 entries</span>
        <div class="pagination-controls">
          <button>Previous</button>
          <button>1</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import StatusBox from '@/components/StatusBox.vue'

const search = ref('')
const invoices = ref([
  {
    id: 1,
    number: 'INV-000031',
    amount: '$50,112.96',
    tax: '$0.00',
    date: '02-08-2025',
    customer: 'Autopoets Planeet',
    project: '',
    tags: '',
    dueDate: '05-08-2025',
    status: 'Unpaid',
  },
  {
    id: 2,
    number: 'INV-000030',
    amount: '$2.00',
    tax: '$0.00',
    date: '19-07-2025',
    customer: 'Yvonne Fawzi Rashed',
    project: '',
    tags: '',
    dueDate: '18-08-2025',
    status: 'Unpaid',
  },
])

const filteredInvoices = computed(() => {
  if (!search.value) return invoices.value
  return invoices.value.filter((inv) =>
      Object.values(inv).some((v) =>
          String(v).toLowerCase().includes(search.value.toLowerCase())
      )
  )
})
</script>

<style scoped>
.invoice-container {
  padding: 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 700;
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

/* Table Section */
.table-wrapper {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow-x: auto;
  padding: 1rem;
}

/* Controls */
.table-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.table-controls .left,
.table-controls .right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control-select {
  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
}

.btn-secondary {
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  cursor: pointer;
}

.search-input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

/* Table */
.invoice-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.invoice-table th,
.invoice-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}

.invoice-table th {
  background-color: #f9fafb;
  font-weight: 600;
  color: #4b5563;
}

.invoice-table tr:hover {
  background-color: #f3f4f6;
}

/* Status */
.status-pill {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
}

.status-pill.unpaid {
  background-color: #fee2e2;
  color: #b91c1c;
}

.status-pill.paid {
  background-color: #dcfce7;
  color: #15803d;
}

.status-pill.partial {
  background-color: #fef3c7;
  color: #92400e;
}

.status-pill.overdue {
  background-color: #ffedd5;
  color: #c2410c;
}

.status-pill.draft {
  background-color: #e5e7eb;
  color: #374151;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.pagination-controls {
  display: flex;
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
