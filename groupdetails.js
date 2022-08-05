document.addEventListener('DOMContentLoaded',function(){

    //getting the already stored value from the create group
    let Groupname=localStorage.getItem('Groupname')?localStorage.getItem('Groupname'):"";
    let Groupdescription=localStorage.getItem('Groupdescription')?localStorage.getItem('Groupdescription'):"";
    document.querySelector('h3').innerHTML= Groupname;
    document.querySelector('h6').innerHTML= Groupdescription;
    // appending the particular group members    
    const li=document.createElement('li')
    li.innerHTML='satya';
    document.querySelector('#list').append(li)

    //updating the details of the particular group name and description.
    document.querySelector('#sc').disabled=true;
    document.querySelector('#Gname').onkeyup=function(){
        //disabling the save changes button
    if(document.querySelector('#Gname').value.trim().length>0){
        document.querySelector('#sc').disabled=false;
    }
    else{
        document.querySelector('#sc').disabled=true;
    }
    };
    // adding the name and description to the edit details 
    document.querySelector('#sc').onclick=function(){
    Groupname = document.querySelector('#Gname').value;
    document.querySelector('#Gn').innerHTML=Groupname;
    localStorage.setItem('Groupname',Groupname);
    Groupdescription = document.querySelector("#Gdescription").value;
    document.querySelector('#Gd').innerHTML=Groupdescription;
    localStorage.setItem('Groupdescription',Groupdescription);
    // disable the button after edited
    document.querySelector('#sc').disabled=true;
    return false;
    } 
    //button to leave the page and redirect to homepage
    document.querySelector('#leave').onclick=() =>{
        alert(`Click 'OK' to leave.`);
        location. href = "search.html";
        }
    // menu's signout button to logout from website
    document.querySelector('#finalout').onclick=() =>{
        alert(`Click 'OK' to leave Website!.`);
        location. href = "login.html";
        }
});



