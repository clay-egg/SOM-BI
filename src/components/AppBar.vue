<template>
  <div class="app-bar">
    <button @click="$emit('toggle-side-panel')">☰</button>
    <div class="logo-container">
      <img src="@/assets/mfu.png" alt="Logo" class="logo" />
    </div>
    <span class="app-title">SOM BI</span>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  emits: ["toggle-side-panel"],
};
</script>

<style scoped>
.app-bar {
  width: 100%;
  height: 50px;
  background-color: #034e69;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.app-bar button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.logo-container {
  margin-left: 16px; /* Add margin between the button and the logo */
}

.logo {
  height: 40px; /* Adjust logo size */
  width: auto;
}

.app-title {
  margin-left: 16px;
  font-size: 18px;
}
</style>
