import "./input.css";

const Input = (props) => {
  return (
    <div className={`form-input col-${props.col?props.col:null}`}>
      <label>{props.label}</label>
      <input {...props}  />
    </div>
  );
};
export default Input;
