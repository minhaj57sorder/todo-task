<template>
     <button class="btn" :style="{background:color}">{{btnText}}</button>
</template>
<script>
export default {
    name:"Button",
    props:{
        btnText:String,
        color:String
    }
}
</script>