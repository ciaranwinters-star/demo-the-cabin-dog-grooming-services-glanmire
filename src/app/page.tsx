import ContactForm from "./ContactForm"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#134D0A" }} className="text-white relative flex items-end md:items-center overflow-hidden min-h-[78svh] md:min-h-[85vh]">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/supplied_1.webp" />
          <img src="/images/supplied_3.webp" alt="" aria-hidden="true" fetchPriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover object-center" />
        </picture>
        <div className="absolute inset-0 md:hidden" style={{ background: "linear-gradient(0deg, rgba(13,17,22,0.92) 0%, rgba(13,17,22,0.72) 32%, rgba(13,17,22,0.18) 68%, rgba(13,17,22,0.05) 100%)" }} />
        <div className="absolute inset-0 hidden md:block" style={{ background: "linear-gradient(90deg, rgba(13,17,22,0.86) 0%, rgba(13,17,22,0.64) 38%, rgba(13,17,22,0.30) 70%, rgba(13,17,22,0.10) 100%)" }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-4 pb-14 pt-28 md:py-24 w-full animate-fade-in-up flex flex-col">
          <div className="order-1 md:order-4">
          <a href="https://search.google.com/local/reviews?placeid=ChIJlV1ozHmbREgR_d-QcLeKmZE" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-white bg-opacity-15 backdrop-blur-sm rounded-full px-5 py-3 text-sm hover:bg-opacity-25 transition">
            <span className="text-yellow-300 text-lg">★</span>
            <span className="font-bold text-base">4.8</span>
            <span className="opacity-90">27 reviews on Google</span>
            <span className="opacity-70">→</span>
          </a>
          </div>
          <h1 className="order-2 md:order-1 text-[2.1rem] md:text-6xl font-bold mb-4 md:mb-6 leading-[1.08] md:leading-[1.05] tracking-tight max-w-2xl [text-wrap:balance]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>Tina's Dog Grooming in Glanmire, Co. Cork</h1>
          <p className="order-3 md:order-2 text-lg md:text-xl mb-8 md:mb-10 opacity-95 max-w-xl leading-relaxed [text-wrap:balance]" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>Your pup will love their paw days as much as you'll love the results.</p>
          <div className="order-4 md:order-3 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="https://wa.me/353831690066?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" style={{ background: "#7FAF7A" }} className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-2xl inline-flex items-center justify-center gap-2">
              💬 WhatsApp Us
            </a>
            <a href="tel:0831690066" className="hidden sm:inline-flex border-2 border-white/70 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all items-center justify-center gap-2">
              📞 083 169 0066
            </a>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">⭐ 4.8 (27 reviews)</div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium"><a href="https://www.google.com/maps/search/?api=1&query=Inse%20Ratha%2C%20Brooklodge%20East%2C%20Glanmire%2C%20Co.%20Cork%2C%20T45%20PN70%2C%20Ireland" target="_blank" rel="noopener noreferrer" className="hover:underline">📍 Glanmire, Co. Cork</a></div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium"><a href="tel:0831690066" className="hover:underline">📞 083 169 0066</a></div>
        <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">🕐 Today: 9:00 AM – 6:00 PM</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 scroll-mt-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 [text-wrap:balance]" style={{ color: "#134D0A" }}>About The Cabin Dog Grooming Services Glanmire</h2>
          <p className="text-lg text-gray-600 leading-relaxed [text-wrap:balance]">Tina's been grooming dogs in Glanmire for years, and it shows in how your dog lights up when they hear they're going in. You'll find her at Inse Ratha, Brooklodge East — she takes a real personal touch with every pup that walks through the door, and owners come back because they trust her completely. She's here Monday to Saturday, 9 AM to 6 PM, ready to give your dog the care they deserve.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#134D0A" }}>What we offer</h2>
          <p className="text-center text-gray-500 mb-12">Built for Glanmire, Co. Cork — clear, simple, dependable.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#7FAF7A" }}>
          <div className="text-3xl mb-4">🛁</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#134D0A" }}>Full Groom</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Complete wash, dry, and clip tailored to your dog's breed and coat.</p>
          <a href="https://wa.me/353831690066?text=Hi%20The%20Cabin%20Dog%20Grooming%20Services%20Glanmire%2C%20I%27d%20like%20to%20enquire%20about%20your%20Full%20Groom%20service." target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#7FAF7A" }}>💬 Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#7FAF7A" }}>
          <div className="text-3xl mb-4">🐾</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#134D0A" }}>Bath & Tidy</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">A thorough wash and tidy-up to keep your pup looking smart between full grooms.</p>
          <a href="https://wa.me/353831690066?text=Hi%20The%20Cabin%20Dog%20Grooming%20Services%20Glanmire%2C%20I%27d%20like%20to%20enquire%20about%20your%20Bath%20%26%20Tidy%20service." target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#7FAF7A" }}>💬 Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#7FAF7A" }}>
          <div className="text-3xl mb-4">✂️</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#134D0A" }}>Nail Trim & Paw Care</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Keep those paws healthy and comfortable with a professional trim.</p>
          <a href="https://wa.me/353831690066?text=Hi%20The%20Cabin%20Dog%20Grooming%20Services%20Glanmire%2C%20I%27d%20like%20to%20enquire%20about%20your%20Nail%20Trim%20%26%20Paw%20Care%20service." target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#7FAF7A" }}>💬 Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#7FAF7A" }}>
          <div className="text-3xl mb-4">⭐</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#134D0A" }}>Breed-Specific Grooming</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Grooming shaped to your dog's breed needs and coat type.</p>
          <a href="https://wa.me/353831690066?text=Hi%20The%20Cabin%20Dog%20Grooming%20Services%20Glanmire%2C%20I%27d%20like%20to%20enquire%20about%20your%20Breed-Specific%20Grooming%20service." target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#7FAF7A" }}>💬 Enquire about this →</a>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 border-t-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ borderColor: "#7FAF7A" }}>
          <div className="text-3xl mb-4">🐶</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#134D0A" }}>Hand-Stripping & Show Prep</h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">Professional preparation for show dogs or special coat work.</p>
          <a href="https://wa.me/353831690066?text=Hi%20The%20Cabin%20Dog%20Grooming%20Services%20Glanmire%2C%20I%27d%20like%20to%20enquire%20about%20your%20Hand-Stripping%20%26%20Show%20Prep%20service." target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: "#7FAF7A" }}>💬 Enquire about this →</a>
        </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: "#134D0A" }}>A look at our work</h2>
          <p className="text-center text-gray-500 mb-12">Recent photos from Glanmire, Co. Cork.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <figure>
          <img src="/images/supplied_1.webp" alt="Fluffy and fresh after grooming" loading="lazy" className="rounded-2xl object-cover object-center w-full aspect-[4/3] shadow-md hover:shadow-xl transition-shadow" />
          <figcaption className="mt-2 text-sm text-gray-500">Fluffy and fresh after grooming</figcaption>
        </figure>
        <figure>
          <img src="/images/supplied_2.webp" alt="Professional care, tail-wagging happy" loading="lazy" className="rounded-2xl object-cover object-center w-full aspect-[4/3] shadow-md hover:shadow-xl transition-shadow" />
          <figcaption className="mt-2 text-sm text-gray-500">Professional care, tail-wagging happy</figcaption>
        </figure>
          </div>
        </div>
      </section>
      {/* Real Google reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#134D0A" }}>What our customers say</h2>
          <p className="text-center text-gray-500 mb-12">Real reviews, straight from Google.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Tina is the best! My dogs love her and trust her and I feel so safe leaving them with her for their sPaw days. When I mention they’re going to see Tina, or we’re going to the groomer, I’ve got happy w&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#7FAF7A" }}>— Erica Sefastsson</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;I have brought Rosie since her first grooming session she's nearly 4 now. She loves to see Tina who has always been both professional and friendly she gives out great advice in relation to Rosies heal&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#7FAF7A" }}>— Therese Darton gf</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-7 flex flex-col">
          <div className="text-yellow-400 text-xl mb-3 tracking-wider">★★★★★</div>
          <p className="text-gray-700 leading-relaxed mb-5 flex-grow">&ldquo;Teddy and Willow absolutely love going to Tina. When I tell them they're going in car, they are so excited and waggy tails .Tina is so professional and compassionate with my dogs I never have any worr&rdquo;</p>
          <p className="font-semibold text-sm" style={{ color: "#7FAF7A" }}>— Catherine Foley</p>
        </div>
          </div>
        <div className="text-center mt-10">
          <a href="https://search.google.com/local/reviews?placeid=ChIJlV1ozHmbREgR_d-QcLeKmZE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:underline" style={{ color: "#134D0A" }}>
            Read all 27 reviews on Google
            <span aria-hidden>→</span>
          </a>
        </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 scroll-mt-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#134D0A" }}>Questions we get asked</h2>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>How do I book my dog in?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#7FAF7A" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">Just ring Tina on 083 169 0066 — she's happy to chat through what your pup needs and get you booked in. You can call or WhatsApp, whatever suits you best.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>Where exactly are you in Glanmire?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#7FAF7A" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">We're at Inse Ratha, Brooklodge East, Glanmire, Co. Cork, T45 PN70. Easy to find and plenty of space to park when you drop off or pick up.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>What are your opening hours?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#7FAF7A" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">We're open Monday to Saturday, 9 AM to 6 PM. Sunday's our day off. Ring ahead on 083 169 0066 to book your pup's slot.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>Will my dog be nervous with a new groomer?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#7FAF7A" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">Tina has a real way with dogs — customers tell us their pups get excited the moment they hear they're coming in. She's patient, professional, and takes time to make sure every dog feels safe and cared for.</p>
          </details>
          <details className="group border-b border-gray-200 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
              <span>Can I get advice on my dog's coat or skin?</span>
              <span className="ml-4 transition-transform group-open:rotate-45 text-2xl leading-none" style={{ color: "#7FAF7A" }}>+</span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">Absolutely. Tina's happy to give you proper advice on keeping your dog's coat and skin healthy between grooms. Just ask when you call or when you bring your pup in.</p>
          </details>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-20 px-4 scroll-mt-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#134D0A" }}>Get in touch</h2>
          <p className="text-center text-gray-500 mb-12">Book in or ask a question — we come straight back to you.</p>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ContactForm />
            <div className="space-y-5">
              <a href="https://www.google.com/maps/search/?api=1&query=Inse%20Ratha%2C%20Brooklodge%20East%2C%20Glanmire%2C%20Co.%20Cork%2C%20T45%20PN70%2C%20Ireland" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group"><span className="text-xl">📍</span><span><span className="block font-semibold" style={{ color: "#134D0A" }}>Find us</span><span className="text-gray-600 text-sm group-hover:underline">Inse Ratha, Brooklodge East, Glanmire, Co. Cork, T45 PN70, Ireland</span></span></a>
              <a href="tel:0831690066" className="flex items-start gap-3 group"><span className="text-xl">📞</span><span><span className="block font-semibold" style={{ color: "#134D0A" }}>Call us</span><span className="text-gray-600 text-sm group-hover:underline">083 169 0066</span></span></a>
              <div><p className="font-semibold mb-2" style={{ color: "#134D0A" }}>Opening hours</p><div className="rounded-xl border border-gray-100 p-4 text-sm"><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Monday</span><span className="font-medium text-gray-800">9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Tuesday</span><span className="font-medium text-gray-800">9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Wednesday</span><span className="font-medium text-gray-800">9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Thursday</span><span className="font-medium text-gray-800">9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Friday</span><span className="font-medium text-gray-800">9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Saturday</span><span className="font-medium text-gray-800">9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8 py-1.5 border-b border-gray-100 last:border-0"><span className="text-gray-500">Sunday</span><span className="font-medium text-gray-800">Closed</span></div></div></div>
              <a href="https://www.facebook.com/TheCabinGlanmire/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-bold text-white hover:opacity-90 transition" style={{ background: "#1877F2" }}>Follow us on Facebook →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Where to find us */}
      <section className="py-20 px-4" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 [text-wrap:balance]" style={{ color: "#134D0A" }}>Where to find us</h2>
          <p className="text-center text-gray-500 mb-10">Inse Ratha, Brooklodge East, Glanmire, Co. Cork, T45 PN70, Ireland</p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe src="https://maps.google.com/maps?q=Inse%20Ratha%2C%20Brooklodge%20East%2C%20Glanmire%2C%20Co.%20Cork%2C%20T45%20PN70%2C%20Ireland&z=15&output=embed" width="100%" height="420" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
          </div>
          <div className="text-center mt-6">
            <a href="https://www.google.com/maps/search/?api=1&query=Inse%20Ratha%2C%20Brooklodge%20East%2C%20Glanmire%2C%20Co.%20Cork%2C%20T45%20PN70%2C%20Ireland" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:underline" style={{ color: "#134D0A" }}>
              Get directions on Google Maps
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#7FAF7A" }} className="py-20 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ring Tina on 083 169 0066 to book your pup's appointment.</h2>
          <p className="text-lg mb-10 opacity-95">Tap WhatsApp and we'll get straight back to you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/353831690066?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" className="bg-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl inline-flex items-center justify-center gap-2" style={{ color: "#7FAF7A" }}>
              💬 WhatsApp Us
            </a>
            <a href="tel:0831690066" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition">📞 083 169 0066</a>
          </div>
        </div>
      </section>
    </>
  )
}
