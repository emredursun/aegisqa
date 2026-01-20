/**
 * AegisQA Shared Constants
 * 
 * Centralized constants used across all modules.
 */

/**
 * ParaBank test user credentials
 */
export const TEST_USERS = {
  JOHN: {
    username: 'john',
    password: 'demo',
    firstName: 'John',
    lastName: 'Smith',
  },
  ADMIN: {
    username: 'admin',
    password: 'admin',
  },
} as const;

/**
 * ParaBank API endpoints
 */
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/login/{username}/{password}',
  
  // Customers
  CUSTOMERS: '/customers',
  CUSTOMER_BY_ID: '/customers/{customerId}',
  CUSTOMER_ACCOUNTS: '/customers/{customerId}/accounts',
  
  // Accounts
  ACCOUNTS: '/accounts',
  ACCOUNT_BY_ID: '/accounts/{accountId}',
  ACCOUNT_TRANSACTIONS: '/accounts/{accountId}/transactions',
  CREATE_ACCOUNT: '/createAccount',
  
  // Transactions
  TRANSACTIONS: '/transactions',
  TRANSACTION_BY_ID: '/transactions/{transactionId}',
  TRANSFER: '/transfer',
  
  // Loans
  REQUEST_LOAN: '/requestLoan',
} as const;

/**
 * ParaBank UI routes
 */
export const UI_ROUTES = {
  HOME: '/',
  LOGIN: '/index.htm',
  REGISTER: '/register.htm',
  ACCOUNTS_OVERVIEW: '/overview.htm',
  OPEN_ACCOUNT: '/openaccount.htm',
  TRANSFER_FUNDS: '/transfer.htm',
  BILL_PAY: '/billpay.htm',
  FIND_TRANSACTIONS: '/findtrans.htm',
  UPDATE_PROFILE: '/updateprofile.htm',
  REQUEST_LOAN: '/requestloan.htm',
  LOGOUT: '/logout.htm',
} as const;

/**
 * Account types in ParaBank
 */
export const ACCOUNT_TYPES = {
  CHECKING: 'CHECKING',
  SAVINGS: 'SAVINGS',
} as const;

/**
 * Transaction types
 */
export const TRANSACTION_TYPES = {
  CREDIT: 'Credit',
  DEBIT: 'Debit',
} as const;

/**
 * HTTP status codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

/**
 * Test timeouts (in milliseconds)
 */
export const TIMEOUTS = {
  SHORT: 5000,
  MEDIUM: 15000,
  LONG: 30000,
  VERY_LONG: 60000,
} as const;
