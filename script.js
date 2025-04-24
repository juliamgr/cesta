const produtos = [
    {
        nome: "Ovo De Páscoa Barbie 166g - Lacta",
        foto: "img/barbie.webp",
        preco: 3499.99
    },
    {
        nome: "Ovo De Páscoa Ao Leite Ben 10 Topcau 80g",
        foto: "img/ben10.webp",
        preco: 4299.00
    },
    {
        nome: "Cacau Show Ovo De Páscoa ao Leite Gogos Looney Tunes 170g",
        foto: "img/looneytunes.webp",
        preco: 199.90
    },
    {
        nome: "Ovo de Páscoa Kinder Masha e Urso 100g",
        foto: "img/mashaarrombada.webp",
        preco: 2899.00
    },
    {
        nome: "Divino Vício Ovo de Páscoa Divino Kids Miniatura 2d Tom e Jerry 80g",
        foto: "img/tomejerry.webp",
        preco: 4499.99
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('produtos-container');
    
    produtos.forEach(produto => {
        const produtoHTML = `
            <div class="produto">
                <img src="${produto.foto}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <div class="preco">${produto.preco.toFixed(2)}</div>
            </div>
        `;
        
        container.innerHTML += produtoHTML;
    });
});