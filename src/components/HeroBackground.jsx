export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-50 overflow-hidden bg-[#0A0A1C]">

            {/* Top-right glow */}
            <div
                className="
          absolute
          -top-[220px]
          -right-[180px]
          h-[900px]
          w-[900px]
          rounded-full
          bg-[#7A4DFF]
          opacity-35
          blur-[180px]
        "
            />

            {/* Center dark blob */}
            <div
                className="
          absolute
          left-[10%]
          top-[120px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-black/50
          blur-[150px]
        "
            />

            {/* Bottom-left purple */}
            <div
                className="
          absolute
          -bottom-[250px]
          -left-[180px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#5d43a9]
          opacity-30
          blur-[180px]
        "
            />

            {/* Subtle overlay */}
            <div
                className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_80%_15%,rgba(138,92,255,0.18),transparent_35%)]
        "
            />
        </div>
    );
}