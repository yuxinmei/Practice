<template>
  <div class="login-form">
    <h1 class="title">Products Management System</h1>
    <el-form ref="ruleForm" :rules="rules" :model="formData">
      <el-form-item label="username" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input type="password" show-password v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit">login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  name: 'login-form',
  setup() {
    const formData = reactive({
      username: '',
      password: ''
    })

    const ruleForm = ref<any>(null)

    const onSubmit = () => {
      console.log(1)
      ruleForm.value.validate().then((valid: boolean) => {
        if (valid) {
          router.push('/main')
        } else {
          return false
        }
      })
    }
    const rules = {
      username: [
        {
          required: true,
          message: 'Please input username',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z]{1,15}$/,
          message: 'Username should only contain lowercase letters. e.g. john',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z]{1,15}$/,
          message: 'Password should only contain lowercase letters.',
          trigger: 'blur'
        },
        {
          min: 3,
          max: 8,
          message: 'Password  length should between 3-8.',
          trigger: 'blur'
        }
      ]
    }

    return {
      formData,
      rules,
      ruleForm,
      onSubmit
    }
  }
})
</script>

<style lang="less" scoped>
.login-form {
  width: 400px;
  margin-bottom: 250px;

  .title {
    text-align: center;
    font-size: 20px;
    color: cornflowerblue;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
