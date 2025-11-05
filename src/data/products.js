// Base items (single source of truth)
const items = [
  {
    id: 'p1',
    name: 'School Shirt',
    gender: 'Kids',
    category: 'School dress',
    sizes: ['S', 'M', 'L'],
    price: 12.99,
    image: 'https://imgs.search.brave.com/Lf52mK6a62zhS2HQSYFH5Ci2kaYvXrdQ0ic9cb5lJGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMi8wMDQv/MzczL3NjaG9vbC1k/cmVzcy0zOTkuanBn',
  },
  {
    id: 'p2',
    name: 'Men Slim Fit Shirt',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['M', 'L', 'XL'],
    price: 29.99,
    image: 'https://imgs.search.brave.com/bc3x5jJBX3z9CF6AMjbYVFHc2ShPoG0UkDzUQue-_t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbGlt/YWdlcy5tYWN5c2Fz/c2V0cy5jb20vaXMv/aW1hZ2UvTUNZL3By/b2R1Y3RzLzgvb3B0/aW1pemVkLzMxNDE2/ODc4X2ZweC50aWY_/cWx0PTgwLDAmcmVz/TW9kZT1zaGFycDIm/b3BfdXNtPTEuNzUs/MC4zLDIsMCZmbXQ9/anBlZyZ3aWQ9MzQy/JmhlaT00MTc',
  },
  {
    id: 'p3',
    name: 'Cotton Kurti',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['S', 'M'],
    price: 45.0,
    image: 'https://imgs.search.brave.com/FQuzpgGmO4X4qQqWMITn42WkCqDyYZGhJMHD8moy_WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFPcWRnNU9VU0wu/anBn',
  },
  {
    id: 'p4',
    name: 'Corporate Blazer',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['M', 'L', 'XL'],
    price: 79.99,
    image: 'https://imgs.search.brave.com/e3CAc55Dw7AK3HTfFXt0IZar7mxmCZHZr4Sx5DTmb0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9BTkRST0lEL0Rl/ZmF1bHQvMjAyMy8x/Mi8zNzI0MDI1NjUv/QlQvVEgvSUovMTEw/MTY1NjUxL3Byb2R1/Y3QtanBlZy0yNTB4/MjUwLmpwZw',
  },
  {
    id: 'p5',
    name: 'Kids Formal Trousers',
    gender: 'Kids',
    category: 'Readymade garments',
    sizes: ['S', 'M'],
    price: 19.5,
    image: 'https://imgs.search.brave.com/zk5NkuA1NOErs7sKpo9cuAXj3753b9nQkre1c4fCPTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmNnbGNkbi5jb20v/YnJhaW5iZWVzL2lt/YWdlcy9wcm9kdWN0/cy8zMDB4MzY0LzIw/MTc2NDk3YS53ZWJw',
  },
  {
    id: 'p6',
    name: 'Formal Pant',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 35.0,
    image: 'https://imgs.search.brave.com/BCJsUR-qcUfOpYpEUk4QBzaPBcsfsHEW_lkMKnewWOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkOUp1QzNVQ0wu/anBn',
  },
  {
    id: 'p8',
    name: 'Kids School Shoes (Black)',
    gender: 'Kids',
    category: 'Shoes',
    sizes: ['5', '6', '7', '8', '9'],
    price: 35.0,
    image: 'https://imgs.search.brave.com/VoSFe5VbJNYM5f0SSf2g0pVP8SCMy56Lx09UMPHXyTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmFk/ZWZvb3R3ZWFyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMS8xLTQwMHg0/MDAuanBn',
  },
  {
    id: 'p9',
    name: 'Jeans',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 35.0,
    image: 'https://imgs.search.brave.com/p9atc5umMYilm0TrI2LeLD_sa6zoRHF8jimsmcmyLQw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zbGlt/YWdlcy5tYWN5c2Fz/c2V0cy5jb20vaXMv/aW1hZ2UvTUNZL3By/b2R1Y3RzLzUvb3B0/aW1pemVkLzk4MzEw/NzVfZnB4LnRpZj9x/bHQ9ODAsMCZyZXNN/b2RlPXNoYXJwMiZv/cF91c209MS43NSww/LjMsMiwwJmZtdD1q/cGVnJndpZD0zNDIm/aGVpPTQxNw',
  },
  {
    id: 'p10',
    name: 'Jeans',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 35.0,
    image: 'https://imgs.search.brave.com/knQAMwttidirZMW6dZnkmmfqa79jzrr51K9ZdE9t5e4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZS11cC10d28td29t/ZW4tbGVncy1qZWFu/cy1wZW9wbGUtZmFz/aGlvbi1zdHlsZS1j/bG90aGluZy1jb25j/ZXB0LTYxNDY1NDU3/LmpwZw',
  },
]

// Admin-friendly grouped exports
export const men = items.filter(i => i.gender === 'Men')
export const women = items.filter(i => i.gender === 'Women')
export const kids = items.filter(i => i.gender === 'Kids')

export const byCategory = {
  'Readymade garments': items.filter(i => i.category === 'Readymade garments'),
  'School dress': items.filter(i => i.category === 'School dress'),
}

// Backwards-compatible flat list (used by the UI)
export const allProducts = items
export default allProducts
