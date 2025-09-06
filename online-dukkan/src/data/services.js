// // src/data/services.js

// export const services = [
//   {
//     id: 1,
//     title: "Caste Certificate (जात प्रमाणपत्र)",
//     description: "३ वर्षांचा उत्पन्न दाखला आवश्यक",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड (सुलभ व झेरॉक्स)",
//       "टी.सी. (सुलभ व झेरॉक्स)",
//       "उत्पन्न दाखला (३ वर्षे)",
//       "रेशन कार्ड",
//       "स्वयंघोषणपत्र व बाळगिराचे फोटो"
//     ]
//   },
//   {
//     id: 2,
//     title: "Domicile (डोमेसाइल)",
//     description: "राज्याचा रहिवासी दाखला",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड (सुलभ व झेरॉक्स)",
//       "सुलभ टी.सी./बोर्ड सर्टिफिकेट",
//       "रेशन कार्ड",
//       "म.न.प./ग्रामपंचायत रहिवासी दाखला",
//       "स्वयंघोषणपत्र व बाळगिराचे फोटो"
//     ]
//   },
//   {
//     id: 3,
//     title: "PAN Card (पॅन कार्ड)",
//     description: "नवीन / दुरुस्ती अर्ज",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड",
//       "३ फोटो",
//       "जुने पॅन कार्ड (जर बदल असेल तर)",
//       "आधार अपडेट झाल्यास १० वी किंवा १२ वी ची मार्कशीट",
//       "टी.सी. अथवा बोर्ड सर्टिफिकेट"
//     ]
//   },
//   {
//     id: 4,
//     title: "ST Bus Pass / Smart Card (एसटी. स्मार्ट कार्ड)",
//     description: "विद्यार्थ्यांसाठी पास",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड",
//       "मतदार ओळखपत्र / ड्रायव्हिंग लायसन्स",
//       "मोबाइल नंबर",
//       "शाळेचा दाखला",
//       "ST बस स्टॉप पिकअप स्मार्ट कार्ड व पासेस बनवण्यासाठी विद्यार्थी फोटो"
//     ]
//   },
//   {
//     id: 5,
//     title: "Ayushman Bharat (आयुष्मान भारत)",
//     description: "आरोग्य योजना कार्ड",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड",
//       "रेशन कार्ड",
//       "प्रमाणपत्र पत्र"
//     ]
//   },
//   {
//     id: 6,
//     title: "Voting Card (मतदार कार्ड)",
//     description: "मतदार नोंदणी व सुधारणा",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड",
//       "जन्म दाखला",
//       "फोटो",
//       "निवासाचा पुरावा (लाईट बिल, टेलिफोन बिल इ.)"
//     ]
//   },
//   {
//     id: 7,
//     title: "UDID Card (अपंग प्रमाणपत्र)",
//     description: "अपंगांसाठी विशेष कार्ड",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड",
//       "अपंगत्वाचे प्रमाणपत्र",
//       "फोटो"
//     ]
//   },
//   {
//     id: 8,
//     title: "Udyog Aadhaar (उद्योग आधार)",
//     description: "उद्योजकांसाठी आधार नोंदणी",
//     details: "आवश्यक कागदपत्रे:",
//     documents: [
//       "आधार कार्ड",
//       "पॅन कार्ड",
//       "व्यवसाय नोंदणी कागदपत्रे",
//       "बँक पासबुक"
//     ]
//   }
// ];


export const services = [
  {
    id: 1,
    title: "डोमिसाईल दाखला (Domicile Certificate)",
    description: "स्थायी रहिवासी दाखला",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड / PAN / Voter ID (O.R.)",
      "पत्ता दाखला (Water Bill / Ration Card / 7/12)",
      "जन्म दाखला किंवा Bonafide Certificate",
      "Self⁠–Declaration / Affidavit",
      "Passport size photos"
    ]
  },
  {
    id: 2,
    title: "उत्पन्नाचा दाखला (Income Certificate)",
    description: "वार्षिक उत्पन्न दाखला",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड / PAN / Voter ID",
      "पत्ता दाखला (Water Bill / Ration Card)",
      "Form-16 किंवा Income Tax Return",
      "Self⁠–Declaration / Affidavit",
      "Passport size photo"
    ]
  },
  {
    id: 3,
    title: "जातिचा दाखला (Caste Certificate)",
    description: "SC / ST / OBC / SBC दाखला",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "ओळखपत्र (आधार / PAN / Voter ID)",
      "पत्ता दाखला (Ration Card / Utility Bill)",
      "Self⁠–Declaration / Affidavit",
      "जात Validity Certificate (जर आधी मिळालेली असेल)",
      "Record of Rights / Kotwal Book / Khaasara"
    ]
  },
  {
    id: 4,
    title: "जेष्ठ नागरिक दाखला (Senior Citizen Certificate)",
    description: "Senior नागरिकांसाठी दाखला",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "जन्म दाखला / School Leaving Certificate",
      "आधार / PAN / Voter ID",
      "पत्ता दाखला (Ration Card / Utility Bill)",
      "Form-16 किंवा Pension slip (जर लागू असेल)",
      "Passport size photo"
    ]
  },
  {
    id: 5,
    title: "नॉन क्रीमीलयर दाखला (Non-Creamy Layer Certificate)",
    description: "OBC / SBC वर्गांची नॉन-Creamy Layer दाखला",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "केंद्र / राज्य ओळखपत्र (आधार / PAN)",
      "पत्ता दाखला",
      "Income proof (Form-16 / ITR)",
      "Self⁠–Declaration / Affidavit",
      "Passport size photo"
    ]
  },
  {
    id: 6,
    title: "स्थानिक रहिवासी दाखला (Local Resident Certificate)",
    description: "स्थानीय रहिवासी दाखला",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार / PAN / Voter ID",
      "पत्ता दाखला",
      "Bonafide Certificate",
      "Self⁠–Declaration / Affidavit",
      "Passport size photo"
    ]
  },
  {
    id: 7,
    title: "सिधा पत्रिका (Personal Identity Card)",
    description: "स्थानीय ओळखपत्र",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड / PAN",
      "Passport size photo",
      "रहिवासी दाखला / Bonafide Certificate"
    ]
  },
  {
    id: 8,
    title: "तलाठी सुविधा (Talathi Office Services)",
    description: "Talathi office संबंधित सेवा",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड",
      "पत्ता दाखला",
      "कुंटाळ्याचा दाखला / वारस दाखला",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 9,
    title: "उशिरा जन्म नोंदणी (Late Birth Registration)",
    description: "जन्म नोंदणी उशिरा अर्ज",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "जन्म दाखला (जर उपलब्ध नसेल तर)",
      "Parent’s Aadhaar / PAN",
      "School Leaving Certificate / Bonafide Certificate",
      "Self⁠–Declaration / Affidavit",
      "Passport size photo"
    ]
  },
  {
    id: 10,
    title: "उशिरा मृत्यु नोंदणी (Late Death Registration)",
    description: "मृत्यू नोंदणी उशिरा अर्ज",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "Death Certificate / Cremation Certificate",
      "Parent’s Aadhaar / PAN",
      "Bonafide / Funeral Receipt",
      "Self⁠–Declaration / Affidavit"
    ]
  },
  {
    id: 11,
    title: "पॅन कार्ड (PAN Card)",
    description: "नवीन / दुरुस्ती अर्ज",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड",
      "फोटो (Passport size)",
      "Email ID व Mobile Number",
      "जुने PAN कार्ड (जर बदल होत असेल तर)",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 12,
    title: "रोजगार नोंदणी (Employment Registration)",
    description: "रोजगार नोंदणी अर्ज",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड / Voter ID",
      "शाळेचा / कॉलेजचा दाखला",
      "Bonafide Certificate",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 13,
    title: "७/१२ चा उतारा (7/12 Extract)",
    description: "भूमि अभिलेख तपशील",
    details: "आवश्यक माहिती:",
    documents: [
      "Survey / CTS Number",
      "Plot नंबर किंवा Property Details",
      "Owner Aadhaar / PAN",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 14,
    title: "८A उतारा (8A Extract)",
    description: "जमिनीचा 8A तपशील",
    details: "आवश्यक माहिती:",
    documents: [
      "Survey / CTS Number",
      "Plot नंबर / Land Details",
      "Owner Aadhaar / PAN",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 15,
    title: "लॉज लायसन्स (Lodge License)",
    description: "अल्प वेळ राहण्याची लायसन्स",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "पत्ता दाखला",
      "PAN / Aadhaar",
      "GST Registration ( जर लागू असेल तर)",
      "Building Plan / Layout",
      "Passport size photo"
    ]
  },
  {
    id: 16,
    title: "हॉटेल लायसन्स (Hotel License)",
    description: "Hotel / Lodge License",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "पत्ता दाखला",
      "PAN / Aadhaar",
      "GST Registration",
      "Building Plan",
      "Food License (FSSAI)",
      "Passport size photo"
    ]
  },
  {
    id: 17,
    title: "खानावळीचे प्रमाणपत्र (Mess Certificate)",
    description: "Mess / Canteen Certificate",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "PAN / Aadhaar",
      "Mess Address proof",
      "Business registration certificate",
      "Food License (FSSAI)",
      "Passport size photo"
    ]
  },
  {
    id: 18,
    title: "उद्योग आधार (Udyog Aadhaar)",
    description: "MSME / Udyog Aadhaar",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "PAN / Aadhaar",
      "Business registration docs",
      "Bank passbook",
      "Utility Bill / Rent agreement"
    ]
  },
  {
    id: 19,
    title: "वारस दाखला (Legal Heir Certificate)",
    description: "वारस दाखला",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "मृत्यू प्रमाणपत्र",
      "आधार / PAN",
      "रहिवासी दाखला",
      "Birth certificates of heirs",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 20,
    title: "मनी ट्रान्सफर (Money Transfer)",
    description: "बँक मनी ट्रान्सफर सेवा",
    details: "आवश्यक माहिती:",
    documents: [
      "Bank account number",
      "IFSC code",
      "PAN / Aadhaar",
      "Identity proof",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 21,
    title: "पासपोर्ट (Passport)",
    description: "नवीन / नूतनीकरण अर्ज",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड",
      "Birth Certificate",
      "PAN / Voter ID",
      "Passport size photo",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 22,
    title: "स्वावलंबन योजना (Self-Employment Scheme)",
    description: "स्वावलंबन योजना नोंदणी",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार कार्ड",
      "PAN card",
      "Business plan / proposal",
      "Bank passbook",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 23,
    title: "उम्मीद रोजगार (Employment Scheme)",
    description: "उम्मीद रोजगार योजना अर्ज",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार / Voter ID",
      "Bonafide Certificate",
      "School Leaving Certificate",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 24,
    title: "गुमास्ता लायसन्स (Gumasta License)",
    description: "Shop Act / Trade License",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "PAN / Aadhaar",
      "Business address proof",
      "NOC from landlord",
      "GST registration",
      "Passport size photo"
    ]
  },
  {
    id: 25,
    title: "राष्ट्रीय पेन्शन योजना (National Pension System)",
    description: "राष्ट्रीय पेन्शन नोंदणी",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "PAN card",
      "Aadhaar card",
      "Address proof",
      "Bank details",
      "Self⁠–Declaration"
    ]
  },
  {
    id: 26,
    title: "महाराष्ट्र शासन राजपत्र (Maharashtra Gazette)",
    description: "राजपत्र प्रकाशन प्रक्रियेसाठी",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "Gazette application form",
      "Identity proof (Aadhaar / PAN)",
      "Address proof",
      "Letter from authority (if applicable)",
      "Passport size photo"
    ]
  },
  {
    id: 27,
    title: "आधार कार्ड / स्मार्ट कार्ड (Aadhaar / Smart Card)",
    description: "नवीन / सुधारित आधार सेवा",
    details: "आवश्यक कागदपत्रे:",
    documents: [
      "आधार enrolment form",
      "Birth Certificate / Ration Card",
      "Address proof",
      "Identity proof (PAN / Voter ID)",
      "Passport size photo"
    ]
  }
];
