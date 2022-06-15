# cron-vue-pro

## Project setup
```
npm i vue-cron
```
##示例
```
// 全局引入
import CronVuePro from './cron-vue-pro'
Vue.use(CronVuePro);


<template>
 <div class="cron">
    <h1>vue-cron</h1>
    <el-button @click='showCronDialog' type="primary">click me</el-button>
    <el-input v-model="cron" placeholder="请输入定时策略"></el-input>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="780px">
      <CronVuePro @change="changeCron" @close="dialogVisible=false" i18n="cn"></CronVuePro>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      cronPopover:false,
      cron:'',
      dialogVisible: false
    }
  },
  methods: {
    changeCron(val){
      this.cron=val
    },
    showCronDialog () {
      this.dialogVisible = true
    }
  }
}
</script>

```
  

##参数




