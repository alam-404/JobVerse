// read data from localstorage
function readData(key){
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}

// write data to localstorage
function writeData(key, value){
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}

// to append data in localstorage -- works for array
function appendData(key, value){
    let oldData = readData(key);
    let newData = [...oldData];
    newData.push(value);
    writeData(key, newData);
}

// add data to localstorage if its not in there
function preloadData(key, value){
    const oldData = localStorage.getItem(key);
    if (!oldData){
        writeData(key, value)
    }
}

export {
    readData,
    writeData,
    appendData,
    preloadData
}