/* ================= DATA ================= */

const LINES = [
"I sit in the top of the wood, my eyes closed.",
"Inaction, no falsifying dream",
"Between my hooked head and hooked feet:",
"Or in sleep rehearse perfect kills and eat.",
"The convenience of the high trees!",
"The air's buoyancy and the sun's ray",
"Are of advantage to me;",
"And the earth's face upward for my inspection.",
"My feet are locked upon the rough bark.",
"It took the whole of Creation",
"To produce my foot, my each feather:",
"Now I hold Creation in my foot",
"Or fly up, and revolve it all slowly –",
"I kill where I please because it is all mine.",
"There is no sophistry in my body:",
"My manners are tearing off heads –",
"The allotment of death.",
"For the one path of my flight is direct",
"Through the bones of the living.",
"No arguments assert my right:",
"The sun is behind me.",
"Nothing has changed since I began.",
"My eye has permitted no change.",
"I am going to keep things like this."
];

// group line indices into the 6 quatrain stanzas
const STANZAS = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[16,17,18,19],[20,21,22,23]];

const LINE_BN = [
"আমি বনের চূড়ায় বসে আছি, আমার চোখ বন্ধ।",
"কোনো কাজ নেই, কোনো মিথ্যা স্বপ্নও নেই",
"আমার বাঁকানো মাথা আর বাঁকানো পায়ের মাঝখানে:",
"অথবা ঘুমের মধ্যেই আমি নিখুঁত শিকার আর ভক্ষণের মহড়া দিই।",
"উঁচু গাছের কী সুবিধা!",
"বাতাসের ভাসমানতা আর সূর্যের রশ্মি",
"আমার জন্য অনুকূল;",
"আর পৃথিবীর মুখ আমার পরিদর্শনের জন্য ঊর্ধ্বমুখী।",
"আমার পা রুক্ষ বাকলের উপর দৃঢ়ভাবে আটকানো।",
"সমগ্র সৃষ্টি ব্যয় হয়েছিল",
"আমার পা, আমার প্রতিটি পালক তৈরি করতে:",
"এখন আমি সৃষ্টিকে আমার পায়ে ধরে রেখেছি",
"অথবা উড়ে গিয়ে ধীরে ধীরে সবকিছু ঘুরিয়ে দেখি —",
"আমি যেখানে ইচ্ছা হত্যা করি, কারণ সবকিছুই আমার।",
"আমার শরীরে কোনো কূটতর্ক নেই:",
"আমার আচরণ হলো মাথা ছিঁড়ে ফেলা —",
"মৃত্যুর বণ্টন।",
"কারণ আমার উড়ানের একমাত্র পথ সরাসরি",
"জীবিতদের হাড়ের ভেতর দিয়ে।",
"কোনো যুক্তিই আমার অধিকার প্রমাণ করে না:",
"সূর্য আমার পেছনে।",
"আমি শুরু করার পর থেকে কিছুই বদলায়নি।",
"আমার চোখ কোনো পরিবর্তনের অনুমতি দেয়নি।",
"আমি এভাবেই সবকিছু ধরে রাখতে চাই।"
];

// simple explanation shown per stanza (EN + BN)
const STANZA_EXPLAIN = [
{en:"The hawk sits at the very top of the forest, completely calm and confident. It does not daydream or doubt itself — even in sleep it is thinking about hunting.",
 bn:"বাজপাখিটি বনের সর্বোচ্চ স্থানে বসে সম্পূর্ণ শান্ত ও আত্মবিশ্বাসী। তার কোনো দ্বিধা নেই — ঘুমের মধ্যেও সে শিকারের কথাই ভাবে।"},
{en:"The hawk enjoys every advantage nature gives it — height, air and sunlight — and sees the whole earth below as something to inspect and control.",
 bn:"প্রকৃতির দেওয়া উচ্চতা, বাতাস ও সূর্যালোক—সবকিছুরই সুবিধা বাজপাখি ভোগ করে, এবং নিচের পুরো পৃথিবীকে সে পরিদর্শনের বিষয় বলে মনে করে।"},
{en:"The hawk feels that all of creation existed just to produce its perfect body, and now it holds that same creation under its control.",
 bn:"বাজপাখির মনে হয়, সমগ্র সৃষ্টি তার নিখুঁত দেহ তৈরির জন্যই হয়েছিল, আর এখন সেই সৃষ্টিকেই সে নিয়ন্ত্রণ করছে।"},
{en:"The hawk claims the right to kill anything it wants, since everything belongs to it. It has no guilt or deceptive reasoning — killing is simply its nature.",
 bn:"বাজপাখি দাবি করে যে সে যা খুশি হত্যা করার অধিকার রাখে, কারণ সবকিছুই তার। তার কোনো অপরাধবোধ বা ছলনা নেই — হত্যা তার কাছে স্বাভাবিক।"},
{en:"Death is something the hawk simply assigns to others. Its flight path goes straight through living creatures, and no argument can question its authority.",
 bn:"মৃত্যু বণ্টন করা বাজপাখির কাছে খুবই স্বাভাবিক ব্যাপার। তার উড়ানের পথ জীবিত প্রাণীদের ভেতর দিয়েই যায়, আর কোনো যুক্তিই তার ক্ষমতাকে চ্যালেঞ্জ করতে পারে না।"},
{en:"Nothing has changed since the hawk began its rule, and it intends to keep the world exactly as it is — a final declaration of total, unquestioned power.",
 bn:"বাজপাখি যখন থেকে শাসন শুরু করেছে, তখন থেকে কিছুই বদলায়নি, আর সে চায় পৃথিবী এভাবেই থাকুক — এটি তার চূড়ান্ত ও নিরঙ্কুশ ক্ষমতার ঘোষণা।"}
];

// important phrases to underline: lineIndex -> [startWordIdx, endWordIdx] (inclusive, 0-based, split by space)
const IMPORTANT_RANGES = {0:[3,7], 3:[4,5], 11:[2,6], 13:[0,4], 16:[0,3], 19:[0,4], 21:[0,2], 23:[0,7]};

// word dictionary: lowercase word (no punctuation) -> {bn, pos, ctx, pron}
const DICT = {
 "i":{bn:"আমি",pos:"pronoun"},
 "sit":{bn:"বসে থাকা",pos:"verb",ctx:"হাক নিজের অবস্থান সম্পর্কে সম্পূর্ণ নিশ্চিত।"},
 "in":{bn:"মধ্যে",pos:"preposition"},
 "the":{bn:"(নির্দিষ্ট বাচক শব্দ)",pos:"article"},
 "top":{bn:"চূড়া / সর্বোচ্চ স্থান",pos:"noun",ctx:"বনের সবচেয়ে উঁচু স্থান, যা প্রতীকীভাবে ক্ষমতা বোঝায়।"},
 "of":{bn:"এর",pos:"preposition"},
 "wood":{bn:"বন / জঙ্গল",pos:"noun",pron:"উড",ctx:"হাক সর্বোচ্চ স্থান থেকে গোটা বনকে নিয়ন্ত্রণ করে বলে মনে করে।"},
 "my":{bn:"আমার",pos:"pronoun"},
 "eyes":{bn:"চোখ",pos:"noun"},
 "closed":{bn:"বন্ধ",pos:"adjective"},
 "inaction":{bn:"নিষ্ক্রিয়তা / কোনো কাজ না করা",pos:"noun",ctx:"হাক সম্পূর্ণ স্থির, তবু সতর্ক ও নিয়ন্ত্রণে আছে।"},
 "no":{bn:"না / কোনো নেই",pos:"determiner"},
 "falsifying":{bn:"মিথ্যা তৈরি করা",pos:"adjective",ctx:"হাকের মনে কোনো ভ্রান্ত বা মিথ্যা কল্পনা নেই।"},
 "dream":{bn:"স্বপ্ন",pos:"noun"},
 "between":{bn:"মাঝখানে",pos:"preposition"},
 "hooked":{bn:"বাঁকানো / আঁকশিযুক্ত",pos:"adjective",ctx:"শিকারের জন্য উপযোগী হাকের বাঁকানো মাথা ও পা।"},
 "head":{bn:"মাথা",pos:"noun"},
 "and":{bn:"এবং",pos:"conjunction"},
 "feet":{bn:"পা (বহুবচন)",pos:"noun"},
 "or":{bn:"অথবা",pos:"conjunction"},
 "sleep":{bn:"ঘুম",pos:"noun"},
 "rehearse":{bn:"মহড়া দেওয়া / অনুশীলন করা",pos:"verb",ctx:"ঘুমের মধ্যেও হাক শিকারের অনুশীলন করে — তার প্রবৃত্তি কখনো থামে না।"},
 "perfect":{bn:"নিখুঁত",pos:"adjective"},
 "kills":{bn:"হত্যা / শিকার (বিশেষ্য)",pos:"noun",ctx:"'নিখুঁত শিকার' — হাকের দক্ষতা ও নিষ্ঠুরতার প্রতীক।"},
 "eat":{bn:"খাওয়া",pos:"verb"},
 "convenience":{bn:"সুবিধা",pos:"noun",ctx:"উঁচু গাছ হাকের জন্য কৌশলগত সুবিধা দেয়।"},
 "high":{bn:"উঁচু",pos:"adjective"},
 "trees":{bn:"গাছ",pos:"noun"},
 "air's":{bn:"বাতাসের",pos:"noun (possessive)"},
 "buoyancy":{bn:"ভাসমানতা / উত্তোলন ক্ষমতা",pos:"noun",ctx:"বাতাস হাককে উড়তে সাহায্য করে — প্রকৃতি তার পক্ষে।"},
 "sun's":{bn:"সূর্যের",pos:"noun (possessive)"},
 "ray":{bn:"রশ্মি",pos:"noun"},
 "are":{bn:"আছে (হওয়া ক্রিয়া)",pos:"verb"},
 "advantage":{bn:"সুবিধা",pos:"noun"},
 "to":{bn:"প্রতি",pos:"preposition"},
 "me":{bn:"আমাকে",pos:"pronoun"},
 "earth's":{bn:"পৃথিবীর",pos:"noun (possessive)"},
 "face":{bn:"মুখ / ভূপৃষ্ঠ",pos:"noun"},
 "upward":{bn:"ঊর্ধ্বমুখী",pos:"adverb"},
 "for":{bn:"জন্য",pos:"preposition"},
 "inspection":{bn:"পরিদর্শন",pos:"noun",ctx:"হাক মনে করে গোটা পৃথিবী তার পরিদর্শনের জন্য উন্মুক্ত।"},
 "locked":{bn:"দৃঢ়ভাবে আটকানো",pos:"verb (past)",ctx:"হাকের পায়ের স্থিরতা তার নিয়ন্ত্রণের প্রতীক।"},
 "upon":{bn:"উপর",pos:"preposition"},
 "rough":{bn:"রুক্ষ",pos:"adjective"},
 "bark":{bn:"গাছের ছাল",pos:"noun"},
 "it":{bn:"এটি",pos:"pronoun"},
 "took":{bn:"নিয়েছিল",pos:"verb (past)"},
 "whole":{bn:"সমগ্র",pos:"adjective"},
 "creation":{bn:"সৃষ্টি",pos:"noun",ctx:"হাক দাবি করে সমগ্র সৃষ্টিজগৎ তাকে তৈরি করতেই ব্যয় হয়েছে — চরম আত্মম্ভরিতা।"},
 "produce":{bn:"তৈরি করা / উৎপন্ন করা",pos:"verb"},
 "foot":{bn:"পা",pos:"noun",ctx:"'সৃষ্টিকে আমার পায়ে ধরে রেখেছি' — সৃষ্টির উপর সম্পূর্ণ নিয়ন্ত্রণের প্রতীক।"},
 "each":{bn:"প্রতিটি",pos:"determiner"},
 "feather":{bn:"পালক",pos:"noun"},
 "now":{bn:"এখন",pos:"adverb"},
 "hold":{bn:"ধরে রাখা",pos:"verb"},
 "fly":{bn:"ওড়া",pos:"verb"},
 "up":{bn:"উপরে",pos:"adverb"},
 "revolve":{bn:"ঘুরিয়ে দেখা / প্রদক্ষিণ করা",pos:"verb",ctx:"হাক আকাশ থেকে সবকিছু নিজের সম্পত্তির মতো ঘুরিয়ে দেখে।"},
 "all":{bn:"সব",pos:"determiner"},
 "slowly":{bn:"ধীরে ধীরে",pos:"adverb"},
 "kill":{bn:"হত্যা করা",pos:"verb",ctx:"'আমি যেখানে ইচ্ছা হত্যা করি' — নিরঙ্কুশ ক্ষমতার ঘোষণা।"},
 "where":{bn:"যেখানে",pos:"adverb"},
 "please":{bn:"ইচ্ছা করা / পছন্দ করা",pos:"verb"},
 "because":{bn:"কারণ",pos:"conjunction"},
 "is":{bn:"আছে (হওয়া ক্রিয়া)",pos:"verb"},
 "mine":{bn:"আমার (নিজস্ব)",pos:"pronoun"},
 "there":{bn:"সেখানে",pos:"adverb"},
 "sophistry":{bn:"কূটতর্ক / ছলনাপূর্ণ যুক্তি",pos:"noun",ctx:"হাক বলে তার আচরণে কোনো ছলনা বা মিথ্যা যুক্তি নেই — সে সম্পূর্ণ সহজাত প্রবৃত্তি দ্বারা চালিত, মানুষের মতো নয়।"},
 "body":{bn:"শরীর",pos:"noun"},
 "manners":{bn:"আচার-আচরণ",pos:"noun",ctx:"হাকের 'আচরণ' হলো মাথা ছিঁড়ে ফেলা — সহিংসতাকে স্বাভাবিক বলে উপস্থাপন।"},
 "tearing":{bn:"ছিঁড়ে ফেলা",pos:"verb"},
 "off":{bn:"খুলে / বিচ্ছিন্ন করে",pos:"adverb"},
 "heads":{bn:"মাথা (বহুবচন)",pos:"noun"},
 "allotment":{bn:"বণ্টন / বরাদ্দ",pos:"noun",ctx:"হাক নিজেকে মৃত্যু বণ্টনকারী ঈশ্বরতুল্য সত্তা হিসেবে উপস্থাপন করে।"},
 "death":{bn:"মৃত্যু",pos:"noun"},
 "one":{bn:"একটি",pos:"determiner"},
 "path":{bn:"পথ",pos:"noun"},
 "flight":{bn:"উড়ান",pos:"noun"},
 "direct":{bn:"সরাসরি",pos:"adjective",ctx:"হাকের ক্ষমতা প্রশ্নাতীত ও অপ্রতিহত।"},
 "through":{bn:"মধ্য দিয়ে",pos:"preposition"},
 "bones":{bn:"হাড়",pos:"noun"},
 "living":{bn:"জীবিত (প্রাণী)",pos:"adjective / noun"},
 "arguments":{bn:"যুক্তি",pos:"noun"},
 "assert":{bn:"দাবি করা / প্রতিষ্ঠিত করা",pos:"verb",ctx:"কোনো মানবিক যুক্তিরই প্রয়োজন নেই — হাকের ক্ষমতা নিজেই প্রতিষ্ঠিত।"},
 "right":{bn:"অধিকার",pos:"noun"},
 "behind":{bn:"পেছনে",pos:"preposition",ctx:"সূর্যও যেন হাকের পক্ষে — প্রকৃতির শক্তি তার অনুকূলে।"},
 "nothing":{bn:"কিছুই না",pos:"pronoun"},
 "has":{bn:"(সহায়ক ক্রিয়া)",pos:"auxiliary verb"},
 "changed":{bn:"বদলেছে",pos:"verb (past participle)"},
 "since":{bn:"থেকে",pos:"conjunction"},
 "began":{bn:"শুরু করেছিল",pos:"verb (past)"},
 "eye":{bn:"চোখ",pos:"noun",ctx:"হাকের দৃষ্টিই যেন জগতের নিয়ম ঠিক করে — কোনো পরিবর্তনের অনুমতি নেই।"},
 "permitted":{bn:"অনুমতি দিয়েছে",pos:"verb (past participle)"},
 "change":{bn:"পরিবর্তন",pos:"noun"},
 "am":{bn:"আছি (হওয়া ক্রিয়া)",pos:"verb"},
 "going":{bn:"যাচ্ছি",pos:"verb"},
 "keep":{bn:"রাখা / বজায় রাখা",pos:"verb",ctx:"পুরো পৃথিবীকে এভাবেই রাখার চূড়ান্ত ঘোষণা — স্বৈরাচারী মানসিকতার প্রতীক।"},
 "things":{bn:"বিষয়সমূহ",pos:"noun"},
 "like":{bn:"মতো",pos:"preposition"},
 "this":{bn:"এই",pos:"pronoun"}
};

const GIST_EN = "Hawk Roosting is a dramatic monologue spoken entirely by a hawk perched at the top of a forest. In its own voice, the hawk describes its perfect, deadly body, its complete confidence, and its belief that the whole of creation exists only to serve its power. It kills without guilt or complicated reasoning, sees itself as the ruler of everything below it, and declares that nothing has changed and nothing ever will, as long as it holds control. Ted Hughes uses the hawk to explore raw instinct, absolute power, and — many readers feel — the mindset of a tyrant who believes their rule is natural and unquestionable.";
const GIST_BN = "'Hawk Roosting' একটি নাট্যিক স্বগতোক্তি, যা সম্পূর্ণভাবে একটি বাজপাখির মুখ থেকে বলা। নিজের ভাষায় বাজপাখি তার নিখুঁত ও প্রাণঘাতী দেহ, সম্পূর্ণ আত্মবিশ্বাস এবং এই বিশ্বাস বর্ণনা করে যে সমগ্র সৃষ্টি কেবল তার ক্ষমতার সেবার জন্যই আছে। সে কোনো অপরাধবোধ বা জটিল যুক্তি ছাড়াই হত্যা করে, নিজেকে নিচের সবকিছুর শাসক বলে মনে করে, এবং ঘোষণা করে যে কিছুই বদলায়নি এবং যতদিন তার নিয়ন্ত্রণ থাকবে ততদিন কিছুই বদলাবে না। টেড হিউজ বাজপাখির মাধ্যমে নগ্ন সহজাত প্রবৃত্তি, নিরঙ্কুশ ক্ষমতা এবং — অনেক পাঠকের মতে — এক স্বৈরাচারীর মানসিকতা তুলে ধরেছেন, যে নিজের শাসনকে স্বাভাবিক ও প্রশ্নাতীত মনে করে।";

const THEMES = [
{en:"Absolute Power and Tyranny",bnTitle:"নিরঙ্কুশ ক্ষমতা ও স্বৈরাচার",
 en_body:"The hawk works as a powerful metaphor for dictatorship. It sees itself not just as part of nature but as its master — holding 'Creation in my foot' and declaring 'I am going to keep things like this,' the mindset of a ruler determined to preserve control forever.",
 bn_body:"বাজপাখি স্বৈরাচারের একটি শক্তিশালী রূপক হিসেবে কাজ করে। সে নিজেকে প্রকৃতির অংশ নয়, বরং তার প্রভু বলে মনে করে — 'সৃষ্টিকে আমার পায়ে ধরে রেখেছি' বলে দাবি করে এবং 'আমি এভাবেই সবকিছু ধরে রাখতে চাই' ঘোষণা করে, যা চিরস্থায়ী নিয়ন্ত্রণ বজায় রাখতে দৃঢ়প্রতিজ্ঞ এক শাসকের মানসিকতা।"},
{en:"Nature vs. Human Sophistry",bnTitle:"প্রকৃতি বনাম মানুষের কূটতর্ক",
 en_body:"The hawk rejects 'sophistry' — deceptive, complex reasoning. Unlike humans who justify violence with moral arguments, the hawk acts on pure instinct; its 'manners are tearing off heads,' presenting violence as natural and unpretentious.",
 bn_body:"বাজপাখি 'কূটতর্ক' — অর্থাৎ ছলনাপূর্ণ, জটিল যুক্তি — প্রত্যাখ্যান করে। মানুষ যেমন নৈতিক যুক্তি দিয়ে সহিংসতাকে ন্যায্যতা দেয়, বাজপাখি তা করে না; তার 'আচরণ হলো মাথা ছিঁড়ে ফেলা' — সহিংসতা তার কাছে স্বাভাবিক ও নিরাভরণ।"},
{en:"The Brutality of the Natural Order",bnTitle:"প্রাকৃতিক নিয়মের নিষ্ঠুরতা",
 en_body:"Hughes presents nature as merciless and hierarchy-driven, where survival depends purely on strength. The hawk sits at the top of the food chain, viewing the earth as existing solely for its 'inspection' and 'allotment of death.'",
 bn_body:"হিউজ প্রকৃতিকে নির্মম ও শ্রেণিবিন্যাসনির্ভর হিসেবে উপস্থাপন করেছেন, যেখানে বেঁচে থাকা নির্ভর করে কেবল শক্তির উপর। বাজপাখি খাদ্যশৃঙ্খলের শীর্ষে বসে পৃথিবীকে কেবল তার 'পরিদর্শন' ও 'মৃত্যু বণ্টনের' বিষয় বলে মনে করে।"}
];

const DEVICES = [
{en:"Dramatic Monologue",bn:"নাট্যিক স্বগতোক্তি",
 body_en:"The entire poem is spoken in the hawk's own voice, giving direct access to its arrogant, unfiltered mindset.",
 body_bn:"পুরো কবিতাটি বাজপাখির নিজের কণ্ঠে বলা, যা তার আত্মম্ভরী ও অকপট মানসিকতায় সরাসরি প্রবেশাধিকার দেয়।"},
{en:"Repetition",bn:"পুনরাবৃত্তি",
 body_en:"'Hooked head and hooked feet' emphasises the hawk's physical adaptations built purely for killing.",
 body_bn:"'বাঁকানো মাথা এবং বাঁকানো পা' হাকের শারীরিক গঠনকে জোর দেয়, যা কেবল হত্যার জন্যই তৈরি।"},
{en:"Direct, Assertive Tone",bn:"সরাসরি ও দৃঢ় স্বর",
 body_en:"Short, declarative statements ('I kill where I please', 'There is no sophistry in my body') show total absence of doubt or hesitation.",
 body_bn:"সংক্ষিপ্ত, দৃঢ়ভাবাপন্ন উক্তি ('আমি যেখানে ইচ্ছা হত্যা করি', 'আমার শরীরে কোনো কূটতর্ক নেই') কোনো দ্বিধা বা সংশয়ের অনুপস্থিতি দেখায়।"},
{en:"Symbolism of Height and Flight",bn:"উচ্চতা ও উড্ডয়নের প্রতীকীতা",
 body_en:"Perched at the top of the wood, the hawk's position symbolises supreme oversight; 'the sun is behind me' implies cosmic forces aligning with its dominance.",
 body_bn:"বনের চূড়ায় বসে থাকা হাকের অবস্থান সর্বোচ্চ কর্তৃত্বের প্রতীক; 'সূর্য আমার পেছনে' বাক্যাংশটি বোঝায় যে মহাজাগতিক শক্তিও তার আধিপত্যের পক্ষে।"},
{en:"Imagery",bn:"চিত্রকল্প",
 body_en:"Vivid physical imagery — locked feet, hooked head, tearing heads — makes the hawk's predatory nature concrete and visceral.",
 body_bn:"আটকানো পা, বাঁকানো মাথা, মাথা ছিঁড়ে ফেলা — এই স্পষ্ট শারীরিক চিত্রকল্প হাকের শিকারী স্বভাবকে বাস্তব ও তীব্র করে তোলে।"}
];

const PROSODY_EN = "Hawk Roosting is written in free verse — it has no fixed rhyme scheme or regular metre, which suits a voice that answers to no rule but its own. The poem is arranged in six quatrains (four-line stanzas), giving it a controlled, measured shape even though the lines themselves vary in length and rhythm. Hughes relies on strong monosyllabic words, hard consonant sounds (k, t, d) and end-stopped lines to create a tone that is blunt, confident and unyielding — the sound of the poem mirrors the hawk's own sense of absolute control.";
const PROSODY_BN = "'Hawk Roosting' মুক্তছন্দে (free verse) লেখা — এতে নির্দিষ্ট মিল বা নিয়মিত ছন্দ নেই, যা এমন এক কণ্ঠের উপযোগী যে নিজের ছাড়া অন্য কোনো নিয়ম মানে না। কবিতাটি ছয়টি চতুষ্পদী স্তবকে (চার লাইনের স্তবক) বিন্যস্ত, যা একটি নিয়ন্ত্রিত কাঠামো দেয়, যদিও পঙক্তিগুলোর দৈর্ঘ্য ও ছন্দ ভিন্ন। হিউজ শক্তিশালী এক-শব্দাংশের শব্দ, কঠিন ব্যঞ্জনধ্বনি (ক, ট, দ) এবং সম্পূর্ণ থেমে যাওয়া পঙক্তি ব্যবহার করেছেন, যা কবিতাকে রুক্ষ, আত্মবিশ্বাসী ও অনমনীয় সুর দেয় — কবিতার ধ্বনিই যেন হাকের নিরঙ্কুশ নিয়ন্ত্রণবোধকে প্রতিফলিত করে।";

const SAQ = [
{q:"Where is the hawk sitting at the start of the poem?",a:"The hawk is sitting at the top of the wood (the forest), with its eyes closed.",bn:"বাজপাখি বনের সবচেয়ে উঁচু স্থানে (গাছের চূড়ায়) চোখ বন্ধ করে বসে আছে।"},
{q:"What does the hawk rehearse even in its sleep?",a:"Even in sleep, the hawk rehearses 'perfect kills' — it mentally practises hunting.",bn:"ঘুমের মধ্যেও বাজপাখি 'নিখুঁত শিকারের' মহড়া দেয় — মানসিকভাবে শিকার অনুশীলন করে।"},
{q:"According to the hawk, what did it take to produce its foot and feathers?",a:"The hawk claims it took 'the whole of Creation' to produce its foot and each feather.",bn:"বাজপাখি দাবি করে, তার পা ও প্রতিটি পালক তৈরি করতে 'সমগ্র সৃষ্টি' ব্যয় হয়েছে।"},
{q:"What does the hawk say about 'sophistry'?",a:"The hawk says 'There is no sophistry in my body' — meaning it acts on pure instinct, without deceptive human-style reasoning.",bn:"বাজপাখি বলে, 'আমার শরীরে কোনো কূটতর্ক নেই' — অর্থাৎ সে বিশুদ্ধ সহজাত প্রবৃত্তি দ্বারা চালিত, মানুষের মতো ছলনাপূর্ণ যুক্তি দ্বারা নয়।"},
{q:"What are the hawk's 'manners' according to the poem?",a:"The hawk says its 'manners are tearing off heads' — violence is presented as its natural, matter-of-fact behaviour.",bn:"বাজপাখি বলে তার 'আচরণ হলো মাথা ছিঁড়ে ফেলা' — সহিংসতাকে তার স্বাভাবিক আচরণ হিসেবে উপস্থাপন করা হয়েছে।"},
{q:"What does the hawk claim about arguments and its right to rule?",a:"The hawk says 'No arguments assert my right' — its power needs no justification; it is simply assumed and absolute.",bn:"বাজপাখি বলে, 'কোনো যুক্তিই আমার অধিকার প্রমাণ করে না' — তার ক্ষমতার কোনো ন্যায্যতার প্রয়োজন নেই, তা স্বতঃসিদ্ধ ও নিরঙ্কুশ।"},
{q:"How does the poem end, and what does the last line suggest?",a:"The poem ends with 'I am going to keep things like this' — a final, chilling declaration that the hawk intends to preserve its total control forever.",bn:"কবিতাটি শেষ হয় 'আমি এভাবেই সবকিছু ধরে রাখতে চাই' দিয়ে — এটি হাকের চিরস্থায়ী নিয়ন্ত্রণ বজায় রাখার এক চূড়ান্ত ও ভীতিজনক ঘোষণা।"}
];

const BROAD = [
{q:"Discuss 'Hawk Roosting' as a study of absolute power and tyranny.",
 a:"The hawk in the poem functions as a symbol of unchecked, tyrannical power. From its perch at the top of the wood, it views the entire world as existing for its benefit — the sun, the air and even 'Creation' itself are described as serving it. It kills 'where I please because it is all mine,' asserting ownership over life and death without needing justification ('No arguments assert my right'). This mindset — total self-belief, no accountability, and a declared intention to 'keep things like this' forever — mirrors the psychology of a dictator who sees their rule as natural, permanent and beyond question. Hughes uses the hawk's confident, unpunctuated certainty to make this portrait of tyranny feel chillingly convincing rather than cartoonish.",
 bn:"কবিতায় বাজপাখি অনিয়ন্ত্রিত, স্বৈরাচারী ক্ষমতার প্রতীক হিসেবে কাজ করে। বনের চূড়া থেকে সে গোটা পৃথিবীকে নিজের সেবার জন্য বিবেচনা করে — সূর্য, বাতাস, এমনকি 'সৃষ্টি'ও তার সেবা করে বলে বর্ণিত। সে 'যেখানে ইচ্ছা হত্যা করে, কারণ সবকিছুই তার' — কোনো ন্যায্যতা ছাড়াই জীবন-মৃত্যুর উপর মালিকানা দাবি করে ('কোনো যুক্তিই আমার অধিকার প্রমাণ করে না')। এই মানসিকতা — সম্পূর্ণ আত্মবিশ্বাস, কোনো জবাবদিহিতা নেই, এবং চিরকাল 'এভাবেই রাখার' ঘোষণা — এক স্বৈরশাসকের মনস্তত্ত্বের প্রতিফলন, যে নিজের শাসনকে স্বাভাবিক, স্থায়ী ও প্রশ্নাতীত মনে করে।"},
{q:"How does Ted Hughes use the hawk to explore the relationship between nature and violence?",
 a:"Hughes presents violence not as evil but as an unavoidable, almost sacred part of the natural order. The hawk's killing is described through precise physical imagery — hooked head, hooked feet, tearing off heads — rather than moral language, because for the hawk there is no morality involved. It explicitly rejects 'sophistry,' the human habit of wrapping actions in justification. In doing so, Hughes suggests that nature operates on pure, unapologetic instinct, and invites the reader to consider how differently violence is judged when it comes from an animal following its nature versus when it comes from humans who reason their way into it.",
 bn:"হিউজ সহিংসতাকে মন্দ হিসেবে নয়, বরং প্রাকৃতিক নিয়মের এক অনিবার্য, প্রায় পবিত্র অংশ হিসেবে উপস্থাপন করেছেন। বাজপাখির হত্যাকে নৈতিক ভাষায় নয়, বরং নির্দিষ্ট শারীরিক চিত্রকল্পের মাধ্যমে বর্ণনা করা হয়েছে — বাঁকানো মাথা, বাঁকানো পা, মাথা ছিঁড়ে ফেলা — কারণ হাকের কাছে এতে কোনো নৈতিকতার প্রশ্নই আসে না। সে স্পষ্টভাবে 'কূটতর্ক' প্রত্যাখ্যান করে, যা মানুষের কাজকে ন্যায্যতা দেওয়ার অভ্যাস। এভাবে হিউজ বোঝান যে প্রকৃতি বিশুদ্ধ, নির্লজ্জ সহজাত প্রবৃত্তি দ্বারা পরিচালিত, এবং পাঠককে ভাবতে আমন্ত্রণ জানান যে একটি প্রাণী তার স্বভাব অনুসরণ করলে এবং মানুষ যুক্তি দিয়ে সহিংসতায় পৌঁছালে, তা ভিন্নভাবে বিচার হয় কেন।"},
{q:"Comment on the significance of the poem's final stanza.",
 a:"The final stanza brings together every claim the hawk has made. 'The sun is behind me' suggests cosmic endorsement of its power. 'Nothing has changed since I began' presents its rule as timeless and unshaken. 'My eye has permitted no change' turns perception itself into an instrument of control — reality is only what the hawk allows it to be. The closing line, 'I am going to keep things like this,' is a flat, absolute statement of intent with no room for negotiation. Together, these lines complete the portrait of a mind — human or otherwise — utterly convinced of its own permanence and righteousness.",
 bn:"শেষ স্তবকটি বাজপাখির সমস্ত দাবিকে একত্র করে। 'সূর্য আমার পেছনে' তার ক্ষমতার প্রতি মহাজাগতিক সমর্থন বোঝায়। 'আমি শুরু করার পর থেকে কিছুই বদলায়নি' তার শাসনকে চিরন্তন ও অটল হিসেবে উপস্থাপন করে। 'আমার চোখ কোনো পরিবর্তনের অনুমতি দেয়নি' — উপলব্ধিকেই নিয়ন্ত্রণের হাতিয়ারে পরিণত করে; বাস্তবতা কেবল ততটুকুই, যতটুকু হাক অনুমতি দেয়। শেষ পঙক্তি, 'আমি এভাবেই সবকিছু ধরে রাখতে চাই,' কোনো আলোচনার সুযোগ না রেখে এক নিরঙ্কুশ সংকল্পের ঘোষণা। এই পঙক্তিগুলো একসঙ্গে এমন একটি মনের প্রতিকৃতি সম্পূর্ণ করে — মানুষ বা অন্য কিছু — যে নিজের স্থায়িত্ব ও ন্যায্যতা সম্পর্কে সম্পূর্ণরূপে নিশ্চিত।"}
];

const QUIZ = [
{q:"Where does the hawk sit at the beginning of the poem?",opts:["In a cave","At the top of the wood","On a riverbank","Inside its nest"],ans:1},
{q:"What does the hawk rehearse in its sleep?",opts:["Songs","Perfect kills","Flights to the sea","Dreams of the sky"],ans:1},
{q:"According to the hawk, what took 'the whole of Creation' to produce?",opts:["The sun","Its foot and feathers","The forest","The wind"],ans:1},
{q:"What does the hawk say is absent from its body?",opts:["Fear","Sophistry","Feathers","Hunger"],ans:1},
{q:"What are the hawk's 'manners', according to the poem?",opts:["Singing softly","Tearing off heads","Building nests","Flying south"],ans:1},
{q:"What is described as 'The allotment of death'?",opts:["A place in the forest","The hawk's role in deciding who dies","A type of tree","The sunset"],ans:1},
{q:"What does the hawk claim about arguments and its right to rule?",opts:["Arguments prove its right","No arguments assert its right","It welcomes debate","It has no rights"],ans:1},
{q:"What form is the poem written in?",opts:["Sonnet","Dramatic monologue in free verse","Ballad","Haiku sequence"],ans:1},
{q:"How many stanzas does the poem have?",opts:["Four","Five","Six","Eight"],ans:2},
{q:"What is the tone of the poem generally interpreted as reflecting?",opts:["Humble self-doubt","The mindset of a tyrant/dictator","Playful humour","Deep sorrow"],ans:1}
];

/* ================= STATE ================= */
const state = {
  synth: window.speechSynthesis,
  voices: [],
  currentLine: -1,
  utterQueue: [],
  playing: false,
  progress: JSON.parse(localStorage.getItem("hawk_progress")||"{}")
};
function saveProgress(key){ state.progress[key]=true; localStorage.setItem("hawk_progress",JSON.stringify(state.progress)); updateProgressUI(); }
function progressPct(){
  const keys=["read","wordbank","gist","themes","devices","prosody","saq","broad","quiz","important"];
  const done=keys.filter(k=>state.progress[k]).length;
  return Math.round(done/keys.length*100);
}
function updateProgressUI(){
  const pct=progressPct();
  const bar=document.getElementById("progressBar");
  const lbl=document.getElementById("progressPct");
  if(bar) bar.style.width=pct+"%";
  if(lbl) lbl.textContent=pct+"%";
}

/* ================= NAVIGATION ================= */
const views=["home","read","wordbank","gist","themes","devices","prosody","saq","broad","quiz","important","progress"];
function showView(name){
  views.forEach(v=>{
    const el=document.getElementById("view-"+v);
    if(el) el.hidden = v!==name;
  });
  document.getElementById("backBtn").hidden = name==="home";
  window.scrollTo(0,0);
  if(name!=="home" && name!=="read") saveProgress(name);
  if(name==="read") saveProgress("read");
}
document.getElementById("homeBrand").addEventListener("click",()=>showView("home"));
document.getElementById("backBtn").addEventListener("click",()=>showView("home"));
document.getElementById("dashboardGrid").addEventListener("click",e=>{
  const card=e.target.closest(".card");
  if(!card) return;
  const target=card.dataset.target;
  showView(target==="listen"?"read":target);
});

/* ================= RENDER POEM ================= */
function buildLineHTML(line, idx){
  const words=line.split(" ");
  const range=IMPORTANT_RANGES[idx];
  let out=[];
  words.forEach((w,i)=>{
    const clean=w.toLowerCase().replace(/[^a-z']/g,"");
    const span=`<span class="w" data-w="${clean}">${w}</span>`;
    out.push(span);
  });
  let html=out.join(" ");
  if(range){
    // wrap the important range by rebuilding with markers
    let parts=[];
    words.forEach((w,i)=>{
      const clean=w.toLowerCase().replace(/[^a-z']/g,"");
      parts.push(`<span class="w" data-w="${clean}">${w}</span>`);
    });
    const before=parts.slice(0,range[0]).join(" ");
    const mid=parts.slice(range[0],range[1]+1).join(" ");
    const after=parts.slice(range[1]+1).join(" ");
    html=[before,`<u>${mid}</u>`,after].filter(Boolean).join(" ");
  }
  return html;
}

function renderPoem(){
  const container=document.getElementById("poemContainer");
  container.innerHTML="";
  STANZAS.forEach(stanzaLines=>{
    const st=document.createElement("div");
    st.className="stanza";
    stanzaLines.forEach(idx=>{
      const wrap=document.createElement("div");
      wrap.className="line";
      wrap.dataset.idx=idx;
      wrap.innerHTML=`<div class="line-en">${buildLineHTML(LINES[idx],idx)}</div><div class="line-bn bn">${LINE_BN[idx]}</div>`;
      st.appendChild(wrap);
    });
    container.appendChild(st);
  });
  applyDisplayMode();
}
function applyDisplayMode(){
  const mode=document.getElementById("displayMode").value;
  document.querySelectorAll("#poemContainer .line").forEach(line=>{
    const en=line.querySelector(".line-en");
    const bnEl=line.querySelector(".line-bn");
    if(mode==="en"){ en.style.display=""; bnEl.style.display="none"; }
    else if(mode==="bn"){ en.style.display="none"; bnEl.style.display="block"; }
    else { en.style.display=""; bnEl.style.display="block"; }
  });
}
document.getElementById("displayMode").addEventListener("change",applyDisplayMode);

// word click -> popup
document.getElementById("poemContainer").addEventListener("click",e=>{
  const w=e.target.closest(".w");
  if(w){ openWordPopup(w.dataset.w); return; }
  const line=e.target.closest(".line");
  if(line){
    line.classList.toggle("show-bn");
    setActiveLine(parseInt(line.dataset.idx));
  }
});

function openWordPopup(word){
  const entry=DICT[word];
  document.getElementById("popupWord").textContent=word;
  document.getElementById("popupPos").textContent=entry?entry.pos||"":"";
  document.getElementById("popupBn").textContent=entry?("বাংলা: "+entry.bn):"বাংলা অর্থ পাওয়া যায়নি";
  document.getElementById("popupCtx").textContent=entry&&entry.ctx?entry.ctx:"";
  document.getElementById("wordPopup").hidden=false;
  document.getElementById("popupListen").onclick=()=>speak(word,0.85);
}
document.getElementById("popupClose").addEventListener("click",()=>document.getElementById("wordPopup").hidden=true);
document.getElementById("wordPopup").addEventListener("click",e=>{ if(e.target.id==="wordPopup") e.target.hidden=true; });

/* ================= WORD BANK ================= */
function renderWordbank(filter=""){
  const list=document.getElementById("wordbankList");
  list.innerHTML="";
  Object.keys(DICT).sort().forEach(w=>{
    if(filter && !w.includes(filter.toLowerCase())) return;
    const e=DICT[w];
    const row=document.createElement("div");
    row.className="wb-item";
    row.innerHTML=`<div><span class="wb-en">${w}</span><span class="wb-pos">${e.pos||""}</span></div><div class="wb-bn bn">${e.bn}</div>`;
    row.addEventListener("click",()=>openWordPopup(w));
    list.appendChild(row);
  });
}
document.getElementById("wbSearch").addEventListener("input",e=>renderWordbank(e.target.value));

/* ================= STATIC CONTENT RENDER ================= */
function renderGist(){
  document.getElementById("gistContent").innerHTML=`<p>${GIST_EN}</p><hr style="border:none;border-top:1px solid var(--line);margin:14px 0"><p class="bn">${GIST_BN}</p>`;
}
function renderThemes(){
  document.getElementById("themesContent").innerHTML=THEMES.map(t=>`
    <div class="info-card"><h4>${t.en}</h4><p>${t.en_body}</p><p class="bn"><strong>${t.bnTitle}:</strong> ${t.bn_body}</p></div>`).join("");
}
function renderDevices(){
  document.getElementById("devicesContent").innerHTML=DEVICES.map(d=>`
    <div class="info-card"><h4>${d.en}</h4><p>${d.body_en}</p><p class="bn"><strong>${d.bn}:</strong> ${d.body_bn}</p></div>`).join("");
}
function renderProsody(){
  document.getElementById("prosodyContent").innerHTML=`<p>${PROSODY_EN}</p><hr style="border:none;border-top:1px solid var(--line);margin:14px 0"><p class="bn">${PROSODY_BN}</p>`;
}
function renderQA(list, containerId){
  document.getElementById(containerId).innerHTML=list.map((item,i)=>`
    <div class="qa">
      <button class="qa-q" data-i="${i}">${item.q}<span>+</span></button>
      <div class="qa-a"><p>${item.a}</p><p class="bn">${item.bn}</p></div>
    </div>`).join("");
  document.getElementById(containerId).querySelectorAll(".qa-q").forEach(btn=>{
    btn.addEventListener("click",()=>btn.closest(".qa").classList.toggle("open"));
  });
}
function renderImportant(){
  const items=Object.entries(IMPORTANT_RANGES).map(([idx,range])=>{
    const words=LINES[idx].split(" ");
    const phrase=words.slice(range[0],range[1]+1).join(" ");
    return {q:`"${phrase}"`, a:`From: "${LINES[idx]}"`, bn:LINE_BN[idx]};
  });
  document.getElementById("importantContent").innerHTML=items.map(it=>`
    <div class="info-card"><h4>${it.q}</h4><p>${it.a}</p><p class="bn">${it.bn}</p></div>`).join("");
}

/* ================= QUIZ ================= */
let quizState={i:0,score:0};
function renderQuiz(){
  quizState={i:0,score:0};
  showQuizQuestion();
}
function showQuizQuestion(){
  const c=document.getElementById("quizContent");
  if(quizState.i>=QUIZ.length){
    c.innerHTML=`<div class="quiz-result"><div class="score">${quizState.score}/${QUIZ.length}</div><p>Well done! Tap Quiz again from the home screen to retry.</p></div>`;
    saveProgress("quiz");
    return;
  }
  const item=QUIZ[quizState.i];
  c.innerHTML=`<div class="quiz-progress">Question ${quizState.i+1} of ${QUIZ.length}</div>
    <div class="quiz-q">${item.q}</div>
    ${item.opts.map((o,i)=>`<button class="quiz-opt" data-i="${i}">${o}</button>`).join("")}`;
  c.querySelectorAll(".quiz-opt").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const chosen=parseInt(btn.dataset.i);
      c.querySelectorAll(".quiz-opt").forEach(b=>b.disabled=true);
      if(chosen===item.ans){ btn.classList.add("correct"); quizState.score++; }
      else{ btn.classList.add("wrong"); c.querySelectorAll(".quiz-opt")[item.ans].classList.add("correct"); }
      setTimeout(()=>{ quizState.i++; showQuizQuestion(); },1100);
    });
  });
}

/* ================= PROGRESS VIEW ================= */
function renderProgressView(){
  const keys=[["read","Read the Poem"],["wordbank","Word Bank"],["gist","Gist"],["themes","Themes"],["devices","Literary Devices"],["prosody","Prosody"],["saq","SAQ Practice"],["broad","Broad Questions"],["quiz","Quiz"],["important","Important Lines"]];
  document.getElementById("progressContent").innerHTML=keys.map(([k,label])=>`
    <div class="info-card" style="display:flex;justify-content:space-between;align-items:center;">
      <span>${label}</span><span>${state.progress[k]?"✅ Done":"⬜ Not yet"}</span>
    </div>`).join("");
  updateProgressUI();
}
document.getElementById("resetProgress").addEventListener("click",()=>{
  if(confirm("Reset all progress?")){ state.progress={}; localStorage.removeItem("hawk_progress"); renderProgressView(); }
});

/* ================= TEXT-TO-SPEECH ================= */
function populateVoices(){
  state.voices=state.synth.getVoices().filter(v=>v.lang.startsWith("en"));
  const sel=document.getElementById("voiceSelect");
  sel.innerHTML=state.voices.map((v,i)=>`<option value="${i}">${v.name}</option>`).join("") || `<option>Default voice</option>`;
}
if(state.synth){
  state.synth.onvoiceschanged=populateVoices;
  populateVoices();
}
function speak(text,rateOverride){
  if(!state.synth) return;
  state.synth.cancel();
  const u=new SpeechSynthesisUtterance(text);
  const rate=rateOverride || parseFloat(document.getElementById("speedSelect").value);
  u.rate=rate;
  const vi=document.getElementById("voiceSelect").value;
  if(state.voices[vi]) u.voice=state.voices[vi];
  state.synth.speak(u);
  return u;
}
function setActiveLine(idx){
  document.querySelectorAll("#poemContainer .line").forEach(l=>l.classList.remove("active"));
  const el=document.querySelector(`#poemContainer .line[data-idx="${idx}"]`);
  if(el){ el.classList.add("active"); el.scrollIntoView({behavior:"smooth",block:"center"}); }
  state.currentLine=idx;
}
function playLine(idx){
  if(idx<0||idx>=LINES.length) return;
  setActiveLine(idx);
  const u=speak(LINES[idx]);
  if(!u) return;
  u.onend=()=>{ if(state.playing) playLine(idx+1); };
}
document.getElementById("playBtn").addEventListener("click",()=>{
  state.playing=true;
  playLine(state.currentLine<0?0:state.currentLine);
});
document.getElementById("playAllBtn").addEventListener("click",()=>{
  state.playing=true;
  playLine(0);
  saveProgress("wordbank"); // listening counts toward engagement too
});
document.getElementById("pauseBtn").addEventListener("click",()=>{ state.playing=false; state.synth.pause(); });
document.getElementById("stopBtn").addEventListener("click",()=>{ state.playing=false; state.synth.cancel(); });
document.getElementById("nextBtn").addEventListener("click",()=>{ state.playing=false; state.synth.cancel(); setActiveLine(Math.min(state.currentLine+1,LINES.length-1)); });
document.getElementById("prevBtn").addEventListener("click",()=>{ state.playing=false; state.synth.cancel(); setActiveLine(Math.max(state.currentLine-1,0)); });
document.getElementById("repeatBtn").addEventListener("click",()=>{ if(state.currentLine>=0){ state.playing=false; speak(LINES[state.currentLine]); } });

/* ================= LANG TOGGLE ================= */
document.getElementById("langToggle").addEventListener("click",()=>{
  const sel=document.getElementById("displayMode");
  const modes=["both","en","bn"];
  const next=modes[(modes.indexOf(sel.value)+1)%modes.length];
  sel.value=next;
  applyDisplayMode();
  if(document.getElementById("view-read").hidden) showView("read");
});

/* ================= INIT ================= */
renderPoem();
renderWordbank();
renderGist();
renderThemes();
renderDevices();
renderProsody();
renderQA(SAQ,"saqContent");
renderQA(BROAD.map(b=>({q:b.q,a:b.a,bn:b.bn})),"broadContent");
renderQuiz();
renderImportant();
renderProgressView();
updateProgressUI();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}
