define([
    'jquery',
    'backbone',
    'app',
    'views/layouts/default',
    'views/login',
    'views/tv'
], function ($, Backbone, App, Layout, LoginView, TvView) {
    var curPage;

    var Router = Backbone.Router.extend({
        routes: {
            '':         'loginRoute',
            'login':    'loginRoute',
            'tv':       'tvRoute'

        },
        loginRoute: function() {
            App.curPage = new LoginView();
        },
        tvRoute:    function()  {
            App.curPage = new TvView();
        }
    });
    return Router;
});
