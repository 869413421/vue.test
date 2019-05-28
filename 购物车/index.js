var vm=new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'test1',
                price:100,
                count:1
            },
            {
                id:2,
                name:'test2',
                price:100.112312,
                count:2
            },
            {
                id:3,
                name:'test3',
                price:100.320,
                count:1
            },
            {
                id:4,
                name:'test4',
                price:100.1212,
                count:4
            },
        ]
    },
    methods:{
        reduce(index)
        {
             console.log(this.list);
             if(this.list[index].count===1) return;
             this.list[index].count--;
        },
        add(index){
             this.list[index].count++;
        },
        remove(index){
             if(this.list[index])
             {
                 this.list.splice(index,1);
             }
        }
    },
    computed: {
        totalPrice(){
            var total=0;
            for(var i=0;i<this.list.length;i++)
            {
                var item=this.list[i];
                total+=item.price*item.count;
            }
            return total.toString();
        }
    },
 });