function BentoItem({
  title,
  description,
  className = "",
  imgSrc,
  imgAlt,
  imgClass = "",
  imgContainerClass = "flex-grow flex items-center justify-center mt-4",
}) {
  return (
    <div className={`bento-item ${className}`}>
      <div>
        <p
          className={`text-sm ${
            className.includes("bg-orange-glass")
              ? "text-orange-200"
              : "text-gray-400"
          } mb-2`}
        >
          {description}
        </p>
        <h2 className="text-shadow-sm">{title}</h2>
      </div>

      {imgSrc && (
        <div className={imgContainerClass}>
          <img src={imgSrc} alt={imgAlt || title} className={imgClass} />
        </div>
      )}

      <a className="arrow-icon" href="#">
        <span className="material-icons-outlined">arrow_forward</span>
      </a>
    </div>
  );
}

export default BentoItem;
