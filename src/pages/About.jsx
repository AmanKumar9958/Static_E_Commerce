import React from 'react'

const About = () => {
  return (
    // **UI/UX CHANGE:** Changed from bg-zinc-50 to bg-page (light blue tint)
    <div className="bg-page py-10 min-h-screen">
      <div className="container-max mx-auto px-4 sm:px-6">
        <section className="bg-white rounded-lg p-6 md:p-8 shadow-lg"> {/* Stronger shadow */}
          {/* **UI/UX CHANGE:** Using theme text colors */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-heading mb-6">About Us</h1>
          <div className="space-y-4 text-body text-base md:text-lg">
            <p>
              Welcome to <span className="font-semibold text-heading">SKS Mart - Barbigha</span>. We are a local apparel store offering
              a curated selection of quality garments for Men, Women, and Kids. From everyday
              essentials to school uniforms and readymade garments, our goal is to bring you
              comfortable styles at fair prices.
            </p>
            <p>
              We believe shopping should be simple, friendly, and trustworthy. Our small team is
              committed to helpful service and products you can rely on.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-6 border-t border-primary/20">
            {/* Feature 1 */}
            {/* **UI/UX CHANGE:** Using bg-primary/10 for a subtle blue tint */}
            <div className="p-4 bg-primary/10 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-lg text-heading mb-2">Quality First</h3>
              <p className="text-body">Well-made fabrics and finishing you can feel.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-4 bg-primary/10 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75a2.25 2.25 0 01-2.25 2.25H10.5a2.25 2.25 0 01-2.25-2.25V6m1.5-1.5H15a1.5 1.5 0 011.5 1.5v1.5A1.5 1.5 0 0115 9h-1.5a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5zM10.5 6a2.25 2.25 0 00-2.25 2.25H7.5A2.25 2.25 0 005.25 6v.75a2.25 2.25 0 002.25 2.25h.75A2.25 2.25 0 0010.5 6zM13.5 12a2.25 2.25 0 00-2.25 2.25H9.75A2.25 2.25 0 007.5 12v.75a2.25 2.25 0 002.25 2.25h.75a2.25 2.25 0 002.25-2.25V12a2.25 2.25 0 00-2.25-2.25zM13.5 12a2.25 2.25 0 012.25 2.25h1.5a2.25 2.25 0 012.25-2.25v.75a2.25 2.25 0 01-2.25 2.25h-.75a2.25 2.25 0 01-2.25-2.25V12z" />
              </svg>
              <h3 className="font-semibold text-lg text-heading mb-2">Fair Pricing</h3>
              <p className="text-body">Clear, honest prices with good value.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-4 bg-primary/10 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 00-3.162-3.898m2.404 4.802A9.094 9.094 0 0018 18.72m-2.404-4.802l.15-.15m-2.554 4.952a9.094 9.094 0 01-3.162-3.898m-2.404 4.802A9.094 9.094 0 016 18.72m2.404-4.802l-.15-.15m2.554 4.952a9.094 9.094 0 003.162-3.898M12 6.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" />
              </svg>
              <h3 className="font-semibold text-lg text-heading mb-2">Friendly Service</h3>
              <p className="text-body">A helpful, no-pressure in-store experience.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About