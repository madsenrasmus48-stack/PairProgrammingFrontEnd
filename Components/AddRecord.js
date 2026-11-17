app.component('addrecord', {
    template:
    /*html*/`
    <div class="filter-section">
        <div class="row g-3">
            <div class="col-md-3">
                <input type="text" class="form-control" id="createTitle" placeholder="Enter title" v-model="createTitle">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="createArtist" placeholder="Enter artist" v-model="createArtist">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="createDuration" placeholder="Enter duration" v-model="createDuration">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" id="createPublicationYear" placeholder="Enter publication year" v-model="createPublicationYear">
            </div>
            <button v-on:click="Create" class="btn btn-primary" id="create-button">Create Record</button>
        </div>
    </div>`,

    data(){
        return{
            createTitle:'',
            createArtist:'',
            createDuration:0,
            createPublicationYear:0
        }
    },
    methods: {
        Create(){
            axios
            .post('http://localhost:5296/api/Record',{
            //.post('https://pairprogrammingrecordcontroller-duchh6bkgpdkh8ff.swedencentral-01.azurewebsites.net/api/auth', {
                title: this.createTitle,
                artist: this.createArtist,
                duration: this.createDuration,
                publicationYear: this.createPublicationYear    
            })
            .then(response => {
                console.log(response.status)
                console.log(response.data)
                this.$emit('new-record')
            }
            )
        }
    }
})