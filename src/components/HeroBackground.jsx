export default function HeroBackground() {
    return (
        <>
            {/* Main Background */}
            <div className="absolute inset-0 -z-30 bg-[#0A0918]" />

            {/* Top Right Purple Glow */}
            <div
                className="
          absolute
          -top-40
          right-[-220px]
          -z-20
          h-[900px]
          w-[900px]
          rounded-full
          bg-[#6d38ff]
          opacity-30
          blur-[180px]
        "
            />

            {/* Left Glow */}
            <div
                className="
          absolute
          top-[250px]
          -left-48
          -z-20
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#5f36d8]
          opacity-20
          blur-[170px]
        "
            />

            {/* Bottom Glow */}
            <div
                className="
          absolute
          bottom-[-250px]
          left-1/2
          -translate-x-1/2
          -z-20
          h-[700px]
          w-[900px]
          rounded-full
          bg-[#47298d]
          opacity-25
          blur-[180px]
        "
            />

            {/* Noise Overlay */}
            <div
                className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_right,rgba(149,76,255,0.25),transparent_45%)]
        "
            />
        </>
    );
}