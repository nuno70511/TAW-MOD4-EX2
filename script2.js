var num1 = 0;
var num2 = -1;
var num3 = 4;

var menor;
var intermedio;
var maior;

if (num1 < num2 && num1 < num3){
    menor = num1;
    if (num2 < num3){
        intermedio = num2;
        maior = num3;
    }else{
        intermedio = num3;
        maior = num2;
    }
    alert(maior + " " + intermedio + " " + menor);
    
}else if(num2 < num3){
    menor = num2;
    if(num1 < num3){
        intermedio = num1;
        maior = num3;
    }else{
        intermedio = num3;
        maior = num1;
    }
    alert(maior + " " + intermedio + " " + menor);
}
else{
    maior = num2;
    if(num1 < num3){
        menor = num1;
        intermedio = num3;
    }else{
        intermedio = num1;
        menor = num3;
    }
    alert(maior + " " + intermedio + " " + menor);
}
