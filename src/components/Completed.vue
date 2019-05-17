<template>
<!-- ToDo List Completed Item Setion -->
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <ul class="list-group">
                <li class="list-group-item" v-for="item in completedtodos">
                {{ item.name }}
                <div class="btn-group">
                <button type="button" @click="remove(item.id)" class="btn btn-primary btn-sm">
                <span><i class="far fa-trash-alt"></i>Remove</span>
                </button>
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
        completedtodos() {
            return this.$store.getters.completedtodos;
        }
    },
    methods: {
        remove(todo) {
          this.$store.dispatch('removeToDo', todo)
        }
    }
}

</script>