<template>
  <div ref="gantt"></div>
</template>

<script>
import 'dhtmlx-gantt'

export default {
  name: 'gantt',
  props: {
    tasks: {
      type: Object,
      default () {
        return {data: [], links: []}
      }
    }
  },

  mounted: function () {
    gantt.init(this.$refs.gantt)
    gantt.parse(this.$props.tasks)
  }
}
</script>

