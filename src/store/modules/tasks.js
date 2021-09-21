import axios from 'axios';

 const config = {
  headers: {
    'content-type':'application/json'
  }
}
const taskStore = {
    state: () => ({
        tasks: []
     }),

     getters:{
        getTasks:  (state) => {
            return state.tasks
        },
     },

    mutations: {
        INITTASKS: async (state, tasks) => {
            console.log( tasks)
            state.tasks = tasks
         },

        DONETASK: (state, id) => {
            const index = state.tasks.findIndex(task => task._id == id)
            console.log(index)
            if(index !== -1){
                let updateTask = state.tasks[index]
                updateTask.status=true
                state.tasks.splice(index,1, updateTask)
            }
        },

        REMOVETASK: (state, id) => state.tasks = state.tasks.filter(task => task._id !== id),

        ADDTASK: (state, task)=>{
            state.tasks.push(task)
        }
    },
    actions: {
        initTasks: async (context) => {
            try {
                const response = await axios.get('/tasks')
                //const objs = Object.assign({}, response.data.data) 
                context.commit("INITTASKS", response.data.data)
            } catch (error) {
                console.log(error)
            }
        },
        async doneTask(context, id) {
            try {
                const response = await axios.put(`/tasks/${id}`)
                console.log(response.data)
                context.commit('DONETASK', id)
            } catch (error) {
                console.log(error)
            }
        },
        async removeTask(context, id) {
            try {
                const response = await axios.delete(`/tasks/${id}`)
                console.log(response.data)
                context.commit('REMOVETASK', id)
            } catch (error) {
                console.log(error)
            }
        },
            
       async addTask(context, task) {
            try {
                const response = await axios.post(`/tasks/`, task, config)
                console.log(response.data.data)
                context.commit("ADDTASK", response.data.data)
            } catch (error) {
                console.log(error)
            }
            
        }
    },
}

export default taskStore