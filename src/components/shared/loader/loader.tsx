import { cn } from "@/lib/utils";

type LoaderSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LoaderProps {
  size?: LoaderSize;
  className?: string;
}

const loaderSizes: Record<LoaderSize, string> = {
  xs: "h-4 w-4 border-2",
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-10 w-10 border-4",
  xl: "h-14 w-14 border-4",
};

export function Loader({
  size = "md",
  className,
}: LoaderProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin rounded-full border-primary border-t-transparent",
        loaderSizes[size],
        className
      )}
    />
  );
}