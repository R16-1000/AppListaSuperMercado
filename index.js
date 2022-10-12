var items = []

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]')//.value // alert(nomeProduto) //texto do produto
    var precoProduto = document.querySelector('input[name=price]')//.value // alert(precoProduto) //texto do valor
   
   items.push({
    nome: nomeProduto.value, //alert(items[0].nome)
    valor: precoProduto.value //alert(items[0].valor)
   })

   /*
        <div class="lista-produtos-single">
            <h3>RedBull</h3>
            <h3 class="price-produto"><span>R$20,00</span></h3>
        </div>
   */
   
        let listaProdutos = document.querySelector('.lista-produtos') 

        listaProdutos.innerHTML="" //Reseta para não repetir o produto

        let soma = 0 //variavel soma

        items.map(function(val){ //add produto
            soma+=parseFloat(val.valor) //loop da soma
            listaProdutos.innerHTML+=`
            <div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
            </div>

            `
        })
        soma=soma.toFixed(2)
        nomeProduto.value=""//para zerar
        precoProduto.value=""//para zerar

        let elementoSoma = document.querySelector('.soma-produto h1')
        elementoSoma.innerHTML = 'Total: R$'+soma

})

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    //alert('limpo!')
    //esvaziar itens
    items=[]
    document.querySelector('.lista-produtos').innerHTML="" 
    document.querySelector('.soma-produto h1').innerHTML = 'Total: R$ 0'
})
