import {api} from '../../utils/helpers';

export const getCategories = async (path: string) => {
  try {
    const response = await api.get(path);
    return response.data.docs;
  } catch (error) {
    return error;
  }
};

export const putCategories = async (path: string, id: string, name: string) => {
  try {
    const response = await api.put(`/${path}/${id}`, {name});
    return response.data;
  } catch (error) {
    return error;
  }
};
