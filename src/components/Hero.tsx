"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "./ui/grid-pattern";

export default function Hero() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <h2>Welcome to PsycheMaster</h2>
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
        ]}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
