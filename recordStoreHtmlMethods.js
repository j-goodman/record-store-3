const recordStoreHtmlMethods = {};

recordStoreHtmlMethods.addOneRecord = function(record, container) {
    let recordContainer = container || document.getElementsByClassName("record-container")[0];
    let recordElement = document.createElement("div");
    recordElement.className = "record";
    recordElement.innerHTML =
    `<img class="record-image" src="${record.cover}" alt="${record.title}, ${record.artist}">
    <div class="record-title">${record.title}</div>
    <div class="record-artist">${record.artist}</div>
    <div class="record-year">${record.year}</div>`;
    recordContainer.appendChild(recordElement);
}

recordStoreHtmlMethods.fillRecordContainer = function(records) {
    let recordContainer = document.getElementsByClassName("record-container")[0];
    recordContainer.innerHTML = ``;
    records.forEach(record => {
        recordStoreHtmlMethods.addOneRecord(record, recordContainer);
    })
}

window.addEventListener("load", () => {
    recordStoreHtmlMethods.fillRecordContainer(
        allRecords
    );
});