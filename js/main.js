/**
 * Created by sergio on 5/5/15.
 */
//set up dynamically the title
var title = document.createElement('title');
var text = document.createTextNode('ola');
title.appendChild(text);
document.getElementsByTagName('head')[0].appendChild(title);