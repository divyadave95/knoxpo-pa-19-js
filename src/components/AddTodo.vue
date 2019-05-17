<template>
<div class="row">
    <!-- ToDo Add Section -->
    <div class="col-md-12">
    <form @submit.prevent="addToDo">
        <input type="text" placeholder="I need to add" v-model="name">
        <button class="btn btn-success btn-sm" style="margin-left: 1em;"><i class="fas fa-plus-circle" style="font-size: 2em;"></i></button>
    </form>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            name: "",
            newId: 2
        }
    },
    methods: {
        addToDo() {
         this.$store.dispatch('addToDo', this)
         this.newId++;
         this.name = "";
        },
        
    }
}
</script>
<style scoped>

input {
    height: 40px;
    width: 300px;
    border-radius: 5px;
}

</style>
