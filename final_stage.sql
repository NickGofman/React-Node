-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2023 at 08:20 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_stage`
--
CREATE DATABASE IF NOT EXISTS `final_stage` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `final_stage`;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eventId` varchar(255) NOT NULL,
  `eventName` varchar(255) NOT NULL,
  `eventDate` date NOT NULL,
  `eventTime` time NOT NULL,
  `eventStyleId` int(11) NOT NULL,
  `income` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eventId`, `eventName`, `eventDate`, `eventTime`, `eventStyleId`, `income`) VALUES
('03a7b95c-2579-4456-9adb-ccd77da3b5b8', 'Crazy Folk', '2023-07-12', '23:00:00', 10, 2000),
('1e100b20-96dd-45fa-8a21-9b34d21c5364', 'Slow Jazz', '2023-07-09', '12:00:00', 2, 2222),
('373c715a-1433-4c9f-acd8-f662e542219e', 'Mozart Noon', '2023-07-22', '21:00:00', 1, 5000),
('57e3a878-2e31-4fe5-9961-9ca0cf6f59b4', 'White Blues', '2023-07-11', '12:00:00', 6, 224),
('fad327f4-3194-4365-a8c5-3a6b8b637952', 'The Lord Is Here', '2023-07-28', '13:00:00', 11, 666);

-- --------------------------------------------------------

--
-- Table structure for table `eventstyles`
--

CREATE TABLE `eventstyles` (
  `eventStyleId` int(11) NOT NULL,
  `eventStyleName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `eventstyles`
--

INSERT INTO `eventstyles` (`eventStyleId`, `eventStyleName`) VALUES
(1, 'Classical'),
(2, 'Jazz'),
(3, 'Rock'),
(4, 'Hip Hop'),
(5, 'Pop'),
(6, 'Blues'),
(7, 'Country'),
(8, 'Reggae'),
(9, 'Electronic'),
(10, 'Folk'),
(11, 'Metal'),
(12, 'Punk'),
(13, 'R&B'),
(14, 'Soul'),
(15, 'Alternative'),
(16, 'Gospel');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `password`) VALUES
(15, 'nick', '$2b$10$i9rXLyOSJk9PFM1uYl1i7.rBwpu2zmcBrL/9m5qSNX8Vpfd.yv9V6'),
(16, 'saar', '$2b$10$66Jd/Axj1CF7hsUld1lkt.3.Mt.QbdtzGqbek110LlDh8fK2y8PNi'),
(17, 'maher', '$2b$10$zqDxG7kgZ4SBSpvCVW39tu0.2JDcHNV0gnDLPHW4njlnT9gjehm5a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eventId`),
  ADD KEY `eventStyleId` (`eventStyleId`);

--
-- Indexes for table `eventstyles`
--
ALTER TABLE `eventstyles`
  ADD PRIMARY KEY (`eventStyleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `eventstyles`
--
ALTER TABLE `eventstyles`
  MODIFY `eventStyleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`eventStyleId`) REFERENCES `eventstyles` (`eventStyleId`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
