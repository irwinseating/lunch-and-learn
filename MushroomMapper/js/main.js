import { hasLocation, isUndefinedURL, setUndefinedURL, hasValidLocation, isNullOrUndefined, } from "./MappingFunctions.JS";
import { createNewTemplate, } from "./TemplateFunctions.JS";



function getMushroomMetaData(data) {
    //console.log(data)
    let mushroomData = data.map(function (m) {
        return {
            "name": m.consensus_name,
            "locationName": m.location_name,
            "imageNumber": m.primary_image_id,
            "imageURL": getMushroomImage(m),
            "locationExists": m.is_collection_location,
            "latitude": m.latitude,
            "longitude": m.longitude
        };

    });
    //console.log(mushroomData) 
    mushroomData.filter(hasValidLocation).forEach(element => {
        hasLocation(element)
    });
    mushroomData.filter(isUndefinedURL).forEach(element => {
        setUndefinedURL(element)
    });

    mushroomData.sort(function (x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    });
    return mushroomData
}
function getMushroomImage(data) {
    let { primary_image_id } = data
    let urlImage = `https://mushroomobserver.nyc3.digitaloceanspaces.com/orig/${primary_image_id}.jpg`;
    return urlImage;
}
function putDataOnPage(data) {
    document.getElementById("mushroomFields").innerHTML = '';
    data.forEach(x => createNewTemplate("mushroomFields", x));

}
async function setMushroomOptions(data) {
    let mushroomOptions = document.getElementById("mushroomOptions");
    if (mushroomOptions.innerHTML.trim().length === 0) {
        const distinctData = Array.from(new Set(data.map(x => `<option value="${x.name}">${x.name}</option>`)));
        mushroomOptions.innerHTML = `<option value="-1">Select All </option>` + distinctData.join();

    }

    return;
}

async function filterMushroomData(data) {
    let optionSelection = document.getElementById("mushroomOptions");
    const selectedValue = optionSelection.options[optionSelection.selectedIndex]?.value;

    if (isNullOrUndefined(selectedValue) || selectedValue === "-1") {
        return data;


    }
    return data.filter(x => x.name === selectedValue)
}
async function clearFilterValue() {
    let optionSelection = document.getElementById("mushroomOptions");
    optionSelection.value = "-1"

}

function getDataBySelectedYear() {
    let optionSelection = document.getElementById("yearOptions");
    const selectedValue = optionSelection.options[optionSelection.selectedIndex]?.value;

    if (isNullOrUndefined(selectedValue)) { return new Date().getFullYear() }
    return selectedValue;
}

async function setYearOptions() {
    let yearOptions = document.getElementById("yearOptions");
    if (yearOptions.innerHTML.trim().length === 0) {
        let currentYear = new Date().getFullYear();
        let endYear = 1990;
        let years = [];
        for (let i = currentYear; i >= endYear; i--) { years.push(i) }
        //console.log(years)
        const yearData = years.map(x => `<option value="${x}">${x}</option>`);
        yearOptions.innerHTML = yearData.join("");

    }

    return;

}



async function fetchDataFromUrl() {

    let yearSelection = getDataBySelectedYear()

    let url = `http://mushroomobserver.org/api2/observations?region=Michigan,+USA&has_images=true&date=${yearSelection}&detail=low&format=json`;

    var results = await fetch(url)
        .then(r => r.json())
        .then(r => getMushroomMetaData(r.results))

    return results;
}

async function InitializeMushroomData() {
    var mushroomData = await fetchDataFromUrl();

    filterMushroomData(mushroomData).then(putDataOnPage);

    setMushroomOptions(mushroomData);
}

(async function () {
    InitializeMushroomData();
    setYearOptions();

    const filterButton = document.getElementById('filterResults');
    filterButton.addEventListener('click', InitializeMushroomData);
    const clearButton = document.getElementById('clearFilter');
    clearButton.addEventListener('click', () => clearFilterValue().then(InitializeMushroomData));
    const yearSelectButton = document.getElementById(`year`);
    yearSelectButton.addEventListener(`click`, InitializeMushroomData);
})();

