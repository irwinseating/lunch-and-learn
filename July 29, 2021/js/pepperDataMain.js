function setJson(data) {
    document.getElementById("json").innerHTML = JSON.stringify(data, null, 2);
}

function fetchData(url) {
    return fetch(url);
}

function getPepperNameAndHeat(data) {
    return data.map(function (m) {
        return { "name": m.name, "heat": m.heat };
    });
}

function parsePeppersFromDataJson(data) {
    return getPepperNameAndHeat(data.peppers);
}

function createLengend(pepperData) {
}
function displayHeatSymbol(pepper) {
    var { heat } = pepper;

    let heatOptions = { mild: "mild", medium: "medium", hot: "hot" };
    switch (heat) {
        case null:
            return "";
            break;
        case "mild":
            return '🆒';
            break;
        case "hot":
            return '🥵';
            break;
        case "medium":
            return '🔉';
            break; case "nuclear":
            return '☠';
            break;
        default: return heat;
    }

}

function putDataOnPage(data) {
    let wrapper = document.getElementById("pepperFields");

    let pepperListItems = data.map(m => `<div class="card"><div class="flex flex-row justify-between m-5"><div>${m.name}</div><div> ${displayHeatSymbol(m)}</div></div></div>`).join('');
    wrapper.innerHTML = `<div class="grid grid-cols-2 gap-5 pepper-wrapper">${pepperListItems}</div>`;
}

(function () {
    var url = "../pepperData.json"

    fetchData(url)
        .then(r => r.json())
        .then(r => parsePeppersFromDataJson(r))
        .then(r => getPepperNameAndHeat(r))
        .then(r => { putDataOnPage(r); setJson(r) });
})();