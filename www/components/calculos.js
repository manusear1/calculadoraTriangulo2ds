// This is a JavaScript file

window.onload = function(){
    let botao = document.getElementById("verifica");
    botao.addEventListener("click", function(){
      
        let result = document.getElementById("resultado");
        let a = parseInt(document.getElementById("lado1").value);
        let b = parseInt(document.getElementById("lado2").value);
        let c = parseInt (document.getElementById("lado3").value);

        if ((a+b>c) && (a+c>b) && (b+c>a)){
            if(a==b && b==c) result.value = "Triângulo equilátero";
            else if (a==b || a==c || b==c) { result.value = "Triângulo isóceles";
            } else 
            result.value = "Triângulo escaleno";
            }else result.value = "Esses valores não formam um triângulo";
    });
   
}