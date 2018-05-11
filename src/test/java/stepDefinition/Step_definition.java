package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_definition {
	
	public WebDriver driver;
	
	public Step_definition() 
	{
		driver=Hooks.driver;
	}
	
	@Given("^launch the site$")
	public void launch_the_site() throws Throwable 
	{
	    
		driver.get("http://srssprojects.in/home.aspx");
		
	}

	@When("^check the tittle with \"([^\"]*)\" data$")
	public void check_the_tittle_with_data(String exp) throws Throwable {
	   
		
		String act=driver.getTitle();
		
		if(act.equals(exp))
		{
			System.out.println("Test is passed");
		}
		else
		{
			System.out.println("Test is failed");
		}
	}

	@Then("^Homepage should be displayed$")
	public void Homepage_should_be_displayed() throws Throwable {
	  
		boolean b=driver.findElement(By.tagName("tbody")).getText().contains("KEXIM Bank");
		System.out.println(b);
	}

	@Then("^close site$")
	public void close_site() throws Throwable {
		
		driver.close();
	    
	}

	@When("^enter the userid with  \"([^\"]*)\"  data$")
	public void enter_the_userid_with_data(String x) throws Throwable {
		
	    driver.findElement(By.id("txtuId")).sendKeys(x);
	}

	@Then("^check the userid with  \"([^\"]*)\"  criteria$")
	public void check_the_userid_with_criteria(String y) throws Throwable {
	   
		if(y.equals("valid") && driver.findElement(By.id("txtPword")).isDisplayed())
		{
			System.out.println("Test is passed for valid data");
		}
		else if(y.equals("invalid") && driver.findElement(By.id("txtPword")).isDisplayed())
		{
			System.out.println("Test is passed for invalid data");
		}
		else
		{
			System.out.println("Test is failed");
		}
		
	}



}
