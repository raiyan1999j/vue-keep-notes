<script>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

export default{
    emits:['valueSearch'],
    components:{MagnifyingGlassIcon},
    data(){
        return{
            title:''
        }
    },
    methods:{
        search(){
            this.$emit('valueSearch',this.title)
        }
    }
}
</script>

<template>
    <div class="relative h-[46px] w-[722px] rounded-md shadow-sm float-left">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <MagnifyingGlassIcon class="h-5 w-5 text-gray-500"/>
    </div>
    <!-- searchBox-start -->
    <input type="text" name="email" id="email" class="block w-full h-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-300" placeholder="Search By Title" @input="search" v-model="title"/>
    <!-- searchBox-finish -->
  </div>
</template>