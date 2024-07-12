import { cn, tw } from "@/utils/styles";
import * as Ariakit from "@ariakit/react";
import { forwardRef } from "react";
import { ButtonContent } from "./button/ButtonContent";
import { TSelectItem } from "./Select";

interface SelectItemProps extends Ariakit.SelectItemProps {
  item: TSelectItem;
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectItem({ item, ...props }, ref) {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          tw`flex flex-row items-center justify-center text-left group overflow-hidden relative shrink-0`,
          tw`rounded cursor-pointer`,
          tw`aria-disabled:opacity-30`,
          tw`data-active-item:bg-dynamic-600/20`,
          tw`aria-selected:bg-dynamic-600 aria-selected:text-white`,
          tw`data-active-item:aria-selected:bg-dynamic-700`,
        )}
      >
        <ButtonContent title={item.title} icon={item.icon} />
      </div>
    );
  },
);
