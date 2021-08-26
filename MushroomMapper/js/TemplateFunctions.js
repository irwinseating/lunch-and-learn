function getTemplateItemElement(item) {
    return document.getElementById(item);
}

export function createNewTemplate(containerId, data) {
    var template = getTemplateItemElement("templateItem");
    const templateClone = template.content.cloneNode(true);

    templateClone.querySelector(".mushroomName").forEach(
        (i) => {(i.textContent = data.name);debugger;}
    );
    
    [...templateClone.querySelectorAll(".locationName")].forEach(
        (i) => (i.innerHTML = data.locationName)
    );
/*    [...templateClone.querySelectorAll(".imageURL")].forEach(
        (i) => (i.innerHTML = data.name)
    );
*/
    const container = document.getElementById(containerId);


var clone = template.content.cloneNode(true);

container.appendChild(clone);
}