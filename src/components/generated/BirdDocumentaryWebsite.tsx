import { useState } from "react";
const episodes = [{
  "title": "The Maleo: Nature's Underground Incubator",
  "category": "Amazing adaptations",
  "duration": "5 min",
  "image": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85",
  "copy": "Meet the Indonesian bird that uses natural earth heat to incubate its eggs."
}, {
  "title": "Owls: Hunters of the Silent Night",
  "category": "Night wildlife",
  "duration": "8 min",
  "image": "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=85",
  "copy": "Discover silent flight, extraordinary hearing, and the secrets of nocturnal hunting."
}, {
  "title": "The Secretarybird: Savanna Stalker",
  "category": "Wild encounters",
  "duration": "7 min",
  "image": "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=1000&q=85",
  "copy": "A long-legged raptor with a fascinating, ground-based hunting style."
}, {
  "title": "The Harpy Eagle: Rainforest Titan",
  "category": "Wild encounters",
  "duration": "8 min",
  "image": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1000&q=85",
  "copy": "Explore the powerful forest eagle and its life high in the canopy."
}, {
  "title": "Peregrine Falcon: The Fastest Hunter",
  "category": "Wild encounters",
  "duration": "7 min",
  "image": "https://images.unsplash.com/photo-1501706362039-c6e80948f4a7?auto=format&fit=crop&w=1000&q=85",
  "copy": "Follow a falcon's high-speed stoop and precision aerial pursuit."
}, {
  "title": "Hummingbirds: Tiny Flight Machines",
  "category": "Amazing adaptations",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85",
  "copy": "See how rapid wingbeats, hovering, and energy-rich nectar fuel tiny flyers."
}, {
  "title": "Albatross: Wings Across the Ocean",
  "category": "Amazing adaptations",
  "duration": "8 min",
  "image": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85",
  "copy": "Travel with ocean wanderers that glide for hours above rolling seas."
}, {
  "title": "The Shoebill: Swamp Giant",
  "category": "Wild encounters",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=85",
  "copy": "Enter the papyrus wetlands and meet the still, imposing shoebill."
}, {
  "title": "Ravens: The Brilliant Tricksters",
  "category": "Amazing adaptations",
  "duration": "7 min",
  "image": "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=1000&q=85",
  "copy": "Uncover clever problem-solving, memory, and social behavior in ravens."
}, {
  "title": "Flamingos: Life in the Pink Lagoon",
  "category": "Amazing adaptations",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1000&q=85",
  "copy": "Discover filter-feeding, flock life, and the pigments behind their color."
}, {
  "title": "The Cassowary: Rainforest Guardian",
  "category": "Wild encounters",
  "duration": "7 min",
  "image": "https://images.unsplash.com/photo-1501706362039-c6e80948f4a7?auto=format&fit=crop&w=1000&q=85",
  "copy": "Meet a powerful forest bird and the vital seeds it spreads."
}, {
  "title": "The Lyrebird: Master of Mimicry",
  "category": "Amazing adaptations",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85",
  "copy": "Listen to an extraordinary mimic recreate sounds from its forest world."
}, {
  "title": "Penguins: Surviving the Ice",
  "category": "Wild encounters",
  "duration": "8 min",
  "image": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85",
  "copy": "Follow penguin colonies through cold seas, nesting, and parental care."
}, {
  "title": "The Secretarybird's Stomping Hunt",
  "category": "Wild encounters",
  "duration": "5 min",
  "image": "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=85",
  "copy": "A closer look at the foot strikes and careful stalking of a grassland hunter."
}, {
  "title": "The Kākāpō: A Night Parrot's Comeback",
  "category": "Wild encounters",
  "duration": "8 min",
  "image": "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=1000&q=85",
  "copy": "Learn about the rare flightless parrot and conservation efforts protecting it."
}, {
  "title": "Crows: The City Problem-Solvers",
  "category": "Amazing adaptations",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1000&q=85",
  "copy": "Watch adaptable birds use tools, learn routines, and thrive around people."
}, {
  "title": "The Great Horned Owl: Night Predator",
  "category": "Night wildlife",
  "duration": "7 min",
  "image": "https://images.unsplash.com/photo-1501706362039-c6e80948f4a7?auto=format&fit=crop&w=1000&q=85",
  "copy": "Explore the calls, camouflage, and hunting strategies of a powerful owl."
}, {
  "title": "The Osprey: Fish from the Sky",
  "category": "Wild encounters",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85",
  "copy": "Follow a fish-eating raptor as it dives feet-first into water."
}, {
  "title": "Birds of Paradise: Forest Dancers",
  "category": "Amazing adaptations",
  "duration": "8 min",
  "image": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=85",
  "copy": "Enter a tropical display ground filled with color, movement, and courtship."
}, {
  "title": "The Arctic Tern: A World-Spanning Journey",
  "category": "Amazing adaptations",
  "duration": "8 min",
  "image": "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=85",
  "copy": "Trace one of nature's remarkable migrations between polar summers."
}, {
  "title": "Woodpeckers: Drummers of the Forest",
  "category": "Amazing adaptations",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=1000&q=85",
  "copy": "Discover how specialized anatomy helps woodpeckers forage and drum."
}, {
  "title": "The Great Hornbill: Canopy Architect",
  "category": "Wild encounters",
  "duration": "7 min",
  "image": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1000&q=85",
  "copy": "Explore nesting, fruit dispersal, and life among tropical forest trees."
}, {
  "title": "Nightjars: Masters of Camouflage",
  "category": "Night wildlife",
  "duration": "6 min",
  "image": "https://images.unsplash.com/photo-1501706362039-c6e80948f4a7?auto=format&fit=crop&w=1000&q=85",
  "copy": "Find birds that disappear into leaf litter and hunt at dusk."
}, {
  "title": "The Snowy Owl: Life on the Tundra",
  "category": "Night wildlife",
  "duration": "7 min",
  "image": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85",
  "copy": "Meet a pale Arctic owl shaped by open landscapes and seasonal prey."
}];
const facts = [["Birds are living dinosaurs", "Modern birds evolved from theropod dinosaurs—the only dinosaur lineage that survived."], ["Some birds navigate by stars", "Migratory birds can use patterns in the night sky to help find their way."], ["A bird can use the earth as an incubator", "Maleos bury eggs in warm soil and sand, relying on natural heat to hatch them."]];
export const BirdDocumentaryWebsite = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const list = episodes.filter(x => (filter === "All" || x.category === filter) && (x.title + x.copy).toLowerCase().includes(search.toLowerCase()));
  return <main className="min-h-screen bg-[#f5f3ed] text-[#1c3025]">
  <header className="sticky top-0 z-20 border-b border-[#d9ded4] bg-[#f5f3ed]/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
   <a href="#home" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#1c3025] text-xl text-[#d2d9b8]">✦</span><span><b className="block tracking-[.15em]">WILD WONDER</b><small className="text-[10px] uppercase tracking-[.2em] text-[#70806f]">Birds · Nature · Discovery</small></span></a>
   <nav className="hidden gap-7 text-sm md:flex"><a href="#stories">Documentaries</a><a href="#discover">Discover</a><a href="#about">Our mission</a></nav><a href="#newsletter" className="rounded-full bg-[#1c3025] px-5 py-3 text-sm font-semibold text-white">Join the flock ↗</a>
  </div></header>
  <section id="home" className="relative overflow-hidden bg-[#1c3025] text-[#f5f3ed]"><div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "linear-gradient(90deg,#14251c 0%,transparent 90%),url(https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1800&q=90)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
   <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28"><div><p className="mb-6 text-xs uppercase tracking-[.28em] text-[#c8d2aa]">Stories from the wild</p><h1 className="text-5xl font-medium leading-[1.04] md:text-7xl">The world is <em className="font-serif text-[#c8d2aa]">wilder</em> than you imagine.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#d5ddd4]">Cinematic mini-documentaries, extraordinary birds, and the secrets of nature—made for curious minds.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#stories" className="rounded-full bg-[#c8d2aa] px-7 py-3.5 font-semibold text-[#1c3025]">Watch documentaries →</a><a href="#discover" className="rounded-full border border-white/40 px-7 py-3.5">Explore bird facts</a></div></div>
    <div className="mx-auto w-full max-w-sm"><div className="aspect-[4/5] overflow-hidden rounded-[48%_48%_18px_18px] border border-white/20"><img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1501706362039-c6e80948f4a7?auto=format&fit=crop&w=1000&q=90" alt="Bird in its natural habitat" /></div><p className="mt-4 text-center font-serif text-xl italic text-[#c8d2aa]">Look closer. Wonder more.</p></div>
   </div>
  </section>
  <section id="stories" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs uppercase tracking-[.25em] text-[#70806f]">Watch & wonder</p><h2 className="mt-3 font-serif text-4xl md:text-5xl">Explore 24 documentaries</h2><p className="mt-4 max-w-xl leading-7 text-[#657568]">Immersive stories about some of the planet’s most fascinating birds.</p></div><div className="flex flex-wrap gap-2">{["All", "Amazing adaptations", "Night wildlife", "Wild encounters"].map(f => <button key={f} onClick={() => setFilter(f)} className={"rounded-full border px-4 py-2 text-xs font-semibold " + (filter === f ? "border-[#1c3025] bg-[#1c3025] text-white" : "border-[#cbd2c7] hover:border-[#1c3025]")}>{f}</button>)}</div></div>
   <div className="mt-7 max-w-sm"><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search documentaries…" aria-label="Search documentaries" className="w-full rounded-full border border-[#cbd2c7] bg-transparent px-5 py-3 text-sm outline-none focus:border-[#1c3025]" /></div>
   <div className="mt-9 grid gap-6 md:grid-cols-3">{list.map((e, i) => <article key={e.title} className="group overflow-hidden rounded-2xl border border-[#e0e2da] bg-[#fbfaf6] transition hover:-translate-y-1 hover:shadow-xl"><div className="relative aspect-[4/3] overflow-hidden"><img src={e.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-[#f5f3ed]/90 px-3 py-1 text-[10px] font-bold uppercase">{e.category}</span><span className="absolute bottom-4 right-4 rounded-full bg-[#1c3025]/90 px-3 py-1 text-xs text-white">{e.duration}</span></div><div className="p-6"><p className="text-xs uppercase tracking-widest text-[#70806f]">Episode 0{i + 1}</p><h3 className="mt-3 font-serif text-2xl leading-snug">{e.title}</h3><p className="mt-3 text-sm leading-6 text-[#657568]">{e.copy}</p><a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(e.title + " bird documentary")}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex gap-2 text-sm font-semibold text-[#31533d]">Find videos on YouTube ↗</a></div></article>)}{list.length === 0 && <p className="col-span-full p-8 text-center text-[#657568]">No stories found. Try another search.</p>}</div>
  </section>
  <section id="discover" className="bg-[#e6e9df]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-10 md:py-24"><div><p className="text-xs uppercase tracking-[.25em] text-[#70806f]">A little wild knowledge</p><h2 className="mt-3 font-serif text-4xl md:text-5xl">Small facts.<br /><em>Big wonder.</em></h2><p className="mt-5 max-w-sm leading-7 text-[#657568]">Every bird has a story worth knowing. Here are a few for your next conversation.</p></div><div className="divide-y divide-[#cbd2c7]">{facts.map((f, i) => <details key={f[0]} open={i === 0} className="group py-5"><summary className="flex cursor-pointer list-none items-center gap-4"><span className="font-serif italic text-[#70806f]">0{i + 1}</span><span className="flex-1 text-lg font-semibold">{f[0]}</span><span className="grid h-8 w-8 place-items-center rounded-full border border-[#aeb9aa] group-open:rotate-45">+</span></summary><p className="ml-9 mt-3 text-sm leading-7 text-[#657568]">{f[1]}</p></details>)}</div></div></section>
  <section id="student-lab" className="bg-[#f5f3ed]">
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[.25em] text-[#70806f]">Wild Wonder student field lab</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Curiosity becomes discovery.</h2>
        <p className="mt-5 text-lg leading-8 text-[#657568]">A study-friendly collection for college and university students exploring ecology, evolution, animal behavior, conservation, and research methods.</p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[["01", "Animal behavior", "How do birds communicate, court, cooperate, and compete?", "Study calls, displays, flocking, and predator avoidance. Try building an ethogram: record a behavior, its duration, and what happened before and after."], ["02", "Evolution & adaptation", "Why do bird bodies, beaks, wings, and senses differ?", "Compare beak shape with diet, wing shape with flight style, or plumage with habitat. Ask which traits may improve survival and reproduction."], ["03", "Ecology & food webs", "What role does each bird play in its ecosystem?", "Trace predator-prey links, pollination, seed dispersal, scavenging, and competition. Create a food-web diagram for a chosen habitat."], ["04", "Conservation science", "How do researchers protect threatened birds?", "Explore habitat loss, invasive species, population monitoring, and restoration. Compare evidence for two conservation strategies."], ["05", "Migration & navigation", "How do birds travel across continents?", "Investigate tracking, landmarks, magnetic cues, weather, and energy budgets. Map a migration route and identify risks along the way."], ["06", "Research skills", "How can you turn a documentary into a college project?", "Separate observation from interpretation, check claims against primary sources, cite footage and images, and develop a testable research question."]].map(topic => <article key={topic[0]} className="rounded-2xl border border-[#dfe3d9] bg-[#fbfaf6] p-6">
          <p className="text-xs font-semibold tracking-[.2em] text-[#70806f]">FIELD NOTE {topic[0]}</p>
          <h3 className="mt-3 font-serif text-2xl">{topic[1]}</h3>
          <p className="mt-3 font-medium leading-6">{topic[2]}</p>
          <p className="mt-3 text-sm leading-7 text-[#657568]">{topic[3]}</p>
        </article>)}
      </div>
      <div className="mt-8 rounded-2xl bg-[#e6e9df] p-6 md:p-8">
        <p className="text-xs uppercase tracking-[.2em] text-[#70806f]">Classroom challenge</p>
        <h3 className="mt-2 font-serif text-2xl">From watching to asking</h3>
        <p className="mt-3 max-w-3xl leading-7 text-[#657568]">Choose one bird documentary. Write one observation, one question, and one prediction. Then find a peer-reviewed or university source to test your prediction. Use this as a starting point for a discussion, short presentation, or field-study proposal—not as a substitute for cited research.</p>
      </div>
    </div>
  </section>
  <section id="student-resources" className="bg-[#e6e9df]">
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
      <p className="text-xs uppercase tracking-[.25em] text-[#70806f]">Go deeper</p>
      <h2 className="mt-3 font-serif text-4xl md:text-5xl">Free research resources.</h2>
      <p className="mt-4 max-w-2xl leading-7 text-[#657568]">Use trusted field guides and conservation databases to check facts, build citations, and take your bird studies beyond the screen.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[["Cornell Lab · All About Birds", "Species profiles, identification, behavior, and natural history.", "https://www.allaboutbirds.org/guide/"], ["eBird", "Explore sightings, range maps, and citizen-science observations.", "https://ebird.org/"], ["BirdLife International", "Global bird conservation information and species assessments.", "https://www.birdlife.org/"], ["IUCN Red List", "Check conservation status and documented threats.", "https://www.iucnredlist.org/"]].map(resource => <a key={resource[0]} href={resource[2]} target="_blank" rel="noreferrer" className="rounded-2xl border border-[#cbd2c7] bg-[#fbfaf6] p-6 transition hover:-translate-y-1 hover:shadow-lg">
          <h3 className="font-serif text-xl">{resource[0]}</h3>
          <p className="mt-3 text-sm leading-6 text-[#657568]">{resource[1]}</p>
          <span className="mt-5 inline-flex text-sm font-semibold text-[#31533d]">Open resource ↗</span>
        </a>)}
      </div>
    </div>
  </section>
  <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-10 md:py-24"><div className="overflow-hidden rounded-3xl"><img className="aspect-[5/4] w-full object-cover" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=85" alt="Wild bird in a natural landscape" /></div><div><p className="text-xs uppercase tracking-[.25em] text-[#70806f]">Our mission</p><h2 className="mt-3 font-serif text-4xl md:text-5xl">A deeper connection to the natural world.</h2><p className="mt-6 leading-8 text-[#657568]">Wild Wonder is a home for bird lovers and curious minds. We tell accessible stories that celebrate the beauty, behavior, and astonishing survival skills of birds—and why protecting their habitats matters.</p><a href="#stories" className="mt-8 inline-flex rounded-full bg-[#1c3025] px-6 py-3 font-semibold text-white">Explore our stories →</a></div></section>
  <section id="newsletter" className="bg-[#1c3025] text-[#f5f3ed]"><div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24"><p className="text-xs uppercase tracking-[.25em] text-[#c8d2aa]">Notes from nature</p><h2 className="mt-4 font-serif text-4xl md:text-5xl">Stay curious. Stay wild.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-[#d5ddd4]">Get new documentaries, remarkable bird facts, and field notes delivered to your inbox.</p>{submitted ? <p className="mt-8 rounded-xl bg-white/10 p-4">Thanks for joining! Connect this form to an email service to collect subscribers after publishing.</p> : <form onSubmit={e => {
          e.preventDefault();
          if (email.trim()) setSubmitted(true);
        }} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"><input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" aria-label="Email address" className="min-w-0 flex-1 rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-white placeholder:text-[#b7c3b6] outline-none focus:border-[#c8d2aa]" /><button className="rounded-full bg-[#c8d2aa] px-7 py-3.5 font-semibold text-[#1c3025]">Join the flock ↗</button></form>}<p className="mt-4 text-xs text-[#aebcaf]">No spam. Just the good stuff from the wild.</p></div></section>
  <footer className="bg-[#14251c] px-5 py-8 text-[#d5ddd4]"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs md:flex-row md:items-center"><b className="tracking-[.18em]">WILD WONDER</b><span>Birds, nature & discovery</span><span>© {new Date().getFullYear()} Wild Wonder</span></div></footer>
 </main>;
};