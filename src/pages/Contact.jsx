import React from 'react'

const Contact = () => {
  const address = '1st Floor, Jagdamba Market, Near Durga mandir, Barbigha, Sheikhpura - 811101 (Bihar)'
  
  // **UX FIX**: This is the correct, working URL for a Google Maps search query
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    // **UI/UX CHANGE:** Changed from bg-zinc-50 to bg-page (light blue tint)
    <div className="bg-page py-10 min-h-screen">
      <div className="container-max mx-auto px-4 sm:px-6">
        <section className="bg-white rounded-lg p-6 md:p-8 shadow-lg"> {/* Stronger shadow */}
          {/* **UI/UX CHANGE:** Using theme text colors */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-heading mb-6">Contact Us</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-heading">Store Address</h2>
              <p className="text-body mt-1 text-lg">
                {address}
              </p>
              {/* **UI/UX CHANGE:** Styled link to match blue theme */}
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-primary font-medium hover:text-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md border border-primary p-2 hover:bg-primary/10 transition-all duration-200"
                aria-label="Open address in Google Maps"
              >
                View on Google Maps
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-heading">WhatsApp</h2>
              <p className="text-body mt-1 text-lg">
                {/* **UI/UX CHANGE:** Styled link to match blue theme */}
                <a
                  href="https://wa.me/919022791121"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-medium hover:text-primary/80 hover:underline"
                  aria-label="Chat with us on WhatsApp at +91 9022791121"
                >
                  +91 9022791121
                </a>
                <span className="ml-2 text-body/80">(WhatsApp only)</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact