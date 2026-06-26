export default function FeatureCard({
    title,
    description,
    children,
}) {
    return (
        <div
            className="
      rounded-3xl
      border
      border-[#3b2b62]
      bg-[#180E2A]
      p-8
      transition
      duration-300
      hover:border-pink-500/40
      hover:-translate-y-1
      "
        >
            {/* Animation goes here */}

            <div className="mb-8 h-44 rounded-2xl bg-[#22153b] flex items-center justify-center">
                {children}
            </div>

            <h3 className="text-2xl font-semibold text-white">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
                {description}
            </p>
        </div>
    );
}