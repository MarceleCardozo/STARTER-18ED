interface InputDefaultProps {
  label: string;
  key: string;
  value: string;
  action: (value: string) => void;
}

function InputDefault({ key, label, value, action }: InputDefaultProps) {
  return (
    <>
      <label htmlFor={key}>{label}:</label>
      <input
        type="text"
        name={key}
        key={key}
        value={value}
        onChange={(e) => action(e.target.value)}
      />
      <br />
    </>
  );
}
export default InputDefault;
