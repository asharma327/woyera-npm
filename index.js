const checkStatus = response => {
    if (response.status === 200) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

const parseJSON = response => response.json();

const fetch = (url, data, resolve, reject) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(data => {
            resolve(data)
        })
        .catch(error => {
            reject(error)
        })
}

const clean = (apiKey, cleanType, data) => {
    new Promise((resolve, reject) => {
        const url = "http://127.0.0.1:8000/clean/" + cleanType + "/";

        fetch(url, data, resolve, reject)
    });
}

