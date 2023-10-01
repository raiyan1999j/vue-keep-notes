<script>
    import {BookmarkIcon,PaintBrushIcon,NoSymbolIcon,TrashIcon,ArchiveBoxArrowDownIcon,XMarkIcon} from '@heroicons/vue/24/outline';

    export default{
        components:{BookmarkIcon,PaintBrushIcon,NoSymbolIcon,TrashIcon,ArchiveBoxArrowDownIcon,XMarkIcon},

        props:['color','unique','task','title','heightClient'],

        emits:['editColor','boxArchive','boxTrash','boxPinned','boxPinned','conditionEdit'],

        data(){
            return{
                header:this.title,
                message:this.task,
                paint:false,
                pinned:false,
            }
        },
        methods:{
            paintAction(value){
                let wrap={
                    color: value,
                    id: this.unique
                }
                this.$emit('editColor',wrap)
            },
            archiveBox(){
                this.$emit('boxArchive',this.unique)
            },
            trashBox(){
                this.$emit('boxTrash',this.unique)
            },
            pinnedBox(){
                this.$emit('boxPinned',this.unique)
            },
            editAction(){
                let wrap ={
                    title: this.header,
                    task: this.message,
                    id: this.unique
                }
                this.$emit('conditionEdit',wrap)
            },
        },
        mounted(){
            this.$refs.textAreaBox.style.backgroundColor = this.color;

            this.$refs.textAreaBox.style.height = this.heightClient / 2 - 50 + 'px';
        },
        updated(){
            let height = this.$refs.textAreaBox.scrollHeight;

            this.$refs.textAreaBox.style.height = height + 'px';

            this.$refs.textAreaBox.style.backgroundColor = this.color;
        }
    }
</script>

<template>
    <div class="absolute bg-black opacity-80 h-screen w-full top-[0%] left-0 flex justify-center items-center z-10">
    <div class="w-[520px] rounded-md absolute opacity-100" :style="{backgroundColor:color}">

<div class=" border-b border-t-0 border-r-0 border-l-0 px-[20px] py-[20px]">
        <input type="text" class="w-[90%] font-mono font-semibold uppercase bg-transparent focus:outline-0" v-model="header"/>
        <BookmarkIcon class="w-[25px] float-right hover:cursor-pointer hover:text-blue-500" @click="pinnedBox"/>
    
</div>
<div>
    <textarea class="font-mono font-medium px-[20px] py-[20px] h-auto w-full resize-none overflow-hidden" ref="textAreaBox" v-model="message"></textarea>
</div>

<div class="border border-t border-b-0 border-r-0 border-l-0 rounded-md h-[46px]">
    <ul class="translate-y-[5px]">
        <!-- color-list-start -->
        <li class="h-[35px] w-[35px] rounded-full bg-gray-300 float-left mx-[18px] flex justify-center items-center hover:bg-blue-400 hover:text-gray-300 hover:cursor-pointer hover:transition-all hover:ease-linear" @click="paint = !paint">
            <PaintBrushIcon class="w-[20px]"/>
            <ul v-show="paint" class="flex justify-between w-[300px] ml-[235px] mt-[100px]">
                <li class="h-[46px] w-[46px] border rounded-full flex justify-center items-center hover:border-[#0d0e0d00] hover:border-2 hover:transition-all hover:ease-linear" @click="paint = !paint">
                    <NoSymbolIcon/>
                </li>
                <li class="h-[46px] w-[46px] border border-[#badc58] bg-[#badc58] rounded-full hover:border-[#04050086] hover:border-2 hover:transition-all hover:ease-linear" @click="paintAction('#badc58')"></li>

                <li class="h-[46px] w-[46px] border border-[#ff7979] bg-[#ff7979] rounded-full hover:border-[#770202] hover:border-2 hover:transition-all hover:ease-linear" @click="paintAction('#ff7979')"></li>

                <li class="h-[46px] w-[46px] border border-[#f9ca24] bg-[#f9ca24] rounded-full hover:border-[#866b07] hover:border-2 hover:transition-all hover:ease-linear" @click="paintAction('#f9ca24')"></li>

                <li class="h-[46px] w-[46px] border border-[#4834d4] bg-[#4834d4] rounded-full hover:border-[#17087c] hover:border-2 hover:transition-all hover:ease-linear " @click="paintAction('#4834d4')"></li>

                <li class="h-[46px] w-[46px] border border-[#7ed6df] bg-[#7ed6df] rounded-full hover:border-[#026e7a] hover:border-2 hover:transition-all hover:ease-linear" @click="paintAction('#7ed6df')"></li>

                <li class="h-[46px] w-[46px] border border-[#535c68] bg-[#535c68] rounded-full hover:border-[#1e2227] hover:border-2 hover:transition-all hover:ease-linear" @click="paintAction('#535c68')"></li>
            </ul>
        </li>
        <!-- color-list-finish -->
        <!-- archive-star -->
        <li class="h-[35px] w-[35px] rounded-full bg-gray-300 float-left mr-[18px] flex justify-center items-center hover:bg-blue-400 hover:text-gray-300 hover:cursor-pointer hover:transition-all hover:ease-linear" @click="archiveBox">
            <ArchiveBoxArrowDownIcon class="w-[20px]"/>
        </li>
        <!-- archive-finish -->
        <!-- trash-start -->
        <li class="h-[35px] w-[35px] rounded-full bg-gray-300 float-left mr-[18px] flex justify-center items-center hover:bg-blue-400 hover:text-gray-300 hover:cursor-pointer hover:transition-all hover:ease-linear" @click="trashBox">
            <TrashIcon class="w-[20px]"/>
        </li>
        <!-- trash-finish -->
        <!-- editChange-start -->
        <li class="h-[35px] w-[35px] rounded-full float-right mr-[18px] flex justify-center items-center translate-x-[56px]   " @click="editAction" :style="{backgroundColor:color}">
            <XMarkIcon class="w-[20px] hover:text-white hover:cursor-pointer hover:transition-all hover:ease-linear"/>
        </li>
        <!-- editChange-finish -->
    </ul>
</div>
    </div>
    </div>
</template>