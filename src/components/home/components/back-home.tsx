import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export function BackHome() {
  return (
    <Link
      href="/"
      className="inline-flex w-fit items-center gap-1 self-start text-xs text-[#6d6d6d] transition-colors hover:text-black dark:text-[#b5b5bf] dark:hover:text-white"
    >
      <ArrowLeftIcon className="size-3.5" />
      Volver
    </Link>
  );
}
