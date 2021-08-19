function hasLocation(data) {
    console.log("it worked!")

}
function isNullOrUndefined(data) {
    return (typeof data === "undefined" || data === null)

}
function hasValidLocation(element) {
    /*if (isNullOrUndefined(element)) {
        return false
    }*/
    if (isNullOrUndefined(element?.locationExists)) {
        return false
    }
    if (isNullOrUndefined(element?.latitude)||(isNullOrUndefined(element?.longitude))) {
        return false
    }
    /*if (isNullOrUndefined(element?.longitude)) {
        return false
    }*/
    if (element?.hasLocation) {
        return element.hasLocation



    }

    return false



}