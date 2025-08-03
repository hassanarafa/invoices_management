<template>
  <div class="dashboard-container">
    <div class="header">
      <h1>Invoices Awaiting Payment <span>2 / 2</span></h1>
      <div class="progress red"></div>
    </div>

    <div class="invoice-overview">
      <h2>Invoice overview</h2>
      <div class="status-list">
        <StatusItem label="Draft" count="0" percent="0.00%" />
        <StatusItem label="Not Sent" count="2" percent="100.00%" color="#333" />
        <StatusItem label="Unpaid" count="2" percent="100.00%" color="red" />
        <StatusItem label="Partially Paid" count="0" percent="0.00%" />
        <StatusItem label="Overdue" count="0" percent="0.00%" />
        <StatusItem label="Paid" count="0" percent="0.00%" color="green" />
      </div>

      <div class="invoice-summary">
        <SummaryBox title="Outstanding Invoices" value="$50,114.96" color="orange" />
        <SummaryBox title="Past Due Invoices" value="$0.00" color="red" />
        <SummaryBox title="Paid Invoices" value="$0.00" color="green" />
      </div>
    </div>
  </div>
</template>

<script setup>
import StatusItem from './StatusItem.vue';
import SummaryBox from './SummaryBox.vue';
</script>

<style scoped>
.dashboard-container {
  padding: 2rem;
  background: #f8f9fc;
  min-height: 100vh;
}

.header {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .progress {
  height: 4px;
  background: red;
  border-radius: 4px;
  width: 100%;
}

.invoice-overview {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.status-list {
  margin-top: 1rem;
}

.invoice-summary {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .invoice-summary {
    flex-direction: column;
  }
}
</style>