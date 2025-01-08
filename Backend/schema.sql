CREATE DATABASE school_db;
USE school_db;

drop table users;
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  mail VARCHAR(255) UNIQUE NOT NULL,
  mdp VARCHAR(255) NOT NULL,
  role ENUM('admin', 'student', 'teacher') NOT NULL
);

drop table matieres;
CREATE TABLE matieres (
  matiere_id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL UNIQUE
);

drop table specialites;
CREATE TABLE specialites (
  specialite_id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL UNIQUE
);

drop table notes;
CREATE TABLE notes (
  id_note INT PRIMARY KEY AUTO_INCREMENT,
  id_student INT NOT NULL,
  id_teacher INT NOT NULL,
  id_matiere INT NOT NULL,
  valeur FLOAT NOT NULL,
  FOREIGN KEY (id_student) REFERENCES users(user_id),
  FOREIGN KEY (id_teacher) REFERENCES users(user_id),
  FOREIGN KEY (id_matiere) REFERENCES matieres(matiere_id)
);

drop table devoirs;
CREATE TABLE devoirs (
  id_devoir INT PRIMARY KEY AUTO_INCREMENT,
  id_student INT NOT NULL,
  id_teacher INT NOT NULL,
  id_matiere INT NOT NULL,
  content TEXT NOT NULL,
  FOREIGN KEY (id_student) REFERENCES users(user_id),
  FOREIGN KEY (id_teacher) REFERENCES users(user_id),
  FOREIGN KEY (id_matiere) REFERENCES matieres(matiere_id)
);

drop table demandes_inscription;
CREATE TABLE demandes_inscription (
  demande_id INT PRIMARY KEY AUTO_INCREMENT,
  lastName VARCHAR(255) NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  mdp VARCHAR(255) NOT NULL,
  id_specialite INT NOT NULL,
  grades FLOAT NOT NULL,
  FOREIGN KEY (id_specialite) REFERENCES specialites(specialite_id)
);

drop table internships;
CREATE TABLE internships (
  internship_id INT PRIMARY KEY AUTO_INCREMENT,
  id_student INT NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  description TEXT NOT NULL,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  FOREIGN KEY (id_student) REFERENCES users(user_id)
); 

-- Users
INSERT INTO users (user_id, nom, prenom, mail, mdp, role) VALUES
(1, 'Doe', 'John', 'john.doe@example.com', 'password1', 'admin'),
(2, 'Smith', 'Jane', 'jane.smith@example.com', 'password2', 'student'),
(3, 'Johnson', 'Mike', 'mike.johnson@example.com', 'password3', 'teacher'),
(4, 'Brown', 'Emily', 'emily.brown@example.com', 'password4', 'student'),
(5, 'Davis', 'Chris', 'chris.davis@example.com', 'password5', 'teacher'),
(6, 'Wilson', 'Sara', 'sara.wilson@example.com', 'password6', 'student'),
(7, 'Martinez', 'David', 'david.martinez@example.com', 'password7', 'admin'),
(8, 'Anderson', 'Laura', 'laura.anderson@example.com', 'password8', 'student'),
(9, 'Thomas', 'Paul', 'paul.thomas@example.com', 'password9', 'teacher'),
(10, 'Taylor', 'Lisa', 'lisa.taylor@example.com', 'password10', 'student');

-- Insert data into new tables
INSERT INTO matieres (matiere_id, nom) VALUES
(1, 'Math'),
(2, 'Science'),
(3, 'History'),
(4, 'English'),
(5, 'Geography'),
(6, 'Biology'),
(7, 'Chemistry'),
(8, 'Physics'),
(9, 'Art'),
(10, 'Music');

INSERT INTO specialites (specialite_id, nom) VALUES
(1, 'Computer Science'),
(2, 'Engineering'),
(3, 'Mathematics'),
(4, 'Physics'),
(5, 'Chemistry'),
(6, 'Biology'),
(7, 'History'),
(8, 'Literature'),
(9, 'Psychology'),
(10, 'Economics');

-- Update the notes table data
INSERT INTO notes (id_note, id_student, id_teacher, id_matiere, valeur) VALUES
(1, 2, 3, 1, 17),  -- Math
(2, 4, 5, 2, 18),  -- Science
(3, 6, 3, 3, 15),  -- History
(4, 8, 5, 4, 16),  -- English
(5, 10, 3, 5, 19), -- Geography
(6, 2, 9, 6, 14),  -- Biology
(7, 4, 9, 7, 17),  -- Chemistry
(8, 6, 9, 8, 13),  -- Physics
(9, 8, 9, 9, 18),  -- Art
(10, 10, 9, 10, 16); -- Music

-- Update the devoirs table data
INSERT INTO devoirs (id_devoir, id_student, id_teacher, id_matiere, content) VALUES
(1, 2, 3, 1, 'Solve the equations'),
(2, 4, 5, 2, 'Write a report on photosynthesis'),
(3, 6, 3, 3, 'Essay on World War II'),
(4, 8, 5, 4, 'Write a short story'),
(5, 10, 3, 5, 'Map of Europe'),
(6, 2, 9, 6, 'Cell structure diagram'),
(7, 4, 9, 7, 'Balancing chemical equations'),
(8, 6, 9, 8, 'Explain Newton''s laws'),
(9, 8, 9, 9, 'Draw a still life'),
(10, 10, 9, 10, 'Compose a short melody');

-- Update the demandes_inscription table data
INSERT INTO demandes_inscription (demande_id, lastName, firstName, email, mdp, id_specialite, grades) VALUES
(1, 'Garcia', 'Maria', 'maria.garcia@example.com', 'password11', 1, 18),
(2, 'Rodriguez', 'Carlos', 'carlos.rodriguez@example.com', 'password12', 2, 19),
(3, 'Lee', 'Susan', 'susan.lee@example.com', 'password13', 3, 17),
(4, 'Walker', 'Robert', 'robert.walker@example.com', 'password14', 4, 16),
(5, 'Hall', 'Megan', 'megan.hall@example.com', 'password15', 5, 18),
(6, 'Allen', 'Brian', 'brian.allen@example.com', 'password16', 6, 19),
(7, 'Young', 'Amy', 'amy.young@example.com', 'password17', 7, 17),
(8, 'Hernandez', 'Jose', 'jose.hernandez@example.com', 'password18', 8, 16),
(9, 'King', 'Emma', 'emma.king@example.com', 'password19', 9, 18),
(10, 'Wright', 'Samuel', 'samuel.wright@example.com', 'password20', 10, 19);

-- Internships
INSERT INTO internships (internship_id, id_student, company_name, start_date, end_date, description, status) VALUES
(1, 2, 'TechCorp', '2025-06-01', '2025-12-01', 'Software development internship focusing on web applications.', 'pending'),
(2, 4, 'GreenEnergy Inc.', '2024-05-15', '2024-11-15', 'Internship in renewable energy research and development.', 'approved'),
(3, 6, 'FinancePro', '2025-07-01', '2025-10-01', 'Data analysis internship for financial reporting.', 'pending'),
(4, 8, 'HealthCare Solutions', '2024-04-01', '2024-09-01', 'Internship on developing healthcare management systems.', 'rejected'),
(5, 10, 'EduTech Labs', '2024-08-01', '2024-12-31', 'E-learning platform development internship.', 'approved');