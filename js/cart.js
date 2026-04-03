// Shopping Cart Management
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateUI();
    }

    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem('cart');
        const items = saved ? JSON.parse(saved) : [];
        // Ensure all items have image from products
        items.forEach(item => {
            if (!item.image) {
                const prod = getProductById(item.id);
                if (prod && prod.image) {
                    item.image = prod.image;
                }
            }
        });
        return items;
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    // Add item to cart
    addItem(product, quantity = 1) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        this.saveCart();
        this.updateUI();
    }

    // Remove item from cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateUI();
    }

    // Update quantity
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            if (item.quantity <= 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
                this.updateUI();
            }
        }
    }

    // Get total price
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Get item count
    getCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Clear cart
    clear() {
        this.items = [];
        this.saveCart();
        this.updateUI();
    }

    // Update UI
    updateUI() {
        this.updateCartBadge();
        this.renderCartItems();
        this.updateCartTotal();
    }

    // Update cart badge
    updateCartBadge() {
        const badge = document.getElementById('cart-count');
        if (badge) {
            badge.textContent = this.getCount();
        }
    }

    // Render cart items
    renderCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty</p>';
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.image ? `<img src="${item.image}" alt="${item.name}" style="max-width:100%; max-height:100%; object-fit: cover;">` : item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-btn" onclick="cart.removeItem(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update cart total
    updateCartTotal() {
        const totalElement = document.getElementById('cart-total');
        if (totalElement) {
            totalElement.textContent = '$' + this.getTotal().toFixed(2);
        }
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Toggle cart sidebar
function toggleCart(event) {
    if (event) {
        event.preventDefault();
    }
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
    if (overlay) {
        overlay.classList.toggle('active');
    }
}

// Checkout function
function checkout() {
    if (cart.items.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Create a simple checkout summary
    const total = cart.getTotal();
    const itemCount = cart.getCount();
    
    alert(`Thank you for your interest in our jewellery!\n\nOrder Summary:\n- Items: ${itemCount}\n- Total: $${total.toFixed(2)}\n\nIn a real implementation, this would connect to a payment gateway like Stripe for secure processing.\n\nOur team will contact you to complete your order.`);
    
    // Clear the cart after checkout (in a real app, this would be after payment confirmation)
    cart.clear();
    toggleCart();
}
