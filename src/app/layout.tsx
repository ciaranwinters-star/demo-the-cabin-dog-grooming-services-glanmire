import type { Metadata } from "next"
import { Fraunces, Manrope } from "next/font/google"
import "./globals.css"
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" })

export const metadata: Metadata = {
  title: "Dog Grooming Glanmire | Tina's Professional Grooming Service",
  description: "Dog grooming in Glanmire, Co. Cork. Professional grooming your pup will love. Call 083 169 0066 to book. 4.8 stars.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: "The Cabin Dog Grooming Services Glanmire", description: "Dog grooming in Glanmire, Co. Cork. Professional grooming your pup will love. Call 083 169 0066 to book. 4.8 stars.", type: "website", images: [{ url: "https://demo-the-cabin-dog-grooming-services-glanmire.vercel.app/images/supplied_3.webp", width: 1200, height: 630 }] },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <header style={{ background: "#134D0A" }} className="text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3 min-w-0 flex-1"><img src="/images/logo.jpg" alt="The Cabin Dog Grooming Services Glanmire logo" className="h-10 w-10 md:h-11 md:w-11 shrink-0 rounded-full object-cover ring-2 ring-white/40" /><span className="text-base md:text-xl font-bold tracking-tight truncate md:whitespace-normal md:overflow-visible">The Cabin Dog Grooming Services Glanmire</span></a>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="/" className="font-medium text-sm" style={{ color: "#7FAF7A" }}>Home</a>
          <a href="#about" className="opacity-80 hover:opacity-100 font-medium text-sm transition">About</a>
          <a href="#services" className="opacity-80 hover:opacity-100 font-medium text-sm transition">Services</a>
          <a href="#gallery" className="opacity-80 hover:opacity-100 font-medium text-sm transition">Gallery</a>
          <a href="#contact" className="opacity-80 hover:opacity-100 font-medium text-sm transition">Contact</a>
            </nav>
            <a href="https://wa.me/353831690066?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" style={{ background: "#7FAF7A" }} className="text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition whitespace-nowrap">
              💬 WhatsApp
            </a>
          </div>
        </header>
        <main>{children}</main>
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur border-t border-gray-200">
          <div className="flex gap-3">
            <a href="https://wa.me/353831690066?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 rounded-xl font-bold text-white text-center shadow-lg" style={{ background: "#25D366" }}>💬 WhatsApp</a>
            <a href="tel:0831690066" className="flex-1 py-3.5 rounded-xl font-bold text-white text-center shadow-lg" style={{ background: "#7FAF7A" }}>📞 Call</a>
          </div>
        </div>
        <a href="https://wa.me/353831690066?text=Hi%2C%20I%27d%20like%20to%20book%20a%20grooming%20appointment%20for%20my%20dog" target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp" title="Message us on WhatsApp" className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl items-center justify-center text-white text-2xl hover:scale-110 transition-transform" style={{ background: "#25D366" }}>💬</a>
        <footer style={{ background: "#134D0A" }} className="text-white pt-14 pb-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-bold text-lg mb-2">The Cabin Dog Grooming Services Glanmire</p>
              <p className="opacity-70 text-sm leading-relaxed"><a href="https://www.google.com/maps/search/?api=1&query=Glanmire%2C%20Co.%20Cork" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 hover:underline">Glanmire, Co. Cork</a></p>
              <p className="opacity-70 text-sm mt-1"><a href="tel:0831690066" className="hover:opacity-100 hover:underline">083 169 0066</a></p>
              <div className="flex gap-4 mt-4 text-sm"><a href="https://www.facebook.com/TheCabinGlanmire/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition">Facebook →</a></div>
            </div>
            <div>
              <p className="font-semibold mb-3 text-sm uppercase tracking-wide opacity-90">Opening hours</p>
              <div className="space-y-1 text-sm max-w-xs"><div className="flex justify-between gap-8"><span className="opacity-60">Monday</span><span>9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Tuesday</span><span>9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Wednesday</span><span>9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Thursday</span><span>9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Friday</span><span>9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Saturday</span><span>9:00 AM – 6:00 PM</span></div><div className="flex justify-between gap-8"><span className="opacity-60">Sunday</span><span>Closed</span></div></div>
            </div>
            <div>
              <p className="font-semibold mb-3 text-sm uppercase tracking-wide opacity-90">Explore</p>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#about" className="opacity-80 hover:opacity-100">About</a>
                <a href="#services" className="opacity-80 hover:opacity-100">Services</a>
                <a href="#gallery" className="opacity-80 hover:opacity-100">Gallery</a>
                <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
                <a href="/privacy" className="opacity-80 hover:opacity-100">Privacy</a>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs opacity-60" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <span>&copy; {new Date().getFullYear()} The Cabin Dog Grooming Services Glanmire. All rights reserved.</span>
            <a href="https://builtbywinters.ie" target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Website by Built by Winters →</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
