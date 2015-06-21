define ([
    'underscore',
    'backbone',
    'app'
], function(_, Backbone, App) {
    var PetitionModel = Backbone.Model.extend({
        url: App.apiUrl+"petitions/",
        id: undefined,
        initialize: function(id) {
            this.id = id
        },

        getPetition: function(id, callback) {
            this.url = this.url+id;
            this.fetch({
                type: "GET",
                success: function(model) {
                    console.log(model);
                    callback();
                },
                error: function() {
                    console.log("Error call model id");
                }
            });
        },

        votePetition: function (yes, callback) {
            if(yes) {
                this.attributes.positive++;
            } else {
                this.attributes.negative++;
            }
            $.ajax({
                url: this.url,
                type: 'PUT',
                contentType: 'application/json',
                data:  JSON.stringify(this),
                dataType: 'json',
                success: function(res){
                    callback(res);
                    //localStorage.setItem(this.attributes,_id, false);
                },
                error: function(err) {
                    console.log('error put vote');
                }
            });
        }
    });
    return PetitionModel;
});
