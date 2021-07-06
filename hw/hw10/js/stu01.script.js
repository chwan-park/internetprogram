id=prompt('ID를 입력해주세요!');
if(id=='std01'){
    password=prompt('PASSWORD를 입력해주세요!');
    if(password==='1111'){
        location.href="login.html";
    }   
    else {
        location.href="error.html";
        }
    }

else if(id=='std02'){
    password=prompt('PASSWORD를 입력해주세요!');
    if(password==='2222'){
        location.href="login.html";
    }   
    else {
        location.href="error.html";
        }
    }

else if(id=='std03'){
    password=prompt('PASSWORD를 입력해주세요!');
    if(password==='3333'){
        location.href="login.html";
    }   
    else {
        location.href="error.html";
        }
    }

else {
    location.href="error.html";
    }