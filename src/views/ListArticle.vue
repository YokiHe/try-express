<template>
  <div class="home">

      <el-table :data="articles">
        <el-table-column prop="_id" label="ID" width="160">
        </el-table-column>
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="body" label="内容">
        </el-table-column>
        <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="edit(scope.row._id)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="del(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
      </el-table>

  </div>
</template>

<script>
  export default {
    
    data() {
      return {
        articles:[]
      }
    },
    mounted(){
      this.fetch()
    },
    methods: {
      fetch(){
      this.$http.get('article').then(res =>{
        this.articles = res.data
      })
    },
      edit(id) {
        this.$router.push(`/article/${id}/edit`)
      },
      del(id) {
        this.$http.delete(`article/${id}`).then(res => {
          this.$message({
            message:"文章删除成功",
            type:"success"
          });
          this.fetch()
        })
      }
    }
  };
</script>