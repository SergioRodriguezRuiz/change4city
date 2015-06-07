define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/eventDetails.html',
    'models/event'
], function ($, _, Backbone, App, Template, eventModel) {
    var EventDetails = Backbone.View.extend({
        el: '#content',
        template: _.template(Template),
        initialize: function (options) {
            this.model = new eventModel();
            this.model.getEvent(options.id);
            this.model.on('sync', this.showDescription, this);
        },

        back: function(e) {
            e.preventDefault();
            window.history.back();
        },

        showDescription: function () {
            this.render(this.model, false);
        },

        showMap: function () {
            var lon, lat;
            var dis = this;
            function  onSuccess(position) {
                lon = position.coords.longitude;
                lat = position.coords.latitude;

                dis.render(dis.model, true, lon, lat);
            }
            function onError() {
                console.log('nada');
            }
            navigator.geolocation.getCurrentPosition(onSuccess, onError);

        },

        events: {
            "click #eventClose": "back",
            "click .eventDescriptionLink" : "showDescription",
            "click .eventDocumentLink" : "showMap"
        },

        render: function (event, option, latitude, longitude) {
            this.$el.html(this.template({
                event: event.attributes,
                map: option,
                lat: latitude,
                lon: longitude
            }));
            return this;
        }
    });
    return EventDetails;
});

