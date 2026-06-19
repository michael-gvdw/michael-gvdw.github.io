type PdfViewerProps = {
    src: string;
    title?: string;
};

export function PdfViewer({ src, title = "PDF document" }: PdfViewerProps) {
    return (
        <section className="mt-16">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-medium text-muted">Document</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                        {title}
                    </h2>
                </div>

                <div className="flex flex-nowrap gap-3">
                    <a
                        href={src}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-button border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition duration-200 ease-portfolio hover:border-border-strong hover:bg-surface-muted"
                    >
                        Open PDF
                    </a>

                    <a
                        href={src}
                        download
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-button bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition duration-200 ease-portfolio hover:opacity-85"
                    >
                        Download PDF
                    </a>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
                <iframe
                    src={src}
                    title={title}
                    className="h-[80vh] w-full"
                />
            </div>
        </section>
    );
}

// type PdfViewerProps = {
//   src: string;
//   title?: string;
// };

// export function PdfViewer({ src, title = "PDF document" }: PdfViewerProps) {
//   return (
//     <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
//       <iframe
//         src={src}
//         title={title}
//         className="h-[80vh] w-full"
//       />
//     </div>
//   );
// }