<template>
    <form @submit="onSubmit">
        <div class="form-control">
            <label for="text">text</label>
            <input name="text" v-model="text" type="text">
        </div>
        <div class="form-control">
            <label for="Day">Day</label>
            <input name="Day" v-model="day" type="text">
        </div>
        <div class="form-control">
            <label for="checkbox">Checkbox</label>
            <input name="checkbox" type="checkbox" v-model="reminder">
        </div>
        <input class="btn btn-block" type="submit">
    </form>
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
        onSubmit(e){
            e.preventDefault()
            if(!this.text){
                alert("please add task text")
                return
            }else{
                const newTask = {
                    id:Math.floor(Math.random()*10000),
                    text:this.text,
                    day:this.day,
                    reminder:this.reminder
                }
                this.$emit('add-task',newTask)
    
                this.text=""
                this.day=""
                this.reminder=false
            }
        }
    }
}
</script>
<style scoped>

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>