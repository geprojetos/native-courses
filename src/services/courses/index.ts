import {api} from '../../utils/helpers';
import {AxiosResponse} from 'axios';

export const getCourses = async (
  path: string,
  page?: number,
  limit?: number,
) => {
  try {
    let response: AxiosResponse<any>;

    if (page && limit) {
      response = await api.get(`${path}?&page=${page}&limit=${limit}`);
      return response.data;
    }

    response = await api.get(path);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const putCourses = async (
  path: string,
  id: string,
  idCategory: string,
  name: string,
  description: string,
) => {
  try {
    const response = await api.put(`${path}/${id}`, {
      idCategory: {_id: idCategory},
      // tslint:disable-next-line: object-shorthand-properties-first
      name,
      // tslint:disable-next-line: object-shorthand-properties-first
      description,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
