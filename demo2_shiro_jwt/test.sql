/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50561
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50561
File Encoding         : 65001

Date: 2020-02-16 14:20:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(25) NOT NULL,
  `password` char(25) NOT NULL,
  `role` char(25) NOT NULL DEFAULT 'user',
  `permission` char(50) NOT NULL DEFAULT 'view',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456', 'admin', 'view,edit');
