import { cn, pick, tw } from "@/utils/styles";
import * as Ariakit from "@ariakit/react";
import { IconContext } from "@phosphor-icons/react";
import { ComponentPropsWithoutRef, forwardRef, useMemo } from "react";
import { Merge } from "type-fest";
import {
  DesignContext,
  TDesignRounded,
  TDesignSize,
  TDesignVariant,
} from "../DesignContext";
import { DynamicColorProvider, TDynamicColor } from "../DynamicColorProvider";
import { ButtonContent } from "./ButtonContent";
import { buttonRoundedClass, buttonSizeClass } from "./styles";

export type ButtonProps = Merge<
  ComponentPropsWithoutRef<"button">,
  {
    // Design
    color?: TDynamicColor;
    size?: TDesignSize;
    variant?: TDesignVariant;
    rounded?: TDesignRounded;
    disabled?: boolean;

    // For content
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    title?: React.ReactNode;
    details?: string | React.ReactNode;
    loading?: boolean;
  }
>;

export const Button = forwardRef(
  (inProps: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      color,
      rounded,
      size,
      variant,
      disabled,

      title,
      icon,
      endIcon,
      details,
      loading,
      children = (
        <ButtonContent {...{ title, icon, endIcon, details, loading }} />
      ),

      className,
      type = "button",
      ...buttonProps
    } = DesignContext.useProps(inProps);

    const mainClass = useMemo(
      () => buttonClassName(size, variant, rounded),
      [size, variant, rounded],
    );

    const iconProps = useMemo(
      () => ({ size: pick(size, { xs: 16, sm: 16, md: 20, lg: 26 }) }),
      [size],
    );

    return (
      <DesignContext.Provider
        rounded={rounded}
        size={size}
        variant={variant}
        disabled={disabled}
      >
        <IconContext.Provider value={iconProps}>
          <DynamicColorProvider color={color}>
            <Ariakit.Button
              ref={ref}
              className={cn(mainClass, className)}
              disabled={disabled}
              type={type}
              {...buttonProps}
            >
              {children}
            </Ariakit.Button>
          </DynamicColorProvider>
        </IconContext.Provider>
      </DesignContext.Provider>
    );
  },
);

function buttonClassName(
  size: TDesignSize,
  variant: TDesignVariant,
  rounded: TDesignRounded,
) {
  const variantClass = pick(variant, {
    primary: cn(
      tw`bg-dynamic-600 text-white ring-dynamic-500/30`,
      tw`hover:bg-dynamic-500`,
      tw`aria-disabled:bg-dynamic-700 aria-disabled:text-white/50 aria-disabled:ring-dynamic-500/30`,
      tw`data-focus-visible:ring-dynamic-300 data-focus-visible:ring-2`,
    ),
    secondary: cn(
      tw`bg-white/5 text-dynamic-200 ring-dynamic-500/50`,
      tw`hover:bg-dynamic-600 hover:text-white`,
      tw`aria-disabled:bg-white/5 aria-disabled:text-dynamic-200/50 aria-disabled:ring-dynamic-500/50`,
      tw`data-focus-visible:ring-dynamic-400/40 data-focus-visible:ring-2`,
    ),
    tertiary: cn(
      tw`text-white ring-dynamic-500/50`,
      tw`hover:bg-white/5 hover:text-dynamic-300`,
      tw`aria-disabled:text-dynamic-200/40 aria-disabled:ring-dynamic-700/50`,
      tw`data-focus-visible:ring-dynamic-400/40 data-focus-visible:ring-2`,
    ),
  });

  return cn(
    tw`flex flex-row items-center justify-center text-left group overflow-hidden relative`,
    tw`outline-none`,
    buttonRoundedClass(rounded),
    buttonSizeClass(size),
    variantClass,
    tw`disabled:cursor-not-allowed data-focus-visible:z-10`,
  );
}
