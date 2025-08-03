<template>
  <div class="summary-box" :style="{ borderLeftColor: borderColor }">
    <div class="title">{{ title }}</div>
    <div class="amount">{{ amount }}</div>
  </div>
</template>

<script>
export default {
  name: 'SummaryBox',
  props: {
    title: String,
    amount: String,
    borderColor: {
      type: String,
      default: '#ccc'
    }
  }
}
</script>

<style scoped>
.summary-box {
  flex: 1;
  padding: 1rem;
  border-left: 4px solid;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 150px;
}

.title {
  font-size: 14px;
  color: #555;
}

.amount {
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
</style>
