export default function getFractionAgeID(personalEnergyArray: number[], ageMonths: string) {
  let ageInMonths = parseFloat(ageMonths);
  if (ageInMonths > 80) {
    ageInMonths = ageInMonths % 80;
  }

  if (ageInMonths >= 0 && ageInMonths < 1.25) {
    console.log(`energy ${0}`);
    return 0;
  } else if (ageInMonths >= 1.25 && ageInMonths < 2.5) {
    console.log(`energy ${1}`);
    return 1;
  } else if (ageInMonths >= 2.5 && ageInMonths < 3.75) {
    console.log(`energy ${2}`);
    return 2;
  } else if (ageInMonths >= 3.75 && ageInMonths < 5) {
    console.log(`energy ${3}`);
    return 3;
  } else if (ageInMonths >= 5 && ageInMonths < 6.25) {
    console.log(`energy ${5}`);
    return 5;
  } else if (ageInMonths >= 6.25 && ageInMonths < 7.5) {
    console.log(`energy ${6}`);
    return 6;
  } else if (ageInMonths >= 7.5 && ageInMonths < 8.75) {
    console.log(`energy ${7}`);
    return 7;
  } else if (ageInMonths >= 8.75 && ageInMonths < 10) {
    console.log(`energy ${8}`);
    return 8;
  } else if (ageInMonths >= 10 && ageInMonths < 11.25) {
    console.log(`energy ${10}`);
    return 10;
  } else if (ageInMonths >= 11.25 && ageInMonths < 12.5) {
    console.log(`energy ${11}`);
    return 11;
  } else if (ageInMonths >= 12.5 && ageInMonths < 13.75) {
    console.log(`energy ${12}`);
    return 12;
  } else if (ageInMonths >= 13.75 && ageInMonths < 15) {
    console.log(`energy ${13}`);
    return 13;
  } else if (ageInMonths >= 15 && ageInMonths < 16.25) {
    console.log(`energy ${15}`);
    return 15;
  } else if (ageInMonths >= 16.25 && ageInMonths < 17.5) {
    console.log(`energy ${16}`);
    return 16;
  } else if (ageInMonths >= 17.5 && ageInMonths < 18.75) {
    console.log(`energy ${17}`);
    return 17;
  } else if (ageInMonths >= 18.75 && ageInMonths < 20) {
    console.log(`energy ${18}`);
    return 18;
  } else if (ageInMonths >= 20 && ageInMonths < 21.25) {
    console.log(`energy ${20}`);
    return 20;
  } else if (ageInMonths >= 21.25 && ageInMonths < 22.5) {
    console.log(`energy ${21}`);
    return 21;
  } else if (ageInMonths >= 22.5 && ageInMonths < 23.75) {
    console.log(`energy ${22}`);
    return 22;
  } else if (ageInMonths >= 23.75 && ageInMonths < 25) {
    console.log(`energy ${23}`);
    return 23;
  } else if (ageInMonths >= 25 && ageInMonths < 26.25) {
    console.log(`energy ${25}`);
    return 25;
  } else if (ageInMonths >= 26.25 && ageInMonths < 27.5) {
    console.log(`energy ${26}`);
    return 26;
  } else if (ageInMonths >= 27.5 && ageInMonths < 28.75) {
    console.log(`energy ${27}`);
    return 27;
  } else if (ageInMonths >= 28.75 && ageInMonths < 30) {
    console.log(`energy ${28}`);
    return 28;
  } else if (ageInMonths >= 30 && ageInMonths < 31.25) {
    console.log(`energy ${30}`);
    return 30;
  } else if (ageInMonths >= 31.25 && ageInMonths < 32.5) {
    console.log(`energy ${31}`);
    return 31;
  } else if (ageInMonths >= 32.5 && ageInMonths < 33.75) {
    console.log(`energy ${32}`);
    return 32;
  } else if (ageInMonths >= 33.75 && ageInMonths < 35) {
    console.log(`energy ${33}`);
    return 33;
  } else if (ageInMonths >= 35 && ageInMonths < 36.25) {
    console.log(`energy ${35}`);
    return 35;
  } else if (ageInMonths >= 36.25 && ageInMonths < 37.5) {
    console.log(`energy ${36}`);
    return 36;
  } else if (ageInMonths >= 37.5 && ageInMonths < 38.75) {
    console.log(`energy ${37}`);
    return 37;
  } else if (ageInMonths >= 38.75 && ageInMonths < 40) {
    console.log(`energy ${38}`);
    return 38;
  } else if (ageInMonths >= 40 && ageInMonths < 41.25) {
    console.log(`energy ${40}`);
    return 40;
  } else if (ageInMonths >= 41.25 && ageInMonths < 42.5) {
    console.log(`energy ${41}`);
    return 41;
  } else if (ageInMonths >= 42.5 && ageInMonths < 43.75) {
    console.log(`energy ${42}`);
    return 42;
  } else if (ageInMonths >= 43.75 && ageInMonths < 45) {
    console.log(`energy ${43}`);
    return 43;
  } else if (ageInMonths >= 45 && ageInMonths < 46.25) {
    console.log(`energy ${45}`);
    return 45;
  } else if (ageInMonths >= 46.25 && ageInMonths < 47.5) {
    console.log(`energy ${46}`);
    return 46;
  } else if (ageInMonths >= 47.5 && ageInMonths < 48.75) {
    console.log(`energy ${47}`);
    return 47;
  } else if (ageInMonths >= 48.75 && ageInMonths < 50) {
    console.log(`energy ${48}`);
    return 48;
  } else if (ageInMonths >= 50 && ageInMonths < 51.25) {
    console.log(`energy ${50}`);
    return 50;
  } else if (ageInMonths >= 51.25 && ageInMonths < 52.5) {
    console.log(`energy ${51}`);
    return 51;
  } else if (ageInMonths >= 52.5 && ageInMonths < 53.75) {
    console.log(`energy ${52}`);
    return 52;
  } else if (ageInMonths >= 53.75 && ageInMonths < 55) {
    console.log(`energy ${53}`);
    return 53;
  } else if (ageInMonths >= 55 && ageInMonths < 56.25) {
    console.log(`energy ${55}`);
    return 55;
  } else if (ageInMonths >= 56.25 && ageInMonths < 57.5) {
    console.log(`energy ${56}`);
    return 56;
  } else if (ageInMonths >= 57.5 && ageInMonths < 58.75) {
    console.log(`energy ${57}`);
    return 57;
  } else if (ageInMonths >= 58.75 && ageInMonths < 60) {
    console.log(`energy ${58}`);
    return 58;
  } else if (ageInMonths >= 60 && ageInMonths < 61.25) {
    console.log(`energy ${60}`);
    return 60;
  } else if (ageInMonths >= 61.25 && ageInMonths < 62.5) {
    console.log(`energy ${61}`);
    return 61;
  } else if (ageInMonths >= 62.5 && ageInMonths < 63.75) {
    console.log(`energy ${62}`);
    return 62;
  } else if (ageInMonths >= 63.75 && ageInMonths < 65) {
    console.log(`energy ${63}`);
    return 63;
  } else if (ageInMonths >= 65 && ageInMonths < 66.25) {
    console.log(`energy ${65}`);
    return 65;
  } else if (ageInMonths >= 66.25 && ageInMonths < 67.5) {
    console.log(`energy ${66}`);
    return 66;
  } else if (ageInMonths >= 67.5 && ageInMonths < 68.75) {
    console.log(`energy ${67}`);
    return 67;
  } else if (ageInMonths >= 68.75 && ageInMonths < 70) {
    console.log(`energy ${68}`);
    return 68;
  } else if (ageInMonths >= 70 && ageInMonths < 71.25) {
    console.log(`energy ${70}`);
    return 70;
  } else if (ageInMonths >= 71.25 && ageInMonths < 72.5) {
    console.log(`energy ${71}`);
    return 71;
  } else if (ageInMonths >= 72.5 && ageInMonths < 73.75) {
    console.log(`energy ${72}`);
    return 72;
  } else if (ageInMonths >= 73.75 && ageInMonths < 75) {
    console.log(`energy ${73}`);
    return 73;
  } else if (ageInMonths >= 75 && ageInMonths < 76.25) {
    console.log(`energy ${75}`);
    return 75;
  } else if (ageInMonths >= 76.25 && ageInMonths < 77.5) {
    console.log(`energy ${76}`);
    return 76;
  } else if (ageInMonths >= 77.5 && ageInMonths < 78.75) {
    console.log(`energy ${77}`);
    return 77;
  } else if (ageInMonths >= 78.75 && ageInMonths < 80) {
    console.log(`energy ${78}`);
    return 78;
  }
}
