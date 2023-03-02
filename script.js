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
    let records = allRecords.filter(record => {
        return record.title.toUpperCase().includes(title.toUpperCase()) || 
               record.artist.toUpperCase().includes(title.toUpperCase()) || 
               record.year === title ||
               record.genres.find(genre => genre.toUpperCase().includes(title.toUpperCase()))

    })
    recordStoreHtmlMethods.fillRecordContainer(records);
}

window.onload = () => {
    let searchBar = document.getElementById("search-bar")
    searchBar.oninput = event => {
        formInputEvent(event.target.value)
    }
}