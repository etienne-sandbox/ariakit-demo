import * as Ariakit from "@ariakit/react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { Button } from "./button/Button";
import { ButtonContent } from "./button/ButtonContent";
import { DesignContext } from "./DesignContext";
import { Paper } from "./Paper";
import { SelectItem } from "./SelectItem";

export interface TSelectItem {
  value: string;
  title: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

interface SelectProps {
  label: string;
  items: TSelectItem[];
}

export function Select({ label, items }: SelectProps) {
  const store = Ariakit.useSelectStore({ defaultValue: items[0].value });

  const selectedValue = store.useState((s) => s.value);
  const open = store.useState((s) => s.open);

  const selectedItem = items.find((item) => item.value === selectedValue);

  if (!selectedItem) {
    throw new Error("Selected item not found");
  }

  return (
    <div>
      <Ariakit.SelectProvider store={store}>
        <Ariakit.SelectLabel>{label}</Ariakit.SelectLabel>
        <Ariakit.Select render={<Button />}>
          <ButtonContent
            title={selectedItem.title}
            endIcon={open ? <CaretUp /> : <CaretDown />}
            icon={selectedItem.icon}
            className="min-w-40"
          />
        </Ariakit.Select>
        <Ariakit.SelectPopover
          gutter={4}
          modal
          overlap
          preventBodyScroll
          render={
            <Paper
              level="popover"
              className="p-1.5 flex flex-col min-w-[--popover-anchor-width] max-h-[--popover-available-height] overflow-y-auto scrollbar-hide"
            />
          }
        >
          <DesignContext.Provider size="sm">
            {items.map((item) => (
              <Ariakit.SelectItem
                key={item.value}
                value={item.value}
                disabled={item.disabled}
                render={<SelectItem item={item} />}
              />
            ))}
          </DesignContext.Provider>
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
  );
}
