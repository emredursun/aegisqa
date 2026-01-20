package com.aegisqa.clients;

import com.aegisqa.config.ConfigManager;
import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

/**
 * Base API Client
 * 
 * Provides common configuration and utilities for all API clients.
 */
public abstract class BaseApiClient {
    
    protected static final ConfigManager config = ConfigManager.getInstance();
    
    /**
     * Get base request specification with common configuration
     */
    protected RequestSpecification getBaseSpec() {
        return new RequestSpecBuilder()
                .setBaseUri(config.getParaBankApiUrl())
                .setContentType(ContentType.JSON)
                .setAccept(ContentType.JSON)
                .addFilter(new AllureRestAssured())
                .log(LogDetail.ALL)
                .build();
    }
    
    /**
     * Get request specification for XML responses (ParaBank default)
     */
    protected RequestSpecification getXmlSpec() {
        return new RequestSpecBuilder()
                .setBaseUri(config.getParaBankApiUrl())
                .setContentType(ContentType.XML)
                .setAccept(ContentType.XML)
                .addFilter(new AllureRestAssured())
                .log(LogDetail.ALL)
                .build();
    }
    
    /**
     * Initialize REST Assured defaults
     */
    public static void initDefaults() {
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
    }
}
