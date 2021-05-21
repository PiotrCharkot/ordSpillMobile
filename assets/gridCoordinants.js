import React from "react";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const margin = 5;

export default {
  xa: screenHeight - margin - screenWidth + screenWidth / 12,
  xb: screenHeight - margin - screenWidth + (screenWidth / 12) * 2,
  xc: screenHeight - margin - screenWidth + (screenWidth / 12) * 3,
  xd: screenHeight - margin - screenWidth + (screenWidth / 12) * 4,
  xe: screenHeight - margin - screenWidth + (screenWidth / 12) * 5,
  xf: screenHeight - margin - screenWidth + (screenWidth / 12) * 6,
  xg: screenHeight - margin - screenWidth + (screenWidth / 12) * 7,
  xh: screenHeight - margin - screenWidth + (screenWidth / 12) * 8,
  xi: screenHeight - margin - screenWidth + (screenWidth / 12) * 9,
  xj: screenHeight - margin - screenWidth + (screenWidth / 12) * 10,
  xk: screenHeight - margin - screenWidth + (screenWidth / 12) * 12,
  xl: screenWidth / 12,
  xm: (screenWidth / 12) * 2,
  xn: (screenWidth / 12) * 3,
  xo: (screenWidth / 12) * 4,
  xp: (screenWidth / 12) * 5,
  xq: (screenWidth / 12) * 6,
  xr: (screenWidth / 12) * 7,
  xs: (screenWidth / 12) * 8,
  xt: (screenWidth / 12) * 9,
  xu: (screenWidth / 12) * 10,
  xv: (screenWidth / 12) * 12,
};
