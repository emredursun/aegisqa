package com.aegisqa.config;

import io.github.cdimascio.dotenv.Dotenv;

/**
 * Configuration Manager
 * 
 * Centralized configuration management for API tests.
 * Loads values from environment variables and .env file.
 */
public class ConfigManager {
    
    private static ConfigManager instance;
    private final Dotenv dotenv;
    
    private ConfigManager() {
        dotenv = Dotenv.configure()
                .directory("../")
                .ignoreIfMissing()
                .load();
    }
    
    public static synchronized ConfigManager getInstance() {
        if (instance == null) {
            instance = new ConfigManager();
        }
        return instance;
    }
    
    /**
     * Get environment variable with fallback
     */
    public String get(String key, String defaultValue) {
        String value = dotenv.get(key);
        return value != null ? value : defaultValue;
    }
    
    /**
     * Get required environment variable
     */
    public String get(String key) {
        String value = dotenv.get(key);
        if (value == null) {
            throw new IllegalStateException("Missing required config: " + key);
        }
        return value;
    }
    
    // Convenience methods
    
    public String getParaBankApiUrl() {
        return get("PARABANK_API_URL", "http://localhost:8080/parabank/services");
    }
    
    public String getParaBankBaseUrl() {
        return get("PARABANK_URL", "http://localhost:8080/parabank");
    }
    
    public String getDbHost() {
        return get("DB_HOST", "localhost");
    }
    
    public int getDbPort() {
        return Integer.parseInt(get("DB_PORT", "5432"));
    }
    
    public String getDbName() {
        return get("DB_NAME", "aegisqa_test");
    }
    
    public String getDbUser() {
        return get("DB_USER", "aegisqa");
    }
    
    public String getDbPassword() {
        return get("DB_PASSWORD", "aegisqa_pass");
    }
    
    public String getDbConnectionString() {
        return String.format("jdbc:postgresql://%s:%d/%s",
                getDbHost(), getDbPort(), getDbName());
    }
}
