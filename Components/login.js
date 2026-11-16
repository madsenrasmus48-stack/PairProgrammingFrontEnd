app.component('login', {
    template:
    /*html*/
    `
    <div V-if="loginStatus">Brugernavn: {{currentUser}}</div>
    <div class="login">
        <h2>Login</h2>
        <div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password">
            </div>
            <button v-on:click="login" class="btn btn-primary" id="login-button">Login</button>
        </div>
    </div>`,

    data() {
        return {
            username: '',
            password: '',
            loginStatus: false,
            currentUser: null
        }
    },
    methods: {
        login() {
            axios
            .post('http://localhost:5296/api/Auth/login',{
            //.post('https://pairprogrammingrecordcontroller-duchh6bkgpdkh8ff.swedencentral-01.azurewebsites.net/api/auth', {
                username: this.username,
                password: this.password
            })
            .then(response => {
                sessionStorage.setItem('token', response.data.token)
                this.username = ''
                this.password = ''

                if (response.status === 200) {
                    this.loginStatus = true
                    this.currentUser = response.data.username
                }
                
            })
        }
        
    }
})
