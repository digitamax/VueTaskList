<template>
    
     <div class="row">
      <div class="col s6 offset-s3 bloc"><AddTask/></div>
      <div class="col s6 offset-s3 bloc"><ListTask /></div>
    </div>
</template>

<script>
import AddTask from  '@/components/tasks/AddTask'
import ListTask from  '@/components/tasks/ListTask'

export default {
    name:'Home',
    components:{
        AddTask,
        ListTask
        }
}
</script>

<style scoped>
    .bloc{
        margin-top:10px
    }
</style>