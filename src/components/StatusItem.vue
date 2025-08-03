<template>
  <div class="status-item">
    <div class="label-count">
      <span class="count" :style="{ color: color }">{{ count }}</span>
      <span class="label">{{ label }}</span>
    </div>
    <div class="bar-container">
      <div class="bar" :style="{ backgroundColor: color, width: percentage + '%' }"></div>
    </div>
    <div class="percentage">{{ percentage !== undefined ? percentage.toFixed(2) + '%' : '0.00%' }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatusItem',
  props: {
    label: String,
    count: Number,
    percentage: Number,
    color: String
  }
}
</script>


<style scoped>
.status-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  font-size: 14px;
}

.label-count {
  flex: 1;
  display: flex;
  gap: 8px;
  align-items: center;
}

.bar-container {
  flex: 3;
  background-color: #eee;
  height: 6px;
  border-radius: 4px;
  margin: 0 12px;
  position: relative;
  overflow: hidden;
}

.bar {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.percentage {
  width: 60px;
  text-align: right;
  font-weight: 500;
  color: #666;
}
</style>
