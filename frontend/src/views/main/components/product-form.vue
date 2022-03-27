<template>
  <el-table class="table" border :data="filterTableData" style="width: 100%">
    <el-table-column label="Date" prop="date" />
    <el-table-column label="Name" prop="name" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
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

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'product-form',
  setup() {
    interface User {
      date: string
      name: string
      address: string
    }

    const search = ref('')
    const filterTableData = computed(() =>
      tableData.filter(
        (data) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
      )
    )
    const handleEdit = (index: number, row: User) => {
      console.log(index, row)
    }
    const handleDelete = (index: number, row: User) => {
      console.log(index, row)
    }

    const tableData: User[] = [
      {
        date: '2022-05-03',
        name: 'apple',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2022-05-02',
        name: 'watermelon',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2022-05-04',
        name: 'banana',
        address: 'No. 189, Grove St, Los Angeles'
      },
      {
        date: '2022-05-01',
        name: 'orange',
        address: 'No. 189, Grove St, Los Angeles'
      }
    ]

    return {
      search,
      tableData,
      handleEdit,
      handleDelete,
      filterTableData
    }
  }
})
</script>

<style scoped>
.table {
  width: 400px;
  margin-bottom: 250px;
}
</style>
