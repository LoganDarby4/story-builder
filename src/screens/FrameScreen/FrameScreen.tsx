import React from "react";
import { ClientListSection } from "./sections/ClientListSection";
import { RecentDocumentsSection } from "./sections/RecentDocumentsSection/RecentDocumentsSection";
import { UpcomingReportsSection } from "./sections/UpcomingReportsSection/UpcomingReportsSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <main
      className="flex flex-col w-full gap-4 px-6 py-4"
      data-model-id="1009:75430"
    >
      <RecentDocumentsSection />
      <ClientListSection />
      <UpcomingReportsSection />
    </main>
  );
};
