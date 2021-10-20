import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  SectionList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import WordItem from "../../components/WordItem";
import Timer from "../../components/Timer";
import SmallGridTile from "../../components/SmallGridTile";
import NewTimer from "../../components/NewTimer";

const BreakScreen = (prop) => {
  const dataFromServer = { prop };
  const gridData = dataFromServer.prop.prop;
  const points = gridData.points;
  const a = gridData.a;
  const b = gridData.b;
  const c = gridData.c;
  const d = gridData.d;
  const e = gridData.e;
  const f = gridData.f;
  const g = gridData.g;
  const h = gridData.h;
  const x = gridData.x;
  const j = gridData.j;
  const k = gridData.k;
  const l = gridData.l;
  const m = gridData.m;
  const n = gridData.n;
  const o = gridData.o;
  const p = gridData.p;
  const q = "Å";
  let username = gridData.username;
  const userImgAdress = gridData.userImgAdress;
  const totalPoints = gridData.totalPoints;
  const numOfPlayerAnswers = gridData.numOfPlayerAnswers;
  const numOfServerAnswers = gridData.numOfServerAnswers;
  let playersAnswers = gridData.playersAnswers;
  const serverAnswers = gridData.serverAnswers;
  const combo = gridData.combo;
  const breakTime = gridData.breakTime;

  const navigation = useNavigation();

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

  const [isEndOfBreake, setIsEndOfBreak] = useState(false);
  const [timeForCountdown, setTimeForCountdown] = useState(0);
  const [trigger, setTrigger] = useState(true);
  const [listDelay, setListDelay] = useState(true);
  const [hideList, setHideList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showScoresButton, setShowScoresButton] = useState(false);
  const [userID, setUserID] = useState(null);
  const [counter, setCounter] = useState(0);

  let uid = null;
  let count = 0;
  let position = 0;
  const url = "https://acidic-heavy-caterpillar.glitch.me/resultsMobile";

  if (playersAnswers.length === 0 || playersAnswers.length === undefined) {
    playersAnswers = [{ id: 1, word: "ingen ord" }];
  }

  const longestAnswerObj = playersAnswers.reduce((a, b) =>
    a.word.length > b.word.length ? a : b
  );
  const longestAnswer = longestAnswerObj.word;

  if (auth.currentUser && userID === null) {
    console.log("here is auth", auth.currentUser);
    setUserID(auth.currentUser.uid);
  } else if (userID === null) {
    setUserID(Math.random());
  }

  const data = {
    username,
    points,
    position,
    userID,
    longestAnswer,
    userImgAdress,
  };

  const notPosting = () => {
    console.log("Im not posting this because there is no answers");
  };

  const displayLongestWord = (num) => {
    if (num >= combo.length) {
      clearInterval(interval);
      return;
    }
    if (combo[num] === "a") {
      setColorA(true);
      count++;
      return;
    } else if (combo[num] === "b") {
      setColorB(true);
      count++;
      return;
    } else if (combo[num] === "c") {
      setColorC(true);
      count++;
      return;
    } else if (combo[num] === "d") {
      setColorD(true);
      count++;
      return;
    } else if (combo[num] === "e") {
      setColorE(true);
      count++;
      return;
    } else if (combo[num] === "f") {
      setColorF(true);
      count++;
      return;
    } else if (combo[num] === "g") {
      setColorG(true);
      count++;
      return;
    } else if (combo[num] === "h") {
      setColorH(true);
      count++;
      return;
    } else if (combo[num] === "i") {
      setColorI(true);
      count++;
      return;
    } else if (combo[num] === "j") {
      setColorJ(true);
      count++;
      return;
    } else if (combo[num] === "k") {
      setColorK(true);
      count++;
      return;
    } else if (combo[num] === "l") {
      setColorL(true);
      count++;
      return;
    } else if (combo[num] === "m") {
      setColorM(true);
      count++;
      return;
    } else if (combo[num] === "n") {
      setColorN(true);
      count++;
      return;
    } else if (combo[num] === "o") {
      setColorO(true);
      count++;
      return;
    } else if (combo[num] === "p") {
      setColorP(true);
      count++;
      return;
    }
  };

  useEffect(() => {
    const postingResult = async () => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const parsedResponse = await response.json();
    };
    data.longestAnswer !== "ingen ord" ? postingResult() : notPosting();
    return () => {
      postingResult;
    };
  }, []);

  useEffect(() => {
    const gettingTime = async () => {
      const responseClock = await fetch(
        "https://acidic-heavy-caterpillar.glitch.me/clock"
      );

      setTimeForCountdown(await responseClock.json());
      setIsLoading(true);
    };
    gettingTime();
    return () => {
      gettingTime;
    };
  }, []);

  useEffect(() => {
    const timeoutTimer = setTimeout(() => {
      setShowTimer(true);
    }, 50);
    return () => {
      clearTimeout(timeoutTimer);
    };
  }, []);

  useEffect(() => {
    const timeoutScoresButton = setTimeout(() => {
      setShowScoresButton(true);
    }, 3500);
    return () => {
      clearTimeout(timeoutScoresButton);
    };
  }, []);

  useEffect(() => {
    let listDealeyTimeout = setTimeout(() => {
      setListDelay(false);
    }, 500);
    return () => {
      listDealeyTimeout;
    };
  }, []);

  useEffect(() => {
    showTimer && isLoading && timeForCountdown < 8 ? setHideList(true) : null;
    console.log("time", timeForCountdown);
  }, [isLoading]);

  let interval = !hideList
    ? setInterval(() => {
        displayLongestWord(count);
      }, 500)
    : null;

  const dataForFlatList = gridData.serverAnswers.map((item) => {
    return { word: item, id: Math.random().toString() };
  });

  const answer3 = serverAnswers.filter((item) => {
    return item.length === 3;
  });
  const answer4 = serverAnswers.filter((item) => {
    return item.length === 4;
  });
  const answer5 = serverAnswers.filter((item) => {
    return item.length === 5;
  });
  const answer6 = serverAnswers.filter((item) => {
    return item.length === 6;
  });
  const answer7 = serverAnswers.filter((item) => {
    return item.length === 7;
  });
  const answer8 = serverAnswers.filter((item) => {
    return item.length === 8;
  });
  const answer9 = serverAnswers.filter((item) => {
    return item.length === 9;
  });
  const answer10 = serverAnswers.filter((item) => {
    return item.length === 10;
  });
  const answer11 = serverAnswers.filter((item) => {
    return item.length === 11;
  });
  const answer12 = serverAnswers.filter((item) => {
    return item.length === 12;
  });
  const answer13 = serverAnswers.filter((item) => {
    return item.length === 13;
  });

  const dataForSectionList = [
    {
      title: "13 bokstav",
      data: answer13,
    },
    {
      title: "12 bokstav",
      data: answer12,
    },
    {
      title: "11 bokstav",
      data: answer11,
    },
    {
      title: "10 bokstav",
      data: answer10,
    },
    {
      title: "9 bokstav",
      data: answer9,
    },
    {
      title: "8 bokstav",
      data: answer8,
    },
    {
      title: "7 bokstav",
      data: answer7,
    },
    {
      title: "6 bokstav",
      data: answer6,
    },
    {
      title: "5 bokstav",
      data: answer5,
    },
    {
      title: "4 bokstav",
      data: answer4,
    },
    {
      title: "3 bokstav",
      data: answer3,
    },
  ];

  const isEmpty = (obj) => {
    if (obj.data.length > 0) {
      return obj;
    }
  };

  const dataForSectionListFinal = dataForSectionList.filter(
    (obj) => obj.data.length > 0
  );

  return (
    <View style={styles.container}>
      <View style={styles.serverAnswers}>
        {hideList ? (
          <View style={styles.replaceSection}>
            <Text style={styles.replaceSectionText}>
              Neste spill kommer snart
            </Text>
          </View>
        ) : listDelay ? (
          <Text></Text>
        ) : (
          <SectionList
            sections={dataForSectionListFinal}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <WordItem title={item} playersAnswers={playersAnswers} />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        )}
      </View>
      <View style={styles.rightSideCont}>
        <View style={styles.upperContainer}>
          <View style={styles.timerContainer}>
            {showTimer && isLoading ? (
              <NewTimer
                clockCounter={timeForCountdown}
                runDown={(boolean) => setIsEndOfBreak(boolean)}
                breakTimer={true}
              />
            ) : (
              <View style={styles.timerContainer2}></View>
            )}
          </View>
          <Text style={styles.pointsText}>
            <Text style={styles.pointsColor}>{points}</Text>
            <Text>/ {hideList ? "0" : totalPoints} poeng</Text>
          </Text>
          <Text style={styles.pointsText}>
            <Text style={styles.pointsColor}>{numOfPlayerAnswers}</Text>
            <Text>/ {hideList ? "0" : numOfServerAnswers} ord</Text>
          </Text>
        </View>

        <View style={styles.middleContainer}>
          {showScoresButton ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Scores", {
                  params: userID,
                  params2: isEndOfBreake || false,
                })
              }
            >
              <View style={styles.otherButtons}>
                <Text style={styles.buttonText}>RESULTAT</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}

          {isEndOfBreake ? (
            <TouchableOpacity onPress={() => navigation.replace("Play")}>
              <View style={styles.otherButtons}>
                <Text style={styles.buttonText}>SPILL IGJEN</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.otherButtonsClear}></View>
          )}
        </View>
        {hideList ? (
          <View style={styles.samllGridCont}>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={q} />
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.samllGridCont}>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={a} marker={colorA} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={b} marker={colorB} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={c} marker={colorC} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={d} marker={colorD} />
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={e} marker={colorE} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={f} marker={colorF} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={g} marker={colorG} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={h} marker={colorH} />
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={x} marker={colorI} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={j} marker={colorJ} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={k} marker={colorK} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={l} marker={colorL} />
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={m} marker={colorM} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={n} marker={colorN} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={o} marker={colorO} />
              </View>
              <View style={styles.tileContainer}>
                <SmallGridTile letter={p} marker={colorP} />
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default BreakScreen;
