import React from 'react'

const About = () => {
  return (
    <div className="container-max mx-auto px-4 sm:px-6 py-10">
      <section className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">About Us</h1>
        <div className="space-y-4 text-slate-700 text-base md:text-lg">
          <p>
            Welcome to <span className="font-semibold text-slate-900">SKS Mart - Barbigha</span>. We are a local apparel store offering
            a curated selection of quality garments for Men, Women, and Kids. From everyday
            essentials to school uniforms and readymade garments, our goal is to bring you
            comfortable styles at fair prices.
          </p>
          <p>
            We believe shopping should be simple, friendly, and trustworthy. Our small team is
            committed to helpful service and products you can rely on.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-200">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Quality First</h3>
            <p className="text-slate-600">Well-made fabrics and finishing you can feel.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Fair Pricing</h3>
            <p className="text-slate-600">Clear, honest prices with good value.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">Friendly Service</h3>
            <p className="text-slate-600">A helpful, no-pressure in-store experience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About