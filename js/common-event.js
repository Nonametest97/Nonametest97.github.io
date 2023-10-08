commonEvent = {
    getRequestParam : function(param){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if(param){
            return urlParams.get(param);
        }
        return urlParams;
    },
    debug: function(value){
        if(!configData.debug){
            return;
        }
        console.log("debug :  "+value)
    }
}

function equalsIgnoringCase(text, other) {
    return text.localeCompare(other, undefined, { sensitivity: 'base' }) === 0;
}

function isEmpty(text){
   return (text == null || text == undefined|| (typeof text === "string" && text.trim().length === 0));
}

function replaceArgument(text, arg){
    let newText = text;
    console.log(newText)
    for(i = 0; i < arg.length; i++){
        newText = newText.replace("{" + i + "}", arg[i] );
    }
    return newText;
}
