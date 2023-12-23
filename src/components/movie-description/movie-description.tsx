import Tabs from "../movie-page-components/tabs/tabs";
import Details from "../movie-page-components/details/details";
import Reviews from "../movie-page-components/reviews/reviews";
import { MovieTabs } from "../movie-page-components/tab/movie-tabs";
import { useState } from "react";
import Overview from "../movie-page-components/overview/overview";
import { FilmInfo } from "../../types/types";

type MovieDescriptionProps = {
  film: FilmInfo
}

function MovieDescription({film}: MovieDescriptionProps) {
  const [currentTab, setCurrentTab] = useState(MovieTabs.Overview);

  const changeTab = (tab: MovieTabs) => {
    setCurrentTab(tab);
  };

  return (
    <div className="film-card__desc">
      <Tabs currentTab={currentTab} changeTab={changeTab}/>
      {currentTab === MovieTabs.Overview && <Overview film={film}/>}
      {currentTab === MovieTabs.Details && <Details film={film}/>}
      {currentTab === MovieTabs.Reviews && <Reviews film={film}/>}
    </div>
  );
}

export default MovieDescription;