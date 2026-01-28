import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
}

export function Headline({ children, className, as: Component = "h2" }: TypographyProps) {
  const styles = {
    h1: "text-5xl md:text-7xl font-bold tracking-tightest leading-[1.1]",
    h2: "text-4xl md:text-5xl font-bold tracking-tight leading-tight",
    h3: "text-2xl md:text-3xl font-bold tracking-normal",
    h4: "text-xl font-semibold tracking-wide uppercase text-accent",
    p: "text-lg md:text-xl font-light leading-relaxed",
  };

  return (
    <Component className={cn(styles[Component as keyof typeof styles], "font-serif", className)}>
      {children}
    </Component>
  );
}
