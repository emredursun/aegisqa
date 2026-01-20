package com.aegisqa.clients;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

/**
 * ParaBank API Client
 * 
 * Handles all ParaBank REST API interactions.
 */
public class ParaBankApiClient extends BaseApiClient {
    
    private static ParaBankApiClient instance;
    
    private ParaBankApiClient() {
        initDefaults();
    }
    
    public static synchronized ParaBankApiClient getInstance() {
        if (instance == null) {
            instance = new ParaBankApiClient();
        }
        return instance;
    }
    
    // ==================== Authentication ====================
    
    /**
     * Login to ParaBank
     */
    public Response login(String username, String password) {
        return given()
                .spec(getXmlSpec())
                .pathParam("username", username)
                .pathParam("password", password)
                .when()
                .get("/bank/login/{username}/{password}");
    }
    
    // ==================== Customers ====================
    
    /**
     * Get customer by ID
     */
    public Response getCustomer(int customerId) {
        return given()
                .spec(getXmlSpec())
                .pathParam("customerId", customerId)
                .when()
                .get("/bank/customers/{customerId}");
    }
    
    /**
     * Get customer accounts
     */
    public Response getCustomerAccounts(int customerId) {
        return given()
                .spec(getXmlSpec())
                .pathParam("customerId", customerId)
                .when()
                .get("/bank/customers/{customerId}/accounts");
    }
    
    // ==================== Accounts ====================
    
    /**
     * Get account by ID
     */
    public Response getAccount(int accountId) {
        return given()
                .spec(getXmlSpec())
                .pathParam("accountId", accountId)
                .when()
                .get("/bank/accounts/{accountId}");
    }
    
    /**
     * Create new account
     */
    public Response createAccount(int customerId, int newAccountType, int fromAccountId) {
        return given()
                .spec(getXmlSpec())
                .queryParam("customerId", customerId)
                .queryParam("newAccountType", newAccountType)
                .queryParam("fromAccountId", fromAccountId)
                .when()
                .post("/bank/createAccount");
    }
    
    /**
     * Get account transactions
     */
    public Response getAccountTransactions(int accountId) {
        return given()
                .spec(getXmlSpec())
                .pathParam("accountId", accountId)
                .when()
                .get("/bank/accounts/{accountId}/transactions");
    }
    
    // ==================== Transfers ====================
    
    /**
     * Transfer funds between accounts
     */
    public Response transfer(int fromAccountId, int toAccountId, double amount) {
        return given()
                .spec(getXmlSpec())
                .queryParam("fromAccountId", fromAccountId)
                .queryParam("toAccountId", toAccountId)
                .queryParam("amount", amount)
                .when()
                .post("/bank/transfer");
    }
    
    // ==================== Loans ====================
    
    /**
     * Request a loan
     */
    public Response requestLoan(int customerId, double amount, double downPayment, int fromAccountId) {
        return given()
                .spec(getXmlSpec())
                .queryParam("customerId", customerId)
                .queryParam("amount", amount)
                .queryParam("downPayment", downPayment)
                .queryParam("fromAccountId", fromAccountId)
                .when()
                .post("/bank/requestLoan");
    }
    
    // ==================== Transactions ====================
    
    /**
     * Get transaction by ID
     */
    public Response getTransaction(int transactionId) {
        return given()
                .spec(getXmlSpec())
                .pathParam("transactionId", transactionId)
                .when()
                .get("/bank/transactions/{transactionId}");
    }
}
