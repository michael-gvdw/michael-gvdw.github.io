// src/components/Card.tsx

import { Link } from "react-router";

type CardProps = {
    title: string;
    description: string;
    image: string;
    href: string;
    tags?: string[];
    buttonLabel?: string;
};

export function Card({
    title,
    description,
    image,
    href,
    tags = [],
    buttonLabel = "Read more",
}: CardProps) {
    return (
        <article
            className="
        group overflow-hidden rounded-card border border-border bg-surface shadow-card
        transition-all duration-200 ease-portfolio
        hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover
      "
        >
            <Link to={href} className="block">
                <div className="aspect-[16/9] overflow-hidden border-b border-border bg-surface-muted">
                    <img
                        src={image}
                        alt={title}
                        className="
              h-full w-full object-cover
              transition duration-300 ease-portfolio
              group-hover:scale-[1.03]
            "
                    />
                </div>
            </Link>

            <div className="p-6">
                {tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="
                  rounded-button border border-border bg-surface-muted
                  px-2.5 py-1 text-xs font-medium text-muted-foreground
                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    <Link to={href} className="transition hover:text-muted-foreground">
                        {title}
                    </Link>
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {description}
                </p>

                <div className="mt-6">
                    <Link
                        to={href}
                        className="
              inline-flex items-center justify-center rounded-button
              bg-accent px-4 py-2 text-sm font-medium text-accent-foreground
              transition duration-200 ease-portfolio
              hover:opacity-85
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
              focus:ring-offset-background
            "
                    >
                        {buttonLabel}
                    </Link>
                </div>
            </div>
        </article>
    );
}
