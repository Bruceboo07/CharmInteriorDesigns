import React from 'react';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const BRAND = 'Charm Interior Designs';
const LOCATION = 'Bangalore';
const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'; // ← replace with your Formspree ID
const COPPER = '#b87333';

const portfolio = [
  {
    id: 1,
    title: 'Minimal Copper Loft',
    tags: ['Living Room', 'Renovation'],
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=60',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Monochrome Kitchen Upgrade',
    tags: ['Kitchen', 'Remodel'],
    img: 'https://images.unsplash.com/photo-1600585154348-9d6f2b8f2a7c?auto=format&fit=crop&w=1600&q=60',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Serene Bedroom',
    tags: ['Bedroom', 'Design'],
    img: 'https://images.unsplash.com/photo-1505691723518-36a1e28b6bff?auto=format&fit=crop&w=1600&q=60',
    status: 'In Progress',
  },
];

const liveProjects = [
  {
    id: 'LP1',
    title: 'Cozy Cafe Retrofit',
    progress: 45,
    updates: [
      { date: '2025-11-01', text: 'Design approved. Ordering materials.' },
      { date: '2025-11-07', text: 'Demolition complete. Plumbing in progress.' },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Anita Rao',
    city: 'Bangalore',
    text: 'Charm transformed our flat — elegant, timely and within budget. Highly recommend!',
  },
  {
    id: 2,
    name: 'Rohan Kapoor',
    city: 'Bangalore',
    text: 'Professional team, excellent communication. Love the copper accents!',
  },
];

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">{children}</h2>
);

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-black text-gray-100 antialiased">
        <Helmet>
          <title>{BRAND} — Interior Design in {LOCATION}</title>
          <meta name="description" content={`${BRAND} — premium interior design, renovation, and project updates in ${LOCATION}. View portfolios, progress updates and client testimonials.`} />
          <meta name="keywords" content="interior design bangalore, interior designer, home renovation, portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={`${BRAND} — Interior Design in ${LOCATION}`} />
          <meta property="og:description" content={`View our projects, live updates, and client testimonials.`} />
        </Helmet>

        <nav className="w-full py-4 px-6 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[rgba(184,115,51,0.12)]" style={{border: `1px solid ${COPPER}`}}>
              <span style={{color: COPPER, fontWeight: 700}}>CI</span>
            </div>
            <div>
              <div className="font-bold text-lg">{BRAND}</div>
              <div className="text-xs text-gray-400">{LOCATION}</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#projects" className="hover:text-white">Live Projects</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="px-3 py-2 rounded bg-[rgba(184,115,51,0.12)]" style={{border:`1px solid ${COPPER}`}}>Menu</button>
          </div>
        </nav>

        <header className="px-6 py-12 md:py-24 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1">
            <div className="mb-4 text-sm text-gray-400 uppercase tracking-wider">Premium Interiors • {LOCATION}</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Transforming spaces into <span style={{color: COPPER}}>memorable experiences</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-prose">We design modern, functional and beautiful interiors with a focus on craftsmanship and timeless materials. Follow project updates and browse our carefully curated portfolio.</p>

            <div className="mt-8 flex gap-4">
              <a href="#portfolio" className="px-6 py-3 rounded-full font-semibold border" style={{borderColor: COPPER}}>View Portfolio</a>
              <a href="#contact" className="px-6 py-3 rounded-full font-semibold bg-[rgba(184,115,51,0.12)]" style={{border:`1px solid ${COPPER}`}}>Request Quote</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 w-full md:w-3/4">
              {portfolio.slice(0,3).map(p => (
                <div key={p.id} className="text-sm">
                  <img src={p.img} alt={p.title} className="w-full h-24 object-cover rounded shadow" />
                  <div className="mt-2">{p.title}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }} className="flex-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{border: `1px solid rgba(255,255,255,0.04)`}}>
              <img src={portfolio[0].img} alt="Showcase" className="w-full h-72 object-cover" />
              <div className="absolute left-4 bottom-4 bg-black/60 px-4 py-2 rounded" style={{border:`1px solid ${COPPER}`}}>
                <div className="text-sm text-gray-200 font-semibold">{portfolio[0].title}</div>
                <div className="text-xs text-gray-400">{portfolio[0].tags.join(' • ')}</div>
              </div>
            </div>

            <motion.div whileHover={{ y: -6 }} className="mt-6 p-4 rounded-lg bg-[rgba(255,255,255,0.02)] border" style={{borderColor:'rgba(255,255,255,0.04)'}}>
              <div className="text-sm text-gray-300">Latest Project Update</div>
              <div className="mt-2 font-medium">{liveProjects[0].title} <span className="text-xs text-gray-400">• {liveProjects[0].progress}%</span></div>
              <div className="mt-2 text-xs text-gray-400">{liveProjects[0].updates[ liveProjects[0].updates.length -1 ].text}</div>
            </motion.div>
          </motion.div>
        </header>

        <main className="max-w-6xl mx-auto px-6 pb-20">
          <section className="py-10">
            <SectionTitle>About {BRAND}</SectionTitle>
            <div className="md:flex gap-8 items-start">
              <motion.div className="md:w-1/2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <p className="text-gray-300 leading-relaxed">{BRAND} is a Bangalore-based interior design studio specializing in residential and boutique commercial spaces. We blend modern minimalism with warm materials — think black backdrops, brass & copper accents, and handcrafted finishes.</p>
                <ul className="mt-4 text-sm text-gray-400 list-disc pl-5">
                  <li>Free initial consultation</li>
                  <li>Transparent project tracker and updates</li>
                  <li>Post-install maintenance and support</li>
                </ul>
              </motion.div>

              <motion.div className="md:w-1/2 mt-6 md:mt-0 grid grid-cols-2 gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <img src={portfolio[1].img} alt="about-1" className="w-full h-36 object-cover rounded" />
                <img src={portfolio[2].img} alt="about-2" className="w-full h-36 object-cover rounded" />
                <div className="col-span-2 p-4 rounded" style={{border:`1px solid rgba(255,255,255,0.03)`}}>
                  <div className="text-sm text-gray-400">Design Philosophy</div>
                  <div className="text-gray-200 font-medium">Function-led beauty: spaces that breathe, work and last.</div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="portfolio" className="py-10">
            <SectionTitle>Portfolio</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map(p => (
                <motion.article key={p.id} whileHover={{ scale: 1.02 }} className="rounded overflow-hidden shadow-lg bg-[rgba(255,255,255,0.02)] border" style={{borderColor:'rgba(255,255,255,0.03)'}}>
                  <div className="relative">
                    <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
                    <div className="absolute left-3 top-3 px-2 py-1 rounded text-xs font-semibold" style={{background:'rgba(0,0,0,0.5)', border:`1px solid ${COPPER}`, color: COPPER}}>{p.status}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <div className="text-xs text-gray-400">{p.tags.join(' • ')}</div>
                    <div className="mt-3 flex items-center gap-2">
                      <a href="#contact" className="text-sm font-medium" style={{color:COPPER}}>Enquire</a>
                      <a href="#" className="ml-auto text-xs text-gray-400">View case study</a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="projects" className="py-10">
            <SectionTitle>Live Projects & Updates</SectionTitle>
            <div className="space-y-6">
              {liveProjects.map(lp => (
                <motion.div key={lp.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 rounded border bg-[rgba(255,255,255,0.01)]">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="font-semibold">{lp.title}</div>
                      <div className="text-xs text-gray-400">Progress: {lp.progress}%</div>
                    </div>
                    <div className="w-32 bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div style={{width: `${lp.progress}%`, background: COPPER, height: '100%'}} />
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-300">
                    {lp.updates.map(u => (
                      <div key={u.date} className="p-2 rounded bg-[rgba(255,255,255,0.01)] border" style={{borderColor:'rgba(255,255,255,0.02)'}}>
                        <div className="text-xs text-gray-400">{u.date}</div>
                        <div className="mt-1">{u.text}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-400">Tip: keep this page updated weekly. It builds trust and helps SEO for local project queries.</div>
          </section>

          <section id="testimonials" className="py-10">
            <SectionTitle>Client Testimonials</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map(t => (
                <motion.blockquote key={t.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-4 rounded border bg-[rgba(255,255,255,0.01)]">
                  <div className="text-gray-300">"{t.text}"</div>
                  <div className="mt-3 font-semibold">{t.name} <span className="text-xs text-gray-400">• {t.city}</span></div>
                </motion.blockquote>
              ))}
            </div>
          </section>

          <section id="contact" className="py-10">
            <SectionTitle>Contact & Request Quote</SectionTitle>
            <div className="md:flex gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-300">Want a free consultation or a quote? Send a message and we’ll get back in 24–48 hours. For quicker replies click the WhatsApp button.</p>

                <form action={FORM_ENDPOINT} method="POST" className="mt-6 grid grid-cols-1 gap-3">
                  <input name="name" required placeholder="Your name" className="p-3 rounded bg-[rgba(255,255,255,0.02)] border" />
                  <input name="email" type="email" required placeholder="Email" className="p-3 rounded bg-[rgba(255,255,255,0.02)] border" />
                  <input name="phone" placeholder="Phone" className="p-3 rounded bg-[rgba(255,255,255,0.02)] border" />
                  <textarea name="message" placeholder="Project details" rows={4} className="p-3 rounded bg-[rgba(255,255,255,0.02)] border" />
                  <button type="submit" className="px-4 py-3 rounded font-semibold" style={{background: COPPER}}>Send Message</button>
                </form>

                <div className="mt-6 text-sm text-gray-400">Or message on WhatsApp: <a href="https://wa.me/919999999999" className="text-white font-medium">+91 99xxxx xxxx</a></div>
              </div>

              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="p-4 rounded border bg-[rgba(255,255,255,0.01)]">
                  <div className="font-semibold">Maintenance & Support</div>
                  <div className="text-sm text-gray-400 mt-2">We offer post-installation maintenance, bug fixes for built-in systems, and seasonal styling updates. Add a maintenance plan to your quote request.</div>

                  <div className="mt-4">
                    <div className="text-xs text-gray-400">How we handle bugs & fixes:</div>
                    <ol className="list-decimal list-inside text-sm text-gray-300">
                      <li>Log issue and priority</li>
                      <li>Provide ETA and temporary workaround</li>
                      <li>Complete fix and document</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded border bg-[rgba(255,255,255,0.01)]">
                  <div className="text-sm text-gray-400">Local SEO quick wins</div>
                  <ul className="text-sm text-gray-300 list-disc pl-5 mt-2">
                    <li>Claim Google Business Profile</li>
                    <li>Use location keywords in headings</li>
                    <li>Post weekly project updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-900 py-6 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} {BRAND} — {LOCATION}</div>
            <div className="text-sm text-gray-400">Built with care • Updates: weekly</div>
          </div>
        </footer>

      </div>
    </HelmetProvider>
  );
}
