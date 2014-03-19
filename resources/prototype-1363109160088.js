(function(window, undefined) {
  var dictionary = {
    "7d0e7ab5-8287-4050-8583-40e3792d3ba8": "Login1",
    "6cf3b0ca-a4af-4820-b1db-6dc568e1cd8c": "public_user",
    "8024ba50-daf5-4ac8-891a-2ba1a20c4f4a": "Logged_in_driver",
    "a56d1bc7-4fc0-4aac-94d9-1de0810550d8": "Register 1",
    "8c00869c-e955-4168-b10e-78034f68858a": "Locate_driver",
    "e90f5efa-1777-4a75-947e-c3350cc9e196": "recents_calls",
    "85a08665-0876-4ac3-872d-6517629e3a16": "update_status",
    "b0095bd6-4878-4cf4-8e80-e93a06bd5a0d": "Dashboard1",
    "3ef8c29f-9f8d-499c-a6e6-d5eca38fa408": "Home",
    "d72049d7-8829-48ee-980f-bdb16c6352e5": "call_Locator",
    "56d852e0-ac8f-484f-b4a3-0a933b3fd27f": "check_balance",
    "e89bcb88-38fc-4551-9bf2-75f6519d63f3": "calling_bagabo_j",
    "696050f7-1149-4c79-a970-b37b36e56dd4": "calling_kalisa_b",
    "ee2aa91d-0ac2-4391-8b0f-7036045869fa": "text_a_message_bagabo_j",
    "74167efa-06f0-41b4-82d1-f0deb9956073": "text_a_message_kalisa_b",
    "13b712fd-7dec-4f24-9705-f2387cc550a3": "Inner App imported",
    "88542ead-a339-4937-89e9-0f0383722520": "Inner App",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "9869b11b-7ce1-4bb4-88e8-73a385e9a481": "Template 1 imported",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "c64d469a-0d28-4680-836b-5bc2422f6854": "Menu imported_1",
    "54026336-c7d3-4a2c-a9d3-69473e1260a3": "Menu imported",
    "9ebd65d6-f6c0-4ddc-9a8a-9f670495cbe6": "Menu"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);jQuery("#simulation")
  .on("click", ".s-7d0e7ab5-8287-4050-8583-40e3792d3ba8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_3",
                    "effect": {
                      "type": "shake",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8024ba50-daf5-4ac8-891a-2ba1a20c4f4a",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-7d0e7ab5-8287-4050-8583-40e3792d3ba8 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-6cf3b0ca-a4af-4820-b1db-6dc568e1cd8c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/696050f7-1149-4c79-a970-b37b36e56dd4",
                    "transition": "fliphorizontal"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/74167efa-06f0-41b4-82d1-f0deb9956073",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8c00869c-e955-4168-b10e-78034f68858a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-6cf3b0ca-a4af-4820-b1db-6dc568e1cd8c .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-6cf3b0ca-a4af-4820-b1db-6dc568e1cd8c")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });function initData() {
  jimData.variables["Countries"] = "";
  jimData.variables["zoom imported"] = "100";
  jimData.variables["Support Agent imported"] = "";
  jimData.variables["zoom"] = "100";
  jimData.variables["Support Agent"] = "";
  jimData.variables["Countries imported"] = "";
  jimData.datamasters["Countries imported"] = [
    {
      "id": 1,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Afghanistan",
        "location": "Middle East"
      }
    },
    {
      "id": 2,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Albania",
        "location": "Europe"
      }
    },
    {
      "id": 3,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Algeria",
        "location": "Africa"
      }
    },
    {
      "id": 4,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "American Samoa",
        "location": "Oceania"
      }
    },
    {
      "id": 5,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Andorra",
        "location": "Europe"
      }
    },
    {
      "id": 6,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Angola",
        "location": "Africa"
      }
    },
    {
      "id": 7,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Anguilla",
        "location": "Africa"
      }
    },
    {
      "id": 8,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Antigua And Barbuda",
        "location": "Central America"
      }
    },
    {
      "id": 9,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Argentina",
        "location": "South America"
      }
    },
    {
      "id": 10,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Armenia",
        "location": "Asia"
      }
    },
    {
      "id": 11,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Aruba",
        "location": ""
      }
    },
    {
      "id": 12,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Australia",
        "location": ""
      }
    },
    {
      "id": 13,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Austria",
        "location": ""
      }
    },
    {
      "id": 14,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Azerbaijan",
        "location": ""
      }
    },
    {
      "id": 15,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bahamas",
        "location": ""
      }
    },
    {
      "id": 16,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bahrain",
        "location": ""
      }
    },
    {
      "id": 17,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bangladesh",
        "location": ""
      }
    },
    {
      "id": 18,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Barbados",
        "location": ""
      }
    },
    {
      "id": 19,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Belarus",
        "location": ""
      }
    },
    {
      "id": 20,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Belgium",
        "location": ""
      }
    },
    {
      "id": 21,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Belize",
        "location": ""
      }
    },
    {
      "id": 22,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Benin",
        "location": ""
      }
    },
    {
      "id": 23,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bermuda",
        "location": ""
      }
    },
    {
      "id": 24,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bhutan",
        "location": ""
      }
    },
    {
      "id": 25,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bolivia",
        "location": ""
      }
    },
    {
      "id": 26,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bosnia And Herzegovina",
        "location": ""
      }
    },
    {
      "id": 27,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Botswana",
        "location": ""
      }
    },
    {
      "id": 28,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bouvet Island",
        "location": ""
      }
    },
    {
      "id": 29,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Brazil",
        "location": ""
      }
    },
    {
      "id": 30,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "British Indian Ocean Territory",
        "location": ""
      }
    },
    {
      "id": 31,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Brunei Darussalam",
        "location": ""
      }
    },
    {
      "id": 32,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Bulgaria",
        "location": ""
      }
    },
    {
      "id": 33,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Burkina Faso",
        "location": ""
      }
    },
    {
      "id": 34,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Burundi",
        "location": ""
      }
    },
    {
      "id": 35,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Cambodia",
        "location": ""
      }
    },
    {
      "id": 36,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Cameroon",
        "location": ""
      }
    },
    {
      "id": 37,
      "datamaster": "Countries imported",
      "userdata": {
        "name": "Zimbabwe",
        "location": ""
      }
    }
  ];

  jimData.datamasters["Support Agent"] = [
    {
      "id": 1,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "ADAM SCHWABE",
        "Location": "San Francisco, CA"
      }
    },
    {
      "id": 2,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "DAVID GILLIS",
        "Location": "New York, NY"
      }
    },
    {
      "id": 3,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "JOHN DOE",
        "Location": "Miami, FL"
      }
    },
    {
      "id": 4,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "JEREMY BELL",
        "Location": "Los Angeles, CA"
      }
    },
    {
      "id": 5,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "PETER NITSH",
        "Location": "Austin, TX"
      }
    },
    {
      "id": 6,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "QUINCY JONES",
        "Location": "Chicago, IL"
      }
    },
    {
      "id": 7,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "SHERLOCK HOLMES",
        "Location": "Boston, MA"
      }
    },
    {
      "id": 8,
      "datamaster": "Support Agent",
      "userdata": {
        "Name": "TONY DANZA",
        "Location": "Philadelphia, PA"
      }
    }
  ];

  jimData.isInitialized = true;
}jQuery("#simulation")
  .on("click", ".s-8024ba50-daf5-4ac8-891a-2ba1a20c4f4a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_4",
                    "effect": {
                      "type": "fade",
                      "duration": 4000
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_4",
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_5",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 4000
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_5",
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_6",
                    "effect": {
                      "type": "fade",
                      "duration": 2000
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_6",
                    "effect": {
                      "type": "fade",
                      "duration": 2000
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_1"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56d852e0-ac8f-484f-b4a3-0a933b3fd27f",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/85a08665-0876-4ac3-872d-6517629e3a16",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-8024ba50-daf5-4ac8-891a-2ba1a20c4f4a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-8024ba50-daf5-4ac8-891a-2ba1a20c4f4a")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_6"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_2"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_9"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_10"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_13"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-8024ba50-daf5-4ac8-891a-2ba1a20c4f4a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_47") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_48") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_10"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_13"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8024ba50-daf5-4ac8-891a-2ba1a20c4f4a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_47")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_48")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-a56d1bc7-4fc0-4aac-94d9-1de0810550d8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_2"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_3",
                    "effect": {
                      "type": "shake",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8024ba50-daf5-4ac8-891a-2ba1a20c4f4a",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-a56d1bc7-4fc0-4aac-94d9-1de0810550d8 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-8c00869c-e955-4168-b10e-78034f68858a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"100" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "200"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"50" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "100"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"100" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "50"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"200" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "100"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-8c00869c-e955-4168-b10e-78034f68858a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-8c00869c-e955-4168-b10e-78034f68858a")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-e90f5efa-1777-4a75-947e-c3350cc9e196 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56d852e0-ac8f-484f-b4a3-0a933b3fd27f",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/85a08665-0876-4ac3-872d-6517629e3a16",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d72049d7-8829-48ee-980f-bdb16c6352e5",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e89bcb88-38fc-4551-9bf2-75f6519d63f3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ee2aa91d-0ac2-4391-8b0f-7036045869fa"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-e90f5efa-1777-4a75-947e-c3350cc9e196 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e90f5efa-1777-4a75-947e-c3350cc9e196")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_7"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_9"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_12"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-e90f5efa-1777-4a75-947e-c3350cc9e196 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_7"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_12"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-e90f5efa-1777-4a75-947e-c3350cc9e196 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-85a08665-0876-4ac3-872d-6517629e3a16 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_4",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_4",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_5"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56d852e0-ac8f-484f-b4a3-0a933b3fd27f",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/85a08665-0876-4ac3-872d-6517629e3a16",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-85a08665-0876-4ac3-872d-6517629e3a16 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-85a08665-0876-4ac3-872d-6517629e3a16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_4"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-85a08665-0876-4ac3-872d-6517629e3a16 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-85a08665-0876-4ac3-872d-6517629e3a16 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-b0095bd6-4878-4cf4-8e80-e93a06bd5a0d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7d0e7ab5-8287-4050-8583-40e3792d3ba8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6cf3b0ca-a4af-4820-b1db-6dc568e1cd8c"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-b0095bd6-4878-4cf4-8e80-e93a06bd5a0d .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 130e16c5-f92c-4cf5-a445-e7a019bd5b2f.png')",
                        "border-top-width": "3px",
                        "border-top-style": "none",
                        "border-top-color": "#F77D00",
                        "border-right-width": "3px",
                        "border-right-style": "none",
                        "border-right-color": "#F77D00",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#F77D00",
                        "border-left-width": "3px",
                        "border-left-style": "none",
                        "border-left-color": "#F77D00",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "overflow": "hidden"
                      },
                      "expressions": {
                        "width": "Math.max(192 + 2 + 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 2 + 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 130e16c5-f92c-4cf5-a445-e7a019bd5b2f.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(192 + 2 + 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 2 + 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_12",
                    "type": "movebyoffset",
                    "containment": false,
                    "position": "relative",
                    "top": -2,
                    "left": -2
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 694cb7e3-1a32-4c47-b36d-200946694a76.png')",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#A4A4A4",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#A4A4A4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#A4A4A4",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#A4A4A4",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "overflow": "hidden"
                      },
                      "expressions": {
                        "width": "Math.max(192 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 694cb7e3-1a32-4c47-b36d-200946694a76.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(192 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_12",
                    "type": "movebyoffset",
                    "containment": false,
                    "position": "relative",
                    "top": 2,
                    "left": 2
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 04016cdb-74e6-43ef-8349-e922820a0d74.png')",
                        "border-top-width": "3px",
                        "border-top-style": "none",
                        "border-top-color": "#F77D00",
                        "border-right-width": "3px",
                        "border-right-style": "none",
                        "border-right-color": "#F77D00",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#F77D00",
                        "border-left-width": "3px",
                        "border-left-style": "none",
                        "border-left-color": "#F77D00",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "overflow": "hidden"
                      },
                      "expressions": {
                        "width": "Math.max(192 + 2 + 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 2 + 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 04016cdb-74e6-43ef-8349-e922820a0d74.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(192 + 2 + 2 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 2 + 2 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_12",
                    "type": "movebyoffset",
                    "containment": false,
                    "position": "relative",
                    "top": -2,
                    "left": -2
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "url('./images/[Generated] 5eedd7f0-7c9f-4ed6-88d2-e03867b68004.png')",
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#A4A4A4",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#A4A4A4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#A4A4A4",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#A4A4A4",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "overflow": "hidden"
                      },
                      "expressions": {
                        "width": "Math.max(192 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-3ef8c29f-9f8d-499c-a6e6-d5eca38fa408 #s-Panel_30": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 5eedd7f0-7c9f-4ed6-88d2-e03867b68004.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(192 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(41 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_12",
                    "type": "movebyoffset",
                    "containment": false,
                    "position": "relative",
                    "top": 2,
                    "left": 2
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_9"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_9"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_8"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_110")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_68"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_68"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_70")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_68"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_68"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_111")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_69"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_69"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_69"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_69"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_69")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_67"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_67"
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_67"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_67"
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-d72049d7-8829-48ee-980f-bdb16c6352e5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"100" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "200"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"50" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "100"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"100" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "50"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "zoom"
                },"200" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "zoom",
                    "value": "100"
                  }
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-d72049d7-8829-48ee-980f-bdb16c6352e5 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-d72049d7-8829-48ee-980f-bdb16c6352e5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": "#s-Image_map_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-56d852e0-ac8f-484f-b4a3-0a933b3fd27f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8024ba50-daf5-4ac8-891a-2ba1a20c4f4a",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56d852e0-ac8f-484f-b4a3-0a933b3fd27f",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/85a08665-0876-4ac3-872d-6517629e3a16",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-56d852e0-ac8f-484f-b4a3-0a933b3fd27f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-56d852e0-ac8f-484f-b4a3-0a933b3fd27f")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-56d852e0-ac8f-484f-b4a3-0a933b3fd27f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-56d852e0-ac8f-484f-b4a3-0a933b3fd27f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-e89bcb88-38fc-4551-9bf2-75f6519d63f3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56d852e0-ac8f-484f-b4a3-0a933b3fd27f",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/85a08665-0876-4ac3-872d-6517629e3a16",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-e89bcb88-38fc-4551-9bf2-75f6519d63f3 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e89bcb88-38fc-4551-9bf2-75f6519d63f3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-e89bcb88-38fc-4551-9bf2-75f6519d63f3 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-e89bcb88-38fc-4551-9bf2-75f6519d63f3 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-696050f7-1149-4c79-a970-b37b36e56dd4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-696050f7-1149-4c79-a970-b37b36e56dd4 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-696050f7-1149-4c79-a970-b37b36e56dd4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-696050f7-1149-4c79-a970-b37b36e56dd4 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-696050f7-1149-4c79-a970-b37b36e56dd4 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-ee2aa91d-0ac2-4391-8b0f-7036045869fa .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e90f5efa-1777-4a75-947e-c3350cc9e196",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56d852e0-ac8f-484f-b4a3-0a933b3fd27f",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/85a08665-0876-4ac3-872d-6517629e3a16",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-ee2aa91d-0ac2-4391-8b0f-7036045869fa .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ee2aa91d-0ac2-4391-8b0f-7036045869fa")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-ee2aa91d-0ac2-4391-8b0f-7036045869fa .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ee2aa91d-0ac2-4391-8b0f-7036045869fa .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_map_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_map_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-74167efa-06f0-41b4-82d1-f0deb9956073 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Master_item_1",
                    "effect": {
                      "type": "slide",
                      "duration": 200,
                      "direction": "down"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0095bd6-4878-4cf4-8e80-e93a06bd5a0d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-74167efa-06f0-41b4-82d1-f0deb9956073 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-74167efa-06f0-41b4-82d1-f0deb9956073")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-74167efa-06f0-41b4-82d1-f0deb9956073 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Label_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-74167efa-06f0-41b4-82d1-f0deb9956073 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Image_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", "#m-9ebd65d6-f6c0-4ddc-9a8a-9f670495cbe6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6cf3b0ca-a4af-4820-b1db-6dc568e1cd8c"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a56d1bc7-4fc0-4aac-94d9-1de0810550d8",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });