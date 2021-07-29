function setJson(data) {
    document.getElementById("json").innerHTML = JSON.stringify(data, null, 2);
}

function getPepperMetaData(data) {
    return data.map(function (m) {

        // returns the max and min heat of the data
        var determineMinJrS = (p) => p.min_jrp > 0 ? p.min_jrp : p.min_shu;
        var determineMaxJrS = (p) => p.max_jrp > 0 ? p.max_jrp : p.max_shu;
        return { "name": m.name, "heat": m.heat, minHeat: determineMinJrS(m) ?? "?", maxHeat: determineMaxJrS(m) ?? "?" };
    });
}

function displayHeatRange(pepper) {
    var { minHeat, maxHeat } = pepper;
    return `(${minHeat}-${maxHeat})`;
}

// This isn't complete, but it sure does get a distinct set of heat types
function createLegend(pepperData) {

    var distinctHeats = pepperData.map(m => m.heat).filter((value, index, self) => self.indexOf(value) === index);
    return distinctHeats.map(m => { return { "name": m, "symbol": displayHeatSymbol({ "heat": m }) } });
}

// returns a friendly display of the heat instead of just text.
function displayHeatSymbol(pepper) {
    var { heat } = pepper; // variable descructuring
    /*
    The same thing as the following:
    var heat = pepper.heat;
    or 
    var heat = pepper["heat"]; 

    */

    switch (heat) {
        case null:
            return "";
        case "mild":
            return '🆒';
        case "hot":
            return '🥵';
        case "medium":
            return '🔉';
        case "nuclear":
            return '☠';

        default: return heat;
    }

}

// createds joins the list of items and throws them into pepperWrapper element
function putDataOnPage(data) {
    let wrapper = document.getElementById("pepperFields");

    let pepperListItems = data.map(m => `<div class="card"><div class="flex flex-row justify-between m-5"><div>${m.name} ${displayHeatRange(m)}</div><div> ${displayHeatSymbol(m)}</div></div></div>`).join('');
    wrapper.innerHTML = `<div class="grid grid-cols-2 gap-5 pepper-wrapper">${pepperListItems}</div>`;
}

(function () {
    var url = "./data/peppers.json";

    fetch(url)
        .then(r => r.json())
        .then(r => getPepperMetaData(r.peppers))
        .then(r => { putDataOnPage(r); setJson(r); createLegend(r); });
})();