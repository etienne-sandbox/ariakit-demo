import { cn, tw } from "@/utils/styles";
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";
import { DesignContext } from "./DesignContext";
import { DynamicColorProvider } from "./DynamicColorProvider";

const PAPER_LEVELS = ["background", "card", "dialog", "popover"] as const;

export type TPaperLevel = (typeof PAPER_LEVELS)[number];

export interface PaperProps extends ComponentPropsWithoutRef<"div"> {
  level: TPaperLevel;
  darkerBackground?: boolean;
}

const PAPER_LEVEL_STYLES = {
  background: tw`bg-background`,
  card: tw`bg-paper rounded-md flex flex-col`,
  dialog: tw`bg-paper rounded-md shadow-xl ring-1 ring-inset ring-white/10 flex flex-col`,
  popover: tw`bg-paper rounded-md shadow-xl ring-1 ring-inset ring-white/20 flex flex-col`,
} as const;

export const Paper = forwardRef(function Paper(
  { level, darkerBackground = false, className, ...divProps }: PaperProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <DesignContext.Provider rounded="all">
      <DynamicColorProvider force={level === "dialog" || level === "popover"}>
        <div
          className={cn(
            PAPER_LEVEL_STYLES[level],
            darkerBackground && tw`bg-background`,
            className,
          )}
          {...divProps}
          ref={ref}
        />
      </DynamicColorProvider>
    </DesignContext.Provider>
  );
});
