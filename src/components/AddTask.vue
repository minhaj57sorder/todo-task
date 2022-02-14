<template>
    <div>
        <form @submit="addNewTask">
            <div class="form-control">
                <label for="text">Task text</label>
                <input type="text" name="text" v-model="text">
            </div>
            <div class="form-control">
                <label for="day">Day</label>
                <input type="text" name="day" v-model="day">
            </div>
            <div class="form-control">
                <label for="reminder">Reminder</label>
                <input type="checkbox" name="reminder" v-model="reminder">
            </div>
            <input type="submit" value="submit">
        </form>
    </div>
</template>
<script>
export default {
    name:"AddTask",
    data(){
        return{
            text:'',
            day:'',
            reminder:false
        }
    },
    methods:{
        addNewTask(e){
            e.preventDefault()
            const newTask={
                text:this.text,
                day:this.day,
                reminder: this.reminder
            }
            this.$emit('add-newTask',newTask)
            this.text=''
            this.day=''
            this.reminder=false
        }
    }
}
</script>