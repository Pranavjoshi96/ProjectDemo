
$(document).ready(()=>{
    $("#btn-register").click(()=>{
        alert("hello inside ajax call");
        var fName = $("#firstName").val();
        var lName = $("#LastName").val();
        var uName = $("#userName").val();
        var phoneNo = $("#phoneNo").val();
        var email = $("#email").val();
        var password=$("#password").val();
        var flag=false;
        var userExists=true;
        userExists=validate();
    if(userExists){
        $.ajax({
            url:"http://localhost:3000/users",
            type:"GET",
            success:function(result){
                jQuery.each(result,function(index,value){

                    var email=result[index].email;
                    var phoneNo=result[index].phoneNo;
                      if(!flag){
                         if(email===email ||phoneNO===phoneNo){
                             alert("User Already Exists.");
                             flag = true;
                         }
                      }
            });
            if(!flag){
                alert("Inside if block");
                $.ajax({
                    url:"http://localhost:3000/users",
                    type:"POST",
                    data:{
                        "id":null,
                        "fName":fName,
                        "lName":lName,
                        "uName":uName,
                        "phoneNo":phoneNo,
                        "email":email,
                        "password":password
                    },
                    success:function(result){
                        alert("data posted successfully!!!!")
                    },
                    error:(result)=>{
                        alert("Error_404");
                    }

                });
                alert("Hello inside Post");
             }
            },
            error:function(result){
                alert("Error_404");
            },
        });
    }
    });
});

function validation(){
var fName = document.getElementById('firstName').value;
var lName = document.getElementById('lastName').value;
var uName = document.getElementById('userName').value;
var phone = document.getElementById('phoneNo').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var cPassword = document.getElementById('cPassword').value;

    if(fName=="" || fName == null)
    {
        document.getElementById('firstName_error').innerHTML = "**Please Enter the First Name";
        return false;
    }
    if((fName.length <=2) || (fName.length>=20))
    {
        document.getElementById('firstName_error').innerHTML = "**Please Enter the First Name between 2 and 20 character";
        return false;
    }
    if(!isNaN(fName))
    {
        document.getElementById('firstName_error').innerHTML = "**Please Do not enter the number ";
        return false;
    }

    if(lName=="" || lName == null)
    {
        document.getElementById('lastName_error').innerHTML = "**Please Enter the Last Name";
        return false;
    }
    if((lName.length <=2) || (lName.length>=20))
    {
        document.getElementById('lastName_error').innerHTML = "**Please Enter the Last Name between 2 and 20 character";
        return false;
    }
    if(!isNaN(lName))
    {
        document.getElementById('lastName_error').innerHTML = "**Please Do not enter the number ";
        return false;
    }
    if(uName=="" || uName == null)
    {
        document.getElementById('userName_error').innerHTML = "**Please Enter the user Name";
        return false;
    }
    if(phone=="")
    {
        document.getElementById('phoneNO_error').innerHTML = "**Please Enter the Mobile No";
        return false;
    }
    if(isNaN(phone))
    {
        document.getElementById('phoneNO_error').innerHTML = "**Please Enter Digits Only";
        return false;
    }
    if((phone.length!=10)){
        document.getElementById('phoneNO_error').innerHTML = "**Please Enter 10 Digit Mobile NO";
        return false;
    }
    if(email=="" || email == null)
    {
        document.getElementById('email_error').innerHTML = "**Please Enter the email";
        return false;
    }
     if(email.indexOf('@')<=0){
        document.getElementById('email_error').innerHTML = "**Please enter valid email";
        return false;
     }
     if((email.charAt(email.length-4)!= '.') && (email.charAt(email.length-3)!= '.'))
     {
        document.getElementById('email_error').innerHTML = "**Please enter valid email";
        return false;
     }
    if(password=="" || password == null)
    {
        document.getElementById('password_error').innerHTML = "**Please Enter the Password";
        return false;
    }
    if((password.length <=8) || (password.length>=20))
    {
        document.getElementById('password_error').innerHTML = "**Please Enter the the password between 8 and 20 character";
        return false;
    }
    if(cPassword=="" || cPassword == null)
    {
        document.getElementById('cPassword_error').innerHTML = "**Re-Enter the password ";
        return false;
    }
    if(password != cPassword){
        document.getElementById('cPassword_error').innerHTML = "**conform password not match ";
        return false;
    }
    else return true;

}

