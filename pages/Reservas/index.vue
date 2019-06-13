<template>
  <div class="container">
    <h1> Reservas Hotel</h1>

    <no-ssr>
    <Gantt/>  </no-ssr>
  </div>
</template>

<script>
export default {
  components: {
    Gantt: () => import("@/components/calendar/GanttElastic.vue")
  }
};
</script>