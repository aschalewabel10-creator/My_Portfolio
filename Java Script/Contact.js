function Check(){
    var namePattern = /^[A-Za-z]+$/;
    var agePattern = /^(1?[0-9]{1,2}|200)$/; // 1–200
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^.{6,}$/;  // Minimum 6 characters

    // ===== First Name =====
    if(document.formname.Fname.value==""){
        document.getElementById('fn').innerHTML="Please provide First Name";
        document.formname.Fname.focus();
        return false;
    }
    if(!namePattern.test(document.formname.Fname.value)){
        document.getElementById('fn').innerHTML="Please enter valid Name";
        document.formname.Fname.focus();
        return false;
    }

    // ===== Last Name =====
    if(document.formname.Lname.value==""){
        document.getElementById('ln').innerHTML="Please provide Last Name";
        document.formname.Lname.focus();
        return false;
    }
    if(!namePattern.test(document.formname.Lname.value)){
        document.getElementById('ln').innerHTML="Please enter valid Name";
        document.formname.Lname.focus();
        return false;
    }


    // ===== Password =====
    if(document.formname.password.value==""){
        document.getElementById('pw').innerHTML="Please provide Password";
        document.formname.password.focus();
        return false;
    }
    if(!passwordPattern.test(document.formname.password.value)){
        document.getElementById('pw').innerHTML="Password must be at least 6 characters";
        document.formname.password.focus();
        return false;
    }
    if(document.formname.Email.value==""){
        document.getElementById('eml').innerHTML="Please provide Password";
        document.formname.Email.focus();
        return false;
    }
    if(!passwordPattern.test(document.formname.Email.value)){
        document.getElementById('eml').innerHTML="Password must be at least 6 characters";
        document.formname.Email.focus();
        return false;
    }

    return true;
}
