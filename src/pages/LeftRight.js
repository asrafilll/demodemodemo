import { Content } from "../components/Content";

export default function LeftRight({ contents }) {
  const content1 = contents.find((content) => +content.position === 1);
  const content2 = contents.find((content) => +content.position === 2);

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2">
        <Content content={content1} />
      </div>
      <div className="w-1/2">
        <Content content={content2} />
      </div>
    </div>
  );
}
