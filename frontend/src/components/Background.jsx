const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* 1. The Blobs (The bottom layers) */}
      <div className="w-125mate-pulse absolute -top-[10%] -left-[10%] h-125 rounded-full bg-slate-200/50 blur-[120px]" />
      <div className="w-100mate-pulse absolute top-[5%] right-[10%] h-100 rounded-full bg-sky-200/40 blur-[100px] [animation-delay:2s]" />
      <div className="absolute -bottom-[20%] left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-indigo-100/30 blur-[120px]" />

      {/* 2. The Noise Overlay (The "top" layer that smooths everything) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  );
};

export default Background;
