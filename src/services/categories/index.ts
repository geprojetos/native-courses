import {api} from '../../utils/helpers';

export const getCategories = async (path: string) => {
  try {
    const response = await api.get(path);
    return response.data.docs;
  } catch (error) {
    return error;
  }
};
