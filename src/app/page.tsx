import { MoveRight } from 'lucide-react';
const navigation = [
  { name: 'Features', href: '#',id:1 },
  { name: 'Pricing', href: '#' ,id:2},
  { name: 'FAQs', href: '#' ,id:3},
];
const Features = [
  { name: '📝 Effortless Note Creation', description: 'Type or speak your thoughts — our intuitive editor makes capturing ideas fast and fluid..', id: 1 },
  { name: '🧠 AI Summaries & Insights', description: 'Long notes? No problem. Our AI condenses them into concise summaries and extracts action points.', id: 2 },
  { name: '🔁 Real-time Sync', description: 'Your notes automatically stay up-to-date across all your devices. No refresh needed.', id: 3 },
  { name: '📅 Auto-Organized', description: 'Your notes are automatically sorted by topics, timelines, or projects — no manual tags needed.', id: 4 },
  { name: '🔐 Private & Secure', description: 'Your thoughts are yours. End-to-end encryption ensures they stay that way.', id: 5 },
];
export default function Home() {
  return (
  <>
  <nav className="flex items-center w-1/2 mx-auto justify-between text-2xl p-6">
    <h1 className='font-black'>Memosa <span className=' text-[#8A63D2]'>AI</span></h1>
    <div className='flex space-x-6'>
      {navigation.map((item) => (
        <a
          key={item.id}
          href={item.href}
        >{item.name}</a>
      ))}
    </div>
      <button className="bg-[#8A63D2] text-white px-6 py-2 rounded-3xl font-bold">
        Login
      </button>
  </nav>
  <main>
    <section className="flex flex-col items-center mt-40 min-h-screen bg-gray-100/40">
      <h1 className="text-4xl mb-4">Your smart <span className="font-bold">second brain,</span> powered by AI</h1>
      <p className="text-lg mb-8 w-1/3 text-center font-bold text-gray-700">Write freely, and let our AI organize, summarize, and highlight key insights — so you can focus on thinking, not formatting.</p>
      <button className="bg-[#8A63D2] text-white px-6 font-bold py-3 rounded-3xl w-52 justify-center space-x-1 group flex flex-row ">
        <p>Try for free</p>
        <MoveRight className='group-hover:translate-x-2 duration-75' />
      </button>
    </section>
  </main>
  <div>

  </div>
  </>
  );
}
