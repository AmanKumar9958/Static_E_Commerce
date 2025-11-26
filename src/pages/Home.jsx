import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';

export default function Home() {
  // 1. Mock Data for the "Trending" section (since it was missing in your snippet)
  const trending = [
  { id: 1, name: "Urban Hoodie", category: "Men", price: 55, image: "...", sizes: ["S","M","L"], gender: "Men" },
  { id: 2, name: "Summer Hat", category: "Women", price: 25, image: "...", sizes: ["Free size"], gender: "Women" },
  { id: 3, name: "Running Shoes", category: "Sports", price: 85, image: "...", sizes: ["7","8","9"], gender: "Unisex" },
  { id: 4, name: "Leather Bag", category: "Accessories", price: 120, image: "...", sizes: ["One Size"], gender: "Unisex" },
];

  // 2. Mock handler for clicks
  const onProductClick = (product) => {
    console.log("Clicked product:", product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* --- Section 1: Hero --- */}
      <Reveal>
        <section className="relative h-[340px] md:h-[420px] flex items-center justify-center bg-black/80">
          <img
            src="/home_banner.png"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">The Fall Collection Is Here</h1>
            <p className="mb-6 text-lg md:text-xl">Discover timeless pieces designed for the modern wardrobe. Quality fabrics, modern designs.</p>
            <button className="cursor-pointer bg-[#E07A5F] hover:bg-[#d66a4a] text-white font-semibold px-6 py-2 rounded-full shadow-lg transition">Shop Now</button>
          </div>
        </section>
      </Reveal>

      {/* --- Section 2: Shop by Category --- */}
      <Reveal>
        <section className="max-w-6xl mx-auto py-10 px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow group">
                <img src="/men.png" alt="Modern Menswear" className="w-full h-40 object-cover group-hover:scale-105 transition bg-gray-100" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <span className="text-white font-semibold">Modern Menswear</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow group">
                <img src="/women.png" alt="Elegant Women's Fashion" className="w-full h-40 object-cover group-hover:scale-105 transition bg-gray-100" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <span className="text-white font-semibold">Elegant Women's Fashion</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow group">
                <img src="/kids.png" alt="Fun for Kids" className="w-full h-40 object-cover group-hover:scale-105 transition bg-gray-100" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <span className="text-white font-semibold">Fun for Kids</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow group">
                <img src="/school.png" alt="Back to School Essentials" className="w-full h-40 object-cover group-hover:scale-105 transition bg-gray-100" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <span className="text-white font-semibold">Back to School Essentials</span>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow group">
                <img src="/shoes.png" alt="Step in Style: Shoes" className="w-full h-40 object-cover group-hover:scale-105 transition bg-gray-100" />
                <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                  <span className="text-white font-semibold">Step in Style: Shoes</span>
                </div>
              </div>
            </div>
        </section>
      </Reveal>

      {/* --- Section 3: New Arrivals (Dynamic from Collection) --- */}
      <Reveal>
        <section className="max-w-6xl mx-auto py-10 px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Pick 4 different items from the collection */}
            {[{
              id: 'p1',
              name: 'School Shirt',
              category: 'School dress',
              price: 200,
              image: 'https://imgs.search.brave.com/Lf52mK6a62zhS2HQSYFH5Ci2kaYvXrdQ0ic9cb5lJGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMi8wMDQv/MzczL3NjaG9vbC1k/cmVzcy0zOTkuanBn',
            }, {
              id: 'p2',
              name: 'Men Slim Fit Shirt',
              category: 'Readymade garments',
              price: 250,
              image: 'https://imgs.search.brave.com/bc3x5jJBX3z9CF6AMjbYVFHc2ShPoG0UkDzUQue-_t8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbGlt/YWdlcy5tYWN5c2Fz/c2V0cy5jb20vaXMv/aW1hZ2UvTUNZL3By/b2R1Y3RzLzgvb3B0/aW1pemVkLzMxNDE2/ODc4X2ZweC50aWY_/cWx0PTgwLDAmcmVz/TW9kZT1zaGFycDIm/b3BfdXNtPTEuNzUs/MC4zLDIsMCZmbXQ9/anBlZyZ3aWQ9MzQy/JmhlaT00MTc',
            }, {
              id: 'p3',
              name: 'Cotton Kurti',
              category: 'Readymade garments',
              price: 300,
              image: 'https://imgs.search.brave.com/FQuzpgGmO4X4qQqWMITn42WkCqDyYZGhJMHD8moy_WI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFPcWRnNU9VU0wu/anBn',
            }, {
              id: 'p4',
              name: 'Blazer',
              category: 'Readymade garments',
              price: 700,
              image: 'https://imgs.search.brave.com/e3CAc55Dw7AK3HTfFXt0IZar7mxmCZHZr4Sx5DTmb0I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9BTkRST0lEL0Rl/ZmF1bHQvMjAyMy8x/Mi8zNzI0MDI1NjUv/QlQvVEgvSUovMTEw/MTY1NjUxL3Byb2R1/Y3QtanBlZy0yNTB4/MjUwLmpwZw',
            }].map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-3 rounded" />
                <div className="text-center">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.category}</div>
                  <div className="mt-1 font-bold">₹{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* --- Section 4: Split Image --- */}
      <Reveal>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center bg-white py-12 px-4">
          <div className="h-64 md:h-80 w-full">
            <img src="/fabrics.png" alt="Quality Fabrics" className="w-full h-full object-cover rounded-xl shadow" />
          </div>
          <div className="p-6 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Quality Fabrics, Modern Designs</h3>
            <p className="mb-6 text-gray-700">We believe that great style begins with exceptional quality. Our collections are crafted from the finest materials with a focus on durability, comfort, and timeless design. We are committed to creating pieces you'll love and wear for seasons to come.</p>
            <Link to="/about" className="text-blue-600 font-semibold hover:underline">Learn More About Us</Link>
          </div>
        </section>
      </Reveal>

      {/* --- Section 5: Trending Now (Dynamic from Collection) --- */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[{
            id: 'p5',
            name: 'Kids Formal Trousers',
            category: 'Readymade garments',
            price: 200,
            image: 'https://imgs.search.brave.com/zk5NkuA1NOErs7sKpo9cuAXj3753b9nQkre1c4fCPTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZmNnbGNkbi5jb20v/YnJhaW5iZWVzL2lt/YWdlcy9wcm9kdWN0/cy8zMDB4MzY0LzIw/MTc2NDk3YS53ZWJw',
          }, {
            id: 'p6',
            name: 'Formal Pant',
            category: 'Readymade garments',
            price: 200,
            image: 'https://imgs.search.brave.com/BCJsUR-qcUfOpYpEUk4QBzaPBcsfsHEW_lkMKnewWOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkOUp1QzNVQ0wu/anBn',
          }, {
            id: 'p9',
            name: 'Jeans',
            category: 'Readymade garments',
            price: 350,
            image: 'https://imgs.search.brave.com/p9atc5umMYilm0TrI2LeLD_sa6zoRHF8jimsmcmyLQw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zbGlt/YWdlcy5tYWN5c2Fz/c2V0cy5jb20vaXMv/aW1hZ2UvTUNZL3By/b2R1Y3RzLzUvb3B0/aW1pemVkLzk4MzEw/NzVfZnB4LnRpZj9x/bHQ9ODAsMCZyZXNN/b2RlPXNoYXJwMiZv/cF91c209MS43NSww/LjMsMiwwJmZtdD1q/cGVnJndpZD0zNDIm/aGVpPTQxNw',
          }, {
            id: 'p10',
            name: 'Jeans',
            category: 'Readymade garments',
            price: 250,
            image: 'https://imgs.search.brave.com/knQAMwttidirZMW6dZnkmmfqa79jzrr51K9ZdE9t5e4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZS11cC10d28td29t/ZW4tbGVncy1qZWFu/cy1wZW9wbGUtZmFz/aGlvbi1zdHlsZS1j/bG90aGluZy1jb25j/ZXB0LTYxNDY1NDU3/LmpwZw',
          }].map(item => (
            <Reveal key={item.id} direction="up">
              <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-3 rounded" />
                <div className="text-center">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.category}</div>
                  <div className="mt-1 font-bold">₹{item.price}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- Section 6: Promo Banner --- */}
      <section className="max-w-6xl mx-auto py-14 px-4">
        <Reveal direction="up">
          <div className="rounded-lg bg-[#3071ff] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold">Festive Styles Are In ✨</h3>
              <p className="mt-1 opacity-90">Fresh arrivals for every occasion. Limited stock available.</p>
            </div>
            <div>
              <Link
                to="/collection"
                className="inline-block bg-white text-indigo-900 px-5 py-2 rounded-md font-bold hover:bg-[#E07A5F] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}