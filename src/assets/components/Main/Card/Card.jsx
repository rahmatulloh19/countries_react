import "./card.scss";

function Card({ title, population, region, capital, id, img }) {
  return (
    <li className="main-list__item" data-id={id}>
      <img
        className="main-list__img"
        src={img}
        alt={`${title} flag`}
        width={264}
        height={160}
      />
      <div className="main-list__inner">
        <h3 className="main-list__subtitle">{title}</h3>
        <p className="main-list__desc">
          <strong>Population</strong>: {population}
        </p>
        <p className="main-list__desc">
          <strong>Region</strong>: {region}
        </p>
        <p className="main-list__desc">
          <strong>Capital</strong>: {capital}
        </p>
      </div>
    </li>
  );
}

export default Card;
