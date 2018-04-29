<template>
  <ul v-if="tasks && tasks.length" class="list-group">
    <li v-for="(task, i) in tasks" :key="i" class="list-group-item">{{ task }}
    <span class="float-right"><button @click="deleteTask(task)" class="btn btn-danger"><i class="fa fa-trash"></i></button></span>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'tasks'
      ])
    },
    methods: {
      ...mapMutations([
        'deleteTask'
      ])
    }
  }
</script>
