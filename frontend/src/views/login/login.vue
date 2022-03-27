<template>
  <div class="login">
    <login-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginForm from './components/login-form.vue'

export default defineComponent({
  components: {
    LoginForm
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
