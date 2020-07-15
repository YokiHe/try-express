<template>
<el-form @submit.native.prevent="saveArticle" :model="article" :rules="rules" label-width="100px" class="demo-ruleForm">
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>


  <el-form-item label="文章内容">
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存</el-button>
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
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          body: [
            { required: true, message: '请填写文章内容', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      // console.log(this.$route.params.id)
        this.$http.get(`/article/${this.$route.params.id}`).then(res=>{
        this.article = res.data
      })
    },
    methods: {
      saveArticle() {
        //console.log(this.article)
        this.$http.put(`/article/${this.$route.params.id}`,this.article).then(res =>{
          this.$message({
            message:"文章保存成功",
            type:"success"
          });

          this.$router.push('/article/index')
        })
        
      }
    }
  }
</script>