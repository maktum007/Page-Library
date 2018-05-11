package runner;




import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features", glue={"stepDefinition"}, 
format={"pretty","html:target/html"},monochrome=true)
public class TestRunner {

	
	

}
