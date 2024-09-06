import {addContentData, addCurrentPage} from '../../redux/slices/homeSlice';
import {getNews} from '../../utils/rest';

export const getArticles =
  ({page = 1, keyword = ''}) =>
  async dispatch => {
    const response = await getNews({
      keyword: keyword,
      currentPage: page,
    });
    if (response.done) {
      const newData = response?.data?.response?.results;
      dispatch(addCurrentPage(page));
      dispatch(addContentData({add: page != 1, data: newData}));
      return true;
    } else {
      return false;
    }
  };
