function clean(){
    let flag1=document.getElementById("namebox").value!="";
    let flag3=document.getElementById("message").value!="";
    let email=document.getElementById("emailbox").value;
    let flag2=false;
    let flag4=false;
    console.log(email);
    for (let i = 0; i < email.length; i++){
        if (email[i]==="@")
        {
            flag2=true;
            break;
        }
    }
    checkboxes=document.querySelectorAll('input[type="checkbox"]');
    console.log(checkboxes);
    for (let i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked===true)
        {
            flag4=true;
            break;
        }
    }
    console.log(`${flag1}${flag2}${flag3}${flag4}`);
    if (flag1 && flag2 && flag3 && flag4){
        document.getElementById("namebox").value="";
        document.getElementById("emailbox").value="";
        document.getElementById("message").value="";
        document.querySelectorAll('input[type="checkbox"]').forEach(ch => ch.checked = false);
    }
    else{
        if(!flag1){
            alert("Namebox is empty");
        }
        if(!flag2){
            alert("Emailbox is incorrect");
        }
        if(!flag3){
            alert("Messagebox is empty");
        }
        if(!flag4){
            alert("Checkbox is empty");
        }
    }
}