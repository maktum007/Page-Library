package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	public static WebDriver driver;

	@Before
	public static void callbrowser()
	{
		
		

		System.setProperty("webdriver.chrome.driver","C:\\Users\\Maktum\\eclipse-workspace\\com.ccucumber.com\\chromeDrive\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("disable-infobars");
		driver=new ChromeDriver(options);
		
		driver.manage().deleteAllCookies();
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@After
	public static void screenshot(Scenario s)
	{
		
		
		if(s.isFailed())
		{
			TakesScreenshot screen=(TakesScreenshot)driver;
			
			byte[] b=screen.getScreenshotAs(OutputType.BYTES);
			
			s.embed(b, "image/png");
		}
	}

}
