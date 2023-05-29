function RandomPath() {
    var img8 = document.getElementById('layer_8');
    var img7 = document.getElementById('layer_7');
    var img6 = document.getElementById('layer_6');
    var img5 = document.getElementById('layer_5');
    var img4 = document.getElementById('layer_4');
    var img3 = document.getElementById('layer_3');
    var img2 = document.getElementById('layer_2');
    var img1 = document.getElementById('layer_1');
    var img0 = document.getElementById('layer_0');

    var icon8 = document.getElementById('layer_8_min');
    var icon7 = document.getElementById('layer_7_min');
    var icon6 = document.getElementById('layer_6_min');
    var icon5 = document.getElementById('layer_5_min');
    var icon4 = document.getElementById('layer_4_min');
    var icon3 = document.getElementById('layer_3_min');
    var icon2 = document.getElementById('layer_2_min');
    var icon1 = document.getElementById('layer_1_min');
    var icon0 = document.getElementById('layer_0_min');

    var layer_8 = new Array('black_onyx',
    'seraphinit','malahyt',
    'lazurit_blue','lazurit_skyblue',
    'charaid','crimson_agat',
    'blue_agat','orange_agat',
    'pink_onyx','white_onyx');
    var layer_8_name = new Array ('Черный Оникс','Серафинит','Малахит','Лазурит Синий','Лазурит Голубой','Чараид','Малиновый Агат','Синий Агат','Оранжевый Агат','Розовый Агат','Белый Оникс');
    var layer_7 = new Array ('god_mother','revival','trinity');
    var layer_7_name = new Array ('Божья Матерь','Воскресение','Троица');
    var layer_6 = new Array ('gold','silver');
    var layer_5 = new Array ('gold','silver');
    var layer_5_name = new Array ('Золото','Серебро');
    var layer_4 = new Array ('emerald','citrin','granat','topaz','rubin','amethyst','saphir','brilliant','cos_gold','cos_silver');
    var layer_4_name = new Array ('Изумруд','Цитрин','Гранат','Топаз','Рубин','Аметист','Сапфир','Бриллиант','Золотая Косичка','Серебряная косичка');
    var layer_3 = new Array ('emerald','citrin','granat','topaz','rubin','amethyst','saphir','brilliant');
    var layer_2 = new Array ('emerald','citrin','granat','topaz','rubin','amethyst','saphir','brilliant');
    var layer_1 = new Array ('emerald','citrin','granat','topaz','rubin','amethyst','saphir','brilliant');
    var layer_0 = new Array ('emerald','citrin','granat','topaz','rubin','amethyst','saphir','brilliant');
    var layer_0_name = new Array ('Изумруд','Цитрин','Гранат','Топаз','Рубин','Аметист','Сапфир','Бриллиант');

    /* Random Length */
    var randomPositionForLayer8 = Math.floor(Math.random() * (layer_8.length));
    var randomPositionForLayer7 = Math.floor(Math.random() * (layer_7.length));
    var randomPositionForLayer6 = Math.floor(Math.random() * (layer_6.length));
    var randomPositionForLayer5 = Math.floor(Math.random() * (layer_5.length));
    var randomPositionForLayer4 = Math.floor(Math.random() * (layer_4.length));
    var randomPositionForLayer3 = Math.floor(Math.random() * (layer_3.length));
    var randomPositionForLayer2 = Math.floor(Math.random() * (layer_2.length));
    var randomPositionForLayer1 = Math.floor(Math.random() * (layer_1.length));
    var randomPositionForLayer0 = Math.floor(Math.random() * (layer_0.length));

    /*Layer 8*/
    img8.src = './assets/img/layers/l8_' + layer_8[randomPositionForLayer8] + '.webp';
    icon8.src = './assets/img/icons/' + layer_8[randomPositionForLayer8] + '.jpg';
    current_name_8 = document.getElementById('current_name_8');
    current_name_8.textContent = layer_8_name[randomPositionForLayer8];
    /*Layer 7*/
    img7.src = './assets/img/layers/l7_' + layer_7[randomPositionForLayer7] + '.webp';
    icon7.src = './assets/img/icons/' + layer_7[randomPositionForLayer7] + '.png';
    current_name_7 = document.getElementById('current_name_7');
    current_name_7.textContent = layer_7_name[randomPositionForLayer7];
    /*Layer 6*/
    img6.src = './assets/img/layers/l6_' + layer_6[randomPositionForLayer6] + '.webp';
    icon6.src = './assets/img/icons/' + layer_6[randomPositionForLayer6] + '.png';
    current_name_6 = document.getElementById('current_name_6');
    current_name_6.textContent = layer_5_name[randomPositionForLayer6];
    /*Layer 5*/
    img5.src = './assets/img/layers/l5_' + layer_5[randomPositionForLayer5] + '.webp';
    icon5.src = './assets/img/icons/' + layer_5[randomPositionForLayer5] + '.png';
    current_name_5 = document.getElementById('current_name_5');
    current_name_5.textContent = layer_5_name[randomPositionForLayer5];
    /*Layer 4*/
    img4.src = './assets/img/layers/l4_' + layer_4[randomPositionForLayer4] + '.webp';
    icon4.src = './assets/img/icons/' + layer_4[randomPositionForLayer4] + '.png';
    current_name_4 = document.getElementById('current_name_4');
    current_name_4.textContent = layer_4_name[randomPositionForLayer4];
    /*Layer 3*/
    img3.src = './assets/img/layers/l3_' + layer_3[randomPositionForLayer3] + '.webp';
    icon3.src = './assets/img/icons/' + layer_3[randomPositionForLayer3] + '.png';
    current_name_3 = document.getElementById('current_name_3');
    current_name_3.textContent = layer_0_name[randomPositionForLayer3];
    /*Layer 2*/
    img2.src = './assets/img/layers/l2_' + layer_2[randomPositionForLayer2] + '.webp';
    icon2.src = './assets/img/icons/' + layer_2[randomPositionForLayer2] + '.png';
    current_name_2 = document.getElementById('current_name_2');
    current_name_2.textContent = layer_0_name[randomPositionForLayer2];
    /*Layer 1*/
    img1.src = './assets/img/layers/l1_' + layer_1[randomPositionForLayer1] + '.webp';
    icon1.src = './assets/img/icons/' + layer_1[randomPositionForLayer1] + '.png';
    current_name_1 = document.getElementById('current_name_1');
    current_name_1.textContent = layer_0_name[randomPositionForLayer1];
    /*Layer 0*/
    img0.src = './assets/img/layers/l0_' + layer_0[randomPositionForLayer0] + '.webp';
    icon0.src = './assets/img/icons/' + layer_0[randomPositionForLayer0] + '.png';
    current_name_0 = document.getElementById('current_name_0');
    current_name_0.textContent = layer_0_name[randomPositionForLayer0];
};