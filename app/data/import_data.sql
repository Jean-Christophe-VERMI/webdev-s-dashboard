INSERT INTO "app_users" ("id", "email", "password", "firstname", "lastname", "secretToken", "active", "status", "created_at", "updated_at" ) VALUES
(1, 'test@test.fr', 'passtest', 'john', 'doe', 'gshzhzjyzha5g56gaerg', false, 1, '2020-05-04 12:30:12', NULL ),
(2, 'test2@test.fr', 'passtest2', 'jean', 'vermi', 'gshzhzjyzaozjdzef', true, 1, '2020-05-04 12:30:12', NULL ),
(3, 'test3@test.fr', 'passtest3', 'georges', 'bush', 'itlutlishgrgrfaefae', false, 1, '2020-05-04 12:30:12', NULL ),
(4, 'test4@test.fr', 'passtest4', 'helene', 'first', 'trhzrhtbrrartzhjz', true, 1, '2020-05-04 12:30:12', NULL );

SELECT setval('app_users_id_seq', (SELECT MAX(id) from "app_users"));