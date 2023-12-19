import Card from "../Card/Card";
import "./list.scss";
import "../../../data.js";

function List() {
  return (
    <section className="site-main__list list">
      <div className="container">
        <ul className="list__main-list">
          {data.map((item) => {
            return (
              <Card
                title={item.name}
                population={item.population}
                region={item.region}
                capital={item.capital}
                img={item.flag}
                id={item.alpha3Code}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default List;
