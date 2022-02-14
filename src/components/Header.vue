<template>
    <header>
        <h3>{{title}}</h3>
        <Button color="green" btnText="Add" />
    </header>
</template>
<script>
import Button from "./Button"
export default {
    name:"Header",
    components:{
        Button
    },
    props:{
        title:String
    }
}
</script>