import { Content } from "../components/Content";

export default function FullScreen({ contents }) {
  const content = contents.find((content) => +content.position === 1);

  return (
    <div className="w-screen h-screen">
      <Content content={content} />
    </div>
  );
}
