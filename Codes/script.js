// Verificar dados da página
window.addEventListener('load', carregada)

function carregada(){

    // Renda Reload
    document.getElementById('n-r-1').value = localStorage.getItem('n-r-1') || "";
    document.getElementById('n-r-2').value = localStorage.getItem('n-r-2') || "";
    document.getElementById('n-r-3').value = localStorage.getItem('n-r-3') || "";
    document.getElementById('n-r-4').value = localStorage.getItem('n-r-4') || "";

    document.getElementById('v-r-1').value = localStorage.getItem('v-r-1') || "";
    document.getElementById('v-r-2').value = localStorage.getItem('v-r-2') || "";
    document.getElementById('v-r-3').value = localStorage.getItem('v-r-3') || "";
    document.getElementById('v-r-4').value = localStorage.getItem('v-r-4') || "";

    // Despesa Reload
    document.getElementById('n-d-1').value = localStorage.getItem('n-d-1') || "";
    document.getElementById('n-d-2').value = localStorage.getItem('n-d-2') || "";
    document.getElementById('n-d-3').value = localStorage.getItem('n-d-3') || "";
    document.getElementById('n-d-4').value = localStorage.getItem('n-d-4') || "";

    document.getElementById('v-d-1').value = localStorage.getItem('v-d-1') || "";
    document.getElementById('v-d-2').value = localStorage.getItem('v-d-2') || "";
    document.getElementById('v-d-3').value = localStorage.getItem('v-d-3') || "";
    document.getElementById('v-d-4').value = localStorage.getItem('v-d-4') || "";
    

    // Retorno da variável
    var vr1 = Number(document.getElementById("v-r-1").value)
    var vr2 = Number(document.getElementById("v-r-2").value)
    var vr3 = Number(document.getElementById("v-r-3").value)
    var vr4 = Number(document.getElementById("v-r-4").value)

    var vd1 = Number(document.getElementById("v-d-1").value)
    var vd2 = Number(document.getElementById("v-d-2").value)
    var vd3 = Number(document.getElementById("v-d-3").value)
    var vd4 = Number(document.getElementById("v-d-4").value)

     // resultado

    var resultadosaldo = document.getElementById('renda-total')
    resultadosaldo.innerText = (vr1 + vr2 + vr3 + vr4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    // Despesa Renda
    var resultadodespesa = document.getElementById('despesa-total')
    resultadodespesa.innerText = (vd1 + vd2 + vd3 + vd4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

      // Saldo restante
      var resultadorenda = vr1 + vr2 + vr3 + vr4
      var resultadodespesa = vd1 + vd2 + vd3 + vd4
  
      var src = resultadorenda - resultadodespesa
  
      var saldototal = document.getElementById('saldo-total')
      saldototal.innerText = (src).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    // Porcentagem
    var p1 = (resultadodespesa/resultadorenda*100).toFixed(2)

    console.log(p1)
    
    var porcentagem = document.getElementById('resultado-porcentagem')
    porcentagem.innerText = (p1 + "%")

}



// Botão de Salvar

const salvarbtn = document.getElementsByClassName('enviar-dados')[0]

salvarbtn.addEventListener('click', clicou)

function clicou(){

    // Renda Item/Valor Input
    var vr1 = Number(document.getElementById("v-r-1").value)
    var vr2 = Number(document.getElementById("v-r-2").value)
    var vr3 = Number(document.getElementById("v-r-3").value)
    var vr4 = Number(document.getElementById("v-r-4").value)

    var nr1 = document.getElementById("n-r-1").value
    var nr2 = document.getElementById("n-r-2").value
    var nr3 = document.getElementById("n-r-3").value
    var nr4 = document.getElementById("n-r-4").value

    // Salvar os dados no storage Renda
    localStorage.setItem("n-r-1", nr1);
    localStorage.setItem("n-r-2", nr2);
    localStorage.setItem("n-r-3", nr3);
    localStorage.setItem("n-r-4", nr4);
    
    localStorage.setItem("v-r-1", vr1);
    localStorage.setItem("v-r-2", vr2);
    localStorage.setItem("v-r-3", vr3);
    localStorage.setItem("v-r-4", vr4);

    // Despesa Item/Valor Input
    var vd1 = Number(document.getElementById("v-d-1").value)
    var vd2 = Number(document.getElementById("v-d-2").value)
    var vd3 = Number(document.getElementById("v-d-3").value)
    var vd4 = Number(document.getElementById("v-d-4").value)

    var nd1 = document.getElementById("n-d-1").value
    var nd2 = document.getElementById("n-d-2").value
    var nd3 = document.getElementById("n-d-3").value
    var nd4 = document.getElementById("n-d-4").value


    // Salvar os dados no storage Despesa
    localStorage.setItem("n-d-1", nd1);
    localStorage.setItem("n-d-2", nd2);
    localStorage.setItem("n-d-3", nd3);
    localStorage.setItem("n-d-4", nd4);
    
    localStorage.setItem("v-d-1", vd1);
    localStorage.setItem("v-d-2", vd2);
    localStorage.setItem("v-d-3", vd3);
    localStorage.setItem("v-d-4", vd4);


    // Resultado
    // Resultado Renda
    var resultadosaldo = document.getElementById('renda-total')
    resultadosaldo.innerText = (vr1 + vr2 + vr3 + vr4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    // Despesa Renda
    var resultadodespesa = document.getElementById('despesa-total')
    resultadodespesa.innerText = (vd1 + vd2 + vd3 + vd4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    // Saldo restante
    var resultadorenda = vr1 + vr2 + vr3 + vr4
    var resultadodespesa = vd1 + vd2 + vd3 + vd4

    var src = resultadorenda - resultadodespesa

    var saldototal = document.getElementById('saldo-total')
    saldototal.innerText = (src).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    // Porcentagem
    var p1 = (resultadodespesa/resultadorenda*100).toFixed(2)

    console.log(p1)
    
    var porcentagem = document.getElementById('resultado-porcentagem')
    porcentagem.innerText = (p1 + "%")
}

