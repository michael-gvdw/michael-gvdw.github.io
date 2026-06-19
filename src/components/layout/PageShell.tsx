import { TopBar } from "./TopBar";

export function PageShell({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <TopBar />
            <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-8">
                {children}
            </div>
        </main>
    );
}
