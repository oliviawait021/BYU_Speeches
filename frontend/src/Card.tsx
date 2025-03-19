function Card({
  title,
  image,
  imgSize = { width: "300px", height: "400px" }, // Default size
  children,
}: {
  title?: string;
  image?: string;
  imgSize?: { width: string; height: string };
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <div className="card bg-dark text-white mb-4 rounded">
        {image && (
          <img
            src={image}
            alt="Card"
            className="card-img-top mx-auto d-block rounded"
            style={{ width: imgSize.width, height: imgSize.height, objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          <div className="card-text">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;