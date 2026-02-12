const emojis = [
  { emoji: "✨", top: "8%", left: "5%", delay: "0s", duration: "12s" },
  { emoji: "💖", top: "20%", left: "90%", delay: "3s", duration: "14s" },
  { emoji: "🌸", top: "45%", left: "8%", delay: "6s", duration: "16s" },
  { emoji: "🎂", top: "70%", left: "92%", delay: "2s", duration: "13s" },
  { emoji: "✨", top: "85%", left: "15%", delay: "5s", duration: "15s" },
  { emoji: "💖", top: "35%", left: "95%", delay: "8s", duration: "14s" },
  { emoji: "🌸", top: "60%", left: "3%", delay: "4s", duration: "12s" },
  { emoji: "🎂", top: "15%", left: "85%", delay: "7s", duration: "16s" },
];

const FloatingEmojis = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {emojis.map((item, i) => (
        <span
          key={i}
          className="absolute text-lg opacity-[0.12] animate-[emoji-float_var(--dur)_ease-in-out_var(--delay)_infinite]"
          style={{
            top: item.top,
            left: item.left,
            "--delay": item.delay,
            "--dur": item.duration,
          } as React.CSSProperties}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
