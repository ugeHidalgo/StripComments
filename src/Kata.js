function solution(input, markers){
    var lines = [],
        result = '';

    if (Object.prototype.toString.call( markers )!="[object Array]") return input;
    if (markers.length===0) return input;
    
    lines = getLines(input);
    for (var i=0; i<lines.length; i++){
        result += stripComments(lines[i],markers);
        if (i<lines.length-1) result += '\n';
    }
    return result;
}

function stripComments(line,markers){
    var marker = markers[0],
        pos = line.indexOf(marker);

    if (pos<0) return line;
    return trimSpacesAtTheEnd(line.slice(0,pos));    
}

function trimSpacesAtTheEnd(value){
    var pos = value.length-1;

    while (value[pos]===' ' && pos>0){
        pos=pos-1;        
    }
    return value.slice(0,pos+1);
}

function getLines(value){
    var lines = [], 
        pos = value.indexOf('\n');

    while (pos >0){
        lines.push (value.slice(0,pos));
        value = value.slice(pos+1,value.length);
        pos = value.indexOf('\n')
    }    
    lines.push (value);
    return lines;
}