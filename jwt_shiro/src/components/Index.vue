<template>
  <div>
    主页面
    {{user_info}}
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://127.0.0.1:8088/upload"
      accept=".xls,.xlsx"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <el-button style="width: 140px;" @click="downloadFile">excel模板下载</el-button>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        user_info: {},
        fileList: []
      }
    },
    created() {
      this.user_info = this.$route.params.user_info
      // console.log(this.$route.params.user_info);
    },
    methods: {
      downloadFile(){
        const _this=this;
        this.$axios({
          method: 'post',
          url: 'user/downland',
          responseType:"blob"
        }).then(function (res) {
          console.log(res)
          const url = window.URL.createObjectURL(new Blob([res.data]))
          const link = document.createElement('a')
          console.log(name)
          link.href = url
          link.setAttribute('download', "用户表"+_this.getNowFormatDate()+".xlsx")
          document.body.appendChild(link)
          link.click()
        })
      },
      uploadSuccess(response, file, fileList) {
        if (response.code === 200)
          this.$message.success("上传成功")
        else
          this.$message.error(response.msg)
      },
      uploadError() {
        this.$message.error("上传失败")
      },
      submitUpload() {
        this.$refs.upload.submit()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },

    }
  }
</script>

<style scoped>

</style>
