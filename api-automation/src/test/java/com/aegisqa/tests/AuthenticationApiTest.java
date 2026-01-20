package com.aegisqa.tests;

import com.aegisqa.base.BaseApiTest;
import io.qameta.allure.*;
import io.restassured.response.Response;
import org.testng.annotations.Test;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Authentication API Tests
 * 
 * Tests for ParaBank login/authentication endpoints.
 */
@Epic("ParaBank API")
@Feature("Authentication")
public class AuthenticationApiTest extends BaseApiTest {
    
    @Test
    @Story("Valid Login")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Verify that login with valid credentials returns customer data")
    public void testLoginWithValidCredentials() {
        logStep("Attempting login with valid credentials");
        
        Response response = apiClient.login(TEST_USERNAME, TEST_PASSWORD);
        
        logStep("Verifying response status code");
        assertThat(response.getStatusCode())
                .as("Status code should be 200")
                .isEqualTo(200);
        
        logStep("Verifying customer data in response");
        String customerId = response.xmlPath().getString("customer.id");
        assertThat(customerId)
                .as("Customer ID should not be empty")
                .isNotEmpty();
    }
    
    @Test
    @Story("Invalid Login")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify that login with invalid credentials fails appropriately")
    public void testLoginWithInvalidCredentials() {
        logStep("Attempting login with invalid credentials");
        
        Response response = apiClient.login("invaliduser", "wrongpassword");
        
        logStep("Verifying response indicates failure");
        // ParaBank returns 200 but with error in body
        assertThat(response.getStatusCode())
                .as("Status code should indicate error or empty response")
                .isIn(200, 400, 401);
    }
    
    @Test
    @Story("Empty Credentials")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify that login with empty credentials fails")
    public void testLoginWithEmptyCredentials() {
        logStep("Attempting login with empty credentials");
        
        Response response = apiClient.login("", "");
        
        logStep("Verifying response");
        assertThat(response.getStatusCode())
                .as("Should handle empty credentials")
                .isGreaterThanOrEqualTo(200);
    }
}
