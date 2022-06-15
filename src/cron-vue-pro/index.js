import CronVueProComponent from './index.vue';

export let CronPro=CronVueProComponent;

const CronVuePro =  {
    install(Vue){
      Vue.component('CronVuePro', CronVueProComponent)
    }
}

export default CronVuePro