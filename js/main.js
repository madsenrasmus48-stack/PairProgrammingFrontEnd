const app = Vue.createApp({
    data(){
        listOfRecords: []
    },
    Methods:{
        Get(){
            axios.get('https://pairprogrammingrecordcontroller-duchh6bkgpdkh8ff.swedencentral-01.azurewebsites.net/api/record')
        }

    }
})