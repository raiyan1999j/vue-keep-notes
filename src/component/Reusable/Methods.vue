<script>
    export default{
        data(){
            return{
                archiveWrapPst:'',
                archiveWrapDlt:'',
                pinnedWrap:'',
                trashWrapPst:'',
                trashWrapDlt:''
            }
        },
        methods:{
            collectiveDataMethod(value){
                this.info = value;
            },
            colorEditMethod(value){
                let indexNumber = this.info.findIndex(val=>{return val.id === value.id});

                this.info[indexNumber].color = value.color
            },
            archiveBoxMethod(value){
                let removeItem = this.info.filter(val=>{
                    return val.id !== value
                })
                let indexNumber = this.info.findIndex(val=>{
                    return val.id === value
                })
                let serverWrap={
                    obj:this.info[indexNumber]
                }
                let wrapObj={
                    obj:value
                }

                this.archiveWrapPst = serverWrap;
                this.archiveWrapDlt= wrapObj;

                // this.archiveArr.push(this.info[indexNumber]);

                this.info = removeItem
            },
            trashBoxMethod(value){
                let removeItem = this.info.filter(val=>{
                    return val.id !== value
                })
                let indexNumber = this.info.findIndex(val=>{
                    return val.id === value
                })

                let wrapObj = {
                    obj:value
                }

                let serverWrap={
                    obj:this.info[indexNumber]
                }

                this.trashWrapDlt= wrapObj;
                this.trashWrapPst= serverWrap;

                this.info = removeItem;
            },
            pinnedBoxMethod(value){
                let indexNumber = this.info.findIndex(val=>{
                    return val.id === value
                })

                this.info[indexNumber].pinned = !this.info[indexNumber].pinned

                let serverWrap = {
                    id: value,
                    pinned: !this.info[indexNumber].pinned
                }
                
                this.pinnedWrap = serverWrap;
            },
            editEnableMethod(value){
                let indexNumber = this.info.findIndex(val=>{
                    return val.id === value
                })

                this.editArr.push(this.info[indexNumber])

                this.editOpt = !this.editOpt

                this.clientHeight = this.$refs.taskbox.childNodes[1].clientHeight;
            },
            editConditionMethod(value){
                let indexNumber = this.info.findIndex(val=>{
                    return val.id === value.id
                })

                let removeItem = this.editArr.filter(val=>{
                    return val.id !== value.id
                })

                this.info[indexNumber].title= value.title;
                this.info[indexNumber].task = value.task

                this.editArr = removeItem

                this.editOpt = !this.editOpt
            }
        }
    }
</script>