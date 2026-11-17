const app = Vue.createApp({
    data(){
        return{
        listOfRecords: [],
        filterTitle: '',
        filterArtist: '',
        filterDuration: '',
        filterPublicationYear: '',
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
        },
        GetWithFilter(){
            axios
            //.get('https://pairprogrammingrecordcontroller-duchh6bkgpdkh8ff.swedencentral-01.azurewebsites.net/api/record/?title=' + this.filterTitle + '&artist=' + this.filterArtist + '&duration=' + this.filterDuration + '&publicationYear=' + this.filterPublicationYear)
            .get('http://localhost:5296/api/Record?title=' + this.filterTitle + '&artist=' + this.filterArtist + '&duration=' + this.filterDuration + '&publicationYear=' + this.filterPublicationYear)
            .then(response => {
                this.listOfRecords = response.data
                console.log(this.listOfRecords)
                console.log(response.status)
            })
        }
    }
})