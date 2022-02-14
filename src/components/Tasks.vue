<template>
    <div :key="task.id" v-for="task in tasks">
        <Task :task="task" @toggle-reminder="$emit('toggle-reminder',task.id)" @remove-task="$emit('remove-task',task.id)"/>
    </div>
</template>
<script>
import Task from "./Task"
export default {
    name:"Tasks",
    components:{
        Task
    },
    props:{
        tasks:Array
    },
    emits:['toggle-reminder','remove-task']
}
</script>