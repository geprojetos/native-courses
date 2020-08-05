import {api} from '../../utils/helpers';

export const get = async (path: string) => {
  try {
    const response = await api.get(path);
    return response.data.docs;
  } catch (error) {
    return error;
  }
};
