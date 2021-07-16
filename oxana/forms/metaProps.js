import { ObjectUtils } from "/flowerui/lib/ObjectUtils.js";
import { StringUtils, StringMatchType } from "/flowerui/lib/StringUtils.js";
import { ArrayEx } from "/flowerui/lib/ArrayEx.js";
import { LinkTarget } from "/flowerui/components/Link/Link.js";
import { Literals } from "/flowerui/oxana/forms/componentLiterals.js";
import { ComponentList } from "/flowerui/oxana/forms/componentList.js";
import { LabelType } from "/flowerui/components/Label.js";
import { DateTimeFormat } from "/flowerui/components/DateTime/DateTimeFormat.js";
import { ContainerType } from "/flowerui/components/base/ContainerType.js";
import { Align } from "/flowerui/components/base/Align.js";
import { HeadingType } from "/flowerui/components/Heading.js";
import { TextInputType } from "/flowerui/components/TextInput/TextInput.js";
import { ButtonType } from "/flowerui/components/Button/Button.js";
import { SideNavSide } from "/flowerui/components/SideNav/SideNav.js";
import { RepeaterEx } from "/flowerui/components/Repeater/RepeaterEx.js";
import { TextInput } from "/flowerui/components/TextInput/TextInput.js";
import { Button } from "/flowerui/components/Button/Button.js";

let providerValueField = "dataview_id";
let providerLabelField = "description";
let maskValueField = "";
let maskLabelField = "";
let componentValueField = "ctor";
let componentLabelField = "label";

let dataviews = [];
let forms = [];
let masks = [];
let dateTimeFormats = ObjectUtils.getMembersCollection(DateTimeFormat, "value", "text");
let alignOptions = ObjectUtils.getMembersCollection(Align, "value", "text");
let headingTypes = ObjectUtils.getMembersCollection(HeadingType, "value", "text");
let sidenavSides = ObjectUtils.getMembersCollection(SideNavSide, "value", "text");
let textInputTypes =  ObjectUtils.getMembersCollection(TextInputType, "value", "text");
let labelTypes = ObjectUtils.getMembersCollection(LabelType, "value", "text");
let linkTargetOptions = ObjectUtils.getMembersCollection(LinkTarget, "value", "text");
let buttonTypes = ObjectUtils.getMembersCollection(ButtonType, "value", "text");
let containerTypes = ObjectUtils.getMembersCollection(ContainerType, "value", "text");

var MetaProps = {
        form_name: {
            ctor: "TextInput",
            label: "Form Name",
            required: true,
            index: 1,
            props: {
                change: function () {
                    this.parent.parent.instance.form_name = this.value;
                },
                components: [{
                    "ctor": "RequiredFieldValidator",
                    "props": {
                        "bindingDefaultContext": "{currentItem}",
                        "controlToValidate": "{?parent.id}",
                        "errorMessage": "Form name is required",
                        "setFocusOnError": true
                    }
                }]
            }
        },
        description: {
            ctor: "TextArea",
            label: "Description",
            required: false,
            index: 1,
            props: {
                change: function () {
                    this.parent.parent.instance.description = this.value;
                }
            }
        },
        date_created: {
            ctor: "Label",
            label: "Date Created",
            required: false,
            index: 1,
            props: {}
        },
        author_id_user: {
            ctor: "Label",
            label: "Author",
            required: false,
            index: 1,
            props: {}
        },
        id: {
            ctor: "TextInput",
            label: "Component ID",
            required: true,
            index: 1,
            props: {
                change: function () {
                    this.parent.parent.instance.id = this.value;
                }
            }
        },
        name: {
            ctor: "TextInput",
            label: "Component Name",
            required: true,
            index: 2,
            props: {
                change: function () {
                    this.parent.parent.instance.name = this.value;
                }
            }
        },
        label: {
            ctor: "TextInput",
            label: "Label",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.label = this.value;
                }
            }
        },
        href: {
            ctor: "TextInput",
            label: "URL",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.href = this.value;
                }
            }
        },
        target: {
            ctor: "Select",
            label: "Target",
            index: 3,
            props: {
                dataProvider: linkTargetOptions,
                change: function () {
                    this.parent.parent.instance.target = this.value;
                }
            }
        },
        width: {
            ctor: "TextInput",
            label: "Width",
            required: true,
            index: 9,
            props: {
                change: function () {
                    this.parent.parent.instance.width = this.value;
                }
            }
        },
        height: {
            ctor: "TextInput",
            label: "Height",
            required: true,
            index: 10,
            props: {
                change: function () {
                    this.parent.parent.instance.height = this.value;
                }
            }
        },
        visible: {
            ctor: "Toggle",
            label: "Visible",
            index: 4,
            props: {
                change: function () {
                    this.parent.parent.instance.visible = this.value;
                }
            }
        },
        enabled: {
            ctor: "Toggle",
            label: "Enabled",
            index: 5,
            props: {
                change: function () {
                    this.parent.parent.instance.enabled = this.value;
                }
            }
        },
        required: {
            ctor: "Toggle",
            label: "Required",
            index: 6,
            props: {
                change: function () {
                    this.parent.parent.instance.required = this.value;
                }
            }
        },
        checked: {
            ctor: "Toggle",
            label: "Checked",
            index: 7,
            props: {
                change: function () {
                    this.parent.parent.instance.checked = this.value;
                }
            }
        },
        errorMessage: {
            ctor: "TextInput",
            label: "Error Message",
            index: 8,
            props: {
                change: function () {
                    this.parent.parent.instance.errorMessage = this.value;
                }
            }
        },
        controlToValidate: {
            ctor: "TextInput",
            label: "Control To Validate",
            index: 9,
            props: {
                change: function () {
                    this.parent.parent.instance.controlToValidate = this.value;
                }
            }
        },
        setFocusOnError: {
            ctor: "Toggle",
            label: "Set Focus On Error",
            index: "11",
            props: {
                change: function () {
                    this.parent.parent.instance.setFocusOnError = this.value;
                }
            }

        },
        dataProvider: {
            ctor: "AutoBrowse",
            label: "Data Provider",
            required: true,
            props: {
                valueField: providerValueField,
                labelField: providerLabelField,
                dataProvider: dataviews,
                classes: ["no-form-control"],
                change: function () {
                    //propsForm.children["dataProvider"].value
                    //get the fields for the selected datProvider and 
                    //assign them to the labelField and valueField editor`s dataProvider property
                    if (this.value && this.value.length > 0) {
                        let _self = this;
                        //let url = "http://flower-gaia/api/dataview_pid_1/yaml";
                        let url = "https://gaia.oxana.io/api/" + this.value[0].name + "/yaml";
                        if (!Builder.data[_self.value[0][providerValueField]]) {
                            GaiaAPI_Utils.generateAndLoadDataView(url, Builder.recordsPerPage).then(function (aex) {
                                console.log(aex);
                                _self.parent.parent.instance.dataProvider = Builder.data[_self.value[0][providerValueField]] = aex;
                                if (_self.parent.parent.labelField && aex && aex.length > 0) {
                                    let dpFieldNames = Object.keys(aex[0]);
                                    let len = dpFieldNames.length;
                                    let dpFields = new ArrayEx();
                                    for (let i = 0; i < len; i++) {
                                        dpFields.push({
                                            "dpField": dpFieldNames[i]
                                        });
                                    }
                                    _self.parent.parent.labelField.input.dataProvider = dpFields;
                                    if (_self.parent.parent.valueField)
                                        _self.parent.parent.valueField.input.dataProvider = dpFields;
                                }
                            });
                        } else {
                            _self.parent.parent.instance.dataProvider = Builder.data[_self.value[0][providerValueField]];
                            let aex = Builder.data[_self.value[0][providerValueField]];
                            if (_self.parent.parent.labelField && aex && aex.length > 0) {
                                let dpFieldNames = Object.keys(aex[0]);
                                let len = dpFieldNames.length;
                                let dpFields = new ArrayEx();
                                for (let i = 0; i < len; i++) {
                                    dpFields.push({
                                        "dpField": dpFieldNames[i]
                                    });
                                }
                                _self.parent.parent.labelField.input.dataProvider = dpFields;
                                if (_self.parent.parent.valueField)
                                    _self.parent.parent.valueField.input.dataProvider = dpFields;
                            }
                        }
                        this.parent.parent.instance.attr[providerValueField] = this.value[0][providerValueField];
                    }
                }
            },
            setter: function () {
                if (this.attr[providerValueField]) {
                    let m = ArrayUtils.getMatching(Builder.sources, providerValueField, this.attr[providerValueField]);
                    if (m.objects.length > 0) {
                        return new ArrayEx(m.objects);
                    }
                }
            },
            index: 2
        },
        labelField: {
            ctor: "AutoCompleteEx",
            label: "Label Field",
            required: true,
            props: {
                valueField: "dpField",
                labelField: "dpField",
                change: function () {
                    if (this.value && this.value.length > 0)
                        this.parent.parent.instance.labelField = this.value[0]["dpField"];
                }
            },
            index: 9
        },
        valueField: {
            ctor: "AutoCompleteEx",
            label: "Value Field",
            required: true,
            props: {
                valueField: "dpField",
                labelField: "dpField",
                change: function () {
                    if (this.value && this.value.length > 0)
                        this.parent.parent.instance.valueField = this.value[0]["dpField"];
                }
            },
            index: 10
        },
        mask: {
            ctor: "AutoCompleteEx",
            label: "Data Provider",
            required: true,
            props: {
                valueField: maskValueField,
                labelField: maskLabelField,
                dataProvider: masks
            },
            index: 11
        },
        inputFormat: {
            ctor: "Select",
            label: "Input Format",
            required: true,
            props: {
                dataProvider: dateTimeFormats,
                change: function () {
                    this.parent.parent.instance.inputFormat = this.value;
                }
            },
            index: 12
        },
        outputFormat: {
            ctor: "Select",
            label: "Output Format",
            required: true,
            props: {
                dataProvider: dateTimeFormats,
                change: function () {
                    this.parent.parent.instance.outputFormat = this.value;
                }
            },
            index: 13
        },
        displayFormat: {
            ctor: "Select",
            label: "Display Format",
            required: true,
            props: {
                dataProvider: dateTimeFormats,
                change: function () {
                    this.parent.parent.instance.displayFormat = this.value;
                }
            },
            index: 14
        },
        multiple: {
            ctor: "Toggle",
            label: "Multiple Files",
            index: 15,
            props: {
                change: function () {
                    this.parent.parent.instance.multiple = this.value;
                }
            }
        },
        accept: {
            ctor: "Toggle",
            label: "Allowed Files",
            index: 16
        },
        spacing: {
            ctor: "SpacingEditor",
            label: "Adjust Spacing",
            index: 17,
            props: {
                change: function () {
                    let _spacing = this.value;
                    this.parent.parent.instance.spacing.colSpan = _spacing.colSpan;
                    this.parent.parent.instance.spacing.offset = _spacing.offset;
                    this.parent.parent.instance.spacing.mb = _spacing.mb;
                    this.parent.parent.instance.spacing.mt = _spacing.mt;
                }
            }
        },
        columns: {
            ctor: "Button",
            label: "Columns",
            index: 18,
            props: {
                id: "columnEditor",
                label: "Manage Columns",
                classes: ["btn", "btn-secondary"],
                components: [{
                    "ctor": "Label",
                    props: {
                        id: 'fa',
                        labelType: "i",
                        classes: ["fas", "fa-list"]
                    }
                }],
                click: function (e) {
                    let oe = this.parent.parent;
                    if (oe.dataProvider.input.value && oe.dataProvider.input.value.length > 0) {
                        let dpName = oe.dataProvider.input.value[0][oe.dataProvider.input.valueField];
                        if (Builder.data[dpName] && Builder.data[dpName].length > 0) {
                            let win = this.parent.parent.columnsEditModal;
                            if (!win) {
                                let lit = ObjectUtils.extend(true, Literals.Modal.literal);
                                lit.props.id = "columnsEditModal";
                                lit.props.title = "Edit Columns";
                                lit.props.components = [{
                                    ctor: CollectionEditor,
                                    props: {
                                        id: "columnEditor",
                                        memberType: "DataGridColumn",
                                        "instance": this.parent.parent.instance.columns
                                    }
                                }];
                                win = this.parent.parent.addComponent(lit);
                            }
                            let colOEInstances = win.modalDialog.modalContent.modalBody.columnEditor.repeater.internalRepeater.objectEditor;
                            if (colOEInstances) {
                                let dpFieldNames = Object.keys(Builder.data[dpName][0]);
                                let len = dpFieldNames.length;
                                let dpFields = new ArrayEx();
                                for (let i = 0; i < len; i++) {
                                    dpFields.push({
                                        "dpField": dpFieldNames[i]
                                    });
                                }

                                len = colOEInstances.length;
                                for (let i = 0; i < len; i++) {
                                    //win.columnEditor.repeater.repeater.objectEditor[i].dataProvider.input.dataProvider = dpFields;
                                    //win.columnEditor.repeater.repeater.objectEditor[i].field.component.props.dataProvider = dpFields;
                                    colOEInstances[i].field.AutoCompleteEx.dataProvider = dpFields;
                                }
                                win.show();
                            }
                        } else {
                            alert("The selected DataProvider is empty or failed to load.");
                        }
                    } else {
                        alert("Please Select DataProvider");
                    }
                }
            }
        },
        classes: {
            ctor: "Button",
            label: "Classes",
            index: 18,
            props: {
                id: "editClasses",
                label: "Edit Classes",
                classes: ["btn", "btn-secondary"],
                components: [],
                click: function (e) {
                    let oe = this.parent.parent;
                    let win = this.parent.parent.classesEditModal;
                    if (!win) {
                        let dp = new ArrayEx(oe.instance.classes.length);
                        let classes = Object.values(oe.instance.classes);
                        for (let i = 0; i < classes.length; i++) {
                            dp[i] = {
                                "cssclass": oe.instance.classes[i]
                            };
                        }

                        let lit = ObjectUtils.extend(true, Literals.Modal.literal);
                        lit.props.id = "ClassesEditModal";
                        lit.props.title = "Edit Classes";
                        lit.props.components = [{
                            ctor: RepeaterEx,
                            props: {
                                id: "classesEditor",
                                dataProvider: dp,
                                rendering: {
                                    direction: 'vertical',
                                    separator: false,
                                },
                                rowDelete: (e, r, ra) => {
                                    let classes = oe.instance.classes.slice(0);
                                    classes.splice(ra.currentIndex, 1);
                                    oe.instance.classes = classes;
                                },
                                rowAdd: (e, r, ra) => {
                                    console.log(ra);
                                },
                                beforeAttach: function (e) {
                                    if (this.internalRepeater["removeButton"] && this.internalRepeater["removeButton"].length > 0) {
                                        this.internalRepeater["removeButton"][0].enabled = false;
                                    }
                                },
                                components: [{
                                        ctor: TextInput,
                                        props: {
                                            id: "textInput",
                                            value: "{cssclass}",
                                            change: function (e, ra) {
                                                let classes = oe.instance.classes.slice(0);
                                                if (ra.currentIndex < classes.length)
                                                    classes[ra.currentIndex] = this.value;
                                                else
                                                    classes.push(this.value);
                                                oe.instance.classes = classes;
                                            }
                                        }
                                    },
                                    {
                                        ctor: Button,
                                        props: {
                                            id: 'removeButton',
                                            type: "button",
                                            components: [{
                                                "ctor": "Label",
                                                props: {
                                                    id: 'fa',
                                                    labelType: "i",
                                                    classes: ["fas", "fa-minus-circle"]
                                                }
                                            }],
                                            click: function (e, ra) {
                                                this.parent.dataProvider.splice(ra.currentIndex, 1);
                                            }
                                        }
                                    }
                                ]
                            }
                        }];

                        win =  this.parent.parent.addComponent(lit);
                    }
                    Promise.resolve(win).then((win) => {
                        let classesInstances = win.modalDialog.modalContent.modalBody.classesEditor;
                        if (classesInstances) {
                            win.attached = true;
                            win.show();
                        }
                    });
                }
            }
        },
        dataField: "textLabel",
        headerText: "Pija Preferuar",
        sortInfo: {
            sortOrder: 0,
            sortDirection: "ASC"
        },
        sortable: {
            ctor: "Toggle",
            label: "Sortable",
            index: 20,
            props: {
                change: function () {
                    this.parent.parent.instance.sortable = this.checked;
                }
            }
        },
        editable: {
            ctor: "Toggle",
            label: "Editable",
            index: 21,
            props: {
                change: function () {
                    this.parent.parent.instance.editable = this.checked;
                }
            }
        },
        input: {
            ctor: "ObjectEditor",
            label: "Input Properties",
            index: 7,
            props: function (oeInst) {
                /**
                 * this is not really necessary, just to demonstrate that props can be a function as well
                 * this - is the isntance of the object being inspected, oeInst (the first and only param)
                 * is the isntance of the ObjectEditor created for inspecting the object being inspected
                 */
                let _props = {};
                _props.instance = this.input;
                return _props;
            }
        },
        direction: {
            ctor: "Select",
            label: "Direction",
            props: {
                dataProvider: new ArrayEx([{
                    value: "vertical",
                    text: "Vertical"
                }, {
                    value: "horizontal",
                    text: "Horizontal"
                }]),
                change: function () {
                    this.parent.parent.instance.direction = this.value;
                }
            }
        },
        align: {
            ctor: "Select",
            label: "Align",
            props: {
                dataProvider: alignOptions,
                change: function () {
                    this.parent.parent.instance.align = this.value;
                }
            }
        },
        headingType: {
            ctor: "Select",
            label: "Heading Type",
            props: {
                dataProvider: headingTypes,
                change: function () {
                    this.parent.parent.instance.headingType = this.value;
                }
            }
        },
        side: {
            ctor: "Select",
            label: "Side",
            props: {
                dataProvider: sidenavSides,
                change: function () {
                    this.parent.parent.instance.side = this.value;
                }
            }
        },
        separator: {
            ctor: "Toggle",
            label: "Separator",
            props: {
                change: function () {
                    this.parent.parent.instance.separator = this.value;
                }
            }
        },
        itemRenderer: {
            ctor: "AutoBrowse",
            label: "Item Renderer",
            required: true,
            props: {
                valueField: componentValueField,
                labelField: componentValueField,
                dataProvider: ComponentList,
                fields: [{
                    "field": componentValueField,
                    "description": componentValueField,
                    "visible": false
                }, {
                    "field": componentLabelField,
                    "description": componentLabelField
                }],
                classes: ["no-form-control"],
                change: function () {
                    //propsForm.children["dataProvider"].value
                    //get the fields for the selected datProvider and 
                    //assign them to the labelField and valueField editor`s dataProvider property
                    if (this.value && this.value.length > 0) {
                        this.parent.parent.instance.itemEditor = this.value[0];
                    }
                }
            },
            index: 18
        },
        itemEditor: {
            ctor: "AutoBrowse",
            label: "Item Editor",
            required: false,
            props: {
                valueField: componentValueField,
                labelField: componentValueField,
                dataProvider: ComponentList,
                fields: [{
                    "field": componentValueField,
                    "description": componentValueField,
                    "visible": false
                }, {
                    "field": componentLabelField,
                    "description": componentLabelField
                }],
                classes: ["no-form-control"],
                change: function () {
                    //propsForm.children["dataProvider"].value
                    //get the fields for the selected datProvider and 
                    //assign them to the labelField and valueField editor`s dataProvider property
                    if (this.value && this.value.length > 0) {
                        this.parent.parent.instance.itemEditor = this.value[0];
                    }
                    console.log(arguments);
                }
            },
            index: 19
        },
        field: {
            ctor: "AutoCompleteEx",
            label: "DataProvider Field",
            required: true,
            props: {
                valueField: "dpField",
                labelField: "dpField",
                change: function () {
                    this.parent.parent.instance.field = this.value;
                }
            },
            index: 1
        }
    };

    MetaProps.Repeater = {
        components: {
            ctor: "AutoBrowse",
            label: "Repeated Form",
            required: true,
            props: {
                valueField: "form_id",
                labelField: "form_name",
                dataProvider: forms,
                fields: [{
                    "field": "form_id",
                    "description": "form_id",
                    "visible": false
                }, {
                    "field": "form_name",
                    "description": "form_name"
                }],
                classes: ["no-form-control"],
                change: function () {
                    //propsForm.children["dataProvider"].value
                    //get the fields for the selected datProvider and 
                    //assign them to the labelField and valueField editor`s dataProvider property
                    //this.parent.parent.instance.attr.repeated_id_form = this.value.length > 0 ? this.value[0][this.valueField] : undefined;
                    this.parent.parent.instance.attr.repeated_id_form = this.value.length > 0 ? this.value[0].guid : undefined;
                }
            },
            index: 7,
            /**
             * by default the value of the propertyEditor is binded to the value of the property of the instance
             * by specifying a setter function you override this behavior. The return value of the function 
             * will be the assigned to the property of the instance
             */
            setter: function () {
                if (this.attr.repeated_id_form) {
                    let m = ArrayUtils.getMatching(forms, "form_id", this.attr.repeated_id_form);
                    if (m.objects.length > 0) {
                        return new ArrayEx(m.objects);
                    }
                }
            }
        },
        rendering: {
            ctor: "ObjectEditor",
            label: "Rendering",
            required: false,
            props: {}
        },
        dataProvider: {
            ctor: "AutoBrowse",
            label: "Data Provider",
            required: true,
            index: 4,
            props: {
                valueField: providerValueField,
                labelField: providerLabelField,
                dataProvider: dataviews,
                classes: ["no-form-control"],
                change: function () {
                    //propsForm.children["dataProvider"].value
                    //get the fields for the selected datProvider and 
                    //assign them to the labelField and valueField editor`s dataProvider property
                    if (this.value && this.value.length > 0) {
                        let _self = this;
                        let gaiaForm = new GaiaAPI_forms();
                        let form_id = this.value[0].id_form;
                        if (form_id) {
                            let form = gaiaForm.formsClient.get(form_id).then(function (res) {
                                if (res && res.length > 0)
                                    _self.parent.parent.children.components.input.value = res;
                            });
                        }
                    }
                }
            }
        }

    };
    MetaProps.RepeaterEx = {
        components: {
            ctor: "AutoBrowse",
            label: "Repeated Form",
            required: true,
            props: {
                valueField: "form_id",
                labelField: "form_name",
                dataProvider: forms,
                fields: [{
                    "field": "form_id",
                    "description": "form_id",
                    "visible": false
                }, {
                    "field": "form_name",
                    "description": "form_name"
                }],
                classes: ["no-form-control"],
                change: function () {
                    //propsForm.children["dataProvider"].value
                    //get the fields for the selected datProvider and 
                    //assign them to the labelField and valueField editor`s dataProvider property
                    this.parent.parent.instance.attr.repeated_id_form = this.value.length > 0 ? this.value[0][this.valueField] : undefined;
                }
            },
            index: 7
        },
        rendering: {
            ctor: "ObjectEditor",
            label: "Rendering",
            required: false,
            props: {}
        }

    };
    MetaProps.DataGridColumn = {
        name: {
            ctor: "TextInput",
            label: "Column Name",
            required: true,
            index: 1,
            props: {
                change: function () {
                    this.parent.parent.instance.name = this.value;
                }
            }
        },
        description: {
            ctor: "TextInput",
            label: "Column Label",
            required: true,
            index: 2,
            props: {
                change: function () {
                    this.parent.parent.instance.description = this.value;
                }
            }
        }
    };

    MetaProps.TextInput = {
        type: {
            ctor: "Select",
            label: "Input Type",
            props: {
                dataProvider: textInputTypes,
                change: function () {
                    this.parent.parent.instance.type = this.value;
                }
            }
        },
        value: {
            ctor: "TextInput",
            label: "Text",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.value = this.value;
                }
            }
        },
        autocomplete: {
            ctor: "Select",
            label: "Autocomplete",
            props: {
                dataProvider: new ArrayEx([{
                    "value": "off",
                    "text": "Off"
                }, {
                    "value": "on",
                    "text": "On"
                }]),
                change: function () {
                    this.parent.parent.instance.autocomplete = this.value;
                }
            }
        },
        placeholder: {
            ctor: "TextInput",
            label: "Placeholder",
            index: 3,
            required: false,
            props: {
                change: function () {
                    this.parent.parent.instance.placeholder = this.value;
                }
            }
        }
    };

    MetaProps.Label = {
        labelType: {
            ctor: "Select",
            label: "Label Type",
            props: {
                dataProvider: labelTypes,
                change: function () {
                    this.parent.parent.instance.labelType = this.value;
                }
            }
        }
    };

    MetaProps.Button = {
        type: {
            ctor: "Select",
            label: "Button Type",
            props: {
                dataProvider: buttonTypes,
                change: function () {
                    this.parent.parent.instance.type = this.value;
                }
            }
        },
        label: {
            ctor: "TextInput",
            label: "Value",
            props: {
                change: function () {
                    this.parent.parent.instance.label = this.value;
                }
            }
        }
    };

    MetaProps.TextArea = {
        value: {
            ctor: "TextInput",
            label: "Value",
            props: {
                change: function () {
                    this.parent.parent.instance.value = this.value;
                }
            }
        },
        spellCheck: {
            ctor: "Select",
            label: "Spell Check",
            props: {
                dataProvider: new ArrayEx([{
                    "value": "false",
                    "text": "False"
                }, {
                    "value": "true",
                    "text": "True"
                }]),
                change: function () {
                    this.parent.parent.instance.spellCheck = this.value;
                }
            }
        },
        placeholder: {
            ctor: "TextInput",
            label: "Placeholder",
            props: {
                change: function () {
                    this.parent.parent.instance.placeholder = this.value;
                }
            }
        }
    };

    MetaProps.DateTime = {
        value: {
            ctor: "TextInput",
            label: "Value",
            props: {
                change: function () {
                    this.parent.parent.instance.value = this.value;
                }
            }
        }
    };

    MetaProps.Image = {
        alt: {
            ctor: "TextInput",
            label: "Alt",
            required: false,
            props: {
                change: function () {
                    this.parent.parent.instance.alt = this.value;
                }
            }
        },
        src: {
            ctor: "TextInput",
            label: "Src",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.src = this.value;
                }
            }
        }
    };

    MetaProps.CheckBox = {
        value: {
            ctor: "TextInput",
            label: "Value",
            required: false,
            prop: {
                change: function () {
                    this.parent.parent.instance.value = this.value;
                }
            }
        }
    };

    MetaProps.SideNav = {
        width: {
            ctor: "TextInput",
            label: "Width",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.width = this.value;
                    this.parent.parent.instance.minWidth = this.value;
                }
            }
        },
    };

    MetaProps.viewStack = {
        width: {
            ctor: "TextInput",
            label: "Width",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.width = this.value;
                }
            }
        },
        height: {
            ctor: "TextInput",
            label: "Height",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.height = this.value;
                }
            }
        },
    };

    MetaProps.DateTimeCb = {
        value: {
            ctor: "TextInput",
            label: "Value",
            required: true,
            index: 3,
            props: {
                change: function () {
                    this.parent.parent.instance.value = this.value;
                }
            }
        },
        mode: {
            ctor: "Select",
            label: "Display Mode",
            props: {
                //dataProvider: new ArrayEx([{value: "date", text: "Date"}, {value: "time", text: "Time"},{value: "datetime", text: "Datetime"}]),
                dataProvider: [],
                change: function () {
                    this.parent.parent.instance.mode = this.value;
                }
            }
        }
    };

    MetaProps.AutoCompleteEx = {
        multiSelect: {
            ctor: "Toggle",
            label: "Multi Select",
            index: 19,
            props: {
                change: function () {
                    this.parent.parent.instance.multiSelect = this.value;
                }
            }
        }
    };

    MetaProps.Form = {
        method: {
            ctor: "Select",
            label: "Method",
            index: 3,
            props: {
                dataProvider: new ArrayEx([{
                    "value": "GET",
                    "text": "GET"
                }, {
                    "value": "POST",
                    "text": "POST"
                }]),
                change: function () {
                    this.parent.parent.instance.method = this.value;
                }
            }
        },
        action: {
            ctor: "TextInput",
            label: "Action",
            index: 4,
            props: {
                change: function () {
                    this.parent.parent.instance.action = this.value;
                }
            }
        }
    };

    MetaProps.Container = {
        type: {
            ctor: "Select",
            label: "Type",
            props: {
                dataProvider: containerTypes,
                change: function () {
                    this.parent.parent.instance.type = this.value;
                }
            }
        },
        role: {
            ctor: "TextInput",
            label: "Role",
            props: {
                change: function () {
                    this.parent.parent.instance.role = this.value;
                }
            }
        }
    };
    MetaProps.WizardStep = {
        stepHeading: {
            ctor: "TextInput",
            label: "Step heading",
            required: true,
            index: 1,
            props: {
                change: function () {
                    this.parent.parent.instance.stepHeading = this.value;
                }
            }
        },
        detailLabel: {
            ctor: "TextInput",
            label: "Step Detail",
            required: true,
            index: 2,
            props: {
                change: function () {
                    this.parent.parent.instance.detailLabel = this.value;
                }
            }
        },
        id_form: {
            ctor: "AutoBrowse",
            label: "Select a Form",
            required: true,
            props: {
                valueField: "form_id",
                labelField: "form_name",
                dataProvider: forms,
                fields: [{
                    "field": "form_id",
                    "description": "form_id",
                    "visible": false
                }, {
                    "field": "form_name",
                    "description": "form_name"
                }],
                classes: ["no-form-control"],
                change: function () {
                    //propsForm.children["dataProvider"].value
                    //get the fields for the selected datProvider and 
                    //assign them to the labelField and valueField editor`s dataProvider property
                    this.parent.parent.instance.id_form = this.value.length > 0 ? this.value[0][this.valueField] : undefined;
                }
            },
            index: 7,
            /**
             * by default the value of the propertyEditor is binded to the value of the property of the instance
             * by specifying a setter function you override this behavior. The return value of the function 
             * will be the assigned to the property of the instance
             */
            setter: function () {
                if (this.id_form) {
                    let m = ArrayUtils.getMatching(forms, "form_id", this.id_form);
                    if (m.objects.length > 0) {
                        return new ArrayEx(m.objects);
                    }
                } else
                    return new ArrayEx([]);
            }
        }
    };
    MetaProps.Wizard = {
        components: {
            ctor: "Button",
            label: "Steps",
            index: 18,
            props: {
                label: "Manage Steps",
                classes: ["btn", "btn-secondary"],
                components: [{
                    "ctor": "Label",
                    props: {
                        id: 'fa',
                        labelType: "i",
                        classes: ["fas", "fa-list"]
                    }
                }],
                click: function (e) {
                    let win = this.parent.parent.stepsEditModal;
                    if (!win) {
                        let lit = ObjectUtils.extend(true, Literals.Modal.literal);
                        lit.props.id = "stepsEditModal";
                        lit.props.title = "Edit Steps";
                        let inst;
                        let steps = this.parent.parent.instance.attr.steps;
                        if (steps) {
                            let len = steps.length;
                            inst = new ArrayEx(len);
                            for (let i = 0; i < len; i++) {
                                inst[i] = new WizardStep(steps[i]);
                            }
                        } else {
                            inst = new ArrayEx([]);
                        }
                        lit.props.components = [{
                            ctor: CollectionEditor,
                            props: {
                                id: "stepEditCollEditor",
                                memberType: "WizardStep",
                                "instance": inst
                            }
                        }];
                        lit.props.accept = function (e) {
                            let stepEditCollEditor = this.proxyMaybe.modalDialog.modalContent.modalBody.stepEditCollEditor;
                            this.parent.instance.attr.steps = ArrayUtils.acExtend(false, false, [], ["currentItem"], stepEditCollEditor.dataProvider);
                        };
                        win = this.parent.parent.addComponent(lit);
                    }
                    win.show();
                }
            }
        }
    };

    MetaProps.RangeValidator = {
        min: {
            ctor: "TextInput",
            label: "Min",
            required: true,
            index: 10,
            props: {
                change: function () {
                    this.parent.parent.instance.min = this.value;
                }
            }

        },

        max: {
            ctor: "TextInput",
            label: "Max",
            required: true,
            index: 10,
            props: {
                change: function () {
                    this.parent.parent.instance.max = this.value;
                }
            }

        }
    };

    MetaProps.RegularExpressionValidator = {
        validationExpression: {
            ctor: "TextInput",
            label: "Validation Expression",
            required: true,
            index: 7,
            props: {
                change: function () {
                    this.parent.parent.instance.validationExpression = this.value;
                }
            }
        },
        modifiers: {
            ctor: "Select",
            label: "Modifiers",
            index: 8,
            props: {
                dataProvider: new ArrayEx([{
                    value: "/g",
                    text: "Global"
                }, {
                    value: "/i",
                    text: "Case Insensitive"
                }, {
                    value: "/m",
                    text: "multi-line mode"
                }]),
                change: function () {
                    this.parent.parent.instance.modifiers = this.value;
                }
            }

        }
    };
export {
    MetaProps
};