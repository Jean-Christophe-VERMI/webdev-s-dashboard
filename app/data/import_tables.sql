-- -----------------------------------------------------
-- Schema webdev's dashboard
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
  "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "user_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "days"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "days" ;

CREATE TABLE IF NOT EXISTS "days" (
  "id" SERIAL NOT NULL,
  "date" DATE NOT NULL,
  "text" TEXT NULL DEFAULT 'Ajouter une note',
  "code" TEXT NULL DEFAULT 'Ajouter du code',
  "ref_source" TEXT NULL DEFAULT 'Ajouter des sources et références',
  "project_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "tags"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "tags" ;

CREATE TABLE IF NOT EXISTS "tags" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(64) NOT NULL,
  "day_id" INT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));


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













