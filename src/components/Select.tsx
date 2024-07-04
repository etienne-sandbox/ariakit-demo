import { forwardRef } from "react";

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

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select({ label, items }, ref) {
  return <div>TODO</div>;
});
