let apiBaseUrl = `https://localhost:44364`;

function getData() {

    const page = getPage();
    const pageSize = getPageSize();

    const url = `${apiBaseUrl}/pepper?page=${page}&pageSize=${pageSize}`;
    const data = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(r => r.json())
        .then(r => getPepperMetaData(r))
        .then(r => sortPeppers(r))
        .then(r => { clearDataOnPage(); putDataOnPage(r); setJson(r); createLegend(r); });

    return data;
}

function getPage() {
    return document.getElementById("page").value;

}

function getPageSize() {
    return document.getElementById("pageSize").value;
}

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
    const { minHeat, maxHeat } = pepper;
    return `(${minHeat}-${maxHeat})`;
}

// This isn't complete, but it sure does get a distinct set of heat types
function createLegend(pepperData) {
    const distinctHeats = pepperData.map(m => m.heat).filter((value, index, self) => self.indexOf(value) === index);
    return distinctHeats.map(m => { return { "name": m, "symbol": displayHeatSymbol({ "heat": m }) } });
}

// returns a friendly display of the heat instead of just text.
function displayHeatSymbol(pepper) {
    const { heat } = pepper; // variable descructuring
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

function getTemplateItemElement(id) {
    var templateItemElement = document.getElementById(id);

    return templateItemElement;
}
function sortPeppers(data) {
    return data.sort((a, b) => a.name > b.name ? 1 : -1);
}
function applyPepperTemplate(pepper) {
    const template = getTemplateItemElement("pepperTemplate");
    const clone = template.content.cloneNode(true);

    [...clone.querySelectorAll(".nameAndRange")].forEach(h => h.innerHTML = `${pepper.name} ${displayHeatRange(pepper)}`);
    [...clone.querySelectorAll(".heatSymbol")].forEach(h => h.innerHTML = `${displayHeatSymbol(pepper)}`);

    return clone;

}

function clearDataOnPage() {
    const wrapper = document.getElementById("pepperFields");
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
}

// createds joins the list of items and throws them into pepperWrapper element
function putDataOnPage(data) {
    const wrapper = document.getElementById("pepperFields");

    let pepperListItems = data.map(m => applyPepperTemplate(m));

    pepperListItems.forEach(element => {
        wrapper.appendChild(element)

    });
}



(function () {
    getData();
})();