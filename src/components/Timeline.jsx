import { useEffect, useRef, useState } from "react";

export default function Timeline() {
    const containerRef = useRef(null);
    const pathRef = useRef(null);

    const [pathLength, setPathLength] = useState(0);
    const [progress, setProgress] = useState(0);
    const [dot, setDot] = useState({ x: 190, y: 0 });

    useEffect(() => {
        const path = pathRef.current;
        const section = containerRef.current;

        if (!path || !section) return;

        const length = path.getTotalLength();
        setPathLength(length);

        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        const update = () => {
            const rect = section.getBoundingClientRect();

            const windowHeight = window.innerHeight;

            // Animation starts when timeline enters screen
            const start = windowHeight * 0.85;

            // Ends before leaving viewport
            const end = -rect.height * 0.15;

            let p = (start - rect.top) / (start - end);

            p = Math.max(0, Math.min(1, p));

            setProgress(p);

            const point = path.getPointAtLength(length * p);

            setDot({
                x: point.x,
                y: point.y,
            });
        };

        update();

        window.addEventListener("scroll", update, {
            passive: true,
        });

        window.addEventListener("resize", update);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="hidden lg:block absolute left-160 top-[270px] -translate-x-1/2 h-[1520px] w-[380px] pointer-events-none"
        >
            {/* Grey Path */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 380 1520"
                fill="none"
            >
                <path
                    d="
            M190 0
            V340
            C190 420 280 450 280 530
            V930
            C280 1010 190 1040 190 1120
            V1520
          "
                    stroke="rgba(255,255,255,.15)"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>

            {/* Animated Pink Path */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 380 1520"
                fill="none"
            >
                <path
                    ref={pathRef}
                    d="
            M190 0
            V340
            C190 420 280 450 280 530
            V930
            C280 1010 190 1040 190 1120
            V1520
          "
                    stroke="#E55CD8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                        strokeDashoffset: pathLength * (1 - progress),
                        transition: "stroke-dashoffset .15s ease-out",
                    }}
                />
                {/* Moving Glow */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Outer Glow */}
                <circle
                    cx={dot.x}
                    cy={dot.y}
                    r="18"
                    fill="#E55CD8"
                    opacity="0.15"
                    filter="url(#glow)"
                />

                {/* Middle Glow */}
                <circle
                    cx={dot.x}
                    cy={dot.y}
                    r="10"
                    fill="#E55CD8"
                    opacity="0.35"
                />

                {/* Main Dot */}
                <circle
                    cx={dot.x}
                    cy={dot.y}
                    r="5"
                    fill="#fff"
                    stroke="#E55CD8"
                    strokeWidth="3"
                />
            </svg>

            {/* Fixed Milestone Dots */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_20px_#E55CD8]" />

            <div className="absolute left-[73%] top-[530px] -translate-x-1/2 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_20px_#E55CD8]" />

            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_20px_#E55CD8]" />
        </div>
    );
}
