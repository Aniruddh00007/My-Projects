-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: go_green
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mailbox`
--

DROP TABLE IF EXISTS `mailbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mailbox` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender` varchar(50) DEFAULT NULL,
  `receiver` varchar(50) DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `mail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mailbox`
--

LOCK TABLES `mailbox` WRITE;
/*!40000 ALTER TABLE `mailbox` DISABLE KEYS */;
INSERT INTO `mailbox` VALUES (2,'anshu@gmail.com','Aniruddh8146@gmail.com','work for us ','sczxc'),(3,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','go_green Plantation','work for us ','adafawf\nTime: 44545'),(4,'asas (Anshu79731644@gmail.com)','asas','sasa','asas\nTime: sasa'),(5,'khjkhjj (Anshu79731644@gmail.com)','hjghj','hfjh','hjghk\nTime: jhjjhgj'),(6,'khjkhjj (Anshu79731644@gmail.com)','hjghj','hfjh','hjghk\nTime: jhjjhgj'),(7,'khjkhjj (Anshu79731644@gmail.com)','hjghj','hfjh','hjghk\nTime: jhjjhgj'),(8,'khjkhjj (Anshu79731644@gmail.com)','hjghj','hfjh','hjghk\nTime: jhjjhgj'),(9,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','go_green Plantation','looking for work','hello My Name is Aniruddh \nTime: 123'),(10,'Satyam (satyamsingh55423@gmail.com)','Go_green  Plantation','looking ','Hello i am job seeker\nTime: 122`'),(11,'Aniruddh Kumar Shaw (satyamsingh55423@gmail.com)','green green','looking for work','fasfsf\nTime: 123'),(13,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','abhiii\nTime: 123'),(14,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','abhiii\nTime: 123'),(16,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','abhiii\nTime: 123'),(17,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','abhiii\nTime: 123'),(18,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','go_green Plantation','work for us ','Hello bro \nTime: 123'),(19,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','go_green Plantation','work for us ','Hello bro \nTime: 123'),(20,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','go_green Plantation','work for us ','Hello bro \nTime: 123'),(21,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','work for us ','ye new hai bhaai\nTime: 729'),(22,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','work for us ','ye new hai bhaai\nTime: 729'),(23,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','updated version\nTime: 732'),(24,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','updated version\nTime: 732'),(25,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','updated version\nTime: 732'),(26,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','updated version\nTime: 732'),(27,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','updated version\nTime: 732'),(28,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','work for us ','ye new hai bhaai\nTime: 738'),(29,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','Hello  this is new one \nTime: 744'),(30,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','green green','plant ','Hello  this is new one \nTime: 744'),(31,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','Go_green  Plantation','plant ','contact us se send \nTime: 804'),(32,'Aniruddh Kumar Shaw (Anshu79731644@gmail.com)','go_green Plantation','work for us ','Aniruddh\nTime: 814'),(33,'Anjali (Anshu79731644@gmail.com)','go_green Plantation','want to join  go Green Plantation','hello good evening Sir \nTime: 1028pm'),(34,NULL,NULL,NULL,NULL),(35,'Abhinash (Anshu79731644@gmail.com)','green plant Service','new job',' i want collab\nTime: 12:42 Am'),(36,'Anjali (Anshu79731644@gmail.com)','green green','looking for work','looking  for job\nTime: 123'),(37,'jatin (Anshu79731644@gmail.com)','Go_green  Plantation','work for us ','looking for job\nTime: 123'),(38,'Ankit (Anshu79731644@gmail.com)','green green','need exhibit...','looking for job\nTime: 44545'),(39,'tiwari (Anshu79731644@gmail.com)','go_green Plantation','work for us ','okiree\nTime: 123');
/*!40000 ALTER TABLE `mailbox` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10  0:26:58
