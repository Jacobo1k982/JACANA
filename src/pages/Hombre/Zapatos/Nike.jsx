import React from 'react';


function Nike() {
    const products = [
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (1).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (2).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (3).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (4).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (5).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 37.500"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (6).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (7).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (8).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (9).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (10).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (11).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (12).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (13).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (14).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (15).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (16).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (17).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (18).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (19).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (20).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (21).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 37.500"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (22).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (23).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 34.500"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (24).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (25).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (26).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (27).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (28).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (29).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 30.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (30).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (31).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (32).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (33).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (34).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (35).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (36).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 24.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (37).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (38).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (39).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (40).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (41).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (42).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (43).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (44).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (45).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (46).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (47).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (48).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (49).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (50).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (51).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (52).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (53).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (54).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (55).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (56).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (57).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (58).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (59).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (60).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (61).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (62).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (63).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (64).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (65).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (66).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (67).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (68).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (69).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (70).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (71).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (72).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (73).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (74).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (75).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (76).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (77).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (78).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (79).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (80).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (81).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (82).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (83).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (84).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (85).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (86).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (87).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (88).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (89).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (90).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (91).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (92).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (93).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (94).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (95).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (96).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (97).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (98).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (99).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (100).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (101).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (102).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (103).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (104).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (105).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (106).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (107).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},
        {img: "./src/assets/Hombre/Zapatos/Nike/NK1 (108).jpg", title: "Nike", model: "Modelo Exclusivo", price: "¢ 33.000"},


    ];

    return (
        <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-1 gap-8 mt-10 p-4">
            {products.map((product, index) => (
                <div key={index} className="relative z-10 nike-container p-8 bg-white shadow-2xl rounded-3xl overflow-hidden w-80 h-96 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
                    <div className="relative w-full h-3/4 overflow-hidden rounded-2xl">
                        <img
                            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-125"
                            src={product.img}
                            alt={product.title}
                        />
                    </div>
                    <div className="w-full text-center p-4 bg-gray-50 rounded-b-3xl">
                        <p className="text-2xl font-extrabold text-gray-900">{product.title}</p>
                        <p className="text-lg text-gray-500">{product.model}</p>
                        <p className="mt-2 text-xl font-bold text-red-500">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Nike;
