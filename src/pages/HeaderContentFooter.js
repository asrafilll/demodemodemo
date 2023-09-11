export default function HeaderContentFooter() {
  return (
    <div className="w-screen h-screen">
      <div id="1" className="h-[10%]">
        <img
          src="https://placehold.co/200x800"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div id="2" className="h-4/5">
        <img
          src="https://placehold.co/1000x1000"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div id="3" className="h-[10%]">
        <img
          src="https://placehold.co/200x800"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}

// export default function HeaderContentFooter({ images }) {
//   return (
//     <div className="w-screen h-screen">
//       <div id="1" className="h-[10%]">
//         <img
//           src={images[0].url ? images[0].url : "https://placehold.co/1000x300"}
//           className="w-full h-full object-center object-cover"
//         />
//       </div>
//       <div id="2" className="h-4/5">
//         <img
//           src={images[1].url ? images[1].url : "https://placehold.co/1000x1000"}
//           className="w-full h-full object-center object-cover"
//         />
//       </div>
//       <div id="3" className="h-[10%]">
//         <img
//           src={images[2].url ? images[2].url : "https://placehold.co/1000x300"}
//           className="w-full h-full object-center object-cover"
//         />
//       </div>
//     </div>
//   );
// }
