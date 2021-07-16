/*

read/write Symbols

*/

export function readSymbol(symbol) {
    let data = JSON.parse(localStorage.getItem(symbol));
    return (data == null ? [] : data);
}

export function writeSymbol(symbol, data) {
    localStorage.setItem(symbol, JSON.stringify(data));
} 
