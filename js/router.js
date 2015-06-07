define([
    'jquery',
    'backbone',
    'app',
    'views/layouts/default',
    'views/events',
    'views/eventDetails',
    'views/login',
    'views/tv',
    'views/petitionsList',
    'views/petitionDetails'
], function ($, Backbone, App, Layout, EventsView, EventDetailsView, LoginView, TvView,
             PetitionsListView, PetitionDetailsView) {
    var curPage;

    var Router = Backbone.Router.extend({
        routes: {
            '':                         'petitionsListRoute',
            'login':                    'loginRoute',
            'tv':                       'tvRoute',
            'petitions':                'petitionsListRoute',
            'petitions/:id/details':     'petitionDetailsRoute',
            'events':                   'eventsRoute',
            'events/:id/details':       'eventDetailsRoute'

        },
        eventsRoute: function() {
            App.curPage = new EventsView();
        },
        eventDetailsRoute: function(id) {
            App.curPage = new EventDetailsView({id: id});
        },
        loginRoute: function() {
            App.curPage = new LoginView();
        },
        tvRoute:    function()  {
            App.curPage = new TvView();
        },
        petitionsListRoute:  function() {
            App.curPage = new PetitionsListView();
        },
        petitionDetailsRoute:   function() {
            App.curPage = new PetitionDetailsView();
        }
    });
    return Router;
});
