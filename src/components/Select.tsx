import * as Ariakit from "@ariakit/react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { Button } from "./button/Button";
import { ButtonContent } from "./button/ButtonContent";
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

  const value = store.useState((s) => s.value);
  const selectedItem = items.find((item) => item.value === value)!;
  const open = store.useState((s) => s.open);

  return (
    <div>
      <Ariakit.SelectProvider store={store}>
        <Ariakit.SelectLabel>{label}</Ariakit.SelectLabel>
        <Ariakit.Select render={<Button variant="primary" />}>
          <ButtonContent
            title={selectedItem.title}
            icon={selectedItem.icon}
            endIcon={open ? <CaretUp /> : <CaretDown />}
          />
        </Ariakit.Select>
        <Ariakit.SelectPopover
          gutter={4}
          modal
          overlap
          render={
            <Paper
              level="popover"
              className="p-1.5 flex flex-col min-w-[--popover-anchor-width] max-h-[--popover-available-height] overflow-y-auto scrollbar-hide"
            />
          }
        >
          {items.map((item) => (
            <Ariakit.SelectItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              render={<SelectItem item={item} />}
            />
          ))}
        </Ariakit.SelectPopover>
      </Ariakit.SelectProvider>
    </div>
  );
}
