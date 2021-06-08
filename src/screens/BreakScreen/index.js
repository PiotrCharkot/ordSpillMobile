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
  let username = gridData.username;
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
  const [showTimer, setShowTimer] = useState(false);
  const [userID, setUserID] = useState(Math.random());
  const [counter, setCounter] = useState(0);

  let count = 0;
  const url = "https://acidic-heavy-caterpillar.glitch.me/resultsMobile";

  if (playersAnswers.length === 0) {
    playersAnswers = [{ id: 1, word: "no answers" }];
  }

  const longestAnswerObj = playersAnswers.reduce((a, b) =>
    a.word.length > b.word.length ? a : b
  );
  const longestAnswer = longestAnswerObj.word;

  console.log("name during break heeeeeeeeeeeeeeere", username);

  const data = { username, points, userID, longestAnswer };

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
      console.log("server response in the brake", parsedResponse);
    };
    postingResult();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowTimer(true);
    }, 250);
  }, []);

  let interval = setInterval(() => {
    displayLongestWord(count);
  }, 500);

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
      title: "13 letters word",
      data: answer13,
    },
    {
      title: "12 letters word",
      data: answer12,
    },
    {
      title: "11 letters word",
      data: answer11,
    },
    {
      title: "10 letters word",
      data: answer10,
    },
    {
      title: "9 letters word",
      data: answer9,
    },
    {
      title: "8 letters word",
      data: answer8,
    },
    {
      title: "7 letters word",
      data: answer7,
    },
    {
      title: "6 letters word",
      data: answer6,
    },
    {
      title: "5 letters word",
      data: answer5,
    },
    {
      title: "4 letters word",
      data: answer4,
    },
    {
      title: "3 letters word",
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
      </View>
      <View style={styles.rightSideCont}>
        <View style={styles.upperContainer}>
          <View style={styles.timerContainer}>
            {showTimer ? (
              <Timer
                clockCounter={breakTime}
                runDown={(boolean) => setIsEndOfBreak(boolean)}
              />
            ) : (
              <View style={styles.timerContainer2}></View>
            )}
          </View>
          <Text style={styles.pointsText}>
            <Text style={styles.pointsColor}>{points}</Text>
            <Text>/ {totalPoints} points</Text>
          </Text>
          <Text style={styles.pointsText}>
            <Text style={styles.pointsColor}>{numOfPlayerAnswers}</Text>
            <Text>/ {numOfServerAnswers} words</Text>
          </Text>
        </View>

        <View style={styles.middleContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Scores", { params: userID })}
          >
            <View style={styles.otherButtons}>
              <Text style={styles.buttonText}>See scores</Text>
            </View>
          </TouchableOpacity>
          {isEndOfBreake ? (
            <TouchableOpacity onPress={() => navigation.replace("Play")}>
              <View style={styles.otherButtons}>
                <Text style={styles.buttonText}>Play again</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.otherButtonsClear}></View>
          )}
        </View>
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
      </View>
    </View>
  );
};

export default BreakScreen;
