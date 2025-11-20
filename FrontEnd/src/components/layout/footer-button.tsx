import { LucideIcon } from "lucide-react";

import Link from "next/link";

type Props = {
  href: string;
  icon: LucideIcon;
  label?: string;
};
export const FooterButton = ({ href, icon: Icon, label }: Props) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-4 border border-gray-700 rounded-sm p-4 hover:bg-gray-900">
        <Icon width={24} height={24} className="size-6" />
        {label && <div className="flex-1">{label}</div>}
      </div>
    </Link>
  );
};
