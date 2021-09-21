<template>
    <div class="row purple lighten-5 task">
        <div class="col s10">{{t.name}}</div>
        <div class="col s1"><button class="btn waves-effect waves-light" @click="done(t._id)" v-if="t.status===false"><i class="fas fa-check"></i></button></div>
        <div class="col s1"><button class="btn waves-effect waves-light deep-orange accent-3" @click="remove(t._id)"><i class="fas fa-trash-alt"></i></button></div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

    props: {
        task:Object
    },

    setup(props, ctx) {
        let t  = ref(props.task)
        const done = (id) => {
            ctx.emit("taskDone", id)
        }

        const remove = (id) => {
            ctx.emit("taskRemoved", id)
        }

        return {
            t,
            done,
            remove
        }
    }
    
}
</script>
<style scoped>

.task{
    padding: 15px;
    font-size:20px;
    margin-bottom: 10px;
}

</style>