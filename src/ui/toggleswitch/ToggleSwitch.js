import "./toggleswitch.css";

const ToggleSwitch = ({ label, checked, onChange }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle"
        checked={checked}
        onChange={onChange}
        className="toggle-input"
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-button"></span>
      </label>
      <span className="toggle-text">{label}</span>
    </div>
  );
};

export default ToggleSwitch;
