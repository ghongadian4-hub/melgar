// LOGIN SYSTEM
function login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username==="admin" && password==="1234"){
        showPopup("Login Successful!", true);
    }else{
        showPopup("Incorrect Username or Password!", false);
    }
}

function logout(){
    document.getElementById("portfolioPage").style.display="none";
    document.getElementById("loginPage").style.display="block";
}

function showPopup(message,success){
    document.getElementById("popupMessage").textContent=message;
    document.getElementById("popupBox").style.display="block";
    document.getElementById("popupBox").dataset.success=success;
}

function closePopup(){
    let success=document.getElementById("popupBox").dataset.success;
    document.getElementById("popupBox").style.display="none";

    if(success==="true"){
        document.getElementById("loginPage").style.display="none";
        document.getElementById("portfolioPage").style.display="block";
    }
}

// USER TABLE SYSTEM
let users=[];

function checker(){
    let firstName=document.getElementById("firstName").value;
    let middleName=document.getElementById("middleName").value;
    let lastName=document.getElementById("lastName").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    let result=document.getElementById("result");

    if(!firstName || !lastName || !email || !age){
        result.textContent="Blank field detected";
        result.style.color="red";
        return;
    }

    if(age<18){
        result.textContent="You are not old enough";
        result.style.color="red";
        return;
    }

    if(!email.endsWith("@gmail.com")){
        result.textContent="Email must be @gmail.com";
        result.style.color="red";
        return;
    }

    users.push({firstName,middleName,lastName,email,age});

    let tbody=document.getElementById("userTableBody");
    tbody.innerHTML="";

    users.forEach(user=>{
        let row=`
        <tr>
            <td>${user.firstName}</td>
            <td>${user.middleName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
        </tr>`;
        tbody.innerHTML+=row;
    });

    result.textContent="User added successfully!";
    result.style.color="green";

    document.getElementById("firstName").value="";
    document.getElementById("middleName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("email").value="";
    document.getElementById("age").value="";
}
