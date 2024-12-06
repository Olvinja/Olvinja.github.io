document.addEventListener("DOMContentLoaded", function () {
    const restaurants = [
        { name: "Restaurante El Buen Sabor", lat: 14.6548, lng: -86.1284 },
        { name: "Cafetería Central", lat: 14.6561, lng: -86.1300 },
        { name: "Parrillada La Estancia", lat: 14.6532, lng: -86.1275 },
        { name: "Pupusería Delicias", lat: 14.6555, lng: -86.1293 },
    ];

    const restaurantList = document.getElementById("restaurants");
    restaurants.forEach((restaurant) => {
        const listItem = document.createElement("li");
        listItem.textContent = restaurant.name;
        restaurantList.appendChild(listItem);
    });

    const map = L.map("map-container").setView([14.6548, -86.1284], 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);

    restaurants.forEach((restaurant) => {
        L.marker([restaurant.lat, restaurant.lng])
            .addTo(map)
            .bindPopup(restaurant.name);
    });
});
