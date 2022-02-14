<template>
    <header>
        <h2>{{title}}</h2>
        <Button @show-hide-addtask="$emit('show-hide-addtask')" :btnTxt="showhide?'close':'Add'" :color="showhide?'red':'green'" />
    </header>
</template>

<script>
import Button from './Button'
export default {
    name: 'Header',
    props: {
        title:String,
        showhide:Boolean,
        },
    components: {
        Button,
    },
    emits:['show-hide-addtask']
}

</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>