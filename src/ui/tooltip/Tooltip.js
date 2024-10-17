import "./tooltip.css";

const Tooltip = ({ text, position }) => {
  const tooltipClassName = `tooltip tooltip-${position}`;
  return (
    <div className={tooltipClassName}>
      <span className="tooltip-text">{text}</span>
    </div>
  );
};
export default Tooltip;
