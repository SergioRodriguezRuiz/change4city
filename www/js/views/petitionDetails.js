define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/petitionDetails.html',
    'models/petition'
], function ($, _, Backbone, App, Template, PetitionModel) {
    var PetitionDetails = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function (options) {
            //localStorage.clear();
            var dis = this;
            this.model = new PetitionModel(options.id);
            this.model.getPetition(options.id, function () {
                dis.render(dis.model);
            });
        },
        events: {
            'click .noteClose': 'closeNote',
            'click #petitionNo': 'petitionNo',
            'click #petitionYes': 'petitionYes'
        },
        petitionNo: function () {
            if(localStorage.getItem(this.model.id) == undefined) {
                $('#petitionNo').removeClass('dis');
                $('#petitionNo').addClass('act');
                $('#petitionYes').addClass('dis');
                this.model.votePetition(false, function (ret) {
                    localStorage.setItem(ret._id, false);
                });
            }
        },
        petitionYes: function () {
            if(localStorage.getItem(this.model.id) == undefined) {
                $('#petitionYes').removeClass('dis');
                $('#petitionYes').addClass('act');
                $('#petitionNo').addClass('dis');
                this.model.votePetition(true, function (ret) {
                    localStorage.setItem(ret._id, true);
                });
            }
        },
        showMenu: function () {
            $("#rightSidebarMenu").toggleClass('toggled');
        },
        closeNote: function() {
            App.router.navigate("petitions", {trigger: true});
        },
        render: function (petition) {
            var local = localStorage.getItem(this.model.id);
            this.$el.html(this.template({
                petition: petition.attributes
            }));
            if (local == 'true' && local != undefined) {
                $('#petitionNo').addClass('dis');
            } else {
                if (local != undefined) {
                    $('#petitionYes').addClass('dis');
                }
            }
            return this;
        }
    });
    return PetitionDetails;
});

