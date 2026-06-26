export default function CostReductionAnimation() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

            {/* Glow */}

            <div className="absolute h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />

            {/* Database */}

            <div className="relative space-y-3">

                <DatabaseLayer />
                <DatabaseLayer />
                <DatabaseLayer />
                <DatabaseLayer />

            </div>

            {/* Coins */}

            <div className="absolute right-10 top-8 flex flex-col gap-3">

                <Coin />

                <Coin className="translate-x-4" />

                <Coin className="-translate-x-2" />

            </div>

        </div>
    );
}

function DatabaseLayer() {
    return (
        <div className="relative">

            <div className="h-5 w-36 rounded-full bg-gradient-to-r from-[#E55CD8] to-[#7A5CFF]" />

            <div className="mx-auto h-5 w-32 bg-[#5D3FA3]" />

            <div className="h-5 w-36 rounded-full bg-[#3A2968]" />

        </div>
    );
}

function Coin({ className = "" }) {
    return (
        <div
            className={`h-10 w-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg ${className}`}
        />
    );
}