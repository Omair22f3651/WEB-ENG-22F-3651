const rollNumberInput = document.getElementById("rollNumber");
const discountSpan = document.getElementById("discount");
const totalPriceSpan = document.getElementById("totalPrice");
const finalPriceSpan = document.getElementById("finalPrice");
const productList = document.getElementById("products");

const products = [
    { name: "Laptop", price: 100000 },
    { name: "Smartphone", price: 60000 },
    { name: "Headphones", price: 8000 },
    { name: "Smartwatch", price: 25000 },
    { name: "Backpack", price: 5000 }
];

let selectedProducts = new Set();
let purchaseCount = 0;
let maxDiscount = 50;

// Populate product list dynamically
products.forEach((product, index) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - PKR ${product.price}`;
    li.onclick = () => toggleProduct(index);
    productList.appendChild(li);
});

const updateDiscount = () => {
    const rollNumber = rollNumberInput.value;
    const match = rollNumber.match(/\d{2}F-(\d{4})/);

    if (match) {
        const fourDigits = match[1]; // Extract the four digits after '-'
        const middleTwoDigits = parseInt(fourDigits.substring(1, 3)); // Get the middle two digits
        let discount = Math.min(middleTwoDigits, maxDiscount); // Cap at max discount

        discountSpan.textContent = `${discount}%`;
        calculatePrice(discount);
    } else {
        discountSpan.textContent = "0%"; // Reset if invalid input
        finalPriceSpan.textContent = "0";
    }
};


const toggleProduct = (index) => {
    const product = products[index];
    if (selectedProducts.has(product)) {
        selectedProducts.delete(product);
    } else {
        selectedProducts.add(product);
    }

    updateProductUI();
    updateDiscount();
};

const updateProductUI = () => {
    [...productList.children].forEach((li, index) => {
        li.classList.toggle("selected", selectedProducts.has(products[index]));
    });
};

const calculatePrice = (discount) => {
    let total = [...selectedProducts].reduce((sum, product) => sum + product.price, 0);
    let discountedPrice = total - (total * discount / 100);
    
    // Apply additional promo code discount
    const promoCode = document.getElementById("promoCode").value.trim();
    if (promoCode === "OMAIR10") {
        discountedPrice -= discountedPrice * 0.1;
    }

    totalPriceSpan.textContent = total;
    finalPriceSpan.textContent = Math.max(0, Math.floor(discountedPrice));
};

const checkout = () => {
    if (selectedProducts.size === 0) {
        alert("Please select at least one product.");
        return;
    }

    alert("Purchase Successful! Thank you for shopping at OmairDeals.");
    purchaseCount++;

    if (purchaseCount >= 2) {
        maxDiscount = 60;
    }

    selectedProducts.clear();
    updateProductUI();
    updateDiscount();
};
