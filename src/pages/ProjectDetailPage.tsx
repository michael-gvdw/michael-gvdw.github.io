import { useParams } from "react-router";
import { projects } from "../data/projects";
import { BackLink } from "../components/BackLink";
import { PdfViewer } from "../components/PdfViewer";

export default function ProjectDetailPage() {
    const { slug } = useParams();

    const project = projects.find(
        (project) => project.href === `/projects/${slug}`
    );

    if (!project) {
        return (
            <section className="animate-fade-up">
                <BackLink className="mb-8" />

                <p className="text-sm font-medium text-muted">Project not found</p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                    This project does not exist.
                </h1>
            </section>
        );
    }

    return (
        <article className="animate-fade-up">
            <BackLink className="mb-8" />

            <div className="overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-card">
                <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/9] w-full object-cover"
                />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-button border border-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
                {project.description}
            </p>

            {project.content && (
                <div className="mt-12 max-w-3xl space-y-6 text-base leading-8 text-muted-foreground">
                    {project.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            )}

            {project.document && (
                <PdfViewer src={project.document} title={`${project.title} document`} />
            )}
        </article>
    );
}
