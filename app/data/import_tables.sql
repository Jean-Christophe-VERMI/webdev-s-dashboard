-- -----------------------------------------------------
-- Schema jcvapp
-- -----------------------------------------------------


-- -----------------------------------------------------
-- Table "app_users"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "users" ;

CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(60) NOT NULL,
  "username" VARCHAR(64) NULL,
  "github" VARCHAR(64) NULL,
  "twitter" VARCHAR(64) NULL,
  "linkedin" VARCHAR(64) NULL,
  "URL_picture_AWS" VARCHAR(255) NULL,
  "secretToken" VARCHAR(64) NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "users_has_projects"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "users_has_projects" ;

CREATE TABLE IF NOT EXISTS "users_has_projects" (
  "users_id" INT NOT NULL,
  "projects_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY ("users_id", "projects_id"));


-- -----------------------------------------------------
-- Table "projects"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "projects" ;

CREATE TABLE IF NOT EXISTS "projects" (
  "id" SERIAL NOT NULL,
  "title" VARCHAR(64) NOT NULL,
  "description" VARCHAR(255) NULL,
  "catégorie_type" VARCHAR(64) NOT NULL,
  "catégorie_état" VARCHAR(64) NOT NULL DEFAULT 'En cours',
  "favori" BOOLEAN NOT NULL DEFAULT FALSE,
  "URL_picture_AWS" VARCHAR(255) NULL,
  "user_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "projects_has_days"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "projects_has_days" ;

CREATE TABLE IF NOT EXISTS "projects_has_days" (
  "projects_id" INT NOT NULL,
  "days_id" INT NOT NULL,
  PRIMARY KEY ("projects_id", "days_id"));


-- -----------------------------------------------------
-- Table "days"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "days" ;

CREATE TABLE IF NOT EXISTS "days" (
  "id" SERIAL NOT NULL,
  "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "text" TEXT NULL,
  "code" VARCHAR(255) NULL,
  "ref_source" VARCHAR(255) NULL,
  "project_id" INT NOT NULL,
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


-- -----------------------------------------------------
-- Table "tags"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "tags" ;

CREATE TABLE IF NOT EXISTS "tags" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(64) NOT NULL,
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
-- Table "technos"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "technos" ;

CREATE TABLE IF NOT EXISTS "technos" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(64) NOT NULL,
  "project_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));













