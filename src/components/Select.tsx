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
  return <div>TODO</div>;
}
