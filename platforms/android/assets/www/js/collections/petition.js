define ([
    'underscore',
    'backbone',
    'app',
    'models/petition'
], function(_, Backbone, App, PetitionModel) {
    var PetitionCollection = Backbone.Collection.extend({
        model: PetitionModel,
        url: App.apiUrl+"petitions",

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
    return PetitionCollection;
});