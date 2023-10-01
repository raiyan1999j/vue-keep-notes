<script>
    export default{
        props:['paintTxt'],
        emits:['contentArea'],
        data(){
            return{
                info:''
            }
        },
        methods:{
            areaContent(){
                this.$emit('contentArea',this.info)
            }
        },
        updated(){
            let height = this.$refs.textbox.scrollHeight;

            this.$refs.textbox.style.height = height + 'px';
            this.$refs.textbox.style.backgroundColor = this.paintTxt
        }
    }
</script>

<template>
    <textarea @change="areaContent" v-model="info" class="h-auto py-[23px] px-[10px] resize-none w-full font-mono capitalize font-semibold overflow-hidden" ref="textbox" >
        
    </textarea>
</template>