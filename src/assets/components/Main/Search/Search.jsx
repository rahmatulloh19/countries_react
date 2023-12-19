import "./search.scss";

function Search() {
  return (
    <section className="site-main__search search">
      <div className="container">
        <form className="search__form">
          <div className="search__form-inner">
            <label className="search__label">
              <button className="search__button" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                    fill="#848484"
                  />
                </svg>
              </button>
              <input
                className="search__input"
                type="search"
                placeholder="Search for a country…"
                aria-label="Search for a country…"
              />
            </label>

            <select className="search__select">
              <option selected disabled>
                Filter by Region
              </option>

              {Regions.map((item) => {
                return (
                  <option value={item.text}>
                    {item.text.replace(
                      item.text.slice(0, 1),
                      item.text.slice(0, 1).toUpperCase(),
                    )}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Search;
