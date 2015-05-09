define([
    'jquery',
    'backbone',
    'app',
    'views/layouts/default',
    'views/dashboard'
], function ($, Backbone, App, Layout, DashboardView) {
    var curPage;

    var Router = Backbone.Router.extend({
        routes: {
            '': 'dashboardRoute'
        },
        dashboardRoute: function() {
            App.curPage = new DashboardView;
        }
    });
    return Router;
});
