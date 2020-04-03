<template>
    <div class="panel panel-default">
        <router-link to="/home">Home</router-link>
        <div class="panel-body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import Home from "./views/Home";
export default {
  components :{
    // Home
  }
}
</script>