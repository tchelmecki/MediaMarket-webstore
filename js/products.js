const products = [
    {
      id: 0,
      name: "Pralka SANSUNG WW80TA02341FAE/EA Ecobubble",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142448",
      category: "Pralki",
      price: 1979,
      image: "img/sansung1.png",
      sale: true,
      saleAmount: 200,
    },
    {
      id: 1,
      name: "Lodówka WHIRLOOP ZKO14O",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sunt laudantium ad quas vitae explicabo deserunt illum eligendi incidunt. Quae dicta alias adipisci tempore! Recusandae consequatur quia repudiandae ea, aspernatur sint quam. Tempore quos a officiis culpa officia voluptatum eius atque deleniti delectus accusamus esse, cum molestiae odit ut voluptatibus!
      `,
      nrcategory: "142542",
      category: "Lodówki",
      price: 6319,
      image: "img/fridge.png",
      sale: true,
      saleAmount: 200,
    },
    {
      id: 2,
      name: "Tablet APPLE iPad 10.2 (9 gen.) 256GB Wi-Fi Gwiezdna szarość MK2N3FD/A",
      description: `Wyświetlacz: 10.2" (2160 x 1620, Retina)
      Model procesora: Apple A13 Bionic
      Pamięć wbudowana: 256 GB
      Kamera: Tylna: 8 Mpix; Przednia: 12 Mpix
      Komunikacja: WiFi 802.11 a/b/g/n/ac, Bluetooth 4.2,
      System operacyjny: iPadOS 15`,
      nrcategory: "143449",
      category: "Tablety",
      price: 2679,
      image: "img/ipad1.png",
      sale: true,
      saleAmount: 480,
    },
    {
      id: 3,
      name: "Smartfon APPLE iPhone 14 128GB Północ MPUF3PX/A",
      description: `Wyświetlacz: 6.1" (1170 x 2532, Dotykowy, OLED, Super Retina XDR) 
      Model procesora: Apple A15 Bionic
      Pamięć wbudowana: 128 GB
      Pamięć RAM: 6 GB
      Aparat: Tylny: 12 + 12 Mpix, Przedni: 12 Mpix
      Komunikacja: 5G, Wi-Fi 6 (802.11 ax), Bluetooth 5.3, NFC
      System operacyjny: iOS 16`,
      nrcategory: "143442",
      category: "Telefony",
      price: 4179,
      image: "img/iphone1.png",
      sale: true,
      saleAmount: 180,
    },
    {
      id: 4,
      name: "Tablet LENOVO Tab M10 HD 10.1 4GB/64GB Wi-Fi Platynowy ZA6W0000PL",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142448",
      category: "Tablety",
      price: 679,
      image: "img/tablet2.png",
      sale: true,
      saleAmount: 180,
    },
    {
      id: 5,
      name: "Tablet LENOVO Yoga Tab 11 2K 4GB/128GB Wi-Fi Szary ZA8W0035PL",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142448",
      category: "Tablety",
      price: 1299,
      image: "img/tablet3.png",
      sale: true,
      saleAmount: 200,
    },
    {
      id: 6,
      name: "Smartfon MOTOROLA Moto G31 4/64GB Niebieski (Baby Blue)",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142448",
      category: "Telefony",
      price: 699,
      image: "img/phone1.png",
      sale: true,
      saleAmount: 150,
    },
    {
      id: 7,
      name: "Słuchawki bezprzewodowe JBL Tune Flex Czarny",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142450",
      category: "Słuchawki",
      price: 379,
      image: "img/headphones1.png",
      sale: true,
      saleAmount: 20,
    },
    {
      id: 8,
      name: "Gra Xbox Series Call of Duty: Modern Warfare II C.O.D.E. Edition",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142450",
      category: "Gry",
      price: 299,
      image: "img/game1.png",
      sale: true,
      saleAmount: 20,
    },
    {
      id: 9,
      name: "Ładowarka do Canon 194X23WWN",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142450",
      category: "Aparaty",
      price: 42,
      image: "img/camera1.png",
      sale: true,
      saleAmount: 10,
    },
    {
      id: 10,
      name: "Hulajnoga elektryczna MOTUS Scooty 10 Lite 2022",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142450",
      category: "Hulajnogi",
      price: 1799,
      image: "img/scooter1.png",
      sale: true,
      saleAmount: 200,
    },
    {
      id: 11,
      name: "Smartwatch APPLE Watch Ultra GPS + Cellular koperta 49mm z tytanu z opaską Trail",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142450",
      category: "Smartwatche",
      price: 4399,
      image: "img/watch1.png",
      sale: true,
      saleAmount: 400,
    },
    {
      id: 12,
      name: "Smartband FITBIT Inspire 3 Czarny",
      description: ` Wymiary: <b>(szer. x wys. x gł.): 60 x 85 x 55 cm</b><br>
      Wsad [kg]: <b>8</b> <br>
      Kolor: <b>Biały, Czarne drzwi</b> <br>
      Maksymalna prędkość wirowania [obr/min]: <b>1200</b> <br>
      Wyświetlacz elektroniczny: <b>TAK</b> <br>
      Zabezpieczenia: <b>Blokada rodzicielska</b> <br>
      Koszt zużycia prądu na 100 cykli: <b>55 kWh = 42.35 PLN</b> <br>`,
      nrcategory: "142450",
      category: "Smartbandy",
      price: 4399,
      image: "img/smartband1.png",
      sale: true,
      saleAmount: 400,
    },
  ];
