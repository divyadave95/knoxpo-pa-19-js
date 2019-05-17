<template>
<!-- Display of ToDo List which includes remove, complete, edit options -->
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <ul class="list-group">
                <li class="list-group-item" v-for="item in todos">
                {{ item.name }}
                <div class="btn-group">
                <button type="button" @click="remove(item.id)" class="btn btn-primary btn-sm">
                <i class="fas fa-trash-alt"></i>Remove</button>
                <button type="button" @click="complete(item)" class="btn btn-primary btn-sm">
                <i class="fas fa-check"></i>Complete</button>
                 <button type="button" @click="edit(item)" class="btn btn-primary btn-sm">
                <i class="fas fa-pen"></i>Edit</button>
            </div>
                </li>
            </ul>
    
</div>
    </div>
</div>
</template>
<script>
export default {
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



</style>