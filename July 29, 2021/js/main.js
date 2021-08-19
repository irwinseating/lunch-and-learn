/*function setJson(data) {
    document.getElementById("json").innerHTML = JSON.stringify(data, null, 2);
}*/

function getMushroomMetaData(data) {
            console.log(data)
    let mushroomData = data.map(function (m) {     
        return {"name": m.consensus_name, "locationName" : m.location_name, "imageNumber" : m.primary_image_id, "imageURL" : getMushroomImage(m), "locationExists" :m.is_collection_location, "latitude" : m.latitude, "longitude" : m.longitude};    });
            console.log(mushroomData)  
       
        mushroomData.filter(hasValidLocation).forEach(element => {
            hasLocation(element) 
        });      
            return mushroomData.sort((a,b) => {  a.name < b.name ? -1 : 1})
}

function getMushroomImage(data) {
    let {primary_image_id}=data
    let urlImage = `https://mushroomobserver.nyc3.digitaloceanspaces.com/orig/${primary_image_id}.jpg`;
    return urlImage;
}


function putDataOnPage(data) {
    const wrapper = document.getElementById("mushroomFields");

    let mushroomListItems = data.map(m => `<div class="card"><div class="flex flex-row justify-between m-5"><div>${m.name} </div> <div> ${m.locationName} </div>,</div>,<a target="_blank" href="${m.imageURL}"><img class="max-size-only" loading"=lazy" src="${m.imageURL}" /></a></div>`).join('');
    wrapper.innerHTML = `<div class="grid grid-cols-2 gap-5 mushroom-wrapper">${mushroomListItems}</div>`;
}

(function () {
    let url = "http://mushroomobserver.org/api2/observations?region=Michigan,+USA&has_images=true&date=2020&detail=low&format=json";

    fetch(url)
        .then(r => r.json())
        .then(r => getMushroomMetaData(r.results))
        .then(r => { putDataOnPage(r);});
})();
/* setJson(r)  pulled from third .then*/