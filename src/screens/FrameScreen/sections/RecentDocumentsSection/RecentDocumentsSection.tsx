import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const RecentDocumentsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <h2 className="font-header-h3-32 text-slate-600 text-[length:var(--header-h3-32-font-size)] tracking-[var(--header-h3-32-letter-spacing)] leading-[var(--header-h3-32-line-height)] [font-style:var(--header-h3-32-font-style)] font-[number:var(--header-h3-32-font-weight)]">
            Dashboard
          </h2>
        </div>

        <Button className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 h-auto py-[7px]">
          <PlusCircleIcon className="w-3.5 h-3.5" />
          <span className="font-medium text-sm">Create New Document</span>
        </Button>
      </div>
    </div>
  );
};
