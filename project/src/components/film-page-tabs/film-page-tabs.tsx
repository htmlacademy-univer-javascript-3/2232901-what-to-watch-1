import {Film} from '../../types/film';
import {useState} from 'react';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';

type filmPageTabsProps = {
  film: Film
}

enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

function FilmPageTabs({ film } : filmPageTabsProps){
  const [tab, setTab] = useState(Tab.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${tab === Tab.Overview && 'film-nav__item--active'}`}>
            <a
              href="#overviews"
              className="film-nav__link"
              onClick={
                (env) =>{
                  env.preventDefault();
                  setTab(Tab.Overview);
                }
              }
            >
              {Tab.Overview}
            </a>
          </li>
          <li className={`film-nav__item ${tab === Tab.Details && 'film-nav__item--active'}`}>
            <a
              href="#details"
              className="film-nav__link"
              onClick={
                (env) =>{
                  env.preventDefault();
                  setTab(Tab.Details);
                }
              }
            >
              {Tab.Details}
            </a>
          </li>
          <li className={`film-nav__item ${tab === Tab.Reviews && 'film-nav__item--active'}`}>
            <a
              href="#reviews"
              className="film-nav__link"
              onClick={
                (env) =>{
                  env.preventDefault();
                  setTab(Tab.Reviews);
                }
              }
            >
              {Tab.Reviews}
            </a>
          </li>
        </ul>
      </nav>

      {tab === Tab.Overview && <OverviewTab film={film} />}
      {tab === Tab.Details && <DetailsTab film={film} />}
      {tab === Tab.Reviews && <ReviewsTab reviews={film.reviews} />}
    </div>
  );
}

export default FilmPageTabs;
