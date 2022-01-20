export interface IMovie {
  id: number;
  genre_ids: number[];
  title: string;
  overview: string;
}
export interface IMovieList {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const initialState: IMovieList = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
};

interface IAction {
  type: string;
  state: IMovieList;
}
//actions
const SET_DATA = 'movie/setdata' as const;
//action creator
export const setData = (state: IMovieList) => ({ type: SET_DATA, state });
//reducer
export default function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_DATA:
      return action.state;
    default:
      return state;
  }
}
