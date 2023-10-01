<script>
    import TaskBox from '../Reusable/TaskBox.vue';
    import EditModalBox from '../Reusable/EditModalBox.vue';
    import Methods from '../Reusable/Methods.vue';
    import Load from '../Loading/Load.vue';
    import Error from '../Error/Error.vue';

    export default{
        components:{TaskBox,EditModalBox,Load,Error},
        mixins:[Methods],
        inject:['search'],
        data(){
            return{
                info:[],
                clientHeight:'',
                editOpt:false,
                editArr:[],
                load:false,
                contentFail:false
            }
        },
        methods:{
            colorEdit(value){
                this.colorEditMethod(value)

                fetch('http://localhost:3000/archiveColor',{
                    method:'PUT',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(value)
                })
            },
            archiveBox(value){
                this.archiveBoxMethod(value)

                fetch('http://localhost:3000/archiveToNotes',{
                    method:'DELETE',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(this.archiveWrapDlt)
                })

                fetch('http://localhost:3000/notesPost',{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(this.archiveWrapPst)
                })
            },
            trashBox(value){
                this.trashBoxMethod(value)

                fetch('http://localhost:3000/archiveToTrash',{
                    method:'DELETE',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(this.trashWrapDlt)
                })

                fetch('http://localhost:3000/trashPost',{
                    method:'POST',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(this.trashWrapPst)
                })
            },
            pinnedBox(value){
                this.pinnedBoxMethod(value)

                fetch('http://localhost:3000/archivePin',{
                    method:'PUT',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(this.pinnedWrap)
                })
            },
            editEnable(value){
                this.editEnableMethod(value)
            },
            editCondition(value){
                this.editConditionMethod(value)

                fetch('http://localhost:3000/archiveEdit',{
                    method:'PUT',
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(value)
                })
            },
            loadData(){
                fetch('http://localhost:3000/archiveGet',{
                method:'GET',
                headers:{'content-type':'application/json'}
            }).then((res)=>{res.json().then((data)=>{this.info = data})})
            .catch((error)=>{
                this.contentFail=true;
            })
            }
        },
        mounted(){
            setTimeout(()=>{
                this.loadData();
                this.load=true
            },500)
        },
        computed:{
            filterItems(){
                return this.info.filter((value)=>{
                    return value.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                })
            }
        }
    }
</script>

<template>
        <div class="w-[1085px] ml-[281px] translate-y-[63px] px-[34px]">
            <div v-show="contentFail">
            <Error/>
            </div>
            <div class="w-full mt-[50px] h-full columns-4 gap-3 " ref="taskbox">
            <div v-if="load">
            <TaskBox 
            v-for="data in filterItems"
            v-show="data.pinned"
            :color="data.color" 
            :key="data.id" 
            :unique="data.id" 
            :task="data.task" 
            :title="data.title" 
            @editColor="colorEdit" 
            @boxArchive="archiveBox"
            @boxTrash="trashBox"
            @boxPinned="pinnedBox"
            @enableEdit="editEnable"
             />
            </div>
            <div v-else>
                <Load/>
            </div>
        </div>
        <!-- pinned-finish -->
        <!-- othersTodo-start -->
        <div class="w-full mt-[50px] h-full columns-4 gap-3" ref="taskbox">
            <TaskBox 
            v-for="data in info"
            v-show="!data.pinned"
            :color="data.color" 
            :key="data.id" 
            :unique="data.id" 
            :task="data.task" 
            :title="data.title"
            @editColor="colorEdit" @boxArchive="archiveBox"
            @boxTrash="trashBox"
            @boxPinned="pinnedBox"
            @enableEdit="editEnable"
             />
        </div>
        <!-- othersTodo-finish -->
        <!-- editTodo-start -->
        <div v-show="editOpt">
            <EditModalBox 
            v-for="data in editArr"
            :key="data.id"
            :color="data.color"
            :unique="data.id"
            :task="data.task"
            :title="data.title"
            :heightClient="clientHeight"
            @editColor="colorEdit"
            @boxArchive="archiveBox"
            @boxTrash="trashBox"
            @boxPinned="pinnedBox"
            @conditionEdit="editCondition"
            />
        </div>
        <!-- editTodo-finish -->
        </div>
</template>