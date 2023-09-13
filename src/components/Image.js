export const Image = ({ url, placeholder }) => {
  return (
    <img
      src={url}
      className="w-full h-full object-center object-fill"
      alt={placeholder}
    />
  );
};
