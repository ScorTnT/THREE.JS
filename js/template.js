module.exports ={
    HTML:function(title, list, body, control){
        return `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <a href="/author">author</a>
          ${list}
          ${control}
          ${body}
        </body>
        </html>
        `;
      },list:function(topics){
        var list = '<ul>';
        var i = 0;
        while(i < topics.length){
          list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
          i++ ;
        } 
        list = list+'</ul>';
        return list;
      }
}