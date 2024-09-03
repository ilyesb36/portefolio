const TextCard = ({imgUrl, positionImg, title, text}) => {
    console.log(positionImg)
  return (
    <div className="main-container">
      <div className="content">
        <div className="description-title">
          {title}
        </div>
        <div className="description-text">
            {text}
        </div>
        </div>
        <img src={imgUrl} />
    </div>
  );
};

export default TextCard;