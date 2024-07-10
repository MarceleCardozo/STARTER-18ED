import Paragraph from "./styled";

interface BeautifulParagraphProps {
  children: React.ReactNode;
}

const BeautifulParagraph = ({ children }: BeautifulParagraphProps) => {
  return <Paragraph>{children}</Paragraph>;
};

export default BeautifulParagraph;
