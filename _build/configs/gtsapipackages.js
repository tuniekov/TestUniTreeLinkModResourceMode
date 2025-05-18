export default {
    testunitreelinkmodresourcemode:{
        name:'testunitreelinkmodresourcemode',
        gtsAPITables:{
            modResourceTree:{
                table:'modResourceTree',
                autocomplete_field:'',
                version:2,
                type: 3,
                authenticated:true,
                groups:'',
                permitions:'',
                active:true,
                gtsAPIUniTreeClass:{
                    modDocument: {
                        exdended_modresource:1,
                        title_field: 'pagetitle'
                    },
                },
                properties: {
                    actions:{
                        create:{
                            tables:{
                                modDocument:{
                                    label:'Создать ресурс',
                                    parent_classes:['modDocument'],
                                    cls: 'p-button-rounded p-button-info',
                                    form:'UniTree',
                                    add_fields: {
                                        template: {
                                            label: 'Шаблон',
                                            type: 'autocomplete',
                                            table: 'modTemplate',
                                            defaultname:'CatalogTemplate',
                                        },
                                    }
                                },
                            }
                        },
                        delete:{},
                    },
                    nodeclick:{
                        classes:{
                            modDocument:{
                                tabs:{
                                    main:{
                                        type:'form',
                                        title:'Основное',
                                        table:'modDocument',
                                    }
                                }
                            },
                        }
                    },
                    useUniTree : true,
                    extendedModResource : true,
                    rootIds: 0,
                    idField:'id',
                    parentIdField: 'parent_id',
                    parents_idsField: 'parents_ids',
                    menuindexField: 'menuindex',
                    classField: 'class',
                    isLeafEmptyChild: 1,
                }
            },
        }
    },
    modx:{
        name:'modx',
        gtsAPITables:{
            modTemplate:{
                table:'modTemplate',
                autocomplete_field:'template',
                version:4,
                type: 1,
                authenticated:true,
                groups:'',
                permitions:'',
                active:true,
                properties: {
                    autocomplete:{
                        tpl:'{$templatename}',
                        where:{
                            "templatename:LIKE":"%query%",
                        },
                        limit:0,
                    },
                }
            },
            modDocument:{
                table:'modDocument',
                autocomplete_field:'',
                version:3,
                authenticated:true,
                groups:'',
                permitions:'',
                active:true,
                properties: {
                    actions:{
                        read:{},
                        update:{}
                    },
                    "fields": {
                        "id": {
                            "type": "view",
                            "class": "modDocument"
                        },
                        "pagetitle": {
                            "label":"Заголовок",
                            "type": "text",
                            "class": "modDocument"
                        },
                        "alias": {
                            "label":"Псевдоним",
                            "type": "text",
                            "class": "modDocument"
                        },
                        "published": {
                            "label":"Опубликовано",
                            "type": "boolean",
                            "class": "modDocument"
                        },
                        "content": {
                            "label":"Содержимое",
                            "type": "textarea",
                            "class": "modDocument"
                        }
                    },  
                }
            },
        }
    }
}
