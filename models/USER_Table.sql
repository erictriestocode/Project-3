DROP DATABASE IF EXISTS timefortime_db;
CREATE DATABASE timefortime_db;
USE timefortime_db;

CREATE TABLE User(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  UserName VARCHAR(100),
  Password VARCHAR(100),
 TotalTokensBalance VARCHAR(100),
  PRIMARY KEY (id)
);