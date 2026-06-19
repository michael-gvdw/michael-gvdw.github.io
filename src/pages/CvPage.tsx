// src/pages/CvPage.tsx

import { BackLink } from "../components/BackLink";
import { PortraitSlider } from "../components/PortraitSlider";
import { portraits } from "../data/images";

const experience = [
    {
        company: "Catharina Hospital Eindhoven",
        location: "Eindhoven, Netherlands",
        roles: [
            {
                title: "Software Engineer",
                period: "Jul 2023 – Present",
                description:
                    "Developing and implementing software solutions tailored to hospital needs, including in-house applications, technology integrations, and AI-related initiatives that support healthcare workflows.",
            },
            {
                title: "Graduation Internship",
                period: "Feb 2023 – Jun 2023",
                description:
                    "Developed an application around an AI-based fall detection model using nurse notes, with a focus on data processing automation, model input preparation, result storage, and integration with hospital components.",
            },
        ],
    },
    {
        company: "D-Centralize",
        location: "Eindhoven, Netherlands",
        roles: [
            {
                title: "Junior Software Engineer",
                period: "Feb 2022 – Jan 2023",
                description:
                    "Worked on the development and maintenance of a CMS platform, including backend APIs, payment flow improvements, and database-related development.",
            },
            {
                title: "Internship",
                period: "Sep 2021 – Jan 2022",
                description:
                    "Led the migration of a customer database from a Google NoSQL solution to a self-hosted PostgreSQL database, including backend changes and communication between the application and database.",
            },
        ],
    },
    {
        company: "Greek Army",
        location: "Chios, Greece",
        roles: [
            {
                title: "Conscript Private",
                period: "Sep 2023 – Jun 2024",
                description:
                    "Completed mandatory military service in the Armored Vehicles branch, taking on planning, scheduling, administrative, and resource-management responsibilities.",
            },
        ],
    },
];

const education = [
    {
        school: "Fontys University of Applied Sciences",
        degree: "Master of Applied IT",
        period: "2025 – Present",
        description:
            "Continuing professional and academic development in applied IT, software engineering, and applied AI.",
    },
    {
        school: "Fontys University of Applied Sciences",
        degree: "Bachelor ICT & Software Engineering",
        period: "Sep 2019 – Jun 2023",
        description:
            "Graduated cum laude. Specialized in Artificial Intelligence, with a focus on data processing, AI model development, and applying AI in real-world scenarios.",
    },
    {
        school: "1st Vocational High School of Chios",
        degree: "Software Development / Vocational Education",
        period: "Sep 2016 – Jun 2019",
        description:
            "Graduated as valedictorian with a perfect score. Specialized in software development, including Python, networking, and web development.",
    },
];

const focusAreas = [
    "Full-stack development",
    "Applied AI",
    "Healthcare technology",
    "Backend systems",
    "Data pipelines",
    "MLOps & deployment",
    "Stakeholder communication",
];

const technologies = [
    "Python",
    "TypeScript",
    "React",
    "Relational databases",
    "PostgreSQL",
    "Kubernetes",
    "Apache Airflow",
    "Apache Kafka",
    "Kubeflow",
    "Jupyter Notebook",
    "Linux",
    "Git",
];

const languages = ["Dutch — native", "Greek — native", "English — C2"];

function Section({
    eyebrow,
    title,
    children,
}: {
    eyebrow: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mt-16">
            <p className="text-sm font-medium text-muted">{eyebrow}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {title}
            </h2>
            <div className="mt-6">{children}</div>
        </section>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-button border border-border bg-surface-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            {children}
        </span>
    );
}

export default function CvPage() {
    return (
        <>
            <BackLink />

            <section className="grid animate-fade-up items-start gap-10 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]">
                <div>
                    <p className="text-sm font-medium text-muted">Curriculum Vitae</p>

                    <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                        Michaël Groenewegen van der Weijden
                    </h1>

                    <p className="mt-5 text-lg font-medium text-muted-foreground">
                        Full-stack Developer & Applied AI Engineer
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
                        I build practical software systems with a focus on applied AI, healthcare
                        technology, backend development, and human-centered technical design.
                    </p>
                </div>

                <aside className="w-full">
                    <PortraitSlider
                        images={portraits}
                    />

                    <div className="mt-6 flex flex-wrap gap-3 md:flex-col">
                        <a
                            href="mailto:"
                            className="inline-flex items-center justify-center rounded-button bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition duration-200 ease-portfolio hover:opacity-85"
                        >
                            Contact me
                        </a>

                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-button border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition duration-200 ease-portfolio hover:border-border-strong hover:bg-surface-muted"
                        >
                            LinkedIn
                        </a>

                        <a
                            href=""
                            download="michael_groenewegen_van_der_weijden_cv.pdf"
                            className="inline-flex items-center justify-center rounded-button border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition duration-200 ease-portfolio hover:border-border-strong hover:bg-surface-muted"
                        >
                            Download CV
                        </a>
                    </div>
                </aside>
            </section>

            <Section eyebrow="Profile" title="Professional summary">
                <div className="rounded-card border border-border bg-surface p-6 shadow-card">
                    <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                        I currently work as a Software Engineer at Catharina Hospital
                        Eindhoven, where I contribute to in-house software solutions,
                        AI-related projects, and technical systems that support healthcare
                        workflows. My background combines software engineering, applied
                        artificial intelligence, data processing, and communication across
                        technical and non-technical stakeholders.
                    </p>
                </div>
            </Section>

            <Section eyebrow="" title="Personal summary">
                <div className="rounded-card border border-border bg-surface p-6 shadow-card">
                    <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                        I currently work as a Software Engineer at Catharina Hospital
                        Eindhoven, where I contribute to in-house software solutions,
                        AI-related projects, and technical systems that support healthcare
                        workflows. My background combines software engineering, applied
                        artificial intelligence, data processing, and communication across
                        technical and non-technical stakeholders.
                    </p>
                </div>
            </Section>

            <Section eyebrow="Focus" title="What I work on">
                <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                        <Pill key={area}>{area}</Pill>
                    ))}
                </div>
            </Section>

            <Section eyebrow="Experience" title="Professional experience">
                <div className="space-y-6">
                    {experience.map((item) => (
                        <article
                            key={item.company}
                            className="rounded-card border border-border bg-surface p-6 shadow-card"
                        >
                            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                <h3 className="text-lg font-semibold tracking-tight">
                                    {item.company}
                                </h3>
                                <p className="text-sm text-muted">{item.location}</p>
                            </div>

                            <div className="mt-6 space-y-6">
                                {item.roles.map((role) => (
                                    <div key={`${item.company}-${role.title}`}>
                                        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                            <h4 className="font-medium text-foreground">
                                                {role.title}
                                            </h4>
                                            <p className="text-sm text-muted">{role.period}</p>
                                        </div>

                                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                            {role.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </Section>

            <Section eyebrow="Education" title="Academic background">
                <div className="space-y-4">
                    {education.map((item) => (
                        <article
                            key={`${item.school}-${item.degree}`}
                            className="rounded-card border border-border bg-surface p-6 shadow-card"
                        >
                            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold tracking-tight">
                                        {item.school}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                                        {item.degree}
                                    </p>
                                </div>

                                <p className="text-sm text-muted">{item.period}</p>
                            </div>

                            <p className="mt-4 text-sm leading-6 text-muted-foreground">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section eyebrow="Technologies" title="Tools and technologies">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <Pill key={technology}>{technology}</Pill>
                    ))}
                </div>
            </Section>

            <Section eyebrow="Languages" title="Languages">
                <div className="grid gap-3 sm:grid-cols-3">
                    {languages.map((language) => (
                        <div
                            key={language}
                            className="rounded-card border border-border bg-surface p-4 text-sm font-medium text-muted-foreground shadow-card"
                        >
                            {language}
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
