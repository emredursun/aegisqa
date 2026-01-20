/**
 * AegisQA Configuration Module
 * 
 * Centralized configuration management with environment-based loading
 * and type-safe access to all configuration values.
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env file from project root
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

/**
 * Environment type
 */
export type Environment = 'development' | 'staging' | 'production';

/**
 * ParaBank configuration
 */
export interface ParaBankConfig {
  baseUrl: string;
  apiUrl: string;
}

/**
 * Database configuration
 */
export interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
  user: string;
  password: string;
  connectionString: string;
}

/**
 * AI Provider configuration
 */
export interface AIConfig {
  geminiApiKey: string;
  geminiModel: string;
}

/**
 * Test configuration
 */
export interface TestConfig {
  timeout: number;
  headless: boolean;
  slowMo: number;
}

/**
 * Complete configuration interface
 */
export interface Config {
  env: Environment;
  parabank: ParaBankConfig;
  database: DatabaseConfig;
  ai: AIConfig;
  test: TestConfig;
  allure: {
    resultsDir: string;
    serverUrl: string;
  };
}

/**
 * Get environment variable with optional default
 */
function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

/**
 * Get numeric environment variable
 */
function getEnvNumber(key: string, defaultValue: number): number {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Invalid numeric value for ${key}: ${value}`);
  }
  return parsed;
}

/**
 * Get boolean environment variable
 */
function getEnvBoolean(key: string, defaultValue: boolean): boolean {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  return value.toLowerCase() === 'true';
}

/**
 * Build and export configuration
 */
export function loadConfig(): Config {
  const dbHost = getEnv('DB_HOST', 'localhost');
  const dbPort = getEnvNumber('DB_PORT', 5432);
  const dbName = getEnv('DB_NAME', 'aegisqa_test');
  const dbUser = getEnv('DB_USER', 'aegisqa');
  const dbPassword = getEnv('DB_PASSWORD', 'aegisqa_pass');

  return {
    env: getEnv('NODE_ENV', 'development') as Environment,
    
    parabank: {
      baseUrl: getEnv('PARABANK_URL', 'http://localhost:8080/parabank'),
      apiUrl: getEnv('PARABANK_API_URL', 'http://localhost:8080/parabank/services'),
    },

    database: {
      host: dbHost,
      port: dbPort,
      name: dbName,
      user: dbUser,
      password: dbPassword,
      connectionString: `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
    },

    ai: {
      geminiApiKey: getEnv('GEMINI_API_KEY', ''),
      geminiModel: getEnv('GEMINI_MODEL', 'gemini-2.5-flash'),
    },

    test: {
      timeout: getEnvNumber('TEST_TIMEOUT', 30000),
      headless: getEnvBoolean('HEADLESS', true),
      slowMo: getEnvNumber('SLOW_MO', 0),
    },

    allure: {
      resultsDir: getEnv('ALLURE_RESULTS_DIR', './reports/allure-results'),
      serverUrl: getEnv('ALLURE_SERVER_URL', 'http://localhost:5050'),
    },
  };
}

// Export singleton config instance
export const config = loadConfig();

// Re-export for convenience
export default config;
