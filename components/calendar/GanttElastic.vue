<template>
  
</template>

<script>
import GanttElastic from "gantt-elastic";

export default {
  name: "ganttElastic",
  components: {
    ganttElastic: GanttElastic
  },
  props: ["tasks", "options"],
  template: `<gantt-elastic :tasks="tasks" :options="options"></gantt-elastic>`,
  data() {
    return {};
  }
};
</script>
