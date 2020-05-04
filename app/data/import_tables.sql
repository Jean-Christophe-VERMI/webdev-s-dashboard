-- -----------------------------------------------------
-- Schema jcvapp
-- -----------------------------------------------------


-- -----------------------------------------------------
-- Table "app_users"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "app_users" ;

CREATE TABLE IF NOT EXISTS "app_users" (
  "id" SERIAL NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(60) NOT NULL,
  "firstname" VARCHAR(64) NULL,
  "lastname" VARCHAR(64) NULL,
  "secretToken" VARCHAR(64) NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT FALSE,
  "status" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "projects"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "projects" ;

CREATE TABLE IF NOT EXISTS "projects" (
  "id" SERIAL NOT NULL,
  "title" VARCHAR(64) NOT NULL,
  "description" VARCHAR(255) NULL,
  "status" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  "app_users_id" INT NOT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "days"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "days" ;

CREATE TABLE IF NOT EXISTS "days" (
  "id" SERIAL NOT NULL,
  "date" DATE NOT NULL,
  "text" VARCHAR(255) NOT NULL,
  "code" VARCHAR(255) NOT NULL,
  "ref_source" VARCHAR(255) NOT NULL,
  "status" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  "projects_id" INT NOT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "technos"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "technos" ;

CREATE TABLE IF NOT EXISTS "technos" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(64) NOT NULL,
  "status" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "projects_has_technos"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "projects_has_technos" ;

CREATE TABLE IF NOT EXISTS "projects_has_technos" (
  "projects_id" INT NOT NULL,
  "technos_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("projects_id", "technos_id"));

-- -----------------------------------------------------
-- Table "tags"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "tags" ;

CREATE TABLE IF NOT EXISTS "tags" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(64) NOT NULL,
  "status" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "days_has_tags"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "days_has_tags" ;

CREATE TABLE IF NOT EXISTS "days_has_tags" (
  "days_id" INT NOT NULL,
  "tags_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("days_id", "tags_id"));