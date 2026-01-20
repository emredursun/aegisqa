/**
 * AegisQA Shared Module
 * 
 * Re-exports all shared utilities, types, and configuration.
 */

// Configuration
export { config, loadConfig } from './config/index.js';
export type { 
  Config, 
  Environment, 
  ParaBankConfig, 
  DatabaseConfig, 
  AIConfig, 
  TestConfig 
} from './config/index.js';

// Constants
export { 
  TEST_USERS, 
  API_ENDPOINTS, 
  UI_ROUTES, 
  ACCOUNT_TYPES, 
  TRANSACTION_TYPES,
  HTTP_STATUS,
  TIMEOUTS 
} from './constants/index.js';

// Types
export type {
  Customer,
  Address,
  Account,
  AccountType,
  Transaction,
  TransactionType,
  LoanRequest,
  LoanResponse,
  TransferRequest,
  ApiResponse,
  ApiError,
  TestUser,
  TestMetadata,
  TestStatus,
  GeneratedScenario,
  TestAnalysis,
  CoverageInfo,
} from './types/index.js';
