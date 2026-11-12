const app = Vue.createApp({
    data(){
        return{
        listOfRecords: []
        }
    },
    methods:{
        Get (){
            axios
            .get('https://pairprogrammingrecordcontroller-duchh6bkgpdkh8ff.swedencentral-01.azurewebsites.net/api/record'
                
            )
            .then(response =>{
                this.listOfRecords = response.data
                console.log(this.listOfRecords)
            })
        }

    }
})