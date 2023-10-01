<script>
import Header from './component/Header/Header.vue';
import Main from './component/routing/Main/Main.vue';
import {computed} from 'vue';
export default{
  components:{Header,Main},
  data(){
    return{
      search:''
    }
  },
  methods:{
    searchValue(value){
      this.search = value
    }
  },
  provide(){
    return{
      search: computed(()=>this.search)
    }
  }
}
</script>

<template>
  <!-- header-start -->
  <Header @valueSearch="searchValue" />
  <!-- header-finish -->
  <!-- routing-start -->
  <Main/>
  <!-- routing-finish -->
  <!-- routingPage-start -->
  <RouterView></RouterView>
  <!-- routingPage-finish -->
</template>