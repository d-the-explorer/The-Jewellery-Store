// Main Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Highlight current navigation link if possible
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLink = document.querySelector(`.nav-link[href="${currentPage}"]`);
    if (navLink) {
        setActiveNav(navLink);
    }

    // Load featured products on home page (only if the element exists)
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        loadFeaturedProducts();
    }
});

// Load and display featured products
function loadFeaturedProducts() {
    const featured = getFeaturedProducts();
    const container = document.getElementById('featured-products');
    
    if (!container) return;

    container.innerHTML = featured.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : product.emoji}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description.substring(0, 50)}...</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); cart.addItem(getProductById(${product.id}))">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Newsletter signup
function handleNewsletter(event) {
    event.preventDefault();
    const input = event.target.querySelector('input[type="email"]');
    const email = input.value;
    
    // Simple validation
    if (email) {
        alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
        input.value = '';
    }
}

// Set active nav link
function setActiveNav(target) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    target.classList.add('active');
}

// Product modal
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
