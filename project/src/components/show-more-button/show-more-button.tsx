import {useAppDispatch} from '../../hooks';
import {increaseFilmCardsCount} from '../../store/action';

function ShowMoreButton(){
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={
        (evt) => {
          dispatch(increaseFilmCardsCount());}
      }
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
