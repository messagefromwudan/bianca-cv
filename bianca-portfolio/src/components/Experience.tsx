export default function Experience() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <svg className="w-7 h-7 text-[#3DDC97]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-3xl font-display font-bold text-[#022B1C]">Work Experience</h2>
      </div>
      <div className="bg-white shadow-[0_10px_30px_-10px_rgba(2,43,28,0.08)] border border-[#022B1C]/5 rounded-xl p-8 hover:-translate-y-1 transition-transform relative group">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-display font-bold text-[#022B1C]">Sales Assistant</h3>
              <p className="text-[#0E4A3A] opacity-90">Clothing Store — Chișinău, Moldova</p>
            </div>
            <span className="text-[#0E4A3A] opacity-60 font-display text-sm">Aug – Sep 2024</span>
          </div>
          <ul className="space-y-3 text-[#0E4A3A]">
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-[#3DDC97] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Delivered tailored product consultations that consistently converted browsing customers into confident buyers</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-[#3DDC97] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Applied active listening and needs-identification techniques to upsell complementary products naturally</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-[#3DDC97] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Built rapport with repeat customers, contributing to client retention and positive in-store experience</span>
            </li>
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-[#3DDC97] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Managed high-traffic floor operations with composure, balancing multiple customer interactions simultaneously</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
