package runner;




import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features", glue={"stepDefinition"}, 
format={"pretty","pretty:target/plain.txt",
		"html:target/html",
		"json:target/cucumber.json",
		"junit:target/cucumber.xml"},monochrome=true)
public class TestRunner {

	
	

}
