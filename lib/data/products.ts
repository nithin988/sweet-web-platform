export type ProductCategory = "sweets" | "hots";

export type Product = {
  slug: string;
  nameEn: string;
  nameTe: string;
  category: ProductCategory;
  descriptionEn: string;
  descriptionTe: string;
  price: string;
  isSpeciality?: boolean;
};

export const products: Product[] = [
  {
    slug: "organic-jaggery-kalakand",
    nameEn: "Organic Jaggery Kalakand",
    nameTe: "ఆర్గానిక్ బెల్లం కలాకండ్",
    category: "sweets",
    descriptionEn: "Our signature speciality — handcrafted with pure milk and organic jaggery.",
    descriptionTe: "మా ప్రత్యేకత — స్వచ్ఛమైన పాలు మరియు ఆర్గానిక్ బెల్లంతో చేతితో తయారు చేయబడింది.",
    price: "₹480/kg",
    isSpeciality: true,
  },
  {
    slug: "white-kalakand",
    nameEn: "White Kalakand",
    nameTe: "వైట్ కలాకండ్",
    category: "sweets",
    descriptionEn: "Classic milk kalakand, soft and rich in every bite.",
    descriptionTe: "క్లాసిక్ పాల కలాకండ్, ప్రతి బైట్‌లోనూ మృదువుగా మరియు రిచ్‌గా ఉంటుంది.",
    price: "₹420/kg",
  },
  {
    slug: "roast-kalakand",
    nameEn: "Roast Kalakand",
    nameTe: "రోస్ట్ కలాకండ్",
    category: "sweets",
    descriptionEn: "Slow-roasted for a deep, caramelized flavor.",
    descriptionTe: "లోతైన, కారామెలైజ్డ్ రుచి కోసం నెమ్మదిగా వేయించబడింది.",
    price: "₹440/kg",
  },
  {
    slug: "ajmeri-kalakand",
    nameEn: "Ajmeri Kalakand",
    nameTe: "అజ్మేరి కలాకండ్",
    category: "sweets",
    descriptionEn: "A traditional variation with a distinct, aromatic finish.",
    descriptionTe: "విభిన్నమైన, సుగంధభరిత ముగింపుతో సాంప్రదాయ వైవిధ్యం.",
    price: "₹460/kg",
  },
  {
    slug: "mixed-white-roast-kalakand",
    nameEn: "Mixed White & Roast Kalakand",
    nameTe: "మిక్స్డ్ వైట్ & రోస్ట్ కలాకండ్",
    category: "sweets",
    descriptionEn: "The best of both worlds in every piece.",
    descriptionTe: "ప్రతి ముక్కలోనూ రెండు రుచుల మేలు కలయిక.",
    price: "₹450/kg",
  },
  {
    slug: "carrot-kalakand",
    nameEn: "Carrot Kalakand",
    nameTe: "క్యారెట్ కలాకండ్",
    category: "sweets",
    descriptionEn: "A festive twist on our classic kalakand.",
    descriptionTe: "మా క్లాసిక్ కలాకండ్‌కు పండుగ ట్విస్ట్.",
    price: "₹460/kg",
  },
  {
    slug: "special-badam-milk",
    nameEn: "Special Badam Milk",
    nameTe: "స్పెషల్ బాదం మిల్క్",
    category: "sweets",
    descriptionEn: "Rich, chilled almond milk — a refreshing classic.",
    descriptionTe: "రిచ్, చల్లని బాదం పాలు — రిఫ్రెషింగ్ క్లాసిక్.",
    price: "₹60/glass",
  },
  {
    slug: "sunnundalu",
    nameEn: "Sunnundalu (Organic Jaggery)",
    nameTe: "సున్నుండలు (ఆర్గానిక్ బెల్లం)",
    category: "sweets",
    descriptionEn: "Traditional Andhra urad dal laddus made with organic jaggery.",
    descriptionTe: "ఆర్గానిక్ బెల్లంతో తయారు చేసిన సాంప్రదాయ ఆంధ్ర మినపప్పు లడ్డూలు.",
    price: "₹400/kg",
  },
  {
    slug: "boondi",
    nameEn: "Boondi",
    nameTe: "బూంది",
    category: "sweets",
    descriptionEn: "Classic gram-flour boondi, sweet and delicately spiced.",
    descriptionTe: "క్లాసిక్ శనగపిండి బూంది, తీపిగా మరియు సున్నితంగా మసాలా వేయబడింది.",
    price: "₹360/kg",
  },
  {
    slug: "murukulu",
    nameEn: "Murukulu",
    nameTe: "మురుకులు",
    category: "hots",
    descriptionEn: "Crispy, spiral-shaped rice flour snack.",
    descriptionTe: "క్రిస్పీ, స్పైరల్ ఆకారపు బియ్యప్పిండి స్నాక్.",
    price: "₹320/kg",
  },
  {
    slug: "chekkalu",
    nameEn: "Chekkalu",
    nameTe: "చెక్కలు",
    category: "hots",
    descriptionEn: "Thin, crunchy rice crackers with a savory kick.",
    descriptionTe: "సన్నని, క్రంచీ బియ్యం క్రాకర్స్ రుచికరమైన కిక్‌తో.",
    price: "₹300/kg",
  },
  {
    slug: "masala-palli",
    nameEn: "Masala Palli",
    nameTe: "మసాలా పల్లి",
    category: "hots",
    descriptionEn: "Roasted peanuts coated in a spiced batter.",
    descriptionTe: "మసాలా పిండితో కప్పబడిన వేయించిన వేరుశెనగలు.",
    price: "₹280/kg",
  },
  {
    slug: "dal-mudi",
    nameEn: "Dal Mudi",
    nameTe: "పప్పు ముది",
    category: "hots",
    descriptionEn: "A crunchy lentil-based savory mix.",
    descriptionTe: "క్రంచీ పప్పు ఆధారిత రుచికరమైన మిక్స్.",
    price: "₹300/kg",
  },
  {
    slug: "chakodi",
    nameEn: "Chakodi",
    nameTe: "చకోడీ",
    category: "hots",
    descriptionEn: "Ring-shaped, deep-fried savory snack.",
    descriptionTe: "రింగ్ ఆకారంలో, డీప్ ఫ్రై చేసిన రుచికరమైన స్నాక్.",
    price: "₹320/kg",
  },
];
