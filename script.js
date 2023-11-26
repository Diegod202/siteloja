let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    const carrinhoTotal = document.getElementById('carrinho-total');

    carrinhoLista.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - $${item.preco}`;
        carrinhoLista.appendChild(li);
    });

    carrinhoTotal.textContent = total.toFixed(2);
}
