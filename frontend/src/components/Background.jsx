const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Cool gray */}
      <div className="absolute -top-32 -left-32 h-105 w-105 rounded-full bg-slate-300/30 blur-3xl" />

      {/* Soft blue */}
      <div className="absolute top-24 left-1/3 h-105 w-105 rounded-full bg-sky-300/30 blur-3xl" />

      {/* Lavender */}
      <div className="absolute top-64 right-0 h-105 w-105 rounded-full bg-indigo-300/20 blur-3xl" />
    </div>
  );
};

export default Background;
