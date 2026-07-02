const enemyCalcRates = {
  enemyCalcDef10Normal: 0.81,
  enemyCalcDef10Split: 2.43,

  enemyCalcDef30Normal: 0.95,
  enemyCalcDef30Split: 2.87,

  enemyCalcDef85Normal: 1.36,
  enemyCalcDef85Split: 4.06,

  enemyCalcDef215Normal: 2.32,
  enemyCalcDef215Split: 6.96,

  enemyCalcDef1000Normal: 8.11,
  enemyCalcDef1000Split: 24.3
};

document
  .getElementById("enemyCalcButton")
  .addEventListener("click", enemyCalcRun);

function enemyCalcRun() {

  const inputValue =
    parseInt(
      document.getElementById("enemyCalcInput").value,
      10
    ) || 0;

  for (const cellId in enemyCalcRates) {

    const result =
      Math.floor(
        inputValue * enemyCalcRates[cellId]
      );

    document.getElementById(cellId).textContent =
      result.toLocaleString("ja-JP");
  }
}