// Product Data
const products = [
    {
        id: 1,
        name: "Diamond Solitaire Ring",
        category: "rings",
        price: 2500000,
        image: "/img/diamond-solitare-ring.jpg",
        emoji: "💎💎💎💎",
        description: "Stunning 1.5 carat diamond solitaire ring in 18K white gold. A timeless classic that captures elegance and sophistication.",
        details: "18K White Gold | 1.5 Carat Diamond | GIA Certified | Size 7"
    },
    {
        id: 2,
        name: "Pearl Pendant Necklace",
        category: "necklaces",
        price: 890,
        image: "/img/pearl-pendant.jpg",
        emoji: "🤍",
        description: "Exquisite South Sea pearl pendant with diamond accents. A sophisticated piece for any occasion.",
        details: "14K Gold | South Sea Pearl | Diamond Accents | 16-18in Chain"
    },
    {
        id: 3,
        name: "Gold Bangle Bracelet",
        category: "bracelets",
        price: 1200,
        image: "/img/placeholder.png",
        emoji: "⭐",
        description: "Classic 14K gold bangle with intricate filigree detailing. Perfect for everyday wear or special occasions.",
        details: "14K Yellow Gold | 7mm Width | 7in Size | Polished Finish"
    },
    {
        id: 4,
        name: "Sapphire Stud Earrings",
        category: "earrings",
        price: 1450,
        image: "/img/placeholder.png",
        emoji: "💙",
        description: "Beautiful Burmese sapphire studs with diamond halos. Royal blue elegance at its finest.",
        details: "18K White Gold | 2ct Sapphires | 0.5ct Diamonds | GIA Certified"
    },
    {
        id: 5,
        name: "Emerald Cocktail Ring",
        category: "rings",
        price: 1950,
        image: "/img/placeholder.png",
        emoji: "💚",
        description: "Striking Colombian emerald cocktail ring surrounded by brilliant diamonds.",
        details: "14K Yellow Gold | 3ct Emerald | 1ct Diamonds | Size 7"
    },
    {
        id: 6,
        name: "Tennis Bracelet",
        category: "bracelets",
        price: 2800,
        image: "/img/placeholder.png",
        emoji: "✨",
        description: "Elegant diamond tennis bracelet with perfectly matched stones. Timeless luxury.",
        details: "18K White Gold | 5ct Total Diamonds | VVS Clarity | 7in"
    },
    {
        id: 7,
        name: "Ruby Heart Pendant",
        category: "necklaces",
        price: 1650,
        image: "/img/placeholder.png",
        emoji: "❤️",
        description: "Passionate ruby heart pendant set in 14K white gold with diamond accents.",
        details: "14K White Gold | 2ct Ruby | 0.3ct Diamonds | 18in Chain"
    },
    {
        id: 8,
        name: "Diamond Drop Earrings",
        category: "earrings",
        price: 1100,
        image: "/img/placeholder.png",
        emoji: "💧",
        description: "Elegant diamond drop earrings with 18K gold setting. Perfect for elegant occasions.",
        details: "18K White Gold | 1.5ct Diamonds | VVS Clarity | Post Backs"
    },
    {
        id: 9,
        name: "Vintage Gold Ring",
        category: "rings",
        price: 1350,
        image: "/img/placeholder.png",
        emoji: "👑",
        description: "Vintage-inspired engagement ring with ornate detailing and center stone setting.",
        details: "18K Yellow Gold | Vintage Design | Center Stone Ready | Size 7"
    },
    {
        id: 10,
        name: "Aquamarine Necklace",
        category: "necklaces",
        price: 950,
        image: "/img/placeholder.png",
        emoji: "💎",
        description: "Beautiful aquamarine pendant with 14K gold setting. Cool elegance.",
        details: "14K Gold | 2ct Aquamarine | 16-18in Chain | Polished"
    },
    {
        id: 11,
        name: "Sapphire Tennis Bracelet",
        category: "bracelets",
        price: 2400,
        image: "/img/placeholder.png",
        emoji: "💙",
        description: "Alternating sapphire and diamond tennis bracelet in white gold.",
        details: "18K White Gold | 3ct Sapphires | 2ct Diamonds | 7in"
    },
    {
        id: 12,
        name: "Opal Earring Set",
        category: "earrings",
        price: 720,
        image: "/img/placeholder.png",
        emoji: "🌈",
        description: "Stunning opal earrings with matching necklace combo.",
        details: "14K Gold | Australian Opals | Drop Style | Post Backs"
    }
];

// Get featured products (first 6)
function getFeaturedProducts() {
    return products.slice(0, 6);
}

// Get all products
function getAllProducts() {
    return products;
}

// Get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}
