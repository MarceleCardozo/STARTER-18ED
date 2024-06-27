interface ButtonDefaultProps {
  label: string;
  action?: () => void;
  type?: "submit";
}

function ButtonDefault({ label, action, type }: ButtonDefaultProps) {
  return (
    <>
      <button type={type} onClick={action}>
        {label}
      </button>
    </>
  );
}

export default ButtonDefault;
