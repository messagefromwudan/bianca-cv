export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#022B1C] text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#F5F7F6]/60">
        <div>DESIGNED &amp; BUILT BY BIANCA ARGHIRI • {new Date().getFullYear()}</div>
        <div className="flex gap-8 mt-8 md:mt-0">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#3DDC97]" />
            SYSTEM: ACTIVE
          </div>
          <div>MODE: BUILDING</div>
          <div>LEARNING: CONTINUOUS</div>
        </div>
      </div>
    </footer>
  );
}
