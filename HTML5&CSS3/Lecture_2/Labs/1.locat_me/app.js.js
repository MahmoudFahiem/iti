let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 10,
  });

  const locationButton = document.createElement("button");

  locationButton.textContent = "Locate Me";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

  locationButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      new google.maps.Marker({
        position: pos,
        map,
        title: "My Current Location",
      });

      map.setZoom(17);
      map.panTo(pos);
    });
  });
}
