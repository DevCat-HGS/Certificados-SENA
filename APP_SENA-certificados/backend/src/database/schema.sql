CREATE DATABASE IF NOT EXISTS sena_practices;
USE sena_practices;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  document_type ENUM('CC', 'TI', 'CE') NOT NULL,
  document_number VARCHAR(20) NOT NULL,
  name VARCHAR(100) NOT NULL,
  role ENUM('aprendiz', 'instructor', 'coordinador', 'admin') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_document (document_type, document_number)
);

CREATE TABLE training_programs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(20) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE competencies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  program_id INT,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (program_id) REFERENCES training_programs(id)
);

CREATE TABLE student_competencies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  competency_id INT,
  instructor_id INT,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  approved_at TIMESTAMP NULL,
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (competency_id) REFERENCES competencies(id),
  FOREIGN KEY (instructor_id) REFERENCES users(id)
);

CREATE TABLE certificates (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  program_id INT,
  status ENUM('pending', 'generated', 'signed') DEFAULT 'pending',
  pdf_url VARCHAR(255),
  generated_at TIMESTAMP NULL,
  signed_at TIMESTAMP NULL,
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (program_id) REFERENCES training_programs(id)
);