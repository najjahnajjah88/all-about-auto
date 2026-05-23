const CARS_DATA = [
    {
        "name": "Bugatti Chiron",
        "brand": "Bugatti",
        "image": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
        "link": "https://www.bugatti.com",
        "specs": {
            "Type": "Hypercar",
            "Price": "$3 Million",
            "Engine": "8.0L Quad Turbo W16",
            "Horsepower": "1500 HP",
            "Top Speed": "490 km/h",
            "Transmission": "Automatic",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Lamborghini Aventador",
        "brand": "Lamborghini",
        "image": "https://images.unsplash.com/photo-1612076815324-b4770e61c856?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.lamborghini.com",
        "specs": {
            "Type": "Supercar",
            "Price": "$500,000",
            "Engine": "6.5L V12",
            "Horsepower": "770 HP",
            "Top Speed": "350 km/h",
            "Transmission": "Automatic",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Tesla Model S",
        "brand": "Tesla",
        "image": "https://images.unsplash.com/photo-1676856577533-1e8099932f7b?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.tesla.com",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "$95,000",
            "Battery": "100 kWh",
            "Range": "650 km",
            "Horsepower": "1020 HP",
            "Top Speed": "322 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "BMW M4",
        "brand": "BMW",
        "image": "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.bmw.com",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "$85,000",
            "Engine": "3.0L Twin Turbo",
            "Horsepower": "503 HP",
            "Top Speed": "290 km/h",
            "Mileage": "10 km/l",
            "Transmission": "Automatic"
        }
    },
    {
        "name": "Toyota Land cruiser 300 (LC 300)",
        "brand": "Toyota",
        "image": "https://wallpapercave.com/wp/wp12045424.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "2.18 Crore",
            "Engine": "3.3LTwin Turbo V6 Diesel",
            "Horsepower": "304 HP",
            "Top Speed": "210km/h",
            "Mileage": "11.5 km/l",
            "Transmission": "Automatic"
        }
    },
    {
        "name": "Mercedes AMG GT 63",
        "brand": "Mercedes",
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
        "link": "https://www.mercedes-benz.co.in/",
        "specs": {
            "Type": "Luxury Sports Sedan",
            "Price": "\u20b93.30 Crore",
            "Engine": "4.0L V8 Biturbo",
            "Horsepower": "630 HP",
            "Top Speed": "315 km/h",
            "Mileage": "8 km/l",
            "Transmission": "9-Speed Automatic"
        }
    },
    {
        "name": "Lamborghini Aventador SVJ",
        "brand": "Lamborghini",
        "image": "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.lamborghini.com/",
        "specs": {
            "Type": "Supercar",
            "Price": "\u20b96.25 Crore",
            "Engine": "6.5L Naturally Aspirated V12",
            "Horsepower": "770 HP",
            "Top Speed": "350 km/h",
            "Mileage": "5 km/l",
            "Transmission": "7-Speed ISR Automatic"
        }
    },
    {
        "name": "Audi R8 V10 Plus",
        "brand": "Audi",
        "image": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
        "link": "https://www.audi.in/",
        "specs": {
            "Type": "Sports Car",
            "Price": "\u20b92.72 Crore",
            "Engine": "5.2L V10",
            "Horsepower": "602 HP",
            "Top Speed": "330 km/h",
            "Mileage": "6.8 km/l",
            "Transmission": "7-Speed S Tronic"
        }
    },
    {
        "name": "Ferrari SF90 Stradale",
        "brand": "Ferrari",
        "image": "https://images.unsplash.com/photo-1609138315745-4e44ac3bbd8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.ferrari.com/",
        "specs": {
            "Type": "Hybrid Supercar",
            "Price": "\u20b97.50 Crore",
            "Engine": "4.0L Twin Turbo V8 Hybrid",
            "Horsepower": "986 HP",
            "Top Speed": "340 km/h",
            "Mileage": "18 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Porsche 911 Turbo S",
        "brand": "Porsche",
        "image": "https://images.unsplash.com/photo-1679478878852-bb238b7db287?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.porsche.com/",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "\u20b93.35 Crore",
            "Engine": "3.8L Twin Turbo Flat-6",
            "Horsepower": "640 HP",
            "Top Speed": "330 km/h",
            "Mileage": "9 km/l",
            "Transmission": "8-Speed PDK Automatic"
        }
    },
    {
        "name": "Rolls Royce Ghost",
        "brand": "Rolls Royce",
        "image": "https://images.unsplash.com/photo-1624804269473-828dcc30a210?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.rolls-roycemotorcars.com/",
        "specs": {
            "Type": "Ultra Luxury Sedan",
            "Price": "\u20b98.95 Crore",
            "Engine": "6.75L Twin Turbo V12",
            "Horsepower": "563 HP",
            "Top Speed": "250 km/h",
            "Mileage": "6.5 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "McLaren 720S",
        "brand": "McLaren",
        "image": "https://images.unsplash.com/photo-1617335692042-7a3779b8e050?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://cars.mclaren.com/",
        "specs": {
            "Type": "Supercar",
            "Price": "\u20b94.65 Crore",
            "Engine": "4.0L Twin Turbo V8",
            "Horsepower": "710 HP",
            "Top Speed": "341 km/h",
            "Mileage": "7 km/l",
            "Transmission": "7-Speed Automatic"
        }
    },
    {
        "name": "Nissan GT-R R35",
        "brand": "Nissan",
        "image": "https://images.unsplash.com/photo-1589144707419-7032065267e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.nissan-global.com/",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "\u20b92.12 Crore",
            "Engine": "3.8L Twin Turbo V6",
            "Horsepower": "565 HP",
            "Top Speed": "315 km/h",
            "Mileage": "8 km/l",
            "Transmission": "6-Speed Dual Clutch Automatic"
        }
    },
    {
        "name": "Bentley Continental GT",
        "brand": "Bentley",
        "image": "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2025/04/bentley-continental-gt-black-edition-2025-2.jpg",
        "link": "https://www.bentleymotors.com/",
        "specs": {
            "Type": "Luxury Grand Tourer",
            "Price": "\u20b95.23 Crore",
            "Engine": "4.0L Twin Turbo V8",
            "Horsepower": "542 HP",
            "Top Speed": "318 km/h",
            "Mileage": "8 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Ford Mustang GT",
        "brand": "Ford",
        "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
        "link": "https://www.ford.com/",
        "specs": {
            "Type": "Muscle Car",
            "Price": "\u20b974 Lakh",
            "Engine": "5.0L V8",
            "Horsepower": "450 HP",
            "Top Speed": "250 km/h",
            "Mileage": "7 km/l",
            "Transmission": "10-Speed Automatic"
        }
    },
    {
        "name": "Honda Civic Type R",
        "brand": "Honda",
        "image": "https://images.unsplash.com/photo-1689988833264-a52ca57fa88c?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.honda.com/",
        "specs": {
            "Type": "Performance Hatchback",
            "Price": "\u20b955 Lakh",
            "Engine": "2.0L Turbocharged Inline-4",
            "Horsepower": "315 HP",
            "Top Speed": "275 km/h",
            "Mileage": "12 km/l",
            "Transmission": "6-Speed Manual"
        }
    },
    {
        "name": "Hyundai Ioniq 5",
        "brand": "Hyundai",
        "image": "https://images.unsplash.com/photo-1701921642695-729c4262b060?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "link": "https://www.hyundai.com/",
        "specs": {
            "Type": "Electric SUV",
            "Price": "\u20b946 Lakh",
            "Engine": "Dual Electric Motor",
            "Horsepower": "320 HP",
            "Top Speed": "185 km/h",
            "Mileage": "631 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Kia EV6 GT",
        "brand": "Kia",
        "image": "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev6-gt/discover/kia-ev6-gt-my23-discover-keyvisual-w.jpg",
        "link": "https://www.kia.com/",
        "specs": {
            "Type": "Electric Crossover",
            "Price": "\u20b965 Lakh",
            "Engine": "Dual Electric Motor",
            "Horsepower": "576 HP",
            "Top Speed": "260 km/h",
            "Mileage": "708 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Volvo XC90",
        "brand": "Volvo",
        "image": "https://www.motortrend.com/files/66d72b7823eabd000847df2a/2025-5volvoxc90suvdebut7.jpg?w=512&width=512&q=75&format=webp",
        "link": "https://www.volvocars.com/",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "\u20b91.02 Crore",
            "Engine": "2.0L Turbo Hybrid",
            "Horsepower": "455 HP",
            "Top Speed": "180 km/h",
            "Mileage": "17 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Range Rover Sport",
        "brand": "Range",
        "image": "https://www.goodwood.com/globalassets/.road--racing/reviews/land-rover/rrs-sv-2024-fd/range_rover_sport_sv_firstdrive_goodwood__24my_obsidian-black_160224_05.jpeg?rxy=0.5",
        "link": "https://www.landrover.com/",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "\u20b91.84 Crore",
            "Engine": "3.0L Twin Turbo Inline-6",
            "Horsepower": "395 HP",
            "Top Speed": "242 km/h",
            "Mileage": "10 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Aston Martin DB11",
        "brand": "Aston Martin",
        "image": "https://www.tapeciarnia.pl/tapety/normalne/tapeta-aston-martin-db11-amr.jpg",
        "link": "https://www.astonmartin.com/",
        "specs": {
            "Type": "Grand Tourer",
            "Price": "\u20b93.79 Crore",
            "Engine": "5.2L Twin Turbo V12",
            "Horsepower": "630 HP",
            "Top Speed": "334 km/h",
            "Mileage": "8 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Jaguar F-Type R",
        "brand": "Jaguar",
        "image": "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2024/06/jaguar-f-type-r-front-quarter-view-2.jpg?q=49&fit=crop&w=450&h=225&dpr=2",
        "link": "https://www.jaguar.com/",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "\u20b91.53 Crore",
            "Engine": "5.0L Supercharged V8",
            "Horsepower": "575 HP",
            "Top Speed": "300 km/h",
            "Mileage": "9 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Lexus LC500",
        "brand": "Lexus",
        "image": "https://www.carscoops.com/wp-content/uploads/2019/08/65de6963-2020-lexus-lc-500-inspiration-series-0.jpg",
        "link": "https://www.lexus.com/",
        "specs": {
            "Type": "Luxury Coupe",
            "Price": "\u20b92.39 Crore",
            "Engine": "5.0L Naturally Aspirated V8",
            "Horsepower": "471 HP",
            "Top Speed": "270 km/h",
            "Mileage": "8 km/l",
            "Transmission": "10-Speed Automatic"
        }
    },
    {
        "name": "Maserati MC20",
        "brand": "Maserati",
        "image": "https://www.topgear.com/sites/default/files/2022/05/Maserati_MC20_Cielo_dynamic%20(3).jpg",
        "link": "https://www.maserati.com/",
        "specs": {
            "Type": "Supercar",
            "Price": "\u20b93.69 Crore",
            "Engine": "3.0L Twin Turbo V6",
            "Horsepower": "621 HP",
            "Top Speed": "325 km/h",
            "Mileage": "7 km/l",
            "Transmission": "8-Speed Dual Clutch"
        }
    },
    {
        "name": "Pagani Huayra",
        "brand": "Pagani",
        "image": "https://assets.carandclassic.com/uploads/cars/pagani/C1604730/2020-pagani-huayra-roadster-64a28f290bbe3.jpg?ixlib=php-4.1.0&s=615cae7f1ab7e56d590eeedb0e569fae",
        "link": "https://www.pagani.com/",
        "specs": {
            "Type": "Hypercar",
            "Price": "\u20b924 Crore",
            "Engine": "6.0L Twin Turbo V12",
            "Horsepower": "730 HP",
            "Top Speed": "383 km/h",
            "Mileage": "4 km/l",
            "Transmission": "7-Speed Automatic"
        }
    },
    {
        "name": "Rimac Nevera",
        "brand": "Rimac",
        "image": "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/05/rimac-nevera-records-front-quarter-view-banked-corner.jpg",
        "link": "https://www.rimac-automobili.com/",
        "specs": {
            "Type": "Electric Hypercar",
            "Price": "\u20b919 Crore",
            "Engine": "Quad Electric Motor",
            "Horsepower": "1914 HP",
            "Top Speed": "412 km/h",
            "Mileage": "490 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Hennessey Venom F5",
        "brand": "Hennessey",
        "image": "https://wallpaperaccess.com/full/8907839.jpg",
        "link": "https://www.hennesseyspecialvehicles.com/",
        "specs": {
            "Type": "Hypercar",
            "Price": "\u20b915 Crore",
            "Engine": "6.6L Twin Turbo V8",
            "Horsepower": "1817 HP",
            "Top Speed": "500 km/h",
            "Mileage": "5 km/l",
            "Transmission": "7-Speed Automated Manual"
        }
    },
    {
        "name": "Mazda RX-7 Spirit R",
        "brand": "Mazda",
        "image": "https://images.classic.com/vehicles/be4f688c49a24a8781bc86b3471e4a429a7b5a09.jpg?auto=format&fit=crop&ar=16:9",
        "link": "https://www.mazda.com/",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "\u20b985 Lakh",
            "Engine": "1.3L Twin Rotor Turbo",
            "Horsepower": "276 HP",
            "Top Speed": "250 km/h",
            "Mileage": "7 km/l",
            "Transmission": "5-Speed Manual"
        }
    },
    {
        "name": "Infiniti Q60 Red Sport 400",
        "brand": "Infiniti",
        "image": "https://th.bing.com/th/id/R.f4a7dd48e5e66d1d7f15e5b3bc6373b6?rik=Y20idL%2buSJ6eVg&riu=http%3a%2f%2fst.automobilemag.com%2fuploads%2fsites%2f11%2f2016%2f10%2f2017-Infiniti-Q60-Red-Sport-400-front-three-quarter-05.jpg&ehk=xVFbopi5ABC0brii9VvNFEBB8xzUvB9gq32YXRR0lH0%3d&risl=&pid=ImgRaw&r=0",
        "link": "https://www.infiniti.com/",
        "specs": {
            "Type": "Luxury Sports Coupe",
            "Price": "\u20b965 Lakh",
            "Engine": "3.0L Twin Turbo V6",
            "Horsepower": "400 HP",
            "Top Speed": "250 km/h",
            "Mileage": "10 km/l",
            "Transmission": "7-Speed Automatic"
        }
    },
    {
        "name": "Koenigsegg Jesko",
        "brand": "Koenigsegg",
        "image": "https://wallpapercave.com/wp/wp15519443.jpg",
        "link": "https://www.koenigsegg.com/",
        "specs": {
            "Type": "Hypercar",
            "Price": "\u20b924 Crore",
            "Engine": "5.0L Twin Turbo V8",
            "Horsepower": "1600 HP",
            "Top Speed": "483 km/h",
            "Mileage": "5 km/l",
            "Transmission": "9-Speed Multi-Clutch"
        }
    },
    {
        "name": "Zenvo TSR-S",
        "brand": "Zenvo",
        "image": "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/09/2020-Zenvo-TSR-S-Via-ZenvoAutomotive.jpg",
        "link": "https://zenvoautomotive.com/",
        "specs": {
            "Type": "Hypercar",
            "Price": "\u20b913 Crore",
            "Engine": "5.8L Twin Supercharged V8",
            "Horsepower": "1177 HP",
            "Top Speed": "325 km/h",
            "Mileage": "4 km/l",
            "Transmission": "7-Speed Sequential"
        }
    },
    {
        "name": "Mitsubishi Lancer Evolution X",
        "brand": "Mitsubishi",
        "image": "https://handh.blob.core.windows.net/stock/20057004-1-medium.jpg?v=63797038202127",
        "link": "https://www.mitsubishi-motors.com/",
        "specs": {
            "Type": "Sports Sedan",
            "Price": "\u20b950 Lakh",
            "Engine": "2.0L Turbocharged Inline-4",
            "Horsepower": "291 HP",
            "Top Speed": "242 km/h",
            "Mileage": "10 km/l",
            "Transmission": "6-Speed Twin Clutch"
        }
    },
    {
        "name": "Subaru WRX STI",
        "brand": "Subaru",
        "image": "https://media.carsandbids.com/cdn-cgi/image/width=768,quality=70/9004500a220bf3a3d455d15ee052cf8c332606f8/photos/r4be6Yep-OQbDqJ7YGo/edit/VTwl7.jpg?t=174277652109",
        "link": "https://www.subaru.com/",
        "specs": {
            "Type": "Rally Sports Sedan",
            "Price": "\u20b945 Lakh",
            "Engine": "2.5L Turbo Boxer-4",
            "Horsepower": "310 HP",
            "Top Speed": "255 km/h",
            "Mileage": "9 km/l",
            "Transmission": "6-Speed Manual"
        }
    },
    {
        "name": "Suzuki Jimny",
        "brand": "Suzuki",
        "image": "https://cdn.motor1.com/images/mgl/koEqWN/s3/suzuki-jimny-horizon-sondermodell-2024.jpg",
        "link": "https://www.globalsuzuki.com/",
        "specs": {
            "Type": "Compact Off-Roader",
            "Price": "\u20b915 Lakh",
            "Engine": "1.5L Petrol",
            "Horsepower": "103 HP",
            "Top Speed": "145 km/h",
            "Mileage": "16 km/l",
            "Transmission": "5-Speed Manual"
        }
    },
    {
        "name": "Jeep Wrangler Rubicon",
        "brand": "Jeep",
        "image": "https://media.ed.edmunds-media.com/jeep/wrangler/2025/oem/2025_jeep_wrangler_convertible-suv_rubicon-x_fq_oem_1_600.jpg",
        "link": "https://www.jeep.com/",
        "specs": {
            "Type": "Off-Road SUV",
            "Price": "\u20b972 Lakh",
            "Engine": "2.0L Turbo Petrol",
            "Horsepower": "270 HP",
            "Top Speed": "180 km/h",
            "Mileage": "11 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Cadillac Escalade",
        "brand": "Cadillac",
        "image": "https://gmauthority.com/blog/wp-content/uploads/2025/04/2025-Cadillac-Escalade-ESV-Sport-Platinum-South-Korea-Press-Photos-Exterior-008-Front-Three-Quarters-Dock-Yacht-Close-Up-1568x1045.jpg",
        "link": "https://www.cadillac.com/",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "\u20b91.50 Crore",
            "Engine": "6.2L V8",
            "Horsepower": "420 HP",
            "Top Speed": "210 km/h",
            "Mileage": "7 km/l",
            "Transmission": "10-Speed Automatic"
        }
    },
    {
        "name": "Chevrolet Camaro ZL1",
        "brand": "Chevrolet",
        "image": "https://bringatrailer.com/wp-content/uploads/2024/12/2024_chevrolet_camaro-coupe_img_4563-08903.jpg?w=1536",
        "link": "https://www.chevrolet.com/",
        "specs": {
            "Type": "Muscle Car",
            "Price": "\u20b985 Lakh",
            "Engine": "6.2L Supercharged V8",
            "Horsepower": "650 HP",
            "Top Speed": "318 km/h",
            "Mileage": "6 km/l",
            "Transmission": "10-Speed Automatic"
        }
    },
    {
        "name": "Volkswagen Golf R",
        "brand": "Volkswagen",
        "image": "https://drivingenthusiast.com.au/wp-content/uploads/2024/09/2024-Volkswagen-Golf-R-Driving-Enthusiast-2048x1196.jpg",
        "link": "https://www.volkswagen.com/",
        "specs": {
            "Type": "Performance Hatchback",
            "Price": "\u20b952 Lakh",
            "Engine": "2.0L Turbocharged Inline-4",
            "Horsepower": "315 HP",
            "Top Speed": "250 km/h",
            "Mileage": "13 km/l",
            "Transmission": "7-Speed DSG Automatic"
        }
    },
    {
        "name": "Tata Harrier",
        "brand": "Tata",
        "image": "https://cdn1.smartprix.com/rx-ihHLjmTvA-w1200-h1200/hHLjmTvA.webp",
        "link": "https://www.tatamotors.com/",
        "specs": {
            "Type": "SUV",
            "Price": "\u20b926 Lakh",
            "Engine": "2.0L Kryotec Diesel",
            "Horsepower": "168 HP",
            "Top Speed": "195 km/h",
            "Mileage": "16 km/l",
            "Transmission": "6-Speed Automatic"
        }
    },
    {
        "name": "Mini Cooper S",
        "brand": "Mini",
        "image": "https://paultan.org/image/2023/05/MINI-John-Cooper-Works-1to6-Edition-debut-27.jpg",
        "link": "https://www.mini.com/",
        "specs": {
            "Type": "Compact Hatchback",
            "Price": "\u20b944 Lakh",
            "Engine": "2.0L Turbo Inline-4",
            "Horsepower": "189 HP",
            "Top Speed": "235 km/h",
            "Mileage": "15 km/l",
            "Transmission": "7-Speed Automatic"
        }
    },
    {
        "name": "Alpine A110",
        "brand": "Alpine",
        "image": "https://images.collectingcars.com/017763/main.jpg?w=1024&fit=clip&crop=edges&auto=format,compress&cs=srgb&q=85",
        "link": "https://www.alpinecars.com/",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "\u20b980 Lakh",
            "Engine": "1.8L Turbo Inline-4",
            "Horsepower": "300 HP",
            "Top Speed": "275 km/h",
            "Mileage": "13 km/l",
            "Transmission": "7-Speed Dual Clutch"
        }
    },
    {
        "name": "Citroen C5 Aircross",
        "brand": "Citroen",
        "image": "https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/04/Citroen-C5-Aircross-HERO-3x2-1.jpg",
        "link": "https://www.citroen.com/",
        "specs": {
            "Type": "SUV",
            "Price": "\u20b939 Lakh",
            "Engine": "2.0L Diesel",
            "Horsepower": "174 HP",
            "Top Speed": "210 km/h",
            "Mileage": "18 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Fiat 500 Abarth",
        "brand": "Fiat",
        "image": "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/7a0a3c6148108c9c64425dd85e0181fa3cccb652/photos/3vdb4X7O-pMa-RDPyWQ-(edit).jpg?t=169143520908",
        "link": "https://www.fiat.com/",
        "specs": {
            "Type": "Performance Hatchback",
            "Price": "\u20b932 Lakh",
            "Engine": "1.4L Turbo Petrol",
            "Horsepower": "180 HP",
            "Top Speed": "225 km/h",
            "Mileage": "14 km/l",
            "Transmission": "5-Speed Manual"
        }
    },
    {
        "name": "Lotus Emira",
        "brand": "Lotus",
        "image": "https://www.thedrive.com/wp-content/uploads/2023/07/03/emira-hero.jpg?w=1337&h=752",
        "link": "https://www.lotuscars.com/",
        "specs": {
            "Type": "Sports Car",
            "Price": "\u20b91.20 Crore",
            "Engine": "3.5L Supercharged V6",
            "Horsepower": "400 HP",
            "Top Speed": "290 km/h",
            "Mileage": "10 km/l",
            "Transmission": "6-Speed Manual"
        }
    },
    {
        "name": "Genesis G90",
        "brand": "Genesis",
        "image": "https://i.gaw.to/content/photos/54/30/543025-genesis-g90-2023.jpeg",
        "link": "https://www.genesis.com/",
        "specs": {
            "Type": "Luxury Sedan",
            "Price": "\u20b995 Lakh",
            "Engine": "3.5L Twin Turbo V6",
            "Horsepower": "375 HP",
            "Top Speed": "250 km/h",
            "Mileage": "11 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Polestar 2",
        "brand": "Polestar",
        "image": "https://autonxt.net/wp-content/uploads/2022/06/Polestar-2-BST19.jpg",
        "link": "https://www.polestar.com/",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "\u20b970 Lakh",
            "Engine": "Dual Electric Motor",
            "Horsepower": "476 HP",
            "Top Speed": "205 km/h",
            "Mileage": "540 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Lucid Air Saphire",
        "brand": "Lucid",
        "image": "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/04/1184753-1.jpg?q=49&fit=crop&w=1150&dpr=2",
        "link": "https://www.lucidmotors.com/",
        "specs": {
            "Type": "Electric Luxury Sedan",
            "Price": "\u20b91.50 Crore",
            "Engine": "Triple Electric Motor",
            "Horsepower": "1200 HP",
            "Top Speed": "330 km/h",
            "Mileage": "687 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "BYD Seal",
        "brand": "BYD",
        "image": "https://automacha.com/wp-content/uploads/2022/04/Slide-16_9-18-20-1024x576.png",
        "link": "https://www.byd.com/",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "\u20b955 Lakh",
            "Engine": "Dual Electric Motor",
            "Horsepower": "523 HP",
            "Top Speed": "180 km/h",
            "Mileage": "700 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "VinFast VF9",
        "brand": "VinFast",
        "image": "https://www.ewingvinfastofplano.com/wp-content/uploads/sites/126/2025/05/2025_VinFast_VF9_driver_1.4.jpg",
        "link": "https://vinfastauto.com/",
        "specs": {
            "Type": "Electric SUV",
            "Price": "\u20b985 Lakh",
            "Engine": "Dual Electric Motor",
            "Horsepower": "402 HP",
            "Top Speed": "200 km/h",
            "Mileage": "594 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Ram 1500 TRX",
        "brand": "Ram",
        "image": "https://cdn.motor1.com/images/mgl/lEqmRl/s1/ram-trx-lunar-edition.jpg",
        "link": "https://www.ramtrucks.com/",
        "specs": {
            "Type": "Performance Pickup Truck",
            "Price": "\u20b91.20 Crore",
            "Engine": "6.2L Supercharged V8",
            "Horsepower": "702 HP",
            "Top Speed": "190 km/h",
            "Mileage": "5 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "GMC Hummer EV",
        "brand": "GMC",
        "image": "https://images.ctfassets.net/c9t6u0qhbv9e/5O99NcowLkTBV7PDl9SmMg/aa82db3f95314b4f390bc2b8c5736dd9/CG_2024_GMC_Hummer_EV_SUV_Black_Front_Quarter_Left.jpg",
        "link": "https://www.gmc.com/",
        "specs": {
            "Type": "Electric Pickup Truck",
            "Price": "\u20b91.60 Crore",
            "Engine": "Triple Electric Motor",
            "Horsepower": "1000 HP",
            "Top Speed": "180 km/h",
            "Mileage": "560 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Buick Enclave",
        "brand": "Buick",
        "image": "https://www.motortrend.com/uploads/sites/5/2021/01/2022-Buick-Enclave-Avenir-01.jpg",
        "link": "https://www.buick.com/",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "\u20b945 Lakh",
            "Engine": "3.6L V6",
            "Horsepower": "310 HP",
            "Top Speed": "210 km/h",
            "Mileage": "10 km/l",
            "Transmission": "9-Speed Automatic"
        }
    },
    {
        "name": "Dodge Challenger SRT Hellcat",
        "brand": "Dodge",
        "image": "https://images.classic.com/vehicles/88a255287606c3baf3c47606e1255ef9f5f89fc3.jpg?auto=format&fit=crop&w=600&h=384",
        "link": "https://www.dodge.com/",
        "specs": {
            "Type": "Muscle Car",
            "Price": "\u20b995 Lakh",
            "Engine": "6.2L Supercharged V8",
            "Horsepower": "717 HP",
            "Top Speed": "327 km/h",
            "Mileage": "6 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Mahindra Scorpio N",
        "brand": "Mahindra",
        "image": "https://acko-cms.ackoassets.com/Mahindra_Scorpio_N_Carbon_10e9b0eb21.jpg",
        "link": "https://www.mahindra.com/",
        "specs": {
            "Type": "SUV",
            "Price": "\u20b924 Lakh",
            "Engine": "2.2L mHawk Diesel",
            "Horsepower": "172 HP",
            "Top Speed": "165 km/h",
            "Mileage": "15 km/l",
            "Transmission": "6-Speed Automatic"
        }
    },
    {
        "name": "MG Cyberster",
        "brand": "MG",
        "image": "https://d1ek71enupal89.cloudfront.net/images/blocks_png/MG%20MOTOR%20UK/CYBERSTER/3DR/74MgCyb3drRedFR6_800.jpg",
        "link": "https://www.mgmotor.com/",
        "specs": {
            "Type": "Electric Roadster",
            "Price": "\u20b980 Lakh",
            "Engine": "Dual Electric Motor",
            "Horsepower": "536 HP",
            "Top Speed": "200 km/h",
            "Mileage": "580 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Datsun 240Z",
        "brand": "Datsun",
        "image": "https://robbreport.com/wp-content/uploads/2025/01/opener-w-_10bd93.jpg?w=1024",
        "link": "https://www.datsun.com/",
        "specs": {
            "Type": "Classic Sports Coupe",
            "Price": "\u20b935 Lakh",
            "Engine": "2.4L Inline-6",
            "Horsepower": "151 HP",
            "Top Speed": "200 km/h",
            "Mileage": "11 km/l",
            "Transmission": "5-Speed Manual"
        }
    },
    {
        "name": "Opel Astra OPC",
        "brand": "Opel",
        "image": "https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im02751-1-opel-astra-j-opc.jpg",
        "link": "https://www.opel.com/",
        "specs": {
            "Type": "Performance Hatchback",
            "Price": "\u20b930 Lakh",
            "Engine": "2.0L Turbo Inline-4",
            "Horsepower": "276 HP",
            "Top Speed": "250 km/h",
            "Mileage": "13 km/l",
            "Transmission": "6-Speed Manual"
        }
    },
    {
        "name": "Peugeot 508 PSE",
        "brand": "Peugeot",
        "image": "https://uncrate.com/p/2019/02/peugeot-508-1.jpg",
        "link": "https://www.peugeot.com/",
        "specs": {
            "Type": "Sports Sedan",
            "Price": "\u20b948 Lakh",
            "Engine": "1.6L Turbo Hybrid",
            "Horsepower": "355 HP",
            "Top Speed": "250 km/h",
            "Mileage": "20 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Renault Megane RS",
        "brand": "Renault",
        "image": "https://img.autotrader.co.za/30037870",
        "link": "https://www.renault.com/",
        "specs": {
            "Type": "Hot Hatch",
            "Price": "\u20b942 Lakh",
            "Engine": "1.8L Turbo Inline-4",
            "Horsepower": "300 HP",
            "Top Speed": "260 km/h",
            "Mileage": "14 km/l",
            "Transmission": "6-Speed Dual Clutch"
        }
    },
    {
        "name": "Skoda Octavia RS",
        "brand": "Skoda",
        "image": "https://carsales.pxcrush.net/carsales/cars/dealer/3rpipzh8xt768eciuj1pjh4ju.jpg?pxc_format=jpeg&pxc_method=crop&pxc_size=1200,630",
        "link": "https://www.skoda-auto.com/",
        "specs": {
            "Type": "Performance Sedan",
            "Price": "\u20b938 Lakh",
            "Engine": "2.0L Turbo Petrol",
            "Horsepower": "245 HP",
            "Top Speed": "250 km/h",
            "Mileage": "15 km/l",
            "Transmission": "7-Speed DSG Automatic"
        }
    },
    {
        "name": "Isuzu D-Max V-Cross",
        "brand": "Isuzu",
        "image": "https://ik.imagekit.io/isuzu/double-cab-new-oct2024/gallery/gallery5.jpg",
        "link": "https://www.isuzu.com/",
        "specs": {
            "Type": "Pickup Truck",
            "Price": "\u20b932 Lakh",
            "Engine": "1.9L Turbo Diesel",
            "Horsepower": "161 HP",
            "Top Speed": "180 km/h",
            "Mileage": "14 km/l",
            "Transmission": "6-Speed Automatic"
        }
    },
    {
        "name": "SsangYong Rexton",
        "brand": "SsangYong",
        "image": "https://images.carexpert.com.au/crop/1600/1067/app/uploads/2023/12/2024-SsangYong-Rexton-Ultimate-REVIEW-HERO-16x9-1.jpg",
        "link": "https://www.kg-mobility.com/",
        "specs": {
            "Type": "Premium SUV",
            "Price": "\u20b935 Lakh",
            "Engine": "2.2L Turbo Diesel",
            "Horsepower": "202 HP",
            "Top Speed": "185 km/h",
            "Mileage": "12 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Fisker Ocean",
        "brand": "Fisker",
        "image": "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/fiskerocean10.JPEG",
        "link": "https://www.fiskerinc.com/",
        "specs": {
            "Type": "Electric SUV",
            "Price": "\u20b960 Lakh",
            "Engine": "Dual Electric Motor",
            "Horsepower": "564 HP",
            "Top Speed": "205 km/h",
            "Mileage": "630 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Karma Revero GT",
        "brand": "Karma",
        "image": "https://www.carscoops.com/wp-content/uploads/2019/10/ec1e08f0-karma-revero-gt.jpg",
        "link": "https://karmaautomotive.com/",
        "specs": {
            "Type": "Luxury Hybrid Sedan",
            "Price": "\u20b91.10 Crore",
            "Engine": "Dual Electric Motor Hybrid",
            "Horsepower": "536 HP",
            "Top Speed": "200 km/h",
            "Mileage": "360 km Range",
            "Transmission": "Single-Speed Automatic"
        }
    },
    {
        "name": "Bugatti Veyron Super Sport",
        "brand": "Bugatti",
        "image": "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/853000/600/853662.jpg",
        "link": "https://www.bugatti.com",
        "specs": {
            "Type": "Hypercar",
            "Price": "$2 Million",
            "Engine": "8.0L Quad-Turbo W16",
            "Horsepower": "1200 HP",
            "Top Speed": "415 km/h",
            "Transmission": "7-Speed Dual Clutch Automatic",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Bugatti Divo",
        "brand": "Bugatti",
        "image": "https://images.hgmsites.net/hug/bugatti-divo_100668069_h.jpg",
        "link": "https://www.bugatti.com",
        "specs": {
            "Type": "Hypercar",
            "Price": "$5.8 Million",
            "Engine": "8.0L Quad-Turbo W16",
            "Horsepower": "1500 HP",
            "Top Speed": "380 km/h",
            "Transmission": "7-Speed Dual-Clutch",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Lamborghini Huracan Evo",
        "brand": "Lamborghini",
        "image": "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=1200",
        "link": "https://www.lamborghini.com",
        "specs": {
            "Type": "Supercar",
            "Price": "₹3.22 Crore",
            "Engine": "5.2L Naturally Aspirated V10",
            "Horsepower": "631 HP",
            "Top Speed": "325 km/h",
            "Mileage": "7 km/l",
            "Transmission": "7-Speed Dual Clutch"
        }
    },
    {
        "name": "Lamborghini Urus Performante",
        "brand": "Lamborghini",
        "image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1665673408/autoexpress/2022/10/Lamborghini%20Urus%20Performante.jpg",
        "link": "https://www.lamborghini.com",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "₹4.22 Crore",
            "Engine": "4.0L Twin-Turbo V8",
            "Horsepower": "657 HP",
            "Top Speed": "306 km/h",
            "Mileage": "8 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Lamborghini Revuelto",
        "brand": "Lamborghini",
        "image": "https://cdn.motor1.com/images/mgl/40KMWZ/s1/2024-lamborghini-revuelto-review.jpg",
        "link": "https://www.lamborghini.com",
        "specs": {
            "Type": "Hybrid Supercar",
            "Price": "₹8.89 Crore",
            "Engine": "6.5L V12 Hybrid",
            "Horsepower": "1001 HP",
            "Top Speed": "350 km/h",
            "Mileage": "10 km/l",
            "Transmission": "8-Speed Dual Clutch"
        }
    },
    {
        "name": "Tesla Model 3 Performance",
        "brand": "Tesla",
        "image": "https://e9iwhqzsmh4.exactdn.com/wp-content/uploads/Tesla-Model-3-Unplugged-Performance-030125-03.jpg?strip=all&lossy=1&ssl=1",
        "link": "https://www.tesla.com",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "₹60 Lakh",
            "Battery": "82 kWh",
            "Range": "507 km",
            "Horsepower": "510 HP",
            "Top Speed": "262 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "Tesla Model Y Performance",
        "brand": "Tesla",
        "image": "https://hips.hearstapps.com/hmg-prod/images/2020-tesla-model-y-performance-110-1620660805.jpg?crop=0.729xw:0.615xh;0.173xw,0.245xh&resize=1200:*",
        "link": "https://www.tesla.com",
        "specs": {
            "Type": "Electric SUV",
            "Price": "₹70 Lakh",
            "Battery": "81 kWh",
            "Range": "459 km",
            "Horsepower": "456 HP",
            "Top Speed": "250 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "Tesla Cybertruck Cyberbeast",
        "brand": "Tesla",
        "image": "https://cdn.prod.website-files.com/5b4a3b3971d099f78f362505/666259d25badf71310a01423_2024-Tesla-Cybertruck-Cyberbeat-Foundation-Silver-7G2CEHEE1RA010160_012.jpg",
        "link": "https://www.tesla.com",
        "specs": {
            "Type": "Electric Pickup Truck",
            "Price": "₹1.20 Crore",
            "Battery": "123 kWh",
            "Range": "515 km",
            "Horsepower": "845 HP",
            "Top Speed": "209 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "BMW M3 Competition",
        "brand": "BMW",
        "image": "https://mediapool.bmwgroup.com/cache/P9/202103/P90416674/P90416674-the-all-new-bmw-m3-competition-sedan-with-m-xdrive-04-2021-2250px.jpg",
        "link": "https://www.bmw.com",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "₹1.30 Crore",
            "Engine": "3.0L Twin-Turbo Inline-6",
            "Horsepower": "503 HP",
            "Top Speed": "290 km/h",
            "Mileage": "10 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "BMW M5 Competition",
        "brand": "BMW",
        "image": "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/3Re64RYD-8o3Q6nLfwb-(edit).jpg?t=169269654564",
        "link": "https://www.bmw.com",
        "specs": {
            "Type": "Luxury Sports Sedan",
            "Price": "₹1.70 Crore",
            "Engine": "4.4L Twin-Turbo V8",
            "Horsepower": "617 HP",
            "Top Speed": "305 km/h",
            "Mileage": "8 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "BMW i8",
        "brand": "BMW",
        "image": "https://carsguide.ikman.lk/wp-content/uploads/2023/08/bmw-i8-car-scaled-e1691999629250.jpg",
        "link": "https://www.bmw.com",
        "specs": {
            "Type": "Hybrid Sports Coupe",
            "Price": "₹2.62 Crore",
            "Engine": "1.5L Turbo Hybrid",
            "Horsepower": "369 HP",
            "Top Speed": "250 km/h",
            "Mileage": "37 km/l",
            "Transmission": "6-Speed Automatic"
        }
    },
    {
        "name": "Toyota GR Supra",
        "brand": "Toyota",
        "image": "https://www.hdcarwallpapers.com/download/toyota_gr_supra_a91_mt_2023_4k_8k_5-5120x2880.jpg",
        "link": "https://www.toyota.com",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "₹85 Lakh",
            "Engine": "3.0L Twin-Scroll Turbo Inline-6",
            "Horsepower": "382 HP",
            "Top Speed": "250 km/h",
            "Mileage": "11 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Toyota Fortuner Legender",
        "brand": "Toyota",
        "image": "https://img.autocarindia.com/ExtraImages/20250305123431_Toyota_Fortuner_Legender_4x4_MT_Launch.jpg",
        "link": "https://www.toyota.com",
        "specs": {
            "Type": "SUV",
            "Price": "₹47 Lakh",
            "Engine": "2.8L Turbo Diesel",
            "Horsepower": "201 HP",
            "Top Speed": "190 km/h",
            "Mileage": "12 km/l",
            "Transmission": "6-Speed Automatic"
        }
    },
    {
        "name": "Toyota Camry Hybrid",
        "brand": "Toyota",
        "image": "https://images.hgmsites.net/hug/2025-toyota-camry_100926322_h.jpg",
        "link": "https://www.toyota.com/camry/",
        "specs": {
            "Type": "Hybrid Sedan",
            "Price": "₹48 Lakh",
            "Engine": "2.5L Hybrid (Petrol + Electric)",
            "Horsepower": "227 HP",
            "Top Speed": "180 km/h",
            "Mileage": "25 km/l",
            "Transmission": "e-CVT",
            "Fuel": "Hybrid"
        }
    },
    {
        "name": "Toyota Corolla Altis",
        "brand": "Toyota",
        "image": "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/toyota-corolla-altis-hybrid-review-road-test-front-quarter-exterior-philippines-5de4a59f318b3.jpg",
        "link": "https://www.toyota.com",
        "specs": {
            "Type": "Sedan",
            "Price": "₹20 Lakh",
            "Engine": "1.8L Petrol",
            "Horsepower": "140 HP",
            "Top Speed": "190 km/h",
            "Mileage": "15 km/l",
            "Transmission": "CVT",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Toyota Innova Crysta",
        "brand": "Toyota",
        "image": "https://www.autoworldjournal.com/wp-content/uploads/2023/08/Toyota-Innova-Crysta_Exterior.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "MPV",
            "Price": "₹26 Lakh",
            "Engine": "2.4L Diesel",
            "Horsepower": "150 HP",
            "Top Speed": "175 km/h",
            "Mileage": "13 km/l",
            "Transmission": "6-Speed Manual",
            "Fuel": "Diesel"
        }
    },
    {
        "name": "Toyota Innova Hycross",
        "brand": "Toyota",
        "image": "https://www.financialexpress.com/wp-content/uploads/2022/11/Toyota-Innova-HyCross-1.jpg?w=1024",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "Hybrid MPV",
            "Price": "₹30 Lakh",
            "Engine": "2.0L Hybrid (Petrol + Electric)",
            "Horsepower": "186 HP",
            "Top Speed": "170 km/h",
            "Mileage": "21 km/l",
            "Transmission": "e-CVT",
            "Fuel": "Hybrid"
        }
    },
    {
        "name": "Toyota Hilux",
        "brand": "Toyota",
        "image": "https://www.topgear.com/sites/default/files/2025/03/1-Toyota-Hilux-review-2025.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "Pickup Truck",
            "Price": "₹40 Lakh",
            "Engine": "2.8L Turbo Diesel",
            "Horsepower": "201 HP",
            "Top Speed": "175 km/h",
            "Mileage": "12 km/l",
            "Transmission": "6-Speed Automatic",
            "Fuel": "Diesel"
        }
    },
    {
        "name": "Toyota Land Cruiser Prado",
        "brand": "Toyota",
        "image": "https://img.autotrader.co.za/32068572",
        "link": "https://www.toyota.com",
        "specs": {
            "Type": "SUV",
            "Price": "₹1.20 Crore",
            "Engine": "2.8L Turbo Diesel",
            "Horsepower": "201 HP",
            "Top Speed": "175 km/h",
            "Mileage": "11 km/l",
            "Transmission": "8-Speed Automatic",
            "Fuel": "Diesel"
        }
    },
    {
        "name": "Toyota Prius",
        "brand": "Toyota",
        "image": "https://images.ctfassets.net/c9t6u0qhbv9e/7r3WcSQgbfpQpOmR3ZG9ji/77a39f05c3f8329d9960086778768bd0/CG_2024_Toyota_Prius_XLE_Red_Front_Quarter_View.jpg",
        "link": "https://www.toyota.com/prius/",
        "specs": {
            "Type": "Hybrid Hatchback",
            "Price": "₹35 Lakh",
            "Engine": "2.0L Hybrid (Petrol + Electric)",
            "Horsepower": "194 HP",
            "Top Speed": "180 km/h",
            "Mileage": "24 km/l",
            "Transmission": "e-CVT",
            "Fuel": "Hybrid"
        }
    },
    {
        "name": "Toyota bZ4X",
        "brand": "Toyota",
        "image": "https://www.digitaltrends.com/uploads/2023/02/2023-Toyota-bZ4X-front-three-quarter.jpeg?p=1",
        "link": "https://www.toyota.com/bz4x/",
        "specs": {
            "Type": "Electric SUV",
            "Price": "₹55 Lakh",
            "Battery": "71.4 kWh",
            "Range": "500 km",
            "Horsepower": "214 HP",
            "Top Speed": "160 km/h",
            "Charging": "Fast Charging",
            "Transmission": "Single-Speed Automatic",
            "Fuel": "Electric"
        }
    },
    {
        "name": "Toyota GR86",
        "brand": "Toyota",
        "image": "https://www.edmunds.com/assets/m/cs/blt8d571d073b0997ef/674f4d994b282e636581059c/2024-toyota-gr86-f34.jpg",
        "link": "https://www.toyota.com/gr86/",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "₹35 Lakh",
            "Engine": "2.4L Naturally Aspirated Flat-4",
            "Horsepower": "228 HP",
            "Top Speed": "226 km/h",
            "Mileage": "12 km/l",
            "Transmission": "6-Speed Manual",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Toyota Glanza",
        "brand": "Toyota",
        "image": "https://cdni.autocarindia.com/ExtraImages/20241021111328_Glanza%20Web.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "Hatchback",
            "Price": "₹10 Lakh",
            "Engine": "1.2L Petrol",
            "Horsepower": "89 HP",
            "Top Speed": "170 km/h",
            "Mileage": "22 km/l",
            "Transmission": "AMT",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Toyota Urban Cruiser Hyryder",
        "brand": "Toyota",
        "image": "https://www.team-bhp.com/carpics/2022-toyota-urban-cruiser-hyryder/l/exterior/2022-toyota-urban-cruiser-hyryder-01.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "Hybrid SUV",
            "Price": "₹18 Lakh",
            "Engine": "1.5L Petrol Hybrid",
            "Horsepower": "115 HP",
            "Top Speed": "170 km/h",
            "Mileage": "27 km/l",
            "Transmission": "e-CVT",
            "Fuel": "Hybrid"
        }
    },
    {
        "name": "Toyota Rumion",
        "brand": "Toyota",
        "image": "https://media.cdntoyota.co.za/toyotacms23/attachments/cli2xpai56x6y2nw10nydz2w9-ext-1.desktop.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "MPV",
            "Price": "₹12 Lakh",
            "Engine": "1.5L Petrol",
            "Horsepower": "103 HP",
            "Top Speed": "170 km/h",
            "Mileage": "20 km/l",
            "Transmission": "6-Speed Automatic",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Toyota Urban Cruiser Taisor",
        "brand": "Toyota",
        "image": "https://www.nurcmedianext.com/vehicleImages/vehicle-image-Urban%20Cruiser%20Taisor-urban-cruiser-taisor.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "SUV",
            "Price": "₹13 Lakh",
            "Engine": "1.0L Turbo Petrol",
            "Horsepower": "100 HP",
            "Top Speed": "180 km/h",
            "Mileage": "20 km/l",
            "Transmission": "6-Speed Automatic",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Toyota Vellfire",
        "brand": "Toyota",
        "image": "https://i.pinimg.com/originals/44/e4/3f/44e43f9fc9ce39222ba9eb5e2d259b2a.jpg",
        "link": "https://www.toyotabharat.com/",
        "specs": {
            "Type": "Luxury MPV",
            "Price": "₹1.30 Crore",
            "Engine": "2.5L Hybrid (Petrol + Electric)",
            "Horsepower": "246 HP",
            "Top Speed": "170 km/h",
            "Mileage": "16 km/l",
            "Transmission": "e-CVT",
            "Fuel": "Hybrid"
        }
    },
    {
        "name": "Toyota Yaris GR",
        "brand": "Toyota",
        "image": "https://paultan.org/image/2023/01/Toyota-GR-Yaris-with-GR-Parts-1.jpg",
        "link": "https://www.toyota.com",
        "specs": {
            "Type": "Sports Hatchback",
            "Price": "₹5.9 million",
            "Engine": "1.6L Petrol",
            "Horsepower": "276 HP",
            "Top Speed": "230 km/h",
            "Mileage": "8.2 km/l",
            "Transmission": "6-Speed Manual",
            "Fuel": "Petrol"
        }
    },
    {
        "name": "Mercedes G-Class G 63 AMG",
        "brand": "Mercedes",
        "image": "https://www.motorcarsofjackson.com/imagetag/335/82/l/Used-2020-Mercedes-Benz-G-Class-AMG-G-63-for-sale-Jackson-MS.jpg",
        "link": "https://www.mercedes-benz.com",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "₹3.30 Crore",
            "Engine": "4.0L Twin-Turbo V8",
            "Horsepower": "577 HP",
            "Top Speed": "220 km/h",
            "Mileage": "6 km/l",
            "Transmission": "9-Speed Automatic"
        }
    },
    {
        "name": "Mercedes S-Class S 450",
        "brand": "Mercedes",
        "image": "https://i.pinimg.com/736x/10/d3/ac/10d3ac1e0bf5a1d0f26d7551f29d8afe.jpg",
        "link": "https://www.mercedes-benz.com",
        "specs": {
            "Type": "Luxury Sedan",
            "Price": "₹1.80 Crore",
            "Engine": "3.0L Turbo Inline-6",
            "Horsepower": "362 HP",
            "Top Speed": "250 km/h",
            "Mileage": "12 km/l",
            "Transmission": "9-Speed Automatic"
        }
    },
    {
        "name": "Mercedes EQS 580",
        "brand": "Mercedes",
        "image": "https://www.hdcarwallpapers.com/download/mercedes_benz_eqs_580_4matic_manufaktur_signature_edition_4k-1920x1080.jpg",
        "link": "https://www.mercedes-benz.com",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "₹1.62 Crore",
            "Battery": "107.8 kWh",
            "Range": "857 km",
            "Horsepower": "516 HP",
            "Top Speed": "210 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "Ferrari LaFerrari",
        "brand": "Ferrari",
        "image": "https://images7.alphacoders.com/691/thumb-1920-691007.jpg",
        "link": "https://www.ferrari.com",
        "specs": {
            "Type": "Hypercar",
            "Price": "₹15 Crore",
            "Engine": "6.3L V12 Hybrid",
            "Horsepower": "950 HP",
            "Top Speed": "350 km/h",
            "Mileage": "6 km/l",
            "Transmission": "7-Speed Dual Clutch"
        }
    },
    {
        "name": "Ferrari Roma",
        "brand": "Ferrari",
        "image": "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/06/ferrari-roma-spider-front-quarter-blue.jpg",
        "link": "https://www.ferrari.com",
        "specs": {
            "Type": "Luxury Grand Tourer",
            "Price": "₹3.76 Crore",
            "Engine": "3.9L Twin-Turbo V8",
            "Horsepower": "612 HP",
            "Top Speed": "320 km/h",
            "Mileage": "9 km/l",
            "Transmission": "8-Speed Dual Clutch"
        }
    },
    {
        "name": "Porsche Taycan Turbo S",
        "brand": "Porsche",
        "image": "https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/714/2020-porsche-taycan_100714962.jpg",
        "link": "https://www.porsche.com",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "₹2.44 Crore",
            "Battery": "93.4 kWh",
            "Range": "450 km",
            "Horsepower": "750 HP",
            "Top Speed": "260 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "Porsche 718 Cayman GT4",
        "brand": "Porsche",
        "image": "https://www.hdcarwallpapers.com/download/porsche_718_cayman_gt4_pdk_2021_5k-3840x2160.jpg",
        "link": "https://www.porsche.com",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "₹1.45 Crore",
            "Engine": "4.0L Naturally Aspirated Flat-6",
            "Horsepower": "414 HP",
            "Top Speed": "304 km/h",
            "Mileage": "8 km/l",
            "Transmission": "6-Speed Manual"
        }
    },
    {
        "name": "Audi RS6 Avant",
        "brand": "Audi",
        "image": "https://media.ed.edmunds-media.com/audi/rs-6/2025/oem/2025_audi_rs-6_wagon_performance_fq_oem_1_1600.jpg",
        "link": "https://www.audi.com",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "₹2.28 Crore",
            "Engine": "4.0L Twin-Turbo V8",
            "Horsepower": "591 HP",
            "Top Speed": "305 km/h",
            "Mileage": "8 km/l",
            "Transmission": "8-Speed Tiptronic Automatic"
        }
    },
    {
        "name": "Audi e-tron GT",
        "brand": "Audi",
        "image": "https://car-images.bauersecure.com/wp-images/197037/091-audi-e-tron-gt-review-front-silver-s.jpg",
        "link": "https://www.audi.com",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "₹1.70 Crore",
            "Battery": "93.4 kWh",
            "Range": "480 km",
            "Horsepower": "522 HP",
            "Top Speed": "245 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "Rolls Royce Phantom",
        "brand": "Rolls Royce",
        "image": "https://www.topgear.com/sites/default/files/2025/01/RRphantom-dragon-10.jpg",
        "link": "https://www.rolls-roycemotorcars.com",
        "specs": {
            "Type": "Ultra Luxury Sedan",
            "Price": "₹10.48 Crore",
            "Engine": "6.75L Twin-Turbo V12",
            "Horsepower": "563 HP",
            "Top Speed": "250 km/h",
            "Mileage": "6 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Rolls Royce Spectre",
        "brand": "Rolls Royce",
        "image": "https://www.topgear.com/sites/default/files/2025/03/BB-25-FRONT-3-4L-R4-16x9-HIRES.jpg.jpg",
        "link": "https://www.rolls-roycemotorcars.com",
        "specs": {
            "Type": "Electric Sedan",
            "Price": "₹7.50 Crore",
            "Battery": "102 kWh",
            "Range": "530 km",
            "Horsepower": "584 HP",
            "Top Speed": "250 km/h",
            "Charging": "Fast Charging"
        }
    },
    {
        "name": "McLaren P1",
        "brand": "McLaren",
        "image": "https://www.carscoops.com/wp-content/uploads/2019/07/89233ad8-mclaren-p1-xp05-1.jpg",
        "link": "https://cars.mclaren.com",
        "specs": {
            "Type": "Hypercar",
            "Price": "₹12 Crore",
            "Engine": "3.8L Twin-Turbo V8 Hybrid",
            "Horsepower": "903 HP",
            "Top Speed": "350 km/h",
            "Mileage": "12 km/l",
            "Transmission": "7-Speed Dual Clutch"
        }
    },
    {
        "name": "McLaren Senna",
        "brand": "McLaren",
        "image": "https://wallpaperaccess.com/full/1152836.jpg",
        "link": "https://cars.mclaren.com",
        "specs": {
            "Type": "Hypercar",
            "Price": "₹10 Crore",
            "Engine": "4.0L Twin-Turbo V8",
            "Horsepower": "789 HP",
            "Top Speed": "340 km/h",
            "Mileage": "6 km/l",
            "Transmission": "7-Speed Dual Clutch"
        }
    },
    {
        "name": "Nissan Z Performance",
        "brand": "Nissan",
        "image": "https://www.hongliyangzhi.com/manufacturers/nissan/nissan-z/nissan-z-performance/nissan-z-performance-1.jpg0",
        "link": "https://www.nissanusa.com",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "₹75 Lakh",
            "Engine": "3.0L Twin-Turbo V6",
            "Horsepower": "400 HP",
            "Top Speed": "250 km/h",
            "Mileage": "10 km/l",
            "Transmission": "6-Speed Manual"
        }
    },
    {
        "name": "Nissan Leaf",
        "brand": "Nissan",
        "image": "https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/driveau/upload/cms/uploads/599295b3-379c-54bc-88ac-f119ad650000",
        "link": "https://www.nissanusa.com",
        "specs": {
            "Type": "Electric Hatchback",
            "Price": "₹30 Lakh",
            "Battery": "40 kWh",
            "Range": "270 km",
            "Horsepower": "147 HP",
            "Top Speed": "144 km/h",
            "Charging": "Normal Charging"
        }
    },
    {
        "name": "Ford F-150 Raptor R",
        "brand": "Ford",
        "image": "https://www.tuningblog.eu/wp-content/uploads/2023/12/2024-Ford-F-150-Raptor-R.webp",
        "link": "https://www.ford.com",
        "specs": {
            "Type": "SUV",
            "Price": "₹1.40 Crore",
            "Engine": "5.2L V8 Supercharged",
            "Horsepower": "720 HP",
            "Top Speed": "180 km/h",
            "Mileage": "5 km/l",
            "Transmission": "10-Speed Automatic"
        }
    },
    {
        "name": "Ford GT",
        "brand": "Ford",
        "image": "https://www.motortrend.com/uploads/2022/10/2022-Ford-GT-LM-Final-Special-Edition-2.jpg",
        "link": "https://www.ford.com",
        "specs": {
            "Type": "Supercar",
            "Price": "₹6.50 Crore",
            "Engine": "3.5L Twin-Turbo V6",
            "Horsepower": "660 HP",
            "Top Speed": "347 km/h",
            "Mileage": "6 km/l",
            "Transmission": "7-Speed Dual Clutch"
        }
    },
    {
        "name": "Aston Martin Vantage",
        "brand": "Aston Martin",
        "image": "https://www.thedrive.com/wp-content/uploads/2024/05/10/AstonMartinVantage%C2%A9PhotoMaxEarey-5673.jpg?quality=85",
        "link": "https://www.astonmartin.com",
        "specs": {
            "Type": "Sports Coupe",
            "Price": "₹2.95 Crore",
            "Engine": "4.0L Twin-Turbo V8",
            "Horsepower": "503 HP",
            "Top Speed": "314 km/h",
            "Mileage": "9 km/l",
            "Transmission": "8-Speed Automatic"
        }
    },
    {
        "name": "Aston Martin DBX707",
        "brand": "Aston Martin",
        "image": "https://www.hdcarwallpapers.com/download/q_by_aston_martin_dbx707_2022_5k-3840x2160.jpg",
        "link": "https://www.astonmartin.com",
        "specs": {
            "Type": "Luxury SUV",
            "Price": "₹4.63 Crore",
            "Engine": "4.0L Twin-Turbo V8",
            "Horsepower": "697 HP",
            "Top Speed": "310 km/h",
            "Mileage": "7 km/l",
            "Transmission": "9-Speed Automatic"
        }
    }
];
