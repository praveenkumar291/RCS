function register(){
    event.preventDefault();
    var username=getValueById("username");
    var password=getValueById("password");
    var emailId=getValueById("emailId");
    var user= {
        username:username,
        password:password,
        emailId:emailId,
     }
     console.log('user', user);
    }
function getValueById(id){
    return document.getElementById(id).value;

}