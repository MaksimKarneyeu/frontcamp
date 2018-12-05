module.exports = function (source) {
    const srcObj = JSON.parse(source);
    Object.keys(srcObj).forEach(key => {
        if (parseInt(key, 10)) {
            delete srcObj[key];
        }
    });

    return JSON.stringify(srcObj);
};