const btnClicked=(e)=>{
    console.log(e.target.innerText)
    console.log("hello all")
    inp.value+=e.target.innerText
}

const getResult=()=>{
    try{
        const result=eval(inp.value)
        inp.value=result
    }
    catch{
        inp.value="inavalid expression"
    }
}

const backSpace=()=>{
    inp.value=inp.value.slice(0,(inp.value.length-1))
}


const clearAll=()=>{
    inp.value=""
}