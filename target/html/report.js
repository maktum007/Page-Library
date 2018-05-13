$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("app.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4326844373,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "validate the Tittle of homepage",
  "description": "",
  "id": "login;validate-the-tittle-of-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "check the tittle with \"KEXIM BANK\" data",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Homepage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.launch_the_site()"
});
formatter.result({
  "duration": 35277939686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KEXIM BANK",
      "offset": 23
    }
  ],
  "location": "Step_definition.check_the_tittle_with_data(String)"
});
formatter.result({
  "duration": 13489986,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.Homepage_should_be_displayed()"
});
formatter.result({
  "duration": 1635544183,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 146944371,
  "status": "passed"
});
formatter.after({
  "duration": 132191,
  "status": "passed"
});
formatter.before({
  "duration": 3188726379,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validate the userid field",
  "description": "",
  "id": "login;validate-the-userid-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the userid with  \"Admin\"  data",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "check the userid with  \"valid\"  criteria",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.launch_the_site()"
});
formatter.result({
  "duration": 14244445029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    }
  ],
  "location": "Step_definition.enter_the_userid_with_data(String)"
});
formatter.result({
  "duration": 114281034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 24
    }
  ],
  "location": "Step_definition.check_the_userid_with_criteria(String)"
});
formatter.result({
  "duration": 41720429,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 2086051413,
  "status": "passed"
});
formatter.after({
  "duration": 57885,
  "status": "passed"
});
formatter.before({
  "duration": 3373087191,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validate the userid field",
  "description": "",
  "id": "login;validate-the-userid-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the userid with  \"Adm\"  data",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "check the userid with  \"invalid\"  criteria",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.launch_the_site()"
});
formatter.result({
  "duration": 10337833005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Adm",
      "offset": 24
    }
  ],
  "location": "Step_definition.enter_the_userid_with_data(String)"
});
formatter.result({
  "duration": 94616691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 24
    }
  ],
  "location": "Step_definition.check_the_userid_with_criteria(String)"
});
formatter.result({
  "duration": 56967069,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 200871060,
  "status": "passed"
});
formatter.after({
  "duration": 27506,
  "status": "passed"
});
formatter.before({
  "duration": 3203423731,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validate the userid field",
  "description": "",
  "id": "login;validate-the-userid-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "launch the site",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "enter the userid with  \"\"  data",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "check the userid with  \"invalid\"  criteria",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.launch_the_site()"
});
formatter.result({
  "duration": 17550962054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Step_definition.enter_the_userid_with_data(String)"
});
formatter.result({
  "duration": 84614970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 24
    }
  ],
  "location": "Step_definition.check_the_userid_with_criteria(String)"
});
formatter.result({
  "duration": 50935986,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 201670361,
  "status": "passed"
});
formatter.after({
  "duration": 75127,
  "status": "passed"
});
});