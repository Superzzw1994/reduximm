const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

function get(url, options) {
  return fetch(url, {
    method: 'GET',
    headers,
  })
    .then((response) => {
      handleResponse(url, response);
    })
    .catch((err) => {
      console.error(`Resquest failed. Url = ${url}. message = ${err}`);
      return Promise.reject({
        error: {
          message: 'requset failed due to client error',
        },
      });
    });
}

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers,
    body: data,
  })
    .then((response) => {
      handleResponse(url, response);
    })
    .catch((err) => {
      console.error(`Resquest failed. Url = ${url}. message = ${err}`);
      return Promise.reject({
        error: {
          message: 'requset failed due to client error',
        },
      });
    });
}

function handleResponse(url, response) {
  if (response.status === 200) {
    return response.json();
  } else {
    console.error(`Resquest failed. Url = ${url}`);
    return Promise.reject({
      error: {
        message: 'requset failed due to server error',
      },
    });
  }
}

export { get, post };
