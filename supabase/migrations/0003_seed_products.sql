-- Seeds the 15 launch products into the database so the homepage
-- (which now reads from Supabase instead of a static file) shows the
-- full catalog, not just whatever the admin has added since.
-- Images point at the existing static files in /public/images/products/.

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, is_speciality, sort_order)
values (
  'organic-jaggery-kalakand',
  (select id from categories where slug = 'sweets'),
  'Organic Jaggery Kalakand', 'ఆర్గానిక్ బెల్లం కలాకండ్',
  'Our signature speciality — handcrafted with pure milk and organic jaggery.',
  'మా ప్రత్యేకత — స్వచ్ఛమైన పాలు మరియు ఆర్గానిక్ బెల్లంతో చేతితో తయారు చేయబడింది.',
  '₹480/kg', array['/images/products/organic-jaggery-kalakand-real.jpg'], true, 1
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'white-kalakand',
  (select id from categories where slug = 'sweets'),
  'White Kalakand', 'వైట్ కలాకండ్',
  'Classic milk kalakand, soft and rich in every bite.',
  'క్లాసిక్ పాల కలాకండ్, ప్రతి బైట్‌లోనూ మృదువుగా మరియు రిచ్‌గా ఉంటుంది.',
  '₹420/kg', array['/images/products/white-kalakand-real.jpg'], 2
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'roast-kalakand',
  (select id from categories where slug = 'sweets'),
  'Roast Kalakand', 'రోస్ట్ కలాకండ్',
  'Slow-roasted for a deep, caramelized flavor.',
  'లోతైన, కారామెలైజ్డ్ రుచి కోసం నెమ్మదిగా వేయించబడింది.',
  '₹440/kg', array['/images/products/roast-kalakand-real.jpg'], 3
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'ajmeri-kalakand',
  (select id from categories where slug = 'sweets'),
  'Ajmeri Kalakand', 'అజ్మేరి కలాకండ్',
  'A traditional variation with a distinct, aromatic finish.',
  'విభిన్నమైన, సుగంధభరిత ముగింపుతో సాంప్రదాయ వైవిధ్యం.',
  '₹460/kg', array['/images/products/ajmeri-kalakand-real.jpg'], 4
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'mixed-white-roast-kalakand',
  (select id from categories where slug = 'sweets'),
  'Mixed White & Roast Kalakand', 'మిక్స్డ్ వైట్ & రోస్ట్ కలాకండ్',
  'The best of both worlds in every piece.',
  'ప్రతి ముక్కలోనూ రెండు రుచుల మేలు కలయిక.',
  '₹450/kg', array['/images/products/mixed-white-roast-kalakand-real.jpg'], 5
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'carrot-kalakand',
  (select id from categories where slug = 'sweets'),
  'Carrot Kalakand', 'క్యారెట్ కలాకండ్',
  'A festive twist on our classic kalakand.',
  'మా క్లాసిక్ కలాకండ్‌కు పండుగ ట్విస్ట్.',
  '₹460/kg', array['/images/products/carrot-kalakand-real.jpg'], 6
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, is_speciality, sort_order)
values (
  'special-badam-milk',
  (select id from categories where slug = 'sweets'),
  'Special Badam Milk', 'స్పెషల్ బాదం మిల్క్',
  'Rich, chilled almond milk — a refreshing classic.',
  'రిచ్, చల్లని బాదం పాలు — రిఫ్రెషింగ్ క్లాసిక్.',
  '₹60/glass', array['/images/products/badam-milk-real.jpg'], true, 7
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, is_speciality, sort_order)
values (
  'sunnundalu',
  (select id from categories where slug = 'sweets'),
  'Sunnundalu (Organic Jaggery)', 'సున్నుండలు (ఆర్గానిక్ బెల్లం)',
  'Traditional Andhra urad dal laddus made with organic jaggery.',
  'ఆర్గానిక్ బెల్లంతో తయారు చేసిన సాంప్రదాయ ఆంధ్ర మినపప్పు లడ్డూలు.',
  '₹400/kg', array['/images/products/bellam-sunnundalu-real.jpg'], true, 8
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'boondi',
  (select id from categories where slug = 'hots'),
  'Boondi', 'బూంది',
  'Classic gram-flour boondi, sweet and delicately spiced.',
  'క్లాసిక్ శనగపిండి బూంది, తీపిగా మరియు సున్నితంగా మసాలా వేయబడింది.',
  '₹360/kg', array['/images/products/boondi-real.jpg'], 9
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'murukulu',
  (select id from categories where slug = 'hots'),
  'Murukulu', 'మురుకులు',
  'Crispy, spiral-shaped rice flour snack.',
  'క్రిస్పీ, స్పైరల్ ఆకారపు బియ్యప్పిండి స్నాక్.',
  '₹320/kg', array['/images/products/hots-collection.jpg'], 10
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'chekkalu',
  (select id from categories where slug = 'hots'),
  'Chekkalu', 'చెక్కలు',
  'Thin, crunchy rice crackers with a savory kick.',
  'సన్నని, క్రంచీ బియ్యం క్రాకర్స్ రుచికరమైన కిక్‌తో.',
  '₹300/kg', array['/images/products/chekkalu-real.jpg'], 11
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'masala-palli',
  (select id from categories where slug = 'hots'),
  'Masala Palli', 'మసాలా పల్లి',
  'Roasted peanuts coated in a spiced batter.',
  'మసాలా పిండితో కప్పబడిన వేయించిన వేరుశెనగలు.',
  '₹280/kg', array['/images/products/masala-palli-real.jpg'], 12
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'dal-mudi',
  (select id from categories where slug = 'hots'),
  'Dal Mudi', 'పప్పు ముది',
  'A crunchy lentil-based savory mix.',
  'క్రంచీ పప్పు ఆధారిత రుచికరమైన మిక్స్.',
  '₹300/kg', array['/images/products/dal-mudi-real.jpg'], 13
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'chakodi',
  (select id from categories where slug = 'hots'),
  'Chakodi', 'చకోడీ',
  'Ring-shaped, deep-fried savory snack.',
  'రింగ్ ఆకారంలో, డీప్ ఫ్రై చేసిన రుచికరమైన స్నాక్.',
  '₹320/kg', array['/images/products/chakodi-real.jpg'], 14
);

insert into products (slug, category_id, name_en, name_te, description_en, description_te, price, images, sort_order)
values (
  'mixture',
  (select id from categories where slug = 'hots'),
  'Mixture', 'మిక్చర్',
  'Our house blend of crunchy savories, a customer favorite.',
  'క్రంచీ రుచికరమైన పదార్థాల మా సొంత మిక్స్, కస్టమర్ ఫేవరెట్.',
  '₹300/kg', array['/images/products/mixture-real.jpg'], 15
);
