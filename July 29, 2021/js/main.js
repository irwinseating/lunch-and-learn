var apiUrl = '';
var apiToken = '';


function getApiUrl() {
    return fetch("secrets.json")
        .then(response => response.json())
        .then(json => apiUrl = json.weatherstackApiBaseUrl);
}

function getApiToken() {
    return fetch("secrets.json")
        .then(response => response.json())
        .then(json => apiToken = json.weatherstackApiKey);
}


function getWeatherData(location) {
    const url = `${apiUrl}forecast?access_key=${apiToken}&query=49931`;

    return fetch(url).then(response => response.json());
}


function createWeatherImg() {

    return ``;
}

function setJson(data) {
    document.getElementById("json").innerHTML = JSON.stringify(data, null, 2);
}

(async function () {

    const apiUrlPromise = await getApiUrl();
    const apiTokenPromise = await getApiToken();

    Promise.all(apiUrlPromise, apiTokenPromise).then(() => {

        getWeatherData(location)
            .then(json => {
                const { current } = json;
                setJson(json);
            });
    });
})();
