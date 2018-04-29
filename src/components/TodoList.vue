<template>
  <ul v-if="todos && todos.length" class="list-group">
    <li v-for="(todo, i) in todos" :key="i" class="list-group-item" :class="{ 'bg-secondary text-white': todo.complete }">{{ todo.task }}
    <span class="float-right">
      <button class="btn btn-info" @click="toggleComplete(todo)"><i class="fa fa-check"></i></button>
      <button @click="deleteTodo(todo)" class="btn btn-danger"><i class="fa fa-trash"></i></button>
    </span>
    </li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'todos'
      ])
    },
    methods: {
      ...mapMutations([
        'deleteTodo',
        'toggleComplete'
      ])
    }
  }
</script>
