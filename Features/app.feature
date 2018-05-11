Feature: Login
Scenario: validate the Tittle of homepage
Given     launch the site
When      check the tittle with "KEXIM BANK" data
Then      Homepage should be displayed 
And       close site

Scenario Outline: validate the userid field
Given     launch the site
When     enter the userid with  "<x>"  data
Then     check the userid with  "<y>"  criteria
And      close site

Examples: 
         |        x       |         y       |
         |  Admin         |      valid      |
         |  Adm           |     invalid     |
         |                |     invalid     |

 


