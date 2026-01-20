package com.aegisqa.tests;

import com.aegisqa.base.BaseApiTest;
import io.qameta.allure.*;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Account API Tests
 * 
 * Tests for ParaBank account management endpoints.
 */
@Epic("ParaBank API")
@Feature("Accounts")
public class AccountApiTest extends BaseApiTest {
    
    private int customerId;
    private int accountId;
    
    @BeforeClass
    @Override
    public void classSetup() {
        super.classSetup();
        
        // Login to get customer ID
        Response loginResponse = apiClient.login(TEST_USERNAME, TEST_PASSWORD);
        customerId = loginResponse.xmlPath().getInt("customer.id");
        
        // Get first account ID
        Response accountsResponse = apiClient.getCustomerAccounts(customerId);
        accountId = accountsResponse.xmlPath().getInt("accounts.account[0].id");
    }
    
    @Test
    @Story("Get Customer")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify that customer details can be retrieved")
    public void testGetCustomer() {
        logStep("Getting customer details for ID: " + customerId);
        
        Response response = apiClient.getCustomer(customerId);
        
        assertThat(response.getStatusCode()).isEqualTo(200);
        assertThat(response.xmlPath().getString("customer.firstName")).isNotEmpty();
        assertThat(response.xmlPath().getString("customer.lastName")).isNotEmpty();
    }
    
    @Test
    @Story("Get Customer Accounts")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Verify that customer accounts list can be retrieved")
    public void testGetCustomerAccounts() {
        logStep("Getting accounts for customer ID: " + customerId);
        
        Response response = apiClient.getCustomerAccounts(customerId);
        
        assertThat(response.getStatusCode()).isEqualTo(200);
        
        // Verify at least one account exists
        int accountCount = response.xmlPath().getList("accounts.account").size();
        assertThat(accountCount).isGreaterThan(0);
    }
    
    @Test
    @Story("Get Account Details")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify that account details can be retrieved by ID")
    public void testGetAccountById() {
        logStep("Getting account details for ID: " + accountId);
        
        Response response = apiClient.getAccount(accountId);
        
        assertThat(response.getStatusCode()).isEqualTo(200);
        assertThat(response.xmlPath().getInt("account.id")).isEqualTo(accountId);
        assertThat(response.xmlPath().getString("account.type")).isNotEmpty();
    }
    
    @Test
    @Story("Get Account Transactions")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify that account transactions can be retrieved")
    public void testGetAccountTransactions() {
        logStep("Getting transactions for account ID: " + accountId);
        
        Response response = apiClient.getAccountTransactions(accountId);
        
        assertThat(response.getStatusCode()).isEqualTo(200);
    }
    
    @Test
    @Story("Create Account")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Verify that a new account can be created")
    public void testCreateAccount() {
        logStep("Creating new savings account");
        
        // Account type: 0 = CHECKING, 1 = SAVINGS
        Response response = apiClient.createAccount(customerId, 1, accountId);
        
        assertThat(response.getStatusCode()).isEqualTo(200);
        
        int newAccountId = response.xmlPath().getInt("account.id");
        assertThat(newAccountId).isGreaterThan(0);
        
        logStep("Created new account with ID: " + newAccountId);
    }
}
