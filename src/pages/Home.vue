<template>
  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <app-header class="mb-3"></app-header>
        <app-todo-form class="mb-3"></app-todo-form>
        <app-todo-list></app-todo-list>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import TodoForm from '@/components/TodoForm'
  import TodoList from '@/components/TodoList'

  export default {
    components: {
      'app-header': Header,
      'app-todo-form': TodoForm,
      'app-todo-list': TodoList
    }
  }
</script>
