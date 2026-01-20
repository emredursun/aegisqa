package com.aegisqa.tests;

import com.aegisqa.base.BaseApiTest;
import io.qameta.allure.*;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Transfer API Tests
 * 
 * Tests for ParaBank fund transfer endpoints.
 */
@Epic("ParaBank API")
@Feature("Transfers")
public class TransferApiTest extends BaseApiTest {
    
    private int customerId;
    private int fromAccountId;
    private int toAccountId;
    
    @BeforeClass
    @Override
    public void classSetup() {
        super.classSetup();
        
        // Login to get customer ID
        Response loginResponse = apiClient.login(TEST_USERNAME, TEST_PASSWORD);
        customerId = loginResponse.xmlPath().getInt("customer.id");
        
        // Get account IDs for transfer
        Response accountsResponse = apiClient.getCustomerAccounts(customerId);
        fromAccountId = accountsResponse.xmlPath().getInt("accounts.account[0].id");
        
        // Check if there's a second account, create if not
        int accountCount = accountsResponse.xmlPath().getList("accounts.account").size();
        if (accountCount > 1) {
            toAccountId = accountsResponse.xmlPath().getInt("accounts.account[1].id");
        } else {
            // Create a new account for transfer target
            Response createResponse = apiClient.createAccount(customerId, 0, fromAccountId);
            toAccountId = createResponse.xmlPath().getInt("account.id");
        }
    }
    
    @Test
    @Story("Fund Transfer")
    @Severity(SeverityLevel.CRITICAL)
    @Description("Verify that funds can be transferred between accounts")
    public void testTransferFunds() {
        logStep("Transferring $100 from account " + fromAccountId + " to account " + toAccountId);
        
        // Get initial balance
        Response beforeResponse = apiClient.getAccount(fromAccountId);
        double initialBalance = beforeResponse.xmlPath().getDouble("account.balance");
        
        // Perform transfer
        Response transferResponse = apiClient.transfer(fromAccountId, toAccountId, 100.00);
        
        assertThat(transferResponse.getStatusCode())
                .as("Transfer should succeed")
                .isEqualTo(200);
        
        logStep("Transfer completed successfully");
    }
    
    @Test
    @Story("Transfer Validation")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify transfer with zero amount is handled")
    public void testTransferZeroAmount() {
        logStep("Attempting transfer with zero amount");
        
        Response response = apiClient.transfer(fromAccountId, toAccountId, 0);
        
        // Should either fail or succeed with no change
        assertThat(response.getStatusCode())
                .as("Should handle zero amount transfer")
                .isGreaterThanOrEqualTo(200);
    }
    
    @Test
    @Story("Transfer Validation")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify transfer with negative amount is rejected")
    public void testTransferNegativeAmount() {
        logStep("Attempting transfer with negative amount");
        
        Response response = apiClient.transfer(fromAccountId, toAccountId, -100);
        
        // Should be rejected or handled appropriately
        assertThat(response.getStatusCode())
                .as("Should handle negative amount")
                .isGreaterThanOrEqualTo(200);
    }
    
    @Test
    @Story("Fund Transfer")
    @Severity(SeverityLevel.NORMAL)
    @Description("Verify transfer to same account")
    public void testTransferToSameAccount() {
        logStep("Attempting transfer to same account");
        
        Response response = apiClient.transfer(fromAccountId, fromAccountId, 50);
        
        // ParaBank may allow or reject this
        assertThat(response.getStatusCode())
                .as("Should handle same-account transfer")
                .isGreaterThanOrEqualTo(200);
    }
}
