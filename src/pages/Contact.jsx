import React from 'react'

const Contact = () => {
  const address = '1st Floor, Jagdamba Market, Near Durga mandir, Barbigha, Sheikhpura - 811101 (Bihar)'
  
  // **UX FIX**: This is the correct, working URL for a Google Maps search query
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    // Page background, min-h-screen ensures it fills the viewport
    <div className="bg-zinc-50 py-10 min-h-screen">
      <div className="container-max mx-auto px-4 sm:px-6">
        <section className="bg-white rounded-lg p-6 md:p-8 shadow-md">
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-6">Contact Us</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">Store Address</h2>
              <p className="text-zinc-700 mt-1 text-lg">
                {address}
              </p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-primary font-medium hover:text-primary/80 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                aria-label="Open address in Google Maps"
              >
                View on Google Maps
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">WhatsApp</h2>
              <p className="text-zinc-700 mt-1 text-lg">
                <a
                  href="https://wa.me/919022791121"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-medium hover:text-primary/80 hover:underline"
                  aria-label="Chat with us on WhatsApp at +91 9022791121"
                >
                  +91 9022791121
                </a>
                <span className="ml-2 text-zinc-500">(WhatsApp only)</span>
              </p>
            </div>
            {/* You could add more sections here like Phone or Email */}
            {/* <div>
              <h2 className="text-xl font-semibold text-zinc-900">Phone</h2>
              <p className="text-zinc-700 mt-1 text-lg">+91 12345 67890</p>
            </div>
            */}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact