var dom = require('./lib/dom');
var art = dom('http://www.cnbeta.com/articles/557227.htm')
var conf = require('./config');
var article = {};


art.then(args => {
    const $ = args[0];
    const top = $(args[1]).find(conf.parent);
    const cont = top.find(conf.content.selector);
    const contents = [];

    conf.target.forEach(m => article[m.type] = top.find(m.selector).text())

    conf.content.filter.forEach(s => cont.find(s).remove())

    cont.find('p').each(function(){
        let img = $(this).find('img')
        if(img.length){
            contents.push(img.attr('src'))
        }
        else{
            contents.push($(this).text())
        }
    })

    article.content = contents;
    console.log(article)
})
