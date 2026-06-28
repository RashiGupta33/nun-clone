import CostReduction from "../assets/CostReduction.png";
import Availability from "../assets/24-7.png";
import EasySetup from "../assets/EasySetup.png";
import HumanInterface from "../assets/human-interface.png";
import Infrastructure from "../assets/infrastructure.png";
import MinimalMaintenance from "../assets/minimal.png";
import MultiPlatform from "../assets/multi.png";
import Multiplayer from "../assets/multiplayer.png";
import Enterprise from "../assets/enterprise.png";

export default function EverythingInOnePlace() {
    return (
        <section className="py-24">

            <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        Everything in one place.
                    </h2>

                    <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        With nunu.ai, you get all the game QA automation
                        in one easy to use platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-[22px] border border-[#E55CD833] overflow-hidden bg-[#180E2A]">
                            <img
                                src={CostReduction}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                        <div className="rounded-[22px] border border-[#805CE533] overflow-hidden bg-[#180E2A]">
                            <img
                                src={HumanInterface}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                        <div className="rounded-[22px] border border-[#E55CD833] overflow-hidden bg-[#180E2A]">
                            <img
                                src={Infrastructure}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-[22px] border border-[#805CE533] overflow-hidden bg-[#180E2A]">
                            <img
                                src={Availability}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                        <div className="rounded-[22px] border border-[#805CE533] overflow-hidden bg-[#180E2A]">
                            <img
                                src={MultiPlatform}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                        <div className="rounded-[22px] border border-[#805CE533] overflow-hidden bg-[#180E2A]">
                            <img
                                src={Multiplayer}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-[22px] border border-[#805CE533] overflow-hidden bg-[#180E2A]">
                            <img
                                src={EasySetup}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                        <div className="rounded-[22px] border border-[#E55CD833] overflow-hidden bg-[#180E2A]">
                            <img
                                src={MinimalMaintenance}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                        <div className="rounded-[22px] border border-[#805CE533] overflow-hidden bg-[#180E2A]">
                            <img
                                src={Enterprise}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}