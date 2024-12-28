"use client";


export const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
      {[...Array(400)].map((_, i) => (
        <div
          key={i}
          className="h-0.5 w-0.5 rounded-full bg-white/[0.2] blur-[0.5px] transform"
          style={{
            transform: `translate(${(i % 20) * 5}%, ${Math.floor(i / 20) * 5}%)`
          }}
        />
      ))}
    </div>
  );
};