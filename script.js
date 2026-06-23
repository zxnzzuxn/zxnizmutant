(() => {
  const TOTAL = 20;
  const WIN = 20000;
  const LOSE = -10000;

  let round = 1;
  let score = 0;

  const el = id => document.getElementById(id);
  const roundEl = el('round');
  const scoreEl = el('scoreVal');
  const messageEl = el('message');
  const resultEl = el('result');
  const overlay = el('overlay');

  const oddBtn = el('oddBtn');
  const evenBtn = el('evenBtn');
  const backBtn = el('backBtn');
  const retryBtn = el('retryBtn');
  const finalScoreEl = el('finalScore');

  function updateUI(){
    roundEl.textContent = round;
    scoreEl.textContent = score;
  }

  function endGame(){
    finalScoreEl.textContent = score;
    overlay.classList.remove('hidden');
    oddBtn.disabled = true;
    evenBtn.disabled = true;
  }

  function play(choice){
    if(round > TOTAL) return;
    const picked = Math.random() < 0.5 ? 'odd' : 'even';
    const win = (choice === picked);
    score += win ? WIN : LOSE;
    resultEl.textContent = `정답: ${picked === 'odd' ? '홀' : '짝'} — ${win ? '맞음! +' + WIN + '원' : '틀림! ' + LOSE + '원'}`;
    round++;
    updateUI();
    if(round > TOTAL){
      messageEl.textContent = '모든 라운드 종료';
      endGame();
    } else {
      messageEl.textContent = `다음 라운드로 이동하세요.`;
    }
  }

  oddBtn.addEventListener('click', () => play('odd'));
  evenBtn.addEventListener('click', () => play('even'));

  backBtn.addEventListener('click', () => window.history.back());
  retryBtn.addEventListener('click', () => {
    // reset
    round = 1; score = 0;
    updateUI();
    resultEl.textContent = '';
    messageEl.textContent = '버튼을 눌러 시작하세요.';
    overlay.classList.add('hidden');
    oddBtn.disabled = false; evenBtn.disabled = false;
  });

  // initial
  updateUI();
})();
