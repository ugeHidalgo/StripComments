function solution(input, markers){
    var lines = [],
        result = '';

    if (Object.prototype.toString.call( markers )!="[object Array]") return input;
    if (markers.length===0) return input;
    
    lines = input.split('\n');
    for (var i=0; i<lines.length; i++){
        result += stripComments(lines[i],markers);
        if (i<lines.length-1) result += '\n';
    }
    return result.trim();
}

function stripComments(line,markers){
    var marker; 
    
    markers.forEach(function(marker){
        pos = line.indexOf(marker);
        if (pos<0) return;
        line = line.slice(0,pos);
    });    
    
    return line.trim();
}