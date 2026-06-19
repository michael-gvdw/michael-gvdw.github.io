import { NavLink } from "react-router";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { label: "Home", to: "/" },
    { label: "CV", to: "/cv" },
    { label: "Projects", to: "/projects" },
];

export function TopBar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-8">
                <NavLink
                    to="/"
                    className="text-sm font-semibold tracking-tight text-foreground transition hover:text-muted-foreground"
                >
                    Michaël GvdW
                </NavLink>

                <div className="flex items-center gap-3">
                    <nav className="flex items-center gap-1 rounded-button border border-border bg-surface p-1 shadow-card">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    [
                                        "rounded-button px-3 py-1.5 text-sm font-medium transition duration-200 ease-portfolio",
                                        isActive
                                            ? "bg-accent text-accent-foreground"
                                            : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
                                    ].join(" ")
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
