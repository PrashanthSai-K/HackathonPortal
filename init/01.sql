-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2025 at 07:19 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hackathon`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`id`, `username`, `password`) VALUES
(2, 'admin', '$2b$10$5QCEfv.n32sc3zGmjyrPbOUt4UZPCoEA.mSWA75oTn7hSvAsKKNM2');

-- --------------------------------------------------------

--
-- Table structure for table `evaluation`
--

CREATE TABLE `evaluation` (
  `id` int(11) NOT NULL,
  `team` varchar(45) NOT NULL,
  `prob_id` int(11) NOT NULL,
  `front_end` int(11) NOT NULL,
  `back_end` int(11) NOT NULL,
  `data_base` int(11) NOT NULL,
  `ad_tech` int(11) NOT NULL,
  `solution` int(11) NOT NULL,
  `comments` longtext DEFAULT NULL,
  `training` longtext DEFAULT NULL,
  `evaluated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evaluation`
--

INSERT INTO `evaluation` (`id`, `team`, `prob_id`, `front_end`, `back_end`, `data_base`, `ad_tech`, `solution`, `comments`, `training`, `evaluated_at`) VALUES
(1, '0', 0, 0, 0, 0, 0, 0, 'NIL', 'NIL', '2022-10-15 23:14:14'),
(2, 'Sleek', 101, 10, 10, 10, 10, 10, 'qwe', 'rty', '2022-10-17 15:53:18'),
(4, 'Sleek', 102, 10, 10, 10, 10, 10, 'Nil', 'Nil', '2022-10-17 15:22:19');

-- --------------------------------------------------------

--
-- Table structure for table `eval_filter`
--

CREATE TABLE `eval_filter` (
  `id` int(11) NOT NULL,
  `user` varchar(45) DEFAULT NULL,
  `prob_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eval_filter`
--

INSERT INTO `eval_filter` (`id`, `user`, `prob_id`) VALUES
(1, 'evaluator1', 101),
(2, 'evaluator1', 102),
(3, 'evaluator1', 103),
(4, 'evaluator2', 104),
(5, 'evaluator2', 105),
(6, 'evaluator2', 106),
(7, 'evaluator3', 107),
(8, 'evaluator3', 108),
(9, 'evaluator3', 109),
(10, 'evaluator4', 110),
(11, 'evaluator4', 111),
(12, 'evaluator4', 112),
(13, 'evaluator5', 113),
(14, 'evaluator5', 114),
(15, 'evaluator5', 115),
(16, 'evaluator6', 116),
(17, 'evaluator6', 117),
(18, 'evaluator6', 201),
(19, 'evaluator7', 301),
(20, 'evaluator7', 302),
(21, 'evaluator7', 303),
(22, 'evaluator8', 304),
(23, 'evaluator8', 305),
(24, 'evaluator8', 306),
(25, 'evaluator9', 307),
(26, 'evaluator9', 308),
(27, 'evaluator9', 309),
(28, 'evaluator10', 310),
(29, 'evaluator10', 311),
(30, 'evaluator10', 312);

-- --------------------------------------------------------

--
-- Table structure for table `eval_users`
--

CREATE TABLE `eval_users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eval_users`
--

INSERT INTO `eval_users` (`id`, `username`, `password`) VALUES
(2, 'evaluator1', '$2y$10$JjA1iRfzRc/yXhnW9oNJc.UASLFs9lTl7f23.DPC5AoQAx5Yqwi8.');

-- --------------------------------------------------------

--
-- Table structure for table `event_details`
--

CREATE TABLE `event_details` (
  `id` int(11) NOT NULL,
  `event_date` date NOT NULL,
  `event_venue` varchar(100) NOT NULL,
  `final_round_date` date NOT NULL,
  `results_date` date NOT NULL,
  `prize_money` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_details`
--

INSERT INTO `event_details` (`id`, `event_date`, `event_venue`, `final_round_date`, `results_date`, `prize_money`) VALUES
(1, '2025-01-18', 'Anna University', '2025-01-20', '2025-01-08', '10 Lakhs');

-- --------------------------------------------------------

--
-- Table structure for table `final_participants`
--

CREATE TABLE `final_participants` (
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `ps_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `final_participants`
--

INSERT INTO `final_participants` (`id`, `team_id`, `ps_id`) VALUES
(14, 1, 'SIH1604'),
(20, 3, 'SIH1613'),
(21, 7, 'SIH1628');

-- --------------------------------------------------------

--
-- Stand-in structure for view `final_participants_details`
-- (See below for the actual view)
--
CREATE TABLE `final_participants_details` (
`team_id` int(11)
,`institution_id` int(11)
,`team_name` varchar(255)
,`number_of_participants` int(11)
,`leader_name` varchar(200)
,`leader_email` varchar(200)
,`team_members` varchar(255)
,`abstract_link` varchar(255)
,`video_link` varchar(200)
,`stage` enum('SUBMITTED','PRESENTATION','PARTICIPATION','WINNER')
,`ps_id` varchar(100)
,`category` varchar(200)
,`title` varchar(200)
,`description` varchar(255)
,`organization` varchar(200)
,`institution_name` varchar(255)
,`poc_name` varchar(255)
,`poc_email` varchar(255)
,`poc_number` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `institution`
--

CREATE TABLE `institution` (
  `id` int(11) NOT NULL,
  `institution_code` varchar(255) NOT NULL,
  `institution_name` varchar(255) NOT NULL,
  `institution_type` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `pincode` varchar(20) NOT NULL,
  `poc_name` varchar(255) NOT NULL,
  `poc_email` varchar(255) NOT NULL,
  `poc_number` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `institution`
--

INSERT INTO `institution` (`id`, `institution_code`, `institution_name`, `institution_type`, `address`, `city`, `state`, `pincode`, `poc_name`, `poc_email`, `poc_number`, `created_at`, `updated_at`) VALUES
(27, 'AU123', 'institution names', 'Engineering', '1, RAMAKRISHNA NAGAR', 'deta', 'Tamil Nadu', '638315', 'khuim', 'abc@gmail.com', '9715404978', '2024-12-23 07:15:33', '2025-01-06 09:51:05'),
(31, 'AU1234', 'sai', 'University', 'sai institute', 'sai city', 'sai stat', '612346', 'sai', 'sai@sai.com', '1234567890', '2024-12-26 09:52:13', '2025-01-03 09:50:11'),
(39, 'AU12', 'NANDHA ARTS AND SCIENCE COLLEGE, ERODE', 'University', '1, RAMAKRISHNA NAGAR', 'APPAKUDAL', 'Tamil Nadu', '638315', 'assura', 'srisathyasai@gmail.com', '9715404978', '2025-01-06 09:15:07', '2025-01-06 09:15:07'),
(40, 'AU18', 'Caussanel College of Arts and Science', 'University', '1, RAMAKRISHNA NAGAR', 'APPAKUDAL', 'Tamil Nadu', '638315', 'hari', 'hari@gmail.com', '9715404971', '2025-01-06 09:57:44', '2025-01-06 09:57:44'),
(42, 'AU11', 'Matha College of Arts and Science', 'Arts', 'Nagaranai', 'Sathymagalam', 'Tamil Nadu', '638402', 'hari', 'harichris28@gmail.com', '1235678951', '2025-01-22 07:01:14', '2025-01-22 07:01:14');

-- --------------------------------------------------------

--
-- Table structure for table `institution_predefined`
--

CREATE TABLE `institution_predefined` (
  `id` int(11) NOT NULL,
  `InstitutionCode` varchar(100) NOT NULL,
  `InstitutionName` varchar(100) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `Stream` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `institution_predefined`
--

INSERT INTO `institution_predefined` (`id`, `InstitutionCode`, `InstitutionName`, `Address`, `Stream`) VALUES
(125, 'AU21', 'Thassim Beevi Abdul Kader College for Women', 'Thassim Beevi Abdul Kader College for Women, Kilakarai-623 806, Ramanathapuram District', 'Arts'),
(126, 'AU18', 'Idhaya College for Women', 'Idhaya College for Women, Sarugani- 630 411. Sivagangai District', 'Arts'),
(127, 'AU11', 'Matha College of Arts and Science', 'Matha College of Arts and Science,Mamamadurai-630 606.  Sivangangai dist.', 'Arts'),
(128, 'AU12', 'Sri Sarada Niketan College for Women', 'Sri Sarada Niketan College for Women, Amaravathipudur -630 301, Sivagangai District', 'Arts'),
(129, 'AU19', 'Sonai Meenal Arts and Science College', 'Sonai Meenal Arts and Science College, Mudukulathur -623 704, Ramanathapuram District', 'Arts'),
(130, 'AU13', 'Madurai Sivakasi Nadars Pioneer Meenakshi Women\'s College', 'Madurai Sivakasi Nadars Pioneer Meenakshi Women\'s College, Poovanthi 630 611. Sivagangai District', 'Arts'),
(131, 'AU20', 'Syed Hameedha Arts and Science College', 'Syed Hameedha Arts and Science College, Kilakarai 623 806. Ramanathapuram District', 'Arts'),
(132, 'AU22', 'Ananda College', 'Ananda College, Devakottai -630 303. Sivagangai District', 'Arts'),
(133, 'AU25', 'Caussanel College of Arts and Science', 'Caussanel College of Arts and Science, Muthupettai 623 523. Ramanathapuram District', 'Arts'),
(134, 'AU29', 'Dr.Umayal Ramanathan College for Women', 'Dr.Umayal Ramanathan College for Women, Karaikudi 630 003. Sivagangai District', 'Arts'),
(135, 'AU41', 'Syed Ammal Arts and Science College', 'Syed Ammal Arts and Science College, Dr. EM Abdulla Nagar, Devipattinam Road, Kottampuli, Pullangudi Post, Ramanathapuram-    623 513.   Ramanathapuram District', 'Arts'),
(136, 'AU44', 'Thiyagi Dharmakkan Amirtham College of Arts and Science', 'Thiyagi Dharmakkan Amirtham College of Arts and Science, Kannairajapuram -623135. Ramanathapuram District', 'Arts'),
(137, 'AU45', 'Nachiappa Swamigal Arts and Science College', 'Nachiappa Swamigal Arts and Science College, Koviloor 630 307.  Sivagangai District', 'Arts'),
(138, 'AU49', 'Singai Sithar Ayya College of Arts and Science', 'Singai Sithar Ayya College of Arts and Science, Singampunari main road, A.Thekkur-630 205, Thiruppathur TK,  Sivagangai District', 'Arts'),
(139, 'AU50', 'St.Justin Arts and Science College for Women', 'St.Justin Arts and Science College for Women, Cholapuram-630 557 Sivagangai District', 'Arts'),
(140, 'AU51', 'Vidhyaa Giri College of Arts and Science', 'Vidhyaa Giri College of Arts and Science, Puduvayal 630 108.Karaikudi Taluk, Sivagangai District', 'Arts'),
(141, 'AU53', 'Puratchi Thalaivar Dr.M.G.R. Arts and Science College for Women', 'Puratchi Thalaivar Dr.M.G.R. Arts and Science College for Women, Keelanagachi, Uchipuli 623 534. Ramanathapuram District', 'Arts'),
(142, 'AU54', 'Mohamed Sathak Hamid College of Arts and Science for Women', 'Mohamed Sathak Hamid College of Arts and Science for Women, Pokkuvarathu nagar, Rameswaram Main road, Vani post, Sakkarakottai Panchayat, Ramanathapuram 623 536. Ramanathapuram District', 'Arts'),
(143, 'AU55', 'Raja College of Arts and Science', 'Raja College of Arts and Science, 7/176-D, Raja Nagar, Madurai to Rameswaram Main Road, Kunjarvasalai  Vedhalai-623804. Ramanathapuram District', 'Arts'),
(144, 'AU56', 'St.Joseph Arts and Science College for Women', 'St.Joseph Arts and Science College for Women, Nattarmangalam Road, South Singampunari Village -630502. Sivagangai District', 'Arts'),
(145, 'AU57', 'Morning Star Arts and Science College for Women', 'Morning Star Arts and Science College for Women, Abiramam, Kamuthi Main Road, Pasumpon Village, Kamuthi TK,623 604. Ramanathapuram District', 'Arts'),
(146, 'AU58', 'Velumanoharan Arts and Science College for Women', 'Velumanoharan Arts and Science College for Women, Pazhankulam Village, Marappalam, Ramanathapuram-Devipattinam ECR Road, Peravoor Post,  Ramanathapuram District-623504.', 'Arts'),
(147, 'AU59', 'P.S.Y Arts & Science College', 'P.S.Y Arts & Science College, Arasanoor Village, Thirumansolai post, 630561. Sivagangai District', 'Arts'),
(148, 'AU60', 'K.L.N. Arts & Sciences College', 'K.L.N. Arts & Sciences College, Madurai to Kosavapatti road,  Pottapalayam-630612. Sivagangai District', 'Arts'),
(149, 'AU62', 'Sri Muthalamman Arts and Science College (Women)', 'Sri Muthalamman Arts and Science College (Women), Somanathapuram,  Paramakudi-623707. Ramanathapuram District', 'Arts'),
(150, 'AU63', 'Annai Scholastica Arts and Science College for Women', 'Annai Scholastica Arts and Science College for Women, Pamban-623 521, Rameswaram TK, Ramanathapuram District', 'Arts'),
(151, '320', 'A.K.D. Dharma Raja Women\'s College', '160/3, Shenbagathoppu Road, Rajapalayam', 'Arts'),
(152, '242', 'Ambiga College of Arts and Science for Women', 'Anna nagar, Madurai - 625 020', 'Arts'),
(153, '284', 'Amman college of Arts and Science', 'Pillaiyarnatham, Dindigul -624002', 'Arts'),
(154, '333', 'Arulmigu Kalasalingam College of Arts and Science', 'Anand Nagar, Krishnankoil – 626 126, Srivilliputtur (Via), Virudhunagar District', 'Arts'),
(155, '653', 'Athoor Co-operative Arts and Science college ', 'Seeval Sarag, Dindigul Main road, Athoor (TK), Dindigul Distr. ', 'Arts'),
(156, '654', 'Auxilium arts and science college for women', 'Auxilium Arts and Science College for Women, Thamaraipatti Bit(II) Village, Madurai East Taluk, Chittampatti-625 112.', 'Arts'),
(157, '255', 'C.S.I College of Arts and \r\nScience for Women', 'Karpaga Nagar 12th Street \r\nK.Pudur, Madurai-625007', 'Arts'),
(158, '645\r\n', 'Jai Sai Ram Arts & Science College', 'Palavanatham, \r\nVirudhunagar - 626004', 'Arts'),
(159, '605', 'K.P. National College of Arts and Science', 'Aanaa Pirivu, Vengatasthirikottai Post, Batlagundu - 624 202', 'Arts'),
(160, '638', 'K.R.P.College of Arts and Science', 'Alangulam Road,\r\nKakkivadanpatti,\r\nSivakasi', 'Arts'),
(161, '607', 'Madurai Gandhi N.M.R.Subbaraman College For Women', '4A-Teppakulam ,Anuppanadi Road,                           Madurai - 625 009.', 'Arts'),
(162, '241', 'Madurai Kamaraj University College,Madurai', 'out post ,Alagarkoil road,Tallakulam,Madurai-02', 'Arts'),
(163, '251', 'Mangayarkarasi College of Arts & Science for Women', '7-1-139, Mangayarkarasai Nagar, Paravai,                             Madurai-625402', 'Arts'),
(164, '659', 'Manikam Ramaswami College of Arts & Science', 'Pamban Swamy Nagar, Thirupparankundram,\r\nMadurai-625005', 'Arts'),
(165, '646', 'Maragatham Arts and Science College', 'Nilakkotai\'624202', 'Arts'),
(166, '618', 'Mary Matha College of Arts and Science , Periyakulam', 'Mary Matha College of Arts & Science, Nallakaruppanpatti, Periyakulam East, Theni District - 625604', 'Arts'),
(167, '639', 'Meenakshi arts and Science College, Dindigul', 'Silvarpatti, Palani Road, Dindigul', 'Arts'),
(168, '228', 'MKU Evening College, Madurai ', 'Alagarkovil Road,                                   Madurai - 625 002', 'Arts'),
(169, '635', 'Mother Teresa Arts and Sciene College ', 'Bodi - Chinnamanur Main Road, T. Sindalaicherry ', 'Arts'),
(170, '633', 'Noble College of Arts and Science for Women', 'Palavanatham,Aruppukottai Taluk -626 004', 'Arts'),
(171, '259', 'NPR Arts and Science College, Theni', 'NPR Nagar, Punnapatti Village, Uluppangudi Post, Natham Taluk,             Dindigul - 624 401', 'Arts'),
(172, '249', 'P.K.N Arts & Science College', 'Po.Box No:28,PKN Nagar,Airport Road,Thirumangalam - 625 706', 'Arts'),
(173, '612', 'P.S. Muthu College of Arts and Sceince ', 'seepalakottai road, sukkangalpatti -625540 .Theni (dt)', 'Arts'),
(174, '234', 'Pannaikadu  Veerammal Paramasivam College ', 'PVP Nagar, K. Singarakottai , Athoor Taluk, Dindigul Dist. - 624 708', 'Arts'),
(175, '256', 'Parvathy\'s Arts and Science College', 'WISDOM CITY, BEGAMBUR POST, DINDIGUL - 624002', 'Arts'),
(176, '258', 'Rama Prabha College of Arts and Science ', 'Arasanampatti, thootanuth vai,                           Dindigul  - 624 003', 'Arts'),
(177, '250', 'Rev. Jacob Memorial Christian College', 'Santhipuram, Ambilikkai, oddanchatram,  Dindigul', 'Arts'),
(178, '628', 'RVS Kumaran Arts and Science College', 'Ayyalur, Dindigul 624801', 'Arts'),
(179, '616', 'Sacred Heart College of Arts and Sceince ', 'RMTC Colony, Reddiyapatty (po),  Dindigul', 'Arts'),
(180, '229', 'SLS MAVMM Ayira Vaisyar College', 'M. Chathrapatti, Kallampatti,                        Madurai-625 014.', 'Arts'),
(181, '625', 'SMS College of Arts and Science', '180,SMS kalvi nagar,Near Alangulam Cements,                              Kallamanaickerpatti,                        Sivakasi-626 131', 'Arts'),
(182, '631', 'Solai College of Arts and Science ', 'T.Chettiyapatti, Dottapanayakanur Post, Usilampatti Tk,                                                      Madurai Dist. - 625 532', 'Arts'),
(183, '332', 'Sourashtra College for Women', 'Vilachery Main Road, Pasumalai,    Madurai-4', 'Arts'),
(184, '622', 'Sree vee college,Dindigul.', 'Kiriyampatti, Thadikombu(po)', 'Arts'),
(185, '602', 'Sri Hayagreeva Arts and Science College', 'Mettur Gate ,NH -7, Madurai -Dindigul main Rd ,Near Kodai Road Toll Gate ', 'Arts'),
(186, 'AA 629', 'Sri Kaliswari College', 'A.Meenakshipuram. Anaikuttam. Post. Sivakasi - 626 130. Virudhunagar Dist. Tamilnadu.  ', 'Arts'),
(187, '621', 'Sri Krishnasamy Arts and Science College', '2/555 B Mettamalai Post, Sattur - 626 203', 'Arts'),
(188, '623', 'Sri Ramanas College\r\n of Arts and Science for Women', 'Near 5 Star Swimming Pool, \r\nChidambarapuram.', 'Arts'),
(189, '603', 'Sri Sai Bharath College of Arts and Science', 'Oddanchathram-vedasandur high way, Navamarathupatty, Dindigul-624710', 'Arts'),
(190, '629', 'Sri Vidhya College of Arts and Science ', 'Sivakasi Main Road                                             Virudhunagar - 626005', 'Arts'),
(191, '642', 'SRV College of Arts and Science', 'Srivilliputhur Main Road, Sivakasi West,  626124.', 'Arts'),
(192, '655', 'SSM College of Arts and Science', 'Dindigul-Palani Highways, Kuttathupatti Post, Dindigul 624 002', 'Arts'),
(193, '641', 'Thaai Arts and Science College for Women', 'Union office Road, Neerathan, T. Vadipatti, Madurai - 624 218', 'Arts'),
(194, '235', 'Theni College of Arts and Science', 'Sourashtra College Campus, Theni Kumuli Bye Pass Road, Veerapandi,                Theni - 625 534.', 'Arts'),
(195, '604', 'Theni Kammavar Sangam Arts and Science College', 'Kammavar Nagar, Koduvilarpatti, Theni - 625 534.', 'Arts'),
(196, '628', 'Thiagarajar School of Management', 'Pamban Swamy Nagar, \r\nTirupparankundram, \r\nMaduai - 625005', 'Arts'),
(197, '238', 'Annai Fathima College of Arts & Science ', 'Alampatti, Thirumangalam, Madurai - 625 706', 'Arts'),
(198, '282', 'Institute of Co-operative Management', 'Chinna Udaippu, P.T.C. Post,                                             Madurai - 625 022', 'Arts'),
(199, '230', 'N.M.S. Sermathai Vasan College forr Women', 'Periyar Nagar Main Road, Avaniapuram,                                               Madurai - 625 012', 'Arts'),
(200, '', 'Sri Nagalakshmi Ammal Collge of Sciences', 'K. Pappunaickanpatti, Peraiyur T.K.                                            Madurai - 625 708', 'Arts'),
(201, '619', 'Thiruvalluvar Arts & Science College for Women', 'Soolapuram, Mallapuram, Elumalai, Peraiyur T.K. Madurai - 625 535', 'Arts'),
(202, '624', 'Latha Mathavan Arts & Science College', 'Latha Mathavan Nagar, Kidaripatti, Alagarkovil Road, Melur Taluk,                                 Madurai - 625 301', 'Arts'),
(203, '627', 'Madonna Arts & Science College for Women', 'Rameswaram High Road, Virahanur, Madurai - 625 009', 'Arts'),
(204, '632', 'Nagarathinam Angalammal Arts & Science College', 'S. No. 32/1, Opp. To Perungudi Police Station, Valayankulam Village, Madurai - 625 022', 'Arts'),
(205, '636', 'Ultra Arts and Science College', '69/1 A, Ultra Nagar, Madurai - Chennai Highway,                                      Madurai - 625 104', 'Arts'),
(206, '257', 'St. George\'s Jeyaraj Chelladurai College of Arts & Science for Women', 'Thottiapatti, Kombadi Road, Near Valayapatti, Valayapatti Post,                                Madurai - 625 022', 'Arts'),
(207, '606', 'Senthamarai College of Arts & Science ', 'VRS Garden, Vadapalanji, Madurai - 625 021', 'Arts'),
(208, '609', 'Nazia College of Arts & Science ', 'S. Kallupatti, Kariapatti, Virudhunagar - 626 115', 'Arts'),
(209, '601', 'Sree Balakrishna College of Arts & Science ', 'Vaniyampatti Road, Mottamalai, Chatrapatti, Rajapalayam - 626 102', 'Arts'),
(210, '324', 'V.P. Muthiah Pillai Meenakshi Ammal College for Women', 'V.P.M.Nagar, Krishnakovil, Srivilliputtur T.K. Virudhunagar - 626 190', 'Arts'),
(211, '634', 'Kalaimagal College of Arts & Science ', '1/654, Thoothukudi Road, Pandalgudi, Aruppukottai - 626 113', 'Arts'),
(212, '637', 'Arumugham Palaniguru Arts & Science College for Women', 'SF. No. 963, Rajapalayam Road, Chatrapatti - 626 102', 'Arts'),
(213, '608', 'Anugraha Institute of Social Sciences', 'Nochiodaipatty, Natham Road, Dindigul - 624 003', 'Arts'),
(214, '263', 'Subramanya College of Arts & Science', 'Thalayuthu, Palani - 624 618', 'Arts'),
(215, '644', 'N.R.T. College of Arts & Science', 'Kumily - Madurai NH, Near Theni Medical College, Theni - 625 531', 'Arts'),
(216, '630', 'P.S.R. Arts & Science College', 'Sevalpatti, Sivakasi, Virudhunagar - 626 140', 'Arts'),
(217, 'AA 618', 'Subbulakshmi Lakshmipathy College of Science ', 'T.V.R. Nagar, Aruppukottai Road,  Madurai - 625 022', 'Arts'),
(218, 'AA 626', 'Kodaikanal Christian College', 'Paradise Hill, Prakasapuram,  Kodaikanal - 624 104', 'Arts'),
(219, '617', 'Sri Kaliswari Institute of Management and Technology ', 'A. Meenakshipuram, Anaikuttam Post, Sivakasi - 626 130', 'Arts'),
(220, '281', 'MKU Evening College, Dindigul', '', 'Arts'),
(221, '208', 'MKU Evening College, Palani', 'Kennedy Mat. School Campus, Railway Sedar Road,Palani', 'Arts'),
(222, '283', 'MKU Evening College, Periyakulam', 'MKU Evening College, Periyakulam', 'Arts'),
(223, '294', 'MKU Evening College, Theni', 'MKU Evening College, Theni', 'Arts'),
(224, '5I', 'AJK COLLEGE OF ARTS AND SCIENCE', 'PALAKKAD MAIN ROAD, NAVAKKARAI, COIMBATORE - 641105', 'Arts'),
(225, '5R', 'A G ARTS AND SCIENCE COLLEGE', '1/294-4, SOUTH AVINASHIPALAYAM, KODUVAI, TIRUPUR DT. PIN - 638 660.', 'Arts'),
(226, 'AJ', 'A.V.P. COLLEGE OF ARTS AND SCIENCE', '4,Chettipalayam,Thirumurugan Poondi,Tirupur- 641 652', 'Arts'),
(227, '3Q', 'BISHOP AMBROSE COLLEGE, COIMBATORE', 'Bishop Ambrose College, College Nagar, Sungam Bye-Pass, Road, Ramanathapuram, Coimbatore-641045', 'Arts'),
(228, '3G', 'BISHOP APPASAMY COLLEGE OF ARTS AND SCIENCE', '129, Race Course Road, Race Course, Coimbatore, Tamil Nadu 641018', 'Arts'),
(229, '14', 'Bishop Thorp College', 'Bishop Thorp College, Ellis Nagar(Po), Dharapuram - 638657', 'Arts'),
(230, '24', 'CMS College of Science and Commerce', 'Chinnavedampatti, Coimbatore 641049', 'Arts'),
(231, '31', 'CHERRAANS ARTS SCIENCE COLLEGE,THITTUPARAI,KANGEYAM', 'CHERAN NAGAR, KANGEYAM-638701', 'Arts'),
(232, '5G', 'CHERRAN COLLEGE FOR WOMEN', 'J J NAGAR,ARASAMPALAYAM(PO),KANGEYAM MAIN ROAD,TIRUPUR-641604', 'Arts'),
(233, '4x', 'Dr.R.A.N.M. ARTS AND SCIENCE COLLEGE', '710 CHENNIMALAI ROAD,RANGAMPALAYAM BUS STOP,ERODE-638009', 'Arts'),
(234, '5B', 'Dr.R.V.Arts and Science College', 'Coimbatore Main Road, Karamadai - 641104', 'Arts'),
(235, '4H', 'Dr.SNS RAJALAKSHMI COLLEGE OF ARTS AND SCIENCE', '486, Thudiyalur - Saravanampatti Road, Chinnaavedampatti Post, Coimbatore - 641 049', 'Arts'),
(236, '25', 'DR.G.R.DAMODARAN COLLEGE OF SCIENCE, COIMBATORE', 'Dr.G.R.Damodaran College of Science, Civil Aerodrome PO, Peelamedu,Coimbatore-641014', 'Arts'),
(237, '3T', 'DR.N G P ARTS & SCIENCE COLLEGE, COIMBATORE', 'Dr.N.G.P.Arts & Science College, Dr.N.G.P. Nagar, Kalappatti PO, Coimbatore-641035', 'Arts'),
(238, '4A', 'HINDUSTHAN COLLEGE OF ARTS & SCIENCE', 'Hindusthan Gardens, Avinashi Road, Nava India, Coimbatore - 641 028', 'Arts'),
(239, '5S', 'Kamalam College Arts and Science, Anthiyur-Udumalpet.', '61 A, Opp. to Power House, Pollachi - Udumalpet Road, Anthiyur, Udumalpet, Tirupur(Dt)., Tamil nadu - 642122', 'Arts'),
(240, '3S', 'KARUPPANNAN MARIAPPAN COLLEGE', 'CHETTIARPALAYAM, MUTHUR, TIRUPPUR DT-638105', 'Arts'),
(241, '5J', 'KAYPEEYES COLLEGE OF ARTS AND SCIENCE', 'CORSLEY HILL, KOTAGIRI-643217, THE NILGIRIS, TAMIL NADU, INDIA', 'Arts'),
(242, '3C', 'Kongu Arts and Science College', 'Nanjanapuram, Kathirampatti (Post), Erode - 638 107.', 'Arts'),
(243, '3L', 'Kovai Kalaimagal College of Arts and Science', 'Vellimalaipattinam,Narasipuram Post, Thondamuthur Via, Coimbatore - 641 109.', 'Arts'),
(244, 'AZ', 'KPR COLLEGE OF ARTS SCIENCE AND RESEARCH', 'Avinashi Road, Arasur, Coimbatore - 641407', 'Arts'),
(245, 'AE', 'MAHARANI ARTS & SCIENCE COLLEGE', '1/74, NANJIYAMPALAYAM \r\n DHARAPURAM TALUK\r\n TIRUPPUR DISTRICT-638657', 'Arts'),
(246, '4Z', 'Michael Job College of Arts and Science for Women', 'Near Sulur Boat Lake, Ravathur(Post), Sulur, Coimbatore - 641 103', 'Arts'),
(247, '4J', 'NANDHA ARTS AND SCIENCE COLLEGE, ERODE', 'Nandha Arts & Science College Koorapalayam Pirivu, Pichandampalayam PO, Erode -638052', 'Arts'),
(248, 'AP', 'PPG COLLEGE OF ARTS AND SCIENCE', 'NH - 209, Sathy Road, Saravanampatti, Coimbatore - 641 035.', 'Arts'),
(249, '4R', 'RATHINAM COLLEGE OF ARTS AND SCIENCE', 'Rathinam Techzone, Pollachi Road, Eachanari, Coimbatore-641021', 'Arts'),
(250, '22', 'RATHNAVEL SUBRAMANIAM COLLEGE OF ARTS & SCIENCE', '242- TRICHY ROAD, SULUR POST, COIMBATORE - 641 402.', 'Arts'),
(251, '4S', 'SMS College of Arts and Science', '278-A,Perur main Road,Selvapuram South,Coimbatore-641010', 'Arts'),
(252, '23', 'SRI RAMAKRISHNA COLLEGE OF ARTS & SCIENCE', 'NAVA INDIA, AVINASHI ROAD, COIMBATORE - 641 006', 'Arts'),
(253, 'AA', 'SAN INTERNATIONAL COLLEGE OF ARTS AND SCIENCE', 'SAN INTERNATIONAL COLLEGE OF ARTS AND SCIENCE ,ACC PIRIVU, NAVAKKARAI(PO),WALAYAR COIMBATORE -641105', 'Arts'),
(254, '29', 'SANKARA COLLEGE OF SCIENCE AND COMMERCE', 'Saravanampatty, Coimbatore Pin:641035', 'Arts'),
(255, '5D', 'SHIRI KUMARAN COLLEGE OF ARTS AND SCIENCE', 'METTUPALAYAM - ANNUR MAIN ROAD, 4-ROAD, JUNCTION, BELLATHY (POST), KARAMADAI PIRIVU -64104', 'Arts'),
(256, '26', 'SNMV COLLEGE OF ARTS AND SCIENCE', 'Shri Gambhirmal Bafna Nagar\r\n Malumachampatti, Coimbatore - 641050', 'Arts'),
(257, '34', 'SREE AMMAN ARTS & SCIENCE COLLEGE', 'V.Thairpalayam Post,Chittode,Erode -638102', 'Arts'),
(258, '36', 'SREE NARAYANA GURU COLLEGE', 'K.G.CHAVADI, COIMBATORE - 641 105', 'Arts'),
(259, '3K', 'SREE RAMU COLLEGE OF ARTS & SCIENCE, POLLACHI', 'Sree Ramu College of Arts & Science, N.M.Sungam, Vedasanthur PO, Pollachi, Coimbatore-642007', 'Arts'),
(260, '3W', 'SREE SARASWATHI THYAGARAJA COLLEGE', 'PALANI ROAD, POLLACHI - 642107, COIMBATORE DISTRICT', 'Arts'),
(261, '4G', 'SRI JAYENDRA SARASWATHY MAHA VIDYALAYA COLLEGE OF ARTS & SCIENCE', '182, S.I.H.S. COLONY ROAD, SINGANALLUR, COIMBATORE - 641 005.', 'Arts'),
(262, 'AG', 'Sri Krishna Adithya College of Arts and Science', 'Sri Krishna Adithya College of Arts and Science\r\n Kovaipudur, Coimbatore - 641042', 'Arts'),
(263, '28', 'SRI RAMAKRISHNA COLLEGE OF ARTS & SCIENCE FOR WOMEN', '395,Sarojini Naidu Road, Sidhapudur,Coimbatore -641 044', 'Arts'),
(264, '3Y', 'Sri Ramalinga Sowdambigai College of Science & Commerce', 'Vadavalli -Thondamuthur Road, Onappalayam, Coimbatore-641109.', 'Arts'),
(265, '5p', 'sri subash arts and science college', '2/3, kovai ROAD,pollachi 642002', 'Arts'),
(266, '5X', 'St. Pauls College of Arts & Sci. for Women, Coimbatore', 'St.Paul\'s College of Arts and Science for Women, Eden Garden, KNG Pudur Privu, St.Paul\'s Nagar, Coimbatore-641025', 'Arts'),
(267, '5E', 'TERFS ACADEMY COLLEGE OF ARTS AND SCIENCE', 'KOVILPALAYAMPUDUR, AVINASHIPALAYAM (PO), TIRUPUR - 638 660', 'Arts'),
(268, 'AW', 'TIPS COLLEGE OF ARTS AND SCIENCE', '361/1A3 Karuvalur Road, Palayam Rd, Masagoundenchettipalayam, Tamil Nadu 641107', 'Arts'),
(269, '3J', 'TIRUPPUR KUMARAN COLLEGE FOR WOMEN, TIRUPUR', 'TIRUPPUR KUMARAN COLLEGE FOR WOMEN, 18, S.R. NAGAR, MANGALAM ROAD, TIRUPUR - 641687', 'Arts'),
(270, '4B', 'V.N.KRISHNASWAMY NAIDU COLLEGE OF ARTS & SCIENCE FOR WOMEN,METTUPALAYAM', 'ODANDURAI,OOTY MAIN ROAD,METTUPALAYAM-641301', 'Arts'),
(271, '4T', 'VELLAKOIL ARTS & SCIENCE COLLEGE , VELLAKOIL', 'Vellakoil Arts & Science College, Senapathipalayam PO, Vellakovil, Erode-638111', 'Arts'),
(272, 'CA', 'HINDUSTHAN COLLEGE OF SCIENCE AND COMMERCE', 'Chennimalai Road, Ingur Post, Perundurai, Erode - 638052', 'Arts'),
(273, '4P', 'KAAMADHENU ARTS AND SCIENCE COLLEGE', 'Sathy-Athani Main Road, D.G.Pudur (Po), Sathyamangalam - 638 503', 'Arts'),
(274, '5Y', 'SASURIE COLLEGE OF ARTS AND SCIENCE', 'VIJAYAMANGALAM, TIRUPUR', 'Arts'),
(275, 'BH', 'Adithya College of Arts & Science', 'Kurumbapalayam, Sathy Road, Coimbatore - 641107', 'Arts'),
(276, 'AC', 'NILGIRI COLLEGE OF ARTS AND SCIENCE', 'THALOOR, KONNACHAL POST, PANDALUR TALUK, THE NILGIRIS.643 239', 'Arts'),
(277, '4I', 'St.Joseph\'s College for Women, Tirupur', 'St.Joseph\'s College for Women, Kangeyam Road, Tirupur,Pin Code: 641 604.', 'Arts'),
(278, '4Y', 'KG College of Arts and Science', 'KGiSL Campus, Thudiyalur Road,\r\n Saravanampatti, Coimbatore - 641035', 'Arts'),
(279, '32', 'LAKSHMI NARAYANAN VISALAKSHI COLLEGE OF ARTS AND SCIENCE', 'LMS GARDEN,CHETTIPALAYAM', 'Arts'),
(280, '259', 'YUVAGURU COLLEGE OF ARTS AND SCIENCE', 'S.METTUPALAYAM, SULAKKAL ROAD, KOVILPALAYAMPOST, POLLACHI-642110', 'Arts'),
(281, '3X', 'Sri Krishna Arts and Science College', 'Sugunapuram, Kuniamuthur,Coimbatore-08', 'Arts'),
(282, 'BT', 'Sir C.V Raman College of Arts and Science', 'Alamara Thottam, Kottipirivu, Mathampalayam, (opp) to Sai Vidhya School, Coimbatore 641 019', 'Arts'),
(283, 'AM', 'PALANISAMY COLLEGE OF ARTS', 'NO:17, ERODE ROAD, PERUNDURAI-638052', 'Arts'),
(284, '5H', 'ADHARSH VIDHYALAYA COLLEGE OF ARTS AND SCIENCE FOR WOMEN', 'Paruvachi PO, Bhavani TK, Erode DT - 638312', 'Arts'),
(285, '3D', 'BHARATHIDASAN COLLEGE OF ARTS AND SCIENCE', 'Ellispettai, Sathy Main Road, Erode-638 116', 'Arts'),
(286, '4Q', 'KSG COLLEGE OF ARTS AND SCIENCE', '93, Kamaraj Road, Varadharajapuram Post, Singanallur, Coimbatore - 641 015', 'Arts'),
(287, '5A', 'G R Damodaran Academy of Management', 'G R Damodaran Academy of Management, Avinashi Road, Neelambur Post, Coimbatore 641062', 'Arts'),
(288, '3P', 'ANGAPPA COLLEGE OF ARTS AND SCIENECE', 'Malumachampatti, Seerapalayam (PO), Coimbatore - 641 105', 'Arts'),
(289, '4V', 'KGiSL Institute of Information Management', 'KGiSL Institute of Information Management, 365,KGiSL Campus,Saravanampatti, Coimbatore-641035.', 'Arts'),
(290, '3N', 'GURUVAYURAPPAN INSTITUTE OF MANAGEMENT', 'PALAKKAD MAIN ROAD, NAVAKKARAI POST, COIMBATORE - 641 105', 'Arts'),
(291, '319', 'COIMBATORE INSTITUTE OF MANAGEMENT AND TECHNOLOGY', 'VELLIMALAIPATTINAM, THONDAMUTHUR (VIA) , NARASIPURAM POST, COIMBATORE – 641109', 'Arts'),
(292, '3A', 'NAVARASAM ARTS AND SCIENCE COLLEGE FOR WOMEN, ARACHALUR', 'Arachalur and post, Erode District-638101', 'Arts'),
(293, 'BK', 'Suguna College of Arts and Science', 'Nehru Nagar, Kalapatti Road, Coimbatore', 'Arts'),
(294, '5V', 'CMS ACADEMY OF MANAGEMENT AND TECHNOLOGY', 'Chinnavedampatti, Coimbatore - 641049', 'Arts'),
(295, 'AX', 'Kumaraguru College of Liberal Arts and Science', 'Kumaraguru College of Liberal Arts and Science, Kumaraguru Campus , Chinnavedampatti (PO), Coimbatore - 641049.', 'Arts'),
(296, '5M', 'CMS INSTITUTE OF MANAGEMENT STUDIES', 'CHINNAVEDAMPATTI, COIMBATORE -641049', 'Arts'),
(297, 'BY', 'Kangeyam Institute of Commerce', 'Kangeyam Institute of Commerce,EBET Knowledge Park, Nathakadaiyur,Kangeyam - 638 108, Tirupur (DT).', 'Arts'),
(298, 'AK', 'Gandhi Arts & Science College', '394, Gandhi Kalvi Nagar, Sathy - Covai NH Road, Vinnappalli, Sathyamangalam', 'Arts'),
(299, '102', 'Annai Hajira Women\'s College', '93-C/2, Nethaji Road, Melapalayam, Tirunelveli 627005', 'Arts'),
(300, '103', 'Arulmigu Pannirupidi Ayyan College of Arts & Science', 'NH-44, Opp to Tidel Park,Vagaikulam, Nanguneri-627108. Tirunelveli District', 'Arts'),
(301, '104', 'CSI Jayaraj Annapackiam College', '4/1 Alangulam Road, Nallur 627853, Alangulam Taluk, Tenkasi District', 'Arts'),
(302, '105', 'JP College of Arts & Science, Ayikudi', 'College Road,\r\n Agarakattu (Po),\r\n Ayikudi - 627 852, Tenkasi District', 'Arts'),
(303, '114', 'MAHATMA GANDHI COLLEGE OF ARTS AND SCIENCE', 'V.R. Naidu Nagar, Reddiyapatti Post Solaiseri , Sankarankovil Taluk Tenkasi Dist. 627 753', 'Arts'),
(304, '116', 'Perarignar Anna Science College', 'College Road, Dharugapuram, Sivagiri Taluk, Tenkasi District Pin: 627 755', 'Arts'),
(305, '118', 'Rose Mary College of Arts & Science (Women)', 'Munneerpallam, Konganthanparai (post), Tirunelveli -627 007.', 'Arts'),
(306, '121', 'Sardar Raja Arts And Science College', 'Raja Nagar, Alanganeri PO,Vadakkankulam - 627116', 'Arts'),
(307, '122', 'SHANMUGA COLLEGE OF ARTS AND SCIENCE', 'SHANMUGA NAGAR, POIGAIMEDU, SANKARANKOVIL-627756', 'Arts'),
(308, '125', 'SRI RAM NALLAMANI YADAVA COLLEGE OF ARTS AND SCIENCE', 'Nallamani nagar, Kodikurichi,Tenkasi 627804', 'Arts'),
(309, '126', 'SRI SARADA COLLEGE FOR WOMEN (AUTONOMOUS)', 'ARIYAKULAM, MAHARAJANAGAR POST, TIRUNELVELI - 627011', 'Arts'),
(310, '131', 'Merit Arts and Science College', 'Idaikal, Ambasamudram (Tk), Tirunelveli (Dt), Tamilnadu - 627602', 'Arts'),
(311, '132', 'VYASA ARTS & SCIENCE WOMEN\'S COLLEGE', 'Subramaniapuram,\r\n Madurai-Main Road (NH),Vellanakottai Post, Sivagiri TK, Tenkasi Dt. - 627 758', 'Arts'),
(312, '133', 'Einstein College of Arts and Science', 'Sir, C.V.Raman Nagar , Seethaparpanallur - 627 012 Tirunelveli Distict', 'Arts'),
(313, '134', 'St. Joseph College of Arts and Science, \r\n Vaikalipatti', 'JNP Nagar, Vaikalipatti, \r\n Mettur, Tenkasi - 627 808', 'Arts'),
(314, '135', 'Christopher Arts & Science College (women)', '68 C, Kalakad Main Road, Soorangudi,Nanguneri, Tirunelveli District - 627108', 'Arts'),
(315, '138', 'S.A.V Sahaya Thai Arts and Science (Women) College, Vadakkankulam', 'Sahayam Nagar, Kumarapuram Road, Vadakkankulam, 629 116', 'Arts'),
(316, '139', 'U.S.P ARTS AND SCIENCE COLLEGE FOR WOMEN', 'U.S.P Nagar, Kodikurichi,Tenkasi', 'Arts'),
(317, '140', 'PET ARTS AND SCIENCE (CO-EDUCATION) COLLEGE', 'Tiruchendur Road, Vallioor, Tirunelveli-627117', 'Arts'),
(318, '141', 'Valanar Arts and Science College (co-edn), Kuruvikulam', '1/410, Valan Nagar, \r\n Kuruvikulam, Thiruvengadam Tk,Tenkasi 627754', 'Arts'),
(319, '143', 'MARIA ARTS AND SCIENCE COLLEGE FOR WOMEN', 'TIRUCHENDUR ROAD, VALLIOOR, TIRUNELVELI DIST. 627 117', 'Arts'),
(320, '144', 'Balagan Saraswathi Arts and Science College for Women', '38/1, 38/2, Sadayappapuram Main Road , Mukkudal, Tirunelveli-627601', 'Arts'),
(321, '203', 'BISHOP CALDWELL COLLEGE', 'Maravanmadam - 628 101 Thoothukudi District', 'Arts'),
(322, '204', 'Don Bosco College of Arts and Science', '385/5, \r\n Madurai Main Road, \r\n Keela Eral, \r\n Ettayapuram TK,\r\n Thoothukudi DT - 628908', 'Arts'),
(323, '207', 'Govindammal Aditanar College for Women, Tiruchendur', '98, Tirunelveli Road, Kumarapuram, Tiruchendur - 628215', 'Arts'),
(324, '208', 'Holy Cross Home \r\n Science College', '52, New Colony\r\n Thoothukudi \r\n 628 003', 'Arts'),
(325, '209', 'K. R. COLLEGE OF ARTS & SCIENCE', 'K. R. NAGAR, KOVILPATTI', 'Arts'),
(326, '217', 'RAJALAKSHMI COLLEGE OF ARTS AND SCIENCE (CO.Ed) VAGAIKULAM, THOOTHUKUDI', '1/261A Thiruvalluvar Nagar, Vagaikulam, Thoothukudi - 628102.', 'Arts'),
(327, '218', 'S.S.Duraisamy Nadar Mariammal College, Kovilpatti', 'Kamaraj Nagar, Sattur Road, Kovilpatti - 628501', 'Arts'),
(328, '220', 'Sri Sankara Bhagavathi Arts and Science College', '2/189, Kamarajar Salai, Kommadikottai - 628653, Thoothukudi (DT)', 'Arts'),
(329, '222', 'T.Mariappan Nadar Muthukani Ammal College of Arts and Science, Kulathur', 'No.10, Kurukkusalai Main Road, Kulathur - 628 901 Thoothukudi District', 'Arts'),
(330, '224', 'Wavoo Wajeeha Women\'s College of arts & science', 'Tiruchendhur Road, Kayalpatnam- 628204 Thoothukudi District', 'Arts'),
(331, '225', 'Sivanthi Arts and Science College for Women', 'Pattanathar Garden, Piraikudieruppu, Udangudi - 628 203 Thoothukudi District', 'Arts'),
(332, '226', 'Geetha Jeevan Arts & Science College', '1/329, Kurukkusalai, Thoothukudi - 628 722', 'Arts'),
(333, '228', 'MUTHUKARUPPAN MEMORIAL ARTS AND SCIENCE COLLEGE', 'Sillankulan Village, M.K.N Nagar, Ottapidaram Taluk & City Thoothukudi 628718', 'Arts'),
(334, '229', 'Unnamalai College of Arts and Science', 'Unnamalai College of Arts and Science, Suba Nagar,Kovilpatti-628502', 'Arts'),
(335, '230', 'Kamaraj Women\'s College, \r\n Thoothukudi', '482,Tiruchendur Road, Kamaraj College Campus,\r\n Thoothukudi - 628 003', 'Arts'),
(336, '231', 'Thulasi College of Arts & Science for Women', 'NH 138, Vallanadu (Kasba), Srivaikuntam Taluk, Tuticorin District - 628 252.', 'Arts'),
(337, '232', 'Arulmigu Subramania Swamy Arts and Science College, Vilathikulam', 'East car 1st street, Vilathikulam - 628 907 Thoothukudi District', 'Arts'),
(338, '301', 'ANNAI VELANKANNI COLLEGE', 'THOLAYAVATTAM, KANYAKUMARI DISTRICT, PINCODE-629157', 'Arts'),
(339, '305', 'Infant Jesus College of Arts and Science for Women, Mulagumoodu', 'Mulagumoodu Kanniyakumari District Tamil Nadu Pin: 629167', 'Arts'),
(340, '308', 'Malankara Catholic College, Mariagiri', 'Mariagiri, \r\n Kaliakkavilai, \r\n Kanyakumari District, Tamilnadu Pin 629 160', 'Arts'),
(341, '309', 'Muslim Arts College', '1, New Street, Thiruvithancode 629 174, Kanyakumari District', 'Arts'),
(342, '310', 'Nanjil Catholic College of Arts and Science', 'Nedumcode, Kaliyakkavilai, Kanyakumari District. PIN-629153', 'Arts'),
(343, '312', 'NOORUL ISLAM COLLEGE OF ARTS & SCIENCE, KUMARACOIL', 'Kumracoil, Thuckalay-620175, Kanyakumari District, Tamilnadu.', 'Arts'),
(344, '314', 'Ruben College of Arts and Science', '4-70F, Thadikkarankonam Junction - 629 851 Kanyakumari District', 'Arts'),
(345, '317', 'SIVANTHI ADITANAR\r\n COLLEGE PILLAYARPURAM', 'MONIKETTI POTTAL POST, \r\n NAGERCOIL - 629501\r\n KANYAKUMARI\r\n DISTRICT', 'Arts'),
(346, '320', 'ST ALPHONSA COLLEGE OF ARTS AND SCIENCE', 'SOOSAIPURAM, KARINKAL,629157 Kanyakumari District', 'Arts'),
(347, '321', 'St. Jerome\'s College', 'St. Jerome\'s College, Anandhanadarkudy & post, Pin: 629501 Kanyakumari District', 'Arts'),
(348, '322', 'St. John\'s College of Arts & Science,\r\n  Ammandivilai', 'St. John\'s College of Arts& Science\r\n Ammandivilai\r\n Kanyakumari District\r\n Pin: 629 204', 'Arts'),
(349, '324', 'St. Teresa Arts and Science College for Women, Mangalakuntu', 'Mangalakuntu, Mangalakuntu Post - 629178. Kanyakumari District.', 'Arts'),
(350, '325', 'UDAYA COLLEGE OF ARTS AND SCIENCE', 'UDAYA NAGAR, VELLAMODI, AMMANDI VILAI - 629204 Kanyakumari District', 'Arts'),
(351, '326', 'V T M COLLEGE OF ARTS AND SCIENCE, ARUMANAI', 'V T M College of Arts & Science, Kunjalai Vilai, Arumanai PIN 629 151', 'Arts'),
(352, '330', 'ARUNACHALA ARTS AND SCIENCE (WOMEN) COLLEGE', 'Kanakammal Gardens, Vellichanthai Post, Kanyakumari District-629 203', 'Arts'),
(353, '331', 'Bethlehem College of Arts & Science', 'Nadutheri, Karungal, - 629157 Kanyakumari District', 'Arts'),
(354, '332', 'CAPE ARTS AND SCIENCE COLLEGE ,Aralvoimozhy', 'Cape Arts and Science College, Near Muppandal Temple, Aralvoimozhy ,Kanyakumari District. Pin 629301', 'Arts'),
(355, '333', 'ANNA VINAYAGAR COLLEGE \r\n OF ARTS AND SCIENCE', 'Main Road, Ganapathipuram,\r\n Ganapathipuram post - 629502\r\n Kanyakumari District', 'Arts'),
(356, '', 'Aladi Aruna College of Liberal Arts And Sciences', 'Tenkasi-Tirunelveli Highway,\r\n Sivalarkulam, PO, Alangulam,\r\n Tamil Nadu 627 853', 'Arts'),
(357, '41', 'Shrimati Indira Gandhi College, Trichy - 2', 'Post Box No,369\r\n Chatram Busstand\r\n Tiruchirappalli - 620 002', 'Arts'),
(358, '42', 'CAUVERY COLLEGE FOR WOMEN \r\n (AUTONOMOUS)', 'CAUVERY COLLEGE ROAD,\r\n ANNAMALAI NAGAR,\r\n TIRUCHIRAPPALLI - 620018', 'Arts'),
(359, '45', 'THANTHAI HANS ROEVER COLLEGE', 'ELAMBALUR, PERAMBALUR', 'Arts'),
(360, '51', 'Sri Sarada Niketan College of Science for women', 'Sri Sarada Niketan College of science for women, Esanatham Road, Kodangipatti, Thanthonimalai (Po), Karur-639005', 'Arts'),
(361, '66', 'Sengamala Thayaar Educational Trust Women\'s College', '1/31, Main Road, Sundarakkottai, Mannargudi - 614 016.', 'Arts'),
(362, '74', 'Srimad Andavan Arts & Science College', 'No-7 Nelson Road, Thiruvanaikovil ,Tichy-5', 'Arts'),
(363, '77', 'Dhanalakshmi Srinivasan College of Arts and Science for Women, Perambalur', '274c, Thuraiyur Mani Road', 'Arts'),
(364, '79', 'Kongu College of Arts and\r\n  Science , Karur', 'Theeran chinnamalai nagar, \r\n vennaimalai, Karur', 'Arts'),
(365, '81', 'NAINA MOHAMED COLLEGE\r\n OF ARTS & SCIENCE,', 'RAJENDRAPURAM,\r\n ARANTHANGI T.K 614 624,\r\n PUDUKKOTTAI DIST', 'Arts'),
(366, '83', 'Christhu Raj College', 'Royal Nagar,Panjappur,Trichy-12 ,Trichy Dt', 'Arts'),
(367, '96', 'Chidambaram Pillai College for Wmen', 'No.3, Mela Kavai Kela Steet, Mannachanallur tk, Trichy - 721005', 'Arts'),
(368, '97', 'RABIAMMAL AHAMED MAIDEEN COLLEGE FOR WOMEN', 'VASAN NAGAR, THRUIVARUR', 'Arts'),
(369, '98', 'ENTHI RAJAPPA ARTS AND SCIENCE COLLEGE', 'ENATHI, PATTUKKOTTAI, THANJAVUR 614 615', 'Arts'),
(370, '99', 'SULTANA ABDULLAH ROWTHER COLLEGE FOR WOMEN', 'Thiruvarur to Mannargudi Main Road, Melapanangattangudi, Kamalapuram (Po) - 610102', 'Arts'),
(371, '100', 'Arputha College of Arts and Science\r\n Vamban', 'Arputha College of Arts and Science, \r\n Vamban, Alangudi (Tk),\r\n Pudukkottai(Dt)', 'Arts'),
(372, '128', 'RAJAGIRI DAWOOD BATCHA COLLEGE OF ARTS AND SCIENCE, PAPANASAM', 'SALIYAMANGALAM ROAD, PAPANASAM - 614 205, THANJAVUR DT.', 'Arts'),
(373, '132', 'AIMAN College of Arts & Science for Women', 'K.Sathanur, Trichy - 620 021.', 'Arts'),
(374, '134', 'Bharath College of Science & Management', 'Bharath Avenue, Near New Bus stand, Trichy Road, Thanjavur - 613 005', 'Arts'),
(375, '135', 'Nethji Subash Chandra Bose Arts & Science College', 'Mahatma Gandhi Nagar, Senthamangalam-Thiruvarur-610001', 'Arts'),
(376, '137', 'Sri Saradha College for Women', 'NH - 45,\r\n Sri Saradha Nagar,\r\n Perambalur - 621113', 'Arts'),
(377, '141', 'IDHAYA COLLEGE FOR WOMEN', '66,Mariamman Kovil Street Kumbakonam', 'Arts'),
(378, '148', 'SWAMI DAYANANDA COLLEGE OF ARTS & SCIENCE', 'MANJAKKUDI - 612 610, TIRUVARUR DISTRICT', 'Arts'),
(379, '160', 'Bon Secours College for Women', 'Vilar By-pass, Thanjavur-613006', 'Arts'),
(380, '170', 'SRI SANKARA ARTS & SCIENCE COLLEGE, ASUR, KUMBAKONAM', 'NEELATHANALLUR STREET, ASUR, KUMBAKONAM', 'Arts'),
(381, '179', 'Imayam Arts And Science College', 'Kannanur, Thuraiyur 621 206.', 'Arts'),
(382, '180', 'Sri Bharathi Arts and Science College for Women', 'Kaikkurichi, Alangudi (TK), Pudukkottai (Dist)', 'Arts'),
(383, '184', 'MASS College of Arts and Science,', 'Chennai Salai, Kallapuliyur Village, Kumbakonam - 612 501.', 'Arts'),
(384, '195', 'CAMBRIDGE COLLEGE OF ARTS AND SCIENCE, KARUR', 'NOYYAL, KARUR', 'Arts'),
(385, '197', 'SUDHARSAN COLLEGE OF ARTS AND SCIENCE, PERUMANADU', 'Perumanadu, Pudukkottai - 622 104.', 'Arts'),
(386, '314', 'Jairams Arts and Science College', 'NH - 7 Madurai by passRoad , Attamparapu,Kakavadi (PO) ,Karur -3.', 'Arts'),
(387, '318', 'NATIONAL ARTS AND SCIENCE COLLEGE', 'TRICHY MAIIN ROAD , JAYANKONDAM, ARIYALUR (DT), 621802', 'Arts'),
(388, '336', 'Subashakthi College of Arts and Science for women', 'Sathiyamangalam,Kulithalai-Tk,karur-dt', 'Arts'),
(389, '337', 'AADHAVAN COLLEGE OF ARTS & SCIENCE', 'Aalathur,Manapparai,Trichy.', 'Arts'),
(390, '338', 'Servite Arts & Science College for Women', 'Servite Arts & Science College for Women, Renganathapuram, T.Idaiyapatti, Thogaimalai-621313', 'Arts'),
(391, '340', 'SIR ISSAC NEWTON COLLEGE OF ARTS AND SCIENCE', 'Sir Issac Newton College of Arts and Science, Pappakovil Anthanapettai post Nagapattinam-611 102', 'Arts'),
(392, '428', 'MIT COLLEGE OF ARTS AND SCIENCE FOR WOMEN, MUSIRI', '724, Annai Nagar, M. Pudupatti, Musiri, Trichy Dt.', 'Arts'),
(393, '451', 'Dr.M.Sivakkannu Womens Arts and Science College', 'Ayakkaranpulam', 'Arts'),
(394, '452', 'ANNAI AYESHA ARTS AND SCIENCE COLLEGE FOR WOMEN', 'METTUPALAYAM ROAD, VALIKANDAPURAM, VEPPANTHATTAI (TK) PERAMBALUR(DT) 621115', 'Arts'),
(395, '461', 'SRM Arts & Science College', 'SRM Nagar, Chennai High way Irungalur, Near Samayapuram, Trichy 621 105', 'Arts'),
(396, '462', 'ARASU COLLEGE OF ARTS & SCIENCE FOR WOMEN', 'Panduthakaranpudur,\r\n Manamangalam (Po),\r\n Karur - 639006', 'Arts'),
(397, '463', 'Queens College of Arts and Science for Women', 'Thanjavur Near, Punalkulam,\r\n Gandarvakottai, Pudukkottai - 613 303.', 'Arts'),
(398, '528', 'Bon Secours Arts & Science College for Women', 'Ruckmanipalayam, Mannargudi - \r\n 614 001', 'Arts'),
(399, '546', 'Sri Amaraavathi College of Arts and Science', 'Sri Amaraavathi College of Arts and Science, Thirumalainathanpatti, Velliyanai, Karur, Karur - 639 118', 'Arts'),
(400, '548', 'KRISHNA COLLEGE OF ARTS & SCIENCE', 'UGR NAGAR, KOLLUTHANNIPATTI,\r\n  KADAVUR(TK) , KARUR(DT)-621301', 'Arts'),
(401, '586', 'JESU ARTS & SCIENCE COLLEGE', 'ALANGUDI (PO) PUDUKKOTTAI (DT)\r\n PIN-622301', 'Arts'),
(402, '593', 'KOKILA ARTS AND SCIENCE COLLEGE', 'Manapparai Road, Opp. to EB Office,\r\n Viralimalai,Pdukkottai Dt.-621316', 'Arts'),
(403, '595', 'Indira Ganesan College of Arts & Science', 'Manikandam, Trichy 620 012', 'Arts'),
(404, '597', 'CARE College of Arts and Science', 'No 27, Thayanur, Dindigul NH,Trichy - 620009', 'Arts'),
(405, '707', 'VIKAS COLLEGE OF ARTS AND SCIENCE', 'INAMKULATHUR, TRICHY', 'Arts'),
(406, '741', 'C.S.I. Bishop Solomon Doraisawmy College of Arts and Science', 'Church Corner, Karur -639001', 'Arts'),
(407, '745', 'VAILANKANNI MATHA ARTS AND SCIENCE COLLEGE', 'E.C.R.MAIN ROAD, PRATHABARAMAPURAM - 611 111, KILVELUR (Tk.), NAGAPATTINAM(Dt.)', 'Arts'),
(408, '774', 'Global College of Arts & Science', 'Global College of Arts & Science, 421, New Pavukara Street, Ammaiyappan, Thiruvarur - 613701', 'Arts'),
(409, '101', 'B. Padmanabhan Jayanthimala College of Arts and Science', 'Kozhai Nizangan, Srimushnam 608 703', 'Arts'),
(410, '104', 'Jawahar Science College', 'Block-14, \r\n Neyveli Township, \r\n Neyveli', 'Arts'),
(411, '106', 'Shree Raghavendra Arts and Science college', '102, New street, Keezhamoongiladi, Chidambaram', 'Arts'),
(412, '107', 'St. Joseph\'s College of Arts & Science (Autonomous)', 'St. Joseph\'s College Road, Manjakuppam, Cuddalore - 607001, Tamil Nadu, India', 'Arts'),
(413, '109', 'Thiruvalluvar Arts and Science College', 'Kurinjipadi 607 001', 'Arts'),
(414, '110', 'Sree Arumugham Arts and Science College', 'Rajanagar, Vaithiyanathapuram Tholudur 606 303', 'Arts'),
(415, '111', 'Krishnasamy College of Science, Arts and Management for Women, Cuddalore', 'Anand Nagar, S.Kumarapuram, Cuddalore.', 'Arts'),
(416, '112', 'Aries Arts and Science College for Women', '355, College Road, Karunkuzhi (po), Kurinjipadi (TK), Cuddalore Dt.', 'Arts'),
(417, '113', 'Vallalar Arts & Science College', 'Vallalar Arts & Science College, Neyveli Main Road, Vadalur-607303', 'Arts'),
(418, '114', 'Dr.s.Ramadoss arts and science college', 'Periyavadavadi Virudhachalam Cuddalore Dt Pin: 606104', 'Arts'),
(419, '115', 'MRK College of Arts and Science', 'Pazhanchanallur and Post\r\n Kattumannarkoil Taluk\r\n Cuddalore Dt - 608301', 'Arts'),
(420, '116', 'CSM College of Arts and Science (Co-Ed),', 'Erumanur Road,\r\n Vridhachalam-606 001', 'Arts'),
(421, '117', 'S.K.VELAYUTHAM WOMEN\'S ARTS AND SCIENCE COLLEGE,KURINJIPADI', 'G.H. &Old Thaluk Road,Kurinjipadi-607302,cuddalore', 'Arts'),
(422, '118', 'NPV Arts and Science College, Srimushnam', 'NPV KALVI NAGAR, THENPATHI, SRIMUSHNAM TK\r\n CUDDALORE DT , 608703', 'Arts'),
(423, '120', 'Sree Bhavani College of Arts and Science College', 'K.Kothanoor Village, Kandappankurichi, Nallur Post, Veppur,606 302', 'Arts'),
(424, '121', 'Immaculate College for women', 'L.S. Dupuis Street, Chinnakanganankuppam,Cuddalore', 'Arts'),
(425, '123', 'Mercy Arts and Science College', 'Elanangur village, Nanjalur-608 302', 'Arts'),
(426, '125', 'Sathya Saai Arts & Science College for Women - Pasar', 'NH-45 TRICHY- CHENNAI HIGHWAY, PASAR(PO), TITAKUDI(TK), CUDDALORE(DT), 606 304', 'Arts'),
(427, '126', 'Sangamam Arts and Science College (Co-Ed.)', '76.NH,45C. Kadampuliyur Panrutti.Tk. Cuddalore District-607103', 'Arts'),
(428, '127', 'John Dewey College of Arts & Science for Women', 'Kandrakottai (Pulavanur),Panruti (tk),Cuddlaore District Tamil Nadu - 607 205.', 'Arts'),
(429, '202', 'Indira Gandhi Jayanthi Women’s College', 'Krishnaveni Nagar, Kilgudalore, Melpettai Post,Tindivanam 604 307', 'Arts'),
(430, '203', 'Sri Aravindar Arts & Science College (Affiliated to Annamalai University)', 'pondy - Mailam Road, Sedarapet po, Vanur Tk, Villupuram Dt.', 'Arts'),
(431, '205', 'Theivanai Ammal College for Women (Autonomous)', 'Chennai-Trichy Trunk Main Road, Villupuram - 605401', 'Arts'),
(432, '207', 'K.S.Raja Arts & Science College for Women,', 'Chellaperatti, Gingee T.K., Villupuram Dt 604 210', 'Arts'),
(433, '208', 'SIGA College of Management and Computer Science', 'Chennai-Tanjavur N.H.Road, Kappiyampuliyur-605601.', 'Arts'),
(434, '209', 'Rajeswari College of Arts and Science for Women, Bommayapalayam', 'Bommayapalayam Village Vanur Taluk Villupuram District - 605104', 'Arts'),
(435, '210', 'Saraswathy College of Arts and Science College', 'Konerikuppam, Olakur, Thindivanam 604 305', 'Arts'),
(436, '211', 'BWDA Arts & Science College Kolliyangunam', 'Mailam, Tindivanam 605 304', 'Arts'),
(437, '212', 'Siddhar Sivagnaani Arts and Science College (Co-Ed.)', 'Bommayapalayam Village & Post\r\n Vanur Taluk - 605 104, Villupuram District', 'Arts'),
(438, '213', 'Swami Vivekananda Arts & Science College', 'Gingee Main Road, Orathur Village,\r\n Mundiyampakkam (S.O.)., Villupuram - 605 601.', 'Arts'),
(439, '214', 'RAAK Arts & Science College (Co-Ed.)', 'No.1, Perambai, Vanur - 605 110', 'Arts'),
(440, '215', 'Sanghamam College of Arts and Science', 'Chetpet-Gingee Main Road, Annamangalam, Melmalaiyanur - 604 210', 'Arts'),
(441, '217', 'Valliammai Women’s College of Arts & Science', 'S.Kollur Village, Vadakarai Thazhanoor, Near Arakandanallur, Tirukkoilur - 605 752', 'Arts'),
(442, '219', 'Avalurpet Arts and Science College (Co-Ed)', 'KILPENNATHUR ROAD, AVALURPET VILLAGE, MELMALAIYANUR TALUK, VILLUPURAM DISTRICT-604201', 'Arts'),
(443, '220', 'National college of arts and science', 'Avanipur Road, vittalapuram, melpettai (post), tindivanam-604307', 'Arts'),
(444, '221', 'St. Ann\'s College of Arts and Science (Co-Ed)', 'Chennai - Trichy Bypass Road, Tindivanam.', 'Arts'),
(445, '222', 'E.S Arts & Science College(Co-Ed),Villupuram', 'R.S No.355/1 Ellis Chatram Road,Viluppuram, Tamil Nadu 605401', 'Arts'),
(446, '224', 'Sacred Heart Arts and Science College', 'Sacred Heart Arts and Science College, Perani(Post), Villupuram - 605651', 'Arts'),
(447, '226', 'O.P.R Memorial Arts & Science College (Women)', 'Gingee Main Road, Lakshmipuram (V), Orathur (P), Villupuram Dt - 605601', 'Arts'),
(448, '301', 'Bharathi Women\'s Arts and Science College', 'SALEM MAIN ROAD, OPP TO OXALLISS INTERNATIONAL CBSE SCHOOL, THATCHUR, KALLAKURICHI(Tk &Dt)', 'Arts'),
(449, '302', 'DR.R.K.Shanmugam College of Arts & Science,', 'Salem Main Road, Indili, Kallakurichi', 'Arts'),
(450, '303', 'Joseph Arts and Science College', 'JOSEPH ARTS AND SCIENCE COLLEGE, THIRUNAVALUR - 607 204. KALLAKURCHI - DT', 'Arts'),
(451, '304', 'Thirukkoilur College of Arts and Science', 'NO:132,ASANOOR ROAD, SANDHAPET, THIRUKKOILUR-605 756', 'Arts'),
(452, '305', 'Immaculate College for Women', 'Viriyur post, Devapandalam Via, Sankarapuram - 606 402', 'Arts'),
(453, '306', 'Sri Vinayaga College of Arts & Science, Ulundurpet - 606 107', 'Near Toll Plaza Nagar, Ulundurpet, Kallakurichi Dt', 'Arts'),
(454, '307', 'Sri Sarada Mahavidyalayam Arts and Science College for Women', 'Sri Sarada Mahavidyalayam Arts and Science college for Women\r\n Sri Sarada Ashram\r\n  New Edaikkal-Ulundurpet 606 107', 'Arts'),
(455, '308', 'Sri Lakshmi College of Arts and Science', 'Salem Main Road, Bangaram, Thottiyam (Po), Kallakurichi Dt-606201.', 'Arts'),
(456, '309', 'Jawaharlal Nehru College for Women', 'Pali Village, Ulundurpet - 606104', 'Arts'),
(457, '311', 'St. Charles College of Arts and Science', 'CHARLES NAGAR, ERAIYUR, ULUNDURPET (TK), KALLAKURICHI (DT) -607201', 'Arts'),
(458, '313', 'Susila Arts and Science College for Women', 'Veeracholapuram,Kallakurichi', 'Arts'),
(459, '409', 'ARC. Viswanathan College', 'panangattu street, Near Railway Juntion Mayiladuthurai. 609003', 'Arts'),
(460, '410', 'Best Arts & Science College - Sirkali', 'Natham Road,Sattanathapuram, Sirkali -609 109', 'Arts'),
(461, '411', 'Vivekananda College of Arts & Science for Women', 'Keezha Thenpath, Sirkali', 'Arts'),
(462, '412', 'Kalaimahal College of Arts and Science', 'Main Road, Sembanarkoil, 609 309', 'Arts'),
(463, '413', 'Deen College of Arts and Science', 'Deen College of Arts and Science, Nidur, Kaduvangudi, Mayiladuthurai - 609203', 'Arts'),
(464, '414', 'St. Theresa\'s Arts and Science College for Women', 'Sathankudi, Tharangambadi - 609313, Tharangambadi Taluk, Mayiladuthurai Dist', 'Arts'),
(465, 'UNM1703', 'AKSHEYAA COLLEGE OF ARTS AND SCIENCE', 'Puludivakkam Village & Post, Madurantakam Taluk, Chengalpattu District 603 314.', 'Arts'),
(466, 'UNM1429 / UNM1430', 'ALPHA ARTS AND SCIENCE COLLEGE', 'Post Box No: 30, Tundalam Road, Chennai - 600116', 'Arts'),
(467, 'UNM1353 / UNM1354', 'ANNA ADARSH COLLEGE FOR WOMEN', 'AI, II Street, 9th Main Road, Shanthi Colony, Anna Nagar, Chennai - 600 040', 'Arts'),
(468, 'UNM0185', 'ANNAI THERESA ARTS & SCIENCE COLLEGE', 'Sadras Road, Mangalam, Thirukazhukundram, Chengalpet - 603109', 'Arts'),
(469, 'UNM1483 / UNM1484', 'ANNAI VEILANKANNI’S COLLEGE FOR WOMEN', '81, VGP Salai, West Saidapet, Chennai - 600015', 'Arts'),
(470, 'UNM0195 / UNM0196', 'ANNAI VIOLET ARTS & SCIENCE COLLEGE', 'No.53, Violet College Road, Menambedu, Ambattur, Chennai-600 053', 'Arts'),
(471, 'UNM0295', 'APOLLO ARTS AND SCIENCE COLLEGE KANCHIPURAM', 'Mevallurkuppam, Sriperumbudur Tk, Kanchipuram Dt - 602105', 'Arts'),
(472, 'UNM1701', 'APOLLO ARTS AND SCIENCE COLLEGE CHENNAI', 'Nellikuppam Main Road, Kalvoy Village, Guduvanchery, Chengalpattu Dt - 603 108', 'Arts'),
(473, 'UNM1725', 'APOLLO ARTS AND SCIENCE COLLEGE NORTH CHENNAI', 'Sendrambakkam, Ponneri Taluk, Chennai - 600 052', 'Arts'),
(474, 'UNM1741', 'ARULMIGU KAPALEESWARAR ARTS AND SCIENCE COLLEGE', 'No. 12/3, S J Avenue, Red Hills Road, Kolathur, Chennai - 600099.', 'Arts'),
(475, 'UNM0133 / UNM0134', 'ASAN MEMORIAL COLLEGE OF ARTS & SCIENCE', '1/176, Bharathiyar Salai, Velachery, Tambaram Road, Jaladiampet,Chennai-600100', 'Arts'),
(476, 'UNM1699', 'AVICHI COLLEGE OF ARTS & SCIENCE', '130A, Arcot Road, Virugambakkam, Chennai - 600 092.', 'Arts'),
(477, 'UNM1401 / UNM1402', 'BHAKTAVATSALAM MEMORIAL COLLEGE FOR WOMEN', 'No.14, 31St Street, Periyar Nagar, Korattur, Chennai- 600080', 'Arts'),
(478, 'UNM1691', 'C.M.ANNAMALAI ARTS & SCIENCE COLLEGE FOR WOMEN', 'Vellathur(V), Adhivaragapuram (P), Pallipet (Tk), Thiruvallur (Dt) - 631303', 'Arts'),
(479, 'UNM0189', 'C.S.I EWART WOMEN’S CHRISTIAN COLLEGE', 'Melrosapuram, S.P.Koil, Chengalpet (Dis), 603204', 'Arts'),
(480, 'UNM1735', 'CHENNAI COLLEGE OF ARTS AND SCIENCE', 'Rajiv Gandhi Salai (OMR), Karapakkam, Chennai-600097', 'Arts'),
(481, 'UNM1449', 'CHENNAI NATIONAL ARTS & SCIENCE COLLEGE', 'College Road, Avadi, Chennai 600 054', 'Arts'),
(482, 'UNM1351', 'CHEVALIER T. THOMAS ELIZABETH COLLEGE FOR WOMEN', 'No.16, St.Mary\'S Road, Maryland, Sembium, Perambur, Chennai-600011.', 'Arts'),
(483, 'UNM1657', 'CHRIST ARTS AND SCIENCE COLLEGE', 'Kilachery Village & Post, Via Perambakkam, Thiruvallur District, Pincode – 631402', 'Arts'),
(484, 'UNM1697', 'DHANALAKSHMI SRINIVASAN ARTS AND SCIENCE (CO-EDUCATION) COLLEGE', 'East Coast Road,Poonjeri Village, Chengalpatt (Dt) - 603104', 'Arts'),
(485, 'UNM1687', 'DON BOSCO ARTS AND SCIENCE COLLEGE', 'No. 45, Landons Road, Kilpauk,Chennai – 600 010', 'Arts'),
(486, 'UNM1423 / UNM1424', 'DR. MGR JANAKI COLLEGE OF ARTS & SCIENCE FOR WOMEN', '“Sathyabama MGR Maligai”, 11 & 13, Durgabai Deshmuk Road, Raja Annamalai Puram, \r\n Chennai - 600028.', 'Arts'),
(487, 'UNM1669', 'ES SUBRAMANIAM MEMORIAL COLLEGE OF ARTS AND SCIENCE', 'ESS Campus, Podhattoorpet, Tiruvallur Dist - 631208', 'Arts'),
(488, 'UNM1707', 'GURU SHREE SHANTIVIJAI JAIN ARTS AND SCIENCE COLLEGE, NALLUR', 'Nallur Village, Manamai Post, Thirukazhukundram Tk, Chengalpattu Dt - 603109', 'Arts'),
(489, 'UNM1369 / UNM1370', 'GURU SHREE SHANTIVIJAI JAIN COLLEGE FOR WOMEN', 'No.96, Vepery High Road, Vepery, Chennai – 600 007', 'Arts'),
(490, 'UNM0163 / UNM0164', 'HINDUSTAN COLLEGE OF ARTS & SCIENCE', 'OMR, Rajiv Gandhi Salai, Padur, Kelambakkam, Chennai - 603 103', 'Arts'),
(491, 'UNM1693', 'J.N.N ARTS & SCIENCE WOMEN’S COLLEGE', '90, Ushaa Garden, Chennai – Periyapalayam Highway, Tiruvallur - 601102', 'Arts'),
(492, 'UNM0125 / UNM0126', 'JAYA COLLEGE OF ARTS & SCIENCE', 'C.T.H. Road, Thiruninravur, Chennai - 602 024', 'Arts'),
(493, 'UNM1487', 'JAYAGOVIND HARIGOPAL AGARWAL AGARSEN COLLEGE', 'No.1, Manjampakkam Road, Madhavaram, Chennai - 600 060', 'Arts'),
(494, 'UNM1723', 'JEPPIAAR COLLEGE OF ARTS AND SCIENCE', 'OMR, Padur, Chengalpattu District – 603 103', 'Arts'),
(495, 'UNM0297', 'JOHN BOSCO ARTS AND SCIENCE COLLEGE', 'Post Box No.12, Near Tiruvallur Railway Station, Tiruvallur District-602 001', 'Arts'),
(496, 'UNM0203', 'K.C.S.KASI NADAR COLLEGE OF ARTS & SCIENCE', '96, Ellaya Mudali Street, RK Nagar, Chennai - 600021', 'Arts'),
(497, 'UNM0129 / UNM0130', 'KANCHI SHRI KRISHNA COLLEGE OF ARTS AND SCIENCE', 'Kilambi, Krishnapuram Post, Kancheepuram District -631551', 'Arts'),
(498, 'UNM1717', 'KANCHI SRI MAGALAKSHMI ARTS AND SCIENCE COLLEGE FOR WOMEN', 'Kanchipuram-Uthiramerur Road, Arpakkam, Kanchipuram -631603', 'Arts'),
(499, 'UNM1425 / UNM1426', 'KUMARARANI MEENA MUTHIAH COLLEGE OF ARTS AND SCIENCE', 'No.4 Crescent Avenue, Gandhi Nagar, Adyar, Chennai 600020', 'Arts'),
(500, 'UNM1709', 'LAKSHMI BANGARU ARTS AND SCIENCE COLLEGE', 'Pallipattei, Melmaruvathur, Chengalpet District– 603 319.', 'Arts');
INSERT INTO `institution_predefined` (`id`, `InstitutionCode`, `InstitutionName`, `Address`, `Stream`) VALUES
(501, 'UNM1371 / UNM1372', 'M.O.P. VAISHNAV COLLEGE FOR WOMEN', 'No.20, IV Lane, Nungambakkam High Road, Nungambakkam, Chennai – 600 034', 'Arts'),
(502, 'UNM1633', 'MADHA ARTS AND SCIENCE COLLEGE', 'Erandamkattalai, Sadhananthapuram, Thandalam Post, Chennai – 600 128', 'Arts'),
(503, 'UNM1451 / UNM1452', 'MAHALAKSHMI WOMEN\'S COLLEGE OF ARTS & SCIENCE', 'No.1, Mahalashmi Nagar, Paruthipattu, Avadi, Chennai - 600071', 'Arts'),
(504, 'UNM1437 / UNM1438', 'MAR GREGORIOS COLLEGE OF ARTS & SCIENCE', 'Block No. 8, College Road, Mogappair West, Chennai - 600037', 'Arts'),
(505, 'UNM0289', 'MEENAKSHI AMMAL ARTS AND SCIENCE COLLEGE', 'Malliankaranai \'X\' Road, Uthiramerur - 603406, Kanchipuram District', 'Arts'),
(506, 'UNM0123 / UNM0124', 'MOHAMED SATHAK COLLEGE OF ARTS AND SCIENCE', 'No.13, Medavakkam Main Road, Sholinganallur, Chennai 600 119.', 'Arts'),
(507, 'UNM0219 / UNM0220', 'NAZARETH COLLEGE OF ARTS AND SCIENCE', 'Kovilpathagai Main Road, Kannadapalayam, Avadi, Chennai - 600 062.', 'Arts'),
(508, 'UNM0205', 'NEW PRINCE SHRI BHAVANI ARTS & SCIENCE COLLEGE', 'Patel Road, Sivagami Nagar, Medavakkam, Chennai-600100.', 'Arts'),
(509, 'UNM1685', 'OM SHANTI ARTS AND SCIENCE COLLEGE', 'Nemili Village, Valarpuram Post, Sriperumbudur, Kanchipuram Dist. -602 105', 'Arts'),
(510, 'UNM1611 / UNM1612', 'PATRICIAN COLLEGE OF ARTS AND SCIENCE', 'Canal Bank Road, Gandhi Nagar, Adyar, Chennai 600 020', 'Arts'),
(511, 'UNM0223', 'PATTAMMAL ALAGESAN COLLEGE OF ARTS & SCIENCE', 'Athur, Chengalpattu - 603 101', 'Arts'),
(512, 'UNM1719', 'PERI COLLEGE OF ARTS AND SCIENCE', 'Peri Knowledge Park, Mannivakkam, Chennai-600 048', 'Arts'),
(513, 'UNM1667', 'PONNUSAMY NADAR COLLEGE OF ARTS AND SCIENCE', 'C.T.H Road, Thozhuvur, Thiruvallur District - 602 025', 'Arts'),
(514, 'UNM1729', 'PRINCE SHRI BALAJI ARTS AND SCIENCE COLLEGE', 'Medavakkam Mambakkam Road, Ponmar Village, Chennai - 600127', 'Arts'),
(515, 'UNM0161', 'PRINCE SHRI VENKATESHWARA ARTS AND SCIENCE COLLEGE', 'Venkateshwara Nagar, Gowrivakkam, Chennai - 600 073', 'Arts'),
(516, 'UNM0117 / UNM0118', 'PROF. DHANAPALAN COLLEGE OF SCIENCE & MANAGEMENT', 'Rajiv Gandhi Salai, OMR, Padur Chennai - 603103', 'Arts'),
(517, 'UNM1647', 'RATANKANWAR BHAWARLAL GOTHI JAIN COLLEGE FOR WOMEN', '#13, Sothupakkam Darkash Road, Pully Lyon, Redhills, Chennai- 600052.', 'Arts'),
(518, 'UNM1711', 'S.A. COLLEGE OF ARTS & SCIENCE', 'Poonamallee – Avadi Main Road, Thiruverkadu, Chennai-600077', 'Arts'),
(519, 'UNM1439', 'SHREE CHANDRAPRABHU JAIN COLLEGE', 'S.C.P. Jain College Road, Minjur, Chennai - 601 203', 'Arts'),
(520, 'UNM1659 / UNM1660', 'SHRI KRISHNASWAMY COLLEGE FOR WOMEN', 'AC-48, 6th Main Road, Anna Nagar, Chennai – 600 040', 'Arts'),
(521, 'UNM1621 / UNM1622', 'SHRI SHANKARLAL SUNDARBAI SHASUN JAIN COLLEGE FOR WOMEN', 'No:3, Madley Road, T.Nagar Chennai-600017', 'Arts'),
(522, 'UNM0119', 'SINDHI COLLEGE', 'No. 146, Poonamallee High Road, Numbal, Thiruverkadu, Chennai - 600077', 'Arts'),
(523, 'UNM1731', 'SMK FOMRA COLLEGE OF ARTS AND SCIENCE', 'Fomra Nagar, OMR, IT Highway, Kelembakkam, Chennai – 603103', 'Arts'),
(524, 'UNM1485 / UNM1486', 'SOKA IKEDA COLLEGE OF ARTS AND SCIENCE FOR WOMEN', 'Sethu Bhaskara Nagar, Madhanangkuppam, Chennai 600 099', 'Arts'),
(525, 'UNM1441', 'SREE MUTHUKUMARASWAMY COLLEGE', '92/1 & 9, 8Th Block, Muthamizh Nagar, Kodungaiyur, Chennai - 600 118', 'Arts'),
(526, 'UNM1713', 'SREE SASTHA ARTS AND SCIENCE COLLEGE', '’Sree Sastha Nagar”, Chennai – Bangalore Highway, Chembarambakkam, Chennai - 600123', 'Arts'),
(527, 'UNM1721', 'SRI BALAJI ARTS AND SCIENCE COLLEGE', 'Kelambakkam Main Road, Kolapakkam, Chennai - 600127', 'Arts'),
(528, 'UNM1475 / UNM1476', 'SRI KANYAKA PARAMESWARI ARTS & SCIENCE COLLEGE FOR WOMEN', 'No.1, Audiappa Street, Chennai – 600 001.', 'Arts'),
(529, 'UNM1661', 'SRI MALOLAN COLLEGE OF ARTS AND SCIENCE', 'Mocheri Road, Madurantakam, Chengalpet - 603306', 'Arts'),
(530, 'UNM0287 / UNM0288', 'SRI MUTHUKUMARAN ARTS AND SCIENCE COLLEGE', 'Chikkarayapuram, Near Mangadu, Chennai 600 069', 'Arts'),
(531, 'UNM0121 / UNM0122', 'SRI SANKARA ARTS AND SCIENCE COLLEGE', 'Enathur, Kanchipuram - 631 561', 'Arts'),
(532, 'UNM1651', 'SRI SANTHOSHI ARTS AND SCIENCE COLLEGE', 'Polampakkam, Maduranthakam, Kanchipuram - 603309', 'Arts'),
(533, 'UNM0285', 'SRIDEVI ARTS AND SCIENCE COLLEGE', 'Krishnapuram, Ponneri -601 204', 'Arts'),
(534, 'UNM0187', 'SRIRAM COLLEGE OF ARTS AND SCIENCE', 'Perumalpattu, Near Veppampatu R.S, Thiruvallur District - 602 024', 'Arts'),
(535, 'UNM1397', 'SRM ARTS AND SCIENCE COLLEGE', 'SRM Nagar, Kattankulathur, Chennai - 603 203', 'Arts'),
(536, 'UNM0299', 'SSKV COLLEGE OF ARTS & SCIENCE FOR WOMEN', 'Krishnapuram Post, Kizhambi, Kanchipuram – 631 551.', 'Arts'),
(537, 'UNM1727', 'ST. GEORGE\'S ARTS AND SCIENCE COLLEGE', 'Shenoy Nagar, Chennai -600 030', 'Arts'),
(538, 'UNM1381', 'ST. LOUIS COLLEGE FOR THE DEAF', 'Canal Bank Road, Gandhi Nagar, Adyar, Chennai - 600 020.', 'Arts'),
(539, 'UNM1473 / UNM1474', 'ST. THOMAS COLLEGE OF ARTS AND SCIENCE', 'Koyambedu, Chennai - 600 107', 'Arts'),
(540, 'UNM1681', 'ST. ANNE’S ARTS AND SCIENCE COLLEGE', 'GNT Road, Ponniammanmedu, Madavaram, Chennai – 600 110.', 'Arts'),
(541, 'UNM0131 / UNM0132', 'ST. JOSEPH\'S COLLEGE(ARTS & SCIENCE)', 'Kundrathur Main Road, Kovur, Chennai-600128', 'Arts'),
(542, 'UNM1733', 'SWAMI VIVEKANANDA ARTS & SCIENCE COLLEGE', 'Adayalampattu, Maduravoyal, Chennai - 600 095', 'Arts'),
(543, 'UNM1455 / UNM1456', 'TAGORE COLLEGE OF ARTS AND SCIENCE', 'Works Road, Chromepet, Chennai - 600 044', 'Arts'),
(544, 'UNM1715', 'THALAPATHY K VINAYAKAM WOMEN’S ARTS AND SCIENCE COLLEGE', 'C.T.H. Road Sathiranjayapuram, Tiruttani, Thiruvallur District - 631 209', 'Arts'),
(545, 'UNM0217', 'THIRUMURUGAN ARTS & SCIENCE COLLEGE FOR WOMEN', 'Kosavanpalayam, Thiruppasur, Thiruvallur - 631203.', 'Arts'),
(546, 'UNM1435 / UNM1436', 'THIRUTHANGAL NADAR COLLEGE', 'Kodungaiyur, Selavoyal, Chennai-600051', 'Arts'),
(547, 'UNM0221', 'TMG COLLEGE OF ARTS & SCIENCE', '#85, Mudicur Road, Manimangalam, Chennai-601301', 'Arts'),
(548, 'UNM1739', 'VALLAL P. T. LEE CHENGALVARAYA NAICKER ARTS AND SCIENCE COLLEGE', '5/1, General Collins Road, Choolai, Chennai-600112', 'Arts'),
(549, 'UNM1363', 'VALLIAMMAL COLLEGE FOR WOMEN', 'E-9, Annanagar East, Chennai-600 102', 'Arts'),
(550, 'UNM1453', 'VELTECH RANGA SANKU ARTS COLLEGE', 'No 42,Veltech Avadi Road,Avadi ,Chennai -600062', 'Arts'),
(551, 'UNM0293 / UNM0294', 'VIDHYA SAGAR WOMEN’S COLLEGE', 'GST Road, Vedanarayanapuram, Chengalpattu 603 111', 'Arts'),
(552, 'UNM1695', 'VISHWAKSENAA ARTS & SCIENCE OLLEGE FOR WOMEN', 'Sriperumbudhur-Thiruvallur Highways, Polivakkam, Thiruvallur - 602 002', 'Arts'),
(553, 'UNM1737', 'VIVEKANANDA VISION ARTS AND SCIENCE COLLEGE FOR WOMEN', 'Uthukottai Taluk, Thiruvallur District-602026', 'Arts'),
(554, 'UNM1745', 'MANGALAM COLLEGE OF ARTS AND SCIENCE', 'Victory Avenue, Thirumullaivoyal, Chennai - 600062', 'Arts'),
(555, 'NEW COLLEGE', 'MAGNA COLLEGE OF ARTS AND SCIENCE', 'Redhills-Tiruvallur High Road, Magaral Village, Chennai-600 055. Thiruvallur District', 'Arts'),
(556, 'NEW COLLEGE', 'JAYA WOMEN\'S COLLEGE (ARTS & SCIENCE)', 'Parivakkam Village, Poonamallee by-pass, Chennai-600 056', 'Arts'),
(557, 'NEW COLLEGE', 'T.J.S COLLEGE OF ARTS AND SCIENCE (CO-ED)', 'T.J.S. Nagar, Peruvoyal Village, Near Kavaraipettai, Gummidipoondi Taluk, Thiruvallur District -601 206', 'Arts'),
(558, '101', 'Arignar Anna Government Arts College,', 'Arignar Anna Govt. Arts College, Vadachennimalai, Attur - 636 121, Salem Dt', 'Arts'),
(559, '102', 'J.K.K.Nataraja College of Arts & Science,', 'Natarajapuram, NH-544 (Salem to Coimbatore), Kumarapalayam - 638183, Near Erode, Namakkal', 'Arts'),
(560, '103', 'Bharathiyar Arts & Science College for Women,', 'Deviyakurichi, Thalaivasal[T.K], Salem [D.T]- 636 112.', 'Arts'),
(561, '104', 'Government Arts College for Women,', 'Salem -8', 'Arts'),
(562, '105', 'Government Arts College,', 'Near Collectorate , Salem Main Road, Dharmapuri-636705', 'Arts'),
(563, '106', 'Government Arts College (Autonomous),', 'CHERRY ROAD, MARAVANERI, \r\n SALEM 7', 'Arts'),
(564, '107', 'Muthu Mase Arts & Science College,', 'Muthu Nagar, Harur 636 903, Dharmapuri', 'Arts'),
(565, '108', 'K.S. Rangasamy College of Arts and Science (Autonomous),', 'K.S.R Kalvi Nagar,Thokkavadi, Kuchipalayam Post,Tiruchengode - 637215, Namakkal District, Tamil Nadu, India', 'Arts'),
(566, '109', 'Kamadhenu College of Arts & Science,', 'A.H.ROAD, DHARMAPURI. PIN - 636705', 'Arts'),
(567, '110', 'Mahendra Arts & Science College (Autonomous),', 'Kalippatti (PO),\r\n Tiruchengode (TK),Namakkal (DT)637 501.', 'Arts'),
(568, '111', 'MGR College,', 'Dr M.G.R Nagar, Hosur -635 130, Krishnagiri (Dt) Tamilnadu', 'Arts'),
(569, '112', 'Pee Gee College of Arts & Science,', 'Periyanahalli, Dharmapuri - 635205', 'Arts'),
(570, '113', 'Salem Sowdeswari College for Women,', 'Kondalampatty By-pass, Salem -10', 'Arts'),
(571, '114', 'Selvam Arts & Science College (Autonomous),', 'Salem Road(NH-44), Ponnusamy Nagar, Pappinaickenpatti(PO),Namakkal -637 003.', 'Arts'),
(572, '115', 'Sri Sarada College for Women', 'Fairlands,\r\n Salem -16.', 'Arts'),
(573, '116', 'Subramaniam Arts & Science College,', 'NAMAKKAL \r\n MAIN ROAD,\r\n MOHANUR,\r\n NAMAKKAL-637015', 'Arts'),
(574, '117', 'Trinity College for Women,', 'Trinity Nagar, Mohanur Road, Namakkal -637003', 'Arts'),
(575, '118', 'Vivekanandha College of Arts & Science for Women', 'Elayampalayam,Tiruchengode (Tk), Namakkal (Dt) - 637205,', 'Arts'),
(576, '119', 'Arignar Anna Government Arts College,', 'Arignar Anna Govt.Arts College, Saniyasikaradu(PO), Namakkal-637002', 'Arts'),
(577, '120', 'AVS College of Arts & Science,', 'AVS College of Arts & Science (Autonomous), Attur Main Road, Ramalingapuram, Salem - 636 106', 'Arts'),
(578, '121', 'Government Arts and Science College for Women', 'Bargur -635104, Krishnagiri (dt)', 'Arts'),
(579, '122', 'Government Arts College for Women,', 'Wahab Nagar, Rayakottai Road, Krishnagiri - 635 002.', 'Arts'),
(580, '123', 'Muthayammal College of Arts & Science (Autonomous),', 'Vengayapalayam, Kakkaveri (po), Rasipuram (Tk), Namakkal (Dt). - 637408', 'Arts'),
(581, '124', 'NKR Government Arts College for Women,', 'Trichy Main Road, Namakkal - 637 001.', 'Arts'),
(582, '125', 'PGP College of Arts & Science,', 'NH-44, Namakkal Karur Main Road, Namakkal -637207', 'Arts'),
(583, '126', 'PMP College of Arts & Sience,', 'Thokkampatti, Dharmapuri -636705', 'Arts'),
(584, '127', 'Sengunthar Arts & Science College,', 'The Principal,\r\n Sengunthar Arts and Science College,\r\n Tiruchengode.\r\n Pin code: 637 205', 'Arts'),
(585, '128', 'Bon Secours Arts & Science College for Women,', 'Gopalapuram, Sowthapuram, Erode, Namakkal', 'Arts'),
(586, '129', 'Sri Vidhya Mandir Arts & Science College (Autonomous),', 'Vignesh Nagar , Katteri, Uthagarai, Krishnagiri 636902', 'Arts'),
(587, '130', 'Thiruvalluvar Government Arts College,', 'Rasipuram-637401', 'Arts'),
(588, '131', 'Vysya College,', 'Masinackenpatty, Salem-636103', 'Arts'),
(589, '132', 'Jairam Arts & Science College,', 'Chinnathirupathy, Salem -8', 'Arts'),
(590, '133', 'Governmant Arts College for Men,', 'Chennai Bye Pass\r\n Krishnagiri-1.', 'Arts'),
(591, '135', 'Kandaswami Kandar\'s College,', 'Velur, Namakkal -638181', 'Arts'),
(592, '137', 'Sri Balamurugan College of Arts &Science,', 'Sathappadi (Po),\r\n Mecheri (Via),\r\n Mettur (Tk)\r\n Salem-636451.', 'Arts'),
(593, '138', 'Sri Ganesh College of Arts & Science ,', 'Kamaraj Nagar Colony,Ammapet, Salem - 14', 'Arts'),
(594, '140', 'Shri Sakthikailassh Women\'s College', 'Military Road Ammapet, Salem', 'Arts'),
(595, '141', 'Vivekanandha Arts & Science College (Women)', 'Veerachipalayam, sangari west, sangagiri - 637303', 'Arts'),
(596, '142', 'Paavendhar College of Arts & Science,', 'Manivilunthan South post, Attur 636121', 'Arts'),
(597, '143', 'Padmavani Arts & Science College for Women,', 'Opposite to Periyar University, Salem-636 011.', 'Arts'),
(598, '144', 'Vivekanandha College for Women,', 'Unjanai \r\n Tiruchengode (TK)\r\n  Namakkal (Dt) 637205', 'Arts'),
(599, '145', 'Gem Gates Arts & Science College,', 'Attur-Salem National Highways, Kothampadi, Attur, Salem-636109', 'Arts'),
(600, '146', 'AET College,', 'Narasingapuram, Attur(TK),Salem(DT),636108', 'Arts'),
(601, '148', 'SSM College of Arts & Science,', 'NH 47, Salem Main Road, Komarapalayam - 638183, Namakkal', 'Arts'),
(602, '150', 'King Arts & Science College (Co-Ed),', 'Nallur N.Pudupatty Postst, Nallur , Namakkal - 637 020.', 'Arts'),
(603, '151', 'Arignar Anna College (Arts & Science),', 'Polupalli Billanakuppam Post, Krishnagiri (D.T) -635115', 'Arts'),
(604, '152', 'St.Joseph\'s College of Arts & Science for Women,', 'Sipcot, Mookandapalli, Hosur - 635126.', 'Arts'),
(605, '153', 'Anbu Arts & Science College,', 'M.G.R NAGAR,PALLIPALAYAM ROAD KOMARAPALAYAM, NAMAKKAL -638181', 'Arts'),
(606, '154', 'Government Arts & Science College, Mettur - 636401, Salem', 'Mettur - 636401, Salem District.', 'Arts'),
(607, '155', 'Don Bosco College, Pappanahalli,', '2/257, Athiyaman Bypass Road,\r\n Sogathur Post,\r\n Dharmapuri District.636809,', 'Arts'),
(608, '156', 'Pachamuthu Arts & Science College for Women', '2/275 Krishnagiri MainRoad,Krishnagiri Main Road, Old Dharmapuri, A.Jettihalli, Dharmapuri - 636701', 'Arts'),
(609, '157', 'Vishwa Bharathi Arts & Science College', ', M.Thoppampatti, Morappur Post, Harur - 635 305, Dharmapuri Dt', 'Arts'),
(610, '158', 'Sri Sarada Nicketan College of Arts & Science for Women,', 'Dakshineswaram, Kanavaipudhur (po), Kanavaipudur Po, Omalur Taulk, Salem - 636 354', 'Arts'),
(611, '159', 'Morappur Kongu Arts & Science College,', 'Vengiyampatti Morappur-635305, Harur Tk, DharmapuriDt.', 'Arts'),
(612, '160', 'ERK Arts & Science College,', 'Erumiyampati (Vill),Kokkarapatti (Po),Pappireddipatti (Tk),Dharmapuri (Dt),PIN : 636 905,', 'Arts'),
(613, '161', 'Salem Kongunadu Arts & Science College,', 'Bangalore Main Road, Mamangam, Salem-636302', 'Arts'),
(614, '162', 'Salem Christian College of Arts & Science,', 'Poovanoor Post, Paruthikadu, Salem 636 122', 'Arts'),
(615, '163', 'Gonzaga College of Arts & Science for Women,', 'Kathanpallam, Elathagiri Post, Krishnagiri - 635 108.', 'Arts'),
(616, '164', 'KSR College of Arts and Science for Women,', 'K.S.R Kalvi Nagar, Thokkavadi (PO), Tiruchengode (TK), Namakkal (DT) - 637 215', 'Arts'),
(617, '165', 'Sri Vijay Vidyalaya College of Arts & Science,', 'Nallampalli(Village & Taluk), Dharmapuri-6368.7', 'Arts'),
(618, '166', 'Sri Vidya Mandir College of Arts & Science,', 'Vivekanandhar Nagar, Periakalam, Neikkarapatti Post, Salem - 636 010.', 'Arts'),
(619, '167', 'Siri PSG Arts & Science College for Women,', 'Sankari, Salem - 637 301.', 'Arts'),
(620, '168', 'Pavai Arts and Science College for Women,', 'NH - 7, Anaipalayam, Rasipuram - 637 401, Namakkal .', 'Arts'),
(621, '169', 'Sivagamiammal College of Arts & Science,', 'Kattinayanapalli Village & Post Krishnagiri-635 001', 'Arts'),
(622, '170', 'Annai Terasa Arts and Science College,', '242/2, Sendarappatty Main Road, Thammampatti, Salem - 636113.', 'Arts'),
(623, '171', 'Government Arts & Science College,', 'MAMARATHUPALLAM VILLAGE, BEDRAHALLI POST, PENNAGARAM TK., DHARMAPURI DT.', 'Arts'),
(624, '172', 'Annai Arts & Science College,', 'Nambipatti, Harur - 636 903, Pappireddipatti Taluk,Dharmapuri', 'Arts'),
(625, '173', 'Kailash Women\'s College,', 'Tharamangalam\r\n Nangavalli Main Road,\r\n Periyasoragai(P.o), \r\n Nangavalli - 636502', 'Arts'),
(626, '174', 'Jai Shree Venkatesha College of Arts & Science,', 'Pappinaickanahhalli Village, Aattukarampatti, Sogathur Post, Pennagaram Main Road Dharmapuri - 636 809.', 'Arts'),
(627, '175', 'Minerva College of Arts and Science,', 'Kattampatti, Jalakantapuram, Mettur(Taulk), Salem - 636 501', 'Arts'),
(628, '176', 'Laxminarayana Arts & Science College for Women,', 'Thadangam Village & Panchayat, Thokkampatty Post, Dharmapuri. - 636 705', 'Arts'),
(629, '177', 'Vidhyaa Arts and Science College,', 'Moolapathai,\r\n Koranampatty(PO)Edappadi(TK),\r\n Salem-637102.', 'Arts'),
(630, '178', 'Sri Venkateswara College of Arts & Science,', 'Papinaikanahalli, Sogathur (Po), Dharmapuri-9', 'Arts'),
(631, '179', 'Government Arts & Science College,', 'Morappur Road, Harur-636 903. Dharmapuri-Dt.', 'Arts'),
(632, '180', 'Government Arts & Science College,', 'Pappireddipatti (TK) & (PO) - 636 905,\r\n Dharmapuri - (Dt.)', 'Arts'),
(633, '182', 'Royal College of Arts and Science,', 'Masilapalayam, Mettur Dam - 636452, Salem', 'Arts'),
(634, '183', 'Government Arts & Science College,', 'Reddipatti (Po) Thangayur (Vill) Konameri,Idappadi - 637 102', 'Arts'),
(635, '184', 'Shevaroys College of Arts & Science,', 'Shevaroys College of Arts and Sciecne, Vazhavandhi, Yercaud - 636601.', 'Arts'),
(636, '185', 'Adhiyaman Arts & Science College for Women,', 'Srinivasa Nagar, Uthangarai - 635 207, Krishnagiri Dt', 'Arts'),
(637, '186', 'Krishna Arts & Science College,', 'Kattinayanapalli, Near DIET, Krishnagiri-635001', 'Arts'),
(638, '187', 'Government Arts and Science College,', 'OLAPALAYAM ROAD, KOMARAPALAYAM, NAMAKKAL DT -638183', 'Arts'),
(639, '188', 'Government Arts and Science College,', 'Midukarapplli, Mathigiri Post, Hosur- 635 109, Krishnagiri Dt', 'Arts'),
(640, '189', 'Government Arts and Science College for Women,', 'Karimanagalam - 635111, Dharmapuri District.', 'Arts'),
(641, '190', 'Om Muruga College of Arts & Science,', 'Singiripatti, Neethipuram road, Kolathur - 636 303, Mettur Taulk, Salem', 'Arts'),
(642, '191', 'Srii Jayajothi College of Arts & Science for Women, .', 'Jalakandapuram Main Road, Tharamangalam - 636 502, Salem', 'Arts'),
(643, '192', 'Muthayammal Memorial College of Arts & Science (Co-Education),', 'Kakkaveri Post, Rasipuram - 637 408, Namakkal District.', 'Arts'),
(644, '193', 'Kavitha\'s College of Arts Science (Co-Ed),', 'Vaiyappamalai, Tiruchengode (TK), Namakkal (DT). Pin: 637 216', 'Arts'),
(645, '194', 'Gandhi College of Arts & Science for Women,', 'Nallur Kandampalayam,\r\n Paramathi Velur (Tk),Namakkal (Dt) - 637203', 'Arts'),
(646, '195', 'Sakthikailash Women\'s College,', 'Dharmapuri - Krishnagiri NH road, Matalampatti, Dharmapuri - 635205', 'Arts'),
(647, '196', 'Sri Kailash Women\'s College,', 'PERIYERI VILLAGE,\r\n V.KOOTROAD, \r\n AATUPPANAI(PO),\r\n THALAIVASAL,\r\n SALEM - 636 112.', 'Arts'),
(648, '197', 'Jayam Arts and Science College, (Co-Ed),', 'Nallanur\r\n Pennagaram Main Road Dharmapuri -636813', 'Arts'),
(649, '198', 'Maisurii Women\'s College of Arts and Science,', 'Kanakagiri Village, Kakapalayam(Po), Sankari(Taulk) Salem Dt.', 'Arts'),
(650, '199', 'Loyola College of Arts &Scinece (Co-education)', 'Mettala, Ayilpatty - Post, Rasipuram - Tk., Namakkal - Dt. 636202', 'Arts'),
(651, '200', 'P.S.A. College of Arts & Science (Co-Ed),', 'Naikanahalli Village, Solaikottai Dharmapuri – 636 704.', 'Arts'),
(652, '201', 'Shri Arunachala College of Arts and Science (Co.Ed),', 'Madhampatti village, Dhandukaranahalli Post, Palacode - 636 808, Dharmapuri District.', 'Arts'),
(653, '202', 'Government Arts & Science College,', 'Uthirakidikaval, Thethukkadu(Po), Sendamangalam(Tk), Namakkal(Dt) - 637404', 'Arts'),
(654, '203', 'Bharat Ratna Purachi Thalaivar Dr. MGR Government Arts & Science College, (Co-Ed)', 'Sugarmill Campus, Jerthalav(post), Palacode- 636 808', 'Arts'),
(655, '204', 'Vaigai Arts and Science Women\'s College,', 'Muthampatty, Valapady, Salem - 636 111.', 'Arts'),
(656, '205', 'Kavery Arts and Science College', 'M.kalipatti, Mecheri', 'Arts'),
(657, '206', 'Sona College of Arts & Science(Co.Ed),', 'Junction main Road, Salem -636005', 'Arts'),
(658, '207', 'Unique Arts and Science College (Co.Ed),', 'Karappattu , Uthangarai-635 207, Krishnagiri', 'Arts'),
(659, '208', 'Excel College for Commerce and Science,', 'Pallakapalayam Village, Komarapalayam - 637 303, Namakkal District.', 'Arts'),
(660, '209', 'Sri Vidya Kamachi Arts and Science College(Women)', 'Amaram Village, Mecheri, Mettur - 636 451, Salem District.', 'Arts'),
(661, '210', 'Sri Moogambigai Arts & Science College (Women),', 'Mahendramangalam panchayat, Thimmarayanahalli Village, Palacode - 636 805 Dharmapuri Dt', 'Arts'),
(662, '211', 'Meenakshi Arts and Science College (Co-Ed),', 'Sunjalnatham, Eriyur - 636 810, Pennagaram, Dharmapuri Dt.', 'Arts'),
(663, '212', 'P.D.R.T.Padmavathi Arts and Science College (Women),', 'Sekkampatty, Harur - 636 902 Dharmapuri District.', 'Arts'),
(664, '213', 'Jayarani Arts and Science College for Women,', 'Nethimedu, Salem - 636 002', 'Arts'),
(665, '214', 'AVS Arts & Science College ( Co-education),', 'Chikkanampatti ,Opp. to Salem Airport,\r\n Omalur,Salem-636309', 'Arts'),
(666, '215', 'VidyaaVikas College of Arts and Science (Co-Ed),', 'Varahoorampatti Villege, Koottapalli Post, Tiruchengode Tk, Namakkal Dt -637214', 'Arts'),
(667, '217', 'SVST Kongunad Arts & Science College (Co.Ed)', 'Ramadevam Village, Paramathy Velur - 637203, Namakkal District.', 'Arts'),
(668, '218', 'Thangavel Women\'s Arts & Science College,', 'ATTUR MAIN ROAD, PARAGON COMPANY (OPP), KARUMAPURAM, SALEM - 636106', 'Arts'),
(669, '219', 'Sri Vijay Vidyalaya College of Arts & Science (Co.Ed),', 'Madepalli, Bargur - 635 104, Krishnagiri District.', 'Arts'),
(670, '220', 'AES College of Arts & Science (Co.Ed) ,', 'Periyapanamutlu, Anchoor(Post), Bargur - 635 203, Krishnagiri Dt', 'Arts'),
(671, '221', 'St.Joseph\'s College of Arts & Science for Women,', 'Pagalpatty, Omalur - 636 304, Salem Dt', 'Arts'),
(672, '222', 'Arulmigu Arthanareeswarar Arts & ScienceCollege,', 'Sithalanthur(P.O), Tiruchengodu - 637 211, Namakkal District.', 'Arts'),
(673, '223', 'Government Arts & Science College (Co-Ed),', 'Eriyur - 636 810, Pennagaram (Tk),Dharmapuri', 'Arts'),
(674, '224', 'Government Arts and Science College,', 'Thally - 635 118, Denkanikottai Taulk, Krishnagir Dt', 'Arts'),
(675, '201', 'Arignar Anna Government Arts College', 'Cheyyar - 604 407.', 'Arts'),
(676, '202', 'Arunkrishna College of Arts and Science', 'Valaiyampattu Village Road, Chengam Post - 606 701, Tiruvannamalai District.', 'Arts'),
(677, '203', 'Dr. M.G.R.Chockalingam Arts College', 'Arcot Road, ACS Nagar (Irumbedu), Arni Taluk - 632 317, Tiruvannamalai District.', 'Arts'),
(678, '204', 'Kalaignar Karunanidhi Government Arts College', 'Tiruvannamalai - 606 603.', 'Arts'),
(679, '205', 'Indo-American College, Perungalatur', 'Perungalatur, Cheyyar - 604 407, Tiruvannamalai District.', 'Arts'),
(680, '206', 'Kamban College of Arts and Science for Women', 'Mathur, Tiruvannamalai - 606 603.', 'Arts'),
(681, '207', 'King Nandhivarman College of Arts and Science', 'Thellar - 604 406, Tiruvannamalai District.', 'Arts'),
(682, '209', 'Shanmuga Industries Arts and Science College', 'Manalurpet Road, Tiruvannamalai - 606 603.', 'Arts'),
(683, '210', 'Sri Akilandeswari Women’s College', 'Tindivanam Highway, Vandavasi - 604 408.', 'Arts'),
(684, '211', 'Idhaya College of Arts and Science for Women', 'Nariandhal, Pudupalayam, Chengam Taluk, Tiruvannamalai District - 606 705.', 'Arts'),
(685, '226', 'Indian Arts and Science College', 'Vellore Main Road, Kariyandal-Kondam, Tiruvanamalai - 606 802.', 'Arts'),
(686, '229', 'Sri Bharathi Arts and Science College (Co-Ed.)', 'Kunnathur, Arni Taluk - 632 314, Tiruvannamalai District.', 'Arts'),
(687, '230', 'Loyola College, Olaipadi Village', 'Olaipadi Village, Vettavalam, Thirvannamalai District-606 754.', 'Arts'),
(688, '231', 'Sun Arts and Science College', 'Keeranur Village, Rajapalayam Post-606 755, Tiruvannamalai District.', 'Arts'),
(689, '232', 'Dhivya Arts and Science College', 'Chetpet, Polur Taluk, Tiruvannamalai District-606 801.', 'Arts'),
(690, '233', 'Al-Ameen Arts and Science College', 'Somasipadi, Tiruvannamalai District-606 611.', 'Arts'),
(691, '236', 'Aruna Vidhya Arts and Science College (Co-Ed.)', 'Kannakurukai Village, Chengam Taluk-606 704, Tiruvannamalai.', 'Arts'),
(692, '237', 'Government Arts and Science College', 'Thennangur Village, Vandavasi Taluk, Tiruvannamalai District-604 408.', 'Arts'),
(693, '238', 'Sathyam Arts and Science College (Co-Ed.)', 'Sundakkapalayam Village, Kariyamangalam Post, Chengam Taluk-606 709, Tiruvannamalai District.', 'Arts'),
(694, '239', 'Arunesha College of Arts and Science for Women', 'By Pass Road, Kilnatchipet & Post,Tiruvannamalai-606 611.', 'Arts'),
(695, '240', 'Wisdom Women\'s College of Arts and Science', 'Annakkavoor-604 401, Cheyyar Taluk, Tiruvannamalai District.', 'Arts'),
(696, '241', 'Aravindar Arts and Science College', 'Thenpallipattu Village, Kalasapakkam, Tiruvannamalai District-606 751.', 'Arts'),
(697, '242', 'Anand Arts and Science College (Co-Ed)', 'Nalalpallam Mottur Village, Olakapadi, Thandarmpattu Taluk, Thiruvannmalai District', 'Arts'),
(698, '243', 'Bharath Vidhya Mandhir Arts and Science College \r\n', 'Kilravanthavadi Village, Thandrampet Taluk, Thiruvannamalai District-606 707.\r\n', 'Arts'),
(699, '244', 'Sishya Arts and Science College', 'Su.Valavetti Village & Post, T.V.Malai', 'Arts'),
(700, '245', 'Karan Arts and Science College (Co-Ed) Su. ', 'Su. Kilnachipattu, Thenmathur, Thiruvannamalai District', 'Arts'),
(701, '246', 'Thiruvalluvar Arts and Science College (Co-Ed)', 'Ponnur Hills, Vandhavasi Taluk, Tiruvannamalai - 604 505', 'Arts'),
(702, '247', 'Chezhian Arts and Science College for Women', 'Thenpallipattu Village, Kalasapakkam Taluk, Tiruvannamalai - 606 751', 'Arts'),
(703, '248', 'ANR College of Arts and Science', 'Vadamavandal Village, Vembakkam Taluk, Tiruvannamalai District - 604 401', 'Arts'),
(704, '249', 'S.S.S. College for Women, Agaaram Village', 'Agaaram Village, Arni - 632 316, Tiruvannamalai District', 'Arts'),
(705, '301', 'Adhiparasakthi College of Arts and Science (Autonomous)', 'G.B. Nagar, Kalavai - 632 506, Ranipet District.', 'Arts'),
(706, '302', 'Arakkonam Arts and Science College', 'MRF Nagar, Ichiputhur, Arakkonam - 631 003.', 'Arts'),
(707, '303', 'Arcot Sri Mahalakshmi Women’s College', 'Arcot-Arni Main Road, Villapakkam Post - 632 521, Ranipet District.', 'Arts'),
(708, '304', 'Arignar Anna Government Arts College for Women', 'Walajapet - 632 513.', 'Arts'),
(709, '305', 'Auxilium College (Autonomous)', 'Gandhinagar, Vellore - 632 006.', 'Arts'),
(710, '306', 'C. Abdul Hakeem College (Autonomous)', 'Hakeem Nagar, Melvisharam-632 509, Ranipet District.', 'Arts'),
(711, '307', 'Darul Uloom Latheefia Arabic College', '21/25, Hazarath Makken, Vellore - 632 004.', 'Arts'),
(712, '308', 'D.K.M. College for Women (Autonomous)', 'Sainathapuram, Vellore - 632 001.', 'Arts'),
(713, '310', 'Government Thirumagal Mills College', 'Gudiyattam - 632 604.', 'Arts'),
(714, '311', 'Islamiah College (Autonomous)', 'New Town, Vaniyambadi - 635 752.', 'Arts'),
(715, '312', 'Islamiah Women’s College', '10, By-Pass Road, New Town, Vaniyambadi - 635 752.', 'Arts'),
(716, '313', 'Jamia Darussalam Arabic College', 'Oomerabad - 635 808, Tirupattur District.', 'Arts'),
(717, '314', 'Jothi’s College, 113', '113, Vallimalai Road, Katpadi, Vellore - 632 007.', 'Arts'),
(718, '315', 'K.M.G. College of Arts and Science', 'R.S. Road, Ammananguppam, Gudiyattam - 632 803, Vellore District.', 'Arts'),
(719, '317', 'Marappan Lakshmiammal Arts and Science College (Co-Ed.)', 'Kurumberi - 635 652, Tirupattur Taluk, Tirupattur District.', 'Arts'),
(720, '318', 'Marudhar Kesari Jain College for Women', 'Chinnakallupalli, Vaniyambadi - 635 751.', 'Arts'),
(721, '319', 'Mazharul Uloom College', 'Ambur - 635 802, Tirupattur District.', 'Arts'),
(722, '320', 'Mercury College of Arts and Science', 'Thandalam, Kumminipet Post, Arakkonam - 631 003.', 'Arts'),
(723, '321', 'Muthurangam Govt. Arts College (Autonomous)', 'Vellore - 632 002.', 'Arts'),
(724, '322', 'Sacred Heart College (Autonomous)', 'Tirupattur - 635 601, Tirupattur District.', 'Arts'),
(725, '323', 'Voorhees College', 'Vellore - 632 001.', 'Arts'),
(726, '324', 'Tirupattur Arts and Science College', 'Vaniyambadi Road, Tirupattur - 635 601.', 'Arts'),
(727, '327', 'S.S.S. College of Arts, Science and Management', '15, By-Pass Road, Arcot - 632 503, Ranipet District.', 'Arts'),
(728, '328', 'Kaveripakkam College of Arts and Science', 'Thiruparkadal Road, Athipattu Panchayat, Kaveripakkam - 632 508, Ranipet District.', 'Arts'),
(729, '345', 'Sri Bharathivelu Arts and Science College', 'Kalpattu Village, Sholinghur - 631 102, Walaja Taluk, Ranipet District.', 'Arts'),
(730, '346', 'M.M.E.S. Women’s Arts and Science College', 'Hakeem Nagar, Melvisharam - 632 509, Walaja Taluk, Ranipet District.', 'Arts'),
(731, '351', 'Arcot Sri Mahalakshmi Women’s Institute of Management and Computer Application', 'Villapakkam Post - 632 521, Ranipet District.', 'Arts'),
(732, '352', 'Holy Cross Arts and Science College for Women', 'Molakarampatti Road, Tirupattur-635 602, Tirupattur District.', 'Arts'),
(733, '353', 'Vanavil Arts and Science College', 'Sorakkayalnatham Village, Tirupattur Taluk, Tirupattur District.', 'Arts'),
(734, '354', 'Imayam Arts and Science College', 'Kanavaipudur Village, Govindapuram, Vaniyambadi Taluk, Tirupattur District-635 752.', 'Arts'),
(735, '355', 'Government Arts and Science College', 'Kajalnaickenpatti, Tirupattur-635 901, Tirupattur District.', 'Arts'),
(736, '356', 'Government Arts and Science College', 'Near Sayanapuram, Attupakkam, Ranipet – 631 051', 'Arts'),
(737, '357', 'Sathya College of Arts and Science (Co-Ed)', 'Margabandhu Nagar, Rasathupuram, Melvisharam, Walaja Taluk, Ranipet District-632 509.', 'Arts'),
(738, '358', 'Don Bosco College (Co-Ed)', 'Guezou Nagar, Athanavur, Tirupattur Taluk, Yelagiri Hills-635 853, Tirupattur District.', 'Arts'),
(739, '361', 'Yelageri Arts and Science College (Co-Ed)', 'Krishnapuram Village, Tirupattur Taluk, Tirupattur District-635 654.', 'Arts'),
(740, '362', 'Ranippettai Arts Science and Management College (Co-Ed)', 'Thenkadappanthangal, Walaja Taluk, Ranipet District-632513.', 'Arts'),
(741, '363', 'Sree Abiraami Arts and Science College for Women', 'Kizhalathur Village, Chennarayanapalli, Sethuvandai Post, Katpadi Taluk, Gudiyattam, Vellore District', 'Arts'),
(742, '364', 'Puratchi Thalaivar Dr.M.G.R. Government Arts and Science College', 'Madhanur, Tirupattur District - 635 804\r\n', 'Arts'),
(743, '365', 'D.L.R. Arts and Science College', 'Arcot Road, Villapakkam Ranipet District', 'Arts'),
(744, '366', 'Merit Haji Ismail Sahib Arts and Science College (Men)', 'Kondamalli Village, Pernambut Taluk, Vellore District', 'Arts'),
(745, '367', 'Global College of Arts and Science for Women', 'Veppur Village, Walaja Taluk, Ranipet District\r\n', 'Arts'),
(746, '368', 'Government Arts and Science College (Co-Ed)\r\n', 'Jambukulam, Sholinghur, Ranipet District.\r\n', 'Arts'),
(747, '369', 'Sri Bharathi Velu Saraswathi Arts and Science College (Women)', 'Jambukulam Road, Melvenkatapuram Village, Katrampakkam Post - 632 501, Sholinghur', 'Arts'),
(748, '370', 'Government Arts and Science College (Co-Ed)', 'Serkkadu, Vellore District', 'Arts'),
(749, '371', 'Sri Aandal Arts and Science College for Women', 'Kilmurungai Village, Ambur Taluk, Tirupattur - 635 812', 'Arts'),
(750, '', 'Ambari Arts and Science College for Women', 'Veterinary Hospital Road, Thanigaipolur Village, Arakkonam Taluk, Ranipet District - 631 003', 'Arts'),
(751, '', 'S.K.P. Arts and Science College (Co-Ed)', 'Chinnakangiyanur Village, Tiruvannamalai - 606 611', 'Arts'),
(752, '', 'Government Arts and Science College', 'Natrampalli – 635 854 ', 'Arts'),
(753, '10101', 'Menakshi Ramasamy College of Education,', 'M.R.Kavi Nagar, Thathanur - 621 804, Udayarpalayam Taluk, Ariyalur District.', 'Arts'),
(754, '10102', 'Minakshe Ramasami College of Education', 'M.R. Kavi Nagar, \r\n Thathanur - 621 804,\r\n Udayarpalayam Taluk, \r\n Ariyalur District', 'Arts'),
(755, '10103', 'S.R.M. College of Education', 'Sri Ramakrishna Nagar, \r\n Kurumanchavadi, Sendurai Road, \r\n Ariyalur District', 'Arts'),
(756, '10104', 'Sri Lakshmi College of Education', 'K.K.C Kalvi Valagam,\r\n T.Palur Road,\r\n Jayankondam-621 802,\r\n Ariyalur District.', 'Arts'),
(757, '10105', 'Sri Sarswathi College of Education', 'Thularankurichi, Udayarpalayam(Po & TK), Ariyalur Dt- 621 804.', 'Arts'),
(758, '10106', 'Vinayaga Education College', 'Vinayaganagar, \r\n Karuppur, Keelapuluvur Post, \r\n Ariyalur District – 621 707.', 'Arts'),
(759, '10107', 'Modern College of Education', 'Viruthachalam Road, \r\n Mahimaipuram, \r\n Jayankondam, \r\n Ariyalur District – 621 802.', 'Arts'),
(760, '10108', 'Merit College of Education', 'No.630/1B3, Zemeen, Thatthanur Post, Ariyalur District – 621 804', 'Arts'),
(761, '10109', 'K.Indira College of Education', 'Velayutha Nagar, Jayankondam Post, Ariyalur District – 621 802', 'Arts'),
(762, '10110', 'Sri Sowbackiya College of Education', ', Andimadam,Udayarapalayam, Ariyalur District – 621 801', 'Arts'),
(763, '10202', 'Gojan College of Teacher Education,', 'Edapalayam, Alamathi, \r\n Redhills, Thiruvellore Road,\r\n Chennai – 600 052.', 'Arts'),
(764, '10203', 'Institute of Advanced Study of Education', '(Autonomous) Saidapet, \r\n Chennai – 600 015.', 'Arts'),
(765, '10204', 'Jaya College of Education', 'Annai Indira Nagar, \r\n Thiruninravur, \r\n Thiruvallur – 602 024.', 'Arts'),
(766, '10205', 'K.J.N. Educational College', '90 Ushaa Garden, Kannigaipair Post, Uthukottai Taluk, \r\n Thiruvallur Dist - 601 102', 'Arts'),
(767, '10206', 'Lady Willingdon Institute of Advanced Study In Education, (Autonomous)', 'Triplicane, Chennai – 600 005.', 'Arts'),
(768, '10207', 'Loyola College of Education', 'Loyola College Campus, Sterling Road, Nungambakkam, \r\n Chennai – 600 034.', 'Arts'),
(769, '10208', 'Madha College of Education', 'Kundrathur, Kanchippuram - 69.', 'Arts'),
(770, '10209', 'MEASI College of Education', 'No. 2, Domellows Road, Chennai - 600 112.', 'Arts'),
(771, '10210', 'Meston College of Education, (Autonomous)', 'Royapettah, Chennai – 600 014.', 'Arts'),
(772, '10211', 'N.K.T.National College of Education for Women, (Autonomous)', 'Triplicane, Chennai – 600 005.', 'Arts'),
(773, '10212', 'National Institute for the Visually\r\n Handicapped Regional Centre, (Spl. Edu)', '522, Trunk Road, Poonamallee, \r\n Thiruvallur – 600 056', 'Arts'),
(774, '10213', 'Nazareth College of Education for Women,', 'Kovilpathagai, Avadi, Thiruvallur - 600 062', 'Arts'),
(775, '10214', 'Our Lady College of Education,', 'Our Lady Nagar, Maduravoyal, Chennai- 600 095.', 'Arts'),
(776, '10215', 'Ponnusamy Nadar College of Education,', 'TNHB Quarters, Ayappakkam,\r\n Ambattur, Thiruvallur – 600 077.', 'Arts'),
(777, '10216', 'Prof. S.A.College of Education', 'Sardar Petel Road, IT Highway (Old Mahabalipuram Road), Chemencherry, \r\n Chennai – 600 119.', 'Arts'),
(778, '10217', 'Sathyasai B.Ed College', 'Sathyasai B.Ed College, Rajaji St, Kamarajar Nagar, Avadi, Chennai- 71.', 'Arts'),
(779, '10218', 'Sri Muthukumaran College of Education', 'Chikkarayapuram Village,\r\n Kundrathur Main Road,\r\n Near Mangadu, Chennai 600 069.', 'Arts'),
(780, '10219', 'Sivanthi College of Education', 'Sivanthi Garden, \r\n Andarkuppam, Kundrathur, \r\n Kanchippuram – 600 069', 'Arts'),
(781, '10220', 'St.Christopher’s College of Education, (Autonomous)', 'Vepery, Chennai – 600 007.', 'Arts'),
(782, '10222', 'Stella Matutina College of Education, (Autonomous)', 'Kamaraj Salai, Ashok Nagar, \r\n Chennai – 600 083.', 'Arts'),
(783, '10224', 'Jayalakshmi Narayanaswami College of Education', 'Bajanai Kovil street, Pallipattu, Tharamani (Post), Thiruvallur – 600 113', 'Arts'),
(784, '10225', 'CSI Bishop Newbigin College of Education', '109, Dr.Radhakrishnan Road, Mylapore, Chennai – 600 004', 'Arts'),
(785, '10226', 'National Institute for Empowerment of Persons with Multiple Disabilities (NIEPMD)', 'East Coast Road, Muthukadu, Kovalam Post, Chennai - 603 112.', 'Arts'),
(786, '10227', '', 'Dr.Rajalakshmi College of Education, Palavedu Village, Mittanamalli Post, Avadi, Chennai- 600 055.', 'Arts'),
(787, '10228', 'Dr.M.G.R Home & Hr.Sec.School for the Speech & Hearing Impaired', 'M.G.R Garden Ramavaram, Chennai - 600 089', 'Arts'),
(788, '10229', 'Netrodaya College of Special Education', 'Phase II, Nolambur, \r\n Magappair, Chennai - 600 037', 'Arts'),
(789, '10230', 'Vidya Sagar (formerly the Spastice of India)', 'No.1, Ranjith Road, Kotturpuram, \r\n Chennai - 600085', 'Arts'),
(790, '10301', 'A.G. College of Education', 'Avinashipalayam Post, \r\n Koduvai Via, Tirupur Taluk, \r\n Tirupur -638 660.', 'Arts'),
(791, '10303', 'Bishop Appasamy College of Education', 'CSI Compound, Avinashi Road,\r\n Coimbatore-641 018.', 'Arts'),
(792, '10304', 'C.M.S. College of Education', 'Sathy Road, \r\n Ganapathy, \r\n Coimbatore District – 641 006.', 'Arts'),
(793, '10306', 'D.K.T. College of Education', 'Amaravathy Palayam, \r\n Perum Tholur Post, Tirupur Taluk, \r\n Tirupur-641 665.', 'Arts'),
(794, '10307', 'Dr. G.R.Damodaran College of Education', 'Muthugoundenpudur, \r\n Coimbatore-641 406.', 'Arts'),
(795, '10308', 'Dr. N.G.P. College of Education', 'Dr. N.G.P. Nagar, \r\n Kalapatti Road, \r\n Coimbatore-641 035.', 'Arts'),
(796, '10309', 'Dr. S.N.S. College of Education', 'Thudiyalur-Saravanampatti Road, \r\n Chinnavedampatti Post, \r\n Coimbatore-641 006.', 'Arts'),
(797, '10311', 'Government College of Education for Women', 'Big Bazaar Street, \r\n Coimbatore-641 001.', 'Arts'),
(798, '10312', 'Hindusthan College of Education', 'Hindusthan Gardens, \r\n Behind Nava India,\r\n Coimbatore-641 028.', 'Arts'),
(799, '10313', 'Indira Gandhi College of Special Education', 'Holy Cross Campus, \r\n Kanuvai, Thadagam Road, \r\n Coimbatore-641 108', 'Arts'),
(800, '10314', 'JAS College of Education', 'No.79, Chinnavedampatti, \r\n Attipalayam Road,\r\n Coimbatore-641 006.', 'Arts'),
(801, '10315', 'Jayanthi College of Education', 'Jayanthi Garden, \r\n Arulpuram Post, \r\n Tirupur, \r\n Tirupur District-641 605.', 'Arts'),
(802, '10316', 'JSR College of Education', 'Agraharakkannadiputhur Village, Madathukulam (Post) & Taluk, \r\n Tirupur District-642 113.', 'Arts'),
(803, '10317', 'K.M.G. College of Education,', 'S.F.No.208/1B, Angalakurichi Village, Valparai Main Road, Angalakurichi Post, Pollachi Taluk, Coimbatore - 642 007.', 'Arts'),
(804, '10318', 'Kalaivani College of Education', 'Palathurai, L&T, Bye Pass Road, \r\n Madukkarai, \r\n Coimbatore District-641 105.', 'Arts'),
(805, '10320', 'Kasturi College of Education', '29-A, Kasturi Estate, \r\n Sugunapuram,\r\n Coimbatore-641 008.', 'Arts'),
(806, '10321', 'Kathir College of Education', '806, Neelambur,\r\n  Avinashi Road, \r\n Coimbatore-641 014.', 'Arts'),
(807, '10322', 'Lisieux College of Education', 'Sathy Main Road, \r\n Saravanampatti, \r\n Coimbatore-641 035.', 'Arts'),
(808, '10323', 'Michael Job Memorial College of Education for Women', 'Ravathur, Sulur, Coimbatore-641 103.', 'Arts'),
(809, '10324', 'Nairs College of Education', 'Amman’s Nagar – II, \r\n NGGO Colony, \r\n Coimbatore-641 022.', 'Arts'),
(810, '10326', 'P.P.G. College of Education', '9/1, Keeranatham Road, \r\n Saravanampatti Post, \r\n Coimbatore-641 035.', 'Arts'),
(811, '10328', 'R.K.R. College of Education', 'Post Box No.50, \r\n Tirupur Road,\r\n Udumalpet, \r\n Tirupur District-642 126.', 'Arts'),
(812, '10329', 'RVS College of Education', 'Trichy Road, \r\n Kannampalayam, \r\n Sulur, Coimbatore-641 402.', 'Arts'),
(813, '10330', 'SRMV College of Education, (Autonomous)', 'Periyanaickenpalayam, \r\n Coimbatore-641 020.', 'Arts'),
(814, '10331', '', 'St. Peter’s College of Education,\r\n Karumathampatti, \r\n Coimbatore-641 659.', 'Arts'),
(815, '10332', 'St.Mark’s College of Education', 'Madukkarari Village,\r\n Coimbatore – 614 405.', 'Arts'),
(816, '10333', 'P.A. College of Education', 'Palladam Road, Puliampatty, Pollachi, Coimbatore District - 642 002', 'Arts'),
(817, '10334', 'Holy Angels College of Education for Women', 'S.F.205, Jadayampalayam, Mettupalayam, Coimbatore District - 641 302.', 'Arts'),
(818, '10335', 'Nova College of Education', 'Street No.2, Gudal, \r\n Selvapuram Village, Jothipuram Post, Coimbatore - 641 047.', 'Arts'),
(819, '10401', 'Annai Madha College of Education', 'Edicheruvai, \r\n Akkanur Post, \r\n Tittagudi Taluk, \r\n Cuddalore District', 'Arts'),
(820, '10402', 'Blessy College of Education', 'Navalingam Nagar, Chidambaram TK, Cuddalore- Dist', 'Arts'),
(821, '10403', 'C.S Jain College of Education', 'Thethampet Village, \r\n Chidambaram Main Road, \r\n Srimushnam, Cuddalore District - 608 703.', 'Arts'),
(822, '10404', 'D.V.C. College of Education', 'Thirumurugan Nagar, \r\n Srimushnam, \r\n Kattumannarkoil Taluk, \r\n Cuddalore District - 608 703.', 'Arts'),
(823, '10405', 'CK College of Education', 'Jayaram Nagar, \r\n Chellankuppam,\r\n Cuddalore District-607 003.', 'Arts'),
(824, '10407', 'National College of Education', '“Neyveli Educational Trust Campus”\r\n Kumbakonam Main road, Keezhakollai, \r\n Marungur Post – 607 103.\r\n Panruti Taluk, Cuddalore District.', 'Arts'),
(825, '10408', 'New Millennium College of Education', 'Kumarapettai Pathirikuppam Post, \r\n Thirvanthipuram Village,\r\n Cuddalore District - 607 401.', 'Arts'),
(826, '10409', 'O.P.R Memorial College of Education', 'Neyveli Main Road, \r\n Vadalur, \r\n Cuddalore District- 607303.', 'Arts'),
(827, '10410', 'Sandaravadhanam College of Education', 'Sandaravadhanam College of Education, \r\n Pazhanchanallur & Post,\r\n Kattumannar Koil Taluk, \r\n Cuddalore District-608 301.', 'Arts'),
(828, '10411', 'Senthil College of Education,', 'Senthil College of Education, \r\n Periya Vadavadi Vriddhachalam Taluk, \r\n Cuddalore District 606 001.', 'Arts'),
(829, '10412', 'Shree Ragavendra College of Education', 'Shree Ragavendra College of Education, \r\n West Car Street, \r\n Keezhamoongiladi Post, \r\n Chidambaram Taluk,\r\n Cuddalore District- 606 102.', 'Arts'),
(830, '10413', 'Sree Arumugham Teacher Training College', 'Sree Arumugham Teacher Training College, \r\n Raja Nagar,\r\n Vaithinathapuram, \r\n Tholudur,\r\n Cuddalore District - 606 303.', 'Arts'),
(831, '10414', 'Sri Vekkaliamman College of Education', 'Sri Vekkaliamman College of Education, \r\n Kazhudur Village & Post,\r\n Tittakudi Taluk, \r\n Cuddalore District-606 304.', 'Arts'),
(832, '10415', 'Sri Venkateswara College of Education', 'Sri Venkateswara College of Education, \r\n Anna Nagar,\r\n Kazhudur & Post, \r\n Tittagudi Taluk, \r\n Cuddalore District- 606 304.', 'Arts'),
(833, '10416', 'Sri Viruthambigai College of Education', 'Sri Viruthambigai College of Education,\r\n  Cuddalore Main Road (Opp), \r\n  Kuppanatham Po, \r\n  Vriddhachalam 606 001, \r\n  Cuddalore District.', 'Arts'),
(834, '10417', 'Vivekananda College of Education', 'Vivekananda College of Education, \r\n Seplanatham, Neyveli, \r\n Cuddalore - 607 802', 'Arts'),
(835, '10418', 'Omm Muruga College of Education', 'Omm Muruga College of Education, Pottaveli Village, Viruppatchi Panchayat, Kurinjipadi, Cuddalore – 607 302', 'Arts'),
(836, '10420', 'M.K.Raman College of Education', 'M.K.Raman College of Education, Valayamadevi & Post, Pinnalur via, Chidambaram Taluk, Cuddalore District – 608 704', 'Arts'),
(837, '10421', 'Bhavani College of Education', 'Bhavani College of Education, Main Road, K.N.Pettai, Thiruvanthipuram Post, Cuddalore – 607 401', 'Arts'),
(838, '10422', 'C.S.M. College of Education', 'C.S.M. College of Education, Erumanoor Road, Vridhachalam Post, \r\n Cuddalore District – 606 001', 'Arts'),
(839, '10423', 'Sri Thangam Periyasamy College of Education', 'Sri Thangam Periyasamy College of Education, Pennadam, Vriddhachalam, Cuddalore - 606 001', 'Arts'),
(840, '10424', 'Rajiv Gandhi College of Education', 'Rajiv Gandhi College of Education, 15, Ayiyar Madam, Vriddhachallam – 606 001, Cuddalore District', 'Arts'),
(841, '10425', 'Arcot Lutheran Church College of Education', 'Arcot Lutheran Church College of Education, Jeevanagar, Main Road,Nellikuppam, \r\n Cuddalore District,\r\n Pin – 607 105', 'Arts'),
(842, '10426', 'Muna College of Education', 'Muna College of Education, 12/19B, Gummathpalli Street, Parangipettai Post, Chidambaram, Cuddalore - 608 502.', 'Arts'),
(843, '10427', 'J.P College of Education', 'J.P College of Education, \r\n Plot/Khasara No. 34/3, 34/4, Sri Mushnam Village & Post Office, KM Koil Taluk, Cuddalore - 608 703', 'Arts'),
(844, '10428', 'Sree Bhavani College of Education', 'Sree Bhavani College of Education, \r\n  K.Kothanur Village, Nallur Post, \r\n Virudhachalam Taluk, \r\n Cuddalore District - 606 302.', 'Arts'),
(845, '10429', 'Vallalar College of Education', 'Vallalar College of Education,\r\n Street No.1, Marungur Village & Post, \r\n Panruti Taluk, Cuddalore District - 607 103.', 'Arts'),
(846, '10430', 'Thiruvalluvar Teachers Education', 'Thiruvalluvar Teachers Education \r\n Kurinjipadi Village, Taluk & City, \r\n Cuddalore District - 607 302.', 'Arts'),
(847, '10501', 'Annai College of Education', 'Annai College of Education, \r\n Nambipatti Village, \r\n H.Doddampatti Post, Pappireddipatti Taluk, \r\n Harur, Dharmapuri District - 636 903.', 'Arts'),
(848, '10502', 'Annai India College of Education', 'Annai India College of Education, \r\n Bommidi, Pappireddipatti Taluk, \r\n Dharmapuri District - 635 301.', 'Arts'),
(849, '10503', 'Christ College of Education for Women', 'Christ College of Education for Women,\r\n Jettihalli Post, \r\n Dharmapuri District.', 'Arts'),
(850, '10504', 'ERK College of Education', 'ERK College of Education, \r\n Erumiyampatti, \r\n Kokkarapatti Post, \r\n Pappireddipatti Taluk, \r\n Dharmapuri District - 636 905.', 'Arts'),
(851, '10506', 'Jai Sri Venkateswara College of Education', 'Jai Sri Venkateswara College of Education, \r\n S.F.No.400/10, Virupatchipuram Village,\r\n Ilkkayampatty Panchayat, \r\n Dharmapuri.', 'Arts'),
(852, '10508', 'Lakshmi Ammal College of Education for Women', 'Lakshmi Ammal College of Education for Women, \r\n No.81, Salem Main Road, \r\n Dharmapuri.', 'Arts'),
(853, '10510', 'Pachamuthu College of Education', 'Pachamuthu College of Education, \r\n Krishnagiri Main Road, Semmandakuppam Panchayat Nallanahalli Village, Dharmapuri - 636 705.', 'Arts'),
(854, '10512', 'Paramveer College of Education', 'Paramveer College of Education, \r\n Paramveer Nagar, \r\n Pennagaram Main Road, \r\n Paupparapatti Post, \r\n Dharmapuri District.', 'Arts'),
(855, '10514', 'Raadhaa College of Education', 'Raadhaa College of Education, \r\n Adhyimaan Kottai Village, \r\n A.Jettihalli Post, \r\n Dharmapuri Taluk,\r\n Dharmapuri – 636 807.', 'Arts'),
(856, '10518', 'Sri Vidaya Mandir College of Education', 'Sri Vidaya Mandir College of Education, \r\n Vignesh Nagar, Katteri, Uthangarai, Dharmapuri District - 635 207', 'Arts'),
(857, '10519', 'Sri Vijay Vidyalaya College of Education', 'Sri Vijay Vidyalaya College of Education, Vijay Nagar, Dharmapuri - 636 701.', 'Arts'),
(858, '10520', 'Stanley College of Education', 'Stanley College of Education,\r\n Mookareddipatti, \r\n Pallipatti Post, \r\n Pappireddipatti Taluk, \r\n Dharmapuri District - 636 905', 'Arts'),
(859, '10521', 'Thalapathy College of Education', 'Thalapathy College of Education,\r\n B.N. Sowdappachetty Street,\r\n Karimangalam Post, \r\n Dharmapuri District.', 'Arts'),
(860, '10522', 'Varuvan Vadivelan College of Education', 'Varuvan Vadivelan College of Education, \r\n Sridevi Educational Complex,\r\n 77/14-E, Bye-pass Road, \r\n Dharmapuri - 636 701.', 'Arts'),
(861, '10524', 'Paspo College of Education', 'Paspo College of Education, Sri Paspo Nagar, A.Jettihalli Post, Dharmapuri – 636 807', 'Arts'),
(862, '10525', 'Velammal College of Education', 'Velammal College of Education, Nambipatti, Harur , Pappiredipatti Taluk, Dharmapuri District – 636 903', 'Arts'),
(863, '10526', 'Kalaimagal College of Education', 'Kalaimagal College of Education, 3/228, Unisinahalli Village, Kadathur Post, Pappireddipatti Taluk, Dharmapuri District - 635 303.', 'Arts'),
(864, '10527', 'Samy College of Education', 'Samy College of Education, Thambichettipatti Village, Settrapatti Post, Harur Taluk, Dharmapuri District - 635 305.', 'Arts'),
(865, '10528', 'Don Bosco College of Education & Research Institute', 'Don Bosco College of Education & Research Institute, Sogathur Village & Post, Dharmapuri Taluk, Dharmapuri District – 636 809', 'Arts'),
(866, '10529', 'Adiparasakthi College of Education', 'Adiparasakthi College of Education, \r\n Erumiyampatti, Kokkarapatti Post,\r\n Pappireddipatti Taluk, \r\n Dharmapuri – 636 905', 'Arts'),
(867, '10530', 'Siva College of Education', 'Siva College of Education, \r\n 195/5, Errapatti Village, A.Jettihalli Post Office, Dharmapuri Taluk & District - 636 807', 'Arts'),
(868, '10531', 'Anna Arivagam College of Education', 'Anna Arivagam College of Education, Pudumottur Village, Jingalkadhirampatti Post,\r\n Pochampalli Taluk, Dharmapuri District - 635201', 'Arts'),
(869, '10532', 'SIV College of Education', 'SIV College of Education\r\n  No.93, Main Road, \r\n Orappam Village & Post, Krishnagiri Taluk, Dharmapuri District - 635 108', 'Arts'),
(870, '10533', 'Indian College of Education for women', 'Indian College of Education for women,\r\n Gopinathampatti Village, \r\n Parayapatti Puthur Post, \r\n Pappireddipatti Taluk, Dharmapuri District - 636 903.', 'Arts'),
(871, '10534', 'Sri Venkateswara College of Education', 'Sri Venkateswara College of Education, \r\n Pappireddipatti Village and Post Office, \r\n Pappireddipatti Taluk and City, \r\n Dharmapuri District - 636905.', 'Arts'),
(872, '10535', 'Sri Lakshminarayan College of Education', 'Sri Lakshminarayan College of Education, \r\n Pappinaickanahalli Village,\r\n Sogathur Post, Dharmapuri Taluk & District - 636 809', 'Arts'),
(873, '10536', 'Usha College of Education', 'Usha College of Education, \r\n Vellegoundanpalayam Village, Settikarai Post, \r\n Dharmapuri Taluk, Dharmapuri - 636 704.', 'Arts'),
(874, '10537', 'Vijaya College of Education', 'Vijaya College of Education, \r\n  Thadangam Village, Thokkampatti Post, \r\n Dharmapuri Taluk & District - 636 705.', 'Arts'),
(875, '10538', 'Dhivyam College of Education', 'Dhivyam College of Education, \r\n 5/266, Morrapur Main Road, Solaikottai, \r\n Dharmapuri - 636 704.', 'Arts'),
(876, '10539', 'PSA College of Education', 'PSA College of Education\r\n Solaikottai Post\r\n Naickanahalli Village\r\n Dharmapuri Taluk & District.', 'Arts');
INSERT INTO `institution_predefined` (`id`, `InstitutionCode`, `InstitutionName`, `Address`, `Stream`) VALUES
(877, '10540', 'Selvi Manivannan College of Education', 'Selvi Manivannan College of Education\r\n Salem Main Road, Nallampalli Village & Post Dharmapuri Taluk & District.', 'Arts'),
(878, '10542', 'Sentraya Perumal College of Education', 'Sentraya Perumal College of Education, \r\n Street No.01, Nathahalli Village & Post, \r\n Dharmapuri Taluk & District - 636803.', 'Arts'),
(879, '10601', 'Amman College of Education', 'Amman College of Education,\r\n Pillayarnatham, \r\n Pithalaipatty Post, Dindigul - 624 002.', 'Arts'),
(880, '10602', 'J.K College of Education', 'J.K College of Education, \r\n NH-7 Madurai Road, \r\n Begampur Post, \r\n Dindigul 624 002.', 'Arts'),
(881, '10603', 'K. Nanjappa Gownder College of Education', 'K. Nanjappa Gownder College of Education,\r\n Cauvery Ammal Campus, \r\n Akshaya Nagar, Seelapadi 624 005, \r\n Dindigul District.', 'Arts'),
(882, '10605', 'Lakshmi College of Education', 'Lakshmi College of Education, (Aided)\r\n Gandhigram 624 302, Dindigul District.', 'Arts'),
(883, '10606', 'MVM Chelllamuthu Alagu\r\n Ratinam College of Education', 'MVM Chelllamuthu Alagu\r\n Ratinam College of Education,\r\n Angu Nagar, Bye Pass Road,\r\n Collectorate (Po.), Dindigul - 624 004', 'Arts'),
(884, '10607', 'Meenakshi B.Ed., College', 'Meenakshi B.Ed., College,\r\n Palani Road, Mangaraipirivu, \r\n M. Ammapatti,\r\n Dindigul 624 622.', 'Arts'),
(885, '10608', 'Mother Teresa College of Education', 'Mother Teresa College of Education,\r\n 98-1 New Ayakudi, \r\n Palani 624 613.\r\n Dindigul District.', 'Arts'),
(886, '10610', 'Peace College of Education', 'Peace College of Education,\r\n Sukkampatty Post, \r\n Thodikombu,\r\n Dindigul Dist.', 'Arts'),
(887, '10612', 'Punitha Valanar College of Education', 'Punitha Valanar College of Education,\r\n Valan Nagar, \r\n Kosavapatty, \r\n Sanarpatty Village,\r\n Dindigul District – 624 304.', 'Arts'),
(888, '10613', 'R.V.S.College of Education', 'R.V.S.College of Education,\r\n R.V.S.Nagar, \r\n Karur Road, N.Paraipatti Post,\r\n Dindigul –625 005.', 'Arts'),
(889, '10614', 'Sakthi College of Education for Women', 'Sakthi College of Education for Women, \r\n Oddanchatram-624624, \r\n Dindigul District.', 'Arts'),
(890, '10615', 'Sakthi Institute of Teacher Education and Research', 'Sakthi Institute of Teacher Education and Research, \r\n Sakthi Nagar, \r\n Palakkanuthu 624 624\r\n Dindigul District.', 'Arts'),
(891, '10616', 'Sri Raghavendra College of Education', 'Sri Raghavendra College of Education\r\n PVP Nagar, \r\n K. Singarakottai 624 708,\r\n Batlagundu, \r\n Dindigul District.', 'Arts'),
(892, '10617', 'Vel College of Education', 'Vel College of Education,\r\n Jawahar Nagar, \r\n New Dharapuram Road,\r\n Palani 624 601, \r\n Dindigul Disitrict.', 'Arts'),
(893, '10618', 'K.R. College of Education', 'K.R. College of Education, NH-7 K.R. Nagar, Vedasanthur – 624 710 Dindigul District', 'Arts'),
(894, '10619', 'Victory College of Education', 'Victory College of Education, Kambiliampatty (P.O), Dindigul (Tk) & (Dt) - 624 306.', 'Arts'),
(895, '10620', 'Jainee College of Education', 'Jainee College of Education, \r\n Street No. NH 45 B Ex,\r\n Munnilaikottai Village, N.Panjampatti Post,\r\n Aathur Taluk,Veerakkal B P O City,\r\n Dindigul – 624 303.', 'Arts'),
(896, '10621', 'Shri Surya College of Education', 'Shri Surya College of Education, \r\n 22/2, Behind Govt. Arts College,\r\n Batlagundu Main Road, Nilakottai, \r\n Dindigul District - 624 208.', 'Arts'),
(897, '10622', 'Divyakala College of Education', 'Divyakala College of Education, \r\n Plot No.274/4, Divyapuram, Malagoundanpatty Village and Post, \r\n Nilakottai Taluk, Dindigul District - 624 208.', 'Arts'),
(898, '10623', 'Sri Sai Bharath College of Education', 'Sri Sai Bharath College of Education, \r\n Plot No. 103/3, Sullerambu Village & Post,\r\n Dindigul District - 624 710.', 'Arts'),
(899, '10703', 'Annai JKK Sampoorani Ammal College of Education', 'Annai JKK Sampoorani Ammal College of Education, \r\n S.No.396, T.N.Palayam Post, \r\n Gobichettipalayam Taluk,\r\n  Erode District-638 506.', 'Arts'),
(900, '10704', 'Avinasi Gounder Mariammal College of Education', 'Avinasi Gounder Mariammal College of Education, \r\n No.12, Gandhiji Street, Karur Bye-Pass Road, Kollampalayam, \r\n Erode-638 002.', 'Arts'),
(901, '10705', 'The Best College of Education', 'The Best College of Education,\r\n 5/47, Bhavani Erode Main Road, \r\n Kalingarayanpalayam, \r\n Bhavani,\r\n Erode District-638 301.', 'Arts'),
(902, '10707', 'Gandhi College of Education', 'Gandhi College of Education,\r\n Vinnappalli, \r\n Sathyamangalam, \r\n Erode District-638 402.', 'Arts'),
(903, '10708', 'Grace College of Education', 'Grace College of Education,\r\n 9/277, Grace Nagar, \r\n Kavindapadi Road,\r\n Elavamalai Post, \r\n Erode-638 316.', 'Arts'),
(904, '10709', 'Jairupa College of Education', 'Jairupa College of Education,\r\n Thottipalayam, \r\n Kathakanni Post, \r\n Kangayam (Tk), Tirupur Via,\r\n Uthukuli RS, \r\n Tirupur District-641 604.', 'Arts'),
(905, '10710', 'Kumutha College of Education', 'Kumutha College of Education,\r\n 8, Gandhipuram, \r\n Nambiyur Post, \r\n Gobichettipalayam Taluk, \r\n Erode District-638 458.', 'Arts'),
(906, '10712', 'Maharani College of Education', 'Maharani College of Education,\r\n Nanjiampalayam, \r\n Dharapuram, Tirupur District-638 657.', 'Arts'),
(907, '10713', 'Mangalam College of Education', 'Mangalam College of Education,\r\n 9/343, Bhavani Main Road, \r\n Mangalam Nagar,\r\n Anthiyur, \r\n Erode District-638 501.', 'Arts'),
(908, '10714', 'Nandha College of Education', 'Nandha College of Education,\r\n Koorapalayam Pirivu, \r\n Pitchandampalayam Post, \r\n Erode-638 052.', 'Arts'),
(909, '10716', 'PSG Ponnammal College of Education', 'PSG Ponnammal College of Education,\r\n Goundampalayam, Kadaiyur, Coimbatore Road, \r\n Kangayam, Tirupur District-638 701.', 'Arts'),
(910, '10717', 'Sarah College of Education for Women', 'Sarah College of Education for Women,\r\n Nanjai Uthukkuli Post, \r\n Tirupur -638 104.', 'Arts'),
(911, '10718', 'Shivparvathi Mandradiar College of Education', 'Shivparvathi Mandradiar College of Education, \r\n Palayakottai Post, Erode-638 108.', 'Arts'),
(912, '10720', 'Sree Vinayaka Vidyalaya College of Education', 'Sree Vinayaka Vidyalaya College of Education, \r\n Errattaikaradu, Paruvachi, \r\n Bhavani, \r\n Erode-638 312.', 'Arts'),
(913, '10721', 'Sri Ragavendra College of Education', 'Sri Ragavendra College of Education,\r\n 61, Malayandipudur Village, \r\n Sathyamangalam,\r\n Erode District-638 402.', 'Arts'),
(914, '10722', 'Sri Vasavi College of Education', 'Sri Vasavi College of Education,\r\n Vasavi College Post,\r\n Erode-638 316.', 'Arts'),
(915, '10724', 'St. Paul’s College of Education', 'St. Paul’s College of Education,\r\n No.39-A, Karathur,\r\n Gobichettipalayam,\r\n Erode-638 476.', 'Arts'),
(916, '10725', 'Vellalar College of Education', 'Vellalar College of Education,\r\n Maruthi Nagar, Thindal Village,\r\n  Erode-638 009.', 'Arts'),
(917, '10726', 'Vishnu Lakshmi B.Ed. College', 'Vishnu Lakshmi B.Ed. College,\r\n Ellis Nagar, \r\n Dharapuram, \r\n Tirupur District-638 657', 'Arts'),
(918, '10727', 'Jayasanthi B.Ed. College', 'Jayasanthi B.Ed. College, Sanathikalmedu, P.K.Pudur Post, Guruvareddiyur - 638 504, Bhavani Taluk, Erode District', 'Arts'),
(919, '10728', 'Centwin College of Education', 'Centwin College of Education, No.300, Nanjiampalayam Village, Poolavadi Road, Ellis Nagar Post Office, Dharapuram, Tirupur District - 638 657.', 'Arts'),
(920, '10729', 'St.Mary\'s College of Education', 'St.Mary\'s College of Education, Annamaduvu, \r\n Anthiyur, Erode District - 638 501.', 'Arts'),
(921, '10730', 'Sasurie College of Education', 'Sasurie College of Education, No.8/141, Vijyamangalam, Perundurai Taluk, Erode District - 638 056.', 'Arts'),
(922, '10731', 'Kaamadhenu College of Education', 'Kaamadhenu College of Education, \r\n Plot No.142/5, 142/6, Street No.001, \r\n Malayadi Pudhur Village, D.G.Pudhur Post, \r\n Sathyamangalam Taluk, Erode District - 638 503.', 'Arts'),
(923, '10732', 'RD College of Education', 'RD College of Education\r\n Street No.45, Nanjai Uthukkuli Post\r\n Tirupur Taluk and District.', 'Arts'),
(924, '10733', 'Sri Navaa College of Education', 'Sri Navaa College of Education, \r\n Chinnamuthur Village, Muthur Post & City, Kangeyam Taluk, Tirupur District - 638105', 'Arts'),
(925, '10801', 'Amirtham College of Education', 'Amirtham College of Education, Amirtham College Road, Vengudi, Walajabad.', 'Arts'),
(926, '10802', 'Annai Veilankannis College of Education', 'Annai Veilankannis College of Education,\r\n 81/33, VGP Salai , Saidapet, Kanchippuram - 600 015.', 'Arts'),
(927, '10803', 'Apollo College of Education', 'Apollo College of Education,\r\n Mevallor Kuppam village,\r\n Sriperumbudur Taluk,\r\n Kancheepuram District-602 105.', 'Arts'),
(928, '10804', 'Arulmigu Meenakshi Amman College of Education', 'Arulmigu Meenakshi Amman College of Education, \r\n Uthiramerur – 603 406\r\n Kancheepuram', 'Arts'),
(929, '10805', 'Cholan College of Education', 'Cholan College of Education,\r\n Sembarambakkam village, \r\n Karai post, \r\n Kancheepuram District-631 552.', 'Arts'),
(930, '10807', 'DMI College of Education', 'DMI College of Education,\r\n Mevalurkuppam B Village, \r\n Palanchur, \r\n Kancheepuram District-602 103.', 'Arts'),
(931, '10808', 'Kanchi College of Education', 'Kanchi College of Education,\r\n Karaipettai, \r\n Kancheepuram District-631 552.', 'Arts'),
(932, '10809', 'Lakshmi Ammal College of Education', 'Lakshmi Ammal College of Education, \r\n No.17-B, Vardhanar Street, \r\n Vedhachalam Nagar,\r\n Chengalpattu- 603 001, \r\n Chengalpattu District', 'Arts'),
(933, '10810', 'Mohamed Sathak Teacher Training College', 'Mohamed Sathak Teacher Training College,\r\n Padur village, Old Mahabalipuram Road, Chengalpattu Taluk, \r\n Chengalpattu District-603 103.', 'Arts'),
(934, '10811', 'Om Shanti College of Education', 'Om Shanti College of Education,\r\n Govinda Mettu Street, \r\n Sri Perumbudur, \r\n Kancheepuram District-602 105', 'Arts'),
(935, '10814', 'Sri Krishna College of Education', 'Sri Krishna College of Education,\r\n Panapakkam, \r\n Via-Padappai, \r\n Serapananchery, \r\n Sriperumputhur Taluk, \r\n Kancheepuram District – 601 301', 'Arts'),
(936, '10815', 'St.Mary’s College of Education and Research Institute', 'St.Mary’s College of Education and Research Institute, \r\n G.S.T. Road, Chengalpattu, \r\n Chengalpattu\r\n District-603 002.', 'Arts'),
(937, '10816', 'Subham College of Education', 'Subham College of Education,\r\n Sunampedu Road, \r\n Thozupedu village, \r\n Vilvarayanallur, Maduranthagam Taluk, \r\n Kancheepuram District-603 306.', 'Arts'),
(938, '10817', 'Vidhya Sagar Women\'s College of Education', 'Vidhya Sagar Women\'s College of Education,\r\n G.S.T. Road, Vedanarayanapuram, \r\n Chengalpattu Taluk,\r\n Chengalpattu District-603 111.', 'Arts'),
(939, '10819', 'Cosmopolitan College of Education', 'Cosmopolitan College of Education, Sengadu Post, Manavala Nagar (Via), Sriperumbadur Taluk, Kancheepuram District - 602 002', 'Arts'),
(940, '10820', 'Indira Gandhi College of Education', 'Indira Gandhi College of Education, Kancheepuram High Road, Athur Village & Post, Chengalpattu Taluk, Chengalpattu – 613 101', 'Arts'),
(941, '10822', 'Om College of Education', 'Om College of Education, \r\n  Nemili, AP Nagar Road, Valarpuram Post, Sriperumbudur Taluk, \r\n Kanchipuram District - 602 105', 'Arts'),
(942, '10901', 'All Saints College of Education', 'All Saints College of Education,\r\n Kaliyakkavilai, \r\n Malayadi Post,\r\n Kanyakumari District - 629 153.', 'Arts'),
(943, '10902', 'Anna Vinayagar College of Education', 'Anna Vinayagar College of Education,\r\n Ganapathipuram, Agastheeswaram Taluk,\r\n Kanyakumari District - 629 502', 'Arts'),
(944, '10903', 'Bethany Navajeevan College of Education', 'Bethany Navajeevan College of Education, \r\n Bethany Nagar,\r\n Vencode-629 171, Puthukkadai, \r\n Kanyakumari District.', 'Arts'),
(945, '10904', 'Bethlahem College of Education', 'Bethlahem College of Education, \r\n Karungal,\r\n Kanyakumari District - 629 157', 'Arts'),
(946, '10905', 'Bishop Agniswamy College of Education', 'Bishop Agniswamy College of Education, \r\n Muttom, Nagercoil,\r\n Kanyakumari District - 629 202.', 'Arts'),
(947, '10906', 'Christian college of Education', 'Christian college of Education, \r\n Sinclair Street, Martandam,\r\n Kanyakumari District - 629 165.', 'Arts'),
(948, '10907', 'Good Shepherd College of Education', 'Good Shepherd College of Education, Holy Cross College Road, Nagercoil, Kanyakumari District - 629 004.', 'Arts'),
(949, '10908', 'Grace College of Education', 'Grace College of Education,\r\n Andiyan Kadu,\r\n Padanthalumoodu,\r\n Kanyakumari District – 629 194.', 'Arts'),
(950, '10909', 'Holy Trinity College of Education', 'Holy Trinity College of Education,\r\n Melpalai, Edaicode Post, Kanyakumari District - 629 152.', 'Arts'),
(951, '10910', 'Immanuel Arasar College of Education', 'Immanuel Arasar College of Education, \r\n Nattalam,\r\n Kanyakumari District.', 'Arts'),
(952, '10911', 'James College of Education', 'James College of Education, Mananvilai, Near Karungal, Kanyakumari District - 629 156.', 'Arts'),
(953, '10912', 'Koottalumoodu Arulmigu Bhadreshwari \r\n Devasthanam College of Education', 'Koottalumoodu Arulmigu Bhadreshwari \r\n Devasthanam College of Education,\r\n Panikulam,\r\n Kanyakumari District – 629 188.', 'Arts'),
(954, '10913', 'M.E.T. College of Education', 'M.E.T. College of Education, \r\n No.13/142-B, Mogals Garden, Poigai Dam Road, \r\n Chenbagaramanputhoor P.O,\r\n Kanyakumari District - 629 304', 'Arts'),
(955, '10914', 'Mar Chrysostom College of Education', 'Mar Chrysostom College of Education, \r\n Malankar Avenue,\r\n Kirathoor Post,\r\n Kanyakumari District – 629 181', 'Arts'),
(956, '10915', 'Muslim College of Education', 'Muslim College of Education, \r\n Thiruvithancode,\r\n Kanyakumari District - 629 174.', 'Arts'),
(957, '10916', 'N.V.K.S.D. College of Education', 'N.V.K.S.D. College of Education, (Autonomous)\r\n Attoor, Kanyakumari District -629 191.', 'Arts'),
(958, '10917', 'Nadar Mahajana Sangam Kamaraj \r\n College of Education', 'Nadar Mahajana Sangam Kamaraj \r\n College of Education, \r\n Pazhavilai Post,\r\n Kanyakumari District - 629 501.', 'Arts'),
(959, '10918', 'Ponjesly college of Education', 'Ponjesly college of Education, \r\n 253/E3, K.P.Road, \r\n Vettoornimadam Post, \r\n Nagercoil - 629 003.\r\n Kanyakumari District.', 'Arts'),
(960, '10919', 'R.P.A. College of Education', 'R.P.A. College of Education, \r\n R.P. Nagar, \r\n Viricode Post - 629 165, \r\n Kanyakumari District', 'Arts'),
(961, '10920', 'Ruben College of Education', 'Ruben College of Education, \r\n 4-70D & G, Thadikkarankonam Junction,\r\n Kanyakumari District – 629 851.', 'Arts'),
(962, '10921', 'Siddhartha College of Teacher Education', 'Siddhartha College of Teacher Education, \r\n Manjalumoodu, \r\n Kuzhithurai (via),\r\n Kanyakumari District – 629 151.', 'Arts'),
(963, '10923', 'St.Joseph college of Education', 'St.Joseph college of Education, \r\n Appicode, \r\n Tholayavattam P.O.\r\n Kanyakumari District - 629 157.', 'Arts'),
(964, '10924', 'St.Stephen college of Education', 'St.Stephen college of Education, \r\n Kollemcode,\r\n Kanyakumari District - 629 160', 'Arts'),
(965, '10925', 'Amrita College of Education', 'Amrita College of Education,\r\n Nagercoil, Erachkulam, Kanyakumari District – 629 901.', 'Arts'),
(966, '10926', 'Udaya College of Education', 'Udaya College of Education,\r\n Udaya Nagar,\r\n Ammandivilai,\r\n Ammandivilai Post,\r\n Kanyakumari District – 629 204', 'Arts'),
(967, '10927', 'Vivekananda College of Education', 'Vivekananda College of Education,\r\n Agasteeswaram Village & Post.\r\n Agasteeswaram – 629 701.\r\n Kanyakumari District.', 'Arts'),
(968, '10928', 'White Memorial college of Education', 'White Memorial college of Education, \r\n Attoor, \r\n Veeyanoor Post,\r\n Kanyakumari District - 629 177.', 'Arts'),
(969, '10929', 'S.T.Hindu College of Education', 'S.T.Hindu College of Education,\r\n Nagercoil,\r\n Kanyakumari District - 629 002.', 'Arts'),
(970, '10930', 'Bapuji Memorial College of Education', 'Bapuji Memorial College of Education, Manavalakurichi, Kanyakumari District – 629 252', 'Arts'),
(971, '10931', 'Pope John Paul II College of Education', 'Pope John Paul II College of Education, Block A-5/22d, Block B-5/22e Thiruvithancode, Mulagumoodu Post, Kalkulam, Kanyakumari District – 629167', 'Arts'),
(972, '10932', 'Bethesda College of Education', 'Bethesda College of Education, Bethelpuram - 629 803, Kanyakumari District', 'Arts'),
(973, '10933', 'T.N.N.Memorial College of Teacher Education', 'T.N.N.Memorial College of Teacher Education, No.439/1, Arumanai, Vilavancode, Kanyakumari District - 629 151.', 'Arts'),
(974, '10934', 'Mother Gnanamma Catholic College of Education', 'Mother Gnanamma Catholic College of Education, \r\n Madathattuvilai Main Road, Ward 1, \r\n Villukuri Village and Post, Villukuri City, Kalkulam Taluk, \r\n Kanyakumari - 629 180.', 'Arts'),
(975, '10935', 'Loard Jeganath College of Education', 'Loard Jeganath College of Education, \r\n PSN Nagar, Marungoor Village, Kumarapuramthoppur Post,\r\n Agastheeshwaram Taulk, Kanyakumari District - 629 402.', 'Arts'),
(976, '11002', 'Arasu College of Education for Women', 'Arasu College of Education for Women,\r\n Panduthakaranpur, Punjai Kadambankurichi Village, Manmangalam Taluk, Karur District - 639 006', 'Arts'),
(977, '11003', 'Jairam College of Education', 'Jairam College of Education,\r\n Salem Bye-pass Road, NH-7, \r\n Near Mahamariamman Temple, \r\n Karur – 639 002.', 'Arts'),
(978, '11004', 'Kaliammal College of Education', 'Kaliammal College of Education, \r\n SF.No.305/1, Karur- Covai Road, \r\n Pavithram & Post, \r\n Karur District – 639 002.', 'Arts'),
(979, '11005', 'M. Kumarasamy College of Education', 'M. Kumarasamy College of Education, \r\n Dheeran Chinnamalai Nagar, \r\n Veenaimalai Post,\r\n Karur District-639 006.', 'Arts'),
(980, '11007', 'Ponkaliamman College of Education', 'Ponkaliamman College of Education,\r\n Panduthakaranpur, Punjai Kadambankurichi Village, Manmangalam Taluk, Karur District - 639 006', 'Arts'),
(981, '11008', 'Rasama College of Edcuation', 'Rasama College of Edcuation, Karur-Erode Main Road, Paathakaliamman Nagar, Vettamangalam(PO), Karur(Dt)-639117.', 'Arts'),
(982, '11009', 'Servite College of Education for Women', 'Servite College of Education for Women, \r\n Therkuppallam, \r\n Thogamalai Post,\r\n Karur District-621 313', 'Arts'),
(983, '11010', 'Cheran College of Education', 'Cheran College of Education.\r\n  Erode Road, Punnam Chatiram Village & Post, Aravakurichi Taluk, Karur District - 639136', 'Arts'),
(984, '11102', 'Concord College of Education', 'Concord College of Education,\r\n Salem Main Road,\r\n Avathanapatti Village,\r\n Krishnagiri District – 635 001.', 'Arts'),
(985, '11103', 'K.M. College of Education', 'K.M. College of Education, \r\n No.11/7, Krishnappa Layout, \r\n Co-operative Colony, \r\n Krishnagiri District.', 'Arts'),
(986, '11104', 'Krishna College of Education', 'Krishna College of Education, \r\n Kattinainapalli Post, \r\n Krishnagiri - 635 001.', 'Arts'),
(987, '11105', 'PSV College of Education', 'PSV College of Education, \r\n Mittapalli Railway Station Road, \r\n Balinayanapalli Post,\r\n Krishnagiri District - 635 108.', 'Arts'),
(988, '11106', 'Rajiv Gandhi College of Education', 'Rajiv Gandhi College of Education,\r\n Kattinayanpali village & Post,\r\n Krishnagiri District – 635 120.', 'Arts'),
(989, '11107', 'Sivagamiammal College of Education', 'Sivagamiammal College of Education, \r\n Kattinayapalli Village, \r\n Krishnagiri District – 635 001', 'Arts'),
(990, '11108', 'Shri Bharathi College of Education', 'Shri Bharathi College of Education, \r\n No.4/630, Shoolagiri Bye Pass Road, Opp.Weekly Market, Rayakottah, \r\n Krishnagiri District - 635 116.', 'Arts'),
(991, '11109', 'St. Joan’s College of Education', 'St. Joan’s College of Education, \r\n Mittapalli, \r\n Balinayanapalli Post, \r\n Krishnagiri District-635 108.', 'Arts'),
(992, '11110', 'Royal College of Education', 'Royal College of Education, Varatanapalli Road, Kattinayanapalli Post, Krishnagiri District – 635 001', 'Arts'),
(993, '11111', 'R.K.P.E.T. B.Ed. College', 'R.K.P.E.T. B.Ed. College, No.12, 1st Cross, M.M.Nagar, Mookandapalli, Hosur – 635 126, Krishnagiri District', 'Arts'),
(994, '11112', 'Navodhaya College of Education', 'Navodhaya College of Education, Street No.188/3, Kodiyalam, Kothapally T Village, Sevaganapally Post, Hosur Taluk, Krishnagiri District – 635 103', 'Arts'),
(995, '11113', 'Sre Ramana College of Education', 'Sre Ramana College of Education, Upparpatti Village & Post Office, Uthangarai Taluk, Dharmapuri District - 635 207', 'Arts'),
(996, '11114', 'Sri Shirdi Sai B.Ed. College', 'Sri Shirdi Sai B.Ed. College, \r\n Peddanapalli Village, Periyakottapalli Post, Krishnagiri Taluk, Dharmapuri District - 635 001', 'Arts'),
(997, '11115', 'Adhiyaman College of Education for women', 'Adhiyaman College of Education for women, Srinivasanagar, Krishnagiri Main Road, Uthangarai Post, Krishnagir District - 635 207.', 'Arts'),
(998, '11116', 'Thuvaraga College of Education', 'Thuvaraga College of Education,\r\n KRP Road, Dhuvaragapuri Village, KRP Dam Post, \r\n Krishnagiri Taluk & City, \r\n Krishnagiri District - 635 101', 'Arts'),
(999, '11201', 'A.S. College of Education', 'A.S. College of Education, \r\n Saraswathi Nagar, Kannanur, A.Kokkulam Post, Checkanurani (Via), Madurai - 625514.', 'Arts'),
(1000, '11202', 'Arumugam Nallamani College of Education', 'Arumugam Nallamani College of Education,\r\n Thiruppalai Village, Thirumalpuram Post, \r\n Madurai 625 014', 'Arts'),
(1001, '11203', 'C.S.I. College of Education', 'C.S.I. College of Education\r\n Pasumalai, Madurai –625 004.', 'Arts'),
(1002, '11204', 'Crescent College of Education for Women', 'Crescent College of Education for Women,\r\n Seethakathi Nagar, Kalampadi,\r\n Chatrapatti Post, \r\n Madurai- 625 014.', 'Arts'),
(1003, '11205', 'K.L.N. B.Ed College', 'K.L.N. B.Ed College, \r\n Kozhikodu, Viraganoor Post, \r\n Madurai 625 009.', 'Arts'),
(1004, '11206', 'K.S.M. College of Education for Women', 'K.S.M. College of Education for Women, \r\n Therkkutheru, Melur Taluk,\r\n 149, K.K. Nagar, Madurai-625 122.', 'Arts'),
(1005, '11207', 'KAPI College of Education', 'KAPI College of Education, \r\n 7/64, Wellington Street, \r\n N.G.O. Colony, Nagamalai, \r\n Madurai-625 019.', 'Arts'),
(1006, '11208', 'Kapi Women’s College of Education', 'Kapi Women’s College of Education,\r\n No.84, Survey No.101/1, \r\n Nagamalai, \r\n Madurai District – 625 019.', 'Arts'),
(1007, '11209', 'Mangayarkarasi College of Education', 'Mangayarkarasi College of Education, \r\n S.N.171/1-4, Mangayarkarasi Nagar, \r\n Paravai Village & Post, \r\n Madurai-625 402.', 'Arts'),
(1008, '11211', 'Parasakthi College of Education', 'Parasakthi College of Education,\r\n S. Kottaipatti 625 527, \r\n Elumalai, \r\n Madurai District.', 'Arts'),
(1009, '11213', 'Royal College of Education', 'Royal College of Education,\r\n New Plot no.2411, Thanichiyam Village, Vadipatti Taluk, Madurai District - 625221', 'Arts'),
(1010, '11214', 'Ruby College of Preceptors', 'Ruby College of Preceptors, \r\n No.9/3, Rajapalayam Road, T.Pudupatti, \r\n Thirumangalam Taluk, Madurai 625704', 'Arts'),
(1011, '11215', 'Sri Aurobindo Mira College of Education', 'Sri Aurobindo Mira College of Education,\r\n Nehru Nagar, \r\n Bye Pass Road, Madurai 625 010.', 'Arts'),
(1012, '11216', 'Sri Balaji College of Education for Women', 'Sri Balaji College of Education for Women,\r\n Nagari, Ayyankottai Post, Vadapatti Taluk, Madurai District- 625 221', 'Arts'),
(1013, '11217', 'St. Charles College of Education', 'St. Charles College of Education\r\n Thanakkankulam P.O, \r\n Thirunagar, Madurai –625 006.', 'Arts'),
(1014, '11218', 'St. Justin\'s College of Education', 'St. Justin\'s College of Education, (Aided)\r\n Kamarajar Salai, Theppakulam, \r\n Madurai 625 009.', 'Arts'),
(1015, '11220', 'Suresh Bernard Teacher Training College', 'Suresh Bernard Teacher Training College,\r\n (Spl. Education) DRO Colony, \r\n Madurai 625 014.', 'Arts'),
(1016, '11221', 'Thiagarajar College of Preceptors', 'Thiagarajar College of Preceptors, (Aided)\r\n Teppakulam, Madurai 625 009.', 'Arts'),
(1017, '11222', 'Thiruvalluvar College of Education for Women', 'Thiruvalluvar College of Education for Women,\r\n Mallapuram, Elumalai 625 535,\r\n Peraiyur Taluk, Madurai District.', 'Arts'),
(1018, '11224', '#N/A', 'Assefa College of Education, Silarpatty, Peraiyur Taluk, Madurai District – 625 702', 'Arts'),
(1019, '11225', 'TVS Teacher Training Academy', 'TVS Teacher Training Academy, R.S.No.7/1A, Sivagangai Road, Veerapanchan, Madurai – 625 020', 'Arts'),
(1020, '11227', 'Meenammal College of Education for Women', 'Meenammal College of Education for Women, \r\n Rajapalayam Main Road, \r\n T.Kunnathur Village and Post, \r\n Peraiyur Taluk, Madurai District - 625 708', 'Arts'),
(1021, '11228', 'KKG College of Education', 'KKG College of Education, \r\n Kondureddipatti, Muthulingapuram Village, \r\n Peraiyur Post, Madurai District - 625 703.', 'Arts'),
(1022, '11229', 'Annai Fathima College of Education', 'Annai Fathima College of Education, \r\n Plot No. & Street No.161,\r\n Therali Road, Alampatti Post,\r\n Thirumangalam Taluk & City,\r\n Madurai District - 625 706', 'Arts'),
(1023, '11302', 'Best College of Education', 'Best College of Education,\r\n No.26/54, Mayura Nathar North Street,\r\n Mayiladuthurai, \r\n Mayiladuthurai District-609 001', 'Arts'),
(1024, '11303', 'Kalaimahal College of Education', 'Kalaimahal College of Education,\r\n No.3/131 Main Road, \r\n Sembanarkoil – 609 309, \r\n Mayiladuthurai District.', 'Arts'),
(1025, '11304', 'Nagai College of Education', 'Nagai College of Education,\r\n Near Kaliamman Koil, \r\n Naduvar East Street, \r\n Nagapattinam – 611 001.', 'Arts'),
(1026, '11305', 'Newton College of Education', 'Newton College of Education, \r\n Pappakovil, \r\n Nagapattinam District – 611 001', 'Arts'),
(1027, '11306', 'Prime College of Education', 'Prime College of Education, \r\n Kilvelur Main Road, Kilvelur 611 104, \r\n Mayiladuthurai District', 'Arts'),
(1028, '11307', 'Sai Ram College of Education', 'Sai Ram College of Education,\r\n 14 A, Pidari West Street, \r\n Sirakali,\r\n Mayiladuthurai – 609 110', 'Arts'),
(1029, '11308', 'Sir Isaac Newton College of Education', 'Sir Isaac Newton College of Education Andhanapettai Post, Pappakoil, Nagapattinam', 'Arts'),
(1030, '11309', 'Sri Kubera Vinayagar College of Education', 'Sri Kubera Vinayagar College of Education, \r\n Thamaraipulam, Vedaranyam Taluk, \r\n Nagapattinam District.', 'Arts'),
(1031, '11310', 'Sri Ramachandira College of Education', 'Sri Ramachandira College of Education, \r\n Somanathar Street, Vedaraniam, \r\n Nagapattinam District – 614 810', 'Arts'),
(1032, '11311', 'Good Samaritan College of Education', 'Good Samaritan College of Education, No.44, Main Road, Uluthukkappai, Solasakkara, Nallore Post, Mayiladuthurai, Mayiladuthurai District - 609 118', 'Arts'),
(1033, '11312', 'Devarajan College of Education', 'Devarajan College of Education, Goundarkadu, Main Road, Kariyapattinam, Vedaraniam Taluk, Nagapattinam District - 614 806', 'Arts'),
(1034, '11314', 'Andavar College of Education', 'Andavar College of Education, 125/2a, Main Road, Poravachery, Nagapattinam District - 611 108', 'Arts'),
(1035, '11315', 'Sree Krishna College of Education', 'Sree Krishna College of Education, No.69, Allarvelli Porayar, Tharangambadi Taluk, Mayiladuthurai District – 609 307', 'Arts'),
(1036, '11316', 'EGS Pillay College of Education', 'EGS Pillay College of Education, \r\n  Thethi Village, \r\n Nagore Post, Nagapattinam Taluk & District - 611 002.', 'Arts'),
(1037, '11317', '#N/A', 'Kanimozhi Paneerselvam College of Education\r\n  ECR Road, Palaiyur, \r\n Nagapattinam Taluk & District -611 106', 'Arts'),
(1038, '11319', '#N/A', 'Sathyabama College of Education, Nagapattinam', 'Arts'),
(1039, '11401', 'Angels College of Education', 'Angels College of Education, \r\n Aniyapuram, \r\n Namakkal District - 637 017.', 'Arts'),
(1040, '11402', 'Annai Mathammal Sheela College of Education', 'Annai Mathammal Sheela College of Education, \r\n Erumapatty Village, \r\n Namakkal District - 637 013.', 'Arts'),
(1041, '11404', 'Chandra Chellappan College of Education', 'Chandra Chellappan College of Education, \r\n Thalambadi Post, Sellappampatty Village, Namakkal Taluk, Namakkal District - 637 019.', 'Arts'),
(1042, '11407', 'Excel College of Education', 'Excel College of Education, \r\n NH-47 New, Pallakapalayam,\r\n Namakkal District.- 637 303', 'Arts'),
(1043, '11408', 'Gnanamani College of Education', 'Gnanamani College of Education, \r\n A.K. Samuthiram, \r\n Pachal Post, \r\n Namakkal District - 637 018.', 'Arts'),
(1044, '11409', 'Government College of Education', 'Government College of Education, \r\n Komarapalayam, \r\n Namakkal District-638 183.', 'Arts'),
(1045, '11410', 'K.S. Maniam College of Education', 'K.S. Maniam College of Education, \r\n Irukkur Post, Paramathi Village,\r\n Paramathi Velur Taluk, \r\n Namakkal District - 637 204.', 'Arts'),
(1046, '11411', 'Kamarajar College of Education', 'Kamarajar College of Education, \r\n Boomaikuttaimedu - 637 019, Selappampatty Post, \r\n Namakkal Taluk and District.', 'Arts'),
(1047, '11412', 'Kandhaswamy College of Education', 'Kandhaswamy College of Education, \r\n No.220/18, Salem Main Road, \r\n Opp. To Saravana Theater, \r\n Komarapalayam, Namakkal District - 638 183', 'Arts'),
(1048, '11415', 'Kongunadu College of Education', 'Kongunadu College of Education, \r\n Velagoundampatti, \r\n Namakkal District.', 'Arts'),
(1049, '11416', 'Krishnasree College of Education for Women', 'Krishnasree College of Education for Women,\r\n Sathinaicken palayam Village,\r\n Elayampalayam,\r\n Thiruchengode,\r\n Namakkal District – 637 205', 'Arts'),
(1050, '11417', 'Krishna College of Education for Women', 'Krishna College of Education for Women,\r\n Sathinaickanpalayam Village,\r\n Elayampalayam – 637 205,\r\n Tiruchengode, Namakkal District', 'Arts'),
(1051, '11418', 'KRP College of Education', 'KRP College of Education, \r\n Pachampalayam, \r\n Sankari West, Padaiveedu Post, \r\n Namakkal District-637 303.', 'Arts'),
(1052, '11419', 'KSR College of Education', 'KSR College of Education, \r\n K.S.R. Kalvi Nagar,\r\n Tiruchengode, \r\n Namakkal District - 637 209.', 'Arts'),
(1053, '11420', 'M. Shanthi College of Education', 'M. Shanthi College of Education, \r\n CMS Nagar, Ernapuram - 637 003, \r\n Namakkal District.', 'Arts'),
(1054, '11421', 'Mahendhira College of Education', 'Mahendhira College of Education, \r\n Kalipatti Post,Attayampatti (via), Tiruchengode Taluk, \r\n Namakkal District - 637 501.', 'Arts'),
(1055, '11422', 'Mahendhira College of Education', 'Mahendhira College of Education, \r\n Kumaramangalam, Tiruchengode Taluk, \r\n Namakkal District.', 'Arts'),
(1056, '11423', 'Paavai College of Education', 'Paavai College of Education, \r\n Salem Namakkal Highway (NH-7), \r\n Annaipalayam, Rasipuram, Namakkal District-637 018.', 'Arts'),
(1057, '11424', 'PGP College of Education', 'PGP College of Education, \r\n NH.-7, Namakkal-Karur Main Road, \r\n Villipalayam, \r\n Namakkal District.', 'Arts'),
(1058, '11425', 'Rainbow College of Education', 'Rainbow College of Education, \r\n Kannoorpatty Main Road, \r\n Puduchatram, \r\n Namakkal District.', 'Arts'),
(1059, '11426', 'Rajapalayam Deivanaiammal College of Education', 'Rajapalayam Deivanaiammal College of Education, \r\n Ellur road, Kalangani Post,\r\n Namakkal District', 'Arts'),
(1060, '11428', 'Shri Vidhya Mandhir College of Education', 'Shri Vidhya Mandhir College of Education, \r\n Gurusamipalayam, Rasipuram Taluk, \r\n Namakkal District - 637 403.', 'Arts'),
(1061, '11430', 'Sri Amirtha College of Education', 'Sri Amirtha College of Education, \r\n Salem Road, Ponnusamy Nagar, Pappinayakkanpatty Post,\r\n Namakkal District - 637 003.', 'Arts'),
(1062, '11431', 'Sri Venglamani Amman College of Education', 'Sri Venglamani Amman College of Education, \r\n Nallur, N.Paduppatty Post, Trichy Main Road, Namakkal 637001.', 'Arts'),
(1063, '11432', 'Sri Vidya Mandir College of Education', 'Sri Vidya Mandir College of Education, \r\n Dr. Hedgewar Nagar, \r\n Kattur Road, Rasipuram, \r\n Namakkal District.', 'Arts'),
(1064, '11434', 'Star College of Education', 'Star College of Education, \r\n Periya Manali Post, \r\n Trichengode Taluk, \r\n Namakkal Disitrict - 637 410.', 'Arts'),
(1065, '11435', 'Vidayaa Vikas College of Education', 'Vidayaa Vikas College of Education, \r\n S.F.No.131, Varagurampatti, \r\n Andipalayam Post, \r\n Tiruchengode - 637 214. \r\n Namakkal District.', 'Arts'),
(1066, '11436', 'Vivekanandha College of Education for Women', 'Vivekanandha College of Education for Women, \r\n Elampalayam, \r\n Tiruchengode, \r\n Namakkal District - 637 205', 'Arts'),
(1067, '11437', 'Kalaimagal College of Education', 'Kalaimagal College of Education, Namagiripet, Rasipuram Taluk, Namakkal District - 637 406', 'Arts'),
(1068, '11438', 'Sri Rengeswarer College of Education', 'Sri Rengeswarer College of Education, Alanganatham Pirivu, Pottireddipatti, Namakkal District – 637 013', 'Arts'),
(1069, '11439', 'Dharma Vidyaalaya College of Education', 'Dharma Vidyaalaya College of Education, Poonthottam, Melkalingam Post, Ariyur Nadu, Kolli Hills – 637 411, Namakkal District', 'Arts'),
(1070, '11441', 'Muthayammal College of Education', 'Muthayammal College of Education, \r\n  Street No.Sh.79, \r\n Kakkaveri Village and Post, Rasipuram Taluk& City, \r\n Namakkal District - 637 408.', 'Arts'),
(1071, '11443', 'JKK Nattraja College of Education', 'JKK Nattraja College of Education\r\n Ethimedu Village, \r\n Valayakaranur Post, Tiruchengode Taluk\r\n Kumarapalayam, Namakkal District.', 'Arts'),
(1072, '11501', 'Christian College of Education', 'Christian College of Education,\r\n Venkatesapuram,\r\n Permbalur post & Taluk,\r\n Perambalur District-621 212.', 'Arts'),
(1073, '11502', 'Dhanalakshmi Srinivasan College of Education', 'Dhanalakshmi Srinivasan College of Education, Perambalur – 621 212', 'Arts'),
(1074, '11504', 'Eden Gardens College of Education', 'Eden Gardens College of Education, \r\n Udumbiam, Venganoor Post, \r\n Vepanthattai Taluk, \r\n Perambalur District-621 116.', 'Arts'),
(1075, '11506', 'JRS College of Education', 'JRS College of Education,\r\n Selcrim Land, \r\n Annamangalam, \r\n Perambalur District – 621 102', 'Arts'),
(1076, '11508', 'Sri Ramakrishna College of Education', 'Sri Ramakrishna College of Education,\r\n Sri Sarada Nagar,\r\n National Highway, \r\n Siruvachur Post, Perambalur – 621 113.', 'Arts'),
(1077, '11509', 'Swami Vivekananda College of Education', 'Swami Vivekananda College of Education, 66D, Mattur Road, Arumbavur(PO), Perambalur District- 621103.', 'Arts'),
(1078, '11510', 'Thanthai Hans Roever College of Educatio', 'Thanthai Hans Roever College of Education, \r\n Elambalur, \r\n Perambalur 621 212', 'Arts'),
(1079, '11511', 'Vidhya Vikas Plus The Institute of Education', 'Vidhya Vikas Plus The Institute of Education, \r\n Udumbiam Village, \r\n Venganur Post, \r\n Veppanthattai Taluk, \r\n Perambalur District– 621 116', 'Arts'),
(1080, '11601', 'Auxilium College of Education for Women', 'Auxilium College of Education for Women,\r\n Regunathapuram Post, \r\n Karambakudi Via., \r\n Alangudi Taluk, \r\n Pudukkottai Dt. – 622 302', 'Arts'),
(1081, '11604', 'Bishop Packiam Arokiaswamy College of Education', 'Bishop Packiam Arokiaswamy College of Education, \r\n Vamban Post, Alangudi,\r\n Pudukkottai – 622 303.', 'Arts'),
(1082, '11605', 'Government College of Education', 'Government College of Education, \r\n Pudukkottai – 622 001.', 'Arts'),
(1083, '11606', 'J.J. College of Education,', 'J.J. College of Education,\r\n J.J.Nagar, Siva Puram Post, \r\n Namanasamudram\r\n Pudukkottai 622 404', 'Arts'),
(1084, '11608', 'Keerrai Thamil Selvan College of Education for Women', 'Keerrai Thamil Selvan College of Education for Women, \r\n KTS Nagar, \r\n Sathiyamangalam Post, \r\n Pudukottai District-622 501.', 'Arts'),
(1085, '11609', 'Mahatma College of Education', 'Mahatma College of Education,\r\n Ariyur, \r\n Annavasal Road, \r\n Mathiyanallore Post, \r\n Iluppur Taluk, \r\n Pudukkottai District', 'Arts'),
(1086, '11611', 'Mother Teresa College of Education', 'Mother Teresa College of Education\r\n Mettusalai, Illuppur, Pudukkottai District–622 102', 'Arts'),
(1087, '11612', 'Naina Mohamed College of Education', 'Naina Mohamed College of Education,\r\n Rajendrapuram , \r\n Aranthangi Taluk, \r\n Pudukkottai District – 614 624.', 'Arts'),
(1088, '11613', 'Ponmari College of Education', 'Ponmari College of Education,\r\n Pommadimalai, \r\n Sathiyamangalam Panchayat, \r\n Narthamalai Post, \r\n Annavasal Via. Kulathur Taluk, \r\n Pudukkottai – 622 101.', 'Arts'),
(1089, '11614', 'S.M.R. College of Education', 'S.M.R. College of Education\r\n Nataraj Nagar,\r\n Pudukkottai Main Road, \r\n Mathur, Pudukkottai District.', 'Arts'),
(1090, '11615', 'S.V.S College of Education', 'S.V.S College of Education,\r\n Pudukottai South Village,\r\n Kadaiyakudi Post, \r\n No.35, S.R. Nagar,\r\n Pudukottai District-622 003.', 'Arts'),
(1091, '11616', 'Sastha College of Education', 'Sastha College of Education, Karaikudi- Aranthangi Main Road, Keelanilaikottai(PO), Pudukkottai (DT),- 622209', 'Arts'),
(1092, '11617', 'Sri Bharathi College of Education', 'Sri Bharathi College of Education,\r\n Pudukkottai-Arantangi Road,\r\n  Kaikkurichi Post, \r\n Alangudi Taluk, \r\n Pudukkottai – District - 622 303', 'Arts'),
(1093, '11618', 'Sri Manickam College of Education', 'Sri Manickam College of Education,\r\n MRM Nagar, \r\n Sivapuram, \r\n Namanasamuthiram Post, \r\n Pudukkottai – 622 422.', 'Arts'),
(1094, '11619', 'St. Xaviers College of Education', 'St. Xaviers College of Education,\r\n Venkatakulam, \r\n Alangudi Taluk,\r\n Pudukkottai District-622 303', 'Arts'),
(1095, '11620', 'Sudharsan College of Education', 'Sudharsan College of Education,\r\n Perumanadu, \r\n Vayalogam Post, \r\n Illupur Taluk, \r\n Pudukkottai – 622 104.', 'Arts'),
(1096, '11622', 'Venkatesvara College of Education', 'Venkatesvara College of Education,\r\n Thirumalairaya Samudram, \r\n Kaikurichi Post\r\n Pudukkottai District – 622 303.', 'Arts'),
(1097, '11623', 'Vestley College of Education', 'Vestley College of Education,\r\n Koothdivayal, Silathur Village,\r\n Kuunakkurumbi, Aranthangi – 614 616, \r\n Pudukkottai District.', 'Arts'),
(1098, '11624', 'Bharathi Vidyalaya College of Education', 'Bharathi Vidyalaya College of Education(Women), 193/201 Trichy Road, Tirugokarnam, Pudukkottai- 2.', 'Arts'),
(1099, '11625', 'VSK College of Education', 'VSK College of Education, \r\n  Pulivalam Village and Post, \r\n Thirumayam Taluk, \r\n Pudukkottai District - 622 507.', 'Arts'),
(1100, '11701', 'Ayira Vaisya College of Education', 'Ayira Vaisya College of Education, \r\n  Sowkathali Street, \r\n Paramakudi, \r\n Ramanathapuram District – 623 707', 'Arts'),
(1101, '11702', 'C.S.I. College of Education', 'C.S.I. College of Education,\r\n C.S.I. Institutional Campus, \r\n Singarathoppu,\r\n Madurai Road, \r\n Ramanathapuram – 623 501.\r\n Ramanathapuram Dt.', 'Arts'),
(1102, '11703', 'Ganapathy College of Education', 'Ganapathy College of Education,\r\n Melakavanoor post, \r\n Paramakudi – 623 706.\r\n Ramanathapuram Dt.', 'Arts'),
(1103, '11704', 'Puratchi Thalaivar Dr.M.G.R. College of Education', 'Puratchi Thalaivar Dr.M.G.R. College of Education,\r\n  Kalkinatruvalasai, Keelanagatchi Post,\r\n Uchippuli – 623 534, \r\n Ramanathapuram District.', 'Arts'),
(1104, '11705', 'R.K. Samy College of Education', 'R.K. Samy College of Education,\r\n Cheyyalur,\r\n Ettivayal Post,\r\n Chathirakudi (Via), \r\n Ramanathapuram – 623 527.', 'Arts'),
(1105, '11706', 'Thiyagi Dharmakkan Amirtham College of Education', 'Thiyagi Dharmakkan Amirtham College of Education, East Coast Road, Kannirajapuram, Kadaladi Taluk, Ramanathapuram District - 623 135', 'Arts'),
(1106, '11707', 'Sri Karpaga Vinayagar College of Education', 'Sri Karpaga Vinayagar College of Education, Kamathakudi Bus Stop, Madurai – Rameswaram High way, Paramakudi - 623 707, Ramanathapuram District', 'Arts'),
(1107, '11708', 'Mohammed Sathak Dasthagir Teacher Training College', 'Mohammed Sathak Dasthagir Teacher Training College, Inside Collectorate Complex, Pattinamkathan (P.o), Ramanathapuram District - 623 503.', 'Arts'),
(1108, '11801', 'A.V.S. College of Education', 'A.V.S. College of Education, Attur Main Road, Ramalingapuram, Salem District - 636 016.', 'Arts'),
(1109, '11805', 'Bharathiyar College of Education', 'Bharathiyar College of Education, Deviyakurichi - 636 112, Attur Taluk, \r\n Salem District.', 'Arts'),
(1110, '11807', 'Ganesh College of Education', 'Ganesh College of Education, \r\n Mettupatti, \r\n Valapaddy Post, \r\n Salem District.', 'Arts'),
(1111, '11810', 'K.S. College of Education', 'K.S. College of Education, \r\n Opp. Periyar University, \r\n Kottagoundampatty, Salem - 636 011.', 'Arts'),
(1112, '11811', 'The Kavery College of Education for Women', 'The Kavery College of Education for Women, \r\n M.Kalipatti, Mecheri, \r\n Mettur Taluk, \r\n Salem District - 636 453.', 'Arts'),
(1113, '11814', 'Kongu Naadu College of Education', 'Kongu Naadu College of Education, \r\n Mamangam, Jagir Ammapalayam, \r\n Salem Taluk & District - 636 302.', 'Arts'),
(1114, '11815', 'Kongu Naadu College of Education for \r\n Women, \r\n Mamangam Post, Salem - 636 302', 'Kongu Naadu College of Education for \r\n Women, \r\n Mamangam Post, Salem - 636 302', 'Arts'),
(1115, '11816', 'Mahendhira College of Education', 'Mahendhira College of Education, \r\n Salem-Attur Main Raod,\r\n Minnampalli (Post),\r\n Salem – 636 106.', 'Arts'),
(1116, '11817', 'Maruthi College of Education', 'Maruthi College of Education, Manivizhundan South(PO), Attur(Tk), Salem(Dt),- 636121.', 'Arts'),
(1117, '11818', 'Padmavani College of Education', 'Padmavani College of Education, \r\n Narasothipatti, Salem District - 636 004.', 'Arts'),
(1118, '11819', 'PSG College of Education', 'PSG College of Education, \r\n Palanisamy Gounder Thottam, \r\n Tiruchengode Road, \r\n Sankari, Salem District-637 301.', 'Arts'),
(1119, '11820', 'Rabindharanath Tagore College of Education for Women', 'Rabindharanath Tagore College of Education for Women, \r\n Veerachipalayam, \r\n Sankari West Post, Sankari Taluk, \r\n Salem District - 637 303.', 'Arts'),
(1120, '11821', 'Sengunthar College of Education', 'Sengunthar College of Education, \r\n Tharamangalam, Omalur Taluk, \r\n Salem District - 636 502', 'Arts'),
(1121, '11822', 'Shakthi Kailash College of Education for Women', 'Shakthi Kailash College of Education for Women, \r\n Military Road, \r\n Ammapet, Salem - 636 003.', 'Arts'),
(1122, '11823', 'Sri Ganesh College of Education', 'Sri Ganesh College of Education, \r\n Kamarajar Nagar Colony, \r\n Ammapet, \r\n Salem- 636 014.', 'Arts'),
(1123, '11824', 'Sri JayaJothi College of Education', 'Sri JayaJothi College of Education, \r\n Steelplant Road, \r\n Pavalathanur Post Tharamangalam Via., Salem District-636 502.', 'Arts'),
(1124, '11825', 'Sri Sarada Institute for Teacher Training', 'Sri Sarada Institute for Teacher Training, \r\n Rajaji Salai, Narasingapuam Post - 636 108,\r\n Attur Taluk, Salem District.', 'Arts'),
(1125, '11826', 'Sri Sarada College of Education, (Autonomous)', 'Sri Sarada College of Education, (Autonomous)\r\n Fairlands, Salem-636 016.', 'Arts'),
(1126, '11827', 'Sri Swamy College of Education for Women', 'Sri Swamy College of Education for Women, \r\n No.59/1B Masinaickenpatti, \r\n Ayothiyapattanam, Salem District.', 'Arts'),
(1127, '11828', 'St. Basil College of Education for Women', 'St. Basil College of Education for Women, \r\n Mahendrapuri, Near Housing Board, \r\n Yercaud Main Road, \r\n Chinnathirupathi Post, \r\n Salem -8.', 'Arts'),
(1128, '11829', 'St. Grace Lilian College of Education', 'St. Grace Lilian College of Education, \r\n Thathanoor Via,\r\n Poovanoor Post,\r\n Paruthikadu, \r\n Salem District – 636 122.', 'Arts'),
(1129, '11830', 'Swaminathan Saraswathi College of Education for Women', 'Swaminathan Saraswathi College of Education for Women, \r\n Masinaickenpatti, \r\n Ayothiyapattanam, Salem - 636 103.', 'Arts'),
(1130, '11831', 'Tagore College of Education', 'Tagore College of Education, \r\n Deviakurichi, Attur Taluk, \r\n Salem District-636 112.', 'Arts'),
(1131, '11832', 'The Kavery College of Education', 'The Kavery College of Education, \r\n M.Kalipatti, \r\n Mecheri, \r\n Mettur Taluk, \r\n Salem District.', 'Arts'),
(1132, '11833', 'Thiagarajar College of Education', 'Thiagarajar College of Education, \r\n Lakshmi Nagar, \r\n Valapaddy, \r\n Salem District - 636115.', 'Arts'),
(1133, '11835', 'Vettri Vel College of Education', 'Vettri Vel College of Education, \r\n Jalakandapuram Main Road, Tharamangalam, Salem District - 636 502.', 'Arts'),
(1134, '11836', 'Viswa Bharathi College of Education', 'Viswa Bharathi College of Education, \r\n Veerachipalayam, Sankari West, \r\n Salem District.', 'Arts'),
(1135, '11837', 'Vysya College of Education', 'Vysya College of Education, \r\n Ramakrishnapuram, Masinaickenpatty, \r\n Ayodhiyapattinam, \r\n Salem - 636 103.', 'Arts'),
(1136, '11838', 'PSM College of Education', 'PSM College of Education, 5/81 – 2, Rakkipatti (B.o), Sankagiri NH Road, Vembadithalam Post, Salem District – 637 504', 'Arts'),
(1137, '11839', 'Dhanam College of Education', 'Dhanam College of Education, Kuppur -Dharapuram Privu road, Near Salem Ariport, Dharapuram Post, Omalur Taluk, Salem District - 636 309', 'Arts'),
(1138, '11840', 'Amala College of Education', 'Amala College of Education, Morasapatti, Idappadi, Salem District - 637 101.', 'Arts'),
(1139, '11841', 'Kurinchi B.Ed., College', 'Kurinchi B.Ed., College, \r\n Rasipuram Main Road, \r\n Malliakarai Village and Post, Attur City and Taluk, Salem District - 636107', 'Arts'),
(1140, '11842', 'Bharathi College of Education', 'Bharathi College of Education,\r\n Ward J, Court Road, Maravaneri Village & Post Office, Salem Taluk, Salem District - 636 007.', 'Arts'),
(1141, '11843', 'Sri Gayathiri College of Education', 'Sri Gayathiri College of Education, \r\n Sidhanur Street, Ariyagoundapatty Village, Thalavaipatty Post, Salem Taluk & District - 636 302.', 'Arts'),
(1142, '11844', 'Paavendhar College of Education', 'Paavendhar College of Education, \r\n  Sarvoy Bus, Manivizhundhan South Village, Attur Taluk, \r\n Salem District - 636 121.', 'Arts'),
(1143, '11845', 'National College of Education', 'National College of Education,\r\n Ayyampudur Vilage,\r\n Kolathur Post,\r\n Metturdam Taluk, Salem District.', 'Arts'),
(1144, '11901', 'Annai Teresa College of Education', 'Annai Teresa College of Education,\r\n Ariyakudi Post,\r\n Karaikudi Taluk,\r\n Sivagangai District – 630 202.', 'Arts'),
(1145, '11902', 'Arumugam Pillai Seethai Ammal College of Education', 'Arumugam Pillai Seethai Ammal College of Education, \r\n Vallal Arumugam Pillai Road, Tiruppathur – 630 211, \r\n Sivagangai District.', 'Arts'),
(1146, '11903', 'Kalvithanthai AKR Sourashtra Teachers College', 'Kalvithanthai AKR Sourashtra Teachers College,\r\n Sayanarpuram, Panaiyur Post\r\n Sivagangai District - 625 009.', 'Arts'),
(1147, '11904', 'Matha College of Teacher Education', 'Matha College of Teacher Education,\r\n Annavasal Road, \r\n Vaanpuram,\r\n Manamadurai – 630 606, \r\n Sivagangai Dt.', 'Arts'),
(1148, '11905', 'Roseline College of Education', 'Roseline College of Education,\r\n Victoria Nagar, Opp.R.C. Church,\r\n Sivagangai - 630 561.', 'Arts'),
(1149, '11906', 'S.Preethi B.Ed College of Education', 'S.Preethi B.Ed College of Education, \r\n Arasanoor, Sivagangai Road, \r\n Sivagangai Taluk, \r\n Sivagangai District -625 601.', 'Arts'),
(1150, '11907', 'Sri Raaja Raajan College of Education', 'Sri Raaja Raajan College of Education, \r\n No.1, S.K.M. Building, \r\n T.T.Nagar, 1st Street, \r\n Karaikudi – 630 001, \r\n Sivagangai District', 'Arts'),
(1151, '11908', 'Sri Raaja Raajan College of Education for Women', 'Sri Raaja Raajan College of Education for Women, \r\n  No.1, S.K.M. Building, \r\n T.T.Nagar, 1st Street, \r\n Karaikudi – 1, \r\n Sivagangai District', 'Arts'),
(1152, '11909', 'Thavathiru Kundrakudi Adigalar College of Education for Women', 'Thavathiru Kundrakudi Adigalar College of Education for Women, Kundrakudi 630 206. Sivagangai District.', 'Arts'),
(1153, '11910', 'Vickram Teacher Training College', 'Vickram Teacher Training College, \r\n Sreenivasa Gardens, \r\n Madurai Sivagangai Road, \r\n Enathi 630 561, Sivagangai District.', 'Arts'),
(1154, '11911', 'Vivekananda College of Education', 'Vivekananda College of Education,\r\n Thiruppathur-Karaikudi Main Road (Pillaiyarpatty Via), Adhikaram Post, \r\n Kummangudi Village – 630 207,\r\n Tiruppattur (Tk), Sivagangai Dt.', 'Arts'),
(1155, '11912', 'P.S.Y. College of Education', 'P.S.Y. College of Education, Arasanoor, Thirumansolai Post, Sivagangai District – 630 561', 'Arts'),
(1156, '11914', 'St. Paul’s College of Education', 'St. Paul’s College of Education, Devakottai – Karaikudi Highways, Mullikkundu, Devakottai, Sivagangai District – 630 303', 'Arts'),
(1157, '11915', 'Dr.Zakir Husain College of Education', 'Dr.Zakir Husain College of Education, Paramakudi Road, Illayangudi Village, Illayangudi Post & Taluk, Sivagangai District - 630 702.', 'Arts'),
(1158, '11916', 'St.Joseph College of Education', 'St.Joseph College of Education, T.Soorakkudi Panchayath, Near Leader\'s School, Trichy Bypass Road, Karaikudi,Sivagangai - 630002', 'Arts'),
(1159, '11917', 'Al-Amir College of Education', 'Al-Amir College of Education,\r\n Thiruppathur Post &Taluk,\r\n Sivagangai District – 630 211.', 'Arts');
INSERT INTO `institution_predefined` (`id`, `InstitutionCode`, `InstitutionName`, `Address`, `Stream`) VALUES
(1160, '11918', 'Santha College of Education for women', 'Santha College of Education for women,\r\n Cholapuram Village & Post\r\n Sivagangai Taluk& District-630 557.', 'Arts'),
(1161, '11919', 'Sri Vinayaga College of Education', 'Sri Vinayaga College of Education, \r\n  Aranmanaisiruvayal Village & Post, Karaikudi Taluk, Kalayarkoil City,\r\n  Sivagangai District-630305.', 'Arts'),
(1162, '11920', 'Kavi College of Education', 'Kavi College of Education, \r\n  Vadagudi Street & Village, \r\n Kattaiyur Post, Karaikudi Taluk, Sivagangai District - 630 106.', 'Arts'),
(1163, '12003', 'Annai College of Education', 'Annai College of Education,\r\n Kovilacherry,\r\n Kumbakonam, \r\n Thanjavur District - 612 503', 'Arts'),
(1164, '12004', 'Annai Fathima College of Education', 'Annai Fathima College of Education,\r\n Kovilacheri Post, \r\n Kumbakonam – 612 503\r\n Thanjavur District.', 'Arts'),
(1165, '12005', 'Arun College of Education', 'Arun College of Education,\r\n Arun Nagar, Vallam, \r\n Thanjavur – 613 403', 'Arts'),
(1166, '12006', 'Bharath College of Education', 'Bharath College of Education, \r\n Near New Bus Stand, \r\n Trichy Road, Thanjavur District – 613 005.', 'Arts'),
(1167, '12007', 'Bon Secours College of Education', 'Bon Secours College of Education,\r\n Vilar Bye-pass Road, \r\n Thanjavur– 613 007', 'Arts'),
(1168, '12008', 'Christ College of Education for Women', 'Christ College of Education for Women, \r\n (Parry Matriculation School Road), \r\n Mela Mettu Street, Vallam, \r\n Thanjavur Disitrict-613 403.', 'Arts'),
(1169, '12009', 'Dr.S.R.J.College of Education', 'Dr.S.R.J.College of Education, VOC Nagar, \r\n Thanjavur- 613 007.', 'Arts'),
(1170, '12010', 'Dr. Vellasamy Nadar College of Education', 'Dr. Vellasamy Nadar College of Education, \r\n Manakkarambai, Ramapuram Post, \r\n Thitai Road, Thanjavur-613 003.', 'Arts'),
(1171, '12011', 'Government College of Education', 'Government College of Education, \r\n Orathanad – 614 625,\r\n Thanjavur District', 'Arts'),
(1172, '12012', 'K.S.K. College of Education', 'K.S.K. College of Education,\r\n Thanjavur Main Road,\r\n Ammapettai Post, Kumbakonam Taluk, \r\n Thanjavur – 612 702', 'Arts'),
(1173, '12013', 'Marudupandiyar College of Education', 'Marudupandiyar College of Education,\r\n  Trichy Main Road, \r\n Vallam Post, Thanjavur – 613 403', 'Arts'),
(1174, '12014', 'Mass College of Education', 'Mass College of Education,\r\n Chennai Salai, \r\n Kallapulliyur Village,\r\n Kumbakonam – 612 501\r\n Thanjavur District', 'Arts'),
(1175, '12016', 'Sri Kumaran B.Ed College', 'Sri Kumaran B.Ed College, Kumaran Nagar, Thamarankottai, Thanjavur- 614613.', 'Arts'),
(1176, '12017', 'Sri Venkateswara College of Education', 'Sri Venkateswara College of Education,\r\n V.M. Krishnamoorthy Nagar, \r\n Peravurani-614 804, \r\n Thanjavur District.', 'Arts'),
(1177, '12018', 'St. John De Britto College of Education', 'St. John De Britto College of Education,\r\n Bishop Sundaram Complex, \r\n Pudukkottai Road, \r\n Thanjavur - 613 007.', 'Arts'),
(1178, '12019', 'St.Xavier College of Educaiton', 'St.Xavier College of Educaiton, 45, Karuppur, Maruthanallur- 612402. Kumbakonam(Tk), Thanjavur(Dt)', 'Arts'),
(1179, '12020', 'Star Lion College of Education', 'Star Lion College of Education,\r\n Agraharam, Ayyampet, \r\n Papanasam Taluk, Thanjavur District - 614 201.', 'Arts'),
(1180, '12021', 'Swami Vivekananda College of Education', 'Swami Vivekananda College of Education,\r\n  Pillaiyarpatti, Vallam, \r\n Thanjavur District - 613 403', 'Arts'),
(1181, '12022', 'Umamaheswaranar College of Education', 'Umamaheswaranar College of Education,\r\n Karanthai Tamil Sangam, \r\n Karanthai, Thanjavur-613 002.', 'Arts'),
(1182, '12023', 'Vandayar College of Education,', 'Vandayar College of Education,\r\n Nagai Main Road, Pulavarnatham,\r\n Mariamman Kovil, Tanjore – 613 501.', 'Arts'),
(1183, '12024', 'Ramya Sathianathan College of Education', 'Ramya Sathianathan College of Education\r\n  Street No.16,\r\n Pudupatty Post & Village,\r\n Thanjavur District – 613 402', 'Arts'),
(1184, '12025', 'Simpra College of Education', 'Simpra College of Education, 203/2, Medical College Road, Melaveli, Thanjavur - 613 007', 'Arts'),
(1185, '12026', 'Haji S.M.S.Shaik Jalaludeen B.Ed. College', 'Haji S.M.S.Shaik Jalaludeen B.Ed. College, Pattukkottai Road, E.B.Office Backside, Adirampattinam - 614 701, Thanjavur District.', 'Arts'),
(1186, '12027', 'Simpra College of Education', 'Simpra College of Education, Plot/Kashara No.218/6, Sengipatti Village &Post, \r\n Thanjavur Taluk & District - 603 402', 'Arts'),
(1187, '12028', 'Sri Meenakshi Chandrasekaran College of Education', 'Sri Meenakshi Chandrasekaran College of Education, \r\n Karambayam Village and Post, Pattukottai Taluk, Thanajvur District - 614 626.', 'Arts'),
(1188, '12101', 'St.Joseph’s College of Education', 'St.Joseph’s College of Education,\r\n Woodcock Road,\r\n St.Mary’s Hill, \r\n The Nilgiris -643 001', 'Arts'),
(1189, '12201', 'Annai College of Education for Women', 'Annai College of Education for Women, \r\n Anaimalayan Patty, \r\n Theni Dist.- 625 526.', 'Arts'),
(1190, '12202', 'Nadar Saraswathi College of Education', 'Nadar Saraswathi College of Education, Vadapudupatti, Annanji(PO), Theni- 625 531.', 'Arts'),
(1191, '12204', 'Shri V.P.R. College of Education', 'Shri V.P.R. College of Education\r\n Bodendirapuram Road, Kodangipatti - 625 547, Bodinayakkanur Taluk, Theni District', 'Arts'),
(1192, '12205', 'Sourashtra College of Education', 'Sourashtra College of Education,\r\n Veerapandi, Theni 625 534.', 'Arts'),
(1193, '12206', 'St. Aloysius College of Education', 'St. Aloysius College of Education\r\n Royappanpatty, Theni District.', 'Arts'),
(1194, '12207', 'St.Anne’s College of Education for \r\n Women', 'St.Anne’s College of Education for \r\n Women,\r\n J.A.College Campus, \r\n Periyakulam-625 601. Theni District', 'Arts'),
(1195, '12208', 'Theni Kammavar Sangam College of Edcuation', 'Theni Kammavar Sangam College of Edcuation, Kammavar Nagar, Koduvilarpatti, Veerapandi (via), Theni- 625534', 'Arts'),
(1196, '12209', 'Thiraviam College of Education', 'Thiraviam College of Education,\r\n Periyakulam Road, \r\n Thamaraikulam post,\r\n Kailasapatty-625 605,\r\n Theni District.', 'Arts'),
(1197, '12210', 'Chellammal College of Education', 'Chellammal College of Education, Theni Road, (EB Office Backside), Andipatti, Theni District – 625 512', 'Arts'),
(1198, '12211', 'Sri Vikasa College of Education', 'Sri Vikasa College of Education, \r\n Ward No.4, Kombai Road, Uthampalayam, \r\n Theni District – 625 533', 'Arts'),
(1199, '12212', 'S.K.A College of Education', 'S.K.A College of Education, \r\n Ponnagar Village, Aundipatti Post & Taluk, Theni District - 625 512.', 'Arts'),
(1200, '12213', 'Spice Valley Teacher Education', 'Spice Valley Teacher Education\r\n Colony Street,\r\n Bodinayakanur Post & Taluk\r\n Theni District.', 'Arts'),
(1201, '12303', 'G.R.T. College of Education', 'G.R.T. College of Education,\r\n Chennai bye pass Road, \r\n Tiruttani – 631 209.\r\n Thiruvallur District.', 'Arts'),
(1202, '12304', 'E.S.Subramaniam Memorial College of Education', 'E.S.Subramaniam Memorial College of Education,\r\n  Hospital Road, Podhattoorpet, \r\n Pallipat Taluk, \r\n Thiruvallur District – 631 208.', 'Arts'),
(1203, '12305', 'G.R.D. College of Education', 'G.R.D. College of Education,\r\n Padur, Ramancheri village, \r\n Thiruvallur Taluk & District-631 210.', 'Arts'),
(1204, '12306', 'Indhira College of Education', 'Indhira College of Education,\r\n No.1, VGR Nagar, VGR Gardens, \r\n Pandur - 631 203\r\n Thiruvallur Taluk & District.', 'Arts'),
(1205, '12307', 'Kalaibharathi B.Ed College', 'Kalaibharathi B.Ed College, \r\n Padmapuram Village,\r\n Erumbi Post, \r\n Pallipet Taluk, \r\n Thiruvallur-631 302.', 'Arts'),
(1206, '12308', 'Rangaswamy College of Education', 'Rangaswamy College of Education,\r\n Perumal Koil Street, Senthil Nagar, Choambedu, \r\n Chennai – 600 062.', 'Arts'),
(1207, '12311', 'Sree Sastha College of Education', 'Sree Sastha College of Education,\r\n Chembarambakkam, \r\n Poonamallee Taluk,\r\n Tiruvallur District-602 103.', 'Arts'),
(1208, '12313', 'Sri Devi College of Education', 'Sri Devi College of Education, Krishnapuram, Ponneri - 601 204, Thiruvallur District', 'Arts'),
(1209, '12314', 'TVM College of Education', 'TVM College of Education, TVM Nagar, Podaturpet- 631 208. Thiruvallur Dist', 'Arts'),
(1210, '12315', 'Vishwaksena College of Education', 'Vishwaksena College of Education,\r\n 104 –Pollivakkam, \r\n Sriperumbudur-Thiruvallur Highway, \r\n Thiruvallur-602 002.', 'Arts'),
(1211, '12316', 'Vadaranyam College of Education', 'Vadaranyam College of Education, 1/190, Adigathur Road, Kadambathur, Thiruvallur Taluk & District - 631 203', 'Arts'),
(1212, '12317', 'Vivekananda College of Education', 'Vivekananda College of Education,\r\n No.82, Thiruvallur Road, Uthukottai(TK)- 602026.Thiruvallur(DT), Tamilnadu.', 'Arts'),
(1213, '12318', 'Good Shepherd College of Education', 'Good Shepherd College of Education, Periyapalayam High Road, Kasuva, Pakkam Village, Thiruvallur District – 602 024', 'Arts'),
(1214, '12319', 'C.M Annamalai College of Education', 'C.M Annamalai College of Education, \r\n Vellathur Village, Adhivarapuram Post, Pallipet Taluk, R.K.Pet (Via), Thiruvallur District - 631 303', 'Arts'),
(1215, '12320', 'Mangalam College of Education', 'Mangalam College of Education, \r\n Thirumullaivoyal Village, \r\n Sathiyamurthy Nagar Post, Ambattur Taluk, Chennai City, \r\n Thiruvallur - 600 062.', 'Arts'),
(1216, '12402', 'Annai Theresa’s College of Education for Women', 'Annai Theresa’s College of Education for Women, \r\n Therespuram, Pavithiram Post,\r\n Thiruvannamalai District- 606806.', 'Arts'),
(1217, '12403', 'Ansaldo College of Education', 'Ansaldo College of Education,\r\n Ansaldo Nagar, \r\n Maruthyvambadi Post, \r\n Chetpet, \r\n Thiruvannamalai District - 606 801.', 'Arts'),
(1218, '12404', 'Arunachala College of Education', 'Arunachala College of Education,\r\n Old No.12, New No.31, \r\n Kosa Street, \r\n Thiruvannamalai 606 601.', 'Arts'),
(1219, '12405', 'Arunai College of Education', 'Arunai College of Education,\r\n Nallan Pillai Petral Village,\r\n Tiruvannamalai Taluk & District - 606 611.', 'Arts'),
(1220, '12406', 'Chezhian College of Education', 'Chezhian College of Education,\r\n Thenpallipattu Village, \r\n Kalasapakkam, \r\n Polur Taluk, \r\n Thiruvannamalai District-606 751.', 'Arts'),
(1221, '12407', 'Crescent College of Education', 'Crescent College of Education,\r\n Somasipadi, Puthur, \r\n Thiruvannamalai District - 606 611.', 'Arts'),
(1222, '12408', 'Dhivya College of Education', 'Dhivya College of Education,\r\n Gingee Road, Chetpet, Polur Taluk\r\n Thiruvannamalai District - 606 801', 'Arts'),
(1223, '12409', 'Dr.Meenakshi College of Teacher Education', 'Dr.Meenakshi College of Teacher Education, Chengam, 606701, Thiruvannamalai Dt.', 'Arts'),
(1224, '12410', 'G.K. College of Education', 'G.K. College of Education,\r\n No.10/44, Small Street,\r\n Cheyyar,\r\n Thiruvannamalai District – 604 407.', 'Arts'),
(1225, '12411', 'Grace College of Education', 'Grace College of Education,\r\n Nedungunam Village & Post, \r\n Vandavasi Taluk, \r\n Thiruvannamalai District - 606 807', 'Arts'),
(1226, '12416', 'Sri Balaji College of Education', 'Sri Balaji College of Education, Arcot Road, Irumbedu, Arni Taluk, Thiruvannamalai District-632 317.', 'Arts'),
(1227, '12418', 'Sri Renugambal College of Education', 'Sri Renugambal College of Education, \r\n CC Road, Ettivadi,\r\n Polur,Thiruvannamalai District-606 907', 'Arts'),
(1228, '12419', 'Sri Vari College of Education', 'Sri Vari College of Education\r\n Thenarasambattu, \r\n Thiruvannamalai District- 606 611.', 'Arts'),
(1229, '12420', 'Sri Venkatachalapathy College of Education', 'Sri Venkatachalapathy College of Education\r\n Thenarasambattu, \r\n Thiruvannamalai District- 606 611.', 'Arts'),
(1230, '12421', 'Sri Venkateswara College of Education', 'Sri Venkateswara College of Education, \r\n Parasur, Cheyyar Taluk, \r\n Thiruvannamalai District- 604 409.', 'Arts'),
(1231, '12422', 'Suraj College of Education', 'Suraj College of Education, \r\n Melathangal, Chetpet, \r\n Vandavasi Taluk, \r\n Thiruvannamalai District-606 807', 'Arts'),
(1232, '12423', 'Thellar College of Education', 'Thellar College of Education,\r\n Tinidiivanam Road, \r\n Thellar, Vandavasi Taluk, \r\n Thiruvannamalai District-604 406.', 'Arts'),
(1233, '12424', 'Vidyalaya College of Education', 'Vidyalaya College of Education,\r\n Sirunathur Village, Tindivanam, Thiruvannamalai District.-604601', 'Arts'),
(1234, '12425', 'Vignesh College of Education', 'Vignesh College of Education,\r\n Melpathiyandal, \r\n Thandrampet Road, \r\n Thiruvannamalai District-606 603.', 'Arts'),
(1235, '12426', 'Wisdom College of Education', 'Wisdom College of Education,\r\n Chetpet Road, \r\n Cheyyartrai Vendran Village,\r\n  Cheyyar Taluk,\r\n Thiruvannamalai District-604 401.', 'Arts'),
(1236, '12427', 'Aravindhar College of Education', 'Aravindhar College of Education, Aravindhar Nagar – Thenpallipattu, Kalasapakkam – 606 751, Thiruvannamalai District', 'Arts'),
(1237, '12428', 'Jayam College of Education', 'Jayam College of Education,\r\n 260/1A1, Kalpoondi Road, Kilpennathur, Thiruvannamalai District – 604 601', 'Arts'),
(1238, '12430', 'Lakshmi Ammal College of Education', 'Lakshmi Ammal College of Education, Sirunathur – 604 601, Kilpennathur Union, Tiruvannamalai District', 'Arts'),
(1239, '12431', 'Al-Ameen College of Education', 'Al-Ameen College of Education, Main Road, Somasipadi – 606 611, Thiruvannamalai District', 'Arts'),
(1240, '12432', 'Vijay College of Education', 'Vijay College of Education, Mallavadi, Thiruvannamalai District – 606 805', 'Arts'),
(1241, '12433', 'International College of Education (Women)', 'International College of Education (Women), Arni – Chetpet Road, Nesal Village & Post, Tiruvannamalai District – 632 316', 'Arts'),
(1242, '12434', 'Krishna College of Education', 'Krishna College of Education,\r\n Meyyur Village and Post Office, \r\n  Tiruvannamalai Taluk & District - 606 753.', 'Arts'),
(1243, '12435', 'Sri Akilandeswari Colleg eof Education', 'Sri Akilandeswari Colleg eof Education\r\n Sembur Village\r\n Vandavasi Post & Taluk\r\n Tiruvannamalai District - 604 408.', 'Arts'),
(1244, '12501', 'Arunamalai College of Education', 'Arunamalai College of Education,\r\n Kumarapuram, \r\n Melavalsal Post,\r\n Mannargudi 614 001, \r\n Thiruvarur District,', 'Arts'),
(1245, '12502', 'Bharath College of Education', 'Bharath College of Education, \r\n Durgalaya Road, \r\n Thiruvarur District – 610 002.', 'Arts'),
(1246, '12503', 'STET College of Education for Women', 'STET College of Education for Women\r\n Sundarakoottai, \r\n Mannargudi Taluk,\r\n Thiruvarur District – 614 001', 'Arts'),
(1247, '12504', 'Veludayar College of Education', 'Veludayar College of Education,\r\n Meiporul Nagar, \r\n Durgalaya Road,\r\n Thiruvarur – 610 001.', 'Arts'),
(1248, '12505', 'Brilliant College of Education', 'Brilliant College of Education,\r\n Thiruvarur Main Road, Paruthicheri Village, Velur post, Thiruthuraipoondi Taluk, Thiruvarur - 614 715.', 'Arts'),
(1249, '12506', 'Sri Thiyagaraja Institute of Teacher Education', 'Sri Thiyagaraja Institute of Teacher Education\r\n Naveli Salai Street, Kattur Village & Post, Kudavasal Taluk, Thiruvarur District - 610 104', 'Arts'),
(1250, '12601', 'Annammal college of Education for women', 'Annammal college of Education for women, (Aided)\r\n Tiruchendur Road, Tuticorin -628002.', 'Arts'),
(1251, '12602', 'Chandy College of Education', 'Chandy College of Education, \r\n 2/45, North Street, Muthiahpuram, \r\n Tuticorin District - 628 005.', 'Arts'),
(1252, '12603', 'Dr. Sivanthi Aditanar college of Education', 'Dr. Sivanthi Aditanar college of Education, \r\n Tiruchendur, Tuticorin District - 628 215.', 'Arts'),
(1253, '12604', 'Dr.G.U.Pope college of Education', 'Dr.G.U.Pope college of Education, \r\n Sawyerpuram - 628 251,\r\n Tuticorin District.', 'Arts'),
(1254, '12605', 'St. Joseph’s college of Education', 'St. Joseph’s college of Education, \r\n Joseph Nagar, Puthukulam Post,\r\n Sattankulam (via),\r\n Tuticorin District - 628 704.', 'Arts'),
(1255, '12606', 'Punitha Ohm College of Education', 'Punitha Ohm College of Education, \r\n Kechilpuram, \r\n Pandavarmangalam Post, \r\n Kovilpatti, \r\n Thoothukudi District – 628 902.', 'Arts'),
(1256, '12607', 'Rev.John Thomas college of Education for women', 'Rev.John Thomas college of Education for women, \r\n Meignanapuram, \r\n Trichendur, Tuticorin District - 628 210', 'Arts'),
(1257, '12608', 'RMP CSI PSK Rajaratnam Memorial College of Education', 'RMP CSI PSK Rajaratnam Memorial College of Education, \r\n Sattankulam - 628 704, Tuticorin District.', 'Arts'),
(1258, '12609', 'St.Mary’s college of Education', 'St.Mary’s college of Education, \r\n Edmund Nagar, \r\n Seydunganallur,\r\n Tuticorin District.', 'Arts'),
(1259, '12610', 'St.Thomas College of Education', 'St.Thomas College of Education, \r\n Krishnarajapuram,\r\n Thoothukudi – 628 002.', 'Arts'),
(1260, '12611', 'V.O.C. college of Education', 'V.O.C. college of Education, (Aided)\r\n Palayamkottai road, \r\n Tuticorin District - 628 008', 'Arts'),
(1261, '12612', 'Sivanthi College of Education', 'Sivanthi College of Education, S.No.453, Pattanathar Garden, Piraikudiyeruppu, Udangudi, Tuticorin District – 628 203', 'Arts'),
(1262, '12613', 'Rajalakshmi College of Education', 'Rajalakshmi College of Education, No.1/261A, Thiruvallur Nagar, Vagaikulam, Mudivaithanendal Panchayat, Thoothukudi – 628 003', 'Arts'),
(1263, '12614', 'K.N.Subbaraj Memorial College of Education', 'K.N.Subbaraj Memorial College of Education, Kadalaiyur Road, Ettayapuram - 628 902, Thoothukudi District.', 'Arts'),
(1264, '12615', 'Rosammal Memorial Minority College of Education for Women', 'Rosammal Memorial Minority College of Education for Women \r\n 85/2C, Poopalrayerpuram \r\n Thoothukudi \r\n 628 001', 'Arts'),
(1265, '12616', 'Muthukaruppan Memorial College of Education', 'Muthukaruppan Memorial College of Education, \r\n Sillankulan Village, M.K.N Nagar, \r\n Ottapidaram Taluk & City, \r\n Tuticorin District – 628 718', 'Arts'),
(1266, '12701', 'Holy Cross College of Education', 'Holy Cross College of Education,\r\n Teppakulam Post, \r\n Tiruchirappalli District-620 002.', 'Arts'),
(1267, '12702', 'Idhayaam College of Education', 'Idhayaam College of Education,\r\n Kannanur Post, \r\n Thuraiyur – 621 206,\r\n Tiruchirappalli District.', 'Arts'),
(1268, '12703', 'Imayam College of Education', 'Imayam College of Education\r\n Vadakkuveli Village\r\n Kannanur Post, \r\n Thuraiyur Taluk\r\n Trichy District - 621 206.', 'Arts'),
(1269, '12704', 'Indra Ganesan College of Education', 'Indra Ganesan College of Education\r\n Madurai Main Road, \r\n Manikandam (PO), \r\n Srirangam (TK), Tiruchirappalli – 620 012.', 'Arts'),
(1270, '12705', 'Institute of Education', 'Institute of Education,\r\n Thogamalai Road,\r\n Pothavur Village, Inampuyur Post,\r\n Srirangam Taluk, Trichy - 639103', 'Arts'),
(1271, '12706', 'J.J.College of Education', 'J.J.College of Education, Ammapettai, Poolangulathupatti(PO), Trichirappalli- 620009', 'Arts'),
(1272, '12708', 'Jamal Mohamed College of Teacher Education', 'Jamal Mohamed College of Teacher Education, \r\n No.7 Race course Road, \r\n Khaja Nagar, \r\n Tiruchirappalli – 620 020', 'Arts'),
(1273, '12709', 'Jeevan College of Education', 'Jeevan College of Education, \r\n Trichy-Dindugul Main Road, \r\n Manapparai, Muthapudaiyanpatty Post, \r\n Trichy 621 306', 'Arts'),
(1274, '12711', 'Kongunadu College of Education', 'Kongunadu College of Education, \r\n Tholurpatti, \r\n Thottiam Taluk,\r\n Tiruchirappalli District - 621 215', 'Arts'),
(1275, '12712', 'Mahathma College of Education', 'Mahathma College of Education,\r\n No.35, Sikkam, \r\n Pilliyar Koil Street,\r\n Thuraiyur Post, \r\n Trichy District-621 010.', 'Arts'),
(1276, '12713', 'Mariamman College of Education', 'Mariamman College of Education,\r\n NH.45, Trichy Dindigul High ways Road, Poolangulathupatti Post, Trichy - 620 009.', 'Arts'),
(1277, '12714', 'New Ideal College of Education', 'New Ideal College of Education, Chettiyurani Patti, Poolangulathupatti(PO), Trichy', 'Arts'),
(1278, '12715', 'Oxford College of Education', 'Oxford College of Education,\r\n Pirattiyur (W),\r\n Tiruchirappalli-620 009.', 'Arts'),
(1279, '12716', 'S.A.S. College of Education', 'S.A.S. College of Education, \r\n Punganur, \r\n Ramjee Nagar Post,\r\n Trichy-620 009.', 'Arts'),
(1280, '12717', 'S.B.G.Sanskrit Mission B.Ed College', 'S.B.G.Sanskrit Mission B.Ed College, Mutharasanallur, Trichy- 620 101.', 'Arts'),
(1281, '12718', 'S.V.I College of Education', 'S.V.I College of Education,\r\n Trichy-Viralimalai Main Road, Sethurapatti Bus Stop, Fathima Nagar Post, \r\n Trichy - 620 012.', 'Arts'),
(1282, '12720', 'Sri Rajarajeswari College of Education', 'Sri Rajarajeswari College of Education, \r\n Opp. Government Higher Secondary School, Trichy - Chennai National Highway, Siruganur - 621 105, Trichy', 'Arts'),
(1283, '12721', 'Sri Renga College of Education', 'Sri Renga College of Education, 3/169, Chennai Bye Pass Road, Siruganur (PO), Manachanallur(TK), Trichy(DT)-pin- 621105', 'Arts'),
(1284, '12722', 'Sri Saraswathi College of Education', 'Sri Saraswathi College of Education, \r\n Trichy-Chithambaram Main Road, Manthurai, Lalgudi, Tiruchirappalli - 621 703.', 'Arts'),
(1285, '12723', 'Thirumalai Srinivasa College of Education', 'Thirumalai Srinivasa College of Education, \r\n No.96 Athur Road, \r\n Srinivasan Hospital,\r\n Thuraiyur, \r\n Trichy District-621 010.', 'Arts'),
(1286, '12724', 'V.J.P. College of Education', 'V.J.P. College of Education,\r\n Trichy-Chennai Highway, \r\n Siruganur, \r\n Tiruchirappalli 621 105', 'Arts'),
(1287, '12725', 'Vekkaliyamman College of Education', 'Vekkaliyamman College of Education, \r\n No.9/4, Thogamalai Road, Ariyavur, Tiruchirappalli - 620 009.', 'Arts'),
(1288, '12726', 'M.A.M College of Education', 'M.A.M College of Education, Trichy – Chennai Trunk Road, Siruganur, Trichy District – 621 105', 'Arts'),
(1289, '12727', 'Sri Adhisankarar College of Education', 'Sri Adhisankarar College of Education, Near Ramarkoil, National Highways, Irungalur Village, Manachanallur Taluk, Trichy – 621 105', 'Arts'),
(1290, '12728', 'Shiva College of Education', 'Shiva College of Education, Manickapuram Road, Devanoor Village,hathiengarpet, Musiri Taluk, Tiruchirappalli District – 621 214', 'Arts'),
(1291, '12729', 'Infant Jesus College of Education', 'Infant Jesus College of Education, K.Kallukudi, Ramjee Nagar Post, Trichy – 620 009', 'Arts'),
(1292, '12731', 'Sri Amman College of Education', 'Sri Amman College of Education, Thogamalai Road, Pothavoor, Inam Puliyur Post, Srirangam, Trichirappalli District - 639 103.', 'Arts'),
(1293, '12732', 'Divine College of Education', 'Divine College of Education, Thogamalai Road, North Ariyavoor, Trichy - 9.', 'Arts'),
(1294, '12733', 'Poondi Pudhumai Madha College of Education', 'Poondi Pudhumai Madha College of Education, Vengankudi (Po), Samayapuram, Mannachanallur Taluk, Tiruchirappalli District - 621 112.', 'Arts'),
(1295, '12734', 'MIT College of Education for women', 'MIT College of Education for women, \r\n M.Pudupatti Village & Post, Musiri Taluk, \r\n Trichy District - 621 211.', 'Arts'),
(1296, '12735', 'Nehru Memorial College of Education', 'Nehru Memorial College of Education, \r\n Abinimangalam Village, Puthunampatti Post, \r\n Musiri Taluk & City, Trichy District - 621 007.', 'Arts'),
(1297, '12801', 'Annai Meenakshi College of Education', 'Annai Meenakshi College of Education, \r\n Puliyangudi, Pin- 627 855,\r\n Tenkasi District.', 'Arts'),
(1298, '12802', 'Keins College of Education for Women', 'Keins College of Education for Women, \r\n 139, Asir Nagar,\r\n (Via) Dhalapathismudram – 627 101.\r\n Tirunelveli District.', 'Arts'),
(1299, '12803', 'Mahatma Gandhi College of Education', 'Mahatma Gandhi College of Education, \r\n V.R. Naidu Nagar, Solaiseri, Reddiapatti Post, Sankarankovil Taluk, \r\n Tenkasi District - 627 753.', 'Arts'),
(1300, '12804', 'Sri Muppudathi Amman College of Education', 'Sri Muppudathi Amman College of Education, \r\n 6/355, Suvisesa Puram, Adaikala Pattanam Post, Alangulam Taluk, \r\n Tenkasi District - 627 808.', 'Arts'),
(1301, '12805', 'PET College of Teacher Education', 'PET College of Teacher Education, \r\n Thiruchendur Road, Vallioor - 627 117.\r\n Tirunelveli District.', 'Arts'),
(1302, '12806', 'PSN College of Education', 'PSN College of Education, \r\n PSN Nagar, \r\n Melathidiyur,\r\n Palayamkottai Taluk,\r\n Tirunelveli District – 627 152.', 'Arts'),
(1303, '12807', 'Raja’s College of Education', 'Raja’s College of Education, \r\n Raja Nagar,\r\n Vadkangulam,\r\n Tirunelveli – 627 116.', 'Arts'),
(1304, '12808', 'Ruckmani college of Education', 'Ruckmani college of Education,\r\n Mangalapuram Post, Kadayanallur,\r\n Tenkasi District - 627 751.', 'Arts'),
(1305, '12810', 'S.Veerasamy Chettiar College of \r\n Education', 'S.Veerasamy Chettiar College of \r\n Education, \r\n S.V.Nagar, Puliangudi - 627 855,\r\n Tenkasi District.', 'Arts'),
(1306, '12811', 'SCAD college of Education', 'SCAD college of Education, \r\n Cherenmahadevi, \r\n Tirunelveli District - 627 414.', 'Arts'),
(1307, '12812', 'Sri K Ramachandra Naidu College of Education', 'Sri K Ramachandra Naidu College of Education,\r\n K.R.Nagar, Paruvakkudi Post,\r\n Karivalam (Via),\r\n Sankarankovil ,\r\n Tenkasi – 627 753.', 'Arts'),
(1308, '12813', 'Sri Ram Nallamani Yadava College of Education', 'Sri Ram Nallamani Yadava College of Education, Nallamani Nagar, Kodikurichi, Tenkasi- 627 804.', 'Arts'),
(1309, '12814', 'Sri Balaji College of Education', 'Sri Balaji College of Education, \r\n Cherankevil Pathu (Village), Sri Ramachandra Nagar, Cheranmahadevi, Kalakkad Road, Tirunelveli District - 627414.', 'Arts'),
(1310, '12815', 'Sri.Sarada college of Education for women', 'Sri.Sarada college of Education for women, \r\n Ariyagulam, \r\n Tirunelveli District.', 'Arts'),
(1311, '12816', 'St. Anthony’s College of Education', 'St. Anthony’s College of Education, \r\n Angel Nagar, \r\n Mannarpuram, \r\n Tirunelveli-627 657', 'Arts'),
(1312, '12817', 'St. Ignatius’ college of Education', 'St. Ignatius’ college of Education, (Autonomous) Punithavathiyar Street,Palayamkottai,Tirunelveli-627 002.', 'Arts'),
(1313, '12818', 'St.John’s college of Education', 'St.John’s college of Education, \r\n 27, Avanimoola Vinayagarkoil Street,\r\n Veeravanallur, \r\n Tirunelveli District 627 426.', 'Arts'),
(1314, '12819', 'St.Joseph College of Education', 'St.Joseph College of Education, \r\n Vaikalpatti, \r\n Mettur Post, Tenkasi - 627 436.', 'Arts'),
(1315, '12820', 'St.Joseph College of Education', 'St.Joseph College of Education, \r\n Kadamboduvalvu, Nanguneri-627 108,\r\n Tirunelveli District.', 'Arts'),
(1316, '12821', 'St.Xavier’s college of Education', 'St.Xavier’s college of Education, (Autonomous)\r\n Palayamkottai, \r\n Tirunelveli District - 627 002.', 'Arts'),
(1317, '12822', 'Stella Mary’s college of Education', 'Stella Mary’s college of Education, \r\n Devipattanam Vilakku, \r\n Sivagiri,\r\n Tenkasi District - 627 757.', 'Arts'),
(1318, '12823', 'T.D.T.A.D.S. Daniel Rajammal College of Education', 'T.D.T.A.D.S. Daniel Rajammal College of Education, \r\n Banji, Courtalam, Tenkasi Taluk,\r\n Tirunelveli District - 627 805.', 'Arts'),
(1319, '12824', 'U.S.P.College of Education', 'U.S.P.College of Education, \r\n Kodikurichi, \r\n Tenkasi,\r\n Tenkasi District.', 'Arts'),
(1320, '12825', 'Universal College of Education', 'Universal College of Education, \r\n Vallioor,\r\n Tirunelveli District.', 'Arts'),
(1321, '12826', 'VET College of Education', 'VET College of Education,\r\n S.M.V. Compound, Main Road,\r\n Panagudi - 627 109\r\n Tirunelveli District.', 'Arts'),
(1322, '12827', 'St. John’s College of Education', 'St. John’s College of Education, No.18, North High Ground Road, Palayamkottai, Tirunelveli District – 627 002', 'Arts'),
(1323, '12828', 'J.P. College of Education', 'J.P. College of Education, Ayikudy, Thenkasi, \r\n Tenkasi - 627 811.', 'Arts'),
(1324, '12829', 'Merit College of Education.', 'Merit College of Education, No.222, Kadayam to Mukkudal Main Road, Idaikal Village, Ambasamudram Taluk, Tirunelveli District - 627 821.', 'Arts'),
(1325, '12830', 'Bharath Institute of Education', 'Bharath Institute of Education, \r\n 637, Street, Elathur Village & Post, Shencottai Taluk, \r\n Tenkasi - 627 809.', 'Arts'),
(1326, '12901', 'A.M.E.S. College of Education', 'A.M.E.S. College of Education, \r\n Reddythoppu, \r\n Ambur-635 802, \r\n Tirupattur District', 'Arts'),
(1327, '12902', 'Adhiparasakthi College of Education', 'Adhiparasakthi College of Education, G.B.Nagar, Kalavai, Vellore District', 'Arts'),
(1328, '12903', 'Amirtha College of Education', 'Amirtha College of Education,\r\n Alangayam Road, \r\n Tirupattur, Tirupattur District - 635 601.', 'Arts'),
(1329, '12904', 'Amritalaya College of Education', 'Amritalaya College of Education,\r\n Chinnamottur, \r\n Moorthiyur Village,\r\n Vaniyambadi Road, \r\n Jolarpettai,Tirupattur Taluk, \r\n Vellore District.', 'Arts'),
(1330, '12905', 'Arcot Sri Mahalakshmi Women\'s College of Education', 'Arcot Sri Mahalakshmi Women\'s College of Education, \r\n Arcot to Arni Main Road,Villapakkam Post, \r\n Vellore District- 632 521.', 'Arts'),
(1331, '12906', 'CKS College of Education', 'CKS College of Education, Kakathoppu Village, Chettukuppam PO, Gudiyattam TK, Vellore District', 'Arts'),
(1332, '12908', 'Dr.David Raja & Dr.Chandralekha\r\n College of Education', 'Dr.David Raja & Dr.Chandralekha\r\n College of Education, \r\n Vengalapuram Village & Post, \r\n Tirupattur Taluk, \r\n Tirupattur District - 635 653.', 'Arts'),
(1333, '12909', 'Durai Murugan College of Education', 'Durai Murugan College of Education,\r\n Chittoor Main Road, \r\n Vellore - 632 059.', 'Arts'),
(1334, '12911', 'G.E.T. B.Ed College of Education', 'G.E.T. B.Ed College of Education, \r\n Vidhyasankarapuram Village, \r\n Paradarami Post,\r\n Gudiyatham, \r\n Vellore-632 603.', 'Arts'),
(1335, '12913', 'G.V.C. College of Education', 'G.V.C. College of Education,\r\n No.15B, Abbai Street, \r\n Arcot town,\r\n Ranipet District-632 503.', 'Arts'),
(1336, '12914', 'Government College of Education', 'Government College of Education, \r\n Gandhi Nagar, \r\n Vellore District - 632 006', 'Arts'),
(1337, '12915', 'Indian College of Education', 'Indian College of Education, \r\n opp. to VIT, 51/2A, \r\n Katpadi-Thirivalam Road, \r\n Katpadi, \r\n Vellore - 632 014.', 'Arts'),
(1338, '12916', 'K.K.S. Mani College of Education', 'K.K.S. Mani College of Education,\r\n No.78, CC Road, \r\n Vallam Post, Via\r\n Kannamangalam, \r\n Vellore Taluk, Vellore District - 632 311.', 'Arts'),
(1339, '12917', 'K.M.G. College of Education', 'K.M.G. College of Education, \r\n No.1, Railway Station Road, \r\n Ammankuppam, \r\n Gudiyatham, \r\n Vellore District-635 803.', 'Arts'),
(1340, '12918', 'Meera College of Education', 'Meera College of Education,\r\n Mottur Road, \r\n Sholingur,\r\n Vellore District- 631 102.', 'Arts'),
(1341, '12919', 'Pallavan College of Education', 'Pallavan College of Education,\r\n No.1. Bharathiyar Salai, \r\n Vellore – 632 001.', 'Arts'),
(1342, '12920', 'Seventh Day Adventist Reform\r\n Movement (SRM) College of Education', 'Seventh Day Adventist Reform\r\n Movement (SRM) College of Education, \r\n 85, Trunk Road, Valayampattu,\r\n Vaniyambadi Taluk,\r\n Tirupattur District.', 'Arts'),
(1343, '12921', 'Seventh-Day Adventist College of Education', 'Seventh-Day Adventist College of Education,\r\n Arts College Road,\r\n Otteri,\r\n Vellore District – 632 002.', 'Arts'),
(1344, '12922', 'Sri Kalaimangal College of Education', 'Sri Kalaimagal College of Education, Adhiperamanur Post, Natrampalli, Tirupatur Taluk, Vellure District- 635 852', 'Arts'),
(1345, '12923', 'Sri Krishna College of Education,', 'Sri Krishna College of Education, \r\n Sri Krishna Nagar, \r\n Kainoor Village,\r\n Tiruttani Road, \r\n Arakkonam Taluk,\r\n Ranipet District.', 'Arts'),
(1346, '12926', 'St. Joseph’s Women’s College of Education', 'St. Joseph’s Women’s College of Education, \r\n Jolarpet, Jayamadha Nagar, \r\n Thirupattur Taluk, \r\n Tirupattur District -635 851.', 'Arts'),
(1347, '12928', 'Thirumal College of Education', 'Thirumal College of Education, \r\n Thirumalnagar, Pallalapalli, \r\n Lakkinaikanpatti Post,\r\n Tirupattur, \r\n Tirupattur-635 601.', 'Arts'),
(1348, '12929', 'V.S. Isaac College of Education', 'V.S. Isaac College of Education,\r\n 126, Attupakkam Village, Manjambadi Railway Gate,\r\n Arakkoanam Taluk, \r\n Ranipet District- 631 051.', 'Arts'),
(1349, '12930', 'Vaani College of Education', 'Vaani College of Education, Chettiyappanur PO, Vaniyambadi- 635 751. Tirupattur District', 'Arts'),
(1350, '12931', 'Vivekananda Vidyalaya College of Education', 'Vivekananda Vidyalaya College of Education, \r\n Kavanoor Vilage & Post,\r\n Arakkonam Taluk,\r\n Ranipet Distrtict - 631 004.', 'Arts'),
(1351, '12932', 'Vellore College of Education', 'Vellore College of Education, Okkanapuram Village, Vallandaramam Post, Virinjipuram (Via), Vellore Taluk & District – 632 104', 'Arts'),
(1352, '12933', 'Sri Vidya Vihar College of Education', 'Sri Vidya Vihar College of Education, Pudu Govindapuram, K.K.S. Pannai, M.C. Road, Ambur – 635 802, Tirupattur District', 'Arts'),
(1353, '12934', 'Kennedy College of Education', 'Kennedy College of Education, Bangalore Road, S.N. Palayam, Agaramcheri, Vaniyambadi Taluk, Tirupattur District – 635 804', 'Arts'),
(1354, '12935', 'C.S. College of Education', 'C.S. College of Education, Jayapuram (Village & Post), Tirupattur Taluk, Tirupattur District – 635 651', 'Arts'),
(1355, '12936', 'Bharat College of Education', 'Bharat College of Education, No.8, Karar Krishnaswami Street, Kosapet, Vellore – 632 001', 'Arts'),
(1356, '12937', 'S.N. College of Education', 'S.N. College of Education, 98/1, School Street, Vadagal, Thiruvalam Post, Walaja Taluk, Ranipet District – 632 515', 'Arts'),
(1357, '12942', 'Auxilium College of Education', 'Auxilium College of Education\r\n  Street No.17,\r\n Kangeyanallore Village,\r\n Gandhinagar Post,\r\n Katpadi Taluk,\r\n Vellore District – 632 006.', 'Arts'),
(1358, '12943', 'Sri Ayyappa College of Education', 'Sri Ayyappa College of Education, Street No. Kothapallli Road, Kothapalli Village, Eriguthi Post Office, Gudiyatam Taluk, Vellore District - 635810', 'Arts'),
(1359, '12945', 'Universal College of Education', 'Universal College of Education, \r\n Kudiyanakuppam Village, \r\n Jolarpettai Post, Tirupattur Taluk, \r\n Tirupattur District - 635 851.', 'Arts'),
(1360, '12946', 'Vallalar College of Education', 'Vallalar College of Education, \r\n Street No.3A, 2A, Melmuttukur Village, Chettikuppm Post, \r\n Guduyattam Taluk, Vellore District - 635 806.', 'Arts'),
(1361, '12947', 'Sri Ramachandra College of Education', 'Sri Ramachandra College of Education,\r\n Agaram Village, \r\n Gururajapalayam Post Vellore Taluk and District - 632 107.', 'Arts'),
(1362, '13001', 'A.K.T. Memorial College of Education', 'A.K.T. Memorial College of Education, \r\n Neelamangalam, Kallakurichi,\r\n Kallakurichi District.-606 202.', 'Arts'),
(1363, '13002', 'Bharathi College of Education', 'Bharathi College of Education,\r\n Near power house, Salem-Chennai Main Road, \r\n Chinnasalem 606 201. Kallakurichi District', 'Arts'),
(1364, '13003', 'Bharathiyar College of Education', 'Bharathiyar College of Education, \r\n Urani Village, \r\n Pallakadu Village Road, \r\n Mandavai Post,\r\n Marakkanam – 604 303 \r\n Tindivanam Taluk, Villupuram District', 'Arts'),
(1365, '13004', 'Dr. R.K. Shanmugam College of Education', 'Dr. R.K. Shanmugam College of Education, \r\n Indili, \r\n Ulagankkathan Post,\r\n Kallakurichi Taluk,\r\n Villupuram District-606 202.', 'Arts'),
(1366, '13006', 'Kamala College of Education', 'Kamala College of Education,\r\n Thirunavalur, \r\n Kallakurichi District - 607 204.', 'Arts'),
(1367, '13007', 'Paulsons Teacher Training College', 'Paulsons Teacher Training College, \r\n Paulsons Nagar, \r\n Pullichapallam, \r\n Vanur Taluk, \r\n Villupuram District - 605 109.', 'Arts'),
(1368, '13008', 'Raja Desingh College of Education', 'Raja Desingh College of Education,\r\n Kalaiyur Village, \r\n Vallam Post, \r\n Gingee Taluk, \r\n Villupuram District-604 206.', 'Arts'),
(1369, '13009', 'Saithanibi College of Education', 'Saithanibi College of Education, \r\n Avalurpet Village, \r\n Ginge Taluk, \r\n Villupuram District – 604 201.', 'Arts'),
(1370, '13010', 'Siga College of Education', 'Siga College of Education,\r\n Kappiyampuliyur, \r\n Villupuram Taluk, \r\n Villupuram District-605 601.', 'Arts'),
(1371, '13011', 'Sri Ramakrishna College of Education', 'Sri Ramakrishna College of Education, \r\n Meleri - Melapattu Village, \r\n Sankarapuram Taluk, \r\n Kallakurichi District - 606 208.', 'Arts'),
(1372, '13012', 'Sri Rangachinnammal College of Education', 'Sri Rangachinnammal College of Education, \r\n Alampoondi Gingee Taluk, \r\n Villupuram District-604 151.', 'Arts'),
(1373, '13013', 'Sri Rangapoopathi College of Education of Education B.Ed Course', 'Sri Rangapoopathi College of Education of Education B.Ed Course, Alampoondi Village, Gingee T.K. V.P.M Dist', 'Arts'),
(1374, '13014', 'Sri Sarada College of Education for Women', 'Sri Sarada College of Education for Women, \r\n Sri Sarada Ashram Campus, New Edaikkal, \r\n Ulundurpet, \r\n Kallakurichi District- 606 107.', 'Arts'),
(1375, '13015', 'Sri Vinayaga College of Education', 'Sri Vinayaga College of Education,\r\n Ulundurpet,\r\n Kallakurichi – 606 107.', 'Arts'),
(1376, '13016', 'Susila College of Education', 'Susila College of Education,\r\n Kuppuswamy Nagar, \r\n Chennai Main Road, \r\n Veeracholapuram Post, \r\n Kallakurichi Taluk, Kallakurichi District - 606 206', 'Arts'),
(1377, '13017', 'T.S.M. College of Education', 'T.S.M. College of Education\r\n Kaniyamooir Village,\r\n Kallakurichi Taluk, \r\n Kallakurichi District- 606 201.', 'Arts'),
(1378, '13018', 'V.E.T. College of Education', 'V.E.T. College of Education,\r\n Mabalapattu Road, Kanai, \r\n Villupuram District-605 301.', 'Arts'),
(1379, '13019', 'Kasturiba Gandhi Jal College of Education for Women', 'Kasturiba Gandhi Jal College of Education for Women, Mazhavanthangal, Kandachipuram, Villupuram District – 605 701', 'Arts'),
(1380, '13020', 'Sri Lakshmi College of Education', 'Sri Lakshmi College of Education, Bangaram Village, Salem Main Road, Kallakurichi Taluk, Kallakurichi District – 606 202', 'Arts'),
(1381, '13021', 'Sree Velavan College of Education', 'Sree Velavan College of Education, College Road, Melpakkam Village, Near TNCC Godown, Ayyanthoppu Post, Tindivanam Taluk, Villupuram District', 'Arts'),
(1382, '13022', 'E.S. College of Education', 'E.S. College of Education, Chennai Trunk Road, Ayyankoilpattu, Villupuram – 605 602', 'Arts'),
(1383, '13023', 'Sri Balaji College of Education', 'Sri Balaji College of Education, A.Vasundenur Village, Salem Main Road, Chinna Salem, Kallakurichi Taluk, Kallakurichi District – 606 201', 'Arts'),
(1384, '13024', 'Krishnaveni Ammal College of Education', 'Krishnaveni Ammal College of Education, Thumbur, Ashokapuri & Post, Villupuram District – 605 203', 'Arts'),
(1385, '13025', 'Danie College of Education', 'Danie College of Education, Melkalavai, Kariamangalam X Road, Chellaperattai Post - 604210, Gingee Taluk, Villupuram District', 'Arts'),
(1386, '13026', 'VPN College for Teacher Education', 'VPN College for Teacher Education, No.209/2, 4&5, Thiruvannamalai Road, Semmedu Village, Gingee Taluk, Villpuram District -604 152', 'Arts'),
(1387, '13027', 'Theivanai Ammal College of Education.', 'Theivanai Ammal College of Education, \r\n R.S.No.81/4B1B, Sithani (Chittani), \r\n Tindivanam Taluk, \r\n Villupuram – 605 652', 'Arts'),
(1388, '13028', 'Billgates College of Education', 'Billgates College of Education, Gengavaram, Kanakkan Kuppam Post, Gingee Taluk, Villupuram District – 604 151', 'Arts'),
(1389, '13029', 'Kalaivani College of Education', 'Kalaivani College of Education, Salem Main Road, Porpadakurichi, Kallakurichi Taluk, Kallakurichi District – 606 202.', 'Arts'),
(1390, '13030', 'Arul College of Education', 'Arul College of Education\r\n  Mangalampet Post, \r\n  Ulunurpet Taluk, \r\n  Kallakurichi District - 606 104.', 'Arts'),
(1391, '13031', 'Sri Vidhyodhaya College of Education', 'Sri Vidhyodhaya College of Education, \r\n Street. No. 7/20, Thiruppachavadimedu Village, Kondangi Post Office, \r\n Villupuram Taluk and District - 605301.', 'Arts'),
(1392, '13034', 'MASS College of Education', 'MASS College of Education, \r\n V.Parangani Village & Post, \r\n Vanur Taluk, Villupuram District – 605 109', 'Arts'),
(1393, '13101', 'Angel College of Education', 'Angel College of Education, Tirunelveli Road, \r\n Rajapalayam, \r\n Virudhanagar District – 626117', 'Arts'),
(1394, '13102', 'Arasan Ganesan College of Preceptors', 'Arasan Ganesan College of Preceptors, \r\n No.18, Chariman A, \r\n Shanmugan Road, \r\n Sivakasi Virudhunagar District-626 123.', 'Arts'),
(1395, '13103', '#N/A', 'Arulmigu Kalasalingam College of Education\r\n Anand Nagar, Krishnankoil –626 190.\r\n Virudhunagar District.', 'Arts'),
(1396, '13104', 'K.M.B.Ed., College of Education', 'K.M.B.Ed., College of Education,\r\n 180, Kallamanaicken Patti 626 131,\r\n Sivakasi Tk. \r\n Virudhunagar District.', 'Arts'),
(1397, '13105', 'P.S.R. College of Education', 'P.S.R. College of Education,\r\n Sevalpatti, Sivakasi,\r\n Sivakasi 626 140.\r\n Virudhunagar District.', 'Arts'),
(1398, '13106', 'PSNL College of Education', 'PSNL College of Education,\r\n 251, Bye Pass Road, Sattur, \r\n Virudhunagar District - 626 203.', 'Arts'),
(1399, '13107', 'Smt. A.K.D. Sakkaniamma College of Education for Women', 'Smt. A.K.D. Sakkaniamma College of Education for Women, \r\n 160/3, Shenbagathoppu Road, Rajapalayam - 626 117. Virudhunagar District.', 'Arts'),
(1400, '13108', 'Sri R. Ponnusamy Naidu College of Education', 'Sri R. Ponnusamy Naidu College of Education,\r\n Kakkivadanpatti,\r\n Sivakasi Taluk,\r\n Virudhunagar District.', 'Arts'),
(1401, '13109', 'Sri Sundareswari College of Education', 'Sri Sundareswari College of Education,\r\n Sivakasi Road, Malli, Srivilliputhur Taluk, \r\n Virudunagar District - 626 141.', 'Arts'),
(1402, '13110', 'Sri Vatsa College of Education,', 'Sri Vatsa College of Education, \r\n Mettamalai, \r\n Kumaralingapuram Road, \r\n Sattur Taluk, \r\n Virudhanagar District – 626 003.', 'Arts'),
(1403, '13111', 'Sri Vidya College of Education', 'Sri Vidya College of Education,\r\n P. Kumaralingapuram, \r\n Sivakasi Road,\r\n Virudhunagar - 626 005', 'Arts'),
(1404, '13112', 'V.P. Muthiah Pillai Meenakshi Ammal College of Education for Women,', 'V.P. Muthiah Pillai Meenakshi Ammal College of Education for Women, \r\n Viluppanur Village, \r\n Krishnankoil 626 125, Sriviliputtur Taluk,\r\n Virudhunagar District', 'Arts'),
(1405, '13113', 'Virudhunagar M.S.P. Nadar College of Education,', 'Virudhunagar M.S.P. Nadar College of Education, \r\n Virudhunagar District-626 001.', 'Arts'),
(1406, '13114', 'SRV College of Education', 'SRV College of Education, Opp. to Anja College, Srivilliputhur Road, Sivakasi West, Virudhunagar District– 626 124', 'Arts'),
(1407, '13115', 'Vathsala Johnson College of Teacher Education,', 'Vathsala Johnson College of Teacher Education, Gnanagiri Road, Visalakshi Nagar, Sivakasi East, Sivakasi Taluk, Virudhunagar District - 626 189.', 'Arts'),
(1408, '13116', 'Akshaya College of Education', 'Akshaya College of Education, Karthigaipatti Village,\r\n Malli Post, \r\n Srivilliputhur Taluk,\r\n Virudhunagar District – 626 141.', 'Arts'),
(1409, '13117', 'Sri Ramanas College of Education', 'Sri Ramanas College of Education, Chidhambarapuram Village, Aruppukottai Taluk, Virudhunagar District - 626 134.', 'Arts'),
(1410, '4F', 'Nehru Arts and Science College', 'Nehru Gardens, Thirumalayampalayam Post,Coimbatore- 641 105. ', ' Arts and Science\"'),
(1411, '3B', 'P K R Arts College For Women, Gobichettipalayam, Erode (Dt)', 'Post Box No.21,127 Pariyur Road, Gobichettipalayam 638476 ', ' Arts and Science\"'),
(1412, '4D', 'PIONEER COLLEGE OF ARTS & SCIENCE, COIMBATORE', 'Pioneer College of Arts & Science, Jothipuram, Perianaickenpalayam, Coimbatore-641047 ', ' Arts and Science\"'),
(1413, 'AF', 'Pollachi College of arts and science', '132/5-B Dharapuram Main Road, Poosaripatti, Pollachi - 642 205', ' Arts and Science\"'),
(1414, '1101', 'AALIM MUHAMMED SALEGH COLLEGE OF ENGINEERING', '', 'Engineering'),
(1415, '1102', 'AALIM MUHAMMED SALEGH ACADEMY OF ARCHITECTURE', '', 'Engineering'),
(1416, '1104', 'BHAJARANG ENGINEERING COLLEGE', '', 'Engineering'),
(1417, '1105', 'GOJAN SCHOOL OF BUSINESS AND TECHNOLOGY', '', 'Engineering'),
(1418, '1106', 'INDIRA INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1419, '1108', 'JAYA ENGINEERING COLLEGE', '', 'Engineering'),
(1420, '1111', 'JAYA INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1421, '1113', 'PMR ENGINEERING COLLEGE', '', 'Engineering'),
(1422, '1120', 'JAYA SAKTHI ENGINEERING COLLEGE', '', 'Engineering'),
(1423, '1121', 'SAMS COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1424, '1123', 'SRI KRISHNA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1425, '1124', 'SRI VENKATESWARA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1426, '1125', 'SRI VENKATESWARA INSTITUTE OF SCIENCE AND TECHNOLOGY', '', 'Engineering'),
(1427, '1126', 'SRIRAM ENGINEERING COLLEGE', '', 'Engineering'),
(1428, '1128', 'T.J.S. ENGINEERING COLLEGE', '', 'Engineering'),
(1429, '1133', 'VELAMMAL INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1430, '1135', 'RVS PADMAVATHY SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1431, '1136', 'SCHOOL OF ARCHITECTURE ST. PETER\'S COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1432, '1137', 'CHENNAI ACADEMY OF ARCHITECTURE AND DESIGN', '', 'Engineering'),
(1433, '1138', 'SRI JAYARAM INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1434, '1201', 'JAYA SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1435, '2101', 'ALPHA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1436, '2102', 'APOLLO ENGINEERING COLLEGE', '', 'Engineering'),
(1437, '2109', 'LOYOLA INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1438, '2111', 'MADHA ENGINEERING COLLEGE', '', 'Engineering'),
(1439, '2112', 'MADHA INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1440, '2113', 'P.B. COLLEGE OF ENGINEERING', '', 'Engineering'),
(1441, '2115', 'PANIMALAR INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1442, '2118', 'RAJALAKSHMI SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1443, '2119', 'RAJIV GANDHI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1444, '2120', 'S.K.R. ENGINEERING COLLEGE', '', 'Engineering'),
(1445, '2124', 'SREE SASTHA INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1446, '2126', 'SRI MUTHUKUMARAN INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1447, '2128', 'JAYA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1448, '2129', 'ST. JOSEPH COLLEGE OF ENGINEERING', '', 'Engineering'),
(1449, '2131', 'PAPNI SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1450, '2132', 'CHENNAI INSTITUTE OF TECHNOLOGY AND APPLIED RESEARCH', '', 'Engineering'),
(1451, '3103', 'CENTRAL INSTITUTE OF PLASTICS ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1452, '3105', 'DHANALAKSHMI SRINIVASAN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1453, '3108', 'JEPPIAAR ENGINEERING COLLEGE', '', 'Engineering'),
(1454, '3112', 'MARG INSTITUTE OF DESIGN & ARCHITECTURE SWARNABHOOMI (MIDAS)', '', 'Engineering'),
(1455, '3113', 'MEASI ACADEMY OF ARCHITECTURE', '', 'Engineering'),
(1456, '3114', 'MEENAKSHI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1457, '3116', 'MISRIMAL NAVAJEE MUNOTH JAIN ENGINEERING COLLEGE', '', 'Engineering'),
(1458, '3117', 'MOHAMED SATHAK A.J. ACADEMY OF ARCHITECTURE', '', 'Engineering'),
(1459, '3125', 'T.J. INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1460, '3126', 'THANGAVELU ENGINEERING COLLEGE', '', 'Engineering'),
(1461, '3129', 'ANAND SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1462, '3131', 'MISRIMAL NAVAJEE MUNOTH JAIN SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1463, '3134', 'NATIONAL INSTITUTE OF TECHNICAL TEACHERS TRAINING AND RESEARCH', '', 'Engineering'),
(1464, '3135', 'PANIMALAR ENGINEERING COLLEGE CHENNAI CITY CAMPUS', '', 'Engineering'),
(1465, '4101', 'ADHI COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1466, '4103', 'ARM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1467, '4104', 'ASAN MEMORIAL COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1468, '4106', 'DHAANISH AHMED COLLEGE OF ENGINEERING', '', 'Engineering'),
(1469, '4107', 'DHANALAKSHMI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1470, '4108', 'G.K.M. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1471, '4118', 'RRASE COLLEGE OF ENGINEERING', '', 'Engineering'),
(1472, '4120', 'SRI KRISHNA ENGINEERING COLLEGE', '', 'Engineering'),
(1473, '4121', 'SRI KRISHNA INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1474, '4123', 'SRI RAMANUJAR ENGINEERING COLLEGE', '', 'Engineering'),
(1475, '4127', 'TAGORE ENGINEERING COLLEGE', '', 'Engineering'),
(1476, '4129', 'SHIKSHAA INSTITUTE OF ADVANCED TECHNOLOGIES', '', 'Engineering'),
(1477, '4130', 'ANNAI VEILANKANNI\'S COLLEGE OF ENGINEERING', '', 'Engineering'),
(1478, '4131', 'Mahalakshmi Tech Campus', '', 'Engineering'),
(1479, '4201', 'A K T MEMORIAL COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1480, '4203', 'A.R. ENGINEERING COLLEGE', '', 'Engineering'),
(1481, '4204', 'ADHIPARASAKTHI ENGINEERING COLLEGE', '', 'Engineering'),
(1482, '4206', 'ANNAI TERESA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1483, '4207', 'C.K. COLLEGE OF ENGINEERING & TECHNOLOGY', '', 'Engineering'),
(1484, '4208', 'CHENDU COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1485, '4210', 'E.S. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering');
INSERT INTO `institution_predefined` (`id`, `InstitutionCode`, `InstitutionName`, `Address`, `Stream`) VALUES
(1486, '4212', 'KARPAGA VINAYAGA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1487, '4213', 'KRISHNASAMY COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1488, '4216', 'MAILAM ENGINEERING COLLEGE', '', 'Engineering'),
(1489, '4218', 'SARASWATHY COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1490, '4220', 'SRI RANGAPOOPATHI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1491, '4221', 'ST.ANNE\'S COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1492, '4222', 'SURYA GROUP OF INSTITUTIONS', '', 'Engineering'),
(1493, '4223', 'THIRUVALLUVAR COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1494, '4224', 'UNIVERSITY COLLEGE OF ENGINEERING, TINDIVANAM', '', 'Engineering'),
(1495, '4225', 'UNIVERSITY COLLEGE OF ENGINEERING, VILLUPURAM', '', 'Engineering'),
(1496, '4226', 'UNIVERSITY COLLEGE OF ENGINEERING, PANRUTI', '', 'Engineering'),
(1497, '4227', 'V.R.S. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1498, '4229', 'SURYA SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1499, '5101', 'ADHIPARASAKTHI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1500, '5102', 'ANNAMALAIAR COLLEGE OF ENGINEERING', '', 'Engineering'),
(1501, '5103', 'ARULMIGU MEENAKSHI AMMAN COLLEGE OF ENGINEERING', '', 'Engineering'),
(1502, '5105', 'BHARATHIDASAN ENGINEERING COLLEGE', '', 'Engineering'),
(1503, '5106', 'C.ABDUL HAKEEM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1504, '5108', 'GANADIPATHY TULSI\'S JAIN ENGINEERING COLLEGE', '', 'Engineering'),
(1505, '5109', 'GLOBAL INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1506, '5110', 'J E I MATHAAJEE COLLEGE OF ENGINEERING', '', 'Engineering'),
(1507, '5113', 'KINGSTON ENGINEERING COLLEGE', '', 'Engineering'),
(1508, '5114', 'OXFORD COLLEGE OF ENGINEERING', '', 'Engineering'),
(1509, '5115', 'P.T. LEE CHENGALVARAYA NAICKER COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1510, '5117', 'PALLAVAN COLLEGE OF ENGINEERING', '', 'Engineering'),
(1511, '5118', 'PODHIGAI COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1512, '5119', 'PRIYADARSHINI ENGINEERING COLLEGE', '', 'Engineering'),
(1513, '5121', 'RANIPPETTAI ENGINEERING COLLEGE', '', 'Engineering'),
(1514, '5122', 'S.K.P. ENGINEERING COLLEGE', '', 'Engineering'),
(1515, '5126', 'SREE KRISHNA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1516, '5127', 'SRI BALAJI CHOCKALINGAM ENGINEERING COLLEGE', '', 'Engineering'),
(1517, '5131', 'THANTHAI PERIYAR GOVT INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1518, '5132', 'THIRUMALAI ENGINEERING COLLEGE', '', 'Engineering'),
(1519, '5133', 'UNIVERSITY COLLEGE OF ENGINEERING, ARNI', '', 'Engineering'),
(1520, '5134', 'UNIVERSITY COLLEGE OF ENGINEERING, KANCHIPURAM', '', 'Engineering'),
(1521, '5135', 'ANNAI MIRA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1522, '5137', 'MMES ACADEMY OF ARCHITECTURE', '', 'Engineering'),
(1523, '5138', 'GLOBAL BUSINESS SCHOOL', '', 'Engineering'),
(1524, '6104', 'COLLEGE OF BUSINESS MANAGEMENT', '', 'Engineering'),
(1525, '6109', 'JAYALAKSHMI INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1526, '6110', 'JAYAM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1527, '6114', 'MAHENDRA ENGINEERING COLLEGE FOR WOMEN', '', 'Engineering'),
(1528, '6115', 'MAHENDRA INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1529, '6118', 'P.S.V.COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1530, '6120', 'SAPTHAGIRI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1531, '6122', 'SENGUNTHAR COLLEGE OF ENGINEERING', '', 'Engineering'),
(1532, '6124', 'SHREE SATHYAM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1533, '6128', 'VARUVAN VADIVELAN INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1534, '6130', 'VIVEKANANDHA COLLEGE OF TECHNOLOGY FOR WOMEN', '', 'Engineering'),
(1535, '6133', 'VIVEKANANDHA INSTITUTE OF INFORMATION AND MANAGEMENT STUDIES', '', 'Engineering'),
(1536, '6135', 'GOVERNMENT COLLEGE OF ENGINEERING, DHARMAPURI', '', 'Engineering'),
(1537, '6201', 'A V S ENGINEERING COLLEGE', '', 'Engineering'),
(1538, '6202', 'ANNAI MATHAMMAL SHEELA ENGINEERING COLLEGE', '', 'Engineering'),
(1539, '6203', 'BHARATHIYAR INSTITUTE OF ENGINEERING FOR WOMEN', '', 'Engineering'),
(1540, '6205', 'CMS COLLEGE OF ENGINEERING', '', 'Engineering'),
(1541, '6206', 'GANESH COLLEGE OF ENGINEERING', '', 'Engineering'),
(1542, '6211', 'IDHAYA ENGINEERING COLLEGE FOR WOMEN', '', 'Engineering'),
(1543, '6214', 'MAHA BARATHI ENGINEERING COLLEGE', '', 'Engineering'),
(1544, '6215', 'MAHENDRA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1545, '6217', 'MUTHAYAMMAL COLLEGE OF ENGINEERING', '', 'Engineering'),
(1546, '6218', 'P G P COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1547, '6220', 'PAAVAI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1548, '6222', 'PAVAI COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1549, '6224', 'SALEM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1550, '6226', 'SHREENIVASA ENGINEERING COLLEGE', '', 'Engineering'),
(1551, '6227', 'SRG ENGINEERING COLLEGE', '', 'Engineering'),
(1552, '6228', 'SRI GANESH SCHOOL OF BUSINESS MANAGEMENT', '', 'Engineering'),
(1553, '6229', 'T.S.M. JAIN COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1554, '6230', 'TAGORE INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1555, '6231', 'VSA GROUP OF INSTITUTIONS', '', 'Engineering'),
(1556, '6232', 'VASAVI VIDYA TRUST GROUP OF INSTITUTIONS', '', 'Engineering'),
(1557, '6233', 'VETRI VINAYAHA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1558, '6235', 'A V S COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1559, '6236', 'INDIAN INSTITUTE OF HANDLOOM TECHNOLOGY', '', 'Engineering'),
(1560, '7100', 'ANNA UNIVERSITY REGIONAL CAMPUS, COIMBATORE', '', 'Engineering'),
(1561, '7103', 'ANGEL COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1562, '7104', 'CHRIST THE KING ENGINEERING COLLEGE', '', 'Engineering'),
(1563, '7106', 'CSI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1564, '7110', 'INFO INSTITUTE OF ENGINEERING', '', 'Engineering'),
(1565, '7119', 'KV INSTITUTE OF MANAGEMENT AND INFORMATION STUDIES', '', 'Engineering'),
(1566, '7121', 'MCGAN\'S OOTY SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1567, '7123', 'PARK COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1568, '7124', 'PPG BUSINESS SCHOOL', '', 'Engineering'),
(1569, '7125', 'PPG INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1570, '7132', 'RVS INSTITUTE OF MANAGEMENT STUDIES', '', 'Engineering'),
(1571, '7142', 'TAMILNADU COLLEGE OF ENGINEERING', '', 'Engineering'),
(1572, '7143', 'TAMILNADU SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1573, '7149', 'SCHOOL OF ARCHITECTURE, COIMBATORE INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1574, '7150', 'SUGUNA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1575, '7152', 'VIVEKANANDA INSTITUTE OF MANAGEMENT STUDIES', '', 'Engineering'),
(1576, '7153', 'ASIAN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1577, '7155', 'PSG INSTITUTE OF TECHNOLOGY AND APPLIED RESEARCH', '', 'Engineering'),
(1578, '7156', 'RATHINAM SCHOOL OF BUSINESS AT TIPS GLOBAL', '', 'Engineering'),
(1579, '7157', 'RATHINAM SCHOOL OF ARCHITECTURE AND DESIGN', '', 'Engineering'),
(1580, '7158', 'PSG Institute of Architecture and Planning', '', 'Engineering'),
(1581, '7203', 'AKSHAYA COLLEGE OF ENGINEERING & TECHNOLOGY', '', 'Engineering'),
(1582, '7204', 'C M S COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1583, '7211', 'STUDYWORLD COLLEGE OF ENGINEERING', '', 'Engineering'),
(1584, '7215', 'NEHRU INSTITUTE OF INFORMATION TECHNOLOGY AND MANAGEMENT', '', 'Engineering'),
(1585, '7222', 'SAKTHI INSTITUTE OF INFORMATION AND MANAGEMENT STUDIES', '', 'Engineering'),
(1586, '7223', 'SAN INTERNATIONAL BUSINESS SCHOOL', '', 'Engineering'),
(1587, '7229', 'SRI VENKATESWARA COLLEGE OF COMPUTER APPLICATIONS AND MANAGEMENT', '', 'Engineering'),
(1588, '7230', 'SRI VENKATESWARA INSTITUTE OF INFORMATION TECHNOLOGY AND MANAGEMENT', '', 'Engineering'),
(1589, '7233', 'AKSHAYA INSTITUTE OF MANAGEMENT STUDIES', '', 'Engineering'),
(1590, '7236', 'POLLACHI INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1591, '7238', 'SASI CREATIVE SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1592, '7239', 'ARJUN COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1593, '7240', 'DHAANISH AHMED INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1594, '7241', 'VISHNU LAKSHMI COLLEGE OF ENGINEERING & TECHNOLOGY', '', 'Engineering'),
(1595, '7243', 'HINDUSTHAN SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1596, '7244', 'NEHRU SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1597, '7245', 'SAN ACADEMY OF ARCHITECTURE', '', 'Engineering'),
(1598, '7246', 'RATHINAM SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1599, '7301', 'AISHWARYA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1600, '7306', 'EXCEL COLLEGE OF ARCHITECTURE AND PLANNING', '', 'Engineering'),
(1601, '7311', 'GOVERNMENT COLLEGE OF ENGINEERING, ERODE', '', 'Engineering'),
(1602, '7313', 'J.K.K. NATARAJA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1603, '7317', 'M.P. NACHIMUTHU M. JAGANATHAN ENGINEERING COLLEGE', '', 'Engineering'),
(1604, '7321', 'NANDHA COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1605, '7323', 'S.S.M. COLLEGE OF ENGINEERING', '', 'Engineering'),
(1606, '7324', 'SASURIE COLLEGE OF ENGINEERING', '', 'Engineering'),
(1607, '7328', 'SURYA ENGINEERING COLLEGE', '', 'Engineering'),
(1608, '7331', 'VIDYAA VIKAS COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1609, '7333', 'JAIRUPAA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1610, '7334', 'KONGU SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1611, '7335', 'CHERRAAN COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1612, '8100', 'UNIVERSITY COLLEGE OF ENGINEERING, TIRUCHIRAPPALLI (BIT CAMPUS)', '', 'Engineering'),
(1613, '8101', 'C.A.R.E. SCHOOL OF ARCHITECTURE', '', 'Engineering'),
(1614, '8106', 'DR.NAVALAR NEDUNCHEZHIYAN COLLEGE OF ENGINEERING', '', 'Engineering'),
(1615, '8108', 'HALLMARK BUSINESS SCHOOL', '', 'Engineering'),
(1616, '8109', 'HOLY ANGELS SCHOOL OF BUSINESS', '', 'Engineering'),
(1617, '8110', 'IMAYAM COLLEGE OF ENGINEERING', '', 'Engineering'),
(1618, '8113', 'J.J.COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1619, '8114', 'JAYARAM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1620, '8120', 'M.A.M. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1621, '8122', 'M.A.M.B. SCHOOL', '', 'Engineering'),
(1622, '8126', 'MAM COLLEGE OF ENGINEERING', '', 'Engineering'),
(1623, '8127', 'MEENAKSHI RAMASWAMY ENGINEERING COLLEGE', '', 'Engineering'),
(1624, '8128', 'MOOKAMBIGAI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1625, '8129', 'OASYS INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1626, '8130', 'OXFORD ENGINEERING COLLEGE', '', 'Engineering'),
(1627, '8131', 'PAVENDAR BHARATHIDASAN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1628, '8135', 'ROEVER ENGINEERING COLLEGE', '', 'Engineering'),
(1629, '8139', 'SHIVANI ENGINEERING COLLEGE', '', 'Engineering'),
(1630, '8142', 'SHRI ANGALA AMMAN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1631, '8144', 'SUDHARSAN ENGINEERING COLLEGE', '', 'Engineering'),
(1632, '8146', 'TRICHY ENGINEERING COLLEGE', '', 'Engineering'),
(1633, '8147', 'SRM TRP ENGINEERING COLLEGE', '', 'Engineering'),
(1634, '8148', 'UNIVERSITY COLLEGE OF ENGINEERING, ARIYALUR', '', 'Engineering'),
(1635, '8152', 'NALANDA SCHOOL OF BUSINESS', '', 'Engineering'),
(1636, '8154', 'SRI RAMAKRISHNA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1637, '8155', 'SURYA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1638, '8156', 'ARIYALUR ENGINEERING COLLEGE', '', 'Engineering'),
(1639, '8158', 'NELLIANDAVAR INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1640, '8159', 'PRIME NEST COLLEGE OF ARCHITECTURE AND PLANNING', '', 'Engineering'),
(1641, '8201', 'A.R.J. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1642, '8202', 'A.R.J. INSTITUTE OF MANAGEMENT STUDIES', '', 'Engineering'),
(1643, '8203', 'A.V.C COLLEGE OF ENGINEERING', '', 'Engineering'),
(1644, '8204', 'ANJALAI AMMAL MAHALINGAM ENGINEERING COLLEGE', '', 'Engineering'),
(1645, '8205', 'ANNAI COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1646, '8206', 'ARASU ENGINEERING COLLEGE', '', 'Engineering'),
(1647, '8207', 'AS-SALAM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1648, '8209', 'GNANAM SCHOOL OF BUSINESS', '', 'Engineering'),
(1649, '8210', 'K.S.K. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1650, '8212', 'P.R.ENGINEERING COLLEGE', '', 'Engineering'),
(1651, '8215', 'PRIME COLLEGE OF ARCHITECTURE AND PLANNING', '', 'Engineering'),
(1652, '8217', 'SIR ISSAC NEWTON COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1653, '8218', 'SMR EAST COAST COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1654, '8219', 'ST.JOSEPH\'S COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1655, '8220', 'STAR LION COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1656, '8221', 'UNIVERSITY COLLEGE OF ENGINEERING, PATTUKKOTTAI', '', 'Engineering'),
(1657, '8222', 'UNIVERSITY COLLEGE OF ENGINEERING, THIRUKKUVALAI', '', 'Engineering'),
(1658, '8223', 'VANDAYAR ENGINEERING COLLEGE', '', 'Engineering'),
(1659, '8224', 'M R K INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1660, '8226', 'ARIFA INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1661, '8227', 'GOVERNMENT COLLEGE OF ENGINEERING, THANJAVUR', '', 'Engineering'),
(1662, '8301', 'GOVERNMENT COLLEGE OF ENGINEERING, SRIRANGAM', '', 'Engineering'),
(1663, '9100', 'ANNA UNIVERSITY REGIONAL CAMPUS, MADURAI', '', 'Engineering'),
(1664, '9102', 'CENTRAL ELECTROCHEMICAL RESEARCH INSTITUTE (CSIR) KARAIKUDI', '', 'Engineering'),
(1665, '9103', 'CHENDHURAN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1666, '9104', 'FATIMA MICHAEL COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1667, '9105', 'GANAPATHY CHETTIAR COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1668, '9108', 'KARAIKUDI INSTITUTE OF TECHNOLOGY AND KARAIKUDI INSTITUTE OF MANAGEMENT', '', 'Engineering'),
(1669, '9109', 'KARPAGA VINAYAGA INSTITUTE OF MANAGEMENT', '', 'Engineering'),
(1670, '9110', 'LATHA MATHAVAN ENGINEERING COLLEGE', '', 'Engineering'),
(1671, '9111', 'SRM MADURAI COLLEGE FOR ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1672, '9112', 'MAHATH AMMA INSTITUTE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1673, '9114', 'MNSK COLLEGE OF ENGINEERING', '', 'Engineering'),
(1674, '9116', 'MOTHER TERASA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1675, '9117', 'MOUNT ZION COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1676, '9118', 'OAA-MAVMM SCHOOL OF MANAGEMENT', '', 'Engineering'),
(1677, '9119', 'P.T.R.COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1678, '9120', 'PANDIAN SARASWATHI YADAV ENGINEERING COLLEGE', '', 'Engineering'),
(1679, '9123', 'SACS M.A.V.M.M ENGINEERING COLLEGE', '', 'Engineering'),
(1680, '9124', 'SHANMUGANATHAN ENGINEERING COLLEGE', '', 'Engineering'),
(1681, '9125', 'SRI RAAJA RAAJAN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1682, '9126', 'SRI BHARATHI ENGINEERING COLLEGE FOR WOMEN', '', 'Engineering'),
(1683, '9127', 'ST.MICHAEL COLLEGE OF ENGINEERING & TECHNOLOGY', '', 'Engineering'),
(1684, '9129', 'ULTRA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1685, '9130', 'UNIVERSITY COLLEGE OF ENGINEERING, RAMANATHAPURAM', '', 'Engineering'),
(1686, '9133', 'VAIGAI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1687, '9201', 'BHARATH NIKETAN ENGINEERING COLLEGE', '', 'Engineering'),
(1688, '9202', 'CHETTINAD COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1689, '9203', 'CHRISTIAN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1690, '9209', 'N.S.N. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1691, '9210', 'NADAR SARASWATHI COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1692, '9212', 'VEERAMMAL ENGINEERING COLLEGE', '', 'Engineering'),
(1693, '9214', 'R.V.S. EDUCATIONAL TRUST\'S GROUP OF INSTITUTION', '', 'Engineering'),
(1694, '9215', 'R.V.S. COLLEGE OF ENGINEERING', '', 'Engineering'),
(1695, '9216', 'SBM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1696, '9218', 'SREE SOWDAMBIKA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1697, '9220', 'SRI VIDYA COLLEGE OF ENGINEERING & TECHNOLOGY', '', 'Engineering'),
(1698, '9222', 'THENI KAMMAVAR SANGAM COLLEGE OF TECHNOLOGY', '', 'Engineering'),
(1699, '9223', 'UNIVERSITY COLLEGE OF ENGINEERING, DINDIGUL', '', 'Engineering'),
(1700, '9226', 'VIJAY INSTITUTE OF MANAGEMENT', '', 'Engineering'),
(1701, '9228', 'AR SCHOOL OF BUSINESS', '', 'Engineering'),
(1702, '9229', 'AGNI SCHOOL OF BUSINESS EXCELLENCE', '', 'Engineering'),
(1703, '9230', 'ARULMURUGAN COLLEGE OF ENGINEERING', '', 'Engineering'),
(1704, '9233', 'GOVERNMENT COLLEGE OF ENGINEERING, Bodinayakunur', '', 'Engineering'),
(1705, '9234', 'MADURAI SCHOOL OF MANAGEMENT', '', 'Engineering'),
(1706, '9236', 'JAINEE COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1707, '9238', 'MANGAYARKARASI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1708, '9500', 'ANNA UNIVERSITY REGIONAL CAMPUS, TIRUNELVELLI', '', 'Engineering'),
(1709, '9501', 'A.R. COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1710, '9503', 'GRACE COLLEGE OF ENGINEERING', '', 'Engineering'),
(1711, '9504', 'DR.G.U.POPE COLLEGE OF ENGINEERING', '', 'Engineering'),
(1712, '9505', 'DR.SIVANTHI ADITANAR COLLEGE OF ENGINEERING', '', 'Engineering'),
(1713, '9506', 'EINSTEIN COLLEGE OF ENGINEERING', '', 'Engineering'),
(1714, '9508', 'GOVERNMENT COLLEGE OF ENGINEERING - THIRUNELVELI', '', 'Engineering'),
(1715, '9509', 'HOLY CROSS ENGINEERING COLLEGE', '', 'Engineering'),
(1716, '9510', 'INFANT JESUS COLLEGE OF ENGINEERING', '', 'Engineering'),
(1717, '9512', 'J P COLLEGE OF ENGINEERING', '', 'Engineering'),
(1718, '9513', 'JAYARAJ ANNAPACKIAM CSI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1719, '9516', 'MAHAKAVI BHARATHIYAR COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1720, '9518', 'NELLAI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1721, '9520', 'P.S.R.R COLLEGE OF ENGINEERING', '', 'Engineering'),
(1722, '9523', 'PSN ENGINEERING COLLEGE', '', 'Engineering'),
(1723, '9524', 'PSN INSTITUTE OF TECHNOLOGY AND SCIENCE', '', 'Engineering'),
(1724, '9525', 'RENGANAYAGI VARATHARAJ COLLEGE OF ENGINEERING', '', 'Engineering'),
(1725, '9526', 'S.VEERASAMY CHETTIAR COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1726, '9527', 'SARDAR RAJA COLLEGE OF ENGINEERING', '', 'Engineering'),
(1727, '9528', 'SCAD COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1728, '9530', 'ST.MOTHER THERESA ENGINEERING COLLEGE', '', 'Engineering'),
(1729, '9532', 'UNIVERSITY VOC COLLEGE OF ENGG, THOOTHUKUDI', '', 'Engineering'),
(1730, '9533', 'UNNAMALAI INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1731, '9534', 'V V COLLEGE OF ENGINEERING', '', 'Engineering'),
(1732, '9535', 'ARUL THARUM VPMM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1733, '9536', 'RAMCO INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1734, '9537', 'AAA COLLEGE OF ENGINEERING & TECHNOLOGY', '', 'Engineering'),
(1735, '9601', 'ANNAI VAILANKANNI COLLEGE OF ENGINEERING', '', 'Engineering'),
(1736, '9602', 'ARUNACHALA COLLEGE OF ENGINEERING FOR WOMEN', '', 'Engineering'),
(1737, '9603', 'BETHLAHEM INSTITUTE OF ENGINEERING', '', 'Engineering'),
(1738, '9604', 'C.S.I. INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1739, '9605', 'CAPE INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1740, '9606', 'DMI ENGINEERING COLLEGE', '', 'Engineering'),
(1741, '9607', 'IMMANUEL ARASAR J J COLLEGE OF ENGINEERING', '', 'Engineering'),
(1742, '9609', 'JAYAMATHA ENGINEERING COLLEGE', '', 'Engineering'),
(1743, '9611', 'LORD JEGANNATH COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1744, '9612', 'LOYOLA INSTITUTE OF TECHNOLOGY AND SCIENCE', '', 'Engineering'),
(1745, '9613', 'M.E.T. ENGINEERING COLLEGE', '', 'Engineering'),
(1746, '9614', 'MAR EPHRAEM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1747, '9615', 'MARIA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1748, '9616', 'MARTHANDAM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1749, '9617', 'NARAYANAGURU COLLEGE OF ENGINEERING', '', 'Engineering'),
(1750, '9618', 'PONJESLY COLLEGE OF ENGINEERING', '', 'Engineering'),
(1751, '9619', 'RAJAS INSTITUTE OF TECHNOLOGY', '', 'Engineering'),
(1752, '9620', 'SATYAM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1753, '9621', 'SIVAJI COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1754, '9623', 'AMRITA COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1755, '9626', 'UDAYA SCHOOL OF ENGINEERING', '', 'Engineering'),
(1756, '9627', 'UNIVERSAL COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1757, '9628', 'UNIVERSITY COLLEGE OF ENGG., NAGERCOIL', '', 'Engineering'),
(1758, '9629', 'VINS CHRISTIAN COLLEGE OF ENGINEERING', '', 'Engineering'),
(1759, '9632', 'PET ENGINEERING COLLEGE', '', 'Engineering'),
(1760, '9634', 'SIGMA COLLEGE OF ARCHITECTURE', '', 'Engineering'),
(1761, '9636', 'ARUNACHALA HITECH ENGINEERING COLLEGE', '', 'Engineering'),
(1762, '9638', 'GOOD SHEPHERD COLLEGE OF ENGINEERING & TECHNOLOGY', '', 'Engineering'),
(1763, '9639', 'SUN COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1764, '9640', 'NOORUL ISLAM COLLEGE OF ENGINEERING AND TECHNOLOGY', '', 'Engineering'),
(1765, '9641', 'IMMANUEL ARASAR COLLEGE OF ARCHITECTURE', '', 'Engineering'),
(1766, '9642', 'Surya School of Engineering', '', 'Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `lab_count`
--

CREATE TABLE `lab_count` (
  `id` int(11) NOT NULL,
  `lab_name` varchar(100) NOT NULL,
  `count` int(11) NOT NULL DEFAULT 0,
  `final_count` int(11) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lab_count`
--

INSERT INTO `lab_count` (`id`, `lab_name`, `count`, `final_count`) VALUES
(1, 'APPAREL MADE-UPS AND HOME FURNISHINGS LAB', 0, 0),
(2, 'ART AND DESIGN LABORATORY', 0, 0),
(3, 'ARTIFICIAL INTELLIGENCE - PRODUCT DEVELOPMENT', 0, 0),
(4, 'BIO PROSPECTING LAB', 0, 0),
(5, 'BIOPOLYMER AND BIOMATERIAL SYNTHESIS AND ANAYLTICAL TESTING', 0, 0),
(6, 'BIOPROCESS AND BIOPRODUCTS LAB', 0, 0),
(7, 'BLOCKCHAIN TECHNOLOGY', 0, 0),
(8, 'CLOUD COMPUTING', 0, 0),
(9, 'COMMUNICATION PROTOCOL', 0, 0),
(10, 'CYBER SECURITY', 0, 0),
(11, 'DATA SCIENCE - INDUSTRIAL APPLICATIONS', 0, 0),
(12, 'ELECTRICAL DRIVES AND AUTOMATION', 0, 0),
(13, 'ELECTRICAL PRODUCT DEV LAB', 0, 0),
(14, 'ELECTRONIC PRODUCT DEV LAB', 0, 0),
(15, 'ELECTRONIC SYSTEM FOR WILDLIFE CONSERVATION', 0, 0),
(16, 'EMBEDDED TECHNOLOGY', 0, 0),
(17, 'ENERGY AND THERMAL PRODUCT DESIGN & DEVELOPMENT LAB', 0, 0),
(18, 'ENERGY STORAGE & CONVERSION', 0, 0),
(19, 'FUNCTIONAL FOOD & NUTRACEUTICALS', 0, 0),
(20, 'FUNGAL BIODIVERSITY AND BIO- RESOURCES LABORATORY', 0, 0),
(21, 'HACKATHON LAB', 0, 0),
(22, 'AI BASED INDUSTRIAL AUTOMATION', 0, 0),
(23, 'INDUSTRIAL DESIGN', 0, 0),
(24, 'INDUSTRIAL IOT', 0, 0),
(25, 'IOT', 0, 0),
(26, 'MANUFACTURING & FABRICATION', 0, 0),
(27, 'MICRO PROTOTYPING LAB', 0, 0),
(28, 'MOBILE AND WEB APP FOR SOFTWARE APPLICATIONS', 1, 0),
(29, 'MODELLING & ANALYSIS', 0, 0),
(30, 'DESIGN AND PROTOTYPING', 0, 0),
(31, 'MOLECULAR DIAGNOSTICS & BIO MOLECULE CHARACTERISATION', 0, 0),
(32, 'NEW PRODUCT DEVELOPMENT LAB', 0, 0),
(33, 'INTELLIGENT COMMUNICATION AND EMBEDDED SYSTEMS LAB', 0, 0),
(34, 'PRINTED CIRCUIT BOARD (PCB) LAB', 0, 0),
(35, 'RENEWABLE ENERGY AND HVAC PRODUCTS', 0, 0),
(36, 'ROBOTICS & AUTOMATION LAB', 0, 0),
(37, 'INTEGRATED AI & SENSORS', 0, 0),
(38, 'SIGNAL PROCESSING FOR HEALTH CARE LAB', 0, 0),
(39, 'SMART AGRICULTURE', 0, 0),
(40, 'SMART AND HEALTHY INFRASTRUCTURE', 0, 0),
(41, 'ROBOTIC PROCESS AUTOMATION LAB', 0, 0),
(42, 'SUSTAINABLE CIVIL ENGINEERING MATERIALS LAB', 0, 0),
(43, 'TECHNICAL TEXTILE', 0, 0),
(44, 'UNMANNED AERIAL VEHICLE', 0, 0),
(45, 'UNMANNED UNDERWATER VEHICLE', 0, 0),
(46, 'VIRTUAL INSTRUMENTATION LAB', 0, 0),
(47, 'VIRTUAL REALITY / AUGMENTED REALITY', 0, 0),
(48, 'VISION ENGINEERING LAB', 0, 0),
(49, 'INTELLIGENCE INNOVATION LAB', 0, 0),
(50, 'SMART SENSOR INTELLIGENT', 0, 0),
(51, 'BIOMEDICAL SYSTEMS', 0, 0),
(52, 'ELECTRICAL INTEGRATED DRIVES', 0, 0),
(53, 'ARTIFICIAL INTELLIGENCE - TECHNOLOGIES', 1, 75),
(54, 'ARTIFICIAL INTELLIGENCE - INDUSTRIAL APPLICATIONS', 0, 0),
(55, 'ARTIFICIAL INTELLIGENCE - SOFTWARE SOLUTIONS', 1, 0),
(56, 'DATA SCIENCE - COMPUTATIONAL INTELLIGENCE', 0, 0),
(57, 'DATA SCIENCE - BIG DATA ANALYTICS', 0, 0),
(58, 'DATA SCIENCE - EXPERT SYSTEMS', 0, 25),
(59, 'WEB DESIGN AND DEVELOPMENT', 0, 0),
(60, 'SILK FASHION LAB', 0, 0),
(61, 'INDUSTRIAL WEB AND MOBILE APP DEVELOPMENT', 0, 0),
(62, 'INTEGRATED SMART BUILDINGS LAB', 0, 0),
(63, 'E-MOBILITY LAB', 0, 0),
(64, 'HUMAN CENTERED AI LAB', 0, 0),
(65, 'COMPUTATIONAL BIOLOGY LAB', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(100) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `title`, `description`, `type`, `date`) VALUES
(1, 'Finalist Published', 'Finalist results will be published soon stay tuned for updates', 'deadline', '2025-01-12'),
(2, 'Evaluation Inprogress', 'Evaluation going at full speed stay tuned for the big day', 'finalist', '2025-01-01'),
(4, 'Sample notification', 'sample notification for testing purpose', 'result', '2025-01-22');

-- --------------------------------------------------------

--
-- Stand-in structure for view `presentation_round_details`
-- (See below for the actual view)
--
CREATE TABLE `presentation_round_details` (
`team_id` int(11)
,`institution_id` int(11)
,`team_name` varchar(255)
,`number_of_participants` int(11)
,`leader_name` varchar(200)
,`leader_email` varchar(200)
,`team_members` varchar(255)
,`abstract_link` varchar(255)
,`video_link` varchar(200)
,`stage` enum('SUBMITTED','PRESENTATION','PARTICIPATION','WINNER')
,`ps_id` varchar(100)
,`category` varchar(200)
,`title` varchar(200)
,`description` varchar(255)
,`organization` varchar(200)
,`institution_name` varchar(255)
,`poc_name` varchar(255)
,`poc_email` varchar(255)
,`poc_number` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `problems`
--

CREATE TABLE `problems` (
  `id` int(11) NOT NULL DEFAULT 1000,
  `title` mediumtext NOT NULL,
  `brief` longtext NOT NULL,
  `solution` longtext NOT NULL,
  `faculty` varchar(80) NOT NULL,
  `faculty_mail` varchar(150) NOT NULL,
  `count` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `problems`
--

INSERT INTO `problems` (`id`, `title`, `brief`, `solution`, `faculty`, `faculty_mail`, `count`) VALUES
(101, 'ON DUTY / LEAVE Portal', 'To develop an application for facilitating the leave/ON DUTY approval process inside the campus and communicating the same to the parents in real time through SMS.', 'ON DUTY/ LEAVE requisition is submitted by the students detailing the necessity of ON DUTY / LEAVE. Once submitted, the approval form should be forwarded to Special Lab Incharge, Mentor and Special Lab Head sequentially. Upon the approval of the various heads, finally the form should be forwarded to the Dean.                  Once the Dean approves the ON DUTY/ LEAVE, the concern students should be intimated automatically about the approval / cancellation through SMS/ Mail.                 When the student leave the campus, the detail of the student (In/Out Time, place, reason) have to be communicated to the parents through SMS.', 'Mr. Nataraj N / AP - IT', 'nataraj@bitsathy.ac.in', 0),
(102, 'Parent Interactive Portal', 'To develop a mobile application for communicating the complete details about their children in a single portal.', 'Login credential for both parents and mentors (Admin). For parents, login is facilitated by their registered mobile number. For mentors, login through their bitsathy mail Id. Once the parents, logged in, complete details about their son/daughter should be visible. Complete Details include: Mark details, Attendance details, Competition participated details, Rewards earned, Skill obtained, Placement attended details, Offer letter - Internship/Placement, ON DUTY details, BITSATHY event photos, Subject handing faculties details along with Timetable, Daily News Link.', 'Dr. P. Dhivya, AP/CSE', 'dhivyap@bitsathy.ac.in', 0),
(103, 'Invigilation duty', 'To develop an automated system for invigilation duty reminder, hall allotment and entry registration', 'Prior intimation (one day before) of the duty schedule. Allotted halls should be shuffled and allocated to the registered faculty, and the allocated hall intimation to the concerned faculty member half an hour before the scheduled time. The duty reporting details based on biometric.', 'Mr. Pandiyan M / AP-ISE', 'pandiyanm@bitsathy.ac.in', 0),
(104, 'Result intimation', 'To develop an automated system for intimating the end semester results', 'End semester results of the registered courses should be intimated to the student concerned.', 'Mr. Pandiyan M / AP-II-ISE', 'pandiyanm@bitsathy.ac.in', 0),
(105, 'Booking and utilization Application', 'To develop an application for venue booking and utilization inside our campus.', 'Software which can be used for booking classroom and seminar hall. Utilization tracking and consolidating reports for each venue by nature of the event (regular class, skill training, exam, etc). Administrator rights will be infrastructure activities and faculty members should be provided with view rights for finding the status of the venue. The parameters of the venue should include facilities and capacity,', 'Dr. Gokulnath B V / AP - IT', 'gokulnathbv@bitsathy.ac.in', 0),
(106, 'Automatic FRS Calculation for Wiki Page entry by faculty', 'Automatic FRS Calculation for Wiki Page entry by faculty', 'The faculty members have to submit their lesson plans before the deadline through this application. After the submission of the lesson plan, lecture material, video, discussion questions, and discourse link the team academics going to evaluate all lesson plans and comment on the mistakes through this application. If the mistakes and corrections are over,  the respective FRS will be calculated based on the deadlines. Finally the corrected lesson plan and its contents will be shown Wikipage automatically.', 'Ms. Abirami A / AP-II - IT', 'abiramia@bitsathy.ac.in', 0),
(107, 'Classroom Allotment and Venue Blocking', 'To develop an application of Classroom Allotment and Venue Blocking.', 'The application has to collect all the classroom allotment and venue-blocking details. Based on the requirement of classroom and venue for academic progress the allotment has to be done by this application. The application needs to showcase a number of venues available and booked. The classroom and venue details need to showcase clearly (classroom size, no of sheets, projector, speaker availability, and working conditions.', 'Dr. Lakshmanaprakash S/AP - III - IT', 'lakshmanaprakashs@bitsathy.ac.in', 0),
(108, 'Material Tracking System', 'To develop an application for Material status tracking inside the campus and while requesting the material, display the availability with the location ', 'Any Proposals will be forwarded by the heads to the Apex committee through the Principal / Dean PDS. After the Apex Committee approval, a. the form should be forwarded to the respective heads, b. while assigning a Purchase Request (PR),  material status should be displayed, c. pending finance status, d. For online/local purchases, (i) Gate Entry, (ii) min entry at stores. Submit the bills to the accounts through the IQAC Approvals team.', 'Dr. Sri Vigna Hema V / AP-II - IT', 'srivignahemav@bitsathy.ac.in', 0),
(109, 'Student Survey and Feedback with Summary Report', 'To develop an application that provides the detailed report related to course feedback and course exit survey based on the responses received from the students in excel format.\r', 'Faculty feedback average calculation from students\' responses. Categorizing faculty members based on the feedback score (<3, 3 to 4, >4). Converting responses received on 5 point scale to 3 point scale for the course exit survey.', 'Dr. Sri Vigna Hema V / AP-II - IT', 'srivignahemav@bitsathy.ac.in', 0),
(110, 'Final Year Project Management  System', 'To develop an application that manages the students project work activitie', 'An application should have a provision for Project registration. Provision for approving external projects by Project Approval Committee (PAC). Unique Project ID allocation to be done for all batches. PMC allocation for project Review to be done automatically. Detailed reports related to students\' projects like Consolidated marks like No of batches, No of Students, Review completion status and Project pending status, etc.', 'Ms. Priya L/AP - IT', 'priyal@bitsathy.ac.in', 0),
(111, 'SKILLS  TRAINING PORTAL', 'To develop a Web/Mobile application for skills registration, attendance monitoring, assessment conduction, mark submission and feedback collection at BIT', 'Web and/or Mobile App needs to be developed for the below themes. Registration of the skill choice (which needs to be verified with previous semester skills). Attendance monitoring & Mark submission. Feedback Collection from students.', 'Mr. Selvakumar M / AP - IT', 'selvakumarm@bitsathy.ac.in', 0),
(112, 'REWARD POINTS SYSTEM PORTAL', 'To develop a Web/Mobile App for Reward Points System @ BIT', 'Web and/or Mobile App needs to be developed for the following themes. Displaying the students’ reward points (Consolidated reward points and detailed activity-wise reward points). Provision for registering the rewards point activity by faculty members, and approval by concerned heads. Activity-wise attendance monitoring and database creation for student-wise reward points submission and consolidation of reward points against student names. Reward points Redemption (Conversion of reward points to marks).', 'Mr. Selvakumar M / AP - IT', 'selvakumarm@bitsathy.ac.in', 0),
(113, 'Elective Subject Exemption Portal', 'To develop a Web/Mobile App. for elective subject exemption', 'Web and/or Mobile App needs to be developed for the below themes.  Verify the NPTEL online course certificates entered in the BIP portal. Verify the internship certificates entered in the BIP portal. Verify the one-credit course completion list provided by the CoE. Verify the add-on completion list provided by the CoE.', 'Dr. Eswaramoorthy V / AP - III - IT', 'eswaramoorthyv@bitsathy.ac.in', 0),
(114, 'External Technical Events Portal', 'To develop a Mobile App for tracking the student participation in external events by students.', 'Mobile App needs to be developed for the below themes. Tracking the student participation in the particular event. Originality of the certificate submitted in the BIP portal.', 'Dr. Eswaramoorthy V / AP - III - IT', 'eswaramoorthyv@bitsathy.ac.in', 0),
(115, 'BIT-LinkedIn portal', 'Develop a model Linked-In Portal specially for BIT community', 'Login credentials using BIT sathy mail ID. All facilities inside a general LinkedIn portal should be reflected. Need messaging facility among the peers. Provide a Job search platform wherein the students could search for jobs/ internships based on their interests. Separate Link to know about the BIT on-campus placement drives and results. Portal to design a resume professionally (Separate plugins should be added to design a resume on submitting the details).', 'Ms. Karthiga M / AP - II - CSE', 'karthigam@bitsathy.ac.in', 0),
(116, ' Grievances and Redressal portal', 'Develop a portal to record the Grievances and Redressal for both students and faculty\r', 'Login credentials using BIT sathy mail ID. Separate forms to collect the grievances of both students and faculty. The grievances addressed should be viewed by the Management team in an anonymous manner. The redressal of the grievances once resolved should be updated in the portal automatically. ', 'Dr. Dhivya P / AP - CSE', 'dhivyap@bitsathy.ac.in', 0),
(117, 'Special Lab Change Dashboard\r', 'Develop a portal to facilitate the special lab change of students and intimation to old and new faculty incharge accordingly\r \r ', 'Login credentials using BIT sathy mail ID.Forms for changing the Special Lab, once the student submitted the form for changing the special lab, the concerned special-lab-in-charge should approve the change. The new special-lab-in-charge should approve by the student, once approval from both labs in charge, the Special lab head should approve finally. After all approval, the new Special lab details should be reflected to the students. The approval/rejection should be automatically reflected in the common students\' database.', 'Mr. Nataraj N / AP - IT', 'nataraj@bitsathy.ac.in', 0),
(201, 'Open Innovation Category', 'Open Innovation Category', 'The challenge accepts limitless space and creativity. Students having amazing idea and a desire to implement the idea in our campus are encouraged to register for the open innovation category.', 'Dr. Rajasekar L / ASP - EIE', 'rajasekarl@bitsathy.ac.in', 0),
(301, 'Heritage Identification', 'HERITAGE Identification of monuments using Deep Learning Techniques', 'To identify the monuments from Satellite Images using Deep Learning and Integration of Interpretability for the predicted outcomes (Explainable AI). For datasets and additional information, please visit:  https://vedas.sac.gov.in/en/sih2022.html', 'Pradeesh E L/AP-II & MTRS', 'pradeeshel@bitsathy.ac.in', 0),
(302, 'Communication for Hearing Impaired', 'Enabling communication strategies for persons with hearing impairment.', 'Background: Successful communication requires the efforts of all people involved in a conversation. Even when the person with hearing loss utilizes hearing aids and active listening strategies, it is crucial that others involved in the communication process consistently use good communication strategies. The solution is to provide access to people with hearing impairment audio information received from various sources and enable persons with hearing disabilities to communicate with fellow humans. Summary: 1) The main barrier to communication for people who are hearing impaired is the lack of consideration by others. 2) There is an urgent requirement to include all humans in society as per the ratification of the UNCRPD act. 3) Considering the wealth of information being circulated, the pers with hearing impairment may lag behind if they cannot access this information, some of which may be vital and urgent. Objective: Develop solutions for the real-time provision of closed and open captioning, subtitles for videos, text telephone which will allow text messaging over the phone line, and telecommunications relay services which allow text-to-speak conversions through an operator.', 'Pradeesh E L/AP-II & MTRS', 'pradeeshel@bitsathy.ac.in', 0),
(303, 'Monitoring School Safety', 'Monitoring safety in schools by the school, students, teachers and parents, with escalation of issues to District and state level with the help of an App masking the identity of person who escalates the issue', 'Summary: A safe and secure school is a non-negotiable for providing quality education. DoSEL has come out with very detailed safety guidelines for schools. The guidelines prescribe safety walks, safety inspections, parental consultation, safety class projects, etc. It is necessary that schools/teachers do not consider the implementation of these guidelines as a burden. An App based solution based on these guidelines is required which has an interface with schools, teachers, students, and parents.', 'Chinnadurai C L/AP - EEE', 'chinnaduraicl@bitsathy.ac.in', 0),
(304, 'Regional Language Translation', 'Real time translations for regional languages', 'When a culturally diverse country like India is working on common goals yet preserving the local languages and cultures at regional level, sometimes communicating across, and communicating together in multiple languages over virtual medium becomes a hurdle while progressing, due to the very reason of not knowing other regional languages. This creates blocks and slows down the progress, apart from creating misunderstandings and inefficient use of time. Background- The Eighth Schedule of the Indian Constitution lists 22 languages, which have been referred to as scheduled languages and given recognition, status and official encouragement. According to the Census of India of 2001, India has 122 major languages and 1599 other languages. However, figures from other sources vary, primarily due to differences in definition of the terms \"\"language\"\" and \"\"dialect\"\". The 2001 Census recorded 30 languages which were spoken by more than a million native speakers and 122 which were spoken by more than 10,000 people While newer challenges India is facing in the areas of agriculture, environmental imbalances, cultural brain drains, political instability and the most recent pandemic affects, it is most important to come together to brainstorm and work on solutions collaboratively, come up with PAN India communication solution irrespective of language and culture differences. Giant Indian industries having widespread operations across Indian geography attract local talent, however making them communicate and collaborate to resolve issues. With people working on better opportunities, but across their regional periphery, makes them uncomfortable and less productive sometimes. Thus, communication now needs to be faster and seamless despite members lack cross language communication skills. Indian government is also working on a technology that can translate in real-time various vernacular Indian languages to enable the exchange of communications between two persons not speaking the same language. This will bridge boundaries and make us progress. Relevance/Detailed Description As we know, the recent pandemic has forced us adopt newer ways of working and world has come closer. As much as communicating in foreign language is difficult for an individual in India to work with a team member in China region (who mostly prefers to talk in Chinese) Or a German colleague (who use their native language to the fullest), it also becomes a barrier for an Indian person or citizen to interact with other people from different Indian States speaking different and unknown language. In such a situation, for ex. when a Maharashtrian person needs to share the information from the ancient Indian literature in Maharashtrian texts in his/her respective regional language with the other person from Bengal or Andhra Pradesh, he or she may pose a hurdle in the work, if he/she lacks the language skills. There arises a need to support agile communication in different languages seamlessly without having to bother about the language expertise. This necessitates need to develop a solution by means of which we can achieve real time translation of one language into another. The real time means, on the fly translation as one speaks. Our prime minister Shri. Narendra Modi has chosen his speech language as “Hindi” no matter which country he speaks. This one example necessitates an efficient real time language translation system that makes the message reach the world in each of the member’s preferred language. Language as a barrier is to be swept and communications need to be more inclusive and seamless with the use of digital technology – is what Government of India is striving to achieve in coming few years (Ministry of Electronics and Information Technology declared recently). Objectives Develop a technology that enables Real-Time translations of regional languages and hence language doesn’t become barrier between interpersonal, social or corporate communication. Further the objective is to come up with ways and means to make meaningful digital application/s that can use this technology and generate feature-rich application that applies at one or more scenarios and helps businesses. The objective of this problem statement resolution is also to come up with innovative application, service and/or integration which can convert one language speech into another on the fly using comprehensive Artificial Intelligence algorithms and deliver end to end solution.', 'Chinnadurai C L/AP - EEE', 'chinnaduraicl@bitsathy.ac.in', 0),
(305, 'Health Monitoring', 'Develop a smart application to Monitor the health of roads and trigger the reports to concern authorities for maintenance', 'Road are continuously constructed across various locations all over the country. The present system of monitoring the construction process and health is manually and thus becomes tedious and physically impossible many a time. Roads thus become due for repairs / maintenance prematurely due to various reasons. There is a requirement to devise a smart process may be by using smart technology to monitor the process at the time of construction, embedding sensors during road construction, use of smart imaging technology to assess condition using drones, smart devices installed on remote operated / autonomous vehicles for overseeing during construction, etc. There is an immediate need to identify a viable solution to increase the longevity of roads and prevent premature failure.', 'Abirami A/AP - II - IT', 'abiramia@bitsathy.ac.in', 0),
(306, 'Vehicle Detection', 'Moving vehicle registration plate detection', 'Background: Mining operations are generally spread over a vast area in remote locations and harsh environments. Coal extraction is a high cost and increasingly high technology venture that requires the utmost operational efficiency as well as uninterrupted workflow and delivery cycles. Operations cannot afford to be impacted due to lack of visibility as to the location and status of machinery, equipment and vehicles, since this causes delays, increased cost and mounting losses and is also an open invitation to theft and misuse. Real-time location tracking and monitoring, especially of moveable assets such as the vehicle fleet transporting the coal, is thus of critical importance to the mining industry. Tracking pickups and deliveries of thousands of truck-loads moving daily to and from various locations inside mining areas to processing plants, rail wagons or jetties is a logistics nightmare. Moving vehicle registration plate detection: RFID is fitted with vehicles moving across the mining region. The RFIDs are mapped to their respective registration number. It happens that two vehicles may exchange registration plates for malicious purpose including theft or forgery. A system is to be created to extract registration number from number plate of moving vehicle. The data captured should be transferred to cloud environment which can be available for further analysis of theft or proof reading. Summary: In general, most companies employ an active (battery-powered) radio frequency identification system to track trucks entering and leaving a mine with a load. This can be accomplished via a real-time location system (RTLS) if there are vehicles parked that need to be located quickly. But more commonly, an active RFID transponder is affixed to a vehicle, with readers set up at various points—at a mine’s entry gate, at a weigh station, at an exit and so forth. Software tracks the truck’s location, and you can usually run a variety of reports. The best solution really depends on the type of information that you would like to collect and use. Objective: To create an anti-theft auto security system that can extract registration number from number plate of moving vehicle. And can capture and transfer data to cloud, which can be available for further analysis of theft or proof reading.', 'Dr. Lakshmanaprakash S/AP-III IT', 'Lakshmanaprakashs@bitsathy.ac.in', 0),
(307, 'Monuments App', 'AR App for Monuments', 'Background: History plays an eminent role in cultural representation of any place as heritage sites and monuments reflect tradition, art and culture of the previous golden era.This can be achieved through AR in historical recreation. Using a smartphone, the user can visit historic buildings and learn more about the past, swipe through monuments and see events of the past come alive in 3D. Summary: To develop an AR application for visitors so that they can scan any area in a monument and can see history come alive through augmented animations. Objective: ? An \"Immersive Augmented Reality\" based App to explore the Cultural Heritage of India.', 'Ms. Karthiga M / AP - II - CSE', 'Karthigam@bitsathy.ac.in', 0),
(308, 'Pumping Data Analysis', 'Standalone Desktop application for pumping test data analysis', 'CGWB suggests developing a standalone desktop application for analysis and interpretation of pumping test data which can be distributed as freeware for use by ground water professionals, researchers, students, teachers and others Considering the pivotal role of groundwater in the world’s water supply and its gradual depletion coupled with growing contamination, there is an urgent need to investigate the reaction of aquifers to various human activities in terms of both quantity and quality of groundwater so as to avoid severe and often irreversible damages to the mankind and ecosystem. To achieve this broad goal, a prior knowledge of the hydraulic properties of different aquifer systems is a basic necessity for almost all groundwater-related studies. The pumping test (or ‘aquifer performance test’) is the standard and most widely used method for determining the hydraulic parameters of aquifers. Pumping tests are conducted on a large scale by CGWB, State Groundwater Departments, and other Groundwater agencies for estimating the hydraulic characters of water bearing layers. Various aquifer parameters such as Transmissivity, Storativity, Specific Yield can be estimated using pumping test. Analysis and interpretation of pumping test data is a tedious process and is usually done using computer applications. However, there are no Indian software available for this purpose. Central Ground Water Board proposes to develop standalone desktop application for analysis and interpretation of pumping test data which can be distributed as freeware for use by ground water professionals, researchers, students, teachers and others. Data Source: Professionals using the software application will enter the data. The user can chose to enter the data directly using forms or import it from existing data sources. Expected Outcome: A standalone desktop application for analysis and interpretation of pumping test data. Modules for interpretation involving standard methods like Theiss, Theiss recovery and Jacob methods can be made part of the software application. Innovative approach may be attempted to: Design the most complete set of tools for aquifer test data input, analysis, visualization, interpretation and reporting.', 'Dr. Dhivya P / AP - CSE', 'dhivyap@bitsathy.ac.in', 0),
(309, 'Addressing Non Revenue Water', 'Use of Digital Technology in addressing Non-Revenue Water (NRW)', 'With ever-increasing urban population growth and expanding area coverage, many water utilities in India struggling to provide clean drinking water to their consumers. Water supply issues are related to sources and usage of raw water; intermittent water supply and the quality of tap water at the consumers’ end. One of the major challenge facing is the high level of water loss in distribution networks. “Non-Revenue Water” (NRW) is defined as the difference between the amount of water put into the distribution system and the amount of water recovered from consumers. NRW is a good indicator for water utility performance; high levels of NRW typically indicate a poorly managed water utility. In addition, available NRW data are often found problematic, suspicious, inaccurate, or provide only partial information. Despite of knowing the benefits of reducing NRW, decades of effort have not delivered much improvement in India. Lack of support for comprehensive NRW management by 691788/2021/e-Governance Section 20/30 2 utility owners and chief executive officers makes it difficult to motivate utility staff and provide them with the means (funding, training, and technology) to successfully and sustainably reduce NRW. Hence, there is a need to develop a system or technology to trace and tackle non-revenue water and convert it into revenue water using digital methods. This will save water as well as increase profitability and improves the return on investment with respective to water distribution networks.', 'Dr. Gokulnath B V / AP - IT', 'gokulnathbv@bitsathy.ac.in', 0),
(310, 'Flood Avoidance', 'Predictive warning for release of water from reservoirs causing flood situation', 'IMD (Indian Meteorology department) is responsible to issue warnings for the rainfall and CWC (Central Water Commission) keeps a record of water reservoirs, however there is a lack of collation of data issued from both these departments. This prevents us from determining the impact/seriousness and due to which there are times where adequate forewarnings are not provided. There are several High rainfall areas, low lying areas or flood prone areas. Currently there are limitations that these areas cannot be alerted before the critical situation because of the data unavailability or unavailability of simulation models which can calculate and predict the data. There is a requirement of data on the area likely to be inundated(depth) by release of water from reservoirs. 3D models may help in calculation of such data. a) Adequate forewarning for the area where floods are likely to occur. b) Low lying areas may be alerted about the release of accurate quantity of water from the reservoirs and thus evacuation/shifting of the people can be planned. c) It will help the Response forces to deploy their resources accordingly d) Prediction of release of water based on rainfall in catchment area and dissemination of an information to the affected public through mobile and other mediums.', 'Ms. Priya L/AP - IT', 'priyal@bitsathy.ac.in', 0),
(311, 'System Tracking', 'To track list of software installed in the PC’s / Workstation’s attached to the network.', 'Any organization will have authorized software preinstalled on their PC’s/Workstations during system build. Later, by mistake, staff may tend to install software that is freely available over the internet, which in turn may pave the way to viruses/spyware/spamware which potentially paralyze the network. Develop a software (scheduler based) to track the list of all software installed on the PCs & Workstations attached to the network and generate a report based on IPs. The report may be sent to the admin and the admin should be able to delete or uninstall the software of a particular user’s system. To track the list of software installed in the PCs / Workstations attached to the network.', 'Venkatesan R/AP - IT', 'venkatesanr@bitsathy.ac.in', 0),
(312, 'Region Connectivity', 'Identification of Missing Bridges which would increase the connectivity between regions', 'Based on road network, habitation, facilities datawhich bridge over a water body will drasticallyimprove connectivity in a region. Alternatively, algorithm to identify compute utility of aproposed bridge.', 'Venkatesan R/AP - IT', 'venkatesanr@bitsathy.ac.in', 0);

-- --------------------------------------------------------

--
-- Table structure for table `problem_statements`
--

CREATE TABLE `problem_statements` (
  `id` int(11) NOT NULL,
  `ps_id` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(255) NOT NULL,
  `organization` varchar(200) NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `problem_statements`
--

INSERT INTO `problem_statements` (`id`, `ps_id`, `category`, `title`, `description`, `organization`, `count`) VALUES
(8, 'SIH1610', 'Software', 'Learning App for Deaf And Mute and sign language-English/Gujarati converter', 'Background: “Inclusivity” is the motto of Education department, Government of Gujarat. Opportunity for all is the new slogan and The Indian Government has come up with Indian Sign Language. There has been lot of work in done in American sign language and ', 'Government of Gujarat', 0),
(9, 'SIH1613', 'Software', 'Automated System for Career Advancements of the Faculties of Higher Education', 'Background: This problem requires an innovative approach to enhance the efficiency and transparency of faculty self-appraisal in the university settings. Through a robust web-based platform, the system should address the complexities associated with tradi', 'Government of NCT of Delhi', 3),
(10, 'SIH1615', 'Software', 'Learning path dashboard for enhancing skills', 'Background: For a much simplified and initial solution, input (publication record) can also be provided in a consolidated single .bibtex file. However, it is desirable to provide input as an excel sheet, as mentioned earlier. Description: The proposed sol', 'Government of NCT of Delhi', 1),
(13, 'SIH1622', 'Software', 'Online issuance of Caste and other certificates by Revenue Department need real-time monitoring', 'The issuance of Caste and other certificates by Revenue Department need real-time monitoring to evaluate the resource allocation and demand for such certificates. The allocation of resources at present is done without any analysis leading to huge backlogs', 'Government of NCT of Delhi', 1),
(14, 'SIH1628', 'Software', 'Smart Competency Diagnostic and Candidate Profile Score Calculator', 'Project Concept: Comprehensive Employment Platform/Portal The current employment portal lacks a personalized and adaptive approach to job matching and skill development. There is a need for an intelligent system that not only matches job seekers with pote', 'Government of Punjab', 1),
(15, 'SIH1631', 'Software', 'AI-Powered Student Assistance Chatbot for Department of Technical Education, Government of Rajasthan.', 'Background: There are numerous engineering and polytechnic institutes in Rajasthan running under the Department of Technical Education, Government of Rajasthan. Notably, during the admission process, there is a significant increase in enquiries from vario', 'Government of Rajasthan', 0),
(16, 'SIH1698', 'Software', 'Development of an educational game (web-based and mobile- based) on groundwater conservation and management', 'Learn while you play is considered the most effecting way of teaching. Internet/mobile based games could be one of the best ways to lure school kids, youth and water enthusiasts to learn the nuances of ground water management. With this backdrop it is pro', 'Ministry of Jal Shakti', 0),
(17, 'SIH1775', 'Software', 'Fake social media accounts and their detection', 'Background: At present the ITBP guards 3,488 km long India-China borders ranging from the Karakoram Pass in Ladakh to Jachep La in Arunachal Pradesh. Apart from this, the Force also has important roles in many internal security duties and operations again', 'Indo-Tibetan Border Police (ITBP), MHA', 0),
(18, 'SIH1781', 'Software', 'AI-Enhanced Career Guidance System for Personalized Career Pathways', 'Develop an AI-powered career guidance system that provides personalized career pathways for students and professionals. The system should consider an individual’s aptitude, aspirations, abilities, and work experience to recommend tailored career options a', 'Ministry of Skill Development and Entrepreneurship (MSDE)', 0),
(19, 'SIH1789', 'Software', 'Hardware Inventory Management in the Police Department', 'Effective hardware inventory management is crucial for the police department to ensure that all technological assets, such as computers. communication devices, servers, and other equipment. are available, functioning, and up-to-date. Proper inventory mana', 'Madhya Pradesh Police', 0),
(20, 'SIH1786', 'Software', 'A Software, AI App to provide legal information ie. Case laws various important landmark judgement on important case legal matters.', 'Background: Due to unavailability of legal experts in Police stations, whenever a complainant comes to us with his/her complaint to get a First Information Report written sometimes we make mistakes in writing all the sections/acts due to which problems ar', 'Madhya Pradesh Police', 0),
(21, 'PS021001', 'Software', 'Bridging The Gap Between Technical Graduates And Quality It Resources', 'Despite a significant number of technical graduates passing out from educational institutions in Gujarat, there exists a disconnect between the talent pool and the requirements of organizations like Gujarat Informatics Limited (GIL) seeking quality IT res', 'Gujarat Informatics Limited', 0),
(22, 'PS032002', 'Software', 'Alert System Of The City Through Social Media Channel', 'As we know that there are many problems in the city at a daily basis and municipal corporation cannot be aware of all the problems that are happening to the people but sometime people upload their problem through social media. Therefore it is much needed ', 'Rajkot municipal cororation', 0),
(23, 'PS004011', 'Software', 'Consumer Complaint Tracking, Assigning And Monitoring Mechanism', 'As the technology progresses, use of Information technology for consumer satisfaction is the need of the time. In DISCOMs, whenever there is any fault, consumer registers his complain to complain centre and from the work task for corrective action is assi', 'Gujarat Urja Vikas Nigam Limited.', 0),
(24, 'PS011013', 'Software', 'Recruitment Portal', '• MSMEs cannot find the right candidate for the company • Job seekers are available in the market but not aware the companies’ openings • Unskilled labours are not aware the current market trends & industry requirements', 'Industries Commissionerate', 0),
(25, 'PS036037', 'Software', 'Mobile Application providing information about various Government Schemes for citizens under District Panchayat.', 'Government of Gujarat frequently declares various schemes for welfare of people. Many of these schemes are implemented by District panchayat. The details of such schemes are published in newspaper by government and also publish on government portal and we', 'DDO, Valsad', 0),
(26, 'UHCK_CC001', 'Software', 'Resource Allocation Optimisation in Cloud Computing Environments', 'Cloud computing provides customers with huge computing resources and services, allowing them to effectively grow their applications and services. However, because of the dynamic nature of workloads and the requirement to optimise resource utilisation whil', 'Koshaa Foods', 0),
(27, 'UHCK_IT003', 'Software', 'Improving Online Exam Integrity', 'An institute conducts online exams that are vulnerable to cheating and academic misconduct. The existing online exam system lacks robust security measures and monitoring capabilities. The institute is seeking a solution to improve the integrity of online ', 'Moretech Solutions Pvt. Ltd.', 0),
(28, 'UHCK_ET001', 'Software', ' Analyzing Crowd Density to Identify Low Footfall Cafes in the University Campus', 'It’s a generalized issue that the university\'s food court faces significant challenges during the lunch hour. Such an instance could be bought upon our UPES, where we have 3 Levels of the food court, working independently, and 2 intercollege cafes which o', 'School of Computer Science', 0),
(29, 'SIH1607', 'Software', 'Audio & Video Translate System: A large portion of audio & videos are available in English. It consumes large amount of time by the experts in respective languages to convert them into required langua', 'Audio & Video Translate System: A large portion of audio & videos are available in English. It consumes large amount of time by the experts in respective languages to convert them into required languages which could have been utilized in developing novel ', 'TANSCHE', 0),
(30, '2', 'Software', 'Develop an loT enabled Android application to give real time parking space available on the campus', 'In the present scenario of covid pandemic automatic parking system is one of the important prototypes that we need . Hence design a Iot based android application of parking system to detect an available parking slot in a parking space .', 'TANSCHE', 0),
(31, '3', 'Software', 'Student Innovation ', 'Innovative ideas from student ', 'TANSCHE', 0),
(32, '4', 'Software', 'Student Innovation ', 'Innovative ideas from student ', 'TANSCHE', 0),
(33, '5', 'Software', 'Student Innovation ', 'Innovative ideas from student ', 'TANSCHE', 0),
(34, '6', 'Software', 'Student Innovation ', 'Innovative ideas from student ', 'TANSCHE', 0),
(35, '7', 'Software', 'Student Innovation ', 'Innovative ideas from student ', 'TANSCHE', 0),
(36, '8', 'Software', 'Student Innovation ', 'Innovative ideas from student ', 'TANSCHE', 0),
(37, '9', 'Software', 'Student Innovation ', 'Innovative ideas from student ', 'TANSCHE', 0);

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `team` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `problem` mediumtext NOT NULL,
  `link` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `team`, `email`, `problem`, `link`) VALUES
(1, 'Sleek', 'allwin.cs21@bitsathy.ac.in', '101', 'http://www.agarampublicschool.in/'),
(2, 'Sleek', 'anusuya.cs21@bitsathy.ac.in', '101', 'http://www.agarampublicschool.in/'),
(3, 'Sleek', 'kavinkumar.cs21@bitsathy.ac.in', '101', 'http://www.agarampublicschool.in/'),
(4, 'Sleek', 'monishkumar.cs21@bitsathy.ac.in', '101', 'http://www.agarampublicschool.in/'),
(5, 'Sleek', 'allwin.cs21@bitsathy.ac.in', '102', 'http://www.agarampublicschool.in/'),
(6, 'Sleek', 'anusuya.cs21@bitsathy.ac.in', '102', 'http://www.agarampublicschool.in/'),
(7, 'Sleek', 'kavinkumar.cs21@bitsathy.ac.in', '102', 'http://www.agarampublicschool.in/'),
(8, 'Sleek', 'monishkumar.cs21@bitsathy.ac.in', '102', 'http://www.agarampublicschool.in/');

-- --------------------------------------------------------

--
-- Stand-in structure for view `registration_count`
-- (See below for the actual view)
--
CREATE TABLE `registration_count` (
`ps_id` varchar(200)
,`count` bigint(21)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `registration_details`
-- (See below for the actual view)
--
CREATE TABLE `registration_details` (
`team_institution` int(11)
,`team_id` int(11)
,`ps_id` varchar(200)
,`category` varchar(200)
,`title` varchar(200)
,`description` varchar(255)
,`organization` varchar(200)
,`team_name` varchar(255)
,`number_of_participants` int(11)
,`leader_name` varchar(200)
,`leader_email` varchar(200)
,`team_members` varchar(255)
,`abstract_link` varchar(255)
,`video_link` varchar(200)
,`stage` enum('SUBMITTED','PRESENTATION','PARTICIPATION','WINNER')
);

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `id` int(11) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `roll_no` varchar(45) DEFAULT NULL,
  `lab_name` varchar(45) DEFAULT NULL,
  `lab_id` varchar(45) DEFAULT NULL,
  `phone_number` bigint(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_details`
--

INSERT INTO `student_details` (`id`, `email`, `name`, `roll_no`, `lab_name`, `lab_id`, `phone_number`) VALUES
(1, 'demo', 'Random', '7376211CS999', 'demo', 'SLB003', 9978642975),
(1016, 'monishkumar.cs21@bitsathy.ac.in', 'monish', '7376211CS217', 'ARTIFICIAL INTELLIGENCE - TECHNOLOGIES', 'SLB065', 7010220960),
(1020, 'kavinkumar.cs21@bitsathy.ac.in', 'Kavinkumar B', '7376211CS183', 'ARTIFICIAL INTELLIGENCE - TECHNOLOGIES', 'SLB065', 8072677947),
(1014, 'allwin.cs21@bitsathy.ac.in', 'ALLWIN G B', '7376211CS113', 'ARTIFICIAL INTELLIGENCE - TECHNOLOGIES', 'SLB065', 9360639389),
(1017, 'anusuya.cs21@bitsathy.ac.in', 'Anusuya J', '7376211CS117', 'DATA SCIENCE - EXPERT SYSTEMS', 'SLB070', 9677927470),
(1018, 'anushmamahalakshmi.cs21@bitsathy.ac.in', 'anushma mahalakshmi a', '7376211cs116', 'MOBILE AND WEB APP FOR SOFTWARE APPLICATIONS', 'SLB015', 9585472727),
(1021, 'ragul.cb20@bitsathy.ac.in', 'Ragul A S', '202CB132', 'ARTIFICIAL INTELLIGENCE - SOFTWARE SOLUTIONS', 'SLB066', 9597931909);

-- --------------------------------------------------------

--
-- Stand-in structure for view `submitted_details`
-- (See below for the actual view)
--
CREATE TABLE `submitted_details` (
`team_id` int(11)
,`institution_id` int(11)
,`team_name` varchar(255)
,`number_of_participants` int(11)
,`leader_name` varchar(200)
,`leader_email` varchar(200)
,`team_members` varchar(255)
,`abstract_link` varchar(255)
,`video_link` varchar(200)
,`stage` enum('SUBMITTED','PRESENTATION','PARTICIPATION','WINNER')
,`ps_id` varchar(100)
,`category` varchar(200)
,`title` varchar(200)
,`description` varchar(255)
,`organization` varchar(200)
,`institution_name` varchar(255)
,`poc_name` varchar(255)
,`poc_email` varchar(255)
,`poc_number` varchar(20)
);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `email` varchar(40) NOT NULL,
  `team_id` varchar(30) NOT NULL,
  `designation` varchar(20) NOT NULL,
  `parent_id` varchar(30) NOT NULL,
  `id` int(11) NOT NULL,
  `register_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`email`, `team_id`, `designation`, `parent_id`, `id`, `register_name`) VALUES
('demo', 'demo', 'demo', '1', 1, 'demo');

-- --------------------------------------------------------

--
-- Table structure for table `team_details`
--

CREATE TABLE `team_details` (
  `id` int(11) NOT NULL,
  `institution_id` int(11) NOT NULL,
  `team_name` varchar(255) DEFAULT NULL,
  `number_of_participants` int(11) NOT NULL,
  `leader_name` varchar(200) NOT NULL,
  `leader_email` varchar(200) NOT NULL,
  `problem_statement_id` varchar(100) NOT NULL,
  `team_members` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `abstract_link` varchar(255) NOT NULL,
  `video_link` varchar(200) NOT NULL DEFAULT '-',
  `stage` enum('SUBMITTED','PRESENTATION','PARTICIPATION','WINNER') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team_details`
--

INSERT INTO `team_details` (`id`, `institution_id`, `team_name`, `number_of_participants`, `leader_name`, `leader_email`, `problem_statement_id`, `team_members`, `abstract_link`, `video_link`, `stage`, `created_at`, `updated_at`) VALUES
(1, 27, 'warriors', 4, 'hari', 'hari@gmail.com', 'SIH1604', 'sai, kavin, guru', 'https://tnsche.tn.gov.in/en/contact-us/', '-', 'SUBMITTED', '2024-12-26 09:10:10', '2025-01-21 05:00:22'),
(2, 31, 'Assasins', 2, 'sai', 'sai@sai.com', 'SIH1607', 'kavin, hari', 'https://www.jsdn.es/jSDN/en/mainframe.html', 'vfd', 'PRESENTATION', '2025-01-02 06:45:50', '2025-01-21 10:04:39'),
(3, 31, 'Assasins', 2, 'sai', 'sai@sai.com', 'SIH1613', 'hari, kavin', 'https://www.jsdn.es/jSDN/en/mainframe.html', 'jygycd', 'PARTICIPATION', '2025-01-02 07:10:10', '2025-01-21 10:06:26'),
(5, 31, 'Assasins', 1, 'sai', '111@de3', 'SIH1622', '11', '23423dasd', '-', 'SUBMITTED', '2025-01-06 10:24:40', '2025-01-06 10:24:40'),
(6, 31, 'Assasins', 1, 'sai', 'srisathyasai24680@gmail.com', 'SIH1615', 'kavin', 'asd', '-', 'SUBMITTED', '2025-01-06 11:27:48', '2025-01-06 11:27:48'),
(7, 40, 'team ace', 1, 'kavin', 'kavin@gmail.com', 'SIH1628', 'khtct', 'asd33', '-', 'PRESENTATION', '2025-01-07 06:24:31', '2025-01-21 09:48:39'),
(8, 31, 'spartans', 1, 'spartan', 'sai@sai.com', 'SIH1613', 'spartan', 'https://localhost:5173', '-', 'WINNER', '2025-01-21 05:16:48', '2025-01-21 07:31:00'),
(9, 31, 'spartans2', 1, 'spartan2', 'sai@sai.com', 'SIH1613', 'spartan2', 'https://localhost:5173', 'sample', 'PRESENTATION', '2025-01-21 06:14:21', '2025-01-21 09:35:06');

-- --------------------------------------------------------

--
-- Table structure for table `unauth_tokens`
--

CREATE TABLE `unauth_tokens` (
  `id` int(11) NOT NULL,
  `token` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `institution_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `institution_id`, `created_at`) VALUES
(22, 'srisathyasai@gmail.com', '$2b$10$WhA1yc4NwfTlR1Y58fX12.cDOMFfRospPvK.MmcqDorjBpckjkGXi', 39, '2025-01-06 09:15:07'),
(23, 'sai@sai.com', '$2b$10$WhA1yc4NwfTlR1Y58fX12.cDOMFfRospPvK.MmcqDorjBpckjkGXi', 31, '2025-01-06 15:07:26'),
(24, 'abc@gmail.com', '$2b$10$yCLr5OuyiV7LFBzZ3GKhXOKhBGa6LgM2OhK7AquUzoSNRe7BYTzuK', 27, '2025-01-06 15:09:42'),
(25, 'hari@gmail.com', '$2b$10$1MWKXhSI.HQj3Os4EOyOR.wmsDmNeG8biopnfL66VRKbecPmjdKuS', 40, '2025-01-06 09:57:44'),
(26, 'harichris28@gmail.com', '$2b$10$gqTH/ZAWFMFgdOVJFsGuT.mrAMiQR47/uhmCe7SteV9JLAo/0rhle', 42, '2025-01-22 07:01:14');

-- --------------------------------------------------------

--
-- Stand-in structure for view `winner_details`
-- (See below for the actual view)
--
CREATE TABLE `winner_details` (
`team_id` int(11)
,`institution_id` int(11)
,`team_name` varchar(255)
,`number_of_participants` int(11)
,`leader_name` varchar(200)
,`leader_email` varchar(200)
,`team_members` varchar(255)
,`abstract_link` varchar(255)
,`video_link` varchar(200)
,`stage` enum('SUBMITTED','PRESENTATION','PARTICIPATION','WINNER')
,`ps_id` varchar(100)
,`category` varchar(200)
,`title` varchar(200)
,`description` varchar(255)
,`organization` varchar(200)
,`institution_name` varchar(255)
,`poc_name` varchar(255)
,`poc_email` varchar(255)
,`poc_number` varchar(20)
);

-- --------------------------------------------------------

--
-- Structure for view `final_participants_details`
--
DROP TABLE IF EXISTS `final_participants_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `final_participants_details`  AS SELECT `team_details`.`id` AS `team_id`, `team_details`.`institution_id` AS `institution_id`, `team_details`.`team_name` AS `team_name`, `team_details`.`number_of_participants` AS `number_of_participants`, `team_details`.`leader_name` AS `leader_name`, `team_details`.`leader_email` AS `leader_email`, `team_details`.`team_members` AS `team_members`, `team_details`.`abstract_link` AS `abstract_link`, `team_details`.`video_link` AS `video_link`, `team_details`.`stage` AS `stage`, `team_details`.`problem_statement_id` AS `ps_id`, `problem_statements`.`category` AS `category`, `problem_statements`.`title` AS `title`, `problem_statements`.`description` AS `description`, `problem_statements`.`organization` AS `organization`, `institution`.`institution_name` AS `institution_name`, `institution`.`poc_name` AS `poc_name`, `institution`.`poc_email` AS `poc_email`, `institution`.`poc_number` AS `poc_number` FROM ((`team_details` join `problem_statements` on(`team_details`.`problem_statement_id` = `problem_statements`.`ps_id`)) join `institution` on(`institution`.`id` = `team_details`.`institution_id`)) WHERE `team_details`.`stage` = 'PARTICIPATION' ;

-- --------------------------------------------------------

--
-- Structure for view `presentation_round_details`
--
DROP TABLE IF EXISTS `presentation_round_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `presentation_round_details`  AS SELECT `team_details`.`id` AS `team_id`, `team_details`.`institution_id` AS `institution_id`, `team_details`.`team_name` AS `team_name`, `team_details`.`number_of_participants` AS `number_of_participants`, `team_details`.`leader_name` AS `leader_name`, `team_details`.`leader_email` AS `leader_email`, `team_details`.`team_members` AS `team_members`, `team_details`.`abstract_link` AS `abstract_link`, `team_details`.`video_link` AS `video_link`, `team_details`.`stage` AS `stage`, `team_details`.`problem_statement_id` AS `ps_id`, `problem_statements`.`category` AS `category`, `problem_statements`.`title` AS `title`, `problem_statements`.`description` AS `description`, `problem_statements`.`organization` AS `organization`, `institution`.`institution_name` AS `institution_name`, `institution`.`poc_name` AS `poc_name`, `institution`.`poc_email` AS `poc_email`, `institution`.`poc_number` AS `poc_number` FROM ((`team_details` join `problem_statements` on(`team_details`.`problem_statement_id` = `problem_statements`.`ps_id`)) join `institution` on(`institution`.`id` = `team_details`.`institution_id`)) WHERE `team_details`.`stage` = 'PRESENTATION' ;

-- --------------------------------------------------------

--
-- Structure for view `registration_count`
--
DROP TABLE IF EXISTS `registration_count`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `registration_count`  AS   (select `registration_details`.`ps_id` AS `ps_id`,count(`registration_details`.`ps_id`) AS `count` from `registration_details`)  ;

-- --------------------------------------------------------

--
-- Structure for view `registration_details`
--
DROP TABLE IF EXISTS `registration_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `registration_details`  AS   (select `team_details`.`institution_id` AS `team_institution`,`team_details`.`id` AS `team_id`,`problem_statements`.`ps_id` AS `ps_id`,`problem_statements`.`category` AS `category`,`problem_statements`.`title` AS `title`,`problem_statements`.`description` AS `description`,`problem_statements`.`organization` AS `organization`,`team_details`.`team_name` AS `team_name`,`team_details`.`number_of_participants` AS `number_of_participants`,`team_details`.`leader_name` AS `leader_name`,`team_details`.`leader_email` AS `leader_email`,`team_details`.`team_members` AS `team_members`,`team_details`.`abstract_link` AS `abstract_link`,`team_details`.`video_link` AS `video_link`,`team_details`.`stage` AS `stage` from (`problem_statements` join `team_details` on(`problem_statements`.`ps_id` = `team_details`.`problem_statement_id`)))  ;

-- --------------------------------------------------------

--
-- Structure for view `submitted_details`
--
DROP TABLE IF EXISTS `submitted_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `submitted_details`  AS SELECT `team_details`.`id` AS `team_id`, `team_details`.`institution_id` AS `institution_id`, `team_details`.`team_name` AS `team_name`, `team_details`.`number_of_participants` AS `number_of_participants`, `team_details`.`leader_name` AS `leader_name`, `team_details`.`leader_email` AS `leader_email`, `team_details`.`team_members` AS `team_members`, `team_details`.`abstract_link` AS `abstract_link`, `team_details`.`video_link` AS `video_link`, `team_details`.`stage` AS `stage`, `team_details`.`problem_statement_id` AS `ps_id`, `problem_statements`.`category` AS `category`, `problem_statements`.`title` AS `title`, `problem_statements`.`description` AS `description`, `problem_statements`.`organization` AS `organization`, `institution`.`institution_name` AS `institution_name`, `institution`.`poc_name` AS `poc_name`, `institution`.`poc_email` AS `poc_email`, `institution`.`poc_number` AS `poc_number` FROM ((`team_details` join `problem_statements` on(`team_details`.`problem_statement_id` = `problem_statements`.`ps_id`)) join `institution` on(`institution`.`id` = `team_details`.`institution_id`)) WHERE `team_details`.`stage` = 'SUBMITTED' ;

-- --------------------------------------------------------

--
-- Structure for view `winner_details`
--
DROP TABLE IF EXISTS `winner_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `winner_details`  AS SELECT `team_details`.`id` AS `team_id`, `team_details`.`institution_id` AS `institution_id`, `team_details`.`team_name` AS `team_name`, `team_details`.`number_of_participants` AS `number_of_participants`, `team_details`.`leader_name` AS `leader_name`, `team_details`.`leader_email` AS `leader_email`, `team_details`.`team_members` AS `team_members`, `team_details`.`abstract_link` AS `abstract_link`, `team_details`.`video_link` AS `video_link`, `team_details`.`stage` AS `stage`, `team_details`.`problem_statement_id` AS `ps_id`, `problem_statements`.`category` AS `category`, `problem_statements`.`title` AS `title`, `problem_statements`.`description` AS `description`, `problem_statements`.`organization` AS `organization`, `institution`.`institution_name` AS `institution_name`, `institution`.`poc_name` AS `poc_name`, `institution`.`poc_email` AS `poc_email`, `institution`.`poc_number` AS `poc_number` FROM ((`team_details` join `problem_statements` on(`team_details`.`problem_statement_id` = `problem_statements`.`ps_id`)) join `institution` on(`institution`.`id` = `team_details`.`institution_id`)) WHERE `team_details`.`stage` = 'WINNER' ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `eval_filter`
--
ALTER TABLE `eval_filter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `eval_users`
--
ALTER TABLE `eval_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `event_details`
--
ALTER TABLE `event_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `final_participants`
--
ALTER TABLE `final_participants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `institution`
--
ALTER TABLE `institution`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `poc_email` (`poc_email`),
  ADD UNIQUE KEY `institution_code` (`institution_code`);

--
-- Indexes for table `institution_predefined`
--
ALTER TABLE `institution_predefined`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lab_count`
--
ALTER TABLE `lab_count`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `lab_name_UNIQUE` (`lab_name`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `problems`
--
ALTER TABLE `problems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `problem_statements`
--
ALTER TABLE `problem_statements`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ps_id` (`ps_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `phone_number_UNIQUE` (`phone_number`),
  ADD UNIQUE KEY `roll_no_UNIQUE` (`roll_no`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_details`
--
ALTER TABLE `team_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `institution_id` (`institution_id`);

--
-- Indexes for table `unauth_tokens`
--
ALTER TABLE `unauth_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `ForeignKey` (`institution_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `evaluation`
--
ALTER TABLE `evaluation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `eval_filter`
--
ALTER TABLE `eval_filter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `eval_users`
--
ALTER TABLE `eval_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `event_details`
--
ALTER TABLE `event_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `final_participants`
--
ALTER TABLE `final_participants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `institution`
--
ALTER TABLE `institution`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `institution_predefined`
--
ALTER TABLE `institution_predefined`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1767;

--
-- AUTO_INCREMENT for table `lab_count`
--
ALTER TABLE `lab_count`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `problem_statements`
--
ALTER TABLE `problem_statements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `student_details`
--
ALTER TABLE `student_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1022;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `team_details`
--
ALTER TABLE `team_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `team_details`
--
ALTER TABLE `team_details`
  ADD CONSTRAINT `team_details_ibfk_1` FOREIGN KEY (`institution_id`) REFERENCES `institution` (`id`);

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `autoDeleteTokens` ON SCHEDULE EVERY 5 HOUR STARTS '2025-01-07 13:18:01' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM unauth_tokens
  WHERE created_at <= NOW() - INTERVAL 5 HOUR$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
