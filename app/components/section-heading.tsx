type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,  
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div className={`space-y-3 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.3em] text-rose-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      {description ? (
        <p className="text-base text-slate-500 max-w-2xl mx-auto">{description}</p>
      ) : null}
    </div>
  );
}



