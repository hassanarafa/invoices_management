<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="login-left">
        <h2 class="login-title">Welcome Back</h2>

        <form @submit.prevent="handleSubmit" class="login-form">
          <input
              v-model="username"
              type="text"
              placeholder="Username"
              class="login-input"
          />

          <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="login-input"
          />

          <div class="login-options">
            <label class="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" class="login-button">Sign In</button>
        </form>
      </div>

      <div class="login-right">
        <img src="@/assets/logo.webp" alt="Login Illustration" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const username = ref('')
const password = ref('')

function handleSubmit() {
  // Simulate login
  router.push('/home')
}
</script>


<style scoped>
.login-wrapper {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.login-container {
  display: flex;
  flex-direction: row; /* logo left by default */
  width: 100%;
  max-width: 960px;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.login-left {
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.login-input {
  padding: 0.85rem 1.2rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s;
}

.login-input:focus {
  border-color: #475569;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  outline: none;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.forgot-password {
  color: #475569;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.forgot-password:hover {
  color: #2563eb;
  text-decoration: underline;
}

.login-button {
  background-color: #475569;
  color: white;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-right {
  flex: 1;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.login-right img {
  width: 100%;
  max-width: 220px;
  height: auto;
  object-fit: contain;
}

@media (max-width: 767px) {
  .login-container {
    flex-direction: column; /* stack: logo on top */
  }

  .login-right {
    order: -1; /* move logo section above form */
    padding: 1.5rem;
  }

  .login-right img {
    max-width: 160px;
    margin: 0 auto;
    border-radius: 1rem;
  }

  .login-left {
    padding: 1.5rem 1rem;
  }
}
</style>
