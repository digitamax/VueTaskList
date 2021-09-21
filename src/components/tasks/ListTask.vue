<template>
    <div>
        <h2>List of tasks</h2>
        <Task v-for="t in getTasks " :key="t._id" :task='t' @taskDone='taskDone' @taskRemoved='taskRemoved'/>
    </div>
</template>

<script>
import Task from './Task'
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
    name: 'ListTask',
    components: {
        Task,
    },
    emits:["taskDone", "taskRemoved"],

    setup() {
        const store = useStore()  
        const taskDone = (id) => {
            store.dispatch('doneTask', id)
        }


       const taskRemoved = (id) => {
            store.dispatch('removeTask', id)
        }

        onMounted(()=>{
            store.dispatch('initTasks')
        })
        
        return {
            taskDone,
            taskRemoved,
            getTasks: computed( () =>store.getters.getTasks)
        }
    },
}
</script>