import "./base.css";

const badgeTypes = {
  neutral: "badge-neutral",
  primary: "badge-primary",
  secondary: "badge-secondary",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error"
};

export default function Badge({type, name}) {
  let badgeStyle = type == null || type == undefined || type == "" ? "" : "badge-" + type;
  //return <div className={`badge ${badgeStyle}`}>{name}</div>;
  return <div className={`badge ${badgeTypes[type] || ""}`}>{name}</div>;
}
