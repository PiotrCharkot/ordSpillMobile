import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  PanResponder,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { Audio } from "expo-av";
import * as firebase from "firebase";
import styles from "./styles";
import Timer from "../../components/Timer";
import NewTimer from "../../components/NewTimer";
import GridTile from "../../components/GridTile";
import PlayerWord from "../../components/PlayerWord";
import BreakScreen from "../BreakScreen";
import LoadingScreen from "../LoadingScreen";
import coordinants from "../../../assets/gridCoordinants";

// set up my profile and rankings, deploy

console.log("lina A", coordinants.xa);

const PlayScreen = ({ navigation }) => {
  //const declarations
  const urlLink = "https://acidic-heavy-caterpillar.glitch.me/grid";
  const urlClock = "https://acidic-heavy-caterpillar.glitch.me/clock";
  const breakTime = 25;
  const scoresTime = 3;
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [username, setUsername] = useState("Anonymus");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const [f, setF] = useState("");
  const [g, setG] = useState("");
  const [h, setH] = useState("");
  const [x, setX] = useState("");
  const [j, setJ] = useState("");
  const [k, setK] = useState("");
  const [l, setL] = useState("");
  const [m, setM] = useState("");
  const [n, setN] = useState("");
  const [o, setO] = useState("");
  const [p, setP] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [playersAnswers, setPlayersAnswers] = useState([]);
  const [serverAnswers, setServerAnswers] = useState([]);
  const [points, setPoints] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [userImgAdress, setUserImgAdress] = useState(
    "https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
  );
  const [clockCounter, setClockCounter] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [combo, setCombo] = useState([]);
  const [reload, setReload] = useState(true);
  const [isBreak, setIsBreak] = useState(false);
  const [isScoresTime, setIsScoreTime] = useState(false);
  const [sound, setSound] = useState();
  const [currentArray, setCurrentArray] = useState({
    AX: 0,
    BX: 0,
    CX: 0,
    DX: 0,
    EX: 0,
    FX: 0,
    GX: 0,
    HX: 0,
    IX: 0,
    JX: 0,
    KX: 0,
    LX: 0,
    MX: 0,
    NX: 0,
    OX: 0,
    PX: 0,
  });

  const [colorA, setColorA] = useState(false);
  const [colorB, setColorB] = useState(false);
  const [colorC, setColorC] = useState(false);
  const [colorD, setColorD] = useState(false);
  const [colorE, setColorE] = useState(false);
  const [colorF, setColorF] = useState(false);
  const [colorG, setColorG] = useState(false);
  const [colorH, setColorH] = useState(false);
  const [colorI, setColorI] = useState(false);
  const [colorJ, setColorJ] = useState(false);
  const [colorK, setColorK] = useState(false);
  const [colorL, setColorL] = useState(false);
  const [colorM, setColorM] = useState(false);
  const [colorN, setColorN] = useState(false);
  const [colorO, setColorO] = useState(false);
  const [colorP, setColorP] = useState(false);
  const [runCheck, setRunCheck] = useState(false);

  const [switcherA, setSwitcherA] = useState(true);
  const [switcherB, setSwitcherB] = useState(true);
  const [switcherC, setSwitcherC] = useState(true);
  const [switcherD, setSwitcherD] = useState(true);
  const [switcherE, setSwitcherE] = useState(true);
  const [switcherF, setSwitcherF] = useState(true);
  const [switcherG, setSwitcherG] = useState(true);
  const [switcherH, setSwitcherH] = useState(true);
  const [switcherI, setSwitcherI] = useState(true);
  const [switcherJ, setSwitcherJ] = useState(true);
  const [switcherK, setSwitcherK] = useState(true);
  const [switcherL, setSwitcherL] = useState(true);
  const [switcherM, setSwitcherM] = useState(true);
  const [switcherN, setSwitcherN] = useState(true);
  const [switcherO, setSwitcherO] = useState(true);
  const [switcherP, setSwitcherP] = useState(true);
  const [regularSwitcher, setRegularSwitcher] = useState(0);

  const [flushGreen, setFlushGreen] = useState(false);
  const [flushOrange, setFlushOrange] = useState(false);
  const [flushRed, setFlushRed] = useState(false);
  const [word, setWord] = useState("");
  const [clockUpdate, setClockUpdate] = useState(false);
  const [ticToc, setTicToc] = useState(true);

  //function reswitching layout trigger
  const switchOnTrigger = (key, arr) => {
    if (arr[key] === arr.AX) {
      setSwitcherA(true);
    } else if (arr[key] === arr.BX) {
      setSwitcherB(true);
    } else if (arr[key] === arr.CX) {
      setSwitcherC(true);
    } else if (arr[key] === arr.DX) {
      setSwitcherD(true);
    } else if (arr[key] === arr.EX) {
      setSwitcherE(true);
    } else if (arr[key] === arr.FX) {
      setSwitcherF(true);
    } else if (arr[key] === arr.GX) {
      setSwitcherG(true);
    } else if (arr[key] === arr.HX) {
      setSwitcherH(true);
    } else if (arr[key] === arr.IX) {
      setSwitcherI(true);
    } else if (arr[key] === arr.JX) {
      setSwitcherJ(true);
    } else if (arr[key] === arr.KX) {
      setSwitcherK(true);
    } else if (arr[key] === arr.LX) {
      setSwitcherL(true);
    } else if (arr[key] === arr.MX) {
      setSwitcherM(true);
    } else if (arr[key] === arr.NX) {
      setSwitcherN(true);
    } else if (arr[key] === arr.OX) {
      setSwitcherO(true);
    } else if (arr[key] === arr.PX) {
      setSwitcherP(true);
    }
  };

  //function that turns of color when moving back in the grid
  const switchOffColor = (key, arr) => {
    if (arr[key] === arr.AX) {
      setColorA(false);
    } else if (arr[key] === arr.BX) {
      setColorB(false);
    } else if (arr[key] === arr.CX) {
      setColorC(false);
    } else if (arr[key] === arr.DX) {
      setColorD(false);
    } else if (arr[key] === arr.EX) {
      setColorE(false);
    } else if (arr[key] === arr.FX) {
      setColorF(false);
    } else if (arr[key] === arr.GX) {
      setColorG(false);
    } else if (arr[key] === arr.HX) {
      setColorH(false);
    } else if (arr[key] === arr.IX) {
      setColorI(false);
    } else if (arr[key] === arr.JX) {
      setColorJ(false);
    } else if (arr[key] === arr.KX) {
      setColorK(false);
    } else if (arr[key] === arr.LX) {
      setColorL(false);
    } else if (arr[key] === arr.MX) {
      setColorM(false);
    } else if (arr[key] === arr.NX) {
      setColorN(false);
    } else if (arr[key] === arr.OX) {
      setColorO(false);
    } else if (arr[key] === arr.PX) {
      setColorP(false);
    }
  };

  //function finding if neigbour is last checked square
  const findIfNeighbourIsMax = (arr, maxValue) => {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] === maxValue) {
        return true;
      }
    }
    return false;
  };

  //function that finds heighest key in array
  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  //function replacing to homepage
  const goHome = () => {
    navigation.replace("Home");
  };

  // function chcecking answers
  const checkWordFunc = () => {
    const preCheckedWord = playersAnswers.find(
      (answer) => answer.word === currentAnswer
    );

    const checkedWord = serverAnswers.find(
      (answer) => answer === currentAnswer
    );

    if (preCheckedWord && checkedWord) {
      setFlushOrange(true);
      setTimeout(() => {
        setFlushOrange(false);
      }, 200);
    } else if (checkedWord) {
      setPlayersAnswers([
        { word: checkedWord, id: Date.now().toString() },
        ...playersAnswers,
      ]);
      const additonalPoints = Math.pow(checkedWord.length - 2, 2);
      setPoints(points + additonalPoints);

      playSound();
      setFlushGreen(true);
      setTimeout(() => {
        setFlushGreen(false);
      }, 200);
    } else {
      setFlushRed(true);
      setTimeout(() => {
        setFlushRed(false);
      }, 200);
      setClockUpdate(true);
      setTimeout(() => {
        setClockUpdate(false);
      }, 1);
    }

    setCurrentAnswer("");

    setRunCheck(false);
  };

  //function playing sound when word is found
  const playSound = async () => {
    console.log("im trying");
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/gulp.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  };

  if (isBreak) {
    console.log("time is up");
  }
  if (runCheck) {
    checkWordFunc();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(auth.currentUser.providerData[0].displayName);
        const uid = auth.currentUser.uid;
        const setAdress = async () => {
          var ref = firebase
            .storage()
            .ref()
            .child("images/" + uid);

          setUserImgAdress(await ref.getDownloadURL());
        };

        setAdress()
          .then(() => {
            console.log("Promise resolved");
          })
          .catch(() => {
            console.log("there is no picture for that");
          });

        console.log("loggggged", auth.currentUser.providerData[0].displayName);
      } else {
        console.log("not loggggggggggggggggggged");
      }
    });
    return subscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: { backgroundColor: "#B2DB34", shadowColor: "transparent" },
      headerTintColor: "rgb(11,156,49)",
      headerBackTitleVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={goHome}>
          <Image
            style={styles.logoImg}
            source={require("../../../assets/LogoIcon.png")}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  // fetch from server
  useEffect(() => {
    const fetchData = async () => {
      setIsBreak(false);
      setPlayersAnswers([]);
      const result = await fetch(urlLink);
      const res = await result.json();
      setClockCounter(res.clockCounter);
      setA(res.A1);
      setB(res.B1);
      setC(res.C1);
      setD(res.D1);
      setE(res.E1);
      setF(res.F1);
      setG(res.G1);
      setH(res.H1);
      setX(res.I1);
      setJ(res.J1);
      setK(res.K1);
      setL(res.L1);
      setM(res.M1);
      setN(res.N1);
      setO(res.O1);
      setP(res.P1);
      setServerAnswers([
        ...res.answer3letters,
        ...res.answer4letters,
        ...res.answer5letters,
        ...res.answer6letters,
        ...res.answer7letters,
        ...res.answer8letters,
        ...res.answer9letters,
        ...res.answer10letters,
        ...res.answer11letters,
        ...res.answer12letters,
        ...res.answer13letters,
      ]);
      setCombo(res.randomCombo);
      setTotalPoints(
        res.answer3letters.length +
          res.answer4letters.length * 4 +
          res.answer5letters.length * 9 +
          res.answer6letters.length * 16 +
          res.answer7letters.length * 25 +
          res.answer8letters.length * 36 +
          res.answer9letters.length * 49 +
          res.answer10letters.length * 64 +
          res.answer11letters.length * 81 +
          res.answer12letters.length * 100 +
          res.answer13letters.length * 121
      );
      if (res.clockCounter - breakTime <= 0) {
        setIsBreak(true);
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      fetchData;
    };
  }, [reload]);

  // effects for grid tiles
  useLayoutEffect(() => {
    switcherA
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + a);
  }, [switcherA]);
  useLayoutEffect(() => {
    switcherB
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + b);
  }, [switcherB]);
  useLayoutEffect(() => {
    switcherC
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + c);
  }, [switcherC]);
  useLayoutEffect(() => {
    switcherD
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + d);
  }, [switcherD]);
  useLayoutEffect(() => {
    switcherE
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + e);
  }, [switcherE]);
  useLayoutEffect(() => {
    switcherF
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + f);
  }, [switcherF]);
  useLayoutEffect(() => {
    switcherG
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + g);
  }, [switcherG]);
  useLayoutEffect(() => {
    switcherH
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + h);
  }, [switcherH]);
  useLayoutEffect(() => {
    switcherI
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + x);
  }, [switcherI]);
  useLayoutEffect(() => {
    switcherJ
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + j);
  }, [switcherJ]);
  useLayoutEffect(() => {
    switcherK
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + k);
  }, [switcherK]);
  useLayoutEffect(() => {
    switcherL
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + l);
  }, [switcherL]);
  useLayoutEffect(() => {
    switcherM
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + m);
  }, [switcherM]);
  useLayoutEffect(() => {
    switcherN
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + n);
  }, [switcherN]);
  useLayoutEffect(() => {
    switcherO
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + o);
  }, [switcherO]);
  useLayoutEffect(() => {
    switcherP
      ? setCurrentAnswer(currentAnswer)
      : setCurrentAnswer(currentAnswer + p);
  }, [switcherP]);

  useLayoutEffect(() => {
    setCurrentAnswer(currentAnswer.slice(0, -1));
  }, [regularSwitcher]);

  //panResponder
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {},
      onPanResponderMove: (event, gestureState) => {
        const aArray = [currentArray.BX, currentArray.EX, currentArray.FX];
        const bArray = [
          currentArray.AX,
          currentArray.CX,
          currentArray.EX,
          currentArray.FX,
          currentArray.GX,
        ];
        const cArray = [
          currentArray.BX,
          currentArray.DX,
          currentArray.FX,
          currentArray.GX,
          currentArray.HX,
        ];
        const dArray = [currentArray.CX, currentArray.GX, currentArray.HX];
        const eArray = [
          currentArray.AX,
          currentArray.BX,
          currentArray.FX,
          currentArray.IX,
          currentArray.JX,
        ];
        const fArray = [
          currentArray.AX,
          currentArray.BX,
          currentArray.CX,
          currentArray.EX,
          currentArray.GX,
          currentArray.IX,
          currentArray.JX,
          currentArray.KX,
        ];
        const gArray = [
          currentArray.BX,
          currentArray.CX,
          currentArray.DX,
          currentArray.FX,
          currentArray.HX,
          currentArray.JX,
          currentArray.KX,
          currentArray.LX,
        ];
        const hArray = [
          currentArray.CX,
          currentArray.DX,
          currentArray.GX,
          currentArray.KX,
          currentArray.LX,
        ];
        const iArray = [
          currentArray.EX,
          currentArray.FX,
          currentArray.JX,
          currentArray.MX,
          currentArray.NX,
        ];
        const jArray = [
          currentArray.EX,
          currentArray.FX,
          currentArray.GX,
          currentArray.IX,
          currentArray.KX,
          currentArray.MX,
          currentArray.NX,
          currentArray.OX,
        ];
        const kArray = [
          currentArray.FX,
          currentArray.GX,
          currentArray.HX,
          currentArray.JX,
          currentArray.LX,
          currentArray.NX,
          currentArray.OX,
          currentArray.PX,
        ];
        const lArray = [
          currentArray.GX,
          currentArray.HX,
          currentArray.KX,
          currentArray.OX,
          currentArray.PX,
        ];
        const mArray = [currentArray.IX, currentArray.JX, currentArray.NX];
        const nArray = [
          currentArray.IX,
          currentArray.JX,
          currentArray.KX,
          currentArray.MX,
          currentArray.OX,
        ];
        const oArray = [
          currentArray.JX,
          currentArray.KX,
          currentArray.LX,
          currentArray.NX,
          currentArray.PX,
        ];
        const pArray = [currentArray.KX, currentArray.LX, currentArray.OX];
        //function triggering changes when tile is touched
        const touchedTile = (XX, optionsArr, setColor, setSwitcher) => {
          let arr = Object.values(currentArray);
          let max = Math.max(...arr);
          arr.splice(arr.indexOf(max), 1);
          let secondMax = Math.max(...arr);
          const heigestKey = getKeyByValue(currentArray, max);

          if (max === 0) {
            setCurrentArray((currentArray[XX] = 1));

            setColor(true);
            setSwitcher(false);
          } else if (max > 0) {
            if (currentArray[XX] === secondMax && secondMax !== 0) {
              setRegularSwitcher((regularSwitcher) => regularSwitcher + 1);
              switchOnTrigger(heigestKey, currentArray);
              switchOffColor(heigestKey, currentArray);
              for (const item in currentArray) {
                if (item === heigestKey) {
                  setCurrentArray((currentArray[item] = 0));
                }
              }
            } else if (
              currentArray[XX] === 0 &&
              findIfNeighbourIsMax(optionsArr, max)
            ) {
              setCurrentArray((currentArray[XX] = max + 1));
              setColor(true);
              setSwitcher(false);
            }
          }
        };

        if (
          (gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xn &&
            gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xb) ||
          (gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xc &&
            gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xm)
        ) {
          touchedTile("AX", aArray, setColorA, setSwitcherA);
        } else if (
          (gestureState.moveX > coordinants.xn &&
            gestureState.moveX < coordinants.xq &&
            gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xb) ||
          (gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xc &&
            gestureState.moveX > coordinants.xo &&
            gestureState.moveX < coordinants.xp)
        ) {
          touchedTile("BX", bArray, setColorB, setSwitcherB);
        } else if (
          (gestureState.moveX > coordinants.xq &&
            gestureState.moveX < coordinants.xt &&
            gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xb) ||
          (gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xc &&
            gestureState.moveX > coordinants.xr &&
            gestureState.moveX < coordinants.xs)
        ) {
          touchedTile("CX", cArray, setColorC, setSwitcherC);
        } else if (
          (gestureState.moveX > coordinants.xt &&
            gestureState.moveX < coordinants.xv &&
            gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xb) ||
          (gestureState.moveY > coordinants.xa &&
            gestureState.moveY < coordinants.xc &&
            gestureState.moveX > coordinants.xu &&
            gestureState.moveX < coordinants.xv)
        ) {
          touchedTile("DX", dArray, setColorD, setSwitcherD);
        } else if (
          (gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xn &&
            gestureState.moveY > coordinants.xd &&
            gestureState.moveY < coordinants.xe) ||
          (gestureState.moveY > coordinants.xc &&
            gestureState.moveY < coordinants.xf &&
            gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xm)
        ) {
          touchedTile("EX", eArray, setColorE, setSwitcherE);
        } else if (
          (gestureState.moveX > coordinants.xn &&
            gestureState.moveX < coordinants.xq &&
            gestureState.moveY > coordinants.xd &&
            gestureState.moveY < coordinants.xe) ||
          (gestureState.moveY > coordinants.xc &&
            gestureState.moveY < coordinants.xf &&
            gestureState.moveX > coordinants.xo &&
            gestureState.moveX < coordinants.xp)
        ) {
          touchedTile("FX", fArray, setColorF, setSwitcherF);
        } else if (
          (gestureState.moveX > coordinants.xq &&
            gestureState.moveX < coordinants.xt &&
            gestureState.moveY > coordinants.xd &&
            gestureState.moveY < coordinants.xe) ||
          (gestureState.moveY > coordinants.xc &&
            gestureState.moveY < coordinants.xf &&
            gestureState.moveX > coordinants.xr &&
            gestureState.moveX < coordinants.xs)
        ) {
          touchedTile("GX", gArray, setColorG, setSwitcherG);
        } else if (
          (gestureState.moveX > coordinants.xt &&
            gestureState.moveX < coordinants.xv &&
            gestureState.moveY > coordinants.xd &&
            gestureState.moveY < coordinants.xe) ||
          (gestureState.moveY > coordinants.xc &&
            gestureState.moveY < coordinants.xf &&
            gestureState.moveX > coordinants.xu &&
            gestureState.moveX < coordinants.xv)
        ) {
          touchedTile("HX", hArray, setColorH, setSwitcherH);
        } else if (
          (gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xn &&
            gestureState.moveY > coordinants.xg &&
            gestureState.moveY < coordinants.xh) ||
          (gestureState.moveY > coordinants.xf &&
            gestureState.moveY < coordinants.xi &&
            gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xm)
        ) {
          touchedTile("IX", iArray, setColorI, setSwitcherI);
        } else if (
          (gestureState.moveX > coordinants.xn &&
            gestureState.moveX < coordinants.xq &&
            gestureState.moveY > coordinants.xg &&
            gestureState.moveY < coordinants.xh) ||
          (gestureState.moveY > coordinants.xf &&
            gestureState.moveY < coordinants.xi &&
            gestureState.moveX > coordinants.xo &&
            gestureState.moveX < coordinants.xp)
        ) {
          touchedTile("JX", jArray, setColorJ, setSwitcherJ);
        } else if (
          (gestureState.moveX > coordinants.xq &&
            gestureState.moveX < coordinants.xt &&
            gestureState.moveY > coordinants.xg &&
            gestureState.moveY < coordinants.xh) ||
          (gestureState.moveY > coordinants.xf &&
            gestureState.moveY < coordinants.xi &&
            gestureState.moveX > coordinants.xr &&
            gestureState.moveX < coordinants.xs)
        ) {
          touchedTile("KX", kArray, setColorK, setSwitcherK);
        } else if (
          (gestureState.moveX > coordinants.xt &&
            gestureState.moveX < coordinants.xv &&
            gestureState.moveY > coordinants.xg &&
            gestureState.moveY < coordinants.xh) ||
          (gestureState.moveY > coordinants.xf &&
            gestureState.moveY < coordinants.xi &&
            gestureState.moveX > coordinants.xu &&
            gestureState.moveX < coordinants.xv)
        ) {
          touchedTile("LX", lArray, setColorL, setSwitcherL);
        } else if (
          (gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xn &&
            gestureState.moveY > coordinants.xj &&
            gestureState.moveY < coordinants.xk) ||
          (gestureState.moveY > coordinants.xi &&
            gestureState.moveY < coordinants.xk &&
            gestureState.moveX > coordinants.xl &&
            gestureState.moveX < coordinants.xm)
        ) {
          touchedTile("MX", mArray, setColorM, setSwitcherM);
        } else if (
          (gestureState.moveX > coordinants.xn &&
            gestureState.moveX < coordinants.xq &&
            gestureState.moveY > coordinants.xj &&
            gestureState.moveY < coordinants.xk) ||
          (gestureState.moveY > coordinants.xi &&
            gestureState.moveY < coordinants.xk &&
            gestureState.moveX > coordinants.xo &&
            gestureState.moveX < coordinants.xp)
        ) {
          touchedTile("NX", nArray, setColorN, setSwitcherN);
        } else if (
          (gestureState.moveX > coordinants.xq &&
            gestureState.moveX < coordinants.xt &&
            gestureState.moveY > coordinants.xj &&
            gestureState.moveY < coordinants.xk) ||
          (gestureState.moveY > coordinants.xi &&
            gestureState.moveY < coordinants.xk &&
            gestureState.moveX > coordinants.xr &&
            gestureState.moveX < coordinants.xs)
        ) {
          touchedTile("OX", oArray, setColorO, setSwitcherO);
        } else if (
          (gestureState.moveX > coordinants.xt &&
            gestureState.moveX < coordinants.xv &&
            gestureState.moveY > coordinants.xj &&
            gestureState.moveY < coordinants.xk) ||
          (gestureState.moveY > coordinants.xi &&
            gestureState.moveY < coordinants.xk &&
            gestureState.moveX > coordinants.xu &&
            gestureState.moveX < coordinants.xv)
        ) {
          touchedTile("PX", pArray, setColorP, setSwitcherP);
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        setCurrentArray((currentArray.AX = 0));
        setCurrentArray((currentArray.BX = 0));
        setCurrentArray((currentArray.CX = 0));
        setCurrentArray((currentArray.DX = 0));
        setCurrentArray((currentArray.EX = 0));
        setCurrentArray((currentArray.FX = 0));
        setCurrentArray((currentArray.GX = 0));
        setCurrentArray((currentArray.HX = 0));
        setCurrentArray((currentArray.IX = 0));
        setCurrentArray((currentArray.JX = 0));
        setCurrentArray((currentArray.KX = 0));
        setCurrentArray((currentArray.LX = 0));
        setCurrentArray((currentArray.MX = 0));
        setCurrentArray((currentArray.NX = 0));
        setCurrentArray((currentArray.OX = 0));
        setCurrentArray((currentArray.PX = 0));

        setColorA(false);
        setColorB(false);
        setColorC(false);
        setColorD(false);
        setColorE(false);
        setColorF(false);
        setColorG(false);
        setColorH(false);
        setColorI(false);
        setColorJ(false);
        setColorK(false);
        setColorL(false);
        setColorM(false);
        setColorN(false);
        setColorO(false);
        setColorP(false);

        setRunCheck(true);
        setSwitcherA(true);
        setSwitcherB(true);
        setSwitcherC(true);
        setSwitcherD(true);
        setSwitcherE(true);
        setSwitcherF(true);
        setSwitcherG(true);
        setSwitcherH(true);
        setSwitcherI(true);
        setSwitcherJ(true);
        setSwitcherK(true);
        setSwitcherL(true);
        setSwitcherM(true);
        setSwitcherN(true);
        setSwitcherO(true);
        setSwitcherP(true);
      },
    })
  ).current;

  const dataForBreak = {
    a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    x: x,
    j: j,
    k: k,
    l: l,
    m: m,
    n: n,
    o: o,
    p: p,
    serverAnswers: serverAnswers,
    playersAnswers: playersAnswers,
    username: username,
    userImgAdress: userImgAdress,
    combo: combo,
    points: points,
    totalPoints: totalPoints,
    numOfPlayerAnswers: playersAnswers.length,
    numOfServerAnswers: serverAnswers.length,
    breakTime: breakTime,
  };

  return isLoading ? (
    <LoadingScreen />
  ) : isBreak ? (
    <BreakScreen prop={dataForBreak} />
  ) : (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.wordsContainer}>
          <FlatList
            style={styles.flatList}
            data={playersAnswers}
            renderItem={({ item }) => {
              return <PlayerWord prop={item.word} />;
            }}
          />
        </View>
        <View style={styles.pointsContainer}>
          <View style={styles.timerContainer}>
            <NewTimer
              clockCounter={clockCounter}
              runDown={(boolean) => setIsBreak(boolean)}
            />
          </View>
          <Text style={styles.pointsText}>
            <Text style={styles.pointsColor}>{points}</Text>
            <Text>/ {totalPoints} poeng</Text>
          </Text>
          <Text style={styles.pointsText}>
            <Text style={styles.pointsColor}>{playersAnswers.length}</Text>
            <Text>/ {serverAnswers.length} ord</Text>
          </Text>
        </View>
      </View>
      <View style={styles.answerContainer}>
        <Text style={styles.answerText}>{currentAnswer}</Text>
      </View>
      <View style={styles.gridContainer}>
        <View
          style={flushGreen ? styles.green : styles.greenTransparetn}
        ></View>
        <View
          style={flushOrange ? styles.orange : styles.orangeTransparetn}
        ></View>
        <View style={flushRed ? styles.red : styles.redTransparetn}></View>
        <View style={styles.gridRow}>
          <View style={styles.tileContainer}>
            <GridTile letter={a} marker={colorA} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={b} marker={colorB} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={c} marker={colorC} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={d} marker={colorD} />
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.tileContainer}>
            <GridTile letter={e} marker={colorE} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={f} marker={colorF} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={g} marker={colorG} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={h} marker={colorH} />
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.tileContainer}>
            <GridTile letter={x} marker={colorI} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={j} marker={colorJ} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={k} marker={colorK} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={l} marker={colorL} />
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.tileContainer}>
            <GridTile letter={m} marker={colorM} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={n} marker={colorN} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={o} marker={colorO} />
          </View>
          <View style={styles.tileContainer}>
            <GridTile letter={p} marker={colorP} />
          </View>
        </View>
        <View
          {...panResponder.panHandlers}
          style={{
            height: screenWidth,
            width: screenWidth,
            backgroundColor: "rgba(0,0,0,0)",
            position: "absolute",
          }}
        ></View>
      </View>
    </View>
  );
};

//changes

export default PlayScreen;
