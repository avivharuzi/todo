<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <app-header class="mb-3"></app-header>
        <app-todo-form></app-todo-form>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import TodoForm from '@/components/TodoForm'

  export default {
    components: {
      'app-header': Header,
      'app-todo-form': TodoForm
    }
  }
</script>
