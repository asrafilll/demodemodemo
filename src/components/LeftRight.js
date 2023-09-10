export default function LeftRight() {
  return (
    <div className="w-screen h-screen flex">
      <div id="1" className="w-1/2">
        <img
          src="https://placehold.co/500x1000"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div id="2" className="w-1/2">
        <img
          src="https://placehold.co/500x1000"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}

// export default function LeftRight({ images }) {
//   return (
//     <div className="w-screen h-screen flex">
//       <div id="1" className="w-1/2">
//         <img
//           src={images[0].url ? images[0].url : "https://placehold.co/500x1000"}
//           className="w-full h-full object-center object-cover"
//         />
//       </div>
//       <div id="2" className="w-1/2">
//         <img
//           src={images[1].url ? images[1].url : "https://placehold.co/500x1000"}
//           className="w-full h-full object-center object-cover"
//         />
//       </div>
//     </div>
//   );
// }
