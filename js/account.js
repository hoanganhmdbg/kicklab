document.getElementById('new').addEventListener('click', () => {
    document.getElementById('form-login').style.display = 'none';
    document.getElementById('form-signup').style.display = 'block';
    document.getElementsByClassName('form_contain')[0].style.height = '600px';
});
document.getElementById('back').addEventListener("click", () => {
    document.getElementById('form-login').style.display = 'block';
    document.getElementById('form-signup').style.display = 'none';
    document.getElementsByClassName('form_contain')[0].style.height = '500px';
});
let user = document.getElementById('form-id-user');
let pword = document.getElementById('form-id-password');
let cfPword = document.getElementById('fomr-is-comfirm-password');
async function checkAccount() {
    const conn = await fetch('https://sheetdb.io/api/v1/q2i7j5iuajbf9');
    const dataJson = await conn.json();
    let check = false;
    dataJson.map(item => {
        if (item.user == document.getElementById("form-id-login-username").value && item.password == document.getElementById("form-id-login-password").value) {
            localStorage.setItem("shoppingCart","[]");
           window.location.pathname = 'index.html';          
           localStorage.setItem("user",document.getElementById("form-id-login-username").value);
           document.getElementById('login').disabled = false;
           check =  true;
        }
    });
    if(!check){
        document.getElementById('wrong').innerHTML = 'user or password incorrect';
        document.getElementById('login').disabled = false;
    }
    
}
document.getElementById('form-login').addEventListener("submit",(e) => {
    document.getElementById('login').disabled = true;
    e.preventDefault();
    
    checkAccount();
});
function postAPI(fullname, user, password) {
    axios.post('https://sheetdb.io/api/v1/q2i7j5iuajbf9',
        {
            "data": {
                "fullname": fullname,
                "user": user,
                "password": password
            }
        }).then(response => {
            console.log(response.data);
        });
}
async function getAPI() {
    const conn = await fetch('https://sheetdb.io/api/v1/q2i7j5iuajbf9');
    const dataJson = await conn.json();
    let check = false;
    dataJson.map(item => {
        if (item.user == document.getElementById("form-id-login-username").value && item.password == document.getElementById("form-id-login-password").value) {
          // window.location.href = 'http://www.google.com';
           return true;
        }
    });
    return false;
    
}
document.getElementById('form-signup').addEventListener("submit", (e) => {
    let fname = document.getElementById('fomr-fullname');
    let user = document.getElementById('form-id-user');
    let pword = document.getElementById('form-id-password');
    let cfPword = document.getElementById('form-is-comfirm-password');
    e.preventDefault();
    if(getAPI()){
        document.getElementById('noti-user').innerHTML = 'user already exist';
    }else{
        if(pword != cfPword){
            document.getElementById('noti-confirm').innerHTML= 'password not match';
        }else{
            postAPI(fname.value , username.value , password.value);
            document.getElementById('form-login').style.display = 'block';
            document.getElementById('form-signup').style.display = 'none';
        }
    }
    
});



