<script>
    import {BookmarkIcon,PaintBrushIcon,NoSymbolIcon,TrashIcon,ArchiveBoxArrowDownIcon} from '@heroicons/vue/24/outline';

    export default{
        components:{BookmarkIcon,PaintBrushIcon,NoSymbolIcon,TrashIcon,ArchiveBoxArrowDownIcon},

        props:['color','task','title','unique'],
        emits:['editColor','boxArchive','boxTrash','boxPinned'],
        data(){
            return{
                paint:false
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
                let wrap={
                    status:true,
                    id: this.unique
                }
                this.$emit('boxPinned',wrap)
            }
        }
    }
</script>

<template>
    <taskBox :color="color" :task="task" :title="title" :unique="unique" 
    @actionPaint="paintAction"
    @boxArchive="archiveBox"
    @boxTrash="trashBox"
    @boxPinned="pinnedBox"
    />
</template>