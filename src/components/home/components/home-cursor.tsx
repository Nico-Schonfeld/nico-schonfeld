"use client";

import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "@/components/animate-ui/components/animate/cursor";
import { TextLoop } from "@/components/motion-primitives/text-loop";

export function HomeCursor({ hidden }: { hidden: boolean }) {
  if (hidden) {
    return null;
  }

  return (
    <CursorProvider global>
      <Cursor />
      <CursorFollow side="bottom" sideOffset={15} align="end" alignOffset={5}>
        <TextLoop interval={5} className="font-mono text-sm hidden md:block">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="Código">
              👨‍💻
            </span>
            <span role="img" aria-label="Café">
              ☕
            </span>
          </div>
          <span>Hola!</span>
          <span>¿Conectemos?</span>
        </TextLoop>
      </CursorFollow>
    </CursorProvider>
  );
}
