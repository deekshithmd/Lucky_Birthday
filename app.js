const dateofBirth=document.querySelector("#date")
const number=document.querySelector("#lucky")
const btn=document.querySelector("#check")
const message=document.querySelector("#message")

const showMessage = () => message.innerText="Complete both fields"

const calculateSum = date =>{
    let sum=0
    let bdate=date.replace(/-/g,"")
    for(var i of bdate){
        sum=sum+Number(i)
    }
    return sum
}

const checkLucky = (bsum,lnumber) =>{
    if(bsum % lnumber === 0){
        message.innerText=`Ohh great...Your birthday is lucky...!!! 🥳🥳🥳 `
        //console.log(bsum)
        //console.log(lnumber)
    }
    else{
        message.innerText=`Oops...your birthday not much lucky 😕`
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
