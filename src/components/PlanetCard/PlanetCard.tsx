import { FC, useCallback, useEffect, useState } from 'react';
import type { Planet, PlanetCard } from '../../types/componentTypes';
import { useParams } from 'react-router-dom';

const PlanetCard: FC<PlanetCard> = (props) => {
  const { id } = useParams();
  const [planet, setPlanet] = useState<Planet>();
  const [isLoad, setLoad] = useState(false);

  const getPlanet = useCallback(async () => {
    if (id) {
      setLoad(true);
      const url = `https://swapi.dev/api/planets/${id}`;
      const response: Response = await fetch(url);
      const searchResponse: Planet = await response.json();
      setPlanet(searchResponse);
      setLoad(false);
    }
  }, [id]);

  useEffect(() => {
    getPlanet();
  }, [getPlanet]);

  const sideBarClose = () => {
    props.setPanelAppear(false);
  };

  return (
    <div>
      <button onClick={sideBarClose}>Close</button>
      {!isLoad ? (
        <div>
          <h1>{planet?.name}</h1>
          <p>{planet?.diameter}</p>
        </div>
      ) : (
        <p>Load Planet...</p>
      )}
    </div>
  );
};

export default PlanetCard;