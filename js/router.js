define([
    'jquery',
    'backbone',
    'views/layouts/default'
], function ($, Backbone, Layout) {
        var curPage;

        var Router = Backbone.Router.extend({
            routes: {
                '': 'defaultRoute'
            },
            defaultRoute: function() {
                curPage = new Layout;
            }
        })
    }
)
