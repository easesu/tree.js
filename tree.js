'use strict';

function buildRow(filename, isLast) {
    return (isLast ? '|_' : '|-') + filename;
}

function buildOneItem(name, children, isLast) {
    var rows = [];
    
    if (typeof children == 'string') {
        rows.push(buildOneItem(children, undefined, true));
    } else if (Array.isArray(children)) {
        let length = children.length;
        children.forEach((child, index) => {
            if (typeof child === 'string') {
                rows = rows.concat(buildOneItem(child, undefined, length == index + 1));
            } else {
                rows = rows.concat(buildOneItem(undefined, child, length == index + 1));
            }
        });
    } else if (typeof children == 'object') {
        let keys = Object.keys(children);
        let keyLength = keys.length;
        
        keys.forEach((key, index) => {
            rows = rows.concat(buildOneItem(key, children[key], keyLength == index + 1));
        });
    }
    
    if (!isLast) {
        rows = rows.map(row => '|   ' + row);
    } else if (name) {
        rows = rows.map(row => '    ' + row);
    }
    
    if (name) {
        rows.unshift((isLast ? '|_' : '|-') + name);
    }
    
    return rows;
}

function buildTree(obj) {
    return buildOneItem(undefined, obj, true).join('\n');
}

module.exports = buildTree;