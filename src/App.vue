<template>
  <div id="app">
    <div class="container">
    <appcomplete></appcomplete>
    <appaddtodo></appaddtodo>
    </div>
    <div class="container">
    <apptodolist></apptodolist>
    </div>
  </div>
</template>

<script>
import AddToDo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
import Completed from '@/components/Completed.vue'
export default {
  components: {
    appaddtodo: AddToDo,
    apptodolist: TodoList,
    appcomplete: Completed
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
