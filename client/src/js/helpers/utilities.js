// Takes multiples classes as array and return the joined string
export const classNames = () =>{
    return Array.prototype.join.call(arguments, ' ')
}

// Takes await operation and return [err, response] based on the promise returned
export const awaitToJS = promise => {
    return promise.then(data => {
       return [null, data];
    })
    .catch(err => [err]);
}