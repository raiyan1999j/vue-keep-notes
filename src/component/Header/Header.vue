<script>
import Search from './SearchInput/Search.vue';
import {Bars3Icon,MagnifyingGlassIcon,ArrowPathIcon,RectangleGroupIcon,WrenchIcon} from '@heroicons/vue/24/solid';
export default{
    emits:['valueSearch'],
    components:{
        Bars3Icon,MagnifyingGlassIcon,ArrowPathIcon,RectangleGroupIcon,WrenchIcon,Search
    },
    methods:{
      searchValue(value){
        this.$emit('valueSearch',value)
      }
    }
}
</script>

<template>
    <div class="fixed top-0 h-[63px] w-[1354px] border border-r-0 border-l-0 border-t-0 border-b-gray-400 before:table before:content-'' after:table after:content-'' after:clear-both flex items-center">
    <div class="w-[270.8px] float-left block translate-y-[-5%]">
      <span class="w-[48px] float-left translate-y-[34%] ml-[12px]">
        <Bars3Icon class="h-[24px] w-[24px] text-gray-500"/>
      </span>
      <span class="float-left ml-[4px]">
        <img src="../Header/image/keep.png" alt="keep" class="h-[40px] w-[40px] object-cover"/>
      </span>
      <span class="float-left text-gray-500 font-medium text-2xl translate-y-[11%] ml-[8px]">
        Keep
      </span>
    </div>
    <div class="w-[1083.2px] float-left block">
      <Search @valueSearch="searchValue" />
      <div class="float-left ml-[108px]">
        <ul>
          <li class="float-left w-[46px] h-[46px] hover:border hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
            <ArrowPathIcon class="w-[25px] text-gray-500"/>
          </li>
          <li class="float-left w-[46px] h-[46px] hover:border hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
            <RectangleGroupIcon class="w-[25px] text-gray-500" />
          </li>
          <li class="float-left w-[46px] h-[46px] hover:border hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
            <WrenchIcon class="w-[25px] text-gray-500"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>