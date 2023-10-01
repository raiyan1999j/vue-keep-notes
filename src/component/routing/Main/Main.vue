<style>
.router-link-active,.router-link-exact-active{
  background-color:rgb(224, 224, 75);
}
</style>

<script>
import { LightBulbIcon,ArchiveBoxArrowDownIcon,TrashIcon } from '@heroicons/vue/24/outline';

export default{
    components:{LightBulbIcon,ArchiveBoxArrowDownIcon,TrashIcon},
    
}
</script>

<template>
    <div class="fixed top-[63px] h-full w-[280.5px]">
    <ul class="w-[278px]">
      <router-link to="/" class="rounded-r-full w-full h-[46px] flex items-center hover:bg-gray-200">
        <span class="ml-[12px]">
          <LightBulbIcon class="w-[25px]"/>
        </span>
        <p class="font-mono font-medium ml-[35px]">Notes</p>
      </router-link>
      <router-link to="/archive" class="rounded-r-full w-full h-[46px] flex items-center hover:bg-gray-200">
        <span class="ml-[12px]">
          <ArchiveBoxArrowDownIcon class="w-[25px]"/>
        </span>
        <p class="font-mono font-medium ml-[35px]">Archive</p>
      </router-link>
      <router-link to="/trash" class="rounded-r-full w-full h-[46px] flex items-center hover:bg-gray-200">
        <span class="ml-[12px]">
          <TrashIcon class="w-[25px]"/>
        </span>
        <p class="font-mono font-medium ml-[35px]">Trash</p>
      </router-link>
    </ul>
  </div>
</template>

