define ([
    'underscore',
    'backbone',
    'app',
    'models/event'
], function(_, Backbone, App, EventModel) {
    var EventCollection = Backbone.Collection.extend({
        model: EventModel,
        url: App.apiUrl+"events",

        initialize: function() {
            this.fetch({
                url: this.url,
                type: "GET",
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
    return EventCollection;
});