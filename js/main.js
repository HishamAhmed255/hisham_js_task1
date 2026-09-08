




function convertValue(){
    var dollar = document.getElementById('dollar').value ;
    var result = document.getElementById('result');
    
    if(dollar == ""){
        result.innerHTML = "Enter a value";
    }else if (isNaN(dollar)){
        result.innerHTML = "Enter a value Not a text";
    }else if (dollar < 0){
        result.innerHTML = "Enter a positive value"
    }else if (dollar==0){
        result.innerHTML = "Enter a value above the zero"
    }else {
        result.innerHTML = dollar * 50 + " E.G.P";
    }


    return false;
}


