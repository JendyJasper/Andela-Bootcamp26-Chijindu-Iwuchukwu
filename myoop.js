class Social {
    constructor (username, password){
        this.username = username;
        this.password = password;

    }
    login(){
        
        if(this.password.length < 8){
            return "Password should be at least eight characters long"
        }
        else{
            return "Welcome back" + " " + this.username
        }
    }

    signUp(name){
        this.name = name;
        return `${this.name}, your account has been successfuly created. 
        Password is ${this.password}, username is ${this.username}.
        Write them down and keep them in a self place`;
    }
}
//Tests
//const fb = new Social("jendy", "wannaagonna")
//console.log(fb.signUp("Jendy Jasper"))
//console.log(fb.login());

module.exports.Social = Social;