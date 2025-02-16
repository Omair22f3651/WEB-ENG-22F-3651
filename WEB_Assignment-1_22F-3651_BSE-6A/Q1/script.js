const products = [
    {
        name: "Ace of Spades",
        price: "$9.99",
        image: "https://source.unsplash.com/250x350/?playing-cards,spade",
        description: "A mystic card tied to an ancient prophecy. Whoever holds it is destined to uncover hidden truths of the universe."
    }
];

function createProductCards() {
    const container = document.getElementById("productContainer");
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h2>${product.name}</h2>
                    <p>${product.price}</p>
                </div>
                <div class="card-back">
                    <p>${product.description}</p>
                    <button onclick="buyProduct('${product.name}')">Buy Now</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function buyProduct(productName) {
    console.log(`Purchased: ${productName}`);
}

document.getElementById("darkModeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});

createProductCards();
