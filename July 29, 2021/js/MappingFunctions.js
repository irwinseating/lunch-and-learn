export function hasLocation(data) {
    data.mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${data.latitude},${data.longitude}&zoom=15&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${data.latitude},${data.longitude}&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCA_0y_5ulplWlX1oFFtk7sEwLiKZvm7Wo`
    //console.log(data)
}
export function setUndefinedURL (data){
    data.mapURL = `https://pullzone1-stationx.netdna-ssl.com/wp-content/uploads/2019/09/doh.jpg`
}
export function isNullOrUndefined(data) {
    return (typeof data === "undefined" || data === null)
}
export function isUndefinedURL(element){
    if (isNullOrUndefined(element?.mapURL)){
        return true
    }
return false
}

export function hasValidLocation(element) {
    if (isNullOrUndefined(element?.locationExists)) {
        return false
    }
    if (isNullOrUndefined(element?.latitude)||(isNullOrUndefined(element?.longitude))) {
        return false
    }
    if (element?.locationExists) {
       return element.locationExists
    }
    return false
}