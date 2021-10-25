<template>
    <div>
        <h3>Redirecting ...</h3>
    </div>
</template>
<script>
import mixin from "../mixin"
export default {
    name:"redirect",
    mixins:[mixin],
    beforeMount(){
        this.getUserType();
        if((this.usertype === "employer")||(this.usertype === "employee")){
            this.$router.push("/home")
        }
        else{
            this.$router.push("/authenticate")
        }
    }
}
</script>