interface InputDefaultProps {
  label: string;
  key: string;
  value: string;
  action: (value: string) => void;
}

function InputDefault({ key, label, value, action }: InputDefaultProps) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type="text" />
    </>
  );
}
