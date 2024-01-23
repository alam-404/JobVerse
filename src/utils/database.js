function readData(key){
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}

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