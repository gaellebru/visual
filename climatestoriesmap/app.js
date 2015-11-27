var map;
var data = [
  ["Ghana","Tapping the sun to increase rural incomes in Ghana","Tamale",9.4329186,-0.8484524,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/tapping-the-sun-to-increase-rural-incomes-in-ghana.html","Success Story"  ],
  ["Mali","Solar power in Mali: A miracle for women","Sirakorola",13.2879977,-7.5694141,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/l_energie_solaireaumaliunmiraclepourlesfemmes.html","Success Story"  ],
  ["Zambia","Quenching the thirst","Siavonga, Southern, Zambia",-16.5323379,28.7110539,"https://undp.exposure.co/quenching-the-thirst","Photo essay"  ],
  ["Eritrea","Helping communities boost food security in Eritrea","Asmara outskirts",15.3228767,38.9250517,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/helping-communities-boost-food-security-in-eritrea.html","Success Story"  ],
  ["Kenya","Climate change bites Kenyan tea farmers","Murang'a",-0.8042071,36.8440676,"http://www.europe.undp.org/content/geneva/en/home/presscenter/articles/2015/11/10/climate-change-bites-kenyan-tea-farmers.html","Success Story"  ],
  ["Uganda","Microcredit for macro gains","Budadiri, Uganda",1.1711177,34.3324244,"https://undp.exposure.co/microcredit-for-macro-gains","Photo essay"  ],
  ["Uganda","Beehives for a better life","Eastern Region, Uganda",1.2692186,33.438353,"https://undp.exposure.co/beehives-for-a-better-life","Photo essay"  ],
  ["Cabo Verde","Cabo Verde, une île sans eau","Santiago ",15.0852627,-23.6204644,"https://undp.exposure.co/le-cap-vert-une-le-sans-eau","Photo essay"  ],
  ["Comoros","L'eau, c'est la vie","Bandasamlini",-11.6455,43.3333,"https://undp.exposure.co/leau-cest-la-vie","Photo essay"  ],
  ["Gaza","Gaza school going solar","",31.522561,34.453593,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/gaza-school-going-solar/","Success Story"  ],
  ["Egypt","In Egypt, small farmers embrace the entrepreneurial spirit","Upper governorates",26.820553,30.802498,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/mdg-fund-backs-a-revolution-in-egyptian-farming.html","Success Story"  ],
  ["Lebanon","Lebanese farmers fight climate change – by adapting","Dahye",33.8104337,35.5187908,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/lebanese-farmers-fight-climate-change-by-adapting.html","Success Story"  ],
  ["Cambodia","In Cambodia, solar panels bring light to rural homes","Kampong Chhnang, Cambodia",12.1392352,104.5655273,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/in-cambodia--solar-panels-bring-light-to-rural-homes.html","Success Story"  ],
  ["Cambodia","No water, no life","Preah Vihear, Cambodia",14.0085797,104.8454619,"https://undp.exposure.co/no-water-no-life","Photo essay"  ],
  ["Cambodia","Community forestry inches closer to trade carbon credits","Oddar Meanchey",14.1717195,103.6362715,"http://www.kh.undp.org/content/cambodia/en/home/ourwork/environmentandenergy/successstories/community-forestry-inches-closer-to-trade-carbon-credits/","Success Story"  ],
  ["Cambodia","Cambodian villagers go solar in getting water","Kratie",12.8606299,105.9699878,"https://www.youtube.com/watch?v=xvokh__Gm5A&feature=youtu.be&list=UULA2WvkJSgrltSnVKBqZnUA","Video"  ],
  ["China","Sustainable Forest Management Boosts Development of Carbon Markets","Miyun, Beijing, China",40.376834,116.843177,"http://www.cn.undp.org/content/china/en/home/ourwork/environmentandenergy/successstories/sustainable-forest-management-boosts-development-of-carbon-marke.html","Success Story"  ],
  ["Mongolia","Riders under storms","Altai Mountains",49,89,"https://undp-adaptation.exposure.co/riders-under-storms","Photo essay"  ],
  ["Nepal","Challenging gender roles and crossing castes","Himalayas",28,84,"https://undp.exposure.co/challenging-gender-roles-and-crossing-castes","Photo essay"  ],
  ["Pacific Islands","Water, water everywhere","Tonga",-21.178986,-175.198242,"https://undp.exposure.co/water-water-everywhere","Photo essay"  ],
  ["Pacific Islands","Climate Change in the Pacific: WATER","Niue",-19.054445,-169.867233,"https://www.youtube.com/watch?v=EqnZdUZKT3E","Video"  ],
  ["Pacific Islands","Climate Change in the Pacific: COASTS","Marshall Islands",6.0683936,171.989379,"https://www.youtube.com/watch?v=dq234w56n2o","Video"  ],
  ["Pacific Islands","Food secuirty in the Pacific","Fiji",-17.713371,178.065032,"https://undp.exposure.co/food-security-in-the-pacific","Photo essay"  ],
  ["Georgia","Aftermath in Tbilisi: Wading through the facts","Tbilisi",41.7151377,44.827096,"https://medium.com/@UNDPEurasia/aftermath-in-tbilisi-wading-through-the-facts-11fa8d181e9b#.6061si7gg","Medium"  ],
  ["Azerbaijan","Managing droughts and floods in Azerbaijan","Great Caucasus",40.143105,47.576927,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/managing-droughts-and-floods-in-azerbaijan-.html","Success Story"  ],
  ["Croatia","A school powered by the sun: Shining example from Croatia","Dubrovnik",42.645989,18.099064,"http://europeandcis.undp.org/blog/2015/07/13/a-school-powered-by-the-sun-shining-example-from-croatia/","Blog post "  ],
  ["Macedonia","After the rain, women coping with climate change","FYR Macedonia",41.608635,21.745275,"http://www.eurasia.undp.org/content/rbec/en/home/ourwork/environmentandenergy/successstories/after-the-rain---new-documentary-about-women-coping-with-climate.html","Success Story"  ],
  ["Albania","Harnessing the sun’s abundance in Albania","Thethi Park",42.406293,19.753791,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/harnessing-the-suns-abundance-in-albania.html","Success Story"  ],
  ["Honduras","Ahorrar cada gota: la lucha contra la sequía en Honduras","Tegucigalpa",15.133333,-87.466667,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/ahorrando-cada-gota--lucha-contra-la-sequia-en-honduras-.html","Success Story"  ],
  ["Haiti","Côtes à risque","Coteaux",18.2072607,-74.040294,"https://undp.exposure.co/ctes-risques","Photo essay"  ],
  ["Haiti","Un projet de reboisement apporte croissance et dynamisme en Haïti","Aquin",18.2807252,-73.3959201,"http://www.undp.org/content/undp/fr/home/ourwork/ourstories/reforestation-project-brings-life-and-growth-to-haitian-communit/","Success Story"  ],
  ["Peru","The water gods","Canchayllo",-11.82198,-75.730667,"https://undp.exposure.co/the-water-gods","Photo essay"  ],
  ["India","Fishing for the future","Malvan",16.0630693,73.471054,"http://www.in.undp.org/content/india/en/home/ourwork/environmentandenergy/successstories/fishing-for-the-future/","Success Story"  ],
  ["Lao PDR","Frogs – A leap towards climate change resilience","Xayaboury",19.2557363,101.7125228,"http://www.la.undp.org/content/lao_pdr/en/home/ourwork/environmentandenergy/successstories/frogs-_-a-leap-towards-climate-change-resilience/","Success Story"  ],
  ["Micronesia","New, climate-proofed coastal roads","Kosrae",5.3095618,162.9814877,"https://www.youtube.com/watch?v=oSGagSa8_r4&feature=youtu.be","Video"  ],
  ["Micronesia","Improving access to clean water","Tokelau",-13.8324232,-171.7728925,"https://www.youtube.com/watch?v=BZLVr282jEI&feature=youtu.be","Video"  ],
  ["Nepal","The Sustainable Village of Sikles, Nepal ","Silkes, Parche",28.3577823,84.1052462,"https://www.youtube.com/watch?v=EMbBLpXxh9I&feature=youtu.be","Video"  ],
  ["Kenya","Utooni - The Drylands of East Africa ","Kola",-1.7045071,37.3493298,"https://www.youtube.com/watch?v=FwDfrG1q2lU&feature=youtu.be","Video"  ],
  ["Jamaica","Building resilience in the Caribbean","",18.0178743,-76.8099041,"https://www.youtube.com/watch?v=Ct1NfFfQNXo&feature=youtu.be","Video"  ],
  ["Cook Islands","Protecting a vital harbour","Mangaia Harbour",-21.9112466,-157.9532397,"https://youtu.be/C4aRN1GGzAI","Video"  ],
  ["Bangladesh","Building Mangrove Greenbelts","Southern Delta",22.3316669,90.8294002,"https://youtu.be/qWJehCNIn5s","Video"  ],
  ["Iran","Saving Lake Orumiyeh","Lake Orumieyh",37.5498061,45.0786282,"https://youtu.be/ZfbC53C_3yo","Video"  ],
  ["India","The solar bowl","Tamil Nadu",11.1271225,78.6568942,"http://www.in.undp.org/content/india/en/home/ourwork/environmentandenergy/videos/the-solar-bowl-.html","Success Story"  ],
  ["Ecuador","Manejo de recursos hídricos, clave para combatir el cambio climático","Cuenca",-2.9001285,-79.0058965,"http://www.undp.org/content/undp/es/home/ourwork/ourstories/manejo-de-recursos-hidricos--clave-para-combatir-el-cambio-clima.html","Success Story"  ],
  ["El Salvador","El agua cambia la vida a comunidades de El Salvador","Rio Torola",13.9041748,-88.0287806,"http://www.undp.org/content/undp/es/home/ourwork/ourstories/el-agua-cambia-la-vida-a-comunidades-de-el-salvador.html","Success Story"  ],
  ["Nicaragua","Comunidades rurales de Nicaragua unidas para acceder al agua","El Chaguite",12.2565691,-85.7172996,"http://www.undp.org/content/undp/es/home/ourwork/ourstories/comunidades-rurales-de-nicaragua-unidas-para-acceder-al-agua-.html","Success Story"  ],
  ["Colombia","El sueño del agua","La Guajira",11.3547743,-72.5204827,"https://undplac.exposure.co/el-sueo-del-agua","Photo essay"  ],
  ["Sudan","A new window of hope in Sudan","",12.862807,30.217636,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/a-new-window-of-hope-in-sudan.html","Success Story"  ],
  ["Malawi","Financial empowerment for nature conservation in Northern Malawi","Tukombo",-12.0925785,34.0479569,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/financial-empowerment-for-nature-conservation-in-northern-malawi.html","Success Story"  ],
  ["Swaziland: ","As rivers dry up, Swaziland builds dams to harvest water","",-26.522503,31.465866,"http://www.undp.org/content/undp/en/home/ourwork/ourstories/as-rivers-dry-up-swaziland-builds-dams-to-harvest-water.html","Success Story"  ],
  ["Benin","Limiter les risques climatiques au Bénin","Guene",11.7172493,3.2231727,"http://www.undp.org/content/undp/fr/home/ourwork/ourstories/limiter-les-risques-climatiques-au-benin.html","Success Story"  ]
];

var marker, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 3,
    disableDefaultUI: true,
    zoomControl: true
  });
  infoWindow = new google.maps.InfoWindow();
  for (var i=0; i < data.length; i++) {
    MyPhoto.prototype = new google.maps.OverlayView();
    marker = new MyPhoto(i, map);
  }
}

$.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDdA6hUNvRYLmMzQ7dVWuq_LQxN-I-CB08&callback=initMap');

function MyPhoto(pos, map) {

  // Initialize all properties.
  this.pos = pos;
  this.map_ = map;

  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay.
  this.setMap(map);
  
  this.onAdd = function() {

    var div = document.createElement('div');
    div.className = 'MyPhoto'
    div.style.borderStyle = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';
    

    // Create the img element and attach it to the div.
    var img = document.createElement('img');
    img.src = 'thumb/' + this.pos + '.jpg';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.position = 'absolute';
    //img.title = data[this.pos][1];
    div.appendChild(img);

    this.div_ = div;

    // Add the element to the "overlayLayer" pane.
    var panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(div);
    
    // add event listeners
    var me = this;
    google.maps.event.addDomListener(div, 'mouseover', function() {
      infoWindow.setContent(data[me.pos][1]);
      infoWindow.setPosition({lat: data[me.pos][3], lng: data[me.pos][4]});
      infoWindow.open(map);
    });
    google.maps.event.addDomListener(div, 'mouseout', function(e) {
      infoWindow.setContent('');
      infoWindow.close();
    });
    google.maps.event.addDomListener(div, 'click', function(e) {
      var type = data[me.pos][6].trim().toLowerCase();
      if (type == 'video') {        
        $.featherlight({ 
          iframe: 'https://www.youtube.com/embed/' + youtube_parser(data[me.pos][5]),
          iframeWidth: 640,
          iframeHeight: 480
        });
      } else if (type == 'photo essay') {
        $.featherlight({
          variant: 'fullsizemodal',
          iframe: data[me.pos][5] + '?embed=true',
          iframeWidth: '100%',
          iframeHeight: '100%'
        });        
      } else {
        parent.location.assign(data[me.pos][5]);
      }
    });
    
  };
  
  this.draw = function() {

    // We use the south-west and north-east
    // coordinates of the overlay to peg it to the correct position and size.
    // To do this, we need to retrieve the projection from the overlay.
    var overlayProjection = this.getProjection();

    // Retrieve the south-west and north-east coordinates of this overlay
    // in LatLngs and convert them to pixel coordinates.
    // We'll use these coordinates to resize the div.
    var position = new google.maps.LatLng(data[this.pos][3],data[this.pos][4]);
    var sw = overlayProjection.fromLatLngToDivPixel(position);
    
    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = (sw.x - map.zoom * 7.5) + 'px';
    div.style.top = sw.y + 'px';
    div.style.width = (map.zoom * 15) + 'px';
    div.style.height = (map.zoom * 15) + 'px';
  };
  
  this.onRemove = function() {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  };
}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}