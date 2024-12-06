// Inicializa el mapa
const mapa = L.map('mapa').setView([14.6548, -86.2233], 13);

// Agregar capa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

// Crear grupo para los marcadores
const markersCluster = L.markerClusterGroup();

// Definir los iconos para los tipos de lugares
const icons = {
    barrio_tradicional: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/4832/4832370.png', // ícono para barrio tradicional
        iconSize: [30, 30]
    }),
    colonia_residencial: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // ícono para colonia residencial
        iconSize: [30, 30]
    }),
    barrio_popular: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828467.png', // ícono para barrio popular
        iconSize: [30, 30]
    }),
    lugar_turistico: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2522/2522450.png', // ícono para lugares turísticos
        iconSize: [30, 30]
    }),
    restaurante: L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2760/2760681.png', // ícono para restaurante
        iconSize: [30, 30]
    })
};

// Datos de los lugares (barrios, colonias, lugares turísticos, restaurantes, etc.)
const lugares = [
    // Barrios tradicionales
    { coords: [14.6555, -86.2230], tipo: "barrio_tradicional", nombre: "Centro", descripcion: "El corazón de la ciudad, con edificios históricos y la plaza central.", imagen: "https://via.placeholder.com/300x200.png?text=Centro" },
    { coords: [14.6540, -86.2255], tipo: "barrio_tradicional", nombre: "La Esperanza", descripcion: "Un barrio residencial con casas antiguas y modernas.", imagen: "https://via.placeholder.com/300x200.png?text=La+Esperanza" },
    { coords: [14.6570, -86.2260], tipo: "barrio_tradicional", nombre: "El Calvario", descripcion: "Conocido por su iglesia y su ambiente tranquilo.", imagen: "https://via.placeholder.com/300x200.png?text=El+Calvario" },

    // Colonias residenciales
    { coords: [14.6610, -86.2305], tipo: "colonia_residencial", nombre: "Las Colinas", descripcion: "Zona residencial con calles pavimentadas y áreas verdes.", imagen: "https://via.placeholder.com/300x200.png?text=Las+Colinas" },
    { coords: [14.6625, -86.2280], tipo: "colonia_residencial", nombre: "Los Pinos", descripcion: "Otra colonia residencial bien ubicada.", imagen: "https://via.placeholder.com/300x200.png?text=Los+Pinos" },
    { coords: [14.6590, -86.2270], tipo: "colonia_residencial", nombre: "El Carmen", descripcion: "En constante crecimiento, con viviendas y comercios.", imagen: "https://via.placeholder.com/300x200.png?text=El+Carmen" },
    { coords: [14.6630, -86.2340], tipo: "colonia_residencial", nombre: "Villas del Bosque", descripcion: "Urbanización con casas modernas y áreas comunes.", imagen: "https://via.placeholder.com/300x200.png?text=Villas+del+Bosque" },

    // Otros barrios
    { coords: [14.6525, -86.2220], tipo: "barrio_popular", nombre: "La Granja", descripcion: "Barrio con mezcla de viviendas y comercios.", imagen: "https://via.placeholder.com/300x200.png?text=La+Granja" },
    { coords: [14.6565, -86.2290], tipo: "barrio_popular", nombre: "El Roble", descripcion: "Zona residencial en desarrollo.", imagen: "https://via.placeholder.com/300x200.png?text=El+Roble" },
    { coords: [14.6530, -86.2200], tipo: "barrio_popular", nombre: "Las Margaritas", descripcion: "Conocido por sus apartamentos y cercanía a servicios.", imagen: "https://via.placeholder.com/300x200.png?text=Las+Margaritas" },

    // Lugares turísticos
    { coords: [14.6600, -86.2200], tipo: "lugar_turistico", nombre: "Parque Central", descripcion: "Uno de los lugares más visitados de Juticalpa, ideal para paseos familiares.", imagen: "https://via.placeholder.com/300x200.png?text=Parque+Central" },
    { coords: [14.6580, -86.2280], tipo: "lugar_turistico", nombre: "Museo Histórico", descripcion: "Un museo que cuenta la historia de Juticalpa y sus alrededores.", imagen: "https://via.placeholder.com/300x200.png?text=Museo+Histórico" },

    // Restaurantes
    { coords: [14.6620, -86.2290], tipo: "restaurante", nombre: "Restaurante El Buen Sabor", descripcion: "Conocido por su excelente comida tradicional de la región.", imagen: "https://via.placeholder.com/300x200.png?text=Restaurante+El+Buen+Sabor" },
    { coords: [14.6615, -86.2250], tipo: "restaurante", nombre: "Comedor La Familia", descripcion: "Famoso por su comida casera y acogedora atmósfera.", imagen: "https://via.placeholder.com/300x200.png?text=Comedor+La+Familia" }
];

// Agregar marcadores al mapa
lugares.forEach(lugar => {
    const marker = L.marker(lugar.coords, { icon: icons[lugar.tipo] });
    marker.bindPopup(`<div class="popup">
        <img src="${lugar.imagen}" alt="${lugar.nombre}">
        <h3>${lugar.nombre}</h3>
        <p>${lugar.descripcion}</p>
    </div>`);
    markersCluster.addLayer(marker);
});

// Añadir clúster al mapa
mapa.addLayer(markersCluster);
