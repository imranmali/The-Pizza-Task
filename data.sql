-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pizzatask
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Admin','2020-07-11 14:37:13','Admin','2020-07-11 14:37:13','Vegetable Pizza'),(2,'Admin','2020-07-11 14:37:28','Admin','2020-07-11 14:37:28','Meat Lover'),(3,'Admin','2020-07-11 14:37:45','Admin','2020-07-11 14:37:45','Chicken Pizza'),(22,'Admin','2020-07-11 15:25:42','Admin','2020-07-11 15:25:42','Premium Pizza');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (27),(27),(27),(27),(27),(27);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (6,'Admin','2020-07-11 14:45:53','Admin','2020-07-11 14:45:53','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/e/beef_onion.png',4),(8,'Admin','2020-07-11 15:01:19','Admin','2020-07-11 15:01:19','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/o/hot_and_spicy_beef_size_2.png',7),(9,'Admin','2020-07-11 15:01:19','Admin','2020-07-11 15:01:19','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/h/o/hot_and_spicy_beef_chilli.png',7),(11,'Admin','2020-07-11 15:04:10','Admin','2020-07-11 15:04:10','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/e/pepperoni_size.png',10),(13,'Admin','2020-07-11 15:10:14','Admin','2020-07-11 15:10:14','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chicken_tikka_1.png',12),(15,'Admin','2020-07-11 15:11:22','Admin','2020-07-11 15:11:22','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/e/peri_peri_chicken._1.png',14),(17,'Admin','2020-07-11 15:12:55','Admin','2020-07-11 15:12:55','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/b/bbq_chicken_1.png',16),(19,'Admin','2020-07-11 15:14:47','Admin','2020-07-11 15:14:47','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/e/veg_hot_n_spicy.png',18),(21,'Admin','2020-07-11 15:15:55','Admin','2020-07-11 15:15:55','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/e/veg_delight-min.png',20),(24,'Admin','2020-07-11 15:28:55','Admin','2020-07-11 15:28:55','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/e/meat_supeme.png',23),(26,'Admin','2020-07-11 15:29:53','Admin','2020-07-11 15:29:53','https://www.currizzas.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/garlic_prawn.png',25);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (4,'Admin','2020-07-11 14:45:53','Admin','2020-07-11 14:45:53','Bacon, mincen beef, red onions, mozzarella, barbecue sauce',9.9,'Barbecue Lover\'s',2),(7,'Admin','2020-07-11 15:01:19','Admin','2020-07-11 15:01:19','Pizza Sauce, Mozzarella cheese, Beef, Capsicum, Jalapenos, Hot Sauce Swirl.',7.99,'Spicy Beef',2),(10,'Admin','2020-07-11 15:04:10','Admin','2020-07-11 15:04:10','Pizza Sauce, Mozzarella cheese, Pepperoni.',7.99,'Pepperoni',2),(12,'Admin','2020-07-11 15:10:14','Admin','2020-07-11 15:10:14','Chef\'s Special Sauce, Mozzarella Cheese, Chicken Tikka, Red Onion, Capsicum, Mushroom, Baby Spinach, Crushed Garlic, Oregano, Chilli Flakes.',12.99,'Chicken Tikka',3),(14,'Admin','2020-07-11 15:11:22','Admin','2020-07-11 15:11:22','Chef\'s Special Sauce, Mozzarella Cheese, Chicken, Red Onion, Capsicum, Mushroom, Crushed Garlic, Oregano, Chilli Flakes, Peri Peri Mayo Swirl.',13.99,'Peri Peri Chicken',3),(16,'Admin','2020-07-11 15:12:55','Admin','2020-07-11 15:12:55','BBQ Sauce, Mozzarella cheese, Chicken, Onion, Mushroom, BBQ Swirl.',13.99,'BBQ Chicken',3),(18,'Admin','2020-07-11 15:14:47','Admin','2020-07-11 15:14:47','Pizza Sauce, Mozzarella cheese, Jalapenos, Red Onion, Capsicum, Chilli Flakes',7.99,'BVeg Hot \'n\' Spicy',1),(20,'Admin','2020-07-11 15:15:55','Admin','2020-07-11 15:15:55','Onion, Capsicum, potato wedges, jalapenos, pineapple, tomato base & BBQ swirl',7.99,'Veg Delight',1),(23,'Admin','2020-07-11 15:28:55','Admin','2020-07-11 15:28:55','Pizza Sauce, Mozzarella Cheese, Pepperoni, Bacon, Beef, Capsicum, Pineapple, oregano, Hollandaise Swirl.',13.99,'Meat Supreme',22),(25,'Admin','2020-07-11 15:29:53','Admin','2020-07-11 15:29:53','Creme Fraiche Sauce, Mozzarella Cheese, Baby Spinach, Cherry Tomato, Crushed Garlic, Oregano, Garlic Aioli Swirl.',13.99,'Garlic Prawn',22);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-11 15:36:19
