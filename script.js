/*
In this file, you have an array of records available to you defined in records.js,
called allRecords.

You also have a method available to you defined in recordStoreHtmlMethods.js, called
recordStoreHtmlMethods.fillRecordContainer()

This method takes in an array of records, like allRecords, and populates the
HTML page with those records.
*/

// Display only the album whose title matches the given title.
const formInputEvent = (title) => {
    console.log(title)
    let records = allRecords
    recordStoreHtmlMethods.fillRecordContainer(records);
}

window.onload = () => {
    let searchBar = document.getElementById("search-bar")
    searchBar.oninput = event => {
        formInputEvent(event.target.value)
    }
}