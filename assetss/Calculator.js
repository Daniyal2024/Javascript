function calcu(){
    var Value1=parseFloat(document.getElementById('Value1').value);
    var Value2=parseFloat(document.getElementById('Value2').value);

    var oper =document.getElementById('Operators').value;

    if(oper === '+'){
        document.getElementById('result').value=Value1+Value2;
    }
    if(oper === '-'){
        document.getElementById('result').value=Value1-Value2;
    }
    if(oper === '*'){
        document.getElementById('result').value=Value1*Value2;
    }
    if(oper === '/'){
        document.getElementById('result').value=Value1/Value2;
    }
    if(oper === '%'){
        document.getElementById('result').value=Value1*Value2/100;
    }
  
}