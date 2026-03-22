// src/components/layout/SacredHeader.jsx
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./sacred-header.css";

const navLeft = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
];

const navRight = [
    { label: "About", to: "/about" },
    { label: "Journal", to: "/about" }, // placeholder for now
];

export default function SacredHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            <header className={`sacred-header ${scrolled ? "is-scrolled" : ""}`}>
                <div className="sacred-header__inner">
                    <nav className="sacred-header__nav sacred-header__nav--left">
                        {navLeft.map((item) => (
                            <NavItem key={item.label} {...item} />
                        ))}
                    </nav>

                    <Link
                        to="/"
                        className="sacred-header__brand"
                        aria-label="The Sacred Garden Home"
                    >
                        <span className="sacred-header__brand-mark" />
                        <span className="sacred-header__brand-text">
                            <span className="sacred-header__eyebrow">The</span>
                            <span className="sacred-header__name">Sacred Garden</span>
                        </span>
                    </Link>

                    <nav className="sacred-header__nav sacred-header__nav--right">
                        {navRight.map((item) => (
                            <NavItem key={item.label} {...item} />
                        ))}

                        <button
                            type="button"
                            className="sacred-header__cta"
                            onClick={() => {
                                const el = document.getElementById("featured-products");
                                if (el) {
                                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                        >
                            Explore
                        </button>
                    </nav>

                    <button
                        type="button"
                        className={`sacred-header__mobile-toggle ${mobileOpen ? "is-open" : ""
                            }`}
                        aria-label="Toggle navigation"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            <div className={`sacred-mobile-menu ${mobileOpen ? "is-open" : ""}`}>
                <div className="sacred-mobile-menu__panel">
                    <div className="sacred-mobile-menu__top">
                        <div className="sacred-mobile-menu__brand">The Sacred Garden</div>
                        <button
                            type="button"
                            className="sacred-mobile-menu__close"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                        >
                            ×
                        </button>
                    </div>

                    <div className="sacred-mobile-menu__links">
                        {[...navLeft, ...navRight].map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                className={({ isActive }) =>
                                    `sacred-mobile-menu__link ${isActive ? "is-active" : ""}`
                                }
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        <button
                            type="button"
                            className="sacred-mobile-menu__cta"
                            onClick={() => {
                                setMobileOpen(false);
                                const el = document.getElementById("featured-products");
                                if (el) {
                                    setTimeout(() => {
                                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }, 150);
                                }
                            }}
                        >
                            Explore Collection
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function NavItem({ label, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `sacred-header__link ${isActive ? "is-active" : ""}`
            }
        >
            <span>{label}</span>
        </NavLink>
    );
}