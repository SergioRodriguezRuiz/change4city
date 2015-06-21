define ([
    'underscore',
    'backbone',
    'app'
], function(_, Backbone, App) {
    var EventModel = Backbone.Model.extend({
        url: App.apiUrl+"events/",
        initialize: function(id) {

        },

        getEvent: function(id) {
            this.url = this.url+id;
            this.fetch({
                type: "GET",
                success: function(model) {
                    console.log(model);
                },
                error: function() {
                    console.log("Error call model id");
                }
            });
        }
    });
    return EventModel;
});