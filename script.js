// Função para remover acentos e normalizar texto
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Referenciar elementos
const barraDePesquisa = document.getElementById('pesquisa');
const produtos = document.querySelectorAll('.coluna');

// Adicionar evento de entrada
barraDePesquisa.addEventListener('input', () => {
    const termo = removerAcentos(barraDePesquisa.value);

    produtos.forEach(produto => {
        // Obter texto de h4 e h5 dentro de cada produto
        const nomeProduto = removerAcentos(
            [...produto.querySelectorAll('h4, h5')]
                .map(elemento => elemento.innerText)
                .join(' ') // Combina o texto de h4 e h5, se ambos existirem
        );

        // Verificar se o nome do produto inclui o termo pesquisado
        if (nomeProduto.includes(termo)) {
            produto.style.display = 'block'; // Exibe o produto
        } else {
            produto.style.display = 'none'; // Oculta o produto
        }
    });
});
