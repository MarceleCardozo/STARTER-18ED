import React from "react";

interface ParagraphProps {
  content: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ content }) => {
  return <p>{content}</p>;
};

export default Paragraph;
