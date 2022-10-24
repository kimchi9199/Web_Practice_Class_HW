class TemplateProcessor{
    constructor(template){
        this.template = template;
    }
    FillIn(dictionary) {
        var temp = this.template;
        for(var key in dictionary) {
            var ReEx = new RegExp('\\{\\{' + key + '\\}\\}');
            temp = temp.replace(ReEx, dictionary[key]);
        }
        temp = temp.replace(new RegExp('\\{\\{\\w+\\}\\}', "g"), "");
        return temp;
    }
}

var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.FillIn(dictionary);

console.log(str)

//Case: property doesn't exist in dictionary
var dictionary2 = {day: '1', year: '2016'};
var str = dateTemplate.FillIn(dictionary2);

console.log(str)