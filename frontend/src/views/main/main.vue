<template>
  <div class="common-layout">
    <el-container>
      <el-header></el-header>
      <el-main> <product-form /></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ProductForm from './components/product-form.vue'
export default defineComponent({
  components: {
    ProductForm
  }
})
</script>

<style lang="less" scoped></style>
