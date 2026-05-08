/**
 * Purple / violet hero bloom — visible on the right, fades into page bg.
 */
export function PageBloom({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Wide wash: strong violet on the right half */}
      <div
        className="absolute inset-y-0 right-0 w-[min(100%,920px)] opacity-90"
        style={{
          background:
            "linear-gradient(270deg, rgba(124, 58, 237, 0.55) 0%, rgba(91, 33, 182, 0.32) 35%, rgba(24, 24, 27, 0) 100%)",
        }}
      />
      <div
        className="absolute -right-[12%] -top-[28%] h-[min(95vh,820px)] w-[min(95vw,980px)] animate-bloom-drift rounded-full opacity-[0.92] blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(167, 139, 250, 0.72) 0%, rgba(139, 92, 246, 0.45) 38%, rgba(76, 29, 149, 0.2) 62%, transparent 78%)",
        }}
      />
      <div
        className="absolute -right-[5%] top-[8%] h-[min(60vh,520px)] w-[min(65vw,640px)] animate-bloom-drift rounded-full opacity-[0.65] blur-[95px]"
        style={{
          animationDelay: "-7s",
          background:
            "radial-gradient(ellipse at center, rgba(192, 132, 252, 0.55) 0%, rgba(109, 40, 217, 0.35) 50%, transparent 72%)",
        }}
      />
      <div
        className="absolute right-[5%] top-[35%] h-[min(45vh,380px)] w-[min(50vw,480px)] animate-bloom-drift rounded-full opacity-45 blur-[70px]"
        style={{
          animationDelay: "-12s",
          background:
            "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.4) 0%, transparent 68%)",
        }}
      />
    </div>
  );
}
