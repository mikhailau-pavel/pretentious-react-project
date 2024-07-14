import { FC } from 'react';
import './Results.css';
import { ResultsProps } from '../../types/componentTypes';
import { Link } from 'react-router-dom';

const Results: FC<ResultsProps> = (props) => {
  const {
    arrayOfPlanets,
    nav = null,
    disable,
    onNextPageClick,
    onPrevPageClick,
    setPanelAppear,
    page,
    isLoad,
  } = { ...props };

  const showDetails = () => {
    setPanelAppear(true);
  };
  return (
    <div className="data-container">
      <div className="pagination">
        <button type="button" onClick={onPrevPageClick} disabled={disable.left}>
          prev
        </button>
        {nav && (
          <span>
            {nav.current} / {nav.total}
          </span>
        )}
        <button
          type="button"
          onClick={onNextPageClick}
          disabled={disable.right}
        >
          next
        </button>
      </div>

      {!isLoad && arrayOfPlanets
        ? arrayOfPlanets.map((el, index) => {
            const id = el.url.split('/').at(-2);
            return (
              <div className="item__container" key={index}>
                <Link
                  to={{ pathname: `/detail/${id}`, search: `page=${page}` }}
                >
                  <div onClick={showDetails}>
                    <h4>Planet: {el.name}</h4>
                  </div>
                </Link>
              </div>
            );
          })
        : 'calculate coordinates...'}
    </div>
  );
};
export default Results;
