import{hasLocation, isUndefinedURL, setUndefinedURL, hasValidLocation,  } from "./MappingFunctions.JS";
import{createNewTemplate, } from "./TemplateFunctions.JS";



function getMushroomMetaData(data) {
        //console.log(data)
    let mushroomData = data.map(function (m) {     
        return {
            "name": m.consensus_name, 
            "locationName" : m.location_name, 
            "imageNumber" : m.primary_image_id, 
            "imageURL" : getMushroomImage(m), 
            "locationExists" :m.is_collection_location, 
            "latitude" : m.latitude, 
            "longitude" : m.longitude};
        });
               
    mushroomData.filter(hasValidLocation).forEach(element => {
        hasLocation(element)         
    }); 
    mushroomData.filter(isUndefinedURL).forEach(element => {
        setUndefinedURL(element)          
    }); 


    //mushroomData.sort((a,b) => {  a.name < b.name ? -1 : 1})
    mushroomData.sort(function(x, y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    });
    return mushroomData
}
function getMushroomImage(data) {
    let {primary_image_id}=data
    let urlImage = `https://mushroomobserver.nyc3.digitaloceanspaces.com/orig/${primary_image_id}.jpg`;
    return urlImage;
}
function putDataOnPage(data) {
    data.forEach(x => createNewTemplate("mushroomFields", x))
   /* createNewTemplate ("mushroomFields",)
    const wrapper = document.getElementById("mushroomFields");

    let mushroomListItems = data.map(m => 
    `<div class="card">
            <div class="flex flex-row justify-between m-5"><div>${m.name} </div> 
            <a target="_blank" href="${m.imageURL}"><img class="max-size-only" loading"=lazy" src="${m.imageURL}" /></a>
            <div> ${m.locationName} </div>,
            <img class="max-map-size-only" loading"=lazy" src="${m.mapURL}" /></div>,</div>`).join('');          
              
    wrapper.innerHTML = `<div class="grid grid-cols-2 gap-5 mushroom-wrapper">${mushroomListItems}</div>`;
    */
}
(function () {
    let url = "http://mushroomobserver.org/api2/observations?region=Michigan,+USA&has_images=true&date=2020&detail=low&format=json";

    fetch(url)
        .then(r => r.json())
        .then(r => getMushroomMetaData(r.results))
        .then(r => { putDataOnPage(r);});
})();
