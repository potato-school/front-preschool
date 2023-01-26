import "./index.css";

export default function Button({ label, size, color, onClick }) {
  const buttonStyle = `${size} ${color}`;

  return (
    <button className={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}
