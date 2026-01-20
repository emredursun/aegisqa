package com.aegisqa.base;

import com.aegisqa.clients.ParaBankApiClient;
import com.aegisqa.config.ConfigManager;
import io.qameta.allure.Step;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;

/**
 * Base Test Class
 * 
 * Provides common setup and utilities for all API tests.
 */
public abstract class BaseApiTest {
    
    protected ParaBankApiClient apiClient;
    protected ConfigManager config;
    
    // Test user credentials
    protected static final String TEST_USERNAME = "john";
    protected static final String TEST_PASSWORD = "demo";
    
    @BeforeSuite
    public void suiteSetup() {
        // Initialize configuration and logging
        config = ConfigManager.getInstance();
    }
    
    @BeforeClass
    public void classSetup() {
        // Initialize API client
        apiClient = ParaBankApiClient.getInstance();
    }
    
    /**
     * Log test step for Allure
     */
    @Step("{message}")
    protected void logStep(String message) {
        System.out.println("[STEP] " + message);
    }
    
    /**
     * Format currency value
     */
    protected String formatCurrency(double amount) {
        return String.format("$%.2f", amount);
    }
}
