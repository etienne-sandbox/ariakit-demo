import { cn, pick, tw } from "@/utils/styles";
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

export type ButtonLikeProps = Merge<
  ComponentPropsWithoutRef<"div">,
  {
    // Design
    color?: TDynamicColor;
    size?: TDesignSize;
    variant?: TDesignVariant;
    rounded?: TDesignRounded;

    // For content
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    title?: React.ReactNode;
    details?: string | React.ReactNode;
    loading?: boolean;
  }
>;

/**
 * ButtonLike is a component that looks like a button but is a dis and has not hover styles.
 */
export const ButtonLike = forwardRef(
  (inProps: ButtonLikeProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      color,
      rounded,
      size,
      variant,

      title,
      icon,
      endIcon,
      details,
      loading,
      children = (
        <ButtonContent {...{ title, icon, endIcon, details, loading }} />
      ),

      className,
      ...divProps
    } = DesignContext.useProps(inProps);

    const mainClass = useMemo(
      () => buttonLikeClassName(size, variant, rounded),
      [size, variant, rounded],
    );

    const iconProps = useMemo(
      () => ({ size: pick(size, { xs: 16, sm: 16, md: 20, lg: 26 }) }),
      [size],
    );

    return (
      <DesignContext.Provider {...{ rounded, size, variant }}>
        <IconContext.Provider value={iconProps}>
          <DynamicColorProvider color={color}>
            <div ref={ref} className={cn(mainClass, className)} {...divProps}>
              {children}
            </div>
          </DynamicColorProvider>
        </IconContext.Provider>
      </DesignContext.Provider>
    );
  },
);

function buttonLikeClassName(
  size: TDesignSize,
  variant: TDesignVariant,
  rounded: TDesignRounded,
) {
  const variantClass = pick(variant, {
    primary: cn(tw`bg-dynamic-600 text-white`),
    secondary: cn(tw`bg-white/5 text-dynamic-200`),
    tertiary: cn(tw`bg-transparent text-white`),
  });

  return cn(
    tw`inline-flex flex-row items-center justify-center text-left group overflow-hidden relative`,
    tw`outline-none`,
    buttonRoundedClass(rounded),
    buttonSizeClass(size),
    variantClass,
    tw`disabled:cursor-not-allowed data-focus-visible:z-10`,
  );
}
