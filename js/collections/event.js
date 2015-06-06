define ([
    'underscore',
    'backbone',
    'app',
    'models/event'
], function(_, Backbone, App, EventModel) {
    var EventCollection = Backbone.Collection.extend({
        model: EventModel,
        url: App.apiUrl+"events"+App.apiKey,

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
        },
        addOne: function(event) {
            new EventModel({ model: event });
        },
        addAll: function() {
            this.each(this.addOne, this);
        },
        removeAll: function() {
            this.reset();
        }
    });
    return EventCollection;
});