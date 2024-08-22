const routes = [
  /* {
      id: "route0",
      img: '<div class="swiper-wrapper"> <div class="swiper-slide">Slide 1</div> <div class="swiper-slide">Slide 2</div><div class="swiper-slide">Slide 3</div> <div class="swiper-slide">Slide 4</div><div class="swiper-slide">Slide 5</div> <div class="swiper-slide">Slide 6</div><div class="swiper-slide">Slide 7</div><div class="swiper-slide">Slide 8</div><div class="swiper-slide">Slide 9</div></div>',
      from: "7",
      minDet: "12212",
      minDet2: "1313123",
      Det: "2142rweadgaf",
    }, */

  {
    id: "route1",
    img: '<div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (1)/Palais-Garnier-Opera-Paris-1024x1024.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (1)/Paris-Symbol-Eiffel-Tower-1024x1024.jpg"class="imgcl"/></div></div>',
    from: "France - Paris",
    minDet:
      "Cost: from 500€ <br>Number of tours already conducted: 200<br> Tour duration: 5 days",
    minDet2: "Tour type: cultural <br>Rating: 4.8",
    Det: "Paris, the capital of France, attracts millions of tourists from around the world with its historical and cultural landmarks. During the tour, you will visit iconic sites such as the Eiffel Tower, the Louvre, Notre-Dame, and the Champs-Élysées. Stroll through the narrow streets of Montmartre and visit the Marais district for unforgettable experiences. You will also enjoy French cuisine in local bistros and restaurants. In the evening, you can take a cruise along the Seine and admire the City of Lights. Paris is a city of romance, art, and history that everyone should visit at least once.",
  },
  {
    id: "route2",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (2)/best-villages-french-riviera.pic-1-1024x1024.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (2)/World___France_Home_on_the_coast_of_the_Cote_d_Azur__France_071920_31.jpg"class="imgcl"/></div></div>',
    from: "France - French Riviera",
    minDet:
      "Cost: from 700€ <br>Number of tours already conducted: 150<br> Tour duration: 4 days",
    minDet2: "Tour type: beach <br>Rating: 4.7",
    Det: "The French Riviera, also known as the Côte d'Azur, is famous for its picturesque beaches, luxurious resorts, and prestigious festivals. In this tour, you will visit Nice, Cannes, and Monte Carlo, enjoy the warm climate and crystal-clear Mediterranean waters. Walk along the famous Promenade des Anglais, explore the old town of Nice, and attend the renowned Cannes Film Festival. You will also have the chance to sample local cuisine and enjoy beautiful views. This tour is perfect for those who want to combine beach relaxation with cultural activities and lively nightlife.",
  },
  {
    id: "route3",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (3)/amboise-france-loire-river-ambuaz-frantsiia-reka-luara-doma.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (3)/s1200.jpg"class="imgcl"/></div></div>',
    from: "France - Loire Valley",
    minDet:
      "Cost: from 600€ <br>Number of tours already conducted: 100<br> Tour duration: 6 days",
    minDet2: "Tour type: cultural <br>Rating: 4.6",
    Det: "The Loire Valley, known for its magnificent castles, vineyards, and picturesque landscapes, is an ideal destination for a cultural retreat. In this tour, you will visit famous châteaux such as Chenonceau, Chambord, and Amboise. Enjoy strolls through vineyards and wine tasting sessions. The tour includes visits to charming villages and towns rich in history and cultural heritage. Savor exquisite French cuisine at local restaurants and learn more about the region's history. This tour offers the perfect combination of culture, history, and gastronomic delights.",
  },
  {
    id: "route4",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (4)/1649205641_63-vsegda-pomnim-com-p-provans-priroda-foto-73.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (4)/tournefort-alpes-maritimes.jpg"class="imgcl"/></div></div>',
    from: "France - Provence",
    minDet:
      "Cost: from 550€ <br>Number of tours already conducted: 120<br> Tour duration: 3 days",
    minDet2: "Tour type: cultural <br>Rating: 4.7",
    Det: "Provence, a region in southern France, is known for its lavender fields, historic towns, and delicious cuisine. During the tour, you will visit Avignon, Arles, and Aix-en-Provence, each famous for its unique atmosphere and historic landmarks. A visit to Provence also includes tours of local markets and wineries. You will enjoy local cuisine and sample famous Provençal wines. In summer, the fields of Provence are covered in lavender, creating unforgettable landscapes. This tour is perfect for those who want to immerse themselves in the charm of southern France and enjoy its beauty and culture.",
  },
  {
    id: "route5",
    img: '       <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (5)/1662228968_1-priroda-club-p-frantsuzskie-alpi-krasivo-foto-1.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/1франция/0 — копия (5)/World___France_Mountain_Lake_in_Chamonix__France_073344_31.jpg"class="imgcl"/></div></div>',
    from: "France - Alps",
    minDet:
      "Cost: from 800€ <br>Number of tours already conducted: 90<br> Tour duration: 7 days",
    minDet2: "Tour type: adventure <br>Rating: 4.9",
    Det: "The French Alps are a paradise for winter sports and outdoor enthusiasts. In this tour, you will ski or snowboard at world-renowned resorts like Chamonix and Courchevel. In summer, the Alps offer excellent conditions for hiking, biking, and mountaineering. Enjoy scenic mountain landscapes and fresh air. You will also visit traditional alpine villages and sample local dishes like raclette and fondue. This tour is perfect for those seeking active adventures and breathtaking experiences in the mountains.",
  },
  {
    id: "route6",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (1)/4070a733f83e41c4b41155a5dee213a6.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (1)/NVOXydkWq8HVPok2MPIWY7L0wMblpMowKlsFREouzXXbx1USp3JKtSjtzzy-v84xeLn1lZNKryyLzH7hS9Zp0_H9.jpg"class="imgcl"/></div></div>',
    from: "USA - New York",
    minDet:
      "Cost: from 500€ <br>Number of tours already conducted: 180<br> Tour duration: 4 days",
    minDet2: "Tour type: cultural <br>Rating: 4.8",
    Det: "New York, one of the most dynamic and exciting cities in the world, offers endless opportunities for entertainment and culture. During the tour, you will visit Times Square, Central Park, and the Empire State Building. Explore museums such as the Met and the Museum of Modern Art, and stroll down Broadway to enjoy a famous musical. In the evening, take a cruise along the Hudson River to admire Manhattan's skyline. New York is also known for its diverse cuisine, so you'll have the chance to sample dishes from around the world in local restaurants. This tour is perfect for those who want to experience the energy of a big city and enjoy all it has to offer.",
  },
  {
    id: "route7",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (2)/149081812358dc144bc62f12.90560906.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (2)/2017World___USA_Houses_and_a_statue_of_liberty_in_the_night_Las_Vegas__USA_115352_31.jpg"class="imgcl"/></div></div>',
    from: "USA - Las Vegas",
    minDet:
      "Cost: from 400€ <br>Number of tours already conducted: 160<br> Tour duration: 5 days",
    minDet2: "Tour type: entertainment <br>Rating: 4.7",
    Det: "Las Vegas, known as the entertainment capital of the world, attracts tourists with its casinos, shows, and luxurious hotels. In this tour, you will try your luck at the famous Strip casinos, enjoy spectacular shows and concerts, and visit themed hotels and restaurants. Besides gambling, Las Vegas offers numerous activities, including water parks, shopping centers, and museum exhibitions. In the evening, take a city tour and admire its dazzling nighttime lights. This tour is ideal for those seeking unforgettable entertainment and luxury.",
  },
  {
    id: "route8",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (3)/c75fc75a0f461a361fa7502a0fc6c01f.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (3)/Nature___Forest_____USA_Grand_canyon_085409_31.jpg"class="imgcl"/></div></div>',
    from: "USA - Grand Canyon",
    minDet:
      "Cost: from 300€ <br>Number of tours already conducted: 140<br> Tour duration: 3 days",
    minDet2: "Tour type: nature <br>Rating: 4.8",
    Det: "The Grand Canyon, one of the natural wonders of the world, captivates visitors with its breathtaking views and unique geology. On this tour, you will explore the canyon on foot or by helicopter, marveling at its beauty and vastness. The tour includes visits to scenic viewpoints such as the South Rim and the Skywalk. You can also go rafting on the Colorado River and see the canyon from the water. The Grand Canyon offers excellent opportunities for photography and wildlife watching. This tour is perfect for nature lovers and adventure seekers.",
  },
  {
    id: "route9",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (4)/los-andzheles-kaliforniya-ssha.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (4)/walt-disney-concert-hall-kaliforniia-los-andzheles-ssha-doro.jpg"class="imgcl"/></div></div>',
    from: "USA - Los Angeles",
    minDet:
      "Cost: from 450€ <br>Number of tours already conducted: 170<br> Tour duration: 6 days",
    minDet2: "Tour type: cultural <br>Rating: 4.7",
    Det: "Los Angeles, the City of Angels, offers a variety of entertainment and attractions. During the tour, you will visit Hollywood, see the famous Walk of Fame and the Hollywood Sign. Take a stroll along the beaches of Santa Monica and Venice Beach, visit Universal Studios, and explore the Getty Museum. Los Angeles is also known for its cuisine and cultural events. In the evening, take a city tour and experience its vibrant nightlife. This tour is perfect for those who want to experience the energy of a big city and see famous landmarks.",
  },
  {
    id: "route10",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (5)/orlando-florida-lake-eola.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/2сша/0 — копия (5)/shutterstock_446687797-1024x1024.jpg"class="imgcl"/></div></div>',
    from: "USA - Orlando",
    minDet:
      "Cost: from 350€ <br>Number of tours already conducted: 130<br> Tour duration: 7 days",
    minDet2: "Tour type: entertainment <br>Rating: 4.8",
    Det: "Orlando, famous for its theme parks, offers unforgettable experiences for the whole family. On this tour, you will visit Walt Disney World, Universal Studios, and SeaWorld. Each park offers unique attractions, shows, and entertainment. You will also enjoy local cuisine and shopping in the city's malls. Orlando offers numerous opportunities for active recreation and entertainment. In the evening, you can take a stroll around the city and visit local restaurants and cafes. This tour is perfect for family vacations and theme park enthusiasts.",
  },
  {
    id: "route11",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (1)/149142790558e56241baefc7.27679747.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (1)/56b08a6bd1c0900d7c4aaf325043a491-1024x1024.jpg"class="imgcl"/></div></div>',
    from: "Italy - Rome",
    minDet:
      "Cost: from 500€ <br>Number of tours already conducted: 220<br> Tour duration: 5 days",
    minDet2: "Tour type: cultural <br>Rating: 4.9",
    Det: "Rome, the capital of Italy, is rich in historical and cultural landmarks. During the tour, you will visit the Colosseum, the Vatican, the Roman Forum, and the Pantheon. Stroll through the ancient streets of the city and enjoy the atmosphere of the Eternal City. Visits to museums and galleries will immerse you in history and art. Don't miss the opportunity to try traditional Italian dishes at local restaurants. Rome is a city that offers a unique blend of antiquity and modernity, making it an ideal destination for cultural vacations.",
  },
  {
    id: "route12",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (2)/98e592467278de98b5dc6ca8e154c57b.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (2)/it0-1024x1024.jpg"class="imgcl"/></div></div>',
    from: "Italy - Florence",
    minDet:
      "Cost: from 400€ <br>Number of tours already conducted: 180<br> Tour duration: 4 days",
    minDet2: "Tour type: cultural <br>Rating: 4.8",
    Det: "Florence, the center of the Italian Renaissance, is known for its museums, galleries, and architecture. During the tour, you will visit the Cathedral of Santa Maria del Fiore, the Uffizi Gallery, the Ponte Vecchio, and the Palazzo Vecchio. Stroll through the historic center of the city and admire its architectural masterpieces. Visits to museums will allow you to see the works of great masters such as Michelangelo and Botticelli. Florence is also known for its cuisine, and you will have the opportunity to sample local dishes and wines. This tour is perfect for art and culture lovers.",
  },
  {
    id: "route14",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (4)/Milan-Cathedral-1024x1024.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (4)/sobor-venecia-basna-italia-cerkov-zdania-plosad-kolokolna-san-marko-svat.jpg"class="imgcl"/></div></div>',
    from: "Italy - Milan",
    minDet:
      "Cost: from 550€ <br>Number of tours already conducted: 160<br> Tour duration: 3 days",
    minDet2: "Tour type: cultural <br>Rating: 4.6",
    Det: "Milan, the world capital of fashion and design, offers a rich history and modern cultural life. During the tour, you will visit Milan Cathedral (Duomo), Galleria Vittorio Emanuele II, La Scala Theatre, and Sforza Castle. Walk along the elegant streets of the city and enjoy its architectural masterpieces. Visits to museums and theaters will allow you to experience art and culture. Milan is also known for its restaurants and shops, where you can try local dishes and shop for fashionable items. This tour is perfect for those who want to immerse themselves in the atmosphere of a big city and see famous landmarks.",
  },
  {
    id: "route15",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (5)/World___Italy_Clouds_over_the_city_of_Naples__Italy_062556_31.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/3италия/0 — копия (5)/World___Italy_Shining_City_on_a_resort_of_Positano__Italy_063075_31.jpg"class="imgcl"/></div></div>',
    from: "Italy - Naples",
    minDet:
      "Cost: from 600€ <br>Number of tours already conducted: 140<br> Tour duration: 7 days",
    minDet2: "Tour type: cultural <br>Rating: 4.7",
    Det: "Naples, a city with a rich history, is located at the foot of Mount Vesuvius, near the ancient ruins of Pompeii. During the tour, you will visit the National Archaeological Museum, Vesuvius, Pompeii, and the Sansevero Chapel. Walk through the historic center of the city and enjoy its unique atmosphere. Visits to museums will give you a deeper understanding of ancient history and culture. Naples is also known for its cuisine, and you will be able to try traditional Neapolitan dishes such as pizza and pasta. This tour is perfect for history and culture lovers.",
  },
  {
    id: "route16",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (1)/925fa610c1711fd.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (1)/chiang-kai-shek-memorial-hall.jpg"class="imgcl"/></div></div>',
    from: "China - Beijing",
    minDet:
      "Cost: from 600€ <br>Number of tours already conducted: 130<br> Tour duration: 5 days",
    minDet2: "Tour type: cultural <br>Rating: 4.6",
    Det: "Beijing, the capital of China, is famous for its rich history and cultural heritage. In this tour, you will visit the Great Wall of China, the Forbidden City, the Temple of Heaven, and the Summer Palace. Stroll through ancient streets and enjoy the atmosphere of old Beijing. Visits to museums and temples will immerse you in Chinese history and culture. You will also be able to try traditional Chinese dishes in local restaurants and learn about local traditions. Beijing is a city that offers a unique combination of antiquity and modernity, making it an ideal destination for cultural vacations.",
  },
  {
    id: "route17",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (2)/1660112058_56-kartinkin-net-p-kitai-shankhai-krasivo-foto-63.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (2)/kitay-gorod-shanhay-doroga.jpg"class="imgcl"/></div></div>',
    from: "China - Shanghai",
    minDet:
      "Cost: from 800€ <br>Number of tours already conducted: 110<br> Tour duration: 7 days",
    minDet2: "Tour type: cultural <br>Rating: 4.8",
    Det: "Shanghai, the economic center of China, is known for its modern skyscrapers and historic districts. In this tour, you will visit the Bund, the Oriental Pearl Tower, the Shanghai Museum, and the French Concession. Stroll through modern streets and enjoy the view of the city from the heights of skyscrapers. Visits to museums and historic districts will allow you to learn more about Shanghai's past and present. You will also be able to try traditional and modern Chinese dishes in local restaurants. This tour is perfect for those who want to experience the blend of tradition and modernity in one of the most dynamic cities in the world.",
  },
  {
    id: "route18",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (3)/chiang-kai-shek-memorial-hall.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (3)/xian-4-1024x1024.jpeg"class="imgcl"/></div></div>',
    from: "China - Xi'an",
    minDet:
      "Cost: from 500€ <br>Number of tours already conducted: 100<br> Tour duration: 4 days",
    minDet2: "Tour type: cultural <br>Rating: 4.7",
    Det: "Xi'an, the ancient capital of China, is known for its historical landmarks. In this tour, you will visit the Terracotta Army, the Xi'an City Wall, the Big Wild Goose Pagoda, and the Shaanxi History Museum. Stroll through ancient streets and enjoy the atmosphere of the old city. Visits to museums and archaeological sites will immerse you in Chinese history and culture. You will also be able to try traditional Chinese dishes in local restaurants and learn about local traditions. Xi'an is a city that offers a unique blend of antiquity and modernity, making it an ideal destination for cultural vacations.",
  },
  {
    id: "route19",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (4)/5818f.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (4)/gorod-kitai-most-svet.jpg"class="imgcl"/></div></div>',
    from: "China - Guangzhou",
    minDet:
      "Cost: from 400€ <br>Number of tours already conducted: 90<br> Tour duration: 3 days",
    minDet2: "Tour type: cultural <br>Rating: 4.6",
    Det: "Guangzhou, a major commercial hub of China, offers many cultural and historical landmarks. In this tour, you will visit the Guangzhou Tower, the Temple of the Six Banyan Trees, Yuexiu Park, and Shamian Island. Stroll through the city's modern and historic districts, enjoying its unique atmosphere. Visits to museums and temples will give you insight into Guangzhou's past and present. You will also be able to try traditional Chinese dishes in local restaurants and learn about local traditions. Guangzhou is a city that offers a unique blend of tradition and modernity, making it an ideal destination for cultural vacations.",
  },
  {
    id: "route20",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (5)/26870121507_1545deedfb_b.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/4китай/0 — копия (5)/building-city-wallpaper-7413.jpg"class="imgcl"/></div></div>',
    from: "China - Guilin and Yangshuo",
    minDet:
      "Cost: from 700€ <br>Number of tours already conducted: 80<br> Tour duration: 6 days",
    minDet2: "Tour type: nature <br>Rating: 4.8",
    Det: "Guilin and Yangshuo are known for their picturesque karst landscapes and natural beauty. In this tour, you will visit the Reed Flute Cave, Elephant Trunk Hill, Seven Star Park, and take a river cruise along the Li River. Walk through scenic areas and enjoy the beauty of nature. Visits to natural parks and caves will allow you to see unique natural formations and landscapes. You will also be able to try traditional Chinese dishes in local restaurants and learn about local traditions. This tour is perfect for nature lovers and outdoor enthusiasts.",
  },
  {
    id: "route21",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (1)/japan-iaponiia-gorodskaia-ulitsa-tsvetenie-vesnoi.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (1)/tokyo-japan-shibuya-gorod-zdaniia-neboskreby-noch-ogni-magaz.jpg"class="imgcl"/></div></div>',
    from: "Japan - Tokyo",
    minDet:
      "Cost: from 2000€ <br>Number of tours already conducted: 250<br> Tour duration: 5 days",
    minDet2: "Tour type: cultural <br>Rating: 4.9",
    Det: "Tokyo, the capital of Japan, is one of the most dynamic and bustling metropolises in the world. In this tour, you will visit such landmarks as Tokyo Tower, the Imperial Palace, and the Shinjuku district. Explore ancient temples in Asakusa and the modern architecture of the Odaiba district. Visits to museums and galleries will allow you to learn more about Japan's rich culture and history. You will also be able to try traditional Japanese dishes in local restaurants and enjoy shopping in Tokyo's malls. This tour is perfect for those who want to immerse themselves in the atmosphere of one of the largest metropolises in the world.",
  },
  {
    id: "route22",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (2)/mimuroto-ji-temple-kyoto-5851.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (2)/nebo-derevia-peizazh-noch-priroda-gora-vesna-zviozdy-vulkan.jpg"class="imgcl"/></div></div>',
    from: "Japan - Kyoto",
    minDet:
      "Cost: from 1800€ <br>Number of tours already conducted: 200<br> Tour duration: 4 days",
    minDet2: "Tour type: cultural <br>Rating: 4.8",
    Det: "Kyoto, known for its historical and cultural landmarks, is one of Japan's most visited cities. In this tour, you will visit famous temples and shrines such as Kinkaku-ji (Golden Pavilion) and Fushimi Inari. Stroll through the Gion and Arashiyama districts, enjoying traditional architecture and natural beauty. Visits to museums and cultural centers will allow you to learn more about Japan's traditions and art. You will also be able to try traditional Japanese dishes and enjoy tea ceremonies. This tour is perfect for those who want to immerse themselves in the atmosphere of ancient Japanese culture.",
  },
  {
    id: "route23",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (3)/iaponiia-gorod-osaka-peizazh-doma-neboskrioby.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (3)/nebo-cvetenie-aponia-vesna-dvorec-osaka.jpg"class="imgcl"/></div></div>',
    from: "Japan - Osaka",
    minDet:
      "Cost: from 1700€ <br>Number of tours already conducted: 180<br> Tour duration: 3 days",
    minDet2: "Tour type: cultural <br>Rating: 4.7",
    Det: "Osaka, a major port city in Japan, is known for its vibrant atmosphere and culinary delights. In this tour, you will visit Osaka Castle, the Dotonbori district, and the Kaiyukan Aquarium. Stroll through the city's streets and enjoy its energetic vibe. Visits to museums and cultural centers will allow you to learn more about Osaka's rich history and culture. You will also be able to try famous Osaka dishes such as takoyaki and okonomiyaki. This tour is perfect for those who want to experience the lively and dynamic atmosphere of one of Japan's most exciting cities.",
  },
  {
    id: "route24",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (4)/18.大阪城天守閣03-1024x1024.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (4)/yaponiya-japan-fudzhi-vulkan-4906.jpg"class="imgcl"/></div></div>',
    from: "Japan - Hokkaido",
    minDet:
      "Cost: from 1900€ <br>Number of tours already conducted: 150<br> Tour duration: 6 days",
    minDet2: "Tour type: nature <br>Rating: 4.8",
    Det: "Hokkaido attracts tourists with its natural beauty and ski resorts. In this tour, you will visit national parks such as Daisetsuzan and Shiretoko, as well as ski resorts like Niseko and Furano. Stroll through scenic areas and enjoy the beauty of nature. Visits to hot springs (onsen) and natural parks will allow you to relax and enjoy unique natural landscapes. You will also be able to try local delicacies such as fresh seafood and ramen. This tour is perfect for nature lovers and outdoor enthusiasts.",
  },
  {
    id: "route25",
    img: '        <div class="swiper-wrapper"> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (5)/scale_1200.jpg" class="imgcl"/></div> <div class="swiper-slide"><img src="/image/все/5япония/0 — копия (5)/square_1024_355234e06703f760dddebb062dfa863b.jpg"class="imgcl"/></div></div>',
    from: "Japan - Hiroshima",
    minDet:
      "Cost: from 1600€ <br>Number of tours already conducted: 120<br> Tour duration: 4 days",
    minDet2: "Tour type: cultural <br>Rating: 4.7",
    Det: "Hiroshima is known for its history and the Peace Memorial Park. In this tour, you will visit the Peace Memorial Museum, the Atomic Dome, and the Peace Park. Stroll through the city and enjoy its peaceful atmosphere. Visits to museums and historical landmarks will give you a deeper understanding of the tragic events of World War II and the city's recovery. You will also be able to try traditional Japanese dishes such as okonomiyaki and enjoy a view of the city from the Hiroshima Castle. This tour is perfect for those who want to learn more about Japan's history and culture and visit significant historical sites.",
  },
];

function displayRouteResultsById(routeId) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";

  const route = routes.find((route) => route.id === routeId);

  if (route) {
    const routeDetails = `<section>
            <div class="detailed-route">
              <div class="route-photo">
                <!-- Embedded Swiper -->
                <div class="swiper-wrapper mySecondSwiper">
                  ${route.img}
                  <div class="swiper-pagination second-pagination"></div>
                </div>
                <!-- End Swiper -->
              </div>
              <div class="route-content">
                <div class="route-title">${route.from}</div>
                <div class="route-description">
                  <div>${route.minDet}</div>
                  <div>${route.minDet2}</div>
                </div>
                <div class="route-detailed-description">${route.Det}</div>
              </div>
            </div> 
          </section>`;

    resultsContainer.innerHTML = routeDetails;

    // Initialize the new Swiper
    new Swiper(".mySecondSwiper", {
      direction: "vertical",
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".second-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".second-next",
        prevEl: ".second-prev",
      },
    });
  } else {
    resultsContainer.textContent = "Route not found.";
  }
}

/* document
    .getElementById("route0Button")
    .addEventListener("click", function () {
      displayRouteResultsById("route0");
    }); */

document.getElementById("route1Button").addEventListener("click", function () {
  displayRouteResultsById("route1");
});

document.getElementById("route2Button").addEventListener("click", function () {
  displayRouteResultsById("route2");
});

document.getElementById("route3Button").addEventListener("click", function () {
  displayRouteResultsById("route3");
});
document.getElementById("route4Button").addEventListener("click", function () {
  displayRouteResultsById("route4");
});

document.getElementById("route5Button").addEventListener("click", function () {
  displayRouteResultsById("route5");
});

document.getElementById("route6Button").addEventListener("click", function () {
  displayRouteResultsById("route6");
});

document.getElementById("route7Button").addEventListener("click", function () {
  displayRouteResultsById("route7");
});
document.getElementById("route8Button").addEventListener("click", function () {
  displayRouteResultsById("route8");
});

document.getElementById("route9Button").addEventListener("click", function () {
  displayRouteResultsById("route9");
});

document.getElementById("route10Button").addEventListener("click", function () {
  displayRouteResultsById("route10");
});

document.getElementById("route11Button").addEventListener("click", function () {
  displayRouteResultsById("route11");
});
document.getElementById("route12Button").addEventListener("click", function () {
  displayRouteResultsById("route12");
});

document.getElementById("route13Button").addEventListener("click", function () {
  displayRouteResultsById("route13");
});

document.getElementById("route14Button").addEventListener("click", function () {
  displayRouteResultsById("route14");
});

document.getElementById("route15Button").addEventListener("click", function () {
  displayRouteResultsById("route15");
});
document.getElementById("route16Button").addEventListener("click", function () {
  displayRouteResultsById("route16");
});

document.getElementById("route17Button").addEventListener("click", function () {
  displayRouteResultsById("route17");
});

document.getElementById("route18Button").addEventListener("click", function () {
  displayRouteResultsById("route18");
});

document.getElementById("route19Button").addEventListener("click", function () {
  displayRouteResultsById("route19");
});
document.getElementById("route20Button").addEventListener("click", function () {
  displayRouteResultsById("route20");
});

document.getElementById("route21Button").addEventListener("click", function () {
  displayRouteResultsById("route21");
});

document.getElementById("route22Button").addEventListener("click", function () {
  displayRouteResultsById("route22");
});

document.getElementById("route23Button").addEventListener("click", function () {
  displayRouteResultsById("route23");
});
document.getElementById("route24Button").addEventListener("click", function () {
  displayRouteResultsById("route24");
});
document.getElementById("route25Button").addEventListener("click", function () {
  displayRouteResultsById("route25");
});

document.addEventListener("DOMContentLoaded", function () {
  // Добавляем обработчик событий для родительского элемента
  document
    .getElementById("searchResultsMan")
    .addEventListener("click", function (event) {
      // Проверяем, является ли целевой элемент кнопкой закрытия
      if (event.target.classList.contains("close-man")) {
        event.target.closest(".card-man").style.display = "none";
      }
    });
  if (event.target.classList.contains("close-man")) {
    event.target.closest(".overlay").style.display = "none";
  }
});

var swiper1 = new Swiper(".myFirstSwiper", {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper1.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}

// Initialize the new Swiper
