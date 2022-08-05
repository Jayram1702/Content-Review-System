
document.addEventListener('DOMContentLoaded',function(){


// searching the url and uploading the page searched url .
let buttonsearch = document.querySelector("#srchbtn");
buttonsearch.onclick = function(){
        let searchbx = document.querySelector( ".searchbx");
        let url =searchbx.value;
        // console.log("url..", url);
        // window.frames.location= url;
        location.href= "contentloading.html";
        let myIframe = document.getElementById("myIframe").src;
        // // console.log(url);
        myIframe = url;
} 
//measuring the length of the group name
const isBetween = (name, min, max) => {
    if(name.length < min || name.length > max){
        // console.log("Length is too short or too long");
        return false;
    }
    //    console.log("Perfect Length ");
        return true;
};

//checking the name is measured correctly or not! and also setting the values.  
const checkUsername = (name1) =>{
    let valid = false;
    const min =  3;
    const max = 10;
    if(!isBetween(name1,min,max)){
        alert('username Should be between 3-10')
        return false;
    }
    else{
        valid = true;
    }
    return valid;
}
    // adding the name to the dropdown menu when entered the name.
    document.querySelector('#addgroup').onclick=function(){
    const li=document.createElement('button');
    const addname = document.querySelector('#list');
    li.innerHTML=document.querySelector('#grpName').value;
    let isnamevalid = checkUsername(li.innerHTML);
    if(!isnamevalid){
        return false;
    }
    else{
    addname.append(li);
    document.querySelector('#grpName').value="";
    document.querySelector('#addgroup').disabled=true;
    }  
    document.querySelector('#addgroup').disabled=false;
}
});
    // exit from the account.
    document.querySelector('#finalout').onclick=() =>{
        alert(`Click 'OK' to leave Website!.`);
        location. href = "login.html";
        }

