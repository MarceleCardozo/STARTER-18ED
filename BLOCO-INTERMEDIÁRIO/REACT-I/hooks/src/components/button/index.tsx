import Button from "./styled";

interface BeautifulButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const BeautifulButton = ({ children, onClick }: BeautifulButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default BeautifulButton;
