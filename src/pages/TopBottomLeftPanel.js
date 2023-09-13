import { Content } from "../components/Content";

export default function TopBottomLeftPanel({ contents }) {
  const content1 = contents.find((content) => +content.position === 1);
  const content2 = contents.find((content) => +content.position === 2);
  const content3 = contents.find((content) => +content.position === 3);
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/3">
        <Content content={content1} />
      </div>
      <div className="w-2/3">
        <div className="h-1/2">
          <Content content={content2} />
        </div>
        <div className="h-1/2">
          <Content content={content3} />
        </div>
      </div>
    </div>
  );
}

// export default function TopBottomLeftPanel({ images }) {
//   return (
//     <div className="w-screen h-screen flex">
//       <div id="1" className="w-1/3">
//         <img
//           src={images[0].url ? images[0].url : "https://placehold.co/500x1000"}
//           className="w-full h-full object-center object-cover"
//         />
//       </div>
//       <div className="w-2/3">
//         <div id="2" className="h-1/2">
//           <img
//             src={images[1].url ? images[1].url : "https://placehold.co/500x500"}
//             className="w-full h-full object-center object-cover"
//           />
//         </div>
//         <div id="3" className="h-1/2">
//           <img
//             src={images[2].url ? images[2].url : "https://placehold.co/500x500"}
//             className="w-full h-full object-center object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
