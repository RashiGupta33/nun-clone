import FeatureCard from "./FeatureCard";
import CostReductionAnimation from "./CostReductionAnimation";
import AvailabilityAnimation from "./AvailabilityAnimation";
import EasySetupAnimation from "./EasySetupAnimation";
import HumanLikeAnimation from "./HumanLikeAnimation";
import InfrastructureAnimation from "./InfrastructureAnimation";
import AnalyticsAnimation from "./AnalyticsAnimation";

export default function EverythingInOnePlace() {
    return (
        <section className="relative bg-inherit py-32">

            {/* Dark Section Background */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-[#16122F] -z-10"></div>
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white">
                        Everything in one place.
                    </h2>

                    <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
                        With nunu.ai, you get all the game QA automation
                        in one easy to use platform.
                    </p>
                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    <FeatureCard
                        title="Cost Reduction"
                        description="By automating repetitive and tedious tasks, customers save up to 50% on manual work costs."
                    >
                        <CostReductionAnimation />
                    </FeatureCard>

                    <FeatureCard
                        title="24/7 Availability"
                        description="Our AI agents never sleep. Run thousands of tasks simultaneously across multiple devices."
                    >
                        <AvailabilityAnimation />
                    </FeatureCard>

                    <FeatureCard
                        title="Easy Setup"
                        description="Integrate nunu.ai in minutes with a simple workflow and minimal configuration."
                    >
                        <EasySetupAnimation />
                    </FeatureCard>

                    <FeatureCard
                        title="Human-like Interface"
                        description="AI agents use the keyboard, mouse and touch exactly like a human."
                    >
                        <HumanLikeAnimation />
                    </FeatureCard>

                    <FeatureCard
                        title="Scalable Infrastructure"
                        description="Run hundreds or even thousands of AI agents simultaneously without sacrificing performance."
                    >
                        <InfrastructureAnimation />
                    </FeatureCard>

                    <FeatureCard
                        title="Powerful Analytics"
                        description="Track every run with detailed reports, charts and actionable insights in one unified dashboard."
                    >
                        <AnalyticsAnimation />
                    </FeatureCard>

                </div>

            </div>
        </section>
    );
}