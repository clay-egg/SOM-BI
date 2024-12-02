<template>
  <div>
    <AppBar @toggle-side-panel="toggleSidePanel" />
    <SidePanel :isOpen="isSidePanelOpen" />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import SidePanel from "./components/SidePanel.vue";

export default {
  name: "App",
  components: { AppBar, SidePanel },
  data() {
    return {
      isSidePanelOpen: false,
    };
  },
  methods: {
    toggleSidePanel() {
      this.isSidePanelOpen = !this.isSidePanelOpen;
    },
  },
};
</script>