-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2017 at 07:10 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `questiondb`
--

-- --------------------------------------------------------

--
-- Table structure for table `questionaire`
--

CREATE TABLE `questionaire` (
  `ID` int(100) NOT NULL,
  `Question` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `AnswerA` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `AnswerB` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `AnswerC` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `AnswerD` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `CorrectAnswer` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `questionaire`
--

INSERT INTO `questionaire` (`ID`, `Question`, `AnswerA`, `AnswerB`, `AnswerC`, `AnswerD`, `CorrectAnswer`) VALUES
(1, 'What is a stakeholder?', 'The person responsible for preparing the project budget.', 'An organization that’s hired to perform risk analysis.', 'A person or organization that is not actively involved in the project, or whose interests will not be affected by execution or completion of the project.', 'A person or organization that is actively involved in the project, or whose interests may be positively or negatively affected by execution or completion of the project.', 'a'),
(2, 'A project charter:', 'lists the names and roles of all project team members.', 'is most often reviewed when documenting lessons learned.', 'formally authorizes the existence of a project.', 'is used to document change requests.', 'b'),
(3, 'Which subsidiary plan is not a part of the project management plan?', 'human resource management plan', 'communications management plan', 'risk management plan', 'baseline management plan', 'c'),
(4, 'When does a project reach its end?', 'When the project objectives have been achieved.', 'When the project is terminated because its objectives will not or cannot be met.', 'When the need for the project no longer exists.', 'For any of the reasons above.', 'd'),
(5, 'Which of the following is not a project constraint?', 'Schedule', 'Stakeholder', 'Budget', 'Quality', 'a'),
(6, 'Organizational project management is a strategy execution framework that utilizes which of the following?', 'project management', 'program management', 'portfolio management', 'all of the above', 'b'),
(7, 'Which answer best describes the PMBOK® Guide?', 'It contains the standard for managing most projects most of the time across many types of industries.', 'It contains step-by-step instructions for managing all projects.', 'It contains the standard for how project managers must conduct themselves.', 'It ensures project success.', 'c'),
(8, 'In the classic functional organization, the project manager’s authority is', 'high.', 'little or none.', 'moderate to high.', 'moderate.', 'd'),
(9, 'Which of the following best describe organizational process assets?', 'buildings and equipment owned by the performing organization', 'reasons that most projects encounter risk', 'items that must be estimated before the schedule is developed', 'plans, processes, policies, procedures, and knowledge bases specific to and used by the performing organization', 'a'),
(10, 'Project management offices (PMO) often serve which function?', 'They provide human resource support functions.', 'They provide project management certification exams.', 'They provide accounting and budgetary support functions.', 'They provide project management support functions.', 'c');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questionaire`
--
ALTER TABLE `questionaire`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
