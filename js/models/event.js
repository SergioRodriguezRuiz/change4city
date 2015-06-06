define ([
    'underscore',
    'backbone',
    'app'
], function(_, Backbone, App) {
    var EventModel = Backbone.Model.extend({

        initialize: function() {
            console.log(this);
        },

        url : function() {
            return App.apiUrl+"events";
        }
    });
    return EventModel;
});