<template>
<div>
    <input type = "date" class = "form-control" placeholder="Choose a date" v-model="chooseDate"/>
    {{chooseDate}}
</div>

</template>
<script>
export default {
    name:"Calendar",
    data(){
        return {
            date: new Date(),
            chooseDate:null
            }
    },
    computed(){
        fucconvertDate(){
            return Date(this.chooseDate)
        }
    }
}
</script>
<style>

</style>