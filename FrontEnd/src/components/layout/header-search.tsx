import { Search } from "lucide-react";

export function HeaderSearch() {
  return (
    <div className="border border-gray-200 w-full px-4 py-3 rounded-sm flex">
      <Search width={24} height={24} />
      <input
        className="ml-3 outline-none"
        type="search"
        placeholder="O que você procura?"
      />
    </div>
  );
}
