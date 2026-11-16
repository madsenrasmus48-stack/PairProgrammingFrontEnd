app.component('login', {
    template:
    /*html*/
    `<div class="login">
        <h2>Login</h2>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>`,

    data() {
        return {
            // Your data here
        }
    },
    methods: {
        // Your methods here
    }
})
