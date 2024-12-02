<template>
  <div :class="['side-panel', { open: isOpen }]">
    <div class="button-list">
      <button v-for="button in buttons" :key="button.label" @click="navigate(button.path)">
        {{ button.label }}
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"; // Import the router composable

export default {
  name: "SidePanel",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const router = useRouter(); // Access the router instance

    const navigate = (path) => {
      router.push(path); // Navigate to the specified path
    };

    const buttons = [
      { label: "Home", path: "/" },
      { label: "KPI", path: "/kpi" },
      { label: "Curriculum Statistics", path: "/curriculum-statistics" },
      { label: "Research", path: "/research" },
      { label: "Academic Service", path: "/academic-service" },
      { label: "Collaboration", path: "/collaboration" },
      { label: "Faculty & Staff", path: "/faculty-staff" },
      { label: "Alumni", path: "/alumni" },
      { label: "SDGs Impact", path: "/sdgs-impact" },
      { label: "Management", path: "/management" },
    ];

    return {
      buttons,
      navigate,
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
