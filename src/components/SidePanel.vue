<template>
  <div :class="['side-panel', { open: isOpen }]">
    <div class="button-list">
      <button v-for="button in buttons" :key="button.label" @click="button.action">
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidePanel",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      buttons: [
        { label: "Home", action: () => alert("Home clicked") },
        { label: "KPI", action: () => alert("About clicked") },
        { label: "Curriculum Statistics", action: () => alert("Contact clicked") },
        { label: "Research", action: () => alert("Contact clicked") },
        { label: "Academic Service", action: () => alert("Settings clicked") },
        { label: "Collaboration", action: () => alert("Home clicked") },
        { label: "Faculty & Staff", action: () => alert("About clicked") },
        { label: "Alumni", action: () => alert("Contact clicked") },
        { label: "SDGs Impace", action: () => alert("Settings clicked") },
        { label: "Management", action: () => alert("Home clicked") },
      ],
    };
  },
};
</script>

<style scoped>
.side-panel {
  width: 190px;
  height: calc(100vh - 50px); /* Full height minus the app bar */
  background-color: #034E69;
  color: white;
  position: fixed;
  top: 50px; /* Start below the app bar */
  left: -300px; /* Completely hide when closed */
  transition: left 0.3s ease-in-out;
  overflow-y: auto;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.side-panel.open {
  left: 0; /* Slide in when open */
}

.button-list {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Space between buttons */
}

.button-list button {
  background-color: white;
  color: black;
  border: none;
  padding: 10px 16px;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.button-list button:hover {
  background-color: #555;
}

.button-list button:active {
  background-color: #666;
}
</style>
