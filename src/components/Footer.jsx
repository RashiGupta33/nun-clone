export default function Footer() {
    return (
        <footer className="bg-[#251B49] border-t border-white/10 text-[13px]">

            <div className="max-w-[1240px] mx-auto px-10 pt-10 pb-6">

                {/* Top */}

                <div className="grid grid-cols-[420px_130px_200px_130px_170px_170px]">

                    {/* Logo */}

                    <div>
                        <a href="/">
                            <img
                                src="/logo.svg"
                                alt="nunu"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    <FooterColumn
                        title="resources"
                        links={[
                            "home",
                            "pricing",
                            "enterprise",
                        ]}
                    />

                    <FooterColumn
                        title="case studies"
                        links={[
                            "stormforge",
                            "hogwarts legacy",
                            "pokemon emerald",
                        ]}
                    />

                    <FooterColumn
                        title="company"
                        links={[
                            "blog",
                            "about",
                            "careers",
                        ]}
                    />

                    <FooterColumn
                        title="legal"
                        links={[
                            "privacy policy",
                            "terms of service",
                            "cookie policy",
                        ]}
                    />

                    <FooterColumn
                        title="contact"
                        links={[
                            "team@nunu.ai",
                        ]}
                    />

                </div>

                {/* Divider */}

                <div className="mt-10 border-t border-white/10"></div>

                {/* Bottom */}

                <div className="flex items-center justify-between pt-6">

                    <p className="text-white/90 text-[13px] font-medium">
                        © 2026 Generai, Inc.
                    </p>

                    <div className="flex items-center gap-6">
                        <SocialButton>💬</SocialButton>
                        <SocialButton>𝕏</SocialButton>
                        <SocialButton>in</SocialButton>
                    </div>

                </div>

            </div>

        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="text-[#8E88A8] text-[15px] font-medium mb-4">
                {title}
            </h3>

            <div className="space-y-3">
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="block text-white hover:text-[#C8B8FF] transition-colors"
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
                w-4
                h-4
                flex
                items-center
                justify-center
                text-white/90
                hover:text-white
                transition-colors
            "
        >
            {children}
        </button>
    );
}