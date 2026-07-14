(function () {
  const DIMENSIONS = [
    { key: "family", label: "亲密互信（关系）" },
    { key: "parentChild", label: "用心倾听（沟通）" },
    { key: "warmth", label: "生活仪式（温度）" },
    { key: "encouragement", label: "赋能赞美（鼓励）" },
    { key: "repair", label: "情绪修复（稳定）" }
  ];

  const QUESTIONS = [
    {
      dimension: "parentChild",
      text: "晚上孩子一进门，你最常先问什么？",
      options: [
        { text: "通常先问作业、成绩或老师有没有说什么", score: 1 },
        { text: "会打个招呼，但很快各忙各的", score: 2 },
        { text: "基本各忙各的，很少真正开口聊", score: 0 },
        { text: "先看孩子状态，问一句今天累不累、想不想说说", score: 3 }
      ]
    },
    {
      dimension: "parentChild",
      text: "孩子成绩下滑时，你第一反应更像哪一种？",
      options: [
        { text: "赶紧安排错题、补课或排名分析，但语气还算平稳", score: 2 },
        { text: "先稳住情绪，了解最近压力和真实原因", score: 3 },
        { text: "当场批评、比较，气氛很快变僵", score: 0 },
        { text: "第一反应是着急，容易说他不够努力", score: 1 }
      ]
    },
    {
      dimension: "parentChild",
      text: "孩子抱着手机不放时，你通常怎么做？",
      options: [
        { text: "提醒几次，忍不住会催，但还会留一点余地", score: 2 },
        { text: "怕冲突，常常拖到很晚也没真正处理", score: 1 },
        { text: "先问他在看什么，再一起约定时间和规则", score: 3 },
        { text: "直接抢、吼，或者马上进入对抗", score: 0 }
      ]
    },
    {
      dimension: "parentChild",
      text: "孩子做错事后，你们最常出现哪种画面？",
      options: [
        { text: "马上讲道理，越讲越长", score: 1 },
        { text: "先让情绪降下来，再一起复盘怎么补救", score: 3 },
        { text: "会问发生了什么，但偶尔语气比较急", score: 2 },
        { text: "直接贴标签、翻旧账，最后谁都不想说", score: 0 }
      ]
    },
    {
      dimension: "family",
      text: "家里意见不一致，比如假期去哪、钱怎么花，通常会怎样？",
      options: [
        { text: "谁声音大、谁更强势，最后就听谁的", score: 1 },
        { text: "先各自说清楚，再一起找能接受的方案", score: 3 },
        { text: "会商量，但常常有人心里不太舒服", score: 2 },
        { text: "不谈清楚，最后冷着、拖着或赌气", score: 0 }
      ]
    },
    {
      dimension: "family",
      text: "爱人或家人不舒服时，你更常怎么反应？",
      options: [
        { text: "口头关心几句，但行动不一定跟上", score: 2 },
        { text: "觉得对方自己能处理，自己不太介入", score: 1 },
        { text: "主动问需要什么，并做一个具体照顾动作", score: 3 },
        { text: "容易嫌麻烦，甚至觉得对方矫情", score: 0 }
      ]
    },
    {
      dimension: "family",
      text: "在孩子面前聊到爱人时，你更常说什么？",
      options: [
        { text: "偶尔夸，也偶尔抱怨，看当天心情", score: 2 },
        { text: "忍不住说缺点，让孩子也听到不满", score: 1 },
        { text: "经常说辛苦、不容易，帮孩子看见对方付出", score: 3 },
        { text: "习惯拉孩子站队，关系越聊越紧张", score: 0 }
      ]
    },
    {
      dimension: "family",
      text: "吵架时，“离婚”“不管了”这类话在你家出现过吗？",
      options: [
        { text: "气急时偶尔说，但事后会后悔", score: 1 },
        { text: "基本不说，知道这类话很伤关系", score: 3 },
        { text: "吵到严重时常会说，家里人都很累", score: 0 },
        { text: "很少说，但冷战和不理人会出现", score: 2 }
      ]
    },
    {
      dimension: "warmth",
      text: "家里有没有固定一起吃饭、散步或闲聊的时间？",
      options: [
        { text: "偶尔有，能碰上就一起", score: 2 },
        { text: "很少，各忙各的，时间总凑不到", score: 1 },
        { text: "经常有，而且大家知道这是家里的小约定", score: 3 },
        { text: "基本没有，回到家也像各过各的", score: 0 }
      ]
    },
    {
      dimension: "warmth",
      text: "每天回家后，手机和家人谁更容易占据你的前 10 分钟？",
      options: [
        { text: "通常先看手机，家人说话时也容易分心", score: 1 },
        { text: "先和家人对上几句话，再处理手机", score: 3 },
        { text: "看情况，有时家人，有时手机", score: 2 },
        { text: "基本被手机、消息或工作占满，很少抬头", score: 0 }
      ]
    },
    {
      dimension: "warmth",
      text: "外出或看到有意思的东西时，你会不会想到分享给家人？",
      options: [
        { text: "经常会拍下来或讲给家人听", score: 3 },
        { text: "偶尔会，看到特别合适的才分享", score: 2 },
        { text: "很少，觉得没必要或怕对方没反应", score: 1 },
        { text: "基本不分享，家里像少了轻松的话题", score: 0 }
      ]
    },
    {
      dimension: "warmth",
      text: "家里有人做饭、接送、操心琐事时，你通常会怎样？",
      options: [
        { text: "心里知道对方辛苦，但嘴上很少说", score: 2 },
        { text: "会说一句具体感谢，让对方知道自己被看见", score: 3 },
        { text: "容易挑哪里没做好，感谢反而少", score: 1 },
        { text: "觉得这是应该的，甚至常常嫌不够好", score: 0 }
      ]
    },
    {
      dimension: "encouragement",
      text: "让你马上说出家人 5 个优点，你感觉如何？",
      options: [
        { text: "想一想能说出一些，但不算很自然", score: 2 },
        { text: "挺容易，平时也能看见家人的好", score: 3 },
        { text: "缺点更容易冒出来，优点要想很久", score: 1 },
        { text: "几乎说不出来，想到的多是不满", score: 0 }
      ]
    },
    {
      dimension: "encouragement",
      text: "在外人面前聊到家人时，你平常是哪种状态？",
      options: [
        { text: "看场合，有时夸，有时也会说两句问题", score: 2 },
        { text: "多说优点，愿意维护家人的体面", score: 3 },
        { text: "容易吐槽，把家里的不满说出去", score: 1 },
        { text: "常把家人说得很差，越说越失望", score: 0 }
      ]
    },
    {
      dimension: "encouragement",
      text: "家人想和你说件小事，但你正忙时，你通常怎么回应？",
      options: [
        { text: "先不理，想着等忙完再说，但后来有时就忘了", score: 1 },
        { text: "停一下认真听完，或者约一个明确时间再听", score: 3 },
        { text: "会回应几句，但注意力常常不完整", score: 2 },
        { text: "随口敷衍过去，对方后来也不太愿意说了", score: 0 }
      ]
    },
    {
      dimension: "encouragement",
      text: "你表扬家人时，通常是什么样？",
      options: [
        { text: "简单说不错、挺好，但不太具体", score: 2 },
        { text: "很少表扬，总觉得做得好也是应该的", score: 1 },
        { text: "会说具体哪里好，让对方知道自己哪里被认可", score: 3 },
        { text: "更多是挑错，表扬几乎没有", score: 0 }
      ]
    },
    {
      dimension: "repair",
      text: "家里刚吵完一场，过一会儿你通常怎么做？",
      options: [
        { text: "等气消了再说，但经常拖着拖着就算了", score: 1 },
        { text: "主动找机会缓和，说清楚刚才哪里没处理好", score: 3 },
        { text: "会缓和，但通常需要比较久才开口", score: 2 },
        { text: "等对方先低头，不然就一直僵着", score: 0 }
      ]
    },
    {
      dimension: "repair",
      text: "情绪上来的一瞬间，你最常出现哪种反应？",
      options: [
        { text: "说完才后悔，事后知道自己重了", score: 1 },
        { text: "能先停一下，再决定要不要继续说", score: 3 },
        { text: "偶尔能停住，但累的时候还是容易冲", score: 2 },
        { text: "当场就爆出来，话越说越重", score: 0 }
      ]
    },
    {
      dimension: "repair",
      text: "矛盾过去后，你们一般多久能恢复正常说话？",
      options: [
        { text: "两三天才能慢慢恢复，但问题常没说开", score: 1 },
        { text: "当天或很快能恢复，并愿意补一句解释", score: 3 },
        { text: "通常第二天能缓和，但不一定复盘", score: 2 },
        { text: "拖很久或不了了之，下一次又重复", score: 0 }
      ]
    },
    {
      dimension: "repair",
      text: "如果只从今晚开始做一个小改变，你更愿意选哪件事？",
      options: [
        { text: "认真听家人说完一句话，不急着打断", score: 3 },
        { text: "先做到少说一句重话，再慢慢调整", score: 2 },
        { text: "想改变，但暂时还不知道从哪里开始", score: 1 },
        { text: "觉得主要不是自己的问题，暂时不想动", score: 0 }
      ]
    }
  ];

  const PASS_LINE = 60;
  const TRUTH_HINT = "请按最近 30 天最常发生的真实情况选择，不选应该怎么做，只选更像你家的样子。";

  const LEVELS = [
    {
      min: 90,
      title: "幸福基础优秀",
      text: "你的家庭已经有比较稳定的互信、表达和修复基础，接下来适合把这些好习惯沉淀成家里的固定方式。"
    },
    {
      min: 80,
      title: "幸福资源较充足",
      text: "你的家庭有不少积极资源，但仍有个别细节容易掉线，适合做一次针对性的巩固。"
    },
    {
      min: 70,
      title: "基本稳定，但已有短板",
      text: "整体还在可修复范围内，但某个维度已经在提醒你：关系不是突然变差，而是小事长期没有被看见。"
    },
    {
      min: 60,
      title: "刚过及格线，需要尽快修补",
      text: "这说明家庭里还有基础，但内耗已经开始消耗幸福感，越早调整，修复成本越低。"
    },
    {
      min: 0,
      title: "未达及格线，建议优先梳理",
      text: "这不是给家庭贴标签，而是提醒你：有些相处方式需要被照见、被纠正，并尽快获得更清晰的方法。"
    }
  ];

  const ACTIONS = {
    family: "今晚找一个不紧张的时刻，对爱人或家人说一句：刚才我语气有点急，其实我是想把事情说清楚。",
    parentChild: "今晚先不急着问成绩，问孩子一句：今天有没有一件事让你挺累，或者挺开心？",
    warmth: "今晚留出 5 分钟，把手机放下，和家人聊一件今天发生的小事。",
    encouragement: "今晚对家人说一句具体感谢，比如：今天这顿饭辛苦你了，我刚才其实看见了。",
    repair: "如果今天有不愉快，先说一句：刚才我也有点急，我们晚点再好好说。"
  };

  const FOOTER_QUOTE = "如果你不幸福，那长寿就是延长痛苦！";
  const HERO_IMAGE = "./assets/happy-family-hero.jpg";
  const SHOW_QUESTION_DIMENSION_LABEL = false;
  const SHOW_START_ARROW = false;
  const RESULT_TITLE_TEXT = "你的自检结果";
  const EXPERT_ANALYSIS_TITLE = "专家团分析解读";
  const SALON_CTA_TEXT = "我要幸福";
  const LEAD_PAGE_TITLE = "我申请参加幸福沙龙";
  const LEAD_PAGE_COPY = "不是一阵子解决问题，而是学习一辈子解决问题的幸福能力。找到源头、看清原因，你才会真正知道怎么解决问题。";
  const SALON_PROMISE = "你想要解决的问题其实很简单，参加完免费幸福沙龙，你自己就能找到问题的原因，自己轻松解决。";
  const SALON_QUESTION_ONE = "想一阵子解决问题，还是一辈子解决问题？";
  const SALON_QUESTION_TWO = "想要一阵子幸福，还是一辈子幸福？";
  const SALON_REASON_LINE = "找到源头，看清原因，你才能真正知道怎么解决问题。";
  const SALON_SCREENSHOT_NOTE = "截图本页面发送给驿站主老师，申请参加免费幸福沙龙";
  const SALON_APPLICATION_NOTES = [
    "因为参加人数较多，申请幸福沙龙需要向驿站主老师提前排队预约。",
    "我们将以幸福沙龙的方式共同学习，全程 40-60 分钟，免费参与，严禁打广告、促销。",
    "老师会用 6 岁孩子都能听懂的语言和互动游戏，帮助你看清问题、找到原因。",
    "为了保证沙龙效果，每次只教 2 个人，参与的人都是咱们同龄人、普通爸妈。"
  ];
  const SALON_APPLICATION_NOTE = SALON_APPLICATION_NOTES.join("");
  const RADAR_RING_COUNT = 5;
  const EXPERT_SCORE_BANDS = [
    {
      min: 90,
      range: "90-100",
      title: "把幸福变成家里的稳定传统",
      headline: "这个分数说明你家已经有比较稳定的幸福底盘，接下来不是从零修补，而是把好习惯变成可以长期延续的家庭传统。",
      discovery: "这次自检照见的是：你已经会倾听、会表达，也有修复关系的意识。真正值得留意的，是别让好状态只靠心情维持。",
      risk: "如果没有继续沉淀方法，优秀状态也可能在压力、忙碌和长期疲惫里慢慢掉线。",
      root: "根本开关在于把偶尔做得好，变成家里人人都知道、都愿意参与的小规则。",
      next: "适合参加免费幸福沙龙，把已有经验整理成家庭幸福方法，让优势稳定下来，也能帮助更多家庭。"
    },
    {
      min: 80,
      range: "80-89",
      title: "幸福资源充足，但需要精细打磨",
      headline: "这个分数说明家庭里有爱、有基础，也有不少积极互动。现在最重要的不是大修，而是看见那些容易被忽略的小缺口。",
      discovery: "自检提醒你：幸福感已经有资源，但某个维度会在关键时刻掉链子，比如忙的时候少听一句，累的时候少给一个好脸色。",
      risk: "如果这些小缺口长期不补，会从偶尔的小不舒服，慢慢变成固定的抱怨点。",
      root: "根本原因通常不是不爱，而是表达、倾听和修复没有形成稳定动作。",
      next: "适合找驿站主申请参加一场免费幸福沙龙，把短板补上，让家庭状态更稳。"
    },
    {
      min: 70,
      range: "70-79",
      title: "整体可修复，短板已经在提醒",
      headline: "这个分数说明家里还有基础，但幸福感已经开始被某些习惯消耗。现在调整，成本最低。",
      discovery: "自检照见的是：不是所有地方都糟，而是有一个维度正在反复制造摩擦。",
      risk: "如果继续靠忍、拖、讲道理解决，问题容易从一件事变成一种相处模式。",
      root: "根本开关多半在自己的回应方式：先听见，再表达；先修复，再要求。",
      next: "建议找驿站主申请参加免费幸福沙龙，先找到最该改的一个动作。"
    },
    {
      min: 60,
      range: "60-69",
      title: "刚过及格线，需要尽快修补",
      headline: "这个分数说明家庭还有连接，但内耗已经比较明显。越早调整，越容易把关系拉回来。",
      discovery: "自检照见的是：家里不是没有爱，而是很多爱被急躁、敷衍、冷处理挡住了。",
      risk: "如果不处理，家人会越来越习惯不说、不问、不期待，幸福感会继续往下掉。",
      root: "根本原因常常不是某一个人坏，而是大家都缺少一套能修复关系的方法。",
      next: "建议尽快找驿站主申请免费幸福沙龙，把问题讲清楚，把方向看清楚。"
    },
    {
      min: 50,
      range: "50-59",
      title: "低于及格线，关系正在发出信号",
      headline: "这个分数不是吓人，而是在提醒：家庭幸福感已经被一些日常习惯明显消耗了。",
      discovery: "自检照见的是：你可能已经感觉到累、委屈、失望，但一直没有真正停下来梳理。",
      risk: "如果继续拖着，问题会从情绪不舒服，变成沟通不愿意、关系不亲近。",
      root: "根本开关在于先承认问题和自己有关，才有可能接受对的方法。",
      next: "建议找驿站主申请免费幸福沙龙，先从一个最容易改变的场景开始。"
    },
    {
      min: 40,
      range: "40-49",
      title: "红灯明显，需要有人带着梳理",
      headline: "这个分数说明家庭里已经有比较强的内耗感，单靠自己硬撑会很辛苦。",
      discovery: "自检照见的是：有些问题并不是突然发生，而是很多次没被好好处理的场景积累起来了。",
      risk: "如果不解决，沉默、顶撞、冷战、失望会越来越常见，家里会越来越难放松。",
      root: "根本原因常常在于情绪修复能力不足，越急着证明自己对，关系越容易受伤。",
      next: "建议优先找驿站主申请免费幸福沙龙，让一个成长环境托住你开始改变。"
    },
    {
      min: 30,
      range: "30-39",
      title: "关系消耗较重，越拖越难修",
      headline: "这个分数说明家庭幸福感已经处在比较吃力的阶段，需要把问题认真看见。",
      discovery: "自检照见的是：家里可能已经形成了固定循环，一开口就冲突，一沉默就更远。",
      risk: "如果继续按原方式相处，孩子、伴侣或家人会越来越防御，关系会更难靠近。",
      root: "根本开关在于先停下旧反应，学习新的倾听、表达和修复方式。",
      next: "建议马上找驿站主申请免费幸福沙龙，不要再一个人反复消耗。"
    },
    {
      min: 20,
      range: "20-29",
      title: "幸福感严重透支，需要先止损",
      headline: "这个分数说明家庭里的压力和失望已经比较重，先别急着责备谁，先把方向找回来。",
      discovery: "自检照见的是：很多场景已经不是简单沟通问题，而是关系安全感在下降。",
      risk: "如果不处理，家人之间会越来越像室友，甚至一说话就互相刺痛。",
      root: "根本原因往往不是没有爱，而是不知道如何把爱表达成让对方能接住的方式。",
      next: "建议尽快找驿站主申请免费幸福沙龙，先做一次温和梳理。"
    },
    {
      min: 10,
      range: "10-19",
      title: "需要外部支持，先把问题说出来",
      headline: "这个分数说明你可能已经很累了，很多时候不是不想改变，而是不知道从哪里开始。",
      discovery: "自检照见的是：家里的沟通、温度、鼓励和修复都需要重新建立。",
      risk: "如果继续独自硬扛，容易越来越麻木，甚至觉得现状只能这样。",
      root: "根本开关在于先进入一个有老师、有方法、有同伴的环境，重新看见可改变的入口。",
      next: "建议找驿站主申请免费幸福沙龙，先让你的真实处境被看见。"
    },
    {
      min: 0,
      range: "0-9",
      title: "先不要放弃，第一步是被看见",
      headline: "这个分数说明你现在最需要的不是被评价，而是被理解、被支持，并重新找到一个可行动的起点。",
      discovery: "自检照见的是：家庭幸福感已经被长期习惯严重消耗，你可能已经不知道怎么开口才有用。",
      risk: "如果完全不处理，关系会继续冷下去，自己也会越来越失去力量。",
      root: "根本开关是先承认：旧方式走不通了，需要换环境、换方法、换行动。",
      next: "建议马上找驿站主申请免费幸福沙龙，先从被看见开始。"
    }
  ];

  const state = {
    screen: "intro",
    current: 0,
    answers: [],
    error: "",
    lead: {
      name: "",
      contact: "",
      concern: "亲子沟通"
    }
  };

  function emptyDimensionScores() {
    const maxByKey = Object.fromEntries(DIMENSIONS.map((dimension) => [dimension.key, 0]));
    QUESTIONS.forEach((question) => {
      const maxOptionScore = Math.max(...question.options.map((option) => option.score));
      maxByKey[question.dimension] += maxOptionScore;
    });

    return DIMENSIONS.map((dimension) => ({
      key: dimension.key,
      label: dimension.label,
      score: 0,
      max: maxByKey[dimension.key] || 0,
      percentScore: 0
    }));
  }

  function toPercent(score, max) {
    return max > 0 ? Math.round((score / max) * 100) : 0;
  }

  function getLevel(percentScore) {
    return LEVELS.find((level) => percentScore >= level.min);
  }

  function getExpertBand(percentScore) {
    const score = Math.max(0, Math.min(100, Number(percentScore) || 0));
    return EXPERT_SCORE_BANDS.find((band) => score >= band.min) || EXPERT_SCORE_BANDS[EXPERT_SCORE_BANDS.length - 1];
  }

  function calculateResult(answerIndexes) {
    const safeAnswers = Array.isArray(answerIndexes) ? answerIndexes : [];
    const dimensions = emptyDimensionScores();
    const scoreByKey = Object.fromEntries(dimensions.map((dimension) => [dimension.key, dimension]));

    QUESTIONS.forEach((question, questionIndex) => {
      const answerIndex = safeAnswers[questionIndex];
      const option = question.options[answerIndex];
      if (option) {
        scoreByKey[question.dimension].score += option.score;
      }
    });

    dimensions.forEach((dimension) => {
      dimension.percentScore = toPercent(dimension.score, dimension.max);
    });

    const rawScore = dimensions.reduce((sum, dimension) => sum + dimension.score, 0);
    const rawMaxScore = dimensions.reduce((sum, dimension) => sum + dimension.max, 0);
    const totalScore = toPercent(rawScore, rawMaxScore);
    const indexScore = totalScore;
    const strongest = dimensions.slice().sort((a, b) => b.percentScore - a.percentScore)[0];
    const weakest = dimensions.slice().sort((a, b) => a.percentScore - b.percentScore)[0];
    const distance = Math.abs(totalScore - PASS_LINE);

    return {
      rawScore,
      rawMaxScore,
      totalScore,
      indexScore,
      passLine: PASS_LINE,
      scoreDistance: distance,
      scoreDistanceText: totalScore >= PASS_LINE ? `已超过及格线 ${distance} 分` : `距离及格线还差 ${distance} 分`,
      dimensions,
      strongest,
      weakest,
      level: getLevel(indexScore),
      action: ACTIONS[weakest.key]
    };
  }

  function getDimensionStatus(score, max) {
    const percent = toPercent(score, max);
    if (percent < PASS_LINE) {
      return {
        key: "red",
        label: "红灯预警",
        hint: "已经低于及格线，建议优先处理"
      };
    }
    if (percent < 80) {
      return {
        key: "yellow",
        label: "黄灯调整",
        hint: "还在可修复区，越早越省力"
      };
    }
    return {
      key: "green",
      label: "绿灯稳定",
      hint: "基础较稳，继续保持"
    };
  }

  function getRadarLabel(label) {
    const match = String(label).match(/^(.+?)(（.+）)$/);
    if (!match) {
      return { short: String(label), detail: "" };
    }
    return { short: match[1], detail: match[2] };
  }

  function validateLead(lead) {
    const name = (lead.name || "").trim();
    const contact = (lead.contact || "").trim();
    if (!name) {
      return { valid: false, message: "请留下一个称呼，方便老师联系你申请解读。" };
    }
    if (!contact) {
      return { valid: false, message: "请填写微信或手机号，用于老师联系你参加免费幸福沙龙。" };
    }
    if (contact.length < 3) {
      return { valid: false, message: "联系方式再确认一下，至少填写 3 个字符。" };
    }
    return { valid: true, message: "" };
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getAppRoot() {
    return document.querySelector("#app");
  }

  function setScreen(screen) {
    state.screen = screen;
    state.error = "";
    render();
  }

  function getPreviewAnswers() {
    return QUESTIONS.map((question, index) => {
      const targetScore = [2, 1, 3, 0][index % 4];
      const targetIndex = question.options.findIndex((option) => option.score === targetScore);
      return targetIndex >= 0 ? targetIndex : 0;
    });
  }

  function applyPreviewFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const preview = params.get("preview");
    if (preview !== "result" && preview !== "salon") {
      return;
    }
    state.screen = preview;
    state.current = QUESTIONS.length - 1;
    state.answers = getPreviewAnswers();
    state.error = "";
  }

  function focusPreviewSection() {
    const params = new URLSearchParams(window.location.search);
    const focus = params.get("focus");
    if (focus !== "salon") {
      return;
    }
    window.setTimeout(() => {
      document.querySelector(".salon-application, .salon-page-title")?.scrollIntoView({ block: "center" });
    }, 80);
  }

  function selectOption(optionIndex) {
    state.answers[state.current] = optionIndex;
    state.error = "";
    render();
  }

  function nextQuestion() {
    if (state.answers[state.current] === undefined) {
      state.error = "选一个最像你家的情况就好。";
      render();
      return;
    }

    if (state.current === QUESTIONS.length - 1) {
      state.screen = "generating";
      render();
      window.setTimeout(() => setScreen("result"), 450);
      return;
    }

    state.current += 1;
    state.error = "";
    render();
  }

  function prevQuestion() {
    state.current = Math.max(0, state.current - 1);
    state.error = "";
    render();
  }

  function renderMotto() {
    return `<p class="motto-line"><span>${FOOTER_QUOTE}</span></p>`;
  }

  function renderIntro(root) {
    root.innerHTML = `
      <section class="app-shell intro-shell">
        <div class="surface intro-surface">
          <div class="brand-row">
            <img class="brand-logo" src="./assets/happiness-station-icon.png" alt="大春之道幸福驿站">
            <div class="brand-copy">
              <span>大春之道 · 幸福驿站</span>
              <small>让幸福回归每一个家庭</small>
            </div>
          </div>
          <div class="simple-hero">
            <h1 class="home-title">幸福自检表</h1>
            <p class="lead-copy">用 20 个真实生活场景，安静看见家的幸福状态。</p>
          </div>
          <button class="primary-btn start-btn" data-action="start">
            <span>开始自检</span>
          </button>
          <p class="fine-print">本测试用于家庭幸福感自我观察，不作为医学、心理诊断或治疗建议。</p>
          ${renderMotto()}
        </div>
      </section>
    `;
  }

  function renderQuestion(root) {
    const question = QUESTIONS[state.current];
    const progress = Math.round(((state.current + 1) / QUESTIONS.length) * 100);

    root.innerHTML = `
      <section class="app-shell">
        <div class="surface">
          <div class="progress-label">
            <span>第 ${state.current + 1} 题 / 共 ${QUESTIONS.length} 题</span>
            <span>${progress}%</span>
          </div>
          <div class="progress-track" aria-hidden="true">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <h2>${question.text}</h2>
          <p class="truth-hint">${TRUTH_HINT}</p>
          <div class="option-list">
            ${question.options.map((option, index) => `
              <button class="option-btn ${state.answers[state.current] === index ? "selected" : ""}" data-option="${index}" type="button">
                <span>${escapeHtml(option.text)}</span>
              </button>
            `).join("")}
          </div>
          <div class="error" role="status">${state.error}</div>
          <div class="button-row">
            ${state.current > 0 ? '<button class="secondary-btn" data-action="prev" type="button">上一题</button>' : ""}
            <button class="primary-btn" data-action="next" type="button">${state.current === QUESTIONS.length - 1 ? "生成结果" : "下一题"}</button>
          </div>
          ${renderMotto()}
        </div>
      </section>
    `;
  }

  function renderGenerating(root) {
    root.innerHTML = `
      <section class="app-shell">
        <div class="surface compact-state">
          <div class="pulse" aria-hidden="true"></div>
          <div class="eyebrow">正在生成</div>
          <h2>正在整理你的五维幸福能力图谱</h2>
          <p>结果会先给你一个清晰摘要，再给出适合下一步参加沙龙的建议。</p>
          ${renderMotto()}
        </div>
      </section>
    `;
  }

  function renderRadar(dimensions) {
    const center = 80;
    const maxRadius = 52;
    const labelPositions = ["top", "right-top", "right-bottom", "left-bottom", "left-top"];
    const ringPoints = (radius) => dimensions.map((dimension, index) => {
      const angle = -Math.PI / 2 + index * ((Math.PI * 2) / dimensions.length);
      return `${center + Math.cos(angle) * radius},${center + Math.sin(angle) * radius}`;
    }).join(" ");
    const points = dimensions.map((dimension, index) => {
      const angle = -Math.PI / 2 + index * ((Math.PI * 2) / dimensions.length);
      const radius = maxRadius * (dimension.score / dimension.max);
      return `${center + Math.cos(angle) * radius},${center + Math.sin(angle) * radius}`;
    }).join(" ");
    const rings = Array.from({ length: RADAR_RING_COUNT }, (_, index) => {
      const ratio = (RADAR_RING_COUNT - index) / RADAR_RING_COUNT;
      return { ratio, points: ringPoints(maxRadius * ratio) };
    });

    return `
      <div class="radar-stage" aria-label="五维幸福能力图谱">
        <svg class="radar" viewBox="0 0 160 160" role="img" aria-label="五维蛛网图">
          <defs>
            <linearGradient id="radarFill" x1="28" y1="22" x2="132" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#49b9ff" stop-opacity="0.48"></stop>
              <stop offset="0.28" stop-color="#7bd66f" stop-opacity="0.38"></stop>
              <stop offset="0.58" stop-color="#ffd45f" stop-opacity="0.36"></stop>
              <stop offset="0.82" stop-color="#ff8a56" stop-opacity="0.32"></stop>
              <stop offset="1" stop-color="#e84a8a" stop-opacity="0.24"></stop>
            </linearGradient>
            <linearGradient id="radarStroke" x1="42" y1="24" x2="122" y2="132" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="#49b9ff"></stop>
              <stop offset="0.24" stop-color="#7bd66f"></stop>
              <stop offset="0.52" stop-color="#ffd45f"></stop>
              <stop offset="0.78" stop-color="#ff764b"></stop>
              <stop offset="1" stop-color="#d85bd6"></stop>
            </linearGradient>
            <radialGradient id="radarAura" cx="50%" cy="48%" r="58%">
              <stop offset="0" stop-color="#ffffff" stop-opacity="0.92"></stop>
              <stop offset="0.36" stop-color="#49b9ff" stop-opacity="0.14"></stop>
              <stop offset="0.62" stop-color="#7bd66f" stop-opacity="0.13"></stop>
              <stop offset="1" stop-color="#ff8a56" stop-opacity="0.08"></stop>
            </radialGradient>
          </defs>
          <circle cx="${center}" cy="${center}" r="${maxRadius + 12}" class="radar-aura"></circle>
          ${rings.map((ring, index) => `
            <polygon points="${ring.points}" class="radar-grid radar-grid-${index === 0 ? "outer" : "inner"}"></polygon>
          `).join("")}
          ${dimensions.map((dimension, index) => {
            const angle = -Math.PI / 2 + index * ((Math.PI * 2) / dimensions.length);
            const x = center + Math.cos(angle) * maxRadius;
            const y = center + Math.sin(angle) * maxRadius;
            return `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" class="radar-spoke"></line>`;
          }).join("")}
          <polygon points="${points}" class="radar-shape"></polygon>
          ${dimensions.map((dimension, index) => {
            const angle = -Math.PI / 2 + index * ((Math.PI * 2) / dimensions.length);
            const radius = maxRadius * (dimension.score / dimension.max);
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            const status = getDimensionStatus(dimension.score, dimension.max);
            return `
              <circle cx="${x}" cy="${y}" r="7.2" class="radar-halo status-${status.key}"></circle>
              <circle cx="${x}" cy="${y}" r="3.8" class="radar-dot status-${status.key}"></circle>
            `;
          }).join("")}
        </svg>
        ${dimensions.map((dimension, index) => {
          const status = getDimensionStatus(dimension.score, dimension.max);
          const radarLabel = getRadarLabel(dimension.label);
          return `
            <span class="radar-label radar-label-${labelPositions[index]} status-${status.key}">
              <i aria-hidden="true"></i>
              <span>${radarLabel.short}</span><em>${radarLabel.detail}</em>
            </span>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderDimensions(dimensions) {
    return dimensions.map((dimension) => {
      const percent = dimension.percentScore;
      const status = getDimensionStatus(dimension.score, dimension.max);
      return `
        <div class="dimension-row status-${status.key} dimension-${dimension.key}">
          <div class="dimension-top">
            <span class="dimension-name">${dimension.label}</span>
            <span class="dimension-score">${dimension.percentScore} 分</span>
          </div>
          <div class="traffic-line">
            <span class="traffic-dot" aria-hidden="true"></span>
            <strong>${status.label}</strong>
            <span>${status.hint}</span>
          </div>
          <div class="bar" aria-hidden="true"><span style="width: ${percent}%"></span></div>
        </div>
      `;
    }).join("");
  }

  function renderExpertAnalysis(result) {
    const band = getExpertBand(result.totalScore);
    return `
      <section class="expert-analysis" aria-label="${EXPERT_ANALYSIS_TITLE}">
        <div class="expert-head">
          <h3><span>${EXPERT_ANALYSIS_TITLE}</span></h3>
          <div class="score-band-pill">${band.range} 分档 · ${band.title}</div>
          <p>${band.headline}</p>
        </div>
        <div class="expert-grid">
          <div class="expert-card">
            <strong>镜子照见了哪里</strong>
            <p>${band.discovery} 其中 ${result.weakest.label} 是当前最需要被看见的地方，得分为 ${result.weakest.percentScore} 分。</p>
          </div>
          <div class="expert-card">
            <strong>不处理会长成什么</strong>
            <p>${band.risk}</p>
          </div>
          <div class="expert-card">
            <strong>真正的开关在哪里</strong>
            <p>${band.root}</p>
          </div>
          <div class="expert-card expert-next">
            <strong>把改变放进环境里</strong>
            <p>${band.next}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderSalonApplication(result) {
    return `
      <section class="salon-application salon-guidance" aria-label="${LEAD_PAGE_TITLE}">
        <div class="salon-promise-card">
          <p class="salon-promise">${SALON_PROMISE}</p>
          <button class="salon-final-cta" data-action="salon" type="button">${SALON_CTA_TEXT}</button>
        </div>
      </section>
    `;
  }

  function renderSalonPage(root) {
    root.innerHTML = `
      <section class="app-shell salon-page-shell">
        <div class="surface salon-page-surface">
          <h1 class="salon-page-title">${LEAD_PAGE_TITLE}</h1>
          <div class="salon-purpose-list salon-page-purpose">
            <span><b>找到源头</b><small>看见问题从哪里开始</small></span>
            <span><b>看清原因</b><small>知道为什么反复发生</small></span>
            <span><b>自己会解决</b><small>收获一辈子的幸福能力</small></span>
          </div>
          <div class="salon-marker salon-page-marker">
            <strong>下一步很简单</strong>
            <p>${LEAD_PAGE_COPY}</p>
          </div>
          <div class="salon-brief">
            <strong>申请说明</strong>
            ${SALON_APPLICATION_NOTES.map((note) => `<p>${note}</p>`).join("")}
          </div>
          <div class="salon-info-grid" aria-label="沙龙规则">
            <span><b>40-60 分钟</b><small>共同学习，不讲大道理</small></span>
            <span><b>免费参与</b><small>严禁广告、促销</small></span>
            <span><b>每次 2 人</b><small>同龄人、普通爸妈</small></span>
            <span><b>简单互动</b><small>6 岁孩子也能听懂</small></span>
          </div>
          <p class="salon-simple-line">用简单的话和互动游戏，帮你看清问题，找到原因，开始自己解决。</p>
          <p class="salon-screenshot-note">${SALON_SCREENSHOT_NOTE}</p>
          <div class="button-row">
            <button class="secondary-btn" data-action="result" type="button">返回自检结果</button>
          </div>
          ${renderMotto()}
        </div>
      </section>
    `;
  }

  function renderResult(root) {
    const result = calculateResult(state.answers);
    root.innerHTML = `
      <section class="app-shell result-shell">
        <div class="surface">
          <div class="result-title">${RESULT_TITLE_TEXT}</div>
          <div class="result-head">
            <div>
              <h2>家庭幸福能力指数</h2>
              <div class="result-score">${result.totalScore}<span>/100</span></div>
              <div class="score-distance ${result.totalScore >= result.passLine ? "score-pass" : "score-alert"}">${result.scoreDistanceText}</div>
              <p class="result-copy"><strong>${result.level.title}</strong>：${result.level.text}</p>
              <p class="mirror-copy">这份自检不是给家庭贴标签，而是像一面镜子：先照见习惯里的偏差，才更容易接受对的方法，开始真正行动。</p>
            </div>
            <div class="chart-wrap">${renderRadar(result.dimensions)}</div>
          </div>
          <div class="dimension-list">${renderDimensions(result.dimensions)}</div>
          <div class="insight-list">
            <div class="insight-line">
              <strong>你的优势</strong>
              <p>${result.strongest.label} 是你当前比较有基础的部分，可以继续稳定下来。</p>
            </div>
            <div class="insight-line">
              <strong>当前卡点</strong>
              <p>${result.weakest.label} 当前得分为 ${result.weakest.percentScore} 分，更需要被看见。先别急着责备自己，先找到一个可以改的动作。</p>
            </div>
          </div>
          ${renderExpertAnalysis(result)}
          ${renderSalonApplication(result)}
          <div class="button-row">
            <button class="secondary-btn" data-action="restart" type="button">重新测一次</button>
          </div>
          ${renderMotto()}
        </div>
      </section>
    `;
  }

  function render() {
    const root = getAppRoot();
    if (!root) {
      return;
    }
    if (state.screen === "intro") {
      renderIntro(root);
    }
    if (state.screen === "question") {
      renderQuestion(root);
    }
    if (state.screen === "generating") {
      renderGenerating(root);
    }
    if (state.screen === "result") {
      renderResult(root);
    }
    if (state.screen === "salon") {
      renderSalonPage(root);
    }
  }

  document.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-option]");
    const actionButton = event.target.closest("[data-action]");

    if (optionButton) {
      selectOption(Number(optionButton.dataset.option));
    }

    if (!actionButton) {
      return;
    }

    const action = actionButton.dataset.action;
    if (action === "start" || action === "restart") {
      state.screen = action === "start" ? "question" : "intro";
      state.current = 0;
      state.answers = [];
      state.error = "";
      state.lead = {
        name: "",
        contact: "",
        concern: "亲子沟通"
      };
      render();
    }
    if (action === "next") {
      nextQuestion();
    }
    if (action === "prev") {
      prevQuestion();
    }
    if (action === "salon") {
      setScreen("salon");
    }
    if (action === "result") {
      setScreen("result");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    applyPreviewFromQuery();
    render();
    focusPreviewSection();
  });

  window.HappinessDemo = {
    DIMENSIONS,
    QUESTIONS,
    LEVELS,
    ACTIONS,
    PASS_LINE,
    TRUTH_HINT,
    FOOTER_QUOTE,
    HERO_IMAGE,
    SHOW_QUESTION_DIMENSION_LABEL,
    SHOW_START_ARROW,
    RESULT_TITLE_TEXT,
    EXPERT_ANALYSIS_TITLE,
    EXPERT_SCORE_BANDS,
    SALON_CTA_TEXT,
    LEAD_PAGE_TITLE,
    LEAD_PAGE_COPY,
    SALON_PROMISE,
    SALON_QUESTION_ONE,
    SALON_QUESTION_TWO,
    SALON_REASON_LINE,
    SALON_SCREENSHOT_NOTE,
    SALON_APPLICATION_NOTES,
    SALON_APPLICATION_NOTE,
    RADAR_RING_COUNT,
    getRadarLabel,
    getExpertBand,
    renderExpertAnalysis,
    calculateResult,
    getDimensionStatus,
    validateLead
  };
})();
