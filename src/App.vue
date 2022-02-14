<template>
  <div class="container">
    <Header title="Task tracker" />
    <div>
      <AddTask @add-newTask="addNewTask" />
    </div>
    <Tasks :tasks="tasks" @toggle-reminder="toggleReminder" @remove-task="removeTask" />
  </div>
</template>

<script>
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
export default {
  name: 'App',
  components:{
    Header,
    Tasks,
    AddTask
  },
  data(){
    return{
      tasks:[]
    }
  },
  methods:{
    async addNewTask(newTask){
      const res = await fetch(`http://localhost:5000/tasks`,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(newTask)
      })
      if(res.status === 201){
        this.tasks = [...this.tasks,newTask]
      }
    },
    async fetchTasks(){
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    },
    async fetchTask(id){
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
    },
    async toggleReminder(id){
      const taskToToggle = await this.fetchTask(id);
      const toggledTask = {...taskToToggle,reminder:!taskToToggle.reminder}
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(toggledTask)
      })
      if(res.status === 200){
        this.tasks = this.tasks.map(task=>task.id===id?{...toggledTask}:task)
      }
    },
    async removeTask(id){
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method:"DELETE",
      })
      if(res.status === 200){
        this.tasks = this.tasks.filter(task=>task.id!==id)
      }
    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  display: flex;
  justify-content: center;
}
.container{
  min-width:350px;
  border: 1px solid rgb(77, 77, 77);
  border-radius: 5px;
  min-height: 250px;
  padding: 15px;
}
.btn{
  padding:15px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: White;
  border: none;
  border-radius: 4px;
}
.btn-block{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task{
  background-color: gainsboro;
  padding:5px;
  margin-bottom: 10px;
}
.task h4{
  font-size: 1.2rem;
  margin: 4px;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.task .cross{
  color:red;
  font-style: normal;
  font-size: 0.9rem;
  cursor: pointer;
}
.task p{
  margin: 4px;
  margin-left: 2px;
  font-size: 0.8rem;
}
.reminder{
  border-left: 4px solid green;
}
</style>
