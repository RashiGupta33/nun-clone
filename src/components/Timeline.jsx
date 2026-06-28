import { useEffect, useRef, useState } from "react";

export default function Timeline() {
    const containerRef = useRef(null);
    const pathRef = useRef(null);

    const [pathLength, setPathLength] = useState(0);
    const [progress, setProgress] = useState(0);
    const [dot, setDot] = useState({ x: 439.6, y: 0 });

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

            // Track the middle of the screen
            const screenCenter = windowHeight / 2;
            const start = screenCenter;
            const end = screenCenter - rect.height;

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
            className="hidden lg:block absolute left-1/2 top-[270px] -translate-x-1/2 h-[2600px] w-full max-w-[1099px] pointer-events-none"
        >
            <svg viewBox="0 0 1099 2600" style={{ position: "absolute", top: 0, height: "2600px", width: "100%", zIndex: 1, overflow: "visible" }}>
                <path
                    d="M439.6,0 V480 L659.4,720 V1200 L439.6,1440 V2600"
                    fill="none"
                    stroke="rgba(145, 145, 153, 0.2)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    ref={pathRef}
                    d="M439.6,0 V480 L659.4,720 V1200 L439.6,1440 V2600"
                    fill="none"
                    stroke="#E55CD8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        strokeDashoffset: pathLength * (1 - progress),
                    }}
                />
                <circle
                    r="5"
                    fill="#E55CD8"
                    style={{ filter: "drop-shadow(0 0 8px #E55CD8)" }}
                    cx={dot.x || 439.6}
                    cy={dot.y || 0}
                />
            </svg>
        </div>
    );
}