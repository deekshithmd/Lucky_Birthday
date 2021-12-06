var dateofBirth=document.querySelector("#date")
var number=document.querySelector("#lucky")
var btn=document.querySelector("#check")
var message=document.querySelector("#message")

function showMessage(){
    message.innerText="Complete both fields"
}

function calculateSum(date){
    var sum=0
    var bdate=date.replace(/-/g,"")
    for(var i of bdate){
        sum=sum+Number(i)
    }
    return sum
}

function checkLucky(bsum,lnumber){
    if(bsum % lnumber === 0){
        message.innerText="Ohh great...Your birthday is lucky...!!! 🥳🥳🥳 "
        //console.log(bsum)
        //console.log(lnumber)
    }
    else{
        message.innerText="Oops...your birthday not much lucky 😕"
        //console.log(bsum)
        //console.log(lnumber)
    }
}

btn.addEventListener("click",()=>{
    const date=dateofBirth.value
    const lnumber=number.value
    if( date && lnumber){
        const s=calculateSum(date)
        checkLucky(s,lnumber)
    }
    else{
        showMessage()
    }
})
