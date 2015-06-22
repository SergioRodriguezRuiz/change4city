define([
    'jquery',
    'backbone',
    'app',
    'views/layouts/default',
    'views/events',
    'views/eventDetails',
    'views/login',
    'views/tv',
    'views/video',
    'views/petitionsList',
    'views/petitionDetails'
], function ($, Backbone, App, Layout, EventsView, EventDetailsView, LoginView, TvView, VideoView,
             PetitionsListView, PetitionDetailsView) {
    var curPage;

    var Router = Backbone.Router.extend({
        routes: {
            '':                         'petitionsListRoute',
            'login':                    'loginRoute',
            'tv':                       'tvRoute',
            'video/:src':               'videoRoute',
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
        videoRoute: function(src) {
            App.currPage = new VideoView({src: src});
        },
        petitionsListRoute:  function() {
            App.curPage = new PetitionsListView();
        },
        petitionDetailsRoute:   function(id) {
            App.curPage = new PetitionDetailsView({id: id});
        }
    });
    return Router;
});
