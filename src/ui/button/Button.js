import Icon from "@mdi/react";
import "./button.css";

const Button = (props) => {
  const { icon, type, label, onClick, disabled }=props
  return (
    <button {...props} disabled ={disabled} type={type?type:null} className="button" onClick={onClick}>
      {icon?<> <Icon path={icon} size={0.7}/> <span>{label}</span></>:label  }
    </button>
  );
};
export default Button;
