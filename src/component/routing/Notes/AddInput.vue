<script>
  import {PaintBrushIcon,ArchiveBoxArrowDownIcon,ChevronUpDownIcon,NoSymbolIcon} from '@heroicons/vue/24/outline';

  import ListOrText from './ListOrText.vue';

  export default{
    components:{PaintBrushIcon,ArchiveBoxArrowDownIcon,ChevronUpDownIcon,NoSymbolIcon,ListOrText},
    emits:['dataCollective'],
    data(){
      return{
        toggle:true,
        paint: false,
        checkbox:false,
        activeCheck:true,
        paintTxt:'',
        taskTxt:'',
        title:'',
        arrOfTodo:[]
      }
    },
    methods:{
      paintAction(value){
        this.paintTxt = value;
        return this.paintTxt;
      },
      areaContent(value){
        let obj={
          id:Number(Date.now()) ,
          task:value,
        }
        this.taskTxt = obj;
      },
      createTask(){
        let wrap = {
          color:this.paintTxt,
          title:this.title,
          pinned:false
        };
        let step1 = {...this.taskTxt,...wrap}

        this.arrOfTodo.push(step1);
        this.$emit('dataCollective',this.arrOfTodo,step1);
        this.title='';
        this.task='';
        this.paintTxt='';
        this.toggle = !this.toggle;
      }
    }
  }
</script>

<template>
  <div v-if="toggle" @click="toggle = !toggle">
    <div class="rounded-lg shadow-lg shadow-gray-400 border h-[46px] flex items-center">
      <h4 class="font-mono text-xl text-gray-400 pl-3">
        Take a note...
      </h4>
    </div>
  </div>

  <div v-else class="border rounded-lg shadow-lg shadow-gray-400" v-bind:style="{backgroundColor:paintTxt}">
    <div>
      <input type="text" placeholder="Title" class="w-full h-[46px] pl-[23px] rounded-md font-mono capitalize placeholder:pl-3" :style="{backgroundColor:paintTxt}" v-model="title"/>
    </div>
    <!-- textarea-start -->
    <ListOrText :txtCondition="activeCheck" :textPaint="paintTxt" :key="activeCheck?1:2" @contentArea="areaContent" />
    <!-- textarea-finish -->

    <div class="h-[46px] w-full border">
      <ul class="translate-y-[5px]">
        <li @click="paint = !paint" class="float-left h-[35px] w-[35px] ml-[18px] mr-[18px] border bg-gray-300 rounded-full flex items-center justify-center">
          <PaintBrushIcon class="w-[20px]"/>
          <ul v-show="paint" class="flex justify-between w-[300px] ml-[235px] mt-[100px]">
            <li class="h-[46px] w-[46px] border rounded-full flex justify-center items-center" @click="paintAction('#FFFFFF')">
              <NoSymbolIcon/>
            </li>

            <li class="h-[46px] w-[46px] border border-[#badc58] bg-[#badc58] rounded-full" @click="paintAction('#badc58')"></li>

            <li class="h-[46px] w-[46px] border border-[#ff7979] bg-[#ff7979] rounded-full" @click="paintAction('#ff7979')"></li>

            <li class="h-[46px] w-[46px] border border-[#f9ca24] bg-[#f9ca24] rounded-full" @click="paintAction('#f9ca24')"></li>

            <li class="h-[46px] w-[46px] border border-[#4834d4] bg-[#4834d4] rounded-full" @click="paintAction('#4834d4')"></li>

            <li class="h-[46px] w-[46px] border border-[#7ed6df] bg-[#7ed6df] rounded-full" @click="paintAction('#7ed6df')"></li>
            
            <li class="h-[46px] w-[46px] border border-[#535c68] bg-[#535c68] rounded-full" @click="paintAction('#535c68')"></li>
          </ul>
        </li> 
        <li class="float-left h-[35px] w-[35px] mr-[18px] border bg-gray-300 rounded-full flex items-center justify-center">
          <ArchiveBoxArrowDownIcon class="w-[20px]"/>
        </li>
        <li @click="checkbox = !checkbox" class="float-left h-[35px] w-[35px] mr-auto border bg-gray-300 rounded-full flex items-center justify-center">
          <ChevronUpDownIcon class="w-[20px]"/>

          <ul v-show="checkbox" class="w-[300px] flex flex-col justify-between mt-[100px] ml-[135px] bg-white border shadow-md shadow-gray-400 rounded-md  overflow-none">
            <li @click="activeCheck = !activeCheck" class="w-[150px] font-mono hover:bg-gray-500 hover:text-white hover:cursor-pointer py-3 px-3 rounded-md">
              {{ activeCheck?'Add Checkbox':'Default' }}
            </li>
          </ul>
        </li>
        <li class="float-left ml-[18px] border py-[5px] px-[15px] bg-gray-300 rounded-md flex items-center justify-center">
          <button @click="createTask">
            Create
          </button>
        </li>
        <li class="float-right  py-[5px] px-[15px] mr-[18px] border bg-gray-300 rounded-md flex items-center justify-center">
          <button class="font-mono" @click="toggle = !toggle">
            Close
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>