let numStr = "";
function calc(latest){
    if(numStr === "INVALID") numStr = "";
    if(latest==="RESET" ) numStr = "";
    else if(latest!=='=') numStr += latest;
    else if(latest === '='){
        try{
        numStr = eval(numStr);
        numStr += "";
        }
        catch(err){
            numStr = "INVALID";
        }
    }
    screenEl = document.getElementById('display');
    console.log(numStr);
    screenEl.textContent = numStr;
} 