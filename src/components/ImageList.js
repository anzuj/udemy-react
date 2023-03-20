import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });

  return (
    <div>
      <div className="result-container"> {renderedImages}</div>
    </div>
  );
}

export default ImageList;
