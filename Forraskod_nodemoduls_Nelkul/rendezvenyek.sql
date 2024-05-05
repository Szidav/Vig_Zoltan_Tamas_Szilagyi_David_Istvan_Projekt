-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Máj 04. 20:57
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `rendezvenyek`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ertekesitesek`
--

CREATE TABLE `ertekesitesek` (
  `VSO_Id` int(11) NOT NULL,
  `JGY_Id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `sorozatszam` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jegyek`
--

CREATE TABLE `jegyek` (
  `Id` int(11) NOT NULL,
  `ar` int(6) NOT NULL,
  `ertekesitettek_db` int(8) NOT NULL,
  `erv_kezdete` date NOT NULL,
  `tipus` varchar(20) NOT NULL,
  `kedvezmeny` tinyint(1) NOT NULL,
  `erv_vege` date DEFAULT NULL,
  `RDY_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `jegyek`
--

INSERT INTO `jegyek` (`Id`, `ar`, `ertekesitettek_db`, `erv_kezdete`, `tipus`, `kedvezmeny`, `erv_vege`, `RDY_id`) VALUES
(1, 3500, 200000, '2024-04-20', 'napijegy', 1, NULL, 1),
(2, 6500, 200000, '2024-04-20', 'bérlet', 1, '2024-05-25', 1),
(3, 4500, 500000, '2024-08-07', 'napijegy', 1, NULL, 2),
(4, 7000, 500000, '2024-08-07', 'bérlet', 1, '2024-08-12', 2),
(5, 2500, 100000, '2024-10-24', 'napijegy', 1, NULL, 3),
(6, 4500, 100000, '2024-10-24', 'bérlet', 1, '2024-10-27', 3),
(7, 3000, 250000, '2024-07-12', 'napijegy', 1, NULL, 4),
(8, 5500, 200000, '2024-07-12', 'bérlet', 1, '2024-07-17', 4),
(9, 2500, 200000, '2024-07-26', 'napijegy', 1, NULL, 5),
(10, 3500, 100000, '2024-07-26', 'bérlet', 1, '2024-07-28', 5),
(11, 2500, 250000, '2024-08-24', 'napijegy', 0, NULL, 6),
(12, 4000, 150000, '2024-08-24', 'bérlet', 1, '2024-08-28', 6),
(13, 4000, 300000, '2024-06-06', 'napijegy', 1, NULL, 7),
(14, 6500, 100000, '2024-06-06', 'bérlet', 1, '2024-06-08', 7);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kedvezmenyek`
--

CREATE TABLE `kedvezmenyek` (
  `RDY_Id` int(11) NOT NULL,
  `JGY_Id` int(11) NOT NULL,
  `KTS_Id` int(11) NOT NULL,
  `kezdo_d` date NOT NULL,
  `veg_d` date DEFAULT NULL,
  `mertek` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kedvezmeny_tipusok`
--

CREATE TABLE `kedvezmeny_tipusok` (
  `Id` int(11) NOT NULL,
  `nev` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `kedvezmeny_tipusok`
--

INSERT INTO `kedvezmeny_tipusok` (`Id`, `nev`) VALUES
(1, 'VIP'),
(2, 'Early Bird'),
(3, 'Diák'),
(4, 'Gyerek'),
(5, 'Nyugdíjas');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kosarak`
--

CREATE TABLE `kosarak` (
  `VSO_Id` int(11) NOT NULL,
  `JGY_Id` int(11) NOT NULL,
  `db` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rendezvenyek`
--

CREATE TABLE `rendezvenyek` (
  `Id` int(11) NOT NULL,
  `nev` varchar(80) NOT NULL,
  `hely_cim` varchar(50) NOT NULL,
  `eloadok` varchar(250) NOT NULL,
  `kezdo_d` date NOT NULL,
  `veg_d` date NOT NULL,
  `max_letszam` int(8) DEFAULT NULL,
  `kep` varchar(180) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `rendezvenyek`
--

INSERT INTO `rendezvenyek` (`Id`, `nev`, `hely_cim`, `eloadok`, `kezdo_d`, `veg_d`, `max_letszam`, `kep`) VALUES
(1, 'SEASON OPENING FESTIVAL ✘ Viviera Beach', 'Keszthely, Csík Ferenc sétány 3.', 'KKevin, Purebeat, Jauri, Ramatic, Kempy', '2024-04-20', '2024-04-25', 200000, 'https://viviera.hu/wp-content/uploads/2024/02/04.20.-FB-EVENT-COVER-05.png'),
(2, 'Sziget Fesztivál', 'Budapest, Óbudai-sziget', 'Stormzy, Big Thief, Aurora, Argy, Meute', '2024-08-07', '2024-08-12', 450000, 'https://cdn2.szigetfestival.com/c2ou3cy/f851/hu/media/2022/08/og2022.png'),
(3, 'Csabai Kolbászfesztivál', 'Békéscsaba, CsabaPark', 'Manuel, Fitdance Center SE, Metzker Viktória', '2024-10-24', '2024-10-27', 120000, 'https://gotravel.hu/assets/public/images/programs/original/csabai-kolbaszfesztival-2024.jpg'),
(4, 'Visegrádi Palotajátékok', 'Visegrád Dudás Pavilon', 'Jelmezes dolgozók', '2024-07-12', '2024-07-14', 200000, 'https://www.visegrad.hu/sites/default/files/styles/node_full_image/public/2023-05/IMG_3584.jpg?itok=26iRl6eh'),
(5, 'Végvári Napok', 'Gyula, Gyulai-vár', 'Hungarica Régizene Együttes, Szelindek', '2024-07-26', '2024-07-28', 150000, 'https://www.gyulaihirlap.hu/download.fcgi?itemid=566893&pid=1&type=0'),
(6, 'Savaria Karnevál', 'Szombathely', 'Jellmezes felvonulók', '2024-08-24', '2024-08-28', 400000, 'https://ugytudjuk.hu/storage/userfiles/a/1/a16f6ae76c9a8c024cdb8a9b079feade.jpg'),
(7, 'Deja Vu Fesztivál', 'Szeged, Partfürdő', 'O-Zone, atc, Rednex, TNT', '2024-06-06', '2024-06-08', 250000, 'https://dunapartprogram.hu/wp-content/uploads/Deja-Vu-fesztival-2023.jpg'),
(8, 'VeszprémFest', 'Veszprém, História Kert', 'Milky Chance, Paloma Faith, Serrano, Toto', '2024-06-16', '2024-06-20', 500000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUM7qxhvBopDUuopZAQG_05wekgGPcGOfYioKz82M4qA&s');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `vasarlok`
--

CREATE TABLE `vasarlok` (
  `Id` int(11) NOT NULL,
  `v_nev` varchar(20) NOT NULL,
  `k_nev` varchar(20) NOT NULL,
  `e_mail` varchar(30) NOT NULL,
  `felh_nev` varchar(20) NOT NULL,
  `jelszo` varchar(18) NOT NULL,
  `allapot` varchar(12) NOT NULL,
  `utolso_bel` date NOT NULL,
  `szul_datum` date DEFAULT NULL,
  `telefonszam` varchar(18) DEFAULT NULL,
  `adoszam` varchar(35) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `vasarlok`
--

INSERT INTO `vasarlok` (`Id`, `v_nev`, `k_nev`, `e_mail`, `felh_nev`, `jelszo`, `allapot`, `utolso_bel`, `szul_datum`, `telefonszam`, `adoszam`) VALUES
(1, 'Boros', 'Mihály', 'borosm22@gmail.hu', 'BorosM5421', '20031230', 'aktív', '2024-12-15', '2023-10-09', '+36704356879', NULL),
(2, 'Skywalker', 'aktív', 'lucasfilmofficial@gmail.hu', 'LucasfilmOff', 'FilmFeszt1977', 'aktív', '2023-11-29', NULL, '+10607556881', '26163190243'),
(3, 'Vakond', 'Szaniszló', 'vszaniszlo23@gmail.com', 'Szaniszlo23', 'Vakond_rend_Sz', 'törölt', '2024-01-05', '2006-06-11', '+36308565449', NULL),
(4, 'Surfshark', 'Kft', 'surfshark@gmail.com', 'Surfshark', 'Security_167', 'aktív', '2024-05-08', NULL, '+36706789141', '16034577'),
(5, 'Szabó', 'Marcell', 'szabo2004@gmail.com', 'Kratos25', 'SzaboM2004', 'inaktív', '2024-02-02', '2007-10-08', '+36707654814', NULL);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `ertekesitesek`
--
ALTER TABLE `ertekesitesek`
  ADD PRIMARY KEY (`VSO_Id`,`JGY_Id`,`datum`),
  ADD KEY `JGY_Id` (`JGY_Id`);

--
-- A tábla indexei `jegyek`
--
ALTER TABLE `jegyek`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `RDY_id` (`RDY_id`);

--
-- A tábla indexei `kedvezmenyek`
--
ALTER TABLE `kedvezmenyek`
  ADD PRIMARY KEY (`RDY_Id`,`JGY_Id`,`KTS_Id`),
  ADD KEY `JGY_Id` (`JGY_Id`),
  ADD KEY `KTS_Id` (`KTS_Id`);

--
-- A tábla indexei `kedvezmeny_tipusok`
--
ALTER TABLE `kedvezmeny_tipusok`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `kosarak`
--
ALTER TABLE `kosarak`
  ADD PRIMARY KEY (`VSO_Id`,`JGY_Id`),
  ADD KEY `JGY_Id` (`JGY_Id`);

--
-- A tábla indexei `rendezvenyek`
--
ALTER TABLE `rendezvenyek`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `vasarlok`
--
ALTER TABLE `vasarlok`
  ADD PRIMARY KEY (`Id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `jegyek`
--
ALTER TABLE `jegyek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `kedvezmeny_tipusok`
--
ALTER TABLE `kedvezmeny_tipusok`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `rendezvenyek`
--
ALTER TABLE `rendezvenyek`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `vasarlok`
--
ALTER TABLE `vasarlok`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `ertekesitesek`
--
ALTER TABLE `ertekesitesek`
  ADD CONSTRAINT `ertekesitesek_ibfk_1` FOREIGN KEY (`VSO_Id`) REFERENCES `vasarlok` (`Id`),
  ADD CONSTRAINT `ertekesitesek_ibfk_2` FOREIGN KEY (`JGY_Id`) REFERENCES `jegyek` (`Id`);

--
-- Megkötések a táblához `jegyek`
--
ALTER TABLE `jegyek`
  ADD CONSTRAINT `jegyek_ibfk_1` FOREIGN KEY (`RDY_id`) REFERENCES `rendezvenyek` (`Id`);

--
-- Megkötések a táblához `kedvezmenyek`
--
ALTER TABLE `kedvezmenyek`
  ADD CONSTRAINT `kedvezmenyek_ibfk_1` FOREIGN KEY (`RDY_Id`) REFERENCES `rendezvenyek` (`Id`),
  ADD CONSTRAINT `kedvezmenyek_ibfk_2` FOREIGN KEY (`JGY_Id`) REFERENCES `jegyek` (`Id`),
  ADD CONSTRAINT `kedvezmenyek_ibfk_3` FOREIGN KEY (`KTS_Id`) REFERENCES `kedvezmeny_tipusok` (`Id`);

--
-- Megkötések a táblához `kosarak`
--
ALTER TABLE `kosarak`
  ADD CONSTRAINT `kosarak_ibfk_1` FOREIGN KEY (`VSO_Id`) REFERENCES `vasarlok` (`Id`),
  ADD CONSTRAINT `kosarak_ibfk_2` FOREIGN KEY (`JGY_Id`) REFERENCES `jegyek` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
