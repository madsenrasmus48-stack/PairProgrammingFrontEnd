app.component('deleterecord', {
    props:{
        recordid:{
        }
    },
    template:
    /*html*/`
        <p>hej</p>
        <button v-on:click="Delete" class="btn btn-primary">Delete Record</button>
    `,
    methods: {
       Delete(){
            axios
            .delete('http://localhost:5296/api/Record/'+ this.recordid)
            //.post('https://pairprogrammingrecordcontroller-duchh6bkgpdkh8ff.swedencentral-01.azurewebsites.net/api/auth',    
             
        }
    }
})