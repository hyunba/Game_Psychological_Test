const qnaList = [
  {
    q: '1. 나는 적과 근접해서 싸우는게 좋다.',
    a: [
      { answer: 'a. 물론이지! 근접해서 싸우는게 더 스릴있고 멋있지', type: ['destroyer', 'warlord', 'berserker', 'holy_knight', 'battle_master', 'infighter', 'soul_master', 'lance_master',  'striker', 'blade', 'demonic', 'reaper'] },
      { answer: 'b. 놉. 나는 RPG 게임에서 무조건 원거리 ', type: ['devil_hunter', 'blaster', 'hawk_eye', 'scouter', 'gunslinger', 'bard', 'summoner', 'arcana', 'sorceress'] },
      { answer: 'c. 난 잘 모르겠어..', type: ['bard', 'holy_knight', 'scouter', 'hawk_eye', 'soul_master' ] },
    ]
  },
  {
    q: '2. 나는 (남)캐릭터 or (여)캐릭터만 한다 ',
    a: [
      { answer: 'a. 나는 (남)캐릭만 해', type: ['destroyer', 'warlord', 'berserker', 'holy_knight', 'striker', 'devil_hunter', 'blaster', 'hawk_eye', 'scouter'] },
      { answer: 'b. 나는 (여)캐릭만 해', type: ['infighter', 'battle_master', 'soul_master', 'lance_master', 'blade', 'demonic', 'reaper', 'bard', 'summoner', 'arcana', 'sorceress', 'gunslinger'] },
      { answer: 'c. 나는 둘 다 해.', type: ['destroyer', 'warlord', 'berserker', 'holy_knight', 'striker', 'devil_hunter', 'blaster', 'hawk_eye', 'scouter', 'infighter', 'battle_master', 'soul_master', 'lance_master', 'blade', 'demonic', 'reaper', 'bard', 'summoner', 'arcana', 'sorceress', 'gunslinger'] },
    ]
  },
  {
    q: '3. 당신의 전투 스타일은?',
    a: [
      { answer: 'a. 묵직한 한방이 있는 전투 스타일', type: ['warlord', 'destroyer', 'berserker', 'infighter', 'soul_master', 'striker', 'blaster', 'summoner', 'sorceress'] },
      { answer: 'b. 상대의 공격을 피하면서 재빠르게 싸우는 스타일', type: ['infighter', 'battle_master', 'lance_master', 'soul_master', 'hawk_eye', 'devil_hunter', 'scouter', 'gunslinger', 'arcana', 'blade', 'demonic', 'reaper'] },
      { answer: 'c. 뒤에서 다른 플레이어를 보조해주는 스타일', type: ['warlord', 'bard', 'holy_knight'] }
    ]
  },
  {
    q: '4. 나는 MMORPG 경험이 있어서 보스의 패턴은  웬만하면 다 피할 줄 안다',
    a: [
      { answer: 'a. 경험이 좀 있어서 피하는 건 자신 있다. ', type: ['hawk_eye', 'arcana', 'summoner', 'devil_hunter', 'gunslinger', 'scouter', 'reaper', 'sorceress' ] },
      { answer: 'b. 조금 미숙해서 몇 대는 정도는 맞을지도..? ', type: ['destroyer', 'berserker', 'striker', 'lance_master', 'soul_master', 'blade', 'demonic' ] },
      { answer: 'c. RPG는 처음이라 무서워요 ', type: ['bard', 'holy_knight', 'infighter', 'warlord', 'battle_master', 'blaster' ] },
    ]
  },
  {
    q: '5. 나는 플레이스타일이 단순한게 좋다.',
    a: [
      { answer: 'a. 복잡한 건 싫다.', type: ['berserker', 'scouter', 'infighter', 'battle_master', 'demonic', 'summoner', 'holy_knight', 'bard', 'blaster' ] },
      { answer: 'b. 컨트롤하는 맛이 있지 단순한 건 재미없다.', type: ['devil_hunter', 'gunslinger', 'reaper', 'arcana', 'hawk_eye', 'blade' ]},
      { answer: 'c. 둘 다 좋다.', type: ['destroyer', 'warlord', 'soul_master', 'lance_master', 'sorceress', 'striker' ] },
    ]
  },

  {
    q: '6. 나는 변신하는 것에 낭만이 있다.(ex - 폭주, 초사이언화 등등)',
    a: [
      { answer: 'a. 너무 좋아요!!!!!', type: ['berserker', 'scouter', 'demonic', 'soul_master' ] },
      { answer: 'b. 그런건 딱히 관심없어요', type: ['infighter', 'battle_master', 'summoner', 'holy_knight', 'bard', 'blaster', 'devil_hunter', 'gunslinger', 'arcana', 'hawk_eye', 'destroyer', 'warlord', 'lance_master', 'sorceress', 'striker', 'blade', 'reaper' ] },
      { answer: 'c. 딱히 싫지도 좋지도 않다.', type: ['berserker', 'scouter', 'demonic', 'soul_master', 'infighter', 'battle_master', 'summoner', 'holy_knight', 'bard', 'blaster', 'devil_hunter', 'gunslinger', 'arcana', 'hawk_eye', 'destroyer', 'warlord', 'lance_master', 'sorceress', 'striker', 'blade', 'reaper' ] },
    ]
  },
  {
    q: '7. 나는 큼직큼직한 무기가 좋다.',
    a: [
      { answer: 'a. 무기는 큰 게 좋아', type: ['warlord', 'destroyer', 'berserker', 'infighter', 'blaster', 'hawk_eye', 'demonic' ] },
      { answer: 'b. 무기는 적당한 게 좋아', type: ['holy_knight', 'battle_master', 'lance_master', 'striker', 'devil_hunter', 'gunslinger', 'summoner', 'bard', 'arcana', 'sorceress', 'blade' ] },
      { answer: 'c. 무기는 작은 게 좋아', type: ['soul_master', 'scouter', 'reaper' ] },
    ]
  },
  {
    q: '8. 나는 유행에 민감하며 대세에 따르는 편이다.',
    a: [
      { answer: 'a. 맞다.', type: ['bard', 'gunslinger', 'warlord', 'infighter', 'lance_master', 'scouter', 'sorceress', 'striker', 'reaper' ] },
      { answer: 'b. 적당하게 묻어가는 편이다.', type: ['infighter', 'warlord', 'lance_master', 'striker', 'berserker' ] },
      { answer: 'c. 대세는 따르지않고 나만의 길을 간다.', type: ['holy_knight', 'blade', 'summoner', 'destroyer', 'demonic', 'battle_master', 'blaster', 'arcana', 'soul_master', 'hawk_eye', 'devil_hunter' ] },
    ]
  },
  {
    q: '9. 나는 게임에 돈을 쓰는 것을 아까워하지 않는다.',
    a: [
      { answer: 'a. 나는 게임이 나의 취미이므로 돈 쓰는 것에 대해 거리낌이 없다.', type: ['gunslinger', 'sorceress', 'berserker', 'striker', 'arcana', 'lance_master', 'devil_hunter', 'reaper' ] },
      { answer: 'b. 가끔 정도는 게임에 돈을 쓰지만 과소비는 하지 않는다.', type: ['warlord', 'destroyer', 'infighter', 'battle_master', 'soul_master', 'blaster', 'hawk_eye', 'blade' ] },
      { answer: 'c. 게임에 돈 쓰는 게 나는 아깝다.', type: ['holy_knight', 'bard', 'scouter', 'demonic', 'summoner' ] },
    ]
  },
  {
    q: '10. 당신은 운전을 하고 있다. 신호등이 빨간 불로 바뀌기 전 노란 불로 점등하고 있는데..(주변에 다른 차는 없다.) ',
    a: [
      { answer: 'a. 달려!!!!!!!!!!!', type: ['gunslinger', 'devil_hunter', 'infighter', 'arcana', 'lance_master', 'reaper', 'battle_master', 'hawk_eye', 'scouter', 'demonic', 'berserker' ] },
      { answer: 'b. 멈춘다. 여유를 가지고 살아야지', type: ['sorceress', 'striker', 'warlord', 'destroyer', 'soul_master', 'blaster', 'blade', 'summoner' ] },
      { answer: 'c. 운전하는 건 무섭다 난 앞으로도 운전은 안할 거 같다. ', type: ['bard', 'holy_knight' ] },
    ]
  },
  {
    q: '11. 당신은 이세계에 도착했다. 여행하기에 앞서 하나의 무기를 고르자면? ',
    a: [
      { answer: 'a. 단검, 검, 대검, 태도, 롱소드, 창', type: ['warlord', 'berserker', 'holy_knight', 'lance_master', 'blade', 'reaper' ] },
      { answer: 'b. 총, 라이플, 샷건, SMG,', type: ['gunslinger', 'devil_hunter', 'blaster', 'hawk_eye', 'scouter'] },
      { answer: 'c. 저 중엔 없는 거 같아요 ', type: ['destroyer', 'infighter', 'battle_master', 'soul_master', 'striker', 'summoner', 'bard', 'arcana', 'sorceress', 'demonic' ] },
    ]
  },
  {
    q: '12. 선택지는 여기까지 입니다. 고민하느라 고생하셨습니다.',
    a: [
      { answer: 'a. [놀자에요]', type: [ ] },
      { answer: 'b. [머쓱해요]', type: [ ] },
      { answer: 'c. [추천이요]', type: [ ] },
    ]
  }
]

const infoList = [
  {
    name: '"다시는 동료를 잃지 않겠다." <워로드>',
    desc: '워로드는 높은 방어력과 생존력을 기반으로 전장의 선봉에서 아군을 지휘하고 보호하는 근접 클래스입니다. 거대한 방패를 이용한 다양한 방어기술은 강력한 적들의 공격을 피해 없이 막아낼 수 있으며, 건랜스를 이용한 창격 기술과 포격 기술은 단순하지만 강력한 힘을 발휘합니다. 또한, 적들의 시선을 끌고 파티원을 보호할 수 있는 기술을 가진 워로드는 파티의 든든한 버팀목이자 전투의 리더입니다.'
  },
  {
    name: '"나의 해머에 대항하는 자는 가루가 될 뿐!" <디스트로이어>',
    desc: '디스트로이어는 느리지만 강력한 한방이 있는 근거리 클래스입니다. 기동성이 부족하지만 육중한 그라비티 해머를 자유자재로 다루며 적들에게 위협적인 공격을 가하게 됩니다. 단단하고, 무자비한 공격성으로 적들을 시원시원하게 쓸어버리며, 전장을 공포의 도가니로 만들어 버릴 수 있습니다.'
  },
  {
    name: '"이 거대한 검은 내 안의 투쟁심을 이끌어내지...!" <버서커>',
    desc: '버서커는 거대한 양손 대검을 사용하여 전장을 휘젓는 전형적인 근접 전사입니다. 높은 공격력과 방어력으로 전 클래스를 통틀어 공수의 밸런스가 가장 안정적인 클래스이며, 폭주 모드를 활용하면 전장을 순식간에 뒤집을 수 있는 엄청난 잠재력도 지니고 있는 강력한 클래스 입니다.'
  },
  {
    name: '"빛의 수호자여, 신의 이름으로 세상을 심판하라!" <홀리나이트>',
    desc: '홀리나이트는 신념의 검과 신앙의 힘을 사용하는 서포트형 클래스입니다. 성서를 이용한 신성 스킬 및 버프를 활용해 아군을 후방에서 지원하거나 검을 이용한 징벌 스킬들을 통해 전장의 선봉에 설 수 있습니다.'
  },
  {
    name: '"느껴진다. 오브에 가득한 무한한 힘이..." <인파이터>',
    desc: '인파이터는 적들에게 파고드는 능력이 우수한 전형적인 근접 클래스입니다. 주 무기인 헤비 건틀릿을 이용한 묵직한 펀치로 적들을 몰아치는 공격이 가능합니다. 공격력과 방어력, 기동력이 전반적으로 모두 뛰어난 균형 잡힌 클래스로 전투 지속력 또한 우수하기 때문에 공수 양면에서 활약하는 모습을 기대해 볼 수 있습니다.'
  },
  {
    name: '"체술만으로는 강해질 수 없어" <배틀마스터>',
    desc: '배틀마스터는 전광석화와 같이 적들을 공격하는 무도가 클래스입니다. 빠른 움직임에 다양한 체술을 두루 갖추고 있기 때문에 순식간에 적을 타격한 뒤 화려한 공중 콤보를 이어갈 수 있으며, 강력한 엘리멘탈 스킬들을 활용해 전장의 판도를 뒤집을 수도 있습니다.'
  },
  {
    name: '"내면의 기로 한계를 초월하라!" <기공사>',
    desc: '기공사는 내공을 사용하여 근접 및 원거리 공격을 다양하게 사용할 수 있는 중거리 클래스입니다. 장법을 이용한 근접 공격과 내공을 이용한 원거리 공격을 조합하여 순간적으로 폭발적인 공격을 퍼부을 수 있으며, 이러한 특징은 다양한 전장에서 실력을 발휘할 수 있게 만들어 줍니다.'
  },
  {
    name: '"전장의 창이 되어, 적을 섬멸하라!" <창술사>',
    desc: '창술사는 상황에 맞게 스탠스를 변경할 수 있는 클래스입니다. 변형 창을 사용해 주변에 위치한 적들을 쓸어버릴 수 있는 난무 스탠스, 날카로운 창으로 순간 높은 피해를 줄 수 있는 집중 스탠스를 사용해 전장의 적들을 단숨에 제압할 수 있습니다.'
  },
  {
    name: '"오로지, 극을 향하여 나아갈 뿐!" <스트라이커>',
    desc: '스트라이커는 질풍처럼 적들을 몰아붙이는 무도가 클래스입니다. 빠른 움직임에 다양한 체술을 두루 갖추고 있기 때문에 순식간에 적을 타격한 후 화려한 공중 콤보를 이어갈 수 있으며, 강력한 엘리멘탈 스킬들을 활용해 전장의 판도를 뒤집을 수도 있습니다.'
  },
  {
    name: '"악마의 울음소리가 궁금하면 날 찾아오라구!" <데빌헌터>',
    desc: '데빌헌터는 세 가지 총기를 사용하여 빠르게 움직이며 스타일리쉬한 전투를 펼치는 원거리 클래스 입니다. 대상과의 거리, 혹은 공격하고자 하는 범위에 따라 그에 알맞은 스탠스를 선택하여 더블 핸드건, 샷건, 라이플로 가장 효과적인 전투를 만들어 낼 수 있습니다.'
  },
  {
    name: '"아름답게 치장해주지, 불타는 꽃으로!" <블래스터>',
    desc: '블래스터는 거대 메카닉 런처와 여러가지 특수 중화기를 사용하는 막강한 화력과 폭발성 광역 공격에 특화된 원거리 클래스 입니다. 적들의 공격을 버텨내며 광역 딜링하는 스타일로 기동성은 떨어지는 편이지만 중갑을 착용하여 원거리 클래스 중에는 높은 방어력을 보유하고 있으며, 각종 중화기를 이용한 파괴력이 이러한 단점을 모두 상쇄시킵니다. '
  },
  {
    name: '"적을 꿰뚫어라, 신념의 화살이여!" <호크아이>',
    desc: '호크아이는 민첩하게 움직이며 기계 활과 특수 화살로 적을 공격하는 명사수 입니다. 민첩한 이동기를 활용한 생존력이 우수하며 이를 바탕으로 비교적 긴 시간동안 안정적인 전투를 펼칠 수 있습니다. 또한 다양한 상태이상 스킬과 은신을 활용하여 적의 허점을 노리는 전투가 가능합니다.'
  },
  {
    name: '"하이퍼싱크, 시스템 동기화가 완료되었습니다." <스카우터>',
    desc: '스카우터는 아르데타인의 첨단 기술을 활용하여 전투를 수행하는 클래스입니다. 스카우터는 냉정하고 침착하게 고도의 기술을 구사합니다. 특히, 아르데타인 기술의 집약체인 드론을 이용한 공격은 적을 분석하고 궤멸시키는데 한 치의 오차도 허용하지 않을 만큼 정확합니다.'
  },
  {
    name: '"총 앞에서는, 모두가 솔직해지는 법이지" <건슬링어>',
    desc: '건슬링어는 세 가지 총기를 사용하여 빠르게 움직이며 스타일리쉬한 전투를 펼치는 원거리 클래스 입니다. 대상과의 거리, 혹은 공격하고자 하는 범위에 따라 그에 알맞은 스탠스를 선택하여 더블 핸드건, 샷건, 라이플로 가장 효과적인 전투를 만들어 낼 수 있습니다.'
  },
  {
    name: '"정령들이여 세상을 위협하는 적들을 쓰러뜨려라!" <서머너>',
    desc: '서머너는 보조 딜러나 탱커 역할을 담당할 수 있는 다양한 정령들과 함께 전투를 전개해 나가는 원거리 클래스입니다. 체력과 방어력이 낮아서 일정거리 이상을 유지하며 전투를 하는 것이 좋고, 만약 적들에게 거리를 잡히면 치명적일 수 있으나, 서머너가 가진 다양한 마법 스킬과 정령들을 적절히 조합한다면 위협적인 상황은 허용조차 되지 않을 것입니다.'
  },
  {
    name: '"이 아름다운 선율은 피바다가 될 전장의 전주곡이에요" <바드>',
    desc: '바드는 성스러운 하프를 이용하여 적을 공격하거나 아군을 서포트하는 원거리 서포트형 클래스입니다. 날카로운 음율로 적을 공격하기도 하고, 아름다운 운율로 아군을 치유하며, 파티에서는 선봉보다는 후방에서 아군을 돕거나 각종 버프를 이용해 아군을 지원하는 역할을 수행할 수 있습니다. 공격력은 다소 낮은 편이지만 아군을 지원하는 능력이 매우 뛰어나기 때문에 파티에서 꼭 필요로 하는 클래스 입니다.'
  },
  {
    name: '"이 세상의 운명은 이미 내 카드 안에 담겨 있다!" <아르카나>',
    desc: '아르카나는 마법사 클래스로 체력과 방어력이 약해 위험에 쉽게 노출 되기도 하는 반면, 현란하고 빠른 몸놀림으로 중거리 전투에서 강력한 모습을 보이며, 다이나믹한 전투로 상대를 유린 할 수도 있는 클래스 입니다. 스킬 한방 한방이 강력하진 않지만, 적에게 카드의 마력이 담긴 스택트 효과를 쌓고, 루인 스킬을 이용하여 스택트 효과를 폭발시킴으로 증폭된 대미지를 선사할 수 있습니다.'
  },
  {
    name: '"자연의 섭리를 깨달은 자, 전장을 지배하리라!" <소서리스>',
    desc: '소서리스는 세 가지 원소를 기본으로 한 강력한 마법을 다루는 클래스입니다. 소서리스는 광역 마법을 사용해 다수의 적을 손쉽게 처리할 수 있으며, 캐스팅 마법으로 강력한 적에게 높은 피해를 선사할 수도 있습니다. 신비한 마력 게이지를 획득해 얻을 수 있는 아이덴티티를 잘 활용한다면 전장을 지배하는 영웅이 될 수 있습니다.'
  },
  {
    name: '"내재된 악마성을 절제하며, 혼돈의 검을 휘두르는 자!" <블레이드>',
    desc: '블레이드는 쌍검과 장검, 총 세개의 검을 사용하는 암살자입니다. 항상 차분한 이성을 유지하며, 날렵한 쌍검과 묵직한 장검에 혼돈의 힘을 담아 빠르고 절도 있게 적들을 공격합니다. 특히, 쌍검과 장검을 활용한 연계 공격은 숨쉴 틈 없는 공격을 난사해 적을 제압합니다.'
  },
  {
    name: '"운명의 사슬을 끊고, 내재된 악마성을 해방하라!" <데모닉>',
    desc: '데모닉은 거대한 무기 ‘데모닉 웨폰’을 사용하여 적들을 무참히 베는데 특화된 암살자입니다. 절제를 위주로 싸우는 블레이드와는 달리, 혼돈의 힘을 적극적으로 해방해 싸우는 것이 특징입니다. 스킬이 적중하여 잠식 게이지가 차면 내재된 악마성이 완전히 해방, 혼돈의 힘을 사용할 수 있습니다.'
  },
  {
    name: '"... 그림자는 소리를 내지 않는 법이지." <리퍼>',
    desc: '리퍼는 대거를 이용해 단검 스킬과 그림자 스킬을 구사하는 암살자 클래스입니다. 리퍼는 날렵한 움직임을 이용해 적을 습격하여, 적에게 공포를 선사합니다. 다양한 독을 사용하여 지속적인 피해를 줄 수도 있고, 은신을 통해 은밀하게 적의 배후로 이동해 강력한 공격을 할 수도 있습니다.'
  },
]
