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
            var lon, lat, lonEnd, latEnd;
            var dis = this;
            function  onSuccess(position) {
                console.log(dis.model.attributes.place);
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'address': dis.model.attributes.place},
                    function (result, status) {
                        latEnd = result[0].geometry.location.A;
                        lonEnd = result[0].geometry.location.F;
                        lon = position.coords.longitude;
                        lat = position.coords.latitude;
                        console.log(latEnd);console.log(lonEnd);
                        dis.render(dis.model, true, lon, lat, latEnd, lonEnd);
                        $(".eventDocumentLink").addClass("act");
                        $(".eventDescriptionLink").removeClass("act");
                    });
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

        render: function (event, option, latitude, longitude, latitudeEnd, longitudeEnd) {
            this.$el.html(this.template({
                event: event.attributes,
                map: option,
                lat: latitude,
                lon: longitude,
                latEnd: latitudeEnd,
                lonEnd: longitudeEnd
            }));
            return this;
        }
    });
    return EventDetails;
});

