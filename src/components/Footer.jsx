export default function Footer() {
    return (
        <footer className="bg-[#0F0C1F] border-t border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Top */}

                <div className="grid lg:grid-cols-[220px_1fr] gap-16">

                    {/* Logo */}

                    <div>
                        <a href="/">
                            {/* Reuse the same SVG from Navbar here */}
                            <img
                                src="/logo.svg"
                                alt="nunu"
                                className="h-10"
                            />
                        </a>
                    </div>

                    {/* Links */}

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

                        <FooterColumn
                            title="Resources"
                            links={[
                                "Home",
                                "Pricing",
                                "Enterprise",
                            ]}
                        />

                        <FooterColumn
                            title="Case Studies"
                            links={[
                                "Stormforge",
                                "Hogwarts Legacy",
                                "Pokemon Emerald",
                            ]}
                        />

                        <FooterColumn
                            title="Company"
                            links={[
                                "Blog",
                                "About",
                                "Careers",
                            ]}
                        />

                        <FooterColumn
                            title="Legal"
                            links={[
                                "Privacy Policy",
                                "Terms of Service",
                                "Cookie Policy",
                            ]}
                        />

                        <FooterColumn
                            title="Contact"
                            links={[
                                "team@nunu.ai",
                            ]}
                        />

                    </div>

                </div>

                {/* Divider */}

                <div className="-my-5 border-t border-white/10" />

                {/* Bottom */}

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-sm text-gray-500">
                        © 2026 Generai, Inc.
                    </p>

                    <div className="flex gap-4">

                        <div className="flex gap-4">
                            <SocialButton>💬</SocialButton>
                            <SocialButton>𝕏</SocialButton>
                            <SocialButton>in</SocialButton>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>

            <h4 className="text-white font-semibold mb-5">
                {title}
            </h4>

            <div className="space-y-3">

                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="block text-gray-400 hover:text-white transition"
                    >
                        {link}
                    </a>
                ))}

            </div>

        </div>
    );
}

function SocialButton({ children }) {
    return (
        <button
            className="
      h-11
      w-11
      rounded-full
      border
      border-white/10
      bg-white/5
      flex
      items-center
      justify-center
      text-gray-400
      hover:text-white
      hover:border-pink-500/40
      transition
      "
        >
            {children}
        </button>
    );
}