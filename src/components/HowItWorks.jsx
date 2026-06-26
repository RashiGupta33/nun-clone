import { CheckCircle, AlertCircle } from "lucide-react";
import Timeline from "./Timeline";

function Task({ title, status, bug }) {
    return (
        <div className="border-b border-white/10 pb-4">

            <p className="text-white">
                {title}
            </p>

            <div className="mt-3 flex items-center gap-3 text-sm">

                {status === "completed" ? (
                    <>
                        <CheckCircle
                            size={18}
                            className="text-green-400"
                        />

                        <span className="text-green-400">
                            completed
                        </span>
                    </>
                ) : (
                    <>
                        <AlertCircle
                            size={18}
                            className="text-pink-400"
                        />

                        <span className="text-pink-400">
                            incomplete
                        </span>

                        {bug && (
                            <span
                                className="
                rounded-md
                bg-pink-500/10
                px-2
                py-1
                text-xs
                text-pink-300"
                            >
                                likely_bug
                            </span>
                        )}
                    </>
                )}

            </div>

        </div>
    );
}

export default function HowItWorks() {
    return (
        <section className="relative bg-[#16122F] py-32 overflow-hidden">
            <Timeline />

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-24">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white">
                        Here's how it works.
                    </h2>

                    <p className="mt-6 text-xl text-gray-400">
                        Describe what you want to do — our AI will handle the rest.
                    </p>
                </div>

                {/* Step 1 */}

                <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

                    {/* Left */}

                    <div>

                        {/* Fake Terminal */}

                        <div className="rounded-2xl border border-white/10 bg-[#1D173B] p-8">

                            <div className="space-y-4 font-mono text-base">

                                <div className="text-pink-400">
                                    Complete the tutorial and flag issues<span className="animate-pulse">|</span>
                                </div>

                                <div className="text-pink-400">
                                    Conduct a competitor analysis<span className="animate-pulse">|</span>
                                </div>

                                <div className="text-pink-400">
                                    Give me feedback for this onboarding flow<span className="animate-pulse">|</span>
                                </div>

                                <div className="text-pink-400">
                                    Complete a purchase<span className="animate-pulse">|</span>
                                </div>

                                <div className="text-pink-400">
                                    Create me a design document<span className="animate-pulse">|</span>
                                </div>

                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-3xl font-bold text-white">
                                Write instructions in plain English.
                            </h3>

                            <p className="mt-3 text-lg text-gray-400">
                                No coding or technical expertise required.
                            </p>
                        </div>

                    </div>

                    {/* Step Number */}

                    <div className="hidden lg:flex items-start">
                        <span className="text-4xl font-mono text-pink-400">
                            1
                        </span>
                    </div>

                    {/* Step 2 */}

                    <div className="mt-28 grid lg:grid-cols-[auto_1fr] gap-12 items-center">

                        {/* Step Number */}

                        <div className="hidden lg:flex justify-end">
                            <span className="text-4xl font-mono text-gray-600">
                                2
                            </span>
                        </div>

                        {/* Content */}

                        <div>

                            {/* Video Card */}

                            <div
                                className="
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-[#1D173B]
      shadow-[0_0_40px_rgba(0,0,0,.25)]
      "
                            >
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full block rounded-2xl"
                                >
                                    <source
                                        src="https://assets.nunu.ai/nunu-landing-gameplay-720.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                            {/* Text */}

                            <div className="mt-8">
                                <h3 className="text-3xl font-bold text-white">
                                    Let our agents run your tasks.
                                </h3>

                                <p className="mt-3 text-lg leading-8 text-gray-400 max-w-xl">
                                    Our AI agents interact with the device just like a human would.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* ===================== STEP 3 ===================== */}

                    <div className="mt-28 grid lg:grid-cols-[1fr_auto] gap-12 items-center">

                        {/* Left */}

                        <div>

                            {/* Results Card */}

                            <div
                                className="
      rounded-2xl
      border
      border-white/10
      bg-[#1D173B]
      p-8
      shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
                            >

                                <div className="space-y-5">

                                    <Task
                                        title="Complete the tutorial and flag issues."
                                        status="completed"
                                    />

                                    <Task
                                        title="Conduct a competitor analysis for this app."
                                        status="completed"
                                    />

                                    <Task
                                        title="Give me feedback for this onboarding flow."
                                        status="incomplete"
                                        bug
                                    />

                                    <Task
                                        title="Complete a purchase and confirm receipt."
                                        status="completed"
                                    />

                                    <Task
                                        title="Draft me a design document of this level."
                                        status="completed"
                                    />

                                </div>

                            </div>

                            {/* Text */}

                            <div className="mt-8">
                                <h3 className="text-3xl font-bold text-white">
                                    Get your results.
                                </h3>

                                <p className="mt-3 max-w-xl text-lg leading-8 text-gray-400">
                                    Monitor outcomes in real time through powerful dashboards
                                    with detailed reports and insights.
                                </p>
                            </div>

                        </div>

                        {/* Step Number */}

                        <div className="hidden lg:flex">
                            <span className="font-mono text-4xl text-gray-600">
                                3
                            </span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}