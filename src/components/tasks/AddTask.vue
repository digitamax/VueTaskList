<template>
    <div>
        <h1>Add Task form</h1>
        <form @submit.prevent="addTask">
            
            <div class="row">
                <div class="input-field col s12">
                    <input placeholder="Enter todo Task" type="text" v-model='taskname'/>
                    <button class="btn waves-effect waves-light purple accent-1"><i class="material-icons right">Envoyer</i>
                    </button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useStore} from 'vuex'
export default {
    name: 'AddTask',
    setup(){
        let taskname = ref("")
        const store = useStore()
        const addTask = () => {
            const task = {
                name:taskname.value,
            }
            store.dispatch('addTask', task)
            taskname.value =""
        }
        return{
            taskname,
            addTask
        }
    }
}
</script>