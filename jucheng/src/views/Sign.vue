<template name="component-name">
  <div class="main">
    <h3>欢迎来到聚橙网</h3>
    <div class="field">
        <van-field
            class="username"
            v-model="username"
            clearable
            placeholder="请输入手机号/邮箱"
            @click-right-icon="$toast('question')"
        />
        <van-field 
            class="password"
            v-model="password" 
            type="password" 
            placeholder="请输入密码" 
        />
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
            username: "",
            password: ""
            };
        }
    };
</script>
<style>
    .main{
        margin: 75px auto;
    }
    h3{
        margin-top: 98px;
        font-size: 25px;
        text-align: center;
    }
    .field{
        margin:0px auto;
    }
    .username{
        border:1px soild rgb(240, 239, 239);
        width:530px;
        height: 70px;
        font-size: 20px;
    }
    .password{
        border:1px soild rgb(240, 239, 239);
        width:530px;
        height: 70px;
        font-size: 20px;
    }
</style>
