import { Content } from "../components/Content";

export default function HeaderContentFooter({ contents }) {
  const content1 = contents.find((content) => +content.position === 1);
  const content2 = contents.find((content) => +content.position === 2);
  const content3 = contents.find((content) => +content.position === 3);
  return (
    <div className="w-screen h-screen">
      <div className="h-1/5">
        <Content content={content1} />
      </div>
      <div className="h-3/5">
        <Content content={content2} />
      </div>
      <div className="h-1/5">
        <Content content={content3} />
      </div>
    </div>
  );
}
