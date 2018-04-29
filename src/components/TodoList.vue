<template>
  <ul v-if="tasks && tasks.length" class="list-group">
    <li v-for="(task, i) in tasks" :key="i" class="list-group-item">{{ task }}</li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'tasks'
      ])
    }
  }
</script>
