import {
  BriefcaseBusiness,
  FileCheck2,
  CalendarCheck,
  Bookmark,
  TrendingUp,
} from "lucide-react";

import "./OverviewCards.css";

const overviewItems = [
  {
    title: "Applications Sent",
    value: "12",
    note: "+3 this week",
    icon: BriefcaseBusiness,
    color: "green",
  },
  {
    title: "Resume Score",
    value: "86/100",
    note: "Strong profile",
    icon: FileCheck2,
    color: "blue",
  },
  {
    title: "Interviews",
    value: "2",
    note: "Upcoming",
    icon: CalendarCheck,
    color: "purple",
  },
  {
    title: "Saved Jobs",
    value: "8",
    note: "Review anytime",
    icon: Bookmark,
    color: "orange",
  },
];

const OverviewCards = () => {
  return (
    <section className="overview-grid">
      {overviewItems.map((item) => {
        const Icon = item.icon;

        return (
          <article className="overview-card" key={item.title}>
            <div className={`overview-icon ${item.color}`}>
              <Icon size={21} />
            </div>

            <p className="overview-title">{item.title}</p>

            <div className="overview-value-row">
              <h2>{item.value}</h2>
              {item.title === "Applications Sent" && (
                <TrendingUp size={17} className="overview-trend" />
              )}
            </div>

            <span className="overview-note">{item.note}</span>
          </article>
        );
      })}
    </section>
  );
};

export default OverviewCards;