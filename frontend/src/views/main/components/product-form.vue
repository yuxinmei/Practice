<template>
  <el-button type="primary" class="add-button" @click="openDialog">add</el-button>

  <el-dialog v-model="dialogFormVisible" title="Add product">
    <el-form :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Stock">
        <el-input v-model="form.stock" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleNewData(form)">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
  <el-table class="table" border :data="filterTableData" style="width: 100%">
    <el-table-column label="Name" prop="name" />
    <el-table-column label="Stock" prop="stock" />
    <el-table-column align="center">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Search name" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { getProducts, newProduct, deleteProduct } from '@/service/products/products'

interface Product {
  id: number
  name: string
  stock: number
}

const pageListData = computed(() => getProducts())
const search = ref('')
const dialogFormVisible = ref(false)

const form = reactive({
  id: undefined,
  name: '',
  stock: undefined
})

const newForm = {
  id: undefined,
  name: '',
  stock: undefined
}
const filterTableData = computed(() =>
  tableData.filter(
    (data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const openDialog = () => {
  Object.assign(form, newForm)
  dialogFormVisible.value = true
}
const handleEdit = (index: number, editData: Product) => {
  Object.assign(form, editData)
  dialogFormVisible.value = true
}
const handleDelete = (id: number) => {
  const tableData = deleteProduct(id)
}

const handleNewData = (form: any) => {
  const tableData = newProduct({
    newData: {
      name: form.name,
      stock: form.stock
    }
  })
  dialogFormVisible.value = false
}

const tableData: Product[] = [
  {
    id: 0,
    name: 'apple',
    stock: 200
  },
  { id: 1, name: 'watermelon', stock: 100 },
  {
    id: 2,
    name: 'banana',
    stock: 12
  },
  {
    id: 3,
    name: 'orange',
    stock: 68
  }
]
</script>

<style scoped>
.add-button {
  float: right;
  margin-bottom: 10px;
}
.table {
  width: 400px;
  margin-bottom: 250px;
}
</style>
