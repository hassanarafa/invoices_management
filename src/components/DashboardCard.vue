<template>
  <div class="card">
    <div class="icon">{{ icon }}</div>
    <div class="info">
      <h4>{{ title }}</h4>
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    icon: String,
  },
};
</script>

<style scoped>
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-4px);
}
.icon {
  font-size: 2rem;
}
.info h4 {
  margin: 0;
  font-size: 1rem;
  color: #4b5563;
}
.info p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
}
</style>
