import { cn, pick, tw } from "@/utils/styles";
import { Children } from "react";
import { DesignContext, TDesignSize, TDesignVariant } from "../DesignContext";
import { DynamicColorProvider, TDynamicColor } from "../DynamicColorProvider";

interface ButtonGroupProps {
  variant?: TDesignVariant;
  color?: TDynamicColor;
  size?: TDesignSize;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export function ButtonGroup({
  className,
  children,
  ...props
}: ButtonGroupProps) {
  const childrenLength = Children.count(children);
  const { color, size, variant, disabled } = DesignContext.useProps(props);

  const separatorClass = pick(variant, {
    primary: tw`bg-dynamic-700`,
    secondary: tw``,
    tertiary: tw``,
  });

  const groupClass = cn("flex flex-row rounded-md", className);

  return (
    <DynamicColorProvider color={color}>
      <div className={groupClass}>
        {Children.map(children, (c, i) => {
          if (!c) return null;

          const isFirst = i === 0;
          const isLast = i === childrenLength - 1;

          return (
            <DesignContext.Provider
              size={size}
              variant={variant}
              disabled={disabled}
              rounded={
                isFirst && isLast
                  ? "all"
                  : isFirst
                    ? "start"
                    : isLast
                      ? "end"
                      : "none"
              }
            >
              {!isFirst && <span className={cn("w-px", separatorClass)} />}
              {c}
            </DesignContext.Provider>
          );
        })}
      </div>
    </DynamicColorProvider>
  );
}
