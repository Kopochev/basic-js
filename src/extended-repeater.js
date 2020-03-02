module.exports = function repeater(str, options) {
    str = String(str);
    options.addition =  String(options.addition);
    let defaultOptions  = {separator: '+', 
    repeatTimes: 0,
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator:'|'};

    if(!options.separator){
        options.separator = defaultOptions.separator; 
    }
    if(!options.repeatTimes){
        options.repeatTimes = defaultOptions.repeatTimes; 
    }
    if(!options.addition){
        options.addition = defaultOptions.addition; 
    }
    if(!options.additionRepeatTimes){
        options.additionRepeatTimes = defaultOptions.additionRepeatTimes; 
    }
    if(!options.additionSeparator){
        options.additionSeparator = defaultOptions.additionSeparator; 
    }
    let resultString = '';
    if(options.repeatTimes == 0 && options.additionRepeatTimes == 0){
        resultString = str + options.addition;
        return resultString;
    }
    for(let i = 0; i < options.repeatTimes; i++){
        resultString += str;
            for(let j = 0; j < options.additionRepeatTimes; j++){
                resultString += options.addition;  
                if (j < options.additionRepeatTimes - 1){
                    resultString += options.additionSeparator;
                }
            }
            
        if( i < options.repeatTimes - 1){
        resultString += options.separator; 
        }

    }
    return resultString;
};
  