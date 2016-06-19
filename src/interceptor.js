export default function () {
  return {
    request(request) {
      const token = localStorage.getItem('jwt-token');
      const headers = request.headers || {};

      if (token) {
        headers.Authorization = token;
      }

      return request;
    },

    response(response) {
      return response;
    },
  };
}
