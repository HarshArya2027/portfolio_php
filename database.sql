-- Database: harsharya_portfolio

CREATE DATABASE IF NOT EXISTS harsharya_portfolio;
USE harsharya_portfolio;

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sample data (optional)
INSERT INTO contacts (name, email, subject, message) VALUES
('Test User', 'test@example.com', 'Test Subject', 'This is a test message');