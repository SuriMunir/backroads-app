const Tour = ({
  image,
  title,
  description,
  country,
  duration,
  startDate,
  price,
}) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{new Date(startDate).toDateString()}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map'></i>
            </span>{' '}
            {country}
          </p>
          <p>{duration}days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
