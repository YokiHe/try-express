<template>
<el-form @submit.native.prevent="saveArticle" :model="article" :rules="rules" label-width="100px" class="demo-ruleForm">
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>


  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button >重置</el-button>
  </el-form-item>
</el-form>
</template>


<script>
  export default {
    data() {
      return {
        article: {},
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      saveArticle() {
        //console.log(this.article)
        this.$http.post('/article',this.article).then(res =>{
          this.$message({
            message:"文章创建成功",
            type:"success"
          });
          this.$router.push('/article/index')
        })
        
      }
    }
  }
</script>