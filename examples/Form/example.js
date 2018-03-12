var myForm = new Form({
    id: 'form',
    formName: 'My Form',
    viewMode: 'steps',
    components: [
        {
            constructor: TextInput,
            props: {
                id: 'text',
                colspan: '6',
                label: 'Text Label',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: true,
                mask: 'currency',
                value: "1000"
            }
        },
        {
            constructor: TextInput,
            props: {
                id: 'number',
                colspan: '6',
                label: 'Number Label',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: true,
                mask: {
                    alias: "currency",
                    prefix: ''
                },
                value: ""
            }
        },
        {
            constructor: TextArea,
            props: {
                id: 'textarea',
                colspan: '6',
                label: 'Textarea Label',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: true,
                spellCheck: {
                    defaultDictionary: 'English',//Albanian
                },
                value: ''
            }
        },
        {
            constructor: TextEditor,
            props: {
                id: 'texteditor',
                colspan: '6',
                label: 'TextEditor',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: false,
                spellCheck: {
                    defaultDictionary: 'English',//Albanian
                },
                value: 'Test'
            }
        },
        {
            constructor: DateTime,
            props: {
                id: 'datetime',
                colspan: '6',
                label: 'Date',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: true,
                inputFormat: 'DD/MM/YYYY',
                outputFormat: 'DD-MM-YYYY',
                displayFormat: 'MM/DD/YYYY',
                value: '10/02/2018'
            }
        },
        {
            constructor: DateTimeCb,
            props: {
                id: 'dayMonthYear',
                colspan: '6',
                label: 'Date Mode 2',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: false,
                startYear: '2005',
                endYear: '2020',
                mode: "datetime",
                inputFormat: 'MM/DD/YYYY H:m',
                outputFormat: 'DD-MM-YYYY H:m',
                value: '02/10/2006 03:34'
            }
        },
        {
            constructor: AutoComplete,
            props: {
                id: 'autocomplete',
                colspan: '6',
                label: 'Ministrite',
                spacing: { mb: '5' },
                blockProcessAttr: false,
                required: false,
                multipleSelection: false,
                displayTable: false,
                tableData: [["Ministria e Puneve te Jashtme"], ["Ministria e Drejtesise"], ["Ministria e Brendshme"]],
                dataProvider: [{ "id": "1", "text": "Ministria e Puneve te Jashtme" }, { "id": "2", "text": "Ministria e Drejtesise" }, { "id": "3", "text": "Ministria e Brendshme" }],
                value: [{ "id": "1", "text": "Ministria e Puneve te Jashtme" }]
            }
        },
        {
            constructor: Amount,
            props: {
                id: 'amount',
                colspan: '6',
                label: 'Pagesa',
                blockProcessAttr: false,
                spacing: { mb: '5' },
                required: true,
                currencyList: [{ "id": "1", "text": "EUR" }, { "id": "2", "text": "ALL" }, { "id": "3", "text": "GBP" }],
                value: {
                    amount: "132323",
                    currency: "2"
                }
            }
        },
        {
            constructor: ComboBox,
            props: {
                id: 'combo',
                colspan: '6',
                label: 'Zgjidh Shtetin',
                spacing: { mb: '5' },
                dataProvider: [{ "value": "1", "text": "Shqiperi" }, { "value": "2", "text": "Greqi" }, { "value": "3", "text": "SHBA" }],
                versionStyle: "",
                blockProcessAttr: false,
                required: false,
                value: "2"
            }
        },
        {
            constructor: GoogleMap,
            props: {
                id: 'map',
                colspan: '6',
                label: 'Vendodhja Gjeografike',
                spacing: { mb: '5' },
                versionStyle: "",
                blockProcessAttr: false,
                required: false,
                value: {
                    latitude: 41.1533,
                    longtitude: 20.1683,
                    zoomLevel: 7
                }
            }
        },
        {
            constructor: Toggle,
            props: {
                id: 'checkbox',
                colspan: '6',
                label: 'Checkbox',
                spacing: { mb: '5' },
                blockProcessAttr: false,
                required: false,
                value: true,
                unCheckedLabel: "Jo",
                checkedLabel: "Po"
            }
        },
        {
            constructor: TrippleSwitch,
            props: {
                id: 'trippleswitch',
                colspan: '6',
                label: 'This is a survey. Are you happy?',
                versionStyle: "",
                blockProcessAttr: false,
                required: false,
                spacing: { mb: '5' },
                dataProvider: {
                    left: "Yes", //1
                    middle: "Somewhat",//-1
                    right: "No" //0
                },
                value: "1" //1,-1,0
            }
        },
        {
            constructor: MultiSwitch,
            props: {
                id: 'multiswitch',
                colspan: '6',
                label: 'Ministrite',
                fieldName: 'multiswitchInputR',
                spacing: { mb: '5' },
                blockProcessAttr: false,
                required: true,
                multiselect: false,
                dataProvider: [
                    { "id": "1", "text": "Ministria e Puneve te Jashtme", "buttonClass": 'btn btn-sm btn-default' },
                    { "id": "2", "text": "Ministria e Drejtesise", "buttonClass": 'btn btn-sm btn-default' },
                    { "id": "3", "text": "Ministria e Brendshme", "buttonClass": 'btn btn-sm btn-success' },
                ],
                valueField: "id",
                labelField: "text",
                classField: "buttonClass",
                defaultClass: 'btn btn-sm btn-default',
                selectedClass: 'btn btn-sm btn-success',
                value: [{ "id": "3", "text": "Ministria e Brendshme", "buttonClass": 'btn btn-xs btn-success' }],
                onclick: function (e) {
                    console.log("From MultiSwitch ClickAction");
                    //e.preventDefault();
                }
            }
        },
        {
            constructor: RadioGroup,
            props: {
                id: 'radiogroup',
                colspan: '6',
                label: 'Ministrite',
                blockProcessAttr: false,
                spacing: { mb: '5' },
                required: true,
                dataProvider: [
                    { "id": "1", "text": "Ministria e Puneve te Jashtme" },
                    { "id": "2", "text": "Ministria e Drejtesise" },
                    { "id": "3", "text": "Ministria e Brendshme" },
                    { "id": "4", "text": "Ministria e Mbrojtjes" }
                ],
                valueField: "id",
                labelField: "text",
                defaultClass: 'btn btn-xs btn-default',
                selectedClass: 'btn btn-xs btn-success',
                value: "3",
                onclick: function (e) {
                    console.log("From Radio ClickAction");
                }
            }
        },
        {
            constructor: CheckBoxGroup,
            props: {
                id: 'checkboxgroup',
                colspan: '6',
                spacing: { mb: '5' },
                label: 'Ministrite',
                blockProcessAttr: false,
                required: true,
                dataProvider: [
                    { "id": "1", "text": "Ministria e Puneve te Jashtme", "buttonClass": 'btn btn-xs btn-default', "enabled": true },
                    { "id": "2", "text": "Ministria e Drejtesise", "buttonClass": 'btn btn-xs btn-default', "enabled": true },
                    { "id": "3", "text": "Ministria e Brendshme", "buttonClass": 'btn btn-xs btn-success', "enabled": true },
                    { "id": "4", "text": "Ministria e Mbrojtjes", "buttonClass": 'btn btn-xs btn-default', "enabled": false }
                ],
                valueField: "id",
                labelField: "text",
                defaultClass: 'btn btn-xs btn-default',
                selectedClass: 'btn btn-xs btn-success',
                value: "",
                enabledField: "enabled",
                onclick: function (e) {
                    console.log("From Radio ClickAction");
                }
            }
        },
        {
            constructor: FormUpload,
            props: {
                id: 'formupload',
                colspan: '6',
                spacing: { mb: '5' },
                label: 'Dokumentat e Ministrise se Kultures',
                blockProcessAttr: false,
                required: true,
                dataProvider: [],
                action: 'http://phptest/upload.php',
                dataProvider: [
                    { "id": "1", "no": "1", "file": "test.txt", "deleteAction": "http://phptest/delete.php?id=1", "downloadLink": "http://phptest/download.php?id=1" },
                    { "id": "2", "no": "2", "file": "paga.xlsx", "deleteAction": "http://phptest/delete.php?id=1", "downloadLink": "http://phptest/download.php?id=2" }
                ],
                defaultItem: { "id": "1", "no": "1", "file": "test.txt", "deleteAction": "http://phptest/delete.php", "downloadLink": "http://phptest/download.php" },
                noLabelValue: "no",
                nameLabelValue: "file",
                deleteAction: "deleteAction",
                downloadLink: "downloadLink",
                valueField: "id",
                value: ""
            }
        },
        {
            constructor: Repeater,
            props: {
                id: 'repeater',
                rendering: {
                    direction: 'vertical',
                    seperator: true,
                    actions: true
                },
                defaultItem: {
                    comboLabel: 'Zgjidh Shtetin',
                    comboValue: "",
                    checkboxValue: false,
                    autocompleteLabel: 'Ministrite',
                    autocompleteValue: [],
                    textLabel: 'Emri',
                    textValue: '',
                    trippleValue: "-1",
                    multiValue: [],
                    mapValue: {
                        latitude: 41.1533,
                        longtitude: 20.1683,
                        zoomLevel: 7
                    },
                    textAreaValue: "",
                    textEditorValue: "",
                    dateValue: "",
                    dayMonthYearValue: "",
                    amountValue: {},
                    radioGroupValue: "",
                    checkboxGroupValue: "",
                    formUploadProvider: []

                },
                dataProvider: [
                    {
                        comboLabel: 'Zgjidh Shtetin',
                        comboValue: "",
                        checkboxValue: true,
                        autocompleteLabel: 'Ministrite',
                        autocompleteValue: [{ "id": "2", "text": "Ministria e Drejtesise" }],
                        textLabel: 'Emri',
                        textValue: 'Mateo Jovani',
                        trippleValue: "-1",
                        multiValue: [{ "id": "3", "text": "Ministria e Brendshme" }],
                        mapValue: {
                            latitude: 51.1533,
                            longtitude: 30.1683,
                            zoomLevel: 7
                        },
                        textAreaValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        textEditorValue: "",
                        dateValue: "10/02/2013",
                        dayMonthYearValue: "10/02/2013",
                        amountValue: { currency: "2", amount: "33433" },
                        radioGroupValue: "2",
                        checkboxGroupValue: [],
                        formUploadProvider: [
                            { "id": "1", "no": "1", "file": "test.txt", "deleteAction": "http://phptest/delete.php?id=1", "downloadLink": "http://phptest/download.php?id=1" },
                            { "id": "2", "no": "2", "file": "image.jpg", "deleteAction": "http://phptest/delete.php?id=2", "downloadLink": "http://phptest/download.php?id=2" },
                            { "id": "3", "no": "3", "file": "doc.pdf", "deleteAction": "http://phptest/delete.php?id=3", "downloadLink": "http://phptest/download.php?id=3" },
                        ]

                    },
                    {
                        comboLabel: 'Zgjidh Shtetin',
                        comboValue: "1",
                        checkboxValue: true,
                        autocompleteLabel: 'Ministrite',
                        autocompleteValue: [{ "id": "3", "text": "Ministria e Brendshme" }],
                        textLabel: 'Emri',
                        textValue: 'Lejdi Koci',
                        trippleValue: "1",
                        multiValue: [{ "id": "3", "text": "Ministria e Brendshme" }, { "id": "2", "text": "Ministria e Drejtesise" }],
                        mapValue: {
                            latitude: 41.1533,
                            longtitude: 20.1683,
                            zoomLevel: 7
                        },
                        textAreaValue: "Lorem Ipsum",
                        textEditorValue: "Lorem Ipsum",
                        dateValue: "",
                        dayMonthYearValue: "",
                        amountValue: {},
                        radioGroupValue: "",
                        checkboxGroupValue: [
                            { "id": "3", "text": "Ministria e Brendshme", "buttonClass": 'btn btn-xs btn-success', "enabled": true },
                            { "id": "4", "text": "Ministria e Mbrojtjes", "buttonClass": 'btn btn-xs btn-success', "enabled": false }
                        ],
                        formUploadProvider: [
                            { "id": "1", "no": "1", "file": "other.txt", "deleteAction": "http://phptest/delete.php?id=1", "downloadLink": "http://phptest/download.php?id=1" }
                        ]
                    }
                ],
                components: [
                    {
                        constructor: AutoComplete,
                        props: {
                            id: 'autocompleteR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: '{autocompleteLabel}',
                            blockProcessAttr: false,
                            required: false,
                            multipleSelection: true,
                            displayTable: true,
                            tableData: [["Ministria e Puneve te Jashtme"], ["Ministria e Drejtesise"], ["Ministria e Brendshme"]],
                            dataProvider: [{ "id": "1", "text": "Ministria e Puneve te Jashtme" }, { "id": "2", "text": "Ministria e Drejtesise" }, { "id": "3", "text": "Ministria e Brendshme" }],
                            value: '{autocompleteValue}'
                        }
                    },
                    {
                        constructor: ComboBox,
                        props: {
                            id: 'comboR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: '{comboLabel}',
                            blockProcessAttr: false,
                            required: true,
                            dataProvider: [{ "value": "1", "text": "Shqiperi" }, { "value": "2", "text": "Greqi" }, { "value": "3", "text": "SHBA" }],
                            value: '{comboValue}'
                        }
                    },
                    {
                        constructor: TextInput,
                        props: {
                            id: 'textR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: '{textLabel}',
                            blockProcessAttr: false,
                            required: true,
                            value: '{textValue}'
                        }
                    },
                    {
                        constructor: Amount,
                        props: {
                            id: 'amount',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'Pagesa',
                            blockProcessAttr: false,
                            required: true,
                            currencyList: [{ "id": "1", "text": "EUR" }, { "id": "2", "text": "ALL" }, { "id": "3", "text": "GBP" }],
                            value: '{amountValue}'
                        }
                    },
                    {
                        constructor: TextEditor,
                        props: {
                            id: 'texteditorR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'TextEditor',
                            versionStyle: '',
                            blockProcessAttr: false,
                            required: false,
                            value: '{textEditorValue}'
                        }
                    },
                    {
                        constructor: TextArea,
                        props: {
                            id: 'textareaR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'Textarea Label',
                            versionStyle: '',
                            blockProcessAttr: false,
                            required: true,
                            value: '{textAreaValue}'
                        }
                    },
                    {
                        constructor: DateTime,
                        props: {
                            id: 'datetime',
                            colspan: '6',
                            label: 'Date',
                            versionStyle: '',
                            spacing: { mb: '5' },
                            blockProcessAttr: false,
                            required: true,
                            inputFormat: 'DD/MM/YYYY',
                            outputFormat: 'DD-MM-YYYY',
                            displayFormat: 'MM/DD/YYYY',
                            value: '{dateValue}'
                        }
                    },
                    {
                        constructor: DateTimeCb,
                        props: {
                            id: 'dayMonthYear',
                            colspan: '6',
                            label: 'Date Mode 2',
                            spacing: { mb: '5' },
                            versionStyle: '',
                            blockProcessAttr: false,
                            required: false,
                            mode: "date",
                            inputFormat: 'DD/MM/YYYY',
                            outputFormat: 'DD-MM-YYYY',
                            value: '{dayMonthYearValue}'
                        }
                    },
                    {
                        constructor: Toggle,
                        props: {
                            id: 'checkboxR',
                            colspan: '6',
                            label: 'Aktiv',
                            spacing: { mb: '5' },
                            blockProcessAttr: false,
                            required: false,
                            value: '{checkboxValue}',
                            unCheckedLabel: "Jo",
                            checkedLabel: "Po"
                        }
                    },
                    {
                        constructor: GoogleMap,
                        props: {
                            id: 'mapR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'Vendodhja Gjeografike',
                            fieldName: 'mapFieldR',
                            versionStyle: "",
                            blockProcessAttr: false,
                            required: false,
                            value: '{mapValue}'
                        }
                    },
                    {
                        constructor: RadioGroup,
                        props: {
                            id: 'radiogroup',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'Ministrite',
                            blockProcessAttr: false,
                            required: true,
                            dataProvider: [
                                { "id": "1", "text": "Ministria e Puneve te Jashtme" },
                                { "id": "2", "text": "Ministria e Drejtesise" },
                                { "id": "3", "text": "Ministria e Brendshme" },
                                { "id": "4", "text": "Ministria e Mbrojtjes" }
                            ],
                            valueField: "id",
                            labelField: "text",
                            defaultClass: 'btn btn-xs btn-default',
                            selectedClass: 'btn btn-xs btn-success',
                            value: "{radioGroupValue}",
                            onclick: function (e) {
                                console.log("From Radio ClickAction");
                            }
                        }
                    },
                    {
                        constructor: CheckBoxGroup,
                        props: {
                            id: 'checkboxgroup',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'Ministrite',
                            blockProcessAttr: false,
                            required: true,
                            dataProvider: [
                                { "id": "1", "text": "Ministria e Puneve te Jashtme", "buttonClass": 'btn btn-xs btn-default', "enabled": true },
                                { "id": "2", "text": "Ministria e Drejtesise", "buttonClass": 'btn btn-xs btn-default', "enabled": true },
                                { "id": "3", "text": "Ministria e Brendshme", "buttonClass": 'btn btn-xs btn-success', "enabled": true },
                                { "id": "4", "text": "Ministria e Mbrojtjes", "buttonClass": 'btn btn-xs btn-default', "enabled": false }
                            ],
                            valueField: "id",
                            labelField: "text",
                            defaultClass: 'btn btn-xs btn-default',
                            selectedClass: 'btn btn-xs btn-success',
                            value: "{checkboxGroupValue}",
                            enabledField: "enabled",
                            onclick: function (e) {
                                console.log("From Radio ClickAction");
                            }
                        }
                    },
                    {
                        constructor: MultiSwitch,
                        props: {
                            id: 'multiswitch',
                            spacing: { mb: '5' },
                            colspan: '6',
                            label: 'Ministrite',
                            fieldName: 'multiswitchInputR',
                            blockProcessAttr: false,
                            required: true,
                            multiselect: true,
                            dataProvider: [
                                { "id": "1", "text": "Ministria e Puneve te Jashtme", "buttonClass": 'btn btn-sm btn-default' },
                                { "id": "2", "text": "Ministria e Drejtesise", "buttonClass": 'btn btn-sm btn-default' },
                                { "id": "3", "text": "Ministria e Brendshme", "buttonClass": 'btn btn-sm btn-success' },
                            ],
                            valueField: "id",
                            labelField: "text",
                            classField: "buttonClass",
                            defaultClass: 'btn btn-sm btn-default',
                            selectedClass: 'btn btn-sm btn-success',
                            value: '{multiValue}',
                            onclick: function (e) {
                                console.log("From MultiSwitch ClickAction");
                                //e.preventDefault();
                            }
                        }
                    },
                    {
                        constructor: TrippleSwitch,
                        props: {
                            id: 'trippleswitchR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'This is a survey. Are you happy?',
                            versionStyle: "",
                            blockProcessAttr: false,
                            required: false,
                            dataProvider: {
                                left: "Yes", //1
                                middle: "Somewhat",//-1
                                right: "No" //0
                            },
                            value: "{trippleValue}" //1,-1,0
                        }
                    },
                    {
                        constructor: FormUpload,
                        props: {
                            id: 'formupload',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: 'Dokumentat e Ministrise se Kultures',
                            blockProcessAttr: false,
                            required: true,
                            dataProvider: [],
                            action: 'http://phptest/upload.php',
                            dataProvider: "{formUploadProvider}",
                            defaultItem: { "id": "1", "no": "1", "file": "test.txt", "deleteAction": "http://phptest/delete.php", "downloadLink": "http://phptest/download.php" },
                            noLabelValue: "no",
                            nameLabelValue: "file",
                            valueField: "id",
                            deleteAction: "deleteAction",
                            downloadLink: "downloadLink",
                            value: ""
                        }
                    },
                ]
            }
        }
    ]
});

var myForm2 = new Form({
    id: 'form',
    formName: 'My Form 2',
    viewMode: 'steps',
    components: [
        {
            constructor: TextInput,
            props: {
                id: 'text',
                colspan: '6',
                label: 'Text Label',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: true,
                mask: 'currency',
                value: "1000"
            }
        },
        {
            constructor: TextInput,
            props: {
                id: 'number',
                colspan: '6',
                label: 'Number Label',
                spacing: { mb: '5' },
                versionStyle: '',
                blockProcessAttr: false,
                required: true,
                mask: {
                    alias: "currency",
                    prefix: ''
                },
                value: ""
            }
        },
        {
            constructor: Repeater,
            props: {
                id: 'repeater',
                rendering: {
                    direction: 'vertical',
                    seperator: true,
                    actions: true
                },
                defaultItem: {
                    comboLabel: 'Zgjidh Shtetin',
                    comboValue: "",
                    checkboxValue: false,
                    autocompleteLabel: 'Ministrite',
                    autocompleteValue: [],
                    textLabel: 'Emri',
                    textValue: '',
                    trippleValue: "-1",
                    multiValue: [],
                    mapValue: {
                        latitude: 41.1533,
                        longtitude: 20.1683,
                        zoomLevel: 7
                    },
                    textAreaValue: "",
                    textEditorValue: "",
                    dateValue: "",
                    dayMonthYearValue: "",
                    amountValue: {},
                    radioGroupValue: "",
                    checkboxGroupValue: "",
                    formUploadProvider: []

                },
                dataProvider: [
                    {
                        comboLabel: 'Zgjidh Shtetin',
                        comboValue: "",
                        checkboxValue: true,
                        autocompleteLabel: 'Ministrite',
                        autocompleteValue: [{ "id": "2", "text": "Ministria e Drejtesise" }],
                        textLabel: 'Emri',
                        textValue: 'Mateo Jovani',
                        trippleValue: "-1",
                        multiValue: [{ "id": "3", "text": "Ministria e Brendshme" }],
                        mapValue: {
                            latitude: 51.1533,
                            longtitude: 30.1683,
                            zoomLevel: 7
                        },
                        textAreaValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        textEditorValue: "",
                        dateValue: "10/02/2013",
                        dayMonthYearValue: "10/02/2013",
                        amountValue: { currency: "2", amount: "33433" },
                        radioGroupValue: "2",
                        checkboxGroupValue: [],
                        formUploadProvider: [
                            { "id": "1", "no": "1", "file": "test.txt", "deleteAction": "http://phptest/delete.php?id=1" },
                            { "id": "2", "no": "2", "file": "image.jpg", "deleteAction": "http://phptest/delete.php?id=2" },
                            { "id": "3", "no": "3", "file": "doc.pdf", "deleteAction": "http://phptest/delete.php?id=3" },
                        ]

                    },
                    {
                        comboLabel: 'Zgjidh Shtetin',
                        comboValue: "1",
                        checkboxValue: true,
                        autocompleteLabel: 'Ministrite',
                        autocompleteValue: [{ "id": "3", "text": "Ministria e Brendshme" }],
                        textLabel: 'Emri',
                        textValue: 'Lejdi Koci',
                        trippleValue: "1",
                        multiValue: [{ "id": "3", "text": "Ministria e Brendshme" }, { "id": "2", "text": "Ministria e Drejtesise" }],
                        mapValue: {
                            latitude: 41.1533,
                            longtitude: 20.1683,
                            zoomLevel: 7
                        },
                        textAreaValue: "Lorem Ipsum",
                        textEditorValue: "Lorem Ipsum",
                        dateValue: "",
                        dayMonthYearValue: "",
                        amountValue: {},
                        radioGroupValue: "",
                        checkboxGroupValue: [
                            { "id": "3", "text": "Ministria e Brendshme", "buttonClass": 'btn btn-xs btn-success', "enabled": true },
                            { "id": "4", "text": "Ministria e Mbrojtjes", "buttonClass": 'btn btn-xs btn-success', "enabled": false }
                        ],
                        formUploadProvider: [
                            { "id": "1", "no": "1", "file": "other.txt", "deleteAction": "http://phptest/delete.php?id=1" }
                        ]
                    }
                ],
                components: [
                    {
                        constructor: AutoComplete,
                        props: {
                            id: 'autocompleteR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: '{autocompleteLabel}',
                            blockProcessAttr: false,
                            required: false,
                            multipleSelection: true,
                            displayTable: true,
                            tableData: [["Ministria e Puneve te Jashtme"], ["Ministria e Drejtesise"], ["Ministria e Brendshme"]],
                            dataProvider: [{ "id": "1", "text": "Ministria e Puneve te Jashtme" }, { "id": "2", "text": "Ministria e Drejtesise" }, { "id": "3", "text": "Ministria e Brendshme" }],
                            value: '{autocompleteValue}'
                        }
                    },
                    {
                        constructor: ComboBox,
                        props: {
                            id: 'comboR',
                            colspan: '6',
                            spacing: { mb: '5' },
                            label: '{comboLabel}',
                            blockProcessAttr: false,
                            required: true,
                            dataProvider: [{ "value": "1", "text": "Shqiperi" }, { "value": "2", "text": "Greqi" }, { "value": "3", "text": "SHBA" }],
                            value: '{comboValue}'
                        }
                    }
                ]
            }
        }
    ]
});

myForm.on('creationComplete', function () {
    loader.hide();
    
    myForm.repeater.on('onBeforeRowAdd', function (e) {
        e.preventDefault();
        var repeater = this;

        bootbox.confirm("Do you want to add row?", function (result) {
            if (result) {
                loader.show();
                setTimeout(function () { repeater.addRow(repeater.defaultItem, repeater.currentIndex + 1); }, 200)
            }
        });

        repeater.on('onRowAdd', function (e) {
            loader.hide();
        });
    });

    myForm.repeater.on('onBeforeRowDelete', function (e) {
        e.preventDefault();
        var repeater = this;

        bootbox.confirm("Do you want to remove row?", function (result) {
            if (result) {
                repeater.removeRow(repeater.currentIndex);
            }
        });

        repeater.on('onRowAdd', function (e) {

        });
    });

});

$('#root').append(myForm.render());
$('#root').append(myForm2.render());

this["myForm"] = myForm;



