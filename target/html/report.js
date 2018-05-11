$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("app.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4038696061,
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
  "duration": 2521364549,
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
  "duration": 13235869,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.Homepage_should_be_displayed()"
});
formatter.result({
  "duration": 1482001379,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 2326087769,
  "status": "passed"
});
formatter.after({
  "duration": 283265,
  "status": "passed"
});
formatter.before({
  "duration": 3132292587,
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
  "duration": 2565143371,
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
  "duration": 107641548,
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
  "duration": 50100148,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 118773454,
  "status": "passed"
});
formatter.after({
  "duration": 34074,
  "status": "passed"
});
formatter.before({
  "duration": 3082635400,
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
  "duration": 2568012969,
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
  "duration": 109277506,
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
  "duration": 44331805,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 131722773,
  "status": "passed"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.before({
  "duration": 3186365836,
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
  "duration": 2465827764,
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
  "duration": 82732695,
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
  "duration": 45632771,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.close_site()"
});
formatter.result({
  "duration": 242724501,
  "status": "passed"
});
formatter.after({
  "duration": 30379,
  "status": "passed"
});
});