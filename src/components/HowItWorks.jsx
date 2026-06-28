import { CheckCircle, AlertCircle } from "lucide-react";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

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
        <section className="relative bg-[#16122F] py-32  overflow-hidden -mt-10">
            <Timeline />

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-24">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                        Here's how it works.
                    </h2>

                    <p className="mt-2 text-20px text-gray-400">
                        Describe what you want to do — our AI will handle the rest.
                    </p>
                </div>

                {/* Step 1 */}

                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">

                    {/* Step Number */}
                    <div className="hidden lg:flex justify-end">
                        <span className="text-2xl font-mono text-pink-400/90 relative -top-17 -left-25">
                            1
                        </span>
                    </div>

                    {/* Fake Terminal (Right) */}
                    <div>
                        <div className="space-y-3 font-mono text-sm max-w-lg">
                            {[
                                "Complete the tutorial and flag issues.",
                                "Conduct a competitor analysis for this app.",
                                "Give me feedback for this onboarding flow.",
                                "Complete a purchase and confirm receipt.",
                                "Create me a design document of this level."
                            ].map((text, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    key={i}
                                    className="rounded-xl border border-white/5 bg-[#130f26] px-5 py-4 text-gray-300 shadow-sm flex items-center"
                                >
                                    {text}<span className="text-pink-500 animate-pulse ml-1">|</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <h3 className="text-3xl font-bold text-white">
                                Write instructions in plain english.
                            </h3>

                            <p className="mt-3 text-lg text-gray-400">
                                No coding or technical expertise required.
                            </p>
                        </motion.div>
                    </div>

                </div>

                {/* Step 2 */}

                <div className="lg:-ml-2 mt-70 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">

                    {/* Content */}

                    <div>

                        {/* Video Card */}

                        <div
                            className="w-xl rounded-2xl p-2"
                            style={{
                                backgroundColor: "rgba(229, 92, 216, 0.15)",
                                border: "1px solid rgba(247, 158, 222, 0.15)",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.16)",
                                filter: "saturate(100%)",
                            }}
                        >
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-xl block rounded-2xl"
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

                    {/* Step Number */}

                    <div className="hidden lg:flex justify-start">
                        <span className="text-2xl font-mono text-pink-400/90 relative -top-9 left-28">
                            2
                        </span>
                    </div>

                </div>

                {/* ===================== STEP 3 ===================== */}

                <div className="mt-60 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">

                    {/* Step Number */}

                    <div className="hidden lg:flex justify-end">
                        <span className="text-2xl font-mono text-pink-400/90 relative -top-17 -left-25">
                            3
                        </span>
                    </div>

                    {/* Content */}

                    <div>

                        {/* Results Card */}

                        <div
                            className="
      rounded
      border
      border-white/10
      bg-[#1D173B]
      p-8
      shadow-[0_20px_60px_rgba(0,0,0,.35)]
      "
                        >

                            <div className="space-y-3">

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

                </div>

            </div>
        </section >
    );
}