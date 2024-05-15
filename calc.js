document.getElementById('calc').addEventListener('click', ()=>{
    var numOne = +document.getElementById("x").value;
    var numTwo = +document.getElementById("y").value;
    var op = document.getElementById("operator").value;
    switch(op){
        case '+':
            var total = numOne + numTwo;
        break;
        case '-':
            var total = numOne - numTwo;
        break;
        case '*':
            var total = numOne * numTwo;
        break;
        case '/':
            var total = numOne / numTwo;
        break;
    }
    document.getElementById('res').innerHTML = 'Your Result Is : '+ total; 
}) 