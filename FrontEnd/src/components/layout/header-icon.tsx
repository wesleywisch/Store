import { LucideIcon } from "lucide-react";

type HeaderIconProps = {
  icon: LucideIcon;
  size?: number;
  color?: string;
  selected?: boolean;
  bgColor?: string;
};

export function HeaderIcon({
  icon: Icon,
  size = 24,
  color,
  selected,
}: HeaderIconProps) {
  return (
    <div
      className={`size-12 border border-gray-200 rounded-sm flex justify-center items-center transition-colors ${
        selected ? "bg-blue-600" : "hover:bg-gray-100"
      }`}
    >
      <Icon
        width={size}
        height={size}
        className="size-6"
        color={selected ? "#fff" : color}
      />
    </div>
  );
}
