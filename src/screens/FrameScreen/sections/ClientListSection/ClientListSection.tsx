import { ExternalLinkIcon, MoreVerticalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../../components/ui/table";

// Document data for mapping
const documents = [
  {
    name: "Performance Summary",
    type: "Performance Summary",
    dateRange: "March 1, 2025 to March 1, 2026",
    owner: "Sarah Mitchell",
    createdDate: "March 1, 2025",
    status: "Completed",
    statusColor: "emerald",
  },
  {
    name: "Performance Summary",
    type: "Performance Summary",
    dateRange: "March 1, 2025 to March 1, 2026",
    owner: "Sarah Mitchell",
    createdDate: "March 1, 2025",
    status: "Draft",
    statusColor: "sky",
  },
  {
    name: "Performance Summary",
    type: "Performance Summary",
    dateRange: "March 1, 2025 to March 1, 2026",
    owner: "Sarah Mitchell",
    createdDate: "March 1, 2025",
    status: "In Review",
    statusColor: "orange",
  },
  {
    name: "Performance Summary",
    type: "Performance Summary",
    dateRange: "March 1, 2025 to March 1, 2026",
    owner: "Sarah Mitchell",
    createdDate: "March 1, 2025",
    status: "Archived",
    statusColor: "slate",
  },
  {
    name: "Performance Summary",
    type: "Performance Summary",
    dateRange: "March 1, 2025 to March 1, 2026",
    owner: "Sarah Mitchell",
    createdDate: "March 1, 2025",
    status: "Completed",
    statusColor: "emerald",
  },
];

// Helper function to get status badge styling
const getStatusBadgeStyles = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-emerald-100 text-emerald-700";
    case "Draft":
      return "bg-sky-100 text-sky-700";
    case "In Review":
      return "bg-orange-100 text-orange-700";
    case "Archived":
      return "bg-slate-100 text-slate-600";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

export const ClientListSection = (): JSX.Element => {
  return (
    <Card className="w-full border border-slate-200 shadow-[0px_0px_0px_1px_#f1f5f9] rounded-lg overflow-hidden">
      <CardHeader className="px-4 py-4 pb-0">
        <CardTitle className="text-slate-700 font-header-h5-20 text-[length:var(--header-h5-20-font-size)] tracking-[var(--header-h5-20-letter-spacing)] leading-[var(--header-h5-20-line-height)]">
          Recent document
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="w-full overflow-x-auto">
          <Table>
            <TableBody>
              {documents.map((doc, index) => (
                <TableRow key={index} className="h-11">
                  <TableCell className="min-w-40 px-[17.5px] py-[13.12px] border-b border-slate-200">
                    <div className="flex items-center">
                      <span className="text-blue-600 text-sm font-normal font-['Inter',Helvetica] overflow-hidden text-ellipsis whitespace-nowrap">
                        {doc.name}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="min-w-[180px] px-[17.5px] py-[13.12px] border-b border-slate-200">
                    <div className="flex items-center">
                      <span className="text-slate-700 text-sm font-normal font-['Inter',Helvetica] overflow-hidden text-ellipsis whitespace-nowrap">
                        {doc.type}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="min-w-40 px-[17.5px] py-[13.12px] border-b border-slate-200">
                    <div className="flex items-center">
                      <span className="text-slate-700 text-sm font-normal font-['Inter',Helvetica] overflow-hidden text-ellipsis whitespace-nowrap">
                        {doc.dateRange}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="min-w-[140px] px-[17.5px] py-[13.12px] border-b border-slate-200">
                    <div className="flex items-center">
                      <span className="text-slate-700 text-sm font-normal font-['Inter',Helvetica]">
                        {doc.owner}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="min-w-40 px-[17.5px] py-[13.12px] border-b border-slate-200">
                    <div className="flex items-center">
                      <span className="text-slate-700 text-sm font-normal font-['Inter',Helvetica]">
                        {doc.createdDate}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="min-w-[100px] px-[17.5px] py-[13.12px] border-b border-slate-200">
                    <Badge
                      className={`px-[7px] py-[3.5px] rounded-md font-bold text-[12.2px] ${getStatusBadgeStyles(doc.status)}`}
                    >
                      {doc.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="w-11 px-3.5 py-[10.5px] border-b border-slate-200">
                    <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                      <MoreVerticalIcon className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-end mt-6">
          <Button
            variant="ghost"
            className="text-indigo-600 font-medium text-sm px-[10.5px] py-[7px] h-auto"
          >
            See All Documents
            <ExternalLinkIcon className="ml-[7px] h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
