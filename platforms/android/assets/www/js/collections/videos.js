define ([
    'underscore',
    'backbone',
    'app'
], function(_, Backbone, App) {
    var VideosCollection = Backbone.Collection.extend({
        url: App.apiUrl+"videos",

        initialize: function() {
            this.fetch({
                url: this.url,
                type: "GET",
                dataType: 'jsonp',
                reset: true,
                success: function(collection) {
                    console.log(collection);
                },
                error: function() {
                    console.log('ANy error');
                }
            });
        }
    });
    return VideosCollection;
});