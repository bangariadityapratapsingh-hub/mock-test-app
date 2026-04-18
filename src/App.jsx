import { useState, useEffect } from "react";

function App() {
  const matricPapers = [
  {
    title: "SSC Selection Post",
    date: "24 July 2025",
    shift: "Shift 1",

    
    questions: [

{
  question: {
    en: "In a certain code, LAMP is written as ODPS. How will BOOK be written?",
    hi: "एक निश्चित कूट में, LAMP को ODPS लिखा जाता है। BOOK को कैसे लिखा जाएगा?"
  },
  options: {
    en: ["DRRM", "CQQM", "CQQN", "ERRN"],
    hi: ["DRRM", "CQQM", "CQQN", "ERRN"]
  },
  answer: {
    en: "ERRN",
    hi: "ERRN"
  }
},

{
  question: {
    en: "Find the odd number.",
    hi: "विषम संख्या ज्ञात कीजिए।"
  },
  options: {
    en: ["16", "25", "36", "48"],
    hi: ["16", "25", "36", "48"]
  },
  answer: {
    en: "48",
    hi: "48"
  }
},

{
  question: {
    en: "Find the missing term in the series: A1, C3, E5, ___ , I9",
    hi: "श्रृंखला में लुप्त पद ज्ञात कीजिए: A1, C3, E5, ___ , I9"
  },
  options: {
    en: ["F6", "G7", "H8", "G9"],
    hi: ["F6", "G7", "H8", "G9"]
  },
  answer: {
    en: "G7",
    hi: "G7"
  }
},

{
  question: {
    en: "A team is behind schedule on a critical project. What is the most effective first step?",
    hi: "एक टीम एक महत्वपूर्ण प्रोजेक्ट के निर्धारित समय से पीछे चल रही है। सबसे प्रभावी पहला कदम क्या है?"
  },
  options: {
    en: ["Add more tasks", "Review and prioritize key activities", "Cancel the project", "Reduce quality standards"],
    hi: ["और कार्य जोड़ना", "प्रमुख गतिविधियों की समीक्षा करना और उन्हें प्राथमिकता देना", "प्रोजेक्ट को रद्द करना", "गुणवत्ता के मानकों को कम करना"]
  },
  answer: {
    en: "Review and prioritize key activities",
    hi: "प्रमुख गतिविधियों की समीक्षा करना और उन्हें प्राथमिकता देना"
  }
},

{
  question: {
    en: "A man walks 6 km south, then 8 km west. How far is he from the starting point?",
    hi: "एक व्यक्ति 6 किमी दक्षिण की ओर चलता है, फिर 8 किमी पश्चिम की ओर। वह अपने प्रारंभिक बिंदु से कितनी दूर है?"
  },
  options: {
    en: ["10 km", "12 km", "14 km", "8 km"],
    hi: ["10 किमी", "12 किमी", "14 किमी", "8 किमी"]
  },
  answer: {
    en: "10 km",
    hi: "10 किमी"
  }
},

{
  question: {
    en: "AB12 is related to CD34 in a certain way. In the same way, EF56 is related to GH78. To which of the following is IJ90 related?",
    hi: "AB12 एक निश्चित तरीके से CD34 से संबंधित है। उसी प्रकार, EF56 का संबंध GH78 से है। IJ90 निम्नलिखित में से किससे संबंधित है?"
  },
  options: {
    en: ["KL12", "JK01", "LM23", "MN12"],
    hi: ["KL12", "JK01", "LM23", "MN12"]
  },
  answer: {
    en: "KL12",
    hi: "KL12"
  }
},

{
  question: {
    en: "If 'A' means '-', 'B' means '÷', 'C' means '×' and 'D' means '+', then evaluate: 36 C 4 D 18 B 3 A 6 = ?",
    hi: "यदि 'A' का अर्थ '-', 'B' का अर्थ '÷', 'C' का अर्थ '×' और 'D' का अर्थ '+' है, तो मान ज्ञात कीजिए: 36 C 4 D 18 B 3 A 6 = ?"
  },
  options: {
    en: ["146", "150", "144", "148"],
    hi: ["146", "150", "144", "148"]
  },
  answer: {
    en: "144",
    hi: "144"
  }
},

{
  question: {
    en: "What number completes the pattern: 4★2=12, 6★3=27, 8★4=?",
    hi: "कौन सी संख्या पैटर्न को पूरा करती है: 4★2=12, 6★3=27, 8★4=?"
  },
  options: {
    en: ["32", "36", "48", "64"],
    hi: ["32", "36", "48", "64"]
  },
  answer: {
    en: "48",
    hi: "48"
  }
},

{
  question: {
    en: "P is the sister of Q and Q is the father of R. What is P's relation to R?",
    hi: "P, Q की बहन है और Q, R का पिता है। P का R से क्या संबंध है?"
  },
  options: {
    en: ["Aunt", "Mother", "Sister", "Cousin"],
    hi: ["बुआ/मौसी/चाची", "माता", "बहन", "चचेरी/ममेरी/फुफेरी बहन"]
  },
  answer: {
    en: "Aunt",
    hi: "बुआ/मौसी/चाची"
  }
},

{
  question: {
    en: "Complete the series: 3, 7, 15, 31, ?",
    hi: "श्रृंखला को पूरा करें: 3, 7, 15, 31, ?"
  },
  options: {
    en: ["47", "63", "61", "59"],
    hi: ["47", "63", "61", "59"]
  },
  answer: {
    en: "63",
    hi: "63"
  }
},

{
  question: {
    en: "Identify the next term: D4, G7, J10, ___",
    hi: "अगले पद की पहचान करें: D4, G7, J10, ___"
  },
  options: {
    en: ["L12", "M13", "N14", "O15"],
    hi: ["L12", "M13", "N14", "O15"]
  },
  answer: {
    en: "M13",
    hi: "M13"
  }
},

{
  question: {
    en: "Painter : Canvas :: Writer : ___",
    hi: "चित्रकार का संबंध कैनवास से है, उसी प्रकार लेखक का संबंध ___ से है?"
  },
  options: {
    en: ["Paper", "Pen", "Book", "Story"],
    hi: ["कागज", "पेन", "पुस्तक", "कहानी"]
  },
  answer: {
    en: "Paper",
    hi: "कागज"
  }
},

{
  question: {
    en: "Identify the next number in the series: 4, 9, 15, 20, ___",
    hi: "श्रृंखला में अगली संख्या की पहचान करें: 4, 9, 15, 20, ___"
  },
  options: {
    en: ["30", "26", "29", "25"],
    hi: ["30", "26", "29", "25"]
  },
  answer: {
    en: "26",
    hi: "26"
  }
},

{
  question: {
    en: "If '#' means '+', '@' means '×', '$' means '-' and '%' means '÷', then evaluate: 24 @ 5 # 10 $ 6 % 2 = ?",
    hi: "यदि '#' का अर्थ '+', '@' का अर्थ '×', '$' का अर्थ '-' और '%' का अर्थ '÷' है, तो निम्नलिखित का मान ज्ञात कीजिए: 24 @ 5 # 10 $ 6 % 2 = ?"
  },
  options: {
    en: ["130", "124", "127", "120"],
    hi: ["130", "124", "127", "120"]
  },
  answer: {
    en: "127",
    hi: "127"
  }
},

{
  question: {
    en: "Which word does not belong to this set?",
    hi: "कौन सा शब्द इस समूह से संबंधित नहीं है?"
  },
  options: {
    en: ["January", "March", "July", "Sunday"],
    hi: ["जनवरी", "मार्च", "जुलाई", "रविवार"]
  },
  answer: {
    en: "Sunday",
    hi: "रविवार"
  }
},

{
  question: {
    en: "If you accidentally damage a colleague's property at work, what is the most appropriate action?",
    hi: "यदि आप कार्यस्थल पर गलती से किसी सहकर्मी की संपत्ति को नुकसान पहुँचाते हैं, तो सबसे उपयुक्त कार्रवाई क्या है?"
  },
  options: {
    en: ["Ignore it", "Blame someone else", "Inform them and apologize", "Replace it secretly"],
    hi: ["इसे नज़रअंदाज़ करें", "किसी और पर दोष मढ़ें", "उन्हें सूचित करें और माफ़ी मांगें", "चुपके से उसे बदल दें"]
  },
  answer: {
    en: "Inform them and apologize",
    hi: "उन्हें सूचित करें और माफ़ी मांगें"
  }
},

{
  question: {
    en: "Which number does not belong?",
    hi: "कौन सी संख्या समूह से संबंधित नहीं है?"
  },
  options: {
    en: ["2", "3", "5", "9"],
    hi: ["2", "3", "5", "9"]
  },
  answer: {
    en: "9",
    hi: "9"
  }
},

{
  question: {
    en: "If ♥ = 10, ♦ = 5, and ♣ = 3, what is (♥ - ♦) × ♣?",
    hi: "यदि ♥ = 10, ♦ = 5, और ♣ = 3 है, तो (♥ - ♦) × ♣ का मान क्या है?"
  },
  options: {
    en: ["10", "12", "15", "18"],
    hi: ["10", "12", "15", "18"]
  },
  answer: {
    en: "15",
    hi: "15"
  }
},

{
  question: {
    en: "Barometer is to Pressure as Speedometer is to ___?",
    hi: "बैरोमीटर का संबंध दबाव से है, तो स्पीडोमीटर का संबंध किससे है?"
  },
  options: {
    en: ["Distance", "Speed", "Time", "Force"],
    hi: ["दूरी", "गति", "समय", "बल"]
  },
  answer: {
    en: "Speed",
    hi: "गति"
  }
},

{
  question: {
    en: "Doctor is to Hospital as Teacher is to:",
    hi: "डॉक्टर का संबंध अस्पताल से है, उसी प्रकार शिक्षक का संबंध किससे है?"
  },
  options: {
    en: ["School", "Student", "Book", "Education"],
    hi: ["स्कूल", "छात्र", "पुस्तक", "शिक्षा"]
  },
  answer: {
    en: "School",
    hi: "स्कूल"
  }
},

{
  question: {
    en: "Choose the word that does not belong to the group.",
    hi: "उस शब्द का चयन करें जो समूह से संबंधित नहीं है।"
  },
  options: {
    en: ["Table", "Chair", "Bed", "Car"],
    hi: ["मेज़", "कुर्सी", "बिस्तर", "कार"]
  },
  answer: {
    en: "Car",
    hi: "कार"
  }
},

{
  question: {
    en: "If 12 is to 36, then 15 is to ___?",
    hi: "यदि 12 का संबंध 36 से है, तो 15 का संबंध किससे है?"
  },
  options: {
    en: ["40", "45", "48", "60"],
    hi: ["40", "45", "48", "60"]
  },
  answer: {
    en: "45",
    hi: "45"
  }
},

{
  question: {
    en: "You find a wallet on the road containing cash and ID. What should you do?",
    hi: "आपको सड़क पर एक बटुआ मिलता है जिसमें नकदी और आईडी है। आपको क्या करना चाहिए?"
  },
  options: {
    en: ["Keep the cash", "Leave it there", "Hand it to the police", "Throw it away"],
    hi: ["नकदी रख लें", "उसे वहीं छोड़ दें", "इसे पुलिस को सौंप दें", "इसे फेंक दें"]
  },
  answer: {
    en: "Hand it to the police",
    hi: "इसे पुलिस को सौंप दें"
  }
},

{
  question: {
    en: "A manager must choose between two plans: Plan A: Guaranteed profit of 50 units. Plan B: 50% chance of 120 units profit and 50% chance of 0 profit. Assuming risk-neutral behavior, which plan should be chosen?",
    hi: "एक प्रबंधक को दो योजनाओं के बीच चयन करना होगा: योजना A: 50 इकाइयों का गारंटीकृत लाभ। योजना B: 120 इकाइयों के लाभ की 50% संभावना और 0 लाभ की 50% संभावना। जोखिम-तटस्थ व्यवहार मानते हुए, किस योजना का चयन किया जाना चाहिए?"
  },
  options: {
    en: ["Plan A", "Plan B", "Both are equal", "Cannot be decided"],
    hi: ["योजना A", "योजना B", "दोनों समान हैं", "निर्णय नहीं लिया जा सकता"]
  },
  answer: {
    en: "Plan B",
    hi: "योजना B"
  }
},

{
  question: {
    en: "Pen is to Ink as Printer is to ___?",
    hi: "कलम का स्याही से वही संबंध है जो प्रिंटर का ___ से है?"
  },
  options: {
    en: ["Paper", "Toner", "Electricity", "File"],
    hi: ["कागज", "टोनर", "बिजली", "फ़ाइल"]
  },
  answer: {
    en: "Toner",
    hi: "टोनर"
  }
},

{
  question: {
    en: "Who presides over the Lok Sabha?",
    hi: "लोकसभा की अध्यक्षता कौन करता है?"
  },
  options: {
    en: ["President", "Speaker", "Prime Minister", "Vice President"],
    hi: ["राष्ट्रपति", "अध्यक्ष (स्पीकर)", "प्रधानमंत्री", "उपराष्ट्रपति"]
  },
  answer: {
    en: "Speaker",
    hi: "अध्यक्ष (स्पीकर)"
  }
},

{
  question: {
    en: "Total supply of goods and services in an economy is called ______.",
    hi: "अर्थव्यवस्था में वस्तुओं और सेवाओं की कुल आपूर्ति को क्या कहा जाता है?"
  },
  options: {
    en: ["Aggregate demand", "Aggregate supply", "Inflation", "Fiscal deficit"],
    hi: ["कुल मांग", "कुल आपूर्ति", "मुद्रास्फीति", "राजकोषीय घाटा"]
  },
  answer: {
    en: "Aggregate supply",
    hi: "कुल आपूर्ति"
  }
},

{
  question: {
    en: "Which Article of the Indian Constitution abolishes untouchability?",
    hi: "भारतीय संविधान का कौन सा अनुच्छेद अस्पृश्यता को समाप्त करता है?"
  },
  options: {
    en: ["Article 17", "Article 19", "Article 21", "Article 32"],
    hi: ["अनुच्छेद 17", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"]
  },
  answer: {
    en: "Article 17",
    hi: "अनुच्छेद 17"
  }
},

{
  question: {
    en: "Which molecule carries genetic information from DNA to ribosomes?",
    hi: "कौन सा अणु DNA से राइबोसोम तक आनुवंशिक जानकारी ले जाता है?"
  },
  options: {
    en: ["tRNA", "rRNA", "mRNA", "DNA polymerase"],
    hi: ["tRNA", "rRNA", "mRNA", "DNA पोलीमरेज़"]
  },
  answer: {
    en: "mRNA",
    hi: "mRNA"
  }
},

{
  question: {
    en: "Which Mughal emperor built the Red Fort in Delhi?",
    hi: "किस मुगल सम्राट ने दिल्ली में लाल किले का निर्माण करवाया था?"
  },
  options: {
    en: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"],
    hi: ["अकबर", "शाहजहाँ", "औरंगजेब", "हुमायूँ"]
  },
  answer: {
    en: "Shah Jahan",
    hi: "शाहजहाँ"
  }
},

{
  question: {
    en: "Which medal is awarded for third position in the Olympic Games?",
    hi: "ओलंपिक खेलों में तीसरे स्थान के लिए कौन सा पदक दिया जाता है?"
  },
  options: {
    en: ["Gold", "Silver", "Bronze", "Platinum"],
    hi: ["स्वर्ण", "रजत", "कांस्य", "प्लेटिनम"]
  },
  answer: {
    en: "Bronze",
    hi: "कांस्य"
  }
},

{
  question: {
    en: "Who wrote the famous literary work Gitanjali?",
    hi: "प्रसिद्ध साहित्यिक कृति 'गीतांजलि' किसने लिखी थी?"
  },
  options: {
    en: ["Rabindranath Tagore", "Munshi Premchand", "Sarojini Naidu", "Bankim Chandra Chatterjee"],
    hi: ["रवींद्रनाथ टैगोर", "मुंशी प्रेमचंद", "सरोजिनी नायडू", "बंकिम चंद्र चटर्जी"]
  },
  answer: {
    en: "Rabindranath Tagore",
    hi: "रवींद्रनाथ टैगोर"
  }
},

{
  question: {
    en: "Which technology allows computers to understand human language?",
    hi: "कौन सी तकनीक कंप्यूटरों को मानव भाषा समझने की अनुमति देती है?"
  },
  options: {
    en: ["Natural Language Processing", "Blockchain", "Internet of Things", "Cloud Computing"],
    hi: ["नेचुरल लैंग्वेज प्रोसेसिंग", "ब्लॉकचेन", "इंटरनेट ऑफ थिंग्स", "क्लाउड कंप्यूटिंग"]
  },
  answer: {
    en: "Natural Language Processing",
    hi: "नेचुरल लैंग्वेज प्रोसेसिंग"
  }
},

{
  question: {
    en: "Which city is known as the Pink City of India?",
    hi: "किस शहर को भारत के 'गुलाबी शहर' (पिंक सिटी) के रूप में जाना जाता है?"
  },
  options: {
    en: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    hi: ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"]
  },
  answer: {
    en: "Jaipur",
    hi: "जयपुर"
  }
},

{
  question: {
    en: "Who created the fictional detective Feluda?",
    hi: "काल्पनिक जासूस 'फेलुदा' की रचना किसने की थी?"
  },
  options: {
    en: ["Rabindranath Tagore", "Satyajit Ray", "Bankim Chandra Chatterjee", "Sarat Chandra Chattopadhyay"],
    hi: ["रवींद्रनाथ टैगोर", "सत्यजीत रे", "बंकिम चंद्र चटर्जी", "शरद चंद्र चट्टोपाध्याय"]
  },
  answer: {
    en: "Satyajit Ray",
    hi: "सत्यजीत रे"
  }
},

{
  question: {
    en: "Movement of people into a country is called ______.",
    hi: "किसी देश में लोगों के आगमन को ______ कहा जाता है।"
  },
  options: {
    en: ["Immigration", "Emigration", "Urbanization", "Migration"],
    hi: ["आप्रवासन", "उत्प्रवासन", "शहरीकरण", "प्रवासन"]
  },
  answer: {
    en: "Immigration",
    hi: "आप्रवासन"
  }
},

{
  question: {
    en: "Which mission promotes manufacturing in India?",
    hi: "कौन सा मिशन भारत में विनिर्माण (मैन्युफैक्चरिंग) को बढ़ावा देता है?"
  },
  options: {
    en: ["Digital India", "Skill India", "Make in India", "Startup India"],
    hi: ["डिजिटल इंडिया", "स्किल इंडिया", "मेक इन इंडिया", "स्टार्टअप इंडिया"]
  },
  answer: {
    en: "Make in India",
    hi: "मेक इन इंडिया"
  }
},

{
  question: {
    en: "Which classical dance form originated in Uttar Pradesh?",
    hi: "किस शास्त्रीय नृत्य शैली की उत्पत्ति उत्तर प्रदेश में हुई?"
  },
  options: {
    en: ["Bharatanatyam", "Kathak", "Odissi", "Kuchipudi"],
    hi: ["भरतनाट्यम", "कथक", "ओडिसी", "कुचिपुड़ी"]
  },
  answer: {
    en: "Kathak",
    hi: "कथक"
  }
},

{
  question: {
    en: "Gandhara sculptures mainly used which type of stone?",
    hi: "गांधार मूर्तिकला में मुख्य रूप से किस प्रकार के पत्थर का उपयोग किया गया था?"
  },
  options: {
    en: ["Granite", "Grey schist", "Marble", "Basalt"],
    hi: ["ग्रेनाइट", "ग्रे शिस्ट", "संगमरमर", "बेसाल्ट"]
  },
  answer: {
    en: "Grey schist",
    hi: "ग्रे शिस्ट"
  }
},

{
  question: {
    en: "Mudra Yojana mainly provides loans to ______.",
    hi: "मुद्रा योजना मुख्य रूप से ______ को ऋण प्रदान करती है।"
  },
  options: {
    en: ["Farmers", "Students", "Small entrepreneurs", "Government employees"],
    hi: ["किसानों", "छात्रों", "छोटे उद्यमियों", "सरकारी कर्मचारियों"]
  },
  answer: {
    en: "Small entrepreneurs",
    hi: "छोटे उद्यमियों"
  }
},

{
  question: {
    en: "Headquarters of UNESCO is located in which city?",
    hi: "UNESCO का मुख्यालय किस शहर में स्थित है?"
  },
  options: {
    en: ["Geneva", "Paris", "Vienna", "Rome"],
    hi: ["जेनेवा", "पेरिस", "वियना", "रोम"]
  },
  answer: {
    en: "Paris",
    hi: "पेरिस"
  }
},

{
  question: {
    en: "Which government scheme provides LPG connections to poor households?",
    hi: "कौन सी सरकारी योजना गरीब परिवारों को LPG कनेक्शन प्रदान करती है?"
  },
  options: {
    en: ["Ujjwala Yojana", "PM Awas Yojana", "PM Kisan Samman Nidhi", "Jan Dhan Yojana"],
    hi: ["उज्ज्वला योजना", "PM आवास योजना", "PM किसान सम्मान निधि", "जन धन योजना"]
  },
  answer: {
    en: "Ujjwala Yojana",
    hi: "उज्ज्वला योजना"
  }
},

{
  question: {
    en: "Which river is associated with the Narmada Bachao Andolan?",
    hi: "नर्मदा बचाओ आंदोलन किस नदी से जुड़ा है?"
  },
  options: {
    en: ["Godavari", "Narmada", "Krishna", "Tapti"],
    hi: ["गोदावरी", "नर्मदा", "कृष्णा", "ताप्ती"]
  },
  answer: {
    en: "Narmada",
    hi: "नर्मदा"
  }
},

{
  question: {
    en: "Which index measures poverty across multiple dimensions?",
    hi: "कौन सा सूचकांक कई आयामों में गरीबी को मापता है?"
  },
  options: {
    en: ["Human Development Index", "Multidimensional Poverty Index", "Global Hunger Index", "Consumer Price Index"],
    hi: ["मानव विकास सूचकांक", "बहुआयामी गरीबी सूचकांक", "वैश्विक भूख सूचकांक", "उपभोक्ता मूल्य सूचकांक"]
  },
  answer: {
    en: "Multidimensional Poverty Index",
    hi: "बहुआयामी गरीबी सूचकांक"
  }
},

{
  question: {
    en: "Which port is known as the 'Gateway of India'?",
    hi: "किस बंदरगाह को 'भारत का प्रवेश द्वार' कहा जाता है?"
  },
  options: {
    en: ["Chennai Port", "Mumbai Port", "Paradip Port", "Kochi Port"],
    hi: ["चेन्नई बंदरगाह", "मुंबई बंदरगाह", "पारादीप बंदरगाह", "कोच्चि बंदरगाह"]
  },
  answer: {
    en: "Mumbai Port",
    hi: "मुंबई बंदरगाह"
  }
},

{
  question: {
    en: "Which Indian state hosts the Muppandal Wind Farm, one of the largest wind farms in India?",
    hi: "भारत का कौन सा राज्य मुप्पंडल विंड फार्म की मेजबानी करता है, जो भारत के सबसे बड़े पवन फार्मों में से एक है?"
  },
  options: {
    en: ["Gujarat", "Tamil Nadu", "Maharashtra", "Karnataka"],
    hi: ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "कर्नाटक"]
  },
  answer: {
    en: "Tamil Nadu",
    hi: "तमिलनाडु"
  }
},

{
  question: {
    en: "Which of the following is a scalar quantity?",
    hi: "निम्नलिखित में से कौन सी एक अदिश राशि है?"
  },
  options: {
    en: ["Velocity", "Acceleration", "Speed", "Force"],
    hi: ["वेग", "त्वरण", "चाल", "बल"]
  },
  answer: {
    en: "Speed",
    hi: "चाल"
  }
},

{
  question: {
    en: "Which galaxy is closest to the Milky Way galaxy?",
    hi: "कौन सी आकाशगंगा आकाशगंगा (मिल्की वे) के सबसे करीब है?"
  },
  options: {
    en: ["Andromeda", "Triangulum", "Whirlpool", "Sombrero"],
    hi: ["एंड्रोमेडा", "ट्राइएंगुलम", "व्हर्लपूल", "सोम्ब्रेरो"]
  },
  answer: {
    en: "Andromeda",
    hi: "एंड्रोमेडा"
  }
},

{
  question: {
    en: "Which planet is known as the Evening Star?",
    hi: "किस ग्रह को 'भोर का तारा' या 'सांझ का तारा' के रूप में जाना जाता है?"
  },
  options: {
    en: ["Venus", "Mars", "Jupiter", "Mercury"],
    hi: ["शुक्र", "मंगल", "बृहस्पति", "बुध"]
  },
  answer: {
    en: "Venus",
    hi: "शुक्र"
  }
},

{
  question: {
    en: "Which cricket tournament is played between Indian states?",
    hi: "कौन सा क्रिकेट टूर्नामेंट भारतीय राज्यों के बीच खेला जाता है?"
  },
  options: {
    en: ["Ranji Trophy", "IPL", "Asia Cup", "Champions Trophy"],
    hi: ["रणजी ट्रॉफी", "IPL", "एशिया कप", "चैंपियंस ट्रॉफी"]
  },
  answer: {
    en: "Ranji Trophy",
    hi: "रणजी ट्रॉफी"
  }
},

{
  question: {
    en: "The population of a town is 15,000. If it increases by 20% the first year and decreases by 10% the next year, what is the population after 2 years?",
    hi: "एक कस्बे की जनसंख्या 15,000 है। यदि यह पहले वर्ष 20% बढ़ जाती है और अगले वर्ष 10% घट जाती है, तो 2 वर्ष बाद जनसंख्या क्या होगी?"
  },
  options: {
    en: ["16,500", "16,200", "15,800", "17,000"],
    hi: ["16,500", "16,200", "15,800", "17,000"]
  },
  answer: {
    en: "16,200",
    hi: "16,200"
  }
},

{
  question: {
    en: "If the volume of a rectangular parallelepiped is 450 cm³ and its base area is 50 cm², what is its height?",
    hi: "यदि एक आयताकार समांतर चतुर्भुज का आयतन 450 cm³ है और इसके आधार का क्षेत्रफल 50 cm² है, तो इसकी ऊँचाई क्या है?"
  },
  options: {
    en: ["7 cm", "8 cm", "9 cm", "10 cm"],
    hi: ["7 सेमी", "8 सेमी", "9 सेमी", "10 सेमी"]
  },
  answer: {
    en: "9 cm",
    hi: "9 सेमी"
  }
},

{
  question: {
    en: "How many natural numbers are there between 14² and 15²?",
    hi: "14² और 15² के बीच कितनी प्राकृतिक संख्याएँ हैं?"
  },
  options: {
    en: ["27", "30", "29", "28"],
    hi: ["27", "30", "29", "28"]
  },
  answer: {
    en: "28",
    hi: "28"
  }
},

{
  question: {
    en: "From a point P, a tangent is drawn to a circle with center O. The radius is 8 cm, and the distance from O to P is 17 cm. What is the length of the tangent?",
    hi: "एक बिंदु P से, केंद्र O वाले एक वृत्त पर एक स्पर्श रेखा खींची जाती है। त्रिज्या 8 सेमी है, और O से P की दूरी 17 सेमी है। स्पर्श रेखा की लंबाई क्या है?"
  },
  options: {
    en: ["12 cm", "15 cm", "18 cm", "20 cm"],
    hi: ["12 सेमी", "15 सेमी", "18 सेमी", "20 सेमी"]
  },
  answer: {
    en: "15 cm",
    hi: "15 सेमी"
  }
},

{
  question: {
    en: "The average weight of 4 students is 50 kg. If one more student weighing 60 kg joins, what is the new average weight?",
    hi: "4 छात्रों का औसत वजन 50 kg है। यदि 60 kg वजन वाला एक और छात्र शामिल हो जाता है, तो नया औसत वजन क्या है?"
  },
  options: {
    en: ["51 kg", "53 kg", "52 kg", "54 kg"],
    hi: ["51 kg", "53 kg", "52 kg", "54 kg"]
  },
  answer: {
    en: "52 kg",
    hi: "52 kg"
  }
},

{
  question: {
    en: "A sum fetches ₹3,600 as interest in 4 years at 6% per annum. What is the principal?",
    hi: "एक धनराशि पर 6% वार्षिक दर से 4 वर्षों में ₹3,600 ब्याज प्राप्त होता है। मूलधन क्या है?"
  },
  options: {
    en: ["₹12,000", "₹14,000", "₹15,000", "₹16,000"],
    hi: ["₹12,000", "₹14,000", "₹15,000", "₹16,000"]
  },
  answer: {
    en: "₹15,000",
    hi: "₹15,000"
  }
},

{
  question: {
    en: "A submarine was navigating at a depth of -45 meters below sea level. It then ascended 20 meters towards the surface. What is its new position relative to sea level?",
    hi: "एक पनडुब्बी समुद्र तल से -45 मीटर की गहराई पर चल रही थी। फिर वह सतह की ओर 20 मीटर ऊपर उठी। समुद्र तल के सापेक्ष इसकी नई स्थिति क्या है?"
  },
  options: {
    en: ["-25 meters", "-65 meters", "+25 meters", "-20 meters"],
    hi: ["-25 मीटर", "-65 मीटर", "+25 मीटर", "-20 मीटर"]
  },
  answer: {
    en: "-25 meters",
    hi: "-25 मीटर"
  }
},

{
  question: {
    en: "In a town, there are 3,800 females for every 4,000 males. What is the sex ratio in this town (number of females per 1000 males)?",
    hi: "एक शहर में, प्रत्येक 4,000 पुरुषों पर 3,800 महिलाएँ हैं। इस शहर में लिंगानुपात (प्रति 1000 पुरुषों पर महिलाओं की संख्या) क्या है?"
  },
  options: {
    en: ["920", "940", "950", "960"],
    hi: ["920", "940", "950", "960"]
  },
  answer: {
    en: "950",
    hi: "950"
  }
},

{
  question: {
    en: "A triangle has sides 5 cm, 12 cm, and 13 cm. What type of triangle is this?",
    hi: "एक त्रिभुज की भुजाएँ 5 सेमी, 12 सेमी और 13 सेमी हैं। यह किस प्रकार का त्रिभुज है?"
  },
  options: {
    en: ["Acute", "Obtuse", "Right-angled", "Equilateral"],
    hi: ["न्यूनकोण", "अधिककोण", "समकोण", "समबाहु"]
  },
  answer: {
    en: "Right-angled",
    hi: "समकोण"
  }
},

{
  question: {
    en: "A cone and a cylinder have the same radius and height. The ratio of their volumes is:",
    hi: "एक शंकु और एक बेलन की त्रिज्या और ऊँचाई समान है। उनके आयतनों का अनुपात क्या है?"
  },
  options: {
    en: ["1:2", "1:3", "2:3", "3:4"],
    hi: ["1:2", "1:3", "2:3", "3:4"]
  },
  answer: {
    en: "1:3",
    hi: "1:3"
  }
},

{
  question: {
    en: "In a bag of candies, 45% are red and 30% are blue. What percentage are green?",
    hi: "कैंडी के एक बैग में, 45% लाल और 30% नीली हैं। हरी कैंडी का प्रतिशत क्या है?"
  },
  options: {
    en: ["20%", "25%", "30%", "35%"],
    hi: ["20%", "25%", "30%", "35%"]
  },
  answer: {
    en: "25%",
    hi: "25%"
  }
},

{
  question: {
    en: "A shop offers two successive discounts on a product: the first is 15%, and the second is 10%. What is the single equivalent discount percentage?",
    hi: "एक दुकान एक उत्पाद पर दो क्रमिक छूट प्रदान करती है: पहली 15% है, और दूसरी 10% है। एकल समतुल्य छूट प्रतिशत क्या है?"
  },
  options: {
    en: ["23.5%", "24.0%", "24.5%", "25.0%"],
    hi: ["23.5%", "24.0%", "24.5%", "25.0%"]
  },
  answer: {
    en: "23.5%",
    hi: "23.5%"
  }
},

{
  question: {
    en: "A merchant buys 50 mugs for ₹2,000. He sells 30 of them at ₹50 each and the remaining at ₹35 each. What is his profit or loss percentage?",
    hi: "एक व्यापारी ₹2,000 में 50 मग खरीदता है। वह उनमें से 30 को ₹50 प्रत्येक की दर से और शेष को ₹35 प्रत्येक की दर से बेचता है। उसका लाभ या हानि प्रतिशत क्या है?"
  },
  options: {
    en: ["8%", "10%", "12%", "15%"],
    hi: ["8%", "10%", "12%", "15%"]
  },
  answer: {
    en: "10%",
    hi: "10%"
  }
},

{
  question: {
    en: "A bus takes 8 hours to cover a distance of 400 km. If its speed is increased by 30 km/h, how much time will it take?",
    hi: "एक बस 400 km की दूरी तय करने में 8 घंटे लेती है। यदि इसकी चाल 30 km/h बढ़ा दी जाए, तो इसमें कितना समय लगेगा?"
  },
  options: {
    en: ["4 hours", "5 hours", "6 hours", "7 hours"],
    hi: ["4 घंटे", "5 घंटे", "6 घंटे", "7 घंटे"]
  },
  answer: {
    en: "5 hours",
    hi: "5 घंटे"
  }
},

{
  question: {
    en: "The average of a set of 10 numbers is 45. If one number, 60, is replaced by 40, what is the new average?",
    hi: "10 संख्याओं के एक समूह का औसत 45 है। यदि एक संख्या, 60 को 40 से प्रतिस्थापित कर दिया जाता है, तो नया औसत क्या है?"
  },
  options: {
    en: ["41", "42", "43", "44"],
    hi: ["41", "42", "43", "44"]
  },
  answer: {
    en: "43",
    hi: "43"
  }
},

{
  question: {
    en: "A recipe needs 4 cups of sugar to make 18 cookies. How many cups of sugar are needed to make 27 cookies in the same proportion?",
    hi: "एक रेसिपी में 18 कुकीज़ बनाने के लिए 4 कप चीनी की आवश्यकता होती है। उसी अनुपात में 27 कुकीज़ बनाने के लिए कितने कप चीनी की आवश्यकता होगी?"
  },
  options: {
    en: ["5 cups", "6 cups", "7 cups", "8 cups"],
    hi: ["5 कप", "6 कप", "7 कप", "8 कप"]
  },
  answer: {
    en: "6 cups",
    hi: "6 कप"
  }
},

{
  question: {
    en: "What is 137/11 as a mixed number?",
    hi: "मिश्रित संख्या के रूप में 137/11 क्या है?"
  },
  options: {
    en: ["12 5/11", "11 5/11", "12 7/11", "11 7/11"],
    hi: ["12 5/11", "11 5/11", "12 7/11", "11 7/11"]
  },
  answer: {
    en: "12 5/11",
    hi: "12 5/11"
  }
},

{
  question: {
    en: "A bakery uses 24.6 kilograms of flour each day. On Monday, it used only 1/2 of the daily amount. On Tuesday, it used 20% more than it did on Monday. How much flour was used in total over the two days?",
    hi: "एक बेकरी प्रतिदिन 24.6 किलोग्राम आटे का उपयोग करती है। सोमवार को, इसने दैनिक मात्रा का केवल 1/2 उपयोग किया। मंगलवार को, इसने सोमवार की तुलना में 20% अधिक उपयोग किया। इन दो दिनों में कुल कितना आटा उपयोग किया गया?"
  },
  options: {
    en: ["27.06 kilograms", "28.50 kilograms", "26.04 kilograms", "25.50 kilograms"],
    hi: ["27.06 किलोग्राम", "28.50 किलोग्राम", "26.04 किलोग्राम", "25.50 किलोग्राम"]
  },
  answer: {
    en: "27.06 kilograms",
    hi: "27.06 किलोग्राम"
  }
},

{
  question: {
    en: "Which number set includes all rational and irrational numbers?",
    hi: "किस संख्या समुच्चय में सभी परिमेय और अपरिमेय संख्याएँ शामिल हैं?"
  },
  options: {
    en: ["Natural numbers", "Whole numbers", "Real numbers", "Complex numbers"],
    hi: ["प्राकृतिक संख्याएँ", "पूर्ण संख्याएँ", "वास्तविक संख्याएँ", "सम्मिश्र संख्याएँ"]
  },
  answer: {
    en: "Real numbers",
    hi: "वास्तविक संख्याएँ"
  }
},

{
  question: {
    en: "A train travels 240 km in 4 hours. What is its speed?",
    hi: "एक ट्रेन 4 घंटे में 240 km की यात्रा करती है। इसकी चाल क्या है?"
  },
  options: {
    en: ["55 km/h", "60 km/h", "65 km/h", "70 km/h"],
    hi: ["55 km/h", "60 km/h", "65 km/h", "70 km/h"]
  },
  answer: {
    en: "60 km/h",
    hi: "60 km/h"
  }
},

{
  question: {
    en: "A dealer allows a 20% discount on the marked price and still makes a profit of 12%. If the cost price of the article is ₹1,500, what is the marked price?",
    hi: "एक डीलर अंकित मूल्य पर 20% की छूट देता है और फिर भी 12% का लाभ अर्जित करता है। यदि वस्तु का क्रय मूल्य ₹1,500 है, तो अंकित मूल्य क्या है?"
  },
  options: {
    en: ["₹1,900", "₹2,000", "₹2,100", "₹2,200"],
    hi: ["₹1,900", "₹2,000", "₹2,100", "₹2,200"]
  },
  answer: {
    en: "₹2,100",
    hi: "₹2,100"
  }
},

{
  question: {
    en: "What is the selling price if the cost price is ₹600 and the profit is 15%?",
    hi: "यदि क्रय मूल्य ₹600 है और लाभ 15% है, तो विक्रय मूल्य क्या है?"
  },
  options: {
    en: ["₹675", "₹690", "₹700", "₹715"],
    hi: ["₹675", "₹690", "₹700", "₹715"]
  },
  answer: {
    en: "₹690",
    hi: "₹690"
  }
},

{
  question: {
    en: "P and Q complete a work in 16 days. Q alone takes 24 days. In how many days will P alone complete the work?",
    hi: "P और Q एक कार्य को 16 दिनों में पूरा करते हैं। Q अकेला 24 दिन लेता है। P अकेला उस कार्य को कितने दिनों में पूरा करेगा?"
  },
  options: {
    en: ["48 days", "50 days", "42 days", "54 days"],
    hi: ["48 दिन", "50 दिन", "42 दिन", "54 दिन"]
  },
  answer: {
    en: "48 days",
    hi: "48 दिन"
  }
},

{
  question: {
    en: "A solid cylinder is melted and recast into smaller cylinders of the same height but one-third the radius. How many smaller cylinders can be made?",
    hi: "एक ठोस बेलन को पिघलाया जाता है और उसी ऊँचाई लेकिन एक-तिहाई त्रिज्या वाले छोटे बेलनों में ढाला जाता है। कितने छोटे बेलन बनाए जा सकते हैं?"
  },
  options: {
    en: ["3", "6", "9", "12"],
    hi: ["3", "6", "9", "12"]
  },
  answer: {
    en: "9",
    hi: "9"
  }
},

{
  question: {
    en: "X and Y can complete a work in 10 days. Y alone can do it in 15 days. In how many days will X alone complete the work?",
    hi: "X और Y एक कार्य को 10 दिनों में पूरा कर सकते हैं। Y अकेला इसे 15 दिनों में कर सकता है। X अकेला उस कार्य को कितने दिनों में पूरा करेगा?"
  },
  options: {
    en: ["25 days", "30 days", "35 days", "40 days"],
    hi: ["25 दिन", "30 दिन", "35 दिन", "40 दिन"]
  },
  answer: {
    en: "30 days",
    hi: "30 दिन"
  }
},

{
  question: {
    en: "Fill in the blank with most appropriate option: He was __ nervous to walk up on stage and perform.",
    hi: "Fill in the blank with most appropriate option: He was __ nervous to walk up on stage and perform."
  },
  options: {
    en: ["somewhat", "fairly", "too", "quite"],
    hi: ["somewhat", "fairly", "too", "quite"]
  },
  answer: {
    en: "too",
    hi: "too"
  }
},

{
  question: {
    en: "Identify the antonym of \"Denounce\":",
    hi: "\"Denounce\" का विलोम शब्द पहचानें:"
  },
  options: {
    en: ["Approve", "Criticise", "Rebuke", "Condemn"],
    hi: ["Approve", "Criticise", "Rebuke", "Condemn"]
  },
  answer: {
    en: "Approve",
    hi: "Approve"
  }
},

{
  question: {
    en: "Identify the synonym of 'Zenith':",
    hi: "'Zenith' का समानार्थी शब्द पहचानें:"
  },
  options: {
    en: ["Peak", "Descent", "Bottom", "Valley"],
    hi: ["Peak", "Descent", "Bottom", "Valley"]
  },
  answer: {
    en: "Peak",
    hi: "Peak"
  }
},

{
  question: {
    en: "Identify the synonym of 'Xenial':",
    hi: "'Xenial' का समानार्थी शब्द पहचानें:"
  },
  options: {
    en: ["Hospitable", "Hostile", "Indifferent", "Reclusive"],
    hi: ["Hospitable", "Hostile", "Indifferent", "Reclusive"]
  },
  answer: {
    en: "Hospitable",
    hi: "Hospitable"
  }
},

{
  question: {
    en: "Find the part of the sentence that contains an error: They set up their camp (1) / besides the river (2) / and spent (3) / the entire night there (4).",
    hi: "Find the part of the sentence that contains an error: They set up their camp (1) / besides the river (2) / and spent (3) / the entire night there (4)."
  },
  options: {
    en: ["They set up their camp (1)", "besides the river (2)", "and spent (3)", "the entire night there (4)"],
    hi: ["They set up their camp (1)", "besides the river (2)", "and spent (3)", "the entire night there (4)"]
  },
  answer: {
    en: "besides the river (2)",
    hi: "besides the river (2)"
  }
},

{
  question: {
    en: "Find the part of the sentence that contains an error: The furniture (1) / in that old room are (2) / quite worn out (3) / and dusty (4).",
    hi: "Find the part of the sentence that contains an error: The furniture (1) / in that old room are (2) / quite worn out (3) / and dusty (4)."
  },
  options: {
    en: ["The furniture (1)", "in that old room are (2)", "quite worn out (3)", "and dusty (4)"],
    hi: ["The furniture (1)", "in that old room are (2)", "quite worn out (3)", "and dusty (4)"]
  },
  answer: {
    en: "in that old room are (2)",
    hi: "in that old room are (2)"
  }
},

{
  question: {
    en: "Identify the antonym of \"Taciturn\":",
    hi: "\"Taciturn\" का विलोम शब्द पहचानें:"
  },
  options: {
    en: ["Garrulous", "Reticent", "Introverted", "Withdrawn"],
    hi: ["Garrulous", "Reticent", "Introverted", "Withdrawn"]
  },
  answer: {
    en: "Garrulous",
    hi: "Garrulous"
  }
},

{
  question: {
    en: "Pick the correctly spelled word:",
    hi: "सही वर्तनी वाला शब्द चुनें:"
  },
  options: {
    en: ["Occurence", "Occurance", "Occurrence", "Occurrance"],
    hi: ["Occurence", "Occurance", "Occurrence", "Occurrance"]
  },
  answer: {
    en: "Occurrence",
    hi: "Occurrence"
  }
},

{
  question: {
    en: "Choose the correct one-word substitution for: \"A written law formally enacted by a legislative body.\"",
    hi: "निम्नलिखित के लिए सही एक-शब्द प्रतिस्थापन चुनें: \"A written law formally enacted by a legislative body.\""
  },
  options: {
    en: ["Ordinance", "Statute", "Manifesto", "Decree"],
    hi: ["Ordinance", "Statute", "Manifesto", "Decree"]
  },
  answer: {
    en: "Statute",
    hi: "Statute"
  }
},

{
  question: {
    en: "Arrange the passage correctly: (1) He placed the vegetables in the pan and stirred gently. (2) He washed and chopped the vegetables carefully. (3) He served the dish on a plate and sat down to eat. (4) He lit the stove and added a little oil to the pan.",
    hi: "Arrange the passage correctly: (1) He placed the vegetables in the pan and stirred gently. (2) He washed and chopped the vegetables carefully. (3) He served the dish on a plate and sat down to eat. (4) He lit the stove and added a little oil to the pan."
  },
  options: {
    en: ["2-1-4-3", "2-4-1-3", "4-2-1-3", "1-2-3-4"],
    hi: ["2-1-4-3", "2-4-1-3", "4-2-1-3", "1-2-3-4"]
  },
  answer: {
    en: "2-4-1-3",
    hi: "2-4-1-3"
  }
},

{
  question: {
    en: "Choose the correct one-word substitution for: \"A person who studies the origin and historical development of words.\"",
    hi: "निम्नलिखित के लिए सही एक-शब्द प्रतिस्थापन चुनें: \"A person who studies the origin and historical development of words.\""
  },
  options: {
    en: ["Etymologist", "Anthropologist", "Philatelist", "Lexicographer"],
    hi: ["Etymologist", "Anthropologist", "Philatelist", "Lexicographer"]
  },
  answer: {
    en: "Etymologist",
    hi: "Etymologist"
  }
},

{
  question: {
    en: "Fill in the blank with most appropriate option: This road is __ than the one we took on our last trip.",
    hi: "Fill in the blank with most appropriate option: This road is __ than the one we took on our last trip."
  },
  options: {
    en: ["narrow", "narrower", "narrowest", "more narrow"],
    hi: ["narrow", "narrower", "narrowest", "more narrow"]
  },
  answer: {
    en: "narrower",
    hi: "narrower"
  }
},

{
  question: {
    en: "Fill in the blank with most appropriate option: She delivered her speech __ clearly, earning applause from the audience.",
    hi: "Fill in the blank with most appropriate option: She delivered her speech __ clearly, earning applause from the audience."
  },
  options: {
    en: ["much", "vary", "more", "quite"],
    hi: ["much", "vary", "more", "quite"]
  },
  answer: {
    en: "quite",
    hi: "quite"
  }
},

{
  question: {
    en: "Which word is spelled correctly?",
    hi: "कौन सा शब्द सही वर्तनी वाला है?"
  },
  options: {
    en: ["Conscientious", "Consientious", "Consciencious", "Conscientous"],
    hi: ["Conscientious", "Consientious", "Consciencious", "Conscientous"]
  },
  answer: {
    en: "Conscientious",
    hi: "Conscientious"
  }
},

{
  question: {
    en: "Arrange the passage correctly: (1) She selected her preferred size and added the item to her cart. (2) She visited the website and browsed through the clothing section. (3) A confirmation message appeared on the screen once the order was placed. (4) She entered her payment details and clicked the 'Order Now' button.",
    hi: "Arrange the passage correctly: (1) She selected her preferred size and added the item to her cart. (2) She visited the website and browsed through the clothing section. (3) A confirmation message appeared on the screen once the order was placed. (4) She entered her payment details and clicked the 'Order Now' button."
  },
  options: {
    en: ["2-1-4-3", "1-2-4-3", "2-4-1-3", "1-4-2-3"],
    hi: ["2-1-4-3", "1-2-4-3", "2-4-1-3", "1-4-2-3"]
  },
  answer: {
    en: "2-1-4-3",
    hi: "2-1-4-3"
  }
},

{
  question: {
    en: "Arrange the passage correctly: (1) The machine dispensed the cash, and she collected it carefully. (2) She inserted her debit card into the ATM slot. (3) She selected the withdrawal option and entered the desired amount. (4) She entered her PIN number on the keypad.",
    hi: "Arrange the passage correctly: (1) The machine dispensed the cash, and she collected it carefully. (2) She inserted her debit card into the ATM slot. (3) She selected the withdrawal option and entered the desired amount. (4) She entered her PIN number on the keypad."
  },
  options: {
    en: ["2-4-3-1", "4-2-1-3", "2-1-4-3", "1-2-4-3"],
    hi: ["2-4-3-1", "4-2-1-3", "2-1-4-3", "1-2-4-3"]
  },
  answer: {
    en: "2-4-3-1",
    hi: "2-4-3-1"
  }
},

{
  question: {
    en: "Arrange the sentences correctly: (1) She grabbed her bag and rushed out of the house. (2) She prepared a quick breakfast in the kitchen. (3) She woke up to the sound of her alarm. (4) She reached the office just in time.",
    hi: "Arrange the sentences correctly: (1) She grabbed her bag and rushed out of the house. (2) She prepared a quick breakfast in the kitchen. (3) She woke up to the sound of her alarm. (4) She reached the office just in time."
  },
  options: {
    en: ["3-1-2-4", "2-3-1-4", "1-2-3-4", "3-2-1-4"],
    hi: ["3-1-2-4", "2-3-1-4", "1-2-3-4", "3-2-1-4"]
  },
  answer: {
    en: "3-2-1-4",
    hi: "3-2-1-4"
  }
},

{
  question: {
    en: "Fill in the blank with most appropriate option: No sooner had she opened the door __ the phone rang.",
    hi: "Fill in the blank with most appropriate option: No sooner had she opened the door __ the phone rang."
  },
  options: {
    en: ["than", "when", "then", "as"],
    hi: ["than", "when", "then", "as"]
  },
  answer: {
    en: "than",
    hi: "than"
  }
},

{
  question: {
    en: "Arrange the passage correctly: (1) The sapling grew into a beautiful tree over the years. (2) She dug a small hole in the ground. (3) She watered it every day with great care. (4) She placed the sapling gently into the hole.",
    hi: "Arrange the passage correctly: (1) The sapling grew into a beautiful tree over the years. (2) She dug a small hole in the ground. (3) She watered it every day with great care. (4) She placed the sapling gently into the hole."
  },
  options: {
    en: ["2-4-3-1", "1-2-3-4", "4-2-1-3", "2-3-4-1"],
    hi: ["2-4-3-1", "1-2-3-4", "4-2-1-3", "2-3-4-1"]
  },
  answer: {
    en: "2-4-3-1",
    hi: "2-4-3-1"
  }
},

{
  question: {
    en: "Choose the correct meaning of the given idiom/phrase: \"Burn the midnight oil\"",
    hi: "दिए गए मुहावरे/वाक्यांश का सही अर्थ चुनें: \"Burn the midnight oil\""
  },
  options: {
    en: ["To work or study very late into the night", "To waste time on unimportant things", "To celebrate a hard-earned victory", "To cause unnecessary trouble"],
    hi: ["To work or study very late into the night", "To waste time on unimportant things", "To celebrate a hard-earned victory", "To cause unnecessary trouble"]
  },
  answer: {
    en: "To work or study very late into the night",
    hi: "To work or study very late into the night"
  }
},

{
  question: {
    en: "Find the part of the sentence that contains an error: The principal shared (1) / a important announcement (2) / with all the (3) / students present (4).",
    hi: "Find the part of the sentence that contains an error: The principal shared (1) / a important announcement (2) / with all the (3) / students present (4)."
  },
  options: {
    en: ["The principal shared (1)", "a important announcement (2)", "with all the (3)", "students present (4)"],
    hi: ["The principal shared (1)", "a important announcement (2)", "with all the (3)", "students present (4)"]
  },
  answer: {
    en: "a important announcement (2)",
    hi: "a important announcement (2)"
  }
},

{
  question: {
    en: "Fill in the blank with most appropriate phrasal verb: The candle flickered wildly in the wind, and she struggled to __ it __.",
    hi: "Fill in the blank with most appropriate phrasal verb: The candle flickered wildly in the wind, and she struggled to __ it __."
  },
  options: {
    en: ["blow — out", "set — up", "put — off", "turn — over"],
    hi: ["blow — out", "set — up", "put — off", "turn — over"]
  },
  answer: {
    en: "blow — out",
    hi: "blow — out"
  }
},

{
  question: {
    en: "Find the part of the sentence that contains an error: He met (1) / a IAS officer (2) / at the seminar (3) / held last Friday (4).",
    hi: "Find the part of the sentence that contains an error: He met (1) / a IAS officer (2) / at the seminar (3) / held last Friday (4)."
  },
  options: {
    en: ["He met (1)", "a IAS officer (2)", "at the seminar (3)", "held last Friday (4)"],
    hi: ["He met (1)", "a IAS officer (2)", "at the seminar (3)", "held last Friday (4)"]
  },
  answer: {
    en: "a IAS officer (2)",
    hi: "a IAS officer (2)"
  }
},

{
  question: {
    en: "Choose the correct meaning of the given idiom/phrase: \"Bite the bullet\"",
    hi: "दिए गए मुहावरे/वाक्यांश का सही अर्थ चुनें: \"Bite the bullet\""
  },
  options: {
    en: ["To act in an aggressive manner", "To endure a painful or difficult situation bravely", "To give up on a task too easily", "To make a decision in great haste"],
    hi: ["To act in an aggressive manner", "To endure a painful or difficult situation bravely", "To give up on a task too easily", "To make a decision in great haste"]
  },
  answer: {
    en: "To endure a painful or difficult situation bravely",
    hi: "To endure a painful or difficult situation bravely"
  }
},

{
  question: {
    en: "Find the part of the sentence that contains an error: The manager was angry (1) / on the employee (2) / for reporting (3) / late to work (4).",
    hi: "Find the part of the sentence that contains an error: The manager was angry (1) / on the employee (2) / for reporting (3) / late to work (4)."
  },
  options: {
    en: ["The manager was angry (1)", "on the employee (2)", "for reporting (3)", "late to work (4)"],
    hi: ["The manager was angry (1)", "on the employee (2)", "for reporting (3)", "late to work (4)"]
  },
  answer: {
    en: "on the employee (2)",
    hi: "on the employee (2)"
  }
}
    ]

}

];


const hscQuestions = [
  {
    question: {
      en: "Find next: 2, 4, 8, 16, ?",
      hi: "श्रृंखला पूरी करें: 2, 4, 8, 16, ?"
    },
    options: {
      en: ["18", "24", "32", "30"],
      hi: ["18", "24", "32", "30"]
    },
    answer: {
      en: "32",
      hi: "32"
    }
  

}
];
const graduateQuestions = [
  {
    question: {
      en: "Who wrote Indian Constitution?",
      hi: "भारतीय संविधान किसने लिखा?"
    },
    options: {
      en: ["Nehru", "Ambedkar", "Gandhi", "Patel"],
      hi: ["नेहरू", "अंबेडकर", "गांधी", "पटेल"]
    },
    answer: {
      en: "Ambedkar",
      hi: "अंबेडकर"
    }
    
  }
  
];
const hscPapers = [
  {
    title: "HSC Practice Paper",
    date: "2025",
    shift: "-",
    questions: hscQuestions
  }
];

const graduatePapers = [
  {
    title: "Graduate Practice Paper",
    date: "2025",
    shift: "-",
    questions: graduateQuestions
  }
];



  const [start, setStart] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 3600 seconds = 60 min
  const [showResult, setShowResult] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [lang, setLang] = useState("en");
  const [mode, setMode] = useState(null);
  const [selectedPaperIndex, setSelectedPaperIndex] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  useEffect(() => {
  setCurrent(0);
  setAnswers({});
  setReview({});
  setShowResult(false);
  setShowReview(false);
  setTimeLeft(60 * 60);  // 🔥 ADD THIS
}, [selectedPaperIndex]);

 const papers =
  mode === "matric"
    ? matricPapers
    : mode === "hsc"
    ? hscPapers
    : graduatePapers;

const currentPaper = papers?.[selectedPaperIndex];
const questions = currentPaper?.questions || [];
  useEffect(() => {
  const saved = localStorage.getItem("mockTestData");

  if (saved) {
    const data = JSON.parse(saved);

    setAnswers(data.answers || {});
    setReview(data.review || {});
    setCurrent(data.current || 0);
    setTimeLeft(data.timeLeft || 60);
    setStart(data.start || false);
    setShowResult(data.showResult || false);
  }
}, []);
  // Timer
 useEffect(() => {
  if (!start || showResult) return;

  if (timeLeft === 0) {
    setShowResult(true); // ✅ AUTO SUBMIT
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [start, timeLeft, showResult]);
useEffect(() => {
  localStorage.setItem("mockTestData", JSON.stringify({
    answers,
    review,
    current,
    timeLeft,
    start,
    showResult
  }));
}, [answers, review, current, timeLeft, start, showResult]);
  useEffect(() => {
  if (!showResult) return;

  // ✅ calculate result here
  const result = calculateResult();
  const total = questions.length;

  const accuracy =
    result.correct + result.wrong === 0
      ? 0
      : ((result.correct / (result.correct + result.wrong)) * 100).toFixed(1);

  const history = JSON.parse(localStorage.getItem("testHistory")) || [];

  const newEntry = {
    date: new Date().toLocaleString(),
    score: result.marks,
    correct: result.correct,
    wrong: result.wrong,
    accuracy,
    paper: currentPaper?.title,
    timeUsed: 60 - timeLeft
  };

  history.unshift(newEntry);

  localStorage.setItem("testHistory", JSON.stringify(history));
}, [showResult, questions, timeLeft, currentPaper]);


  const handleAnswer = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  const calculateResult = () => {
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  questions.forEach((q, i) => {
    if (!answers[i]) {
      unattempted++;
    } else if (answers[i] === q.answer[lang]) {
      correct++;
    } else {
      wrong++;
    }
  });

  // SSC pattern (example)
  const marks = (correct * 1 - wrong * 0.25).toFixed(2);

  return { correct, wrong, unattempted, marks };
};
if (!questions.length && mode && start) {
  return <h2>No questions available</h2>;
}

  return (
    <div>
      {showHistory ? (
  <div style={{ padding: "20px" }}>
    <h2>📊 Test History</h2>

    {(JSON.parse(localStorage.getItem("testHistory")) || []).map((h, i) => (
      <div key={i} style={{
        marginBottom: "15px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        <p><b>📄 {h.paper}</b></p>
        <p>📅 {h.date}</p>
        <p>🎯 Score: {h.score}</p>
        <p>✅ Correct: {h.correct} | ❌ Wrong: {h.wrong}</p>
        <p>📈 Accuracy: {h.accuracy}%</p>
        <p>⏱ Time Used: {h.timeUsed}s</p>
      </div>
    ))}

    <button onClick={() => setShowHistory(false)}>
      🔙 Back
    </button>
  </div>


    ) :  !mode ? (
  <div style={{ textAlign: "center", marginTop: "100px" }}>
    <h1>Select Test Level</h1>

    <button onClick={() => setMode("matric")}>
      📘 Matriculation
    </button>

    <button onClick={() => setMode("hsc")} style={{ marginLeft: "10px" }}>
      📗 HSC
    </button>

    <button onClick={() => setMode("graduate")} style={{ marginLeft: "10px" }}>
      🎓 Graduate
    </button>

    <button onClick={() => setShowHistory(true)}>
  📊 View History
</button>
  </div>


) : !start ? (
  <div style={{ textAlign: "center", marginTop: "100px" }}>
    <h1>SSC Mock Test</h1>
    <button onClick={() => setStart(true)}>Start Test</button>
  </div>

) : showReview ? (
  <div style={{ padding: "20px" }}>
    <h2>📖 Answer Review</h2>

    {questions.map((q, i) => (
      <div key={i} style={{ marginBottom: "15px" }}>
        <p><b>Q{i + 1}:</b> {q.question[lang]}</p>

        <p>Your Answer: {answers[i] || "Not Attempted"}</p>
        <p>Correct Answer: {q.answer[lang]}</p>

        <p style={{
          color: answers[i] === q.answer[lang] ? "green" : "red"
        }}>
          {answers[i] === q.answer[lang] ? "✔ Correct" : "❌ Wrong"}
        </p>
      </div>
    ))}
    <button onClick={() => setShowReview(false)}>
  🔙 Back to Result
</button>
  </div>

      ) : showResult ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
        {(() => {

  const result = calculateResult();   // ✅ FIRST

  const total = questions.length;

  const accuracy =
    result.correct + result.wrong === 0
      ? 0
      : ((result.correct / (result.correct + result.wrong)) * 100).toFixed(1);

  const attemptRate =
    ((result.correct + result.wrong) / total * 100).toFixed(1);

  const scorePercent =
    ((result.marks / total) * 100).toFixed(1);
          
  return (
    <>
      <h2>
  {timeLeft === 0 ? "⏰ Time Up!" : "Test Completed 🎉"}
</h2>

      <p>✅ Correct: {result.correct}</p>
      <p>❌ Wrong: {result.wrong}</p>
      <p>⚪ Unattempted: {result.unattempted}</p>

<p>📉 Negative Marks: {(result.wrong * 0.25).toFixed(2)}</p>
      <h3>📊 Final Score: {result.marks}</h3>

      <div style={{
  marginTop: "30px",
  padding: "20px",
  borderRadius: "10px",
background: "rgba(255, 255, 255, 0.05)",
backdropFilter: "blur(10px)",
color: "white",
boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
}}>
  <h3>📊 Performance Analytics</h3>

  <p>🎯 Accuracy: <b>{accuracy}%</b></p>
  <p>📌 Attempt Rate: <b>{attemptRate}%</b></p>
  <p>📈 Score %: <b>{scorePercent}%</b></p>
</div>

<div style={{ marginTop: "15px" }}>
  <p>Score Progress:</p>
  <div style={{
    width: "100%",
    background: "#ddd",
    borderRadius: "10px",
    overflow: "hidden"
  }}>
    <div style={{
      width: `${scorePercent}%`,
      background: "#4caf50",
      padding: "8px",
      color: "white",
      textAlign: "center"
    }}>
      {scorePercent}%
    </div>
  </div>
</div>
      <button onClick={() => setShowReview(true)}>
  📖 Review Answers
</button>
    </>
  );
})()}
        </div>

      ) : (
        <div className="container">

          {/* LEFT SIDE */}
          <div className="left">
<h3>
  ⏱ Time: {Math.floor(timeLeft / 60)}:
  {String(timeLeft % 60).padStart(2, "0")}
</h3>

<div style={{ marginBottom: "20px" }}>
  <label style={{ marginRight: "10px" }}>📄 Select Paper:</label>

  <select
    value={selectedPaperIndex}
    onChange={(e) => setSelectedPaperIndex(Number(e.target.value))}
  >
    {papers.map((paper, index) => (
      <option key={index} value={index}>
        {paper.title} | {paper.date} | {paper.shift}
      </option>
    ))}
  </select>
</div>
<div style={{ marginBottom: "20px" }}>
  <h2>{currentPaper?.title}</h2>
  <p>📅 {currentPaper?.date}</p>
  <p>🕒 {currentPaper?.shift}</p>
</div>
            <div style={{ marginBottom: "15px" }}>
  <button onClick={() => setLang("en")}>English</button>
  <button onClick={() => setLang("hi")} style={{ marginLeft: "10px" }}>
    हिंदी
  </button>
</div>
            <h2>Question {current + 1}</h2>
          <p>{questions[current]?.question?.[lang]}</p>
            <div style={{ marginTop: "20px" }}>
  <button 
    onClick={() => setCurrent(current - 1)} 
    disabled={current === 0}
  >
    ⬅ Previous
  </button>

  <button 
    onClick={() => setCurrent(current + 1)} 
    disabled={current === questions.length - 1}
    style={{ marginLeft: "10px" }}
  >
    Next ➡
  </button>
  <button
  onClick={() =>
    setReview({ ...review, [current]: !review[current] })
  }
  style={{ marginLeft: "10px" }}
>
  ⭐ Mark for Review
</button>
</div>

            {questions[current]?.options?.[lang]?.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
  handleAnswer(opt);
  if (current < questions.length - 1) {
    setCurrent(current + 1);
  }
}}
                className={`button ${
                  answers[current] === opt ? "selected" : ""
                }`}
              >
                {opt}
              </button>
            ))}

           <button 
  onClick={() => setShowResult(true)}
  disabled={Object.keys(answers).length === 0}
>
  Submit Test
</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <h3>Questions</h3>
            <div style={{ marginBottom: "10px" }}>
  <span>🟢 Answered </span>
  <span>🟡 Review </span>
  <span>🟣 Answered + Review</span>
</div>

            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`palette-btn 
  ${answers[i] ? "answered" : ""} 
  ${review[i] ? "review" : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default App;