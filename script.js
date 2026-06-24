const districts = [
  '강서구',
  '금정구',
  '기장군',
  '남구',
  '동구',
  '동래구',
  '부산진구',
  '북구',
  '사상구',
  '사하구',
  '서구',
  '수영구',
  '연제구',
  '영도구',
  '중구',
  '해운대구'
];

const districtData = {
  강서구: {
    title: '강서구',
    restaurants: [
      { name: '카페 모모', note: '바다가 보이는 조용한 루프탑' },
      { name: '노을 카페', note: '야경이 예쁜 감성 공간' }
    ]
  },
  금정구: {
    title: '금정구',
    restaurants: [
      { name: '산책 카페', note: '산과 도심 사이의 아늑한 카페' },
      { name: '청춘 라운지', note: '스터디와 데이트 모두 좋은 공간' }
    ]
  },
  기장군: {
    title: '기장군',
    restaurants: [
      { name: '바다 스냅', note: '바다를 가까이에서 느낄 수 있는 카페' },
      { name: '해변의 아침', note: '일출 감상에 좋은 조용한 카페' }
    ]
  },
  남구: {
    title: '남구',
    restaurants: [
      { name: '남구 라이트', note: '따뜻한 조명과 편안한 인테리어' },
      { name: '오션 테라스', note: '바다 냄새가 나는 루프탑 카페' }
    ]
  },
  동구: {
    title: '동구',
    restaurants: [
      { name: '동구 포레스트', note: '자연 느낌이 물씬 나는 카페' },
      { name: '밤길 카페', note: '야간 산책 후 들르기 좋은 곳' }
    ]
  },
  동래구: {
    title: '동래구',
    restaurants: [
      { name: '동래 스테이', note: '고즈넉한 분위기의 감성 카페' },
      { name: '청록 카페', note: '조용하고 아늑한 북카페형 공간' }
    ]
  },
  부산진구: {
    title: '부산진구',
    restaurants: [
      { name: '부산진 라운지', note: '도심 속 감성 카페' },
      { name: '인생샷 카페', note: '포토존이 가득한 인기 카페' }
    ]
  },
  북구: {
    title: '북구',
    restaurants: [
      { name: '북구의 봄', note: '따뜻한 색감이 돋보이는 공간' },
      { name: '쉼표 카페', note: '천천히 쉬다 가기 좋은 카페' }
    ]
  },
  사상구: {
    title: '사상구',
    restaurants: [
      { name: '사상 스카이', note: '넓은 테라스와 시원한 분위기' },
      { name: '달빛 카페', note: '저녁에 더 예쁜 조명 카페' }
    ]
  },
  사하구: {
    title: '사하구',
    restaurants: [
      { name: '사하 포레', note: '바다와 가까운 평화로운 카페' },
      { name: '프레임 카페', note: '사진 찍기 좋은 감성 공간' }
    ]
  },
  서구: {
    title: '서구',
    restaurants: [
      { name: '서구 스토리', note: '작은 디테일이 많은 따뜻한 카페' },
      { name: '블루 노트', note: '잔잔한 음악과 아늑한 분위기' }
    ]
  },
  수영구: {
    title: '수영구',
    restaurants: [
      { name: '수영 바다', note: '바다와 마주한 루프탑 카페' },
      { name: '해질녘 카페', note: '노을이 아름다운 카페' }
    ]
  },
  연제구: {
    title: '연제구',
    restaurants: [
      { name: '연제 북카페', note: '책 읽기 좋은 조용한 공간' },
      { name: '연제 브런치', note: '브런치와 커피가 잘 어우러지는 곳' }
    ]
  },
  영도구: {
    title: '영도구',
    restaurants: [
      { name: '영도 라이트', note: '바다 풍경이 아름다운 카페' },
      { name: '항구 카페', note: '항구 분위기와 어울리는 공간' }
    ]
  },
  중구: {
    title: '중구',
    restaurants: [
      { name: '중구 스테이', note: '도심 속 아늑한 브런치 카페' },
      { name: '아티스트 카페', note: '작품 감상과 커피를 함께' }
    ]
  },
  해운대구: {
    title: '해운대구',
    restaurants: [
      { name: '해운대 로즈', note: '해변 산책 후 들르기 좋은 카페' },
      { name: '오션 라운지', note: '바다 전망이 좋은 감성 공간' }
    ]
  }
};

const districtGrid = document.getElementById('districtGrid');
const confirmButton = document.getElementById('confirmButton');
const selectionStage = document.getElementById('selectionStage');
const mapStage = document.getElementById('mapStage');
const selectedDistrictTitle = document.getElementById('selectedDistrictTitle');
const restaurantList = document.getElementById('restaurantList');
const splash = document.getElementById('splash');
const appShell = document.getElementById('appShell');
const kakaoMapFrame = document.getElementById('kakaoMapFrame');

let selectedDistrict = null;

function renderDistricts() {
  districtGrid.innerHTML = '';
  districts.forEach((district) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'district-chip';
    button.textContent = district;
    button.addEventListener('click', () => {
      selectedDistrict = district;
      document.querySelectorAll('.district-chip').forEach((chip) => {
        chip.classList.toggle('is-selected', chip.textContent === district);
      });
      confirmButton.disabled = false;
    });
    districtGrid.appendChild(button);
  });
}

const districtLocations = {
  강서구: { label: '강서구 카페', lat: 35.1512, lng: 128.8185 },
  금정구: { label: '금정구 카페', lat: 35.2281, lng: 129.0922 },
  기장군: { label: '기장군 카페', lat: 35.2442, lng: 129.2135 },
  남구: { label: '남구 카페', lat: 35.1367, lng: 129.0866 },
  동구: { label: '동구 카페', lat: 35.1294, lng: 129.0451 },
  동래구: { label: '동래구 카페', lat: 35.2056, lng: 129.0784 },
  부산진구: { label: '부산진구 카페', lat: 35.1629, lng: 129.0536 },
  북구: { label: '북구 카페', lat: 35.1972, lng: 129.0185 },
  사상구: { label: '사상구 카페', lat: 35.1525, lng: 128.9914 },
  사하구: { label: '사하구 카페', lat: 35.1068, lng: 128.9723 },
  서구: { label: '서구 카페', lat: 35.0973, lng: 129.0160 },
  수영구: { label: '수영구 카페', lat: 35.1455, lng: 129.1130 },
  연제구: { label: '연제구 카페', lat: 35.1768, lng: 129.0797 },
  영도구: { label: '영도구 카페', lat: 35.0914, lng: 129.0679 },
  중구: { label: '중구 카페', lat: 35.1062, lng: 129.0324 },
  해운대구: { label: '해운대구 카페', lat: 35.1587, lng: 129.1604 }
};

function renderMapHighlight() {
  const location = selectedDistrict
    ? districtLocations[selectedDistrict]
    : { label: '부산 카페', lat: 35.1795543, lng: 129.0756416 };
  const mapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(location.label)},${location.lat},${location.lng}`;
  if (kakaoMapFrame) {
    kakaoMapFrame.src = mapUrl;
  }
}

function renderRestaurants() {
  if (!selectedDistrict) return;
  const data = districtData[selectedDistrict];
  selectedDistrictTitle.textContent = data.title;
  restaurantList.innerHTML = '';
  data.restaurants.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'restaurant-item';
    card.innerHTML = `<strong>${item.name}</strong><p>${item.note}</p>`;
    restaurantList.appendChild(card);
  });
}

function getDistrictPath(district) {
  const paths = {
    강서구: 'M96 150 L170 124 L225 134 L246 170 L240 215 L188 245 L145 235 L106 206 Z',
    금정구: 'M250 248 L320 210 L362 238 L352 288 L298 316 L242 305 Z',
    기장군: 'M430 448 L487 432 L533 455 L520 527 L468 563 L415 529 L402 491 Z',
    남구: 'M263 356 L292 322 L332 332 L326 376 L291 401 L257 392 Z',
    동구: 'M319 238 L373 214 L400 240 L392 281 L345 306 L309 286 Z',
    동래구: 'M318 320 L352 296 L390 314 L385 351 L338 365 L311 345 Z',
    부산진구: 'M310 336 L360 316 L405 340 L396 386 L340 404 L302 384 Z',
    북구: 'M244 212 L299 188 L334 214 L326 253 L285 268 L235 247 Z',
    사상구: 'M240 376 L300 348 L330 367 L321 414 L274 435 L228 420 Z',
    사하구: 'M148 308 L210 286 L242 304 L236 348 L184 372 L136 352 Z',
    서구: 'M238 284 L269 258 L305 274 L298 318 L260 332 L228 318 Z',
    수영구: 'M350 372 L392 346 L430 368 L420 402 L378 417 L336 404 Z',
    연제구: 'M330 352 L370 332 L402 349 L390 384 L347 398 L320 380 Z',
    영도구: 'M214 420 L248 400 L280 414 L270 456 L234 470 L202 450 Z',
    중구: 'M290 272 L330 252 L356 270 L348 304 L307 316 L281 298 Z',
    해운대구: 'M372 390 L439 368 L484 384 L472 430 L422 456 L367 438 Z'
  };
  return paths[district] || '';
}

function showSection() {
  selectionStage.classList.add('hidden');
  mapStage.classList.remove('hidden');
  renderMapHighlight();
  renderRestaurants();
}

function initializeApp() {
  renderDistricts();

  confirmButton.addEventListener('click', () => {
    if (!selectedDistrict) return;
    showSection();
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      splash.classList.add('is-hidden');
      appShell.classList.add('is-ready');
    }, 3000);
  });

}

initializeApp();
