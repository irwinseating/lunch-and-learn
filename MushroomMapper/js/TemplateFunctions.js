function getTemplateItemElement(item) {
    return document.getElementById(item);
}

export function createNewTemplate(containerId, data) {
    var template = getTemplateItemElement("templateItem");

    const templateClone = template.content.cloneNode(true);


    templateClone.querySelector(".mushroomName").innerHTML = data.name;
    templateClone.querySelector(".locationName").innerHTML = data.locationName
    templateClone.querySelector("a").href = data.imageURL;
    templateClone.querySelector("a img").src = data.imageURL;
    templateClone.querySelector("img.mushroom-map").src = data.mapURL;



    const container = document.getElementById(containerId);
    container.appendChild(templateClone);


}