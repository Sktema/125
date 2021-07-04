CREATE DATABASE IF NOT EXISTS search_and_rescue;
USE search_and_rescue;

/* 
    Пользователи
    Список ролей: 
    0 - Тот, кто просто загеристрировался (доброволец) 
    1 - Инфорг
    2 - Организатор 
    3 - Администратор 
*/
CREATE TABLE `user` (
  `id`        int(11) unsigned    NOT NULL AUTO_INCREMENT,
  `Login`    varchar(191)         NOT NULL,
  `Password` varchar(191)         NOT NULL,
  `Name`     varchar(191)         NOT NULL,
  `Phone`    double               NOT NULL,
  `Role`     tinyint(1) unsigned  DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE (`Login`)
);

/* Доступ к работе с пожарами */
CREATE TABLE `whitelist_fire` (
  `user_id`   int(11) unsigned    NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `c_fk_whitelist_fire_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Доступ к поискам */
CREATE TABLE `whitelist_search_and_rescue` (
  `user_id`   int(11) unsigned    NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `c_fk_whitelist_search_and_rescue_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Доступ к сбору помощи */
CREATE TABLE `whitelist_material_help` (
  `user_id`   int(11) unsigned    NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `c_fk_whitelist_material_help_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Доступ к ЧС */
CREATE TABLE `whitelist_emergency` (
  `user_id`   int(11) unsigned    NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `c_fk_whitelist_emergency_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Доступ к животным */
 CREATE TABLE `whitelist_animals` (
  `user_id`   int(11) unsigned    NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `c_fk_whitelist_animals_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Доступ к экологии */
CREATE TABLE `whitelist_ecology` (
  `user_id`   int(11) unsigned    NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `c_fk_whitelist_ecology_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* События: */
CREATE TABLE `event` (
  `id`                int(11) unsigned        NOT NULL AUTO_INCREMENT,
  `Type`              varchar(191)            NOT NULL,
  `Description`       text                    NOT NULL,
  `InboxTime`         varchar(191)            NOT NULL,
  `ReviewTime`        varchar(191)            DEFAULT NULL,
  `ResolvedTime`      varchar(191)            DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Пользователи на событии */
 CREATE TABLE `user_on_event` (
  `user_id`   int(11) unsigned    NOT NULL,
  `event_id`  int(11) unsigned    NOT NULL,
  KEY `index_foreignkey_user_on_event_user` (`user_id`),
  KEY `index_foreignkey_user_on_event_event` (`event_id`),
  CONSTRAINT `c_fk_user_on_event_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `c_fk_user_on_event_event_id` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Загруженные файлы */
CREATE TABLE `file` (
  `id`          int(11) unsigned            NOT NULL AUTO_INCREMENT,
  `Time`        varchar(191)                NOT NULL,
  `Name`        varchar(191)                NOT NULL,
  `Blob`        mediumblob                  NOT NULL,
  `event_id`    int(11) unsigned            NOT NULL,
  `user_id`     int(11) unsigned            NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_foreignkey_file_event` (`event_id`),
  KEY `index_foreignkey_file_user` (`user_id`),
  CONSTRAINT `c_fk_file_event_id` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `c_fk_file_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

/* Учётка администратора */
INSERT INTO user VALUES (NULL, "Admin", "$2y$10$dVLkbNpQyTCcBMazvPPY8OVHXVyEbWofUK./0dyd8t1H67jfbZ1L2", "Администратор", 88005553535, 3);