CREATE TABLE `student`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `entrane_year` INT NOT NULL,
    `major` VARCHAR(20) NOT NULL,
    `indivisual_number` INT NOT NULL,
    `phone_number` VARCHAR(11) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `accumulated_credits` INT NOT NULL DEFAULT 0,
    `average_credit` DOUBLE NOT NULL DEFAULT 0.0,
    `attending` TINYINT(1) NOT NULL DEFAULT 1,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;