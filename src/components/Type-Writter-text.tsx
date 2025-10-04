import { cn } from "@/lib/utils";

export function TypewriterEffectSmooth({
  words,
  className,
}: {
  words: { text: string }[];
  className?: string;
}) {
  return (
    <div className={cn("inline-flex", className)}>
      {words.map((word, index) => (
        <span key={index} className="inherit">
          {word.text}{" "}
        </span>
      ))}
    </div>
  );
}
