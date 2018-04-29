<template>
  <section>
    <form @submit.prevent="onSubmit" autocomplete="off" novalidate>
      <div class="form-group">
        <input v-model="task" type="text" class="form-control form-control-lg" placeholder="Task">
      </div>
      <button class="btn btn-success btn-lg btn-block">Submit</button>
    </form>
  </section>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        task: null
      }
    },
    methods: {
      ...mapMutations([
        'setTodo'
      ]),
      onSubmit () {
        if (!this.task) {
          return;
        }
        this.setTodo(this.task)
        this.task = null
      }
    }
  }
</script>
