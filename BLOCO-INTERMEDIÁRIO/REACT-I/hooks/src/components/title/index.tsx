import Title from "./styled";

interface BeautifulTitleProps {
  children: React.ReactNode;
}

const BeautifulTitle = ({ children }: BeautifulTitleProps) => {
  return <Title>{children}</Title>;
};

export default BeautifulTitle;
