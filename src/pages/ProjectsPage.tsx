// src/pages/ProjectsPage.tsx

import { BackLink } from "../components/BackLink";
import { Card } from "../components/Card";
import { projects } from "../data/projects";

export default function ProjectsPage() {
    return (
        <>
            <BackLink />

            <section className="animate-fade-up">
                <p className="text-sm font-medium text-muted">Projects</p>

                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                    Projects & writing
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                    A collection of project write-ups, technical articles, and case
                    studies about full-stack development, applied AI, and healthcare
                    technology.
                </p>
            </section>

            <section className="mt-14 grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
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
            </section>
        </>
    );
}
