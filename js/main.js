const app = Vue.createApp({
    data(){
        listOfRecords: []
    },
    methods:{
    Get(){
        axios.get("http://localhost:5296/")
    }        

    }
})