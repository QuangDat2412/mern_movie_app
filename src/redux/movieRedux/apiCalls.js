import { getMovieStart, getMovieSuccess, getMovieFailure } from './movieRedux';
import { publicRequest } from '../../requestMethods';

// GET Movie

export const getMovies = async (dispatch) => {
    dispatch(getMovieStart());
    try {
        const res = await publicRequest.get('/movies');
        dispatch(getMovieSuccess(res.data));
    } catch (err) {
        dispatch(getMovieFailure());
    }
};
