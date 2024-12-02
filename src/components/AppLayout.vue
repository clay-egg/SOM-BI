<template>
  <div>
    <AppBar @toggle-side-panel="toggleSidePanel" />
    <SidePanel :isOpen="isSidePanelOpen" />
    <main class="content">
      <h1>Welcome to the app!</h1>
      <p>Here is your main content.</p>
    </main>
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import SidePanel from "./SidePanel.vue";

export default {
  name: "AppLayout",
  components: { AppBar, SidePanel },
  data() {
    return {
      isSidePanelOpen: false, // Hidden by default
    };
  },
  methods: {
    toggleSidePanel() {
      this.isSidePanelOpen = !this.isSidePanelOpen;
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 50px; /* Offset for the app bar */
  padding: 16px;
  margin-left: 0; /* No offset when side panel is hidden */
  transition: margin-left 0.3s ease-in-out;
}

.content.side-panel-open {
  margin-left: 250px; /* Offset when side panel is visible */
}

@media (max-width: 768px) {
  .content {
    margin-left: 0;
  }
}
</style>
