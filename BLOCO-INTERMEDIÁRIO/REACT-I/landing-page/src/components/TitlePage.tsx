interface TitleProps {
  title: string;
}
function TitlePage({ title }: TitleProps) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
export default TitlePage;
