# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: test
# Generation Time: 2018-11-05 06:29:49 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table authors
# ------------------------------------------------------------

CREATE TABLE `authors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;

INSERT INTO `authors` (`id`, `name`)
VALUES
	(1,'Sam'),
	(2,'Scott'),
	(3,'Natasha'),
	(4,'Tony'),
	(5,'Stephen'),
	(6,'Bruce'),
	(7,'Wong'),
	(8,'Steve');

/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table posts
# ------------------------------------------------------------

CREATE TABLE `posts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(256) DEFAULT NULL,
  `text` varchar(256) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `authorID` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `authorID` (`authorID`),
  CONSTRAINT `authorID` FOREIGN KEY (`authorID`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;

INSERT INTO `posts` (`id`, `title`, `text`, `createdAt`, `updatedAt`, `authorID`)
VALUES
	(5,'A Post by Tony','Et qui quia odio dolore. Eligendi in deserunt. Harum sit odio dolor dicta provident quo provident.','2018-08-09 01:47:33','2018-08-09 01:47:33',4),
	(6,'A Post by Stephen','Harum ullam pariatur quos est quod. Ea quisquam esse quia et commodi autem. Ut exercitationem maiores et voluptas.','2018-08-09 01:47:33','2018-08-09 01:47:33',5);

/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
