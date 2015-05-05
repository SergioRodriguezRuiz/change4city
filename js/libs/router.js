define([
    'jquery',
    'backbone',
    'views/layouts/default'
], function ($, Backbone, Layout) {
        var Router = Backbone.Router.extend({
            routes: {
                '': 'defaultRoute'
            },
            defaultRoute: function() {

            }
        })
    }
)
