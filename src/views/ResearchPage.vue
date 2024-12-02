<template>
  <div class="research">
    <h1>Research</h1>
    <p>Explore the latest research and studies.</p>

    <!-- Power BI Embed (full screen except app bar) -->
    <iframe
      title="Research"
      :style="iframeStyle"
      src="https://app.powerbi.com/view?r=eyJrIjoiNDM3ODE5MTUtN2RhMS00ZDgxLWJiY2QtMmJiM2MyOTg2YWFkIiwidCI6ImU5NGQ1N2FkLWEwYjctNDRjZi04ODNmLWQ3OTg3YTBiZDI0NCIsImMiOjEwfQ%3D%3D"
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ResearchPage",
  data() {
    return {
      iframeHeight: 0, // To store the calculated height of the iframe
    };
  },
  mounted() {
    this.adjustIframeHeight(); // Adjust height on component mount
    window.addEventListener("resize", this.adjustIframeHeight); // Adjust height on window resize
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustIframeHeight); // Cleanup event listener
  },
  methods: {
    adjustIframeHeight() {
      const appBarHeight = 50; // Set the height of your app bar here
      const windowHeight = window.innerHeight;
      this.iframeHeight = windowHeight - appBarHeight; // Subtract app bar height from window height
    },
  },
  computed: {
    iframeStyle() {
      return {
        width: "100%", // Make iframe take full width of the container
        height: `${this.iframeHeight}px`, // Dynamically set iframe height
      };
    },
  },
};
</script>

<style scoped>
.research {
  padding-left: 20px; /* Add left padding for spacing */
  padding-right: 20px; /* Add right padding for spacing */
  padding-top: 20px; /* Add top padding to match the content */
}

h1 {
  margin-bottom: 16px; /* Add margin below the title */
}

p {
  margin-bottom: 20px; /* Add margin below the paragraph */
}
</style>
