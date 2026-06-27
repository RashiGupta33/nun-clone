import heroBg from '../assets/hero.png';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-50 overflow-hidden bg-[#16122F]">
            {/* Image Texture overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            {/* Grain/Noise overlay if needed, or gradient fade to bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#16122F]"></div>
        </div>
    );
}