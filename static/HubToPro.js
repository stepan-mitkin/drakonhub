function HubToPro() {
    var unit = {};
    function fromHubToPro(content) {
        return {
            filename: 'file2.drakon',
            content: content
        };
    }
    unit.fromHubToPro = fromHubToPro;
    return unit;
}
if (typeof module != 'undefined') {
    module.exports = HubToPro;
}