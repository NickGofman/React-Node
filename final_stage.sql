-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2023 at 09:28 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eventId` int(11) NOT NULL,
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
(1, 'Concert 1', '2023-07-10', '19:00:00', 2, NULL),
(2, 'Festival 1', '2023-07-15', '14:30:00', 5, NULL),
(3, 'Gig 1', '2023-07-20', '20:00:00', 8, NULL),
(4, 'Performance 1', '2023-07-22', '18:45:00', 3, NULL),
(5, 'Show 1', '2023-07-25', '21:15:00', 6, NULL);

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
  `password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `eventstyles`
--
ALTER TABLE `eventstyles`
  MODIFY `eventStyleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

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
