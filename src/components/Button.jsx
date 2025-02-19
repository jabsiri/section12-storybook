import "./Button.css";

/**
 * 버튼컴포넌트 입니다.
 */
const Button = ({text, type, onClick}) => {
  return (
    <button
      className={`Button Button_${type}`}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
