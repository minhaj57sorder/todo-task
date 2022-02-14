<template>
    <div :class="['task',task.reminder&&'reminder']" @dblclick="$emit('toggle-reminder',task.id)">
        <h4>{{task.text}} <i class="cross" @click="$emit('remove-task',task.id)">X</i></h4>
        <p>{{task.day}}</p>
    </div>
</template>
<script>
export default {
    name:"Task",
    props:{
        task:Object
    }
}
</script>