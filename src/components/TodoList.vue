<template>
<!-- Display of ToDo List which includes remove, complete, edit options -->
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h4 style="margin-top: 2em;">Total Todo Count: {{ todos.length }}</h4>
             <div v-for="item in todos">
            <div v-if="!editing">
      <span class='text' @click="enableEditing">{{ item.name }}</span>
    </div>
    <div v-if="editing">
      <ul class="list-group">
          <li class="list-item-group">
          <input v-model="tempValue" class="input"/>
                <div class="btn-group">
                <button type="button" @click="remove(item.id)" class="btn btn-danger btn-sm">
                <i class="fas fa-trash-alt"></i>Remove</button>
                <button type="button complete" @click="complete(item)" class="btn btn-success btn-sm">
                <i class="fas fa-check"></i>Complete</button>
            </div>
                </li>
            </ul>
    </div>
             </div>
    
</div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            editvalue: 'Please Edit',
            editing: false
        }
    },
    
    computed: {
        todos() {
            return this.$store.getters.gettodo
        }
    },
    methods: {
        remove(todo) {
          this.$store.dispatch('removeToDo', todo)
        },
        complete(todo) {
            this.$store.dispatch('completedToDo', todo)
        },
         enableEditing: function(){
         this.editing = true;
    },
        
    }
}
</script>
<style>
.list-group {
    margin-top: 3em;
    margin-left: 1em;
}
i {
    padding-left: 0.5em;
    padding-right: 0.5em;
}
.complete:hover {
    background-color: green;
}


</style>