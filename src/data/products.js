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
    name: 'Blazer',
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
    price: 250,
    image: 'https://imgs.search.brave.com/knQAMwttidirZMW6dZnkmmfqa79jzrr51K9ZdE9t5e4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZS11cC10d28td29t/ZW4tbGVncy1qZWFu/cy1wZW9wbGUtZmFz/aGlvbi1zdHlsZS1j/bG90aGluZy1jb25j/ZXB0LTYxNDY1NDU3/LmpwZw',
  },

  // Shoes
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
    id: 'p11',
    name: 'Kids School Shoes (White)',
    gender: 'Kids',
    category: 'Shoes',
    sizes: ['5', '6', '7', '8', '9'],
    price: 250,
    image: 'https://imgs.search.brave.com/moCQb15ZW98Eu97OqVF8CCZM56JT2Ho1NVP2-xlG28o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmNnbGNkbi5jb20v/YnJhaW5iZWVzL2lt/YWdlcy9wcm9kdWN0/cy8zMDB4MzY0LzE5/ODQwNTgzYS53ZWJw',
  },
  {
    id: 'p12',
    name: 'Sports Shoes',
    gender: 'Unisex',
    category: 'Shoes',
    sizes: ['5', '6', '7', '8', '9', '10', '11'],
    price: 500,
    image: 'https://imgs.search.brave.com/bxzM-9SpPCHUJCVk7KLcmSpkyZLnUJhb9Fkqxp9eGIc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWRj/aGllZi5pbi9jZG4v/c2hvcC9maWxlcy83/XzgxZGE4NjQzLWQy/YTAtNGRkNy04NTdm/LTlkZTM4YTdmM2Y5/Mi5qcGc_dj0xNzU2/MDYxOTU5JndpZHRo/PTM3NQ',
  },

  // Men
  {
    id: 'p13',
    name: 'Kurta Pajama Set',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 1200,
    image: 'https://imgs.search.brave.com/8SHf298wwpz0WxtnW4tmBJgOW4z2d0aJ4Z5NcEQulgM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBlbGxhLmluL2Nk/bi9zaG9wL2ZpbGVz/L09wdWxlbnRfSmFj/cXVhcmRfV292ZW5f/S3VydGFfUGFqYW1h/XzEucG5nP3Y9MTc0/MDEzNTYxMSZ3aWR0/aD01MzM',
  },
  {
    id: 'p14',
    name: 'Sherwani',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 1500,
    image: 'sherwani.png',
  },
  {
    id: 'p15',
    name: 'Dhoti',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: [],
    price: 150,
    image: 'dhoti.png',
  },
  {
    id: 'p16',
    name: 'Lungi',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: [],
    price: 150,
    image: 'https://imgs.search.brave.com/5exTSUrj2WXKMEQJEPb-x9UGXpUlZsn8de0EgMz7Ksk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFOTnNZQ1Nickwu/anBn'
  },
  {
    id: 'p17',
    name: 'T-Shirt',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 250,
    image: 'https://imgs.search.brave.com/3a-xRKH_-xfMzlybvYSARNxJKFPom0-pmqdPu-nWvEo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzYv/NzQ5Lzk0Ny9zbWFs/bC9haS1nZW5lcmF0/ZWQtbWFuLXdlYXJp/bmctd2hpdGUtdC1z/aGlydC1vbi1saWdo/dC1ncmV5LXBob3Rv/LmpwZw'
  },
  {
    id: 'p18',
    name: 'Hoodies',
    gender: 'Hoodie',
    category: 'Readymade garments',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 450,
    image: 'https://plus.unsplash.com/premium_photo-1669125725661-24057fb671b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600'
  },
  {
    id: 'p19',
    name: 'Sweatshirts',
    gender: 'Unisex',
    category: 'Readymade garments',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 450,
    image: 'https://imgs.search.brave.com/g9lWtImF_SzZMzE21LdXKZgC5NawrKF6dwI_84aDkXY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvNTAwOTkw/MDIyLzB6aGpvXzUx/Mi53ZWJwP3dpZHRo/PTM2MA'
  },
  {
    id: 'p20',
    name: 'Jackets',
    gender: 'Unisex',
    category: 'Readymade garments',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 650,
    image: 'https://imgs.search.brave.com/1tZNAfSERGFT26AGaBDM4CtaH7qPYyuAZENgRSrBnnk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFPMEdEYlJ0b0wu/anBn'
  },
  {
    id: 'p21',
    name: 'Sweaters',
    gender: 'Unisex',
    category: 'Readymade garments',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 300,
    image: 'https://imgs.search.brave.com/rfwpodWxI49xH1WUhTPfCc2kOMvyb_yCHUiBj-LUqMA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjgx/Nzc0Mzc2L3Bob3Rv/L3N0cmlwcGVkLWtu/aXR0ZWQtc3dlYXRl/ci1pc29sYXRlZC1v/bi13aGl0ZS1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1VbVJ4/VVVZcUNZUlpQMzNp/QkZTMmpvMHVXVkFK/cmxFdUNHdHd6emti/WEt3PQ'
  },
  {
    id: 'p22',
    name: 'Chinos',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 300,
    image: 'https://imgs.search.brave.com/myAUnvLOslTlVN045W_60coLcOaCsfR4-U1c5n5LpEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iYW5h/bmFjbHViLmNvLmlu/L2Nkbi9zaG9wL2Zp/bGVzL09saXZlR3Jl/ZW5CYWdneUZpdENo/aW5vc181LmpwZz9j/cm9wPWNlbnRlciZo/ZWlnaHQ9MTQ0MCZ2/PTE3NDI5ODkwNzUm/d2lkdGg9MTAwMA'
  },
  {
    id: 'p23',
    name: 'Shorts',
    gender: 'Men',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 300,
    image: 'https://imgs.search.brave.com/6Y_0OUU-ABLA7dvqPt6ylPlMTTFKaca46QO9dufIBe8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFxSk5yWmhkMUwu/anBn'
  },
  {
    id: 'p24',
    name: 'Track Pants',
    gender: 'Unisex',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 300,
    image: 'https://imgs.search.brave.com/3Y6XyMryRzJhfOwTLp_qWbEOe_4XS6sBiVmFsTS-PTM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFPR0oyeWNGNEwu/anBn'
  },
  {
    id: 'p25',
    name: 'Joggers',
    gender: 'Unisex',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 300,
    image: 'https://imgs.search.brave.com/jdjXjwmw_AenEq10r897LVeWQkmzqh5BLhGuhWPaNqE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/MjAyNS9KVUxZLzQv/M3FCY01hbk1fMjBi/ZTU3YzVhN2IxNGE2/NzkzYzA1MzUyMWZl/MjYwYjAuanBn'
  },
  {
    id: 'p26',
    name: 'Saree',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 250,
    image: 'https://imgs.search.brave.com/w6wspPoovphIVDe0C0CG6CjEgGIA-Gc4Dt6-6cAzZl8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvODcxNzkw/MTYvMGdhdnVfNTEy/LndlYnA_d2lkdGg9/MzYw'
  },
  {
    id: 'p27',
    name: 'Salwar',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 150,
    image: 'https://imgs.search.brave.com/4z0RzwzmNXYXU1GeWvzz6Lk6IHZUpwzsMoqaKOAhNCw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pdG9r/cmkuY29tL2Nkbi9z/aG9wL2ZpbGVzLzBR/OEEwMDkzXzFiOGE1/NDFiLWM4MjYtNDI1/NS05ZDU2LTU1Nzc1/MmEwMTQ4My5qcGc_/dj0xNzMyOTcxOTMz/JndpZHRoPTQ4MA'
  },
  {
    id: 'p28',
    name: 'Duppata',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 100,
    image: 'https://imgs.search.brave.com/AMaQ9Mltbiwvl62hSQ1CQAnGVTWMXSOWTRXcjy2dss0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ob3Vz/ZW9mZWxlZ2FuY2Uu/aW4vY2RuL3Nob3Av/ZmlsZXMvSU1HXzMy/ODkuanBnP3Y9MTcz/MzI0NDYyNCZ3aWR0/aD04MDA'
  },
  {
    id: 'p29',
    name: 'Lehenga',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 1000,
    image: 'https://imgs.search.brave.com/KQMEg7toklewanNcifPPTWOQ9gHILNbTgXqRGzwu0IE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/MjAyNS9PQ1RPQkVS/LzEvYXg1djdtdXdf/NDczYzcyNGM3MzBi/NDI2NzhiZGM5Y2Uy/MDlkNDljNzYuanBn'
  },
  {
    id: 'p30',
    name: 'Anarkali Suit',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 1000,
    image: 'https://imgs.search.brave.com/P1xXjcObeCCjrAwAGqcqArwAQTA6D1QY2IGa42MJqX4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YmliYS5pbi9kdy9p/bWFnZS92Mi9CS1FL/X1BSRC9vbi9kZW1h/bmR3YXJlLnN0YXRp/Yy8tL1NpdGVzLWJp/YmEtcHJvZHVjdC1j/YXRhbG9nL2RlZmF1/bHQvZHdhZDJiMjg1/Ni9pbWFnZXMvYXcy/NS9za2RtcmlnbDMx/MTMyYXcyNXJlZF81/LmpwZz9zdz0yNDIm/c2g9MzYzJnE9MTAw/JnN0cmlwPWZhbHNl'
  },
  {
    id: 'p31',
    name: 'Sharara Suit',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 1000,
    image: 'https://imgs.search.brave.com/_WpUyZd1sHU7lk1agwnBGbTPXACnOY_I5aXPfwGxph0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waW5r/cGh1bGthcmkuY29t/L2Nkbi9zaG9wL2Zp/bGVzL2NyZWFtX2dl/b3JnZXR0ZV9zaGFy/YXJhX3N1aXRfNDAw/eC5qcGc_dj0xNzU4/ODU2MzM3'
  },
  {
    id: 'p32',
    name: 'Patiala Suit',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 1000,
    image: 'https://imgs.search.brave.com/-1SCoc6cBtmIT6gc4sf1Bh76eJyIg9Gp2GQm5g4GlWA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY2JhemFhci5j/b20vaW1hZ2VzL0Js/dWUtSmFjcXVhcmQt/VG9wLU4tUGluay1Q/YXRpYWxhLVN1aXQt/U0xCUzAyMTExMTIw/LXUuanBn'
  },
  {
    id: 'p33',
    name: 'Plazzo',
    gender: 'Women',
    category: 'Readymade garments',
    sizes: ['28', '30', '32', '34', '36', '40'],
    price: 1000,
    image: 'https://imgs.search.brave.com/XiEUg6JUr31tRarM4ZXt08tf0VS95AiQRdgCmo2zdFc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE1bjM3cXZ6ZUwu/anBn'
  },
]

// Admin-friendly grouped exports
// Support multi-gender entries like 'Men, Women' by checking inclusion
export const men = items.filter(i => i.gender.split(',').map(g=>g.trim()).includes('Men'))
export const women = items.filter(i => i.gender.split(',').map(g=>g.trim()).includes('Women'))
export const kids = items.filter(i => i.gender === 'Kids')

export const byCategory = {
  'Readymade garments': items.filter(i => i.category === 'Readymade garments'),
  'School dress': items.filter(i => i.category === 'School dress'),
}

// Backwards-compatible flat list (used by the UI)
export const allProducts = items
export default allProducts
