Vue.component('input-number',{
    template:'<div></div>',
    props:{
        min:{
            type:Number,
            default:Infinity
        },
        max:{
            type:Number,
            default:-Infinity
        },
        value:{
            type:Number,
            default:0
        },
    },
    data() {
        return {
            currentValue:this.value
        }
    },
    watch: {
        currentValue(val){
            this.$emit('input', val);
            this.$emit('on-chang',val);
        },
        value(val){
            this.updateValue(val);
        }
    },
    methods: {
        updateValue(val)
        {
            if(val>=this.max)
            {
                val=this.max;
            }
            if(val<=this.min)
            {
                val=this.min;
            }
            this.currentValue=val;
        }
    },  
})