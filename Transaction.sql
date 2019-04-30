
USE timefortime_db;

CREATE TABLE User(
  id INTEGER(100) AUTO_INCREMENT NOT NULL,
  User_UniqueID INTEGER(100),
  Transaction_Desc VARCHAR(200),
  Tokens_Transaction_amount VARCHAR(200),
  User_Name_requesting_service VARCHAR(200),
  User_Name_Providing_service VARCHAR(200),
  Password VARCHAR(100),
 TotalTokensBalance VARCHAR(100),
  PRIMARY KEY (id)
);