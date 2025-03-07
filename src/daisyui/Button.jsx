export default function Button({color, children, onClick}) {
  return (
    <button
      style={{backgroundColor: color}}
      onClick={onClick}>
      {children}
    </button>
  );
}
