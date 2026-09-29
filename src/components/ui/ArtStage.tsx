"use client";

import React, { createContext, useContext } from "react";
import { cn } from "@/lib/utils";

interface ArtStageContextValue {
  stageWidth: number;
  stageHeight: number;
}

const ArtStageContext = createContext<ArtStageContextValue>({
  stageWidth: 1536,
  stageHeight: 1024,
});

export interface ArtStageProps {
  width?: number;
  height: number;
  className?: string;
  children: React.ReactNode;
}

export function ArtStage({
  width = 1536,
  height,
  className,
  children,
}: ArtStageProps) {
  return (
    <ArtStageContext.Provider value={{ stageWidth: width, stageHeight: height }}>
      <div
        className={cn("relative w-full h-full overflow-hidden select-none pointer-events-none", className)}
      >
        {children}
      </div>
    </ArtStageContext.Provider>
  );
}

export interface PinProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function Pin({
  x,
  y,
  w,
  h,
  className,
  style,
  children,
}: PinProps) {
  const { stageWidth, stageHeight } = useContext(ArtStageContext);
  const leftPct = (x / stageWidth) * 100;
  const topPct = (y / stageHeight) * 100;
  const widthPct = w !== undefined ? (w / stageWidth) * 100 : undefined;
  const heightPct = h !== undefined ? (h / stageHeight) * 100 : undefined;

  return (
    <div
      className={cn("absolute pointer-events-auto", className)}
      style={{
        left: `${leftPct}%`,
        top: `${topPct}%`,
        ...(widthPct !== undefined ? { width: `${widthPct}%` } : {}),
        ...(heightPct !== undefined ? { height: `${heightPct}%` } : {}),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
