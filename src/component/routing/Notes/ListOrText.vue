<script>
    import ListTodo from './ListTodo.vue';
    import Textarea from './Textarea.vue';

   export default{
        props:['txtCondition','textPaint'],
        emits:['contentArea'],
        components:{ListTodo,Textarea},
        data(){
            return{
                text:'',
                condition:this.txtCondition
            }
        },
        methods:{
            areaContent(value){
                this.$emit('contentArea',value)
            }
        },
        computed:{
            active(){
                if(this.condition){
                    return 'Textarea'
                }else{
                    return 'ListTodo'
                }
            }
        }
    }
</script>
<template>
    <KeepAlive>
        <component :is="active" @contentArea="areaContent" :paintTxt="textPaint"></component>
    </KeepAlive>
</template>