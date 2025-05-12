import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const UpcomingReportsSection = (): JSX.Element => {
  // Data for upcoming reports
  const upcomingReports = [
    {
      title: "Q2 Performance Review",
      dueText: "Due in 3 days",
      date: "Apr 30",
      color: "amber",
    },
    {
      title: "Annual Portfolio Analysis",
      dueText: "Due in 7 days",
      date: "May 4",
      color: "lime",
    },
    {
      title: "Q3 Performance Review",
      dueText: "Due in 9 days",
      date: "May 6",
      color: "lime",
    },
  ];

  // Data for client list
  const clients = [
    {
      name: "Munsch",
      iconBg: "bg-amber-100",
      icon: "home",
      iaCode: "HB3",
      marketValue: "$2,000,000",
      lastGeneration: "March 1, 2025",
    },
    {
      name: "Robert Munsch",
      iconBg: "bg-blue-100",
      icon: "user",
      iaCode: "HB3",
      marketValue: "$2,000,000",
      lastGeneration: "March 1, 2025",
    },
    {
      name: "Robert Munsch",
      iconBg: "bg-blue-100",
      icon: "user",
      iaCode: "HB3",
      marketValue: "$2,000,000",
      lastGeneration: "March 1, 2025",
    },
  ];

  // Data for recent activities
  const recentActivities = [
    {
      user: "Sarah Johnson",
      action: "commented on",
      target: '"Erikson Portfolio"',
      time: "10 mins ago",
      iconBg: "bg-indigo-50",
      iconUrl: "https://c.animaapp.com/GTLHickx/img/comment.svg",
      isNew: true,
    },
    {
      user: "Thomas",
      action: "made changes to",
      target: '"Quarterly Report"',
      time: "1 hour ago",
      iconBg: "bg-orange-50",
      iconUrl: "https://c.animaapp.com/GTLHickx/img/pen-to-square.svg",
      isNew: true,
    },
    {
      user: "Mark Chen",
      action: "approved",
      target: '"Johnson Investment Plan"',
      time: "3 hours ago",
      iconBg: "bg-green-50",
      iconUrl: "https://c.animaapp.com/GTLHickx/img/check-circle.svg",
      isNew: false,
    },
    {
      user: "Sarah Johnson",
      action: "commented on",
      target: '"Erikson Portfolio"',
      time: "Yesterday",
      iconBg: "bg-indigo-50",
      iconUrl: "https://c.animaapp.com/GTLHickx/img/comment-1.svg",
      isNew: false,
    },
    {
      user: "Sarah Johnson",
      action: "commented on",
      target: '"Erikson Portfolio"',
      time: "Yesterday",
      iconBg: "bg-indigo-50",
      iconUrl: "https://c.animaapp.com/GTLHickx/img/comment-2.svg",
      isNew: false,
    },
    {
      user: "Sarah Johnson",
      action: "commented on",
      target: '"Erikson Portfolio"',
      time: "Yesterday",
      iconBg: "bg-indigo-50",
      iconUrl: "https://c.animaapp.com/GTLHickx/img/comment-3.svg",
      isNew: false,
    },
  ];

  return (
    <div className="flex gap-4 w-full">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex gap-4 w-full">
          {/* Upcoming Scheduled Report Card */}
          <Card className="flex-1">
            <CardContent className="flex flex-col gap-[27px] p-4">
              <h2 className="font-header-h5-20 text-slate-700 text-[length:var(--header-h5-20-font-size)] tracking-[var(--header-h5-20-letter-spacing)] leading-[var(--header-h5-20-line-height)] [font-style:var(--header-h5-20-font-style)]">
                Upcoming Scheduled Report
              </h2>

              <div className="flex flex-col">
                {upcomingReports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-full py-1.5 border-b border-slate-200"
                  >
                    <div className="flex flex-col">
                      <div className="font-text-subtitle2-14 text-slate-700 text-[length:var(--text-subtitle2-14-font-size)] leading-[var(--text-subtitle2-14-line-height)] tracking-[var(--text-subtitle2-14-letter-spacing)] [font-style:var(--text-subtitle2-14-font-style)]">
                        {report.title}
                      </div>
                      <div className="font-text-caption-12 text-slate-500 text-[length:var(--text-caption-12-font-size)] leading-[var(--text-caption-12-line-height)] tracking-[var(--text-caption-12-letter-spacing)] [font-style:var(--text-caption-12-font-style)]">
                        {report.dueText}
                      </div>
                    </div>
                    <Badge
                      className={`bg-${report.color}-50 text-${report.color}-700 border-${report.color}-300 h-[22px] px-2 py-1 rounded-md`}
                    >
                      <span className="font-bold text-xs [font-family:'Inter',Helvetica]">
                        {report.date}
                      </span>
                    </Badge>
                  </div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="self-end flex items-center gap-[7px] text-indigo-600 font-medium text-sm"
              >
                See All Report
                <img
                  className="w-3.5 h-3.5"
                  alt="External link"
                  src="https://c.animaapp.com/GTLHickx/img/external-link-1.svg"
                />
              </Button>
            </CardContent>
          </Card>

          {/* Template Card */}
          <Card className="flex-1 h-[297px]">
            <CardContent className="flex flex-col justify-between h-full p-4">
              <CardTitle className="font-header-h5-20 text-slate-700 text-[length:var(--header-h5-20-font-size)] tracking-[var(--header-h5-20-letter-spacing)] leading-[var(--header-h5-20-line-height)] [font-style:var(--header-h5-20-font-style)]">
                Template
              </CardTitle>

              <div className="flex flex-col gap-[18px] w-full">
                <Card className="border border-slate-200 p-[17.5px]">
                  <CardContent className="p-0 flex flex-col gap-[7px]">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-slate-700 text-[17.5px] leading-6">
                        Performance Summary
                      </h3>
                      <Badge className="bg-purple-50 text-purple-500 rounded-xl px-[7px] py-[3.5px] flex items-center gap-[3.5px]">
                        <img
                          className="w-[10.5px] h-[10.5px]"
                          alt="Icon document"
                          src="https://c.animaapp.com/GTLHickx/img/icon-document.svg"
                        />
                        <span className="font-bold text-[12.2px]">
                          Used in 100 Report
                        </span>
                      </Badge>
                    </div>

                    <p className="font-text-caption-12 text-slate-700 text-[length:var(--text-caption-12-font-size)] tracking-[var(--text-caption-12-letter-spacing)] leading-[var(--text-caption-12-line-height)] h-9 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--text-caption-12-font-style)]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>

                    <div className="flex items-center gap-[9px]">
                      <img
                        className="w-3.5 h-3.5"
                        alt="Tag"
                        src="https://c.animaapp.com/GTLHickx/img/tag.svg"
                      />
                      {["Performance", "Annual", "High-growth"].map(
                        (tag, index) => (
                          <Badge
                            key={index}
                            className="bg-slate-100 text-slate-600 px-[7px] py-[3.5px] rounded-md"
                          >
                            <span className="font-medium text-[12.2px] [font-family:'Inter',Helvetica]">
                              {tag}
                            </span>
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-0 mt-4">
                    <Button className="w-full bg-indigo-600 text-white font-medium text-sm">
                      Create Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Client List Card */}
        <Card>
          <CardContent className="flex flex-col gap-[27px] p-4">
            <h2 className="font-header-h5-20 text-slate-700 text-[length:var(--header-h5-20-font-size)] tracking-[var(--header-h5-20-letter-spacing)] leading-[var(--header-h5-20-line-height)] [font-style:var(--header-h5-20-font-style)]">
              Client list
            </h2>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[120px] flex-1 font-semibold text-slate-700 text-sm">
                    <div className="flex items-center gap-[7px]">
                      Client
                      <img
                        className="w-[12.25px] h-[12.25px]"
                        alt="Sort alt"
                        src="https://c.animaapp.com/GTLHickx/img/sort-alt.svg"
                      />
                      <div className="w-[18px] h-3.5 bg-[url(https://c.animaapp.com/GTLHickx/img/filter.svg)] bg-[100%_100%]" />
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[180px] flex-1 font-semibold text-slate-700 text-sm">
                    <div className="flex items-center gap-[7px]">
                      IA Code
                      <img
                        className="w-[12.25px] h-[12.25px]"
                        alt="Sort alt"
                        src="https://c.animaapp.com/GTLHickx/img/sort-alt-1.svg"
                      />
                      <div className="w-[18px] h-3.5 bg-[url(https://c.animaapp.com/GTLHickx/img/filter-1.svg)] bg-[100%_100%]" />
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[180px] flex-1 font-semibold text-slate-700 text-sm">
                    <div className="flex items-center gap-[7px]">
                      Market Value
                      <img
                        className="w-[12.25px] h-[12.25px]"
                        alt="Sort alt"
                        src="https://c.animaapp.com/GTLHickx/img/sort-alt-2.svg"
                      />
                      <div className="w-[18px] h-3.5 bg-[url(https://c.animaapp.com/GTLHickx/img/filter-2.svg)] bg-[100%_100%]" />
                    </div>
                  </TableHead>
                  <TableHead className="min-w-[200px] flex-1 font-semibold text-slate-700 text-sm">
                    <div className="flex items-center gap-[7px]">
                      Last Generation Day
                      <img
                        className="w-[12.25px] h-[12.25px]"
                        alt="Sort alt"
                        src="https://c.animaapp.com/GTLHickx/img/sort-alt-3.svg"
                      />
                      <div className="w-[18px] h-3.5 bg-[url(https://c.animaapp.com/GTLHickx/img/filter-3.svg)] bg-[100%_100%]" />
                    </div>
                  </TableHead>
                  <TableHead className="w-11"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client, index) => (
                  <TableRow key={index}>
                    <TableCell className="min-w-[120px] flex-1 py-[10.5px]">
                      <div className="flex items-center gap-[7px]">
                        <div
                          className={`w-4 h-4 ${client.iconBg} rounded-[20971500px] relative`}
                        >
                          {client.icon === "home" ? (
                            <img
                              className="absolute w-3 h-3 top-0.5 left-0.5"
                              alt="Home"
                              src="https://c.animaapp.com/GTLHickx/img/home.svg"
                            />
                          ) : (
                            <img
                              className="absolute w-3 h-3 top-0.5 left-0.5"
                              alt="User"
                              src="https://c.animaapp.com/GTLHickx/img/user-1.svg"
                            />
                          )}
                        </div>
                        <div className="font-normal text-blue-600 text-sm overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-family:'Inter',Helvetica]">
                          {client.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="min-w-[180px] flex-1 font-normal text-slate-700 text-sm [font-family:'Inter',Helvetica]">
                      {client.iaCode}
                    </TableCell>
                    <TableCell className="min-w-[180px] flex-1 font-normal text-slate-700 text-sm [font-family:'Inter',Helvetica]">
                      {client.marketValue}
                    </TableCell>
                    <TableCell className="min-w-[200px] flex-1 font-normal text-slate-700 text-sm [font-family:'Inter',Helvetica]">
                      {client.lastGeneration}
                    </TableCell>
                    <TableCell className="w-11">
                      <img
                        className="w-4 h-4"
                        alt="Ellipsis v"
                        src={`https://c.animaapp.com/GTLHickx/img/ellipsis-v-${5 + index}.svg`}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Button
              variant="ghost"
              className="self-end flex items-center gap-[7px] text-indigo-600 font-medium text-sm"
            >
              See All Clients
              <img
                className="w-3.5 h-3.5"
                alt="External link"
                src="https://c.animaapp.com/GTLHickx/img/external-link-2.svg"
              />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities Card */}
      <Card className="w-[300px]">
        <CardHeader className="h-14 py-[17.5px] px-[17.5px]">
          <CardTitle className="font-header-h5-20 text-slate-700 text-[length:var(--header-h5-20-font-size)] tracking-[var(--header-h5-20-letter-spacing)] leading-[var(--header-h5-20-line-height)] [font-style:var(--header-h5-20-font-style)]">
            Recent Activities
          </CardTitle>
        </CardHeader>

        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 border-b border-slate-200"
          >
            <div
              className={`w-9 h-9 ${activity.iconBg} rounded-3xl flex items-center justify-center`}
            >
              <img
                className="w-3.5 h-3.5 ml-[-2.00px] mr-[-2.00px]"
                alt="Activity icon"
                src={activity.iconUrl}
              />
            </div>

            <div className="flex flex-col flex-1">
              <div className="font-text-caption-12 text-black text-[length:var(--text-caption-12-font-size)] tracking-[var(--text-caption-12-letter-spacing)] leading-[var(--text-caption-12-line-height)] [font-style:var(--text-caption-12-font-style)]">
                <span className="font-text-caption-12">{activity.user}</span>
                <span> {activity.action}</span>
                <span> {activity.target}</span>
              </div>
              <div className="font-text-caption-12 text-slate-500 text-[length:var(--text-caption-12-font-size)] tracking-[var(--text-caption-12-letter-spacing)] leading-[var(--text-caption-12-line-height)] [font-style:var(--text-caption-12-font-style)]">
                {activity.time}
              </div>
            </div>

            {activity.isNew && <div className="w-2 h-2 bg-blue-700 rounded" />}
          </div>
        ))}

        <div className="flex items-center justify-center px-6 py-3">
          <Button
            variant="ghost"
            className="text-indigo-600 font-medium text-sm"
          >
            View all notification
          </Button>
        </div>
      </Card>
    </div>
  );
};
