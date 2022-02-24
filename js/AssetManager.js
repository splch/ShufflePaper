async function getAsset(id, resolution, extension) {
    return `/assets/${_getAssetFilename(id, resolution, extension)}`;
}

// ## Internal Functions ## //

function _getAssetFilename(id, resolution, extension) {
    const separator = isdef(resolution) ? "_" : "";
    return `${id}${separator}${resolution || ""}.${_getAssetExtension(resolution, extension)}`;
}

function _getAssetExtension(resolution, extension) {
    const ret = isdef(resolution) ? extension || "png" : "svg";
    console.log(ret);
    return ret;
}
