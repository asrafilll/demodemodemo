import { Content } from "../components/Content";

export default function TopBottom({ contents }) {
  const content1 = contents.find((content) => +content.position === 1);
  const content2 = contents.find((content) => +content.position === 2);
  return (
    <div className="w-screen h-screen">
      <div id="1" className="h-1/2">
        <Content content={content1} />
      </div>
      <div className="h-1/2">
        <Content content={content2} />
      </div>
    </div>
  );
}
