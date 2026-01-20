-- ============================================
-- AegisQA Database Initialization Script
-- ============================================
-- This script runs when PostgreSQL container starts

-- Create test schema
CREATE SCHEMA IF NOT EXISTS aegisqa;

-- Test data tracking table
CREATE TABLE IF NOT EXISTS aegisqa.test_runs (
    id SERIAL PRIMARY KEY,
    run_id VARCHAR(36) NOT NULL,
    test_name VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    duration_ms INTEGER,
    error_message TEXT
);

-- Test data snapshots for validation
CREATE TABLE IF NOT EXISTS aegisqa.data_snapshots (
    id SERIAL PRIMARY KEY,
    snapshot_id VARCHAR(36) NOT NULL,
    table_name VARCHAR(100) NOT NULL,
    record_id VARCHAR(100) NOT NULL,
    data JSONB NOT NULL,
    captured_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_test_runs_run_id ON aegisqa.test_runs(run_id);
CREATE INDEX IF NOT EXISTS idx_snapshots_snapshot_id ON aegisqa.data_snapshots(snapshot_id);

-- Grant permissions
GRANT ALL PRIVILEGES ON SCHEMA aegisqa TO aegisqa;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA aegisqa TO aegisqa;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA aegisqa TO aegisqa;
