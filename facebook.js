const Social = require('./myoop').Social;
class Facebook extends Social {
    constructor (newPost, delPost, username, password){
        super(username, password);
        this.newPost = newPost;
        this.delPost = delPost;
        this.username = username;
        this.password = password;
        
    }
    
    addPost(newPost){
        return `Your new post reads: ${this.newPost}`;
    }
    remPost(delPost){
        return `You deleted the post that reads: ${this.delPost}`
    }

}

//const jendy = new Facebook("how are you", "i am not feeling fine", "Jendy jasper", "iwannagonna");
//console.log(jendy.addPost());
//console.log(jendy.remPost());
//console.log(jendy.signUp('me'));
//console.log(jendy.login())