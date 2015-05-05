require([
    'jquery',
    'backbone',
    'views/layouts/default',
    'router'
], function ($, Backbone, Layout, Router) {
    function start () {
        var layout = new Layout();
        Backbone.history.start();
    }
    start();
})
//set up dynamically the title
var title = document.createElement('title');
var text = document.createTextNode('ola');
title.appendChild(text);
document.getElementsByTagName('head')[0].appendChild(title);