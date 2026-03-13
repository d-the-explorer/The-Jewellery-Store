# The Jewellery Store - Luxury Jewelry Website

A beautiful, professional website for a high-end family-run jewelry store built with vanilla HTML, CSS, and JavaScript.

## Features

✨ **Elegant Design** - Luxury aesthetic with gold accents and sophisticated styling
🛍️ **E-Commerce** - Full shopping cart functionality with persistent storage
💎 **Product Catalog** - 12 curated jewelry pieces across multiple categories
👨‍👩‍👧‍👦 **About Page** - Tell your family's story and showcase your craftmanship
✉️ **Contact Form** - Customer inquiries and contact management
📱 **Responsive Design** - Fully mobile-friendly on all devices
💾 **Cart Persistence** - Shopping cart saves to browser's localStorage

## Project Structure

```
The-Jewellery-Store/
├── index.html              # Home page
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── products.js        # Product data and utilities
│   ├── cart.js            # Shopping cart functionality
│   ├── main.js            # Home page scripts
│   ├── shop.js            # Shop page scripts
│   └── contact.js         # Contact page scripts
├── pages/
│   ├── shop.html          # Product listing page
│   ├── about.html         # About & story page
│   └── contact.html       # Contact page
├── img/                   # Images folder (for future use)
└── README.md              # Documentation
```

## Pages

### 🏠 Home (index.html)
- Hero section with call-to-action
- Featured products showcase
- Why choose us section
- Newsletter signup

### 🛒 Shop (pages/shop.html)
- Grid layout of all products
- Filter by category (Rings, Necklaces, Bracelets, Earrings)
- Filter by price range
- Product details modal
- Add to cart functionality

### ℹ️ About (pages/about.html)
- Company story
- Core values
- Meet the craftsmen
- Certifications & recognition

### 📧 Contact (pages/contact.html)
- Contact form with validation
- Business hours and location
- Multiple contact methods
- FAQ section
- Special services showcase

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for basic functionality

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd The-Jewellery-Store
```

2. **Open locally**
Simply open `index.html` in your browser or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if http-server installed)
http-server

# Using VS Code Live Server extension
# Right-click index.html > Open with Live Server
```

Then visit `http://localhost:8000`

## Features in Detail

### 🛒 Shopping Cart
- Add/remove products
- Adjust quantities
- Real-time total calculation
- Persistent storage (localStorage)
- Slide-out sidebar cart preview
- Checkout button with order summary

### 💎 Product System
- 12 pre-loaded luxury jewelry pieces
- Each product has:
  - Name and description
  - Category (Rings, Necklaces, Bracelets, Earrings)
  - Price point
  - Detailed specifications
  - **Image URL** (shown on shop and modal) with emoji fallback

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimized
- Desktop experience
- Touch-friendly interface
- Responsive navigation

### 🎨 Luxury Aesthetic
- Gold (#d4af37) accent color
- Dark, sophisticated color scheme
- Smooth transitions and hover effects
- Professional typography
- Elegant spacing and layout

## Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #d4af37;      /* Gold */
    --dark-color: #1a1a1a;         /* Dark background */
    --light-color: #f5f5f5;        /* Light background */
    --accent-color: #8b7355;       /* Brown accent */
    --text-color: #333;            /* Text color */
}
```

### Products
Edit the `products` array in `js/products.js` to add or modify items.

### Contact Information
Update contact details in `pages/contact.html`, `index.html`, `pages/shop.html`, and `pages/about.html` footers.

## Technical Details

### No External Dependencies
- Pure HTML/CSS/JavaScript
- No frameworks or libraries required
- Fast loading and excellent performance
- SEO-friendly

### Browser Storage
- Shopping cart uses `localStorage` to persist items
- Data persists across browser sessions

## License

This project is open source and available under the MIT License.


## Notes on improvements
- Modify store name
- Change the logo 
-Change the color theme: Navigation, the hover + active state
- Change the text overlay on the hero image


**Made with ✨ for luxury jewelry retailers**