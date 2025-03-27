function Card({
  title,
  image,
  imgSize = { width: "300px", height: "400px" }, // Default size
  children,
  onTitleClick,
}: {
  title?: string;
  image?: string;
  imgSize?: { width: string; height: string };
  children?: React.ReactNode;
  onTitleClick?: () => void;
}) {
  return (
    <div className="mb-4">
      <div className="card text-white mb-4 rounded" style={{ backgroundColor: "#111827" }}>
        {image && (
          <img
            src={image}
            alt="Card"
            className="card-img-top mx-auto d-block rounded"
            style={{ width: imgSize.width, height: imgSize.height, objectFit: "cover" }}
          />
        )}
        <div className="card-body">
          {title && (
            <h5 className="card-title">
              <button
                onClick={onTitleClick}
                className="btn btn-link text-white p-0"
                style={{ textDecoration: "none", fontSize: "1.5rem" }}
              >
                <strong>{title}</strong>
              </button>
            </h5>
          )}
          <div className="card-text">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;