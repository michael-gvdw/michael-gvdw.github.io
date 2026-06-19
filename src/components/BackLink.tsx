import { useNavigate } from "react-router";

type BackLinkProps = {
  label?: string;
  className?: string;
};

export function BackLink({ label = "Back", className = "" }: BackLinkProps) {
  const navigate = useNavigate();

  function handleBack() {
    const canGoBackWithinApp =
      typeof window !== "undefined" &&
      window.history.state &&
      window.history.state.idx > 0;

    if (canGoBackWithinApp) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className={[
        "text-sm font-medium text-muted-foreground transition hover:text-foreground mb-8",
        className,
      ].join(" ")}
    >
      ← {label}
    </button>
  );
}