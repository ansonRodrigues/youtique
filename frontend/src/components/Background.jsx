const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* 1. The Blobs */}
      {/* Top Left - Soft Slate */}
      <div className="absolute -top-[10%] -left-[10%] h-125 w-125 animate-pulse rounded-full bg-slate-200/50 blur-[120px]" />

      {/* Top Right - Soft Sky */}
      <div className="absolute top-[5%] right-[10%] h-100 w-100 animate-pulse rounded-full bg-sky-200/40 blur-[100px] [animation-delay:2s] [animation-duration:8s]" />

      {/* Bottom Center - Indigo Mist */}
      <div className="absolute -bottom-[20%] left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-indigo-100/30 blur-[120px]" />

      {/* 2. The Noise Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 brightness-100 contrast-150"
        style={{
          backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')`,
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
};

export default Background;
