import { cn } from "@/lib/utils";

import { Loader } from "./loader";

interface FullScreenLoaderProps {
  className?: string;
  loaderClassName?: string;
}

export function FullScreenLoader({
  className,
  loaderClassName,
}: FullScreenLoaderProps) {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-background",
        className
      )}
    >
      <Loader
        size="lg"
        className={loaderClassName}
      />
    </div>
  );
}


{/* <FullScreenLoader className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" /> */}