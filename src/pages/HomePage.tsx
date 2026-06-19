import { Link } from "react-router";

import { projects } from "../data/projects";
import { Card } from "../components/Card";
import { PortraitSlider } from "../components/PortraitSlider";

import { portraits } from "../data/images";

export default function HomePage() {
    const featuredProjects = projects.filter((project) => project.featured);
    return (
        <>
            <section className="grid items-center gap-10 animate-fade-up md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_340px]">
                <div>
                    <p className="mb-4 text-sm font-medium text-muted">
                        Full-stack Developer & Applied AI Engineer
                    </p>

                    <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                        Michaël Groenewegen van der Weijden
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                        Building practical AI-enabled software for real-world systems, with a
                        focus on full-stack development, applied AI, and thoughtful technical
                        design.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/cv"
                            className="inline-flex items-center justify-center rounded-button bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition duration-200 ease-portfolio hover:opacity-85"
                        >
                            View CV
                        </Link>

                        <a
                            href="/contact"
                            className="
                                inline-flex items-center justify-center rounded-button
                                border border-border bg-surface px-5 py-2.5
                                text-sm font-medium text-foreground
                                transition duration-200 ease-portfolio
                                hover:border-border-strong hover:bg-surface-muted
                            "
                        >
                            Contact
                        </a>
                    </div>
                </div>

                <PortraitSlider
                    images={portraits}
                />
            </section>

            <section className="mt-20">
                <div className="mb-8">
                    <p className="text-sm font-medium text-muted">Writing & Projects</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                        Featured
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <Card
                            key={project.href}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            href={project.href}
                            tags={project.tags}
                            buttonLabel={project.buttonLabel}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
