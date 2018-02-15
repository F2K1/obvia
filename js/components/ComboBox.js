/**
 * This is a ComboBox/Dropdown Element
 * 
 * Kreatx 2018
 */

//component definition
var ComboBox = KxGenerator.createComponent({
    //component data
    initModel: function () {
        return {
            blockProcessAttr: this.required ? false : this.blockProcessAttr,
        }
    },

    getData: function (provider) {
        if (typeof url == "string") {
            //ajax call
            return $.get(provider);
        } else {
            //json 
            return provider;
        }  
    },

    setData: function (data, element) {
        $(element).children().remove();
        $(element).closest('.multiselect-container').children().remove();
        $(element).append(
            $("<option></option>")
                .val("0")
                .text("Zgjidh")
        );
        $(element).append(
            $("<option></option>").attr("data-role", "divider")
        );

        for (var i = 0; i < data.length; i++)
            $(element).append(
                $("<option></option>").val(data[i].value).text(data[i].text).attr("title", data[i].text)
            );
    },

    registerEvents: function () {
        this.$input = this.$el.find('#' + this.id);
        this.$popup = this.$el.find('#' + this.id + ' _popup');

        return [
            {
                registerTo: this.$el, events: {
                    'afterAttach': this.afterAttach.bind(this),
                }
            },
            {
                registerTo: this.$input, events: {
                    'change': this.handleChange.bind(this)
                }
            }
        ]
    },

    afterAttach: function (e) {
        var _self = this;
        
        var element = "#" + this.id;
        KxRequest.promise(this.getData(this.dataProvider)).done(function (result) {
            if (typeof result == "string")
                result = JSON.parse(result);
            
            _self.setData(result, element);

            $(element).multiselect({
                enableFiltering: true,
                maxHeight: 250,
                minWidth: 350,
                templates: {
                    divider: "<div class=\"divider\" data-role=\"divider\"></div>"
                }
            });
            if (_self.value.length > 0) {
                $(element).multiselect('select', _self.value);
            }
        });

        this.trigger('creationComplete');
    },

    handleChange: function (e) {
        e.stopPropagation();
        
        var thisVal = this.$input.val();
        this.value = thisVal;

        if (thisVal[0] == '#' + this.id + '_new') {
            this.$popup.fadeIn();
            this.$input.multiselect('deselect', '#' + this.id + ' _new');
        }
    },

    setValue: function (value) {
        if (this.value != value) {
            this.value = value;
            this.$input.multiselect('select', value);
            this.trigger('change');
        }
        
        return this;
    },

    enable: function () {
        this.$input.multiselect('enable');

        return this;
    },

    disable: function () {
        this.$input.multiselect('disable');

        return this;
    },

    template: function () {
        return  "<div id='" + this.id + "-wrapper'>" +
                    "<div class='col-lg-"+ this.colspan +"' form-group rowspan"+ this.rowspan +" resizable' id='"+ this.id +"_container'>" +
                        "<div id='" + this.id + "-block'>" +
                        "<label rv-style='versionStyle' rv-for='fieldName'>{label} <span rv-if='required'>*</span></label>" +
                        "<span rv-if='blockProcessAttr' class='block-process'> * </span>" +
                        "<select class='form-control' name='" + this.id + "[]' control-blocked='controlBlocked' style='min-width: 250px;' id='" + this.id + "'></select>" +
                    "</div>" +
                "</div>";
    },

    render: function () {
        return this.$el;
    }
});

//component prototype
ComboBox.type = 'combobox';

//register dom element for this component
KxGenerator.registerDOMElement(ComboBox, 'kx-combobox');