<template>
 <div class="cron">
    <h1>vue-cron</h1>
    <el-button @click='showCronDialog' type="primary">click me</el-button>
    <el-input v-model="cron" placeholder="请输入定时策略"></el-input>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="780px">
      <!-- <cron @change="changeCron" @close="cronPopover=false" i18n="cn"></cron> -->
      <CronTest @change="changeCron" @close="dialogVisible=false" i18n="cn"></CronTest>
      <!-- <CronPro @change="changeCron" @close="dialogVisible=false" i18n="cn"></CronPro> -->
      <!-- <CronVuePro @change="changeCron" @close="dialogVisible=false" i18n="cn"></CronVuePro> -->
    </el-dialog>
  </div>
</template>

<script>
// import {cron} from 'vue-cron';

// import {CronPro} from 'CronVuePro'
import CronTest from '@/components/CronTest.vue'

export default {
  name: 'Home',
  data () {
    return {
      cronPopover:false,
      cron:'',
      dialogVisible: false
    }
  },
  components: {
    // cron,
    CronTest,
    // CronPro
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
