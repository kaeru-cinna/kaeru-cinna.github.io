document.getElementById("scoreForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const base = Number(document.getElementById("baseScore").value) || 0;
  const maxHp = Number(document.getElementById("maxHp").value) || 0;
  const currentHp = Number(document.getElementById("currentHp").value) || 0;
  const military = Number(document.getElementById("military").value) || 0;

  const coefficients = {
    boomerang: 0.01,
    napalm: 0.01,
    locket: 0.01,
    circle: 0.01,
    peace: 0.0035,
    special_move: 0.02,
    military_power: 500
  };

  let finalScore = base;
  let scoreNotation;

  const v1 = Number(document.getElementById("v1").value) || 0;
  const v2 = Number(document.getElementById("v2").value) || 0;
  const v3 = Number(document.getElementById("v3").value) || 0;
  const v4 = Number(document.getElementById("v4").value) || 0;
  const v5 = Number(document.getElementById("v5").value) || 0;
  const v6 = Number(document.getElementById("v6").value) || 0;

  if (document.getElementById("bonus1Enable").checked) {
    finalScore *= (1 + v1 * coefficients.boomerang);
  }
  if (document.getElementById("bonus2Enable").checked) {
    finalScore *= (1 + v2 * coefficients.napalm);
  }
  if (document.getElementById("bonus3Enable").checked) {
    finalScore *= (1 + v3 * coefficients.locket);
  }
  if (document.getElementById("bonus4Enable").checked) {
    finalScore *= (1 + v4 * coefficients.circle);
  }
  if (document.getElementById("bonus5Enable").checked) {
    finalScore *= (1 + v5 * coefficients.peace);
  }
  if (document.getElementById("bonus6Enable").checked) {
    finalScore *= (1 + v6 * coefficients.special_move);
  }

  if (maxHp > 0 && currentHp > 0) {
    let hpRate = currentHp / maxHp;
    hpRate = Math.max(0, Math.min(1, hpRate));

    const maxBonus = 0.5;
    const hpBonus = hpRate * maxBonus;

    finalScore *= (1 + hpBonus);
  }
  finalScore += (1 + military * coefficients.military_power);
  
  finalScore = Math.floor(finalScore);
  
  if (finalScore >= 10000000000) {
    scoreNotation = (finalScore / 1000000000).toFixed(1) + "B";
  }else if (finalScore >= 100000000) {
    scoreNotation = (finalScore / 1000000).toFixed(1) + "M";
  } else if(finalScore >= 100000){
    scoreNotation = (finalScore / 1000).toFixed(1) + "K";    
  }

  document.getElementById("score-result").textContent =
    "最終スコア: " + finalScore.toLocaleString()+"( " + scoreNotation + " )";
});