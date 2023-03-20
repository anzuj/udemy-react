function ImageShow({ image }) {
  return (
    <img
      className="result-image"
      src={image.urls.thumb}
      alt={image.alt_description}
      title={image.alt_description}
    />
  );
}

export default ImageShow;
