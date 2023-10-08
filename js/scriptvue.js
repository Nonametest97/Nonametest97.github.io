const { createApp, computed, beforeMount, unmounted, binding } = Vue

const app = createApp({
    data() {
        return {
            config : configData,
            // register common used function
            common : commonEvent,
            data: products,
            pId : -1,
            selectedProduct: null,
            renderKey: 0,
        }
    },
    provide(){
        return {
            currency : computed(() => this.config.exchange.selected) ,
            pId : computed(() => -1)
        }
    },
    mounted() {
        let id = this.common.getRequestParam("id");
        for(json of this.data){
            if(id == json.id){
                this.onViewProduct(json);
                return;
            }
        }

        if(id != null ){
            alert("ID not found")
        }
    },
    computed:{
    },
    methods:{
        onEventExchange(option){
            this.config.exchange.selected = option;
        },
        onViewProduct(product){
            $('#productView').modal('show')
            this.selectedProduct = product;
            this.renderKey++;
        }

    }
})



