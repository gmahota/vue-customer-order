<template>
  <div class="container">

    <gantt class="left-container" :tasks="tasks"></gantt>

  </div>
</template>

<script>

export default {
  components : {
	'gantt':  () => import('~/components/Gantt.vue')
},
  data () {
    
    return {
        title: "Index",
      tasks: {
        data: [
          {id: 1, text: 'Task #1', start_date: '15-04-2017', duration: 3, progress: 0.6},
          {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
        ],
        links: [
          {id: 1, source: 1, target: 2, type: '0'}
        ]
      },
    }
  }
}
</script>