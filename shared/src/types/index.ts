/**
 * AegisQA Shared Types
 * 
 * Common TypeScript interfaces and types used across all modules.
 */

// ============================================
// ParaBank Domain Types
// ============================================

/**
 * Customer entity
 */
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  phoneNumber: string;
  ssn: string;
}

/**
 * Address entity
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

/**
 * Account entity
 */
export interface Account {
  id: number;
  customerId: number;
  type: AccountType;
  balance: number;
}

/**
 * Account type enum
 */
export type AccountType = 'CHECKING' | 'SAVINGS';

/**
 * Transaction entity
 */
export interface Transaction {
  id: number;
  accountId: number;
  type: TransactionType;
  date: string;
  amount: number;
  description: string;
}

/**
 * Transaction type enum
 */
export type TransactionType = 'Credit' | 'Debit';

/**
 * Loan request
 */
export interface LoanRequest {
  customerId: number;
  amount: number;
  downPayment: number;
  fromAccountId: number;
}

/**
 * Loan response
 */
export interface LoanResponse {
  approved: boolean;
  responseDate: string;
  message?: string;
  accountId?: number;
}

/**
 * Transfer request
 */
export interface TransferRequest {
  fromAccountId: number;
  toAccountId: number;
  amount: number;
}

// ============================================
// API Response Types
// ============================================

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

/**
 * API error response
 */
export interface ApiError {
  error: string;
  message: string;
  status: number;
}

// ============================================
// Test Types
// ============================================

/**
 * Test user credentials
 */
export interface TestUser {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

/**
 * Test result metadata
 */
export interface TestMetadata {
  testName: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  status: TestStatus;
  error?: string;
}

/**
 * Test status enum
 */
export type TestStatus = 'passed' | 'failed' | 'skipped' | 'pending';

// ============================================
// AI Types
// ============================================

/**
 * AI-generated test scenario
 */
export interface GeneratedScenario {
  name: string;
  description: string;
  steps: string[];
  priority: 'high' | 'medium' | 'low';
  category: string;
}

/**
 * Test analysis result
 */
export interface TestAnalysis {
  totalTests: number;
  coverage: CoverageInfo;
  suggestions: string[];
  gaps: string[];
}

/**
 * Coverage information
 */
export interface CoverageInfo {
  ui: number;
  api: number;
  database: number;
  overall: number;
}
