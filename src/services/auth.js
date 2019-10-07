import { serviceInstance } from 'libs';

export default {
  login: body =>
    serviceInstance.post('login', body).then(({ data, status }) => ({
      ...data,
      status
    }))
};
