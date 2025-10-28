import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalOutputProps {
  output: string;
  className?: string;
}

const renderOutput = (output: string): ReactNode[] => {
  const markdownLinkRegex = /\(([^\)]+)\)\[([^\]]+)\]/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  const lines = output.split("\n");

  return lines.map((line, lineIndex) => {
    let parts: (string | { type: "mdLink"; label: string; url: string })[] =
      [];
    let lastIndex = 0;
    let match;

    const mdLinkRegex = /\(([^\)]+)\)\[([^\]]+)\]/g;
    while ((match = mdLinkRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }
      parts.push({ type: "mdLink", label: match[1], url: match[2] });
      lastIndex = mdLinkRegex.lastIndex;
    }
    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    if (parts.length === 0) {
      parts = [line];
    }

    return (
      <div key={lineIndex}>
        {parts.map((part, index) => {
          if (typeof part === "object" && part.type === "mdLink") {
            return (
              <a
                key={index}
                href={part.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground underline !decoration-primary-foreground/25 hover:underline transition-colors"
              >
                {part.label}
              </a>
            );
          }

          const textPart = typeof part === "string" ? part : "";
          let subParts = textPart.split(urlRegex);
          subParts = subParts.flatMap((p) =>
            urlRegex.test(p) ? [p] : p.split(emailRegex)
          );

          return (
            <span key={index}>
              {subParts.map((subPart, subIndex) => {
                if (urlRegex.test(subPart)) {
                  return (
                    <a
                      key={subIndex}
                      href={subPart}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground hover:underline transition-colors"
                    >
                      {subPart}
                    </a>
                  );
                } else if (emailRegex.test(subPart)) {
                  return (
                    <a
                      key={subIndex}
                      href={`mailto:${subPart}`}
                      className="text-primary-foreground hover:underline"
                    >
                      {subPart}
                    </a>
                  );
                }
                return <span key={subIndex}>{subPart}</span>;
              })}
            </span>
          );
        })}
      </div>
    );
  });
};

export function TerminalOutput({ output, className }: TerminalOutputProps) {
  return (
    <div
      className={cn(
        "p-4 z-20 space-y-2 text-sm font-mono uppercase text-center leading-4 text-balance text-neutral-300",
        className
      )}
    >
      {renderOutput(output)}
    </div>
  );
}
