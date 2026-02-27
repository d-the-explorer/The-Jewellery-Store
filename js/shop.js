// Shop Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    // Set active nav link for shop page
    const shopLink = document.querySelector('a[href="shop.html"]');
    if (shopLink) {
        shopLink.classList.add('active');
    }
});

// Load and display all products with filtering
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    const allProducts = getAllProducts();
    displayProducts(allProducts);
}

// Display products in grid
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    if (productsToDisplay.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found matching your criteria.</p>';
        return;
    }

    grid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : product.emoji}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description.substring(0, 60)}...</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); cart.addItem(getProductById(${product.id}))">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Filter products based on category and price
function filterProducts() {
    const allProducts = getAllProducts();
    
    // Get filter values
    const category = document.querySelector('input[name="category"]:checked')?.value || 'all';
    const minPrice = parseFloat(document.getElementById('min-price')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price')?.value) || Infinity;

    // Filter products
    const filtered = allProducts.filter(product => {
        const categoryMatch = category === 'all' || product.category === category;
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    displayProducts(filtered);
}

// Product modal - same as main.js
function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    const modalDetails = document.getElementById('modal-details');

    if (!modal || !modalImage || !modalDetails) return;

    modalImage.innerHTML = product.image
        ? `<img src="${product.image}" alt="${product.name}" style="max-width:100%;max-height:100%;">`
        : `<div style="font-size: 5rem;">${product.emoji}</div>`;
    
    modalDetails.innerHTML = `
        <h3>${product.name}</h3>
        <p class="product-category">${product.category.toUpperCase()}</p>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <p class="product-description">${product.description}</p>
        <p><strong>Details:</strong></p>
        <p>${product.details}</p>
        <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <button class="btn btn-primary" onclick="cart.addItem(getProductById(${product.id})); closeModal(); toggleCart();">
                Add to Cart
            </button>
            <button class="btn btn-secondary" onclick="closeModal();">Close</button>
        </div>
    `;

    modal.classList.add('active');
}

// Close product modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('product-modal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
