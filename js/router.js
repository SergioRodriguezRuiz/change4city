define([
    'jquery',
    'backbone',
    'app',
    'views/layouts/default',
    'views/login'
], function ($, Backbone, App, Layout, LoginView) {
    var curPage;

    var Router = Backbone.Router.extend({
        routes: {
            '': 'loginRoute'
        },
        loginRoute: function() {
            App.curPage = new LoginView();
        }
    });
    return Router;
});
