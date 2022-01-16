import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

const heroImages = require.context('../../assets',true);

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroesById(heroeId), [ heroeId ] );

  const navigate = useNavigate();

  const handelReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  //const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          //src={imagePath} cuando se usa desde carpeta publica
          src = { heroImages(`./${ id }.jpg`).default }
          alt={hero.name} 
          className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handelReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
