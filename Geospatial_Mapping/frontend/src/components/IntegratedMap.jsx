import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  LayerGroup,
  LayersControl,
  CircleMarker,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import io from "socket.io-client";
import "leaflet/dist/leaflet.css";
import ngo from "../assets/ngo.png";

const socket = io(import.meta.env.VITE_BACKEND_URL);

const IntegratedMap = () => {
  const [userMarkers, setUserMarkers] = useState({});
  const [distanceMarkers, setDistanceMarkers] = useState([]);

  const ngos = [
    {
      name: "Sarafa Bazaar",
      address: "Sarafa Bazar, Indore, Madhya Pradesh 452002",
      lat: 22.7174,
      lng: 75.8464,
    },
    {
      name: "Rajwada Palace",
      address: "Rajwada, Indore, Madhya Pradesh 452002",
      lat: 22.7162,
      lng: 75.8581,
    },
    {
      name: "Lal Baag Palace",
      address: "Lal Baag Palace, Indore, Madhya Pradesh 452002",
      lat: 22.7244,
      lng: 75.8495,
    },
    {
      name: "Kanch Mandir",
      address: "Kanch Mandir, Indore, Madhya Pradesh 452002",
      lat: 22.7152,
      lng: 75.8544,
    },
    {
      name: "Indore Railway Station",
      address: "Indore Railway Station, Indore, Madhya Pradesh 452007",
      lat: 22.7244,
      lng: 75.8484,
    },
    {
      name: "Holkar Stadium",
      address: "Holkar Stadium, Indore, Madhya Pradesh 452001",
      lat: 28.633169,
      lng: 75.8632,
    },
  ];
  

  const disasters = [
    {
      id: 1,
      name: "Road Widening at AB Road",
      department: "Road Maintenance",
      startDate: "2024-11-01",
      endDate: "2024-12-15",
      region: [
        [22.7132, 75.8825],
        [22.7150, 75.8900],
        [22.7100, 75.8950],
        [22.7080, 75.8840],
        [22.7115, 75.8785],
        [22.7125, 75.8870],
        [22.7160, 75.8810],
      ],
    },
    {
      id: 2,
      name: "Sewer Pipeline Replacement in Vijay Nagar",
      department: "Waterworks & Sanitation",
      startDate: "2024-10-25",
      endDate: "2024-11-20",
      region: [
        [22.7535, 75.9050],
        [22.7570, 75.9105],
        [22.7480, 75.9150],
        [22.7455, 75.9065],
        [22.7500, 75.9000],
        [22.7525, 75.9070],
        [22.7555, 75.9115],
      ],
    },
    {
      id: 3,
      name: "Bridge Repair at Bypass Road",
      department: "Structural Engineering",
      startDate: "2024-11-05",
      endDate: "2024-12-10",
      region: [
        [22.7035, 75.8780],
        [22.7050, 75.8855],
        [22.6980, 75.8900],
        [22.6955, 75.8825],
        [22.7000, 75.8760],
        [22.7025, 75.8840],
        [22.7065, 75.8790],
      ],
    },
    {
      id: 4,
      name: "New Pipeline Installation in Rajwada",
      department: "Public Utilities",
      startDate: "2024-10-30",
      endDate: "2024-12-05",
      region: [
        [22.7168, 75.8554],
        [22.7200, 75.8620],
        [22.7125, 75.8685],
        [22.7085, 75.8595],
        [22.7140, 75.8520],
        [22.7180, 75.8605],
        [22.7215, 75.8570],
      ],
    },
    {
      id: 5,
      name: "Stormwater Drain Repair in Palasia",
      department: "Urban Drainage",
      startDate: "2024-11-10",
      endDate: "2024-12-20",
      region: [
        [22.7320, 75.8885],
        [22.7355, 75.8950],
        [22.7250, 75.8995],
        [22.7200, 75.8870],
        [22.7285, 75.8805],
        [22.7305, 75.8900],
        [22.7335, 75.8935],
      ],
    },
  ];
  const ngoIcon = new L.Icon({
    iconUrl: ngo,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          socket.emit("send-location", { latitude, longitude });
        },
        (error) => console.error(error),
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }

    socket.on("receive-location", (data) => {
      setUserMarkers((prev) => ({ ...prev, [data.id]: data }));
    });

    socket.on("selection-updated", (data) => {
      setDistanceMarkers((prev) => [...prev, data]); // Add new distance marker
    });

    socket.on("user-disconnected", (id) => {
      setUserMarkers((prev) => {
        const updatedMarkers = { ...prev };
        delete updatedMarkers[id];
        return updatedMarkers;
      });
    });

    return () => {
      socket.off("receive-location");
      socket.off("selection-updated");
      socket.off("user-disconnected");
    };
  }, []);

  const isInDangerZone = (userLocation) => {
    return disasters.some((disaster) => {
      const polygon = L.polygon(disaster.region);
      return polygon.getBounds().contains(userLocation);
    });
  };

  const calculateDistance = (userPosition, targetPosition) => {
    const userLatLng = L.latLng(userPosition);
    const targetLatLng = L.latLng(targetPosition);
    return userLatLng.distanceTo(targetLatLng) / 1000; // Convert to kilometers
  };

  const handleSelectUser = (user) => {
    const currentUser = Object.values(userMarkers).find(
      (marker) => marker.id === socket.id
    );
    if (currentUser && user) {
      const distance = calculateDistance(
        [currentUser.latitude, currentUser.longitude],
        [user.latitude, user.longitude]
      ).toFixed(2);
  
      // Add condition to only mark distance if it's greater than 0
      if (distance > 0) {
        const selectionData = {
          selectedUserId: user.id,
          selectingUserId: socket.id,
          distance,
          selectedUserPosition: [user.latitude, user.longitude],
          selectingUserPosition: [currentUser.latitude, currentUser.longitude],
        };
  
        socket.emit("user-selected", selectionData); // Emit selection data
        setDistanceMarkers((prev) => [...prev, selectionData]); // Add locally for immediate rendering
      }
    }
  };
  

  return (
    <MapContainer
      center={[19.076, 72.8777]}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {ngos.map((ngo, index) => (
        <Marker key={index} position={[ngo.lat, ngo.lng]} icon={ngoIcon}>
          <Popup>
            <strong>{ngo.name}</strong>
            <br />
            {ngo.address}
          </Popup>
        </Marker>
      ))}

      <LayersControl position="topright">
        <LayersControl.Overlay name="User Locations">
          <LayerGroup>
            {Object.values(userMarkers).map((marker) => {
              const userPosition = [marker.latitude, marker.longitude];
              const isVulnerable = isInDangerZone(userPosition);

              return (
                <CircleMarker
                  center={userPosition}
                  key={marker.id}
                  radius={8}
                  color={isVulnerable ? "red" : "blue"}
                  fillOpacity={0.7}
                  eventHandlers={{
                    click: () => handleSelectUser(marker),
                  }}
                >
                  <Popup>
                    User ID: {marker.id}
                    <br />
                    Status: {isVulnerable ? "Vulnerable" : "Safe"}
                    <br />
                    {marker.id !== socket.id && (
                      <button onClick={() => handleSelectUser(marker)}>
                        Select for Distance
                      </button>
                    )}
                  </Popup>
                </CircleMarker>
              );
            })}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Disasters">
          <LayerGroup>
            {disasters.map((disaster) => (
              <Polygon
                key={disaster.id}
                positions={disaster.region}
                color="red"
                fillOpacity={0.4}
                pathOptions={{ color: "red", weight: 2 }}
              >
                <Popup>
                  <strong>{disaster.name}</strong>
                  <br />
                  Department: {disaster.department}
                  <br />
                  Start Date:{" "}
                  {new Date(disaster.startDate).toLocaleDateString()}
                  <br />
                </Popup>
              </Polygon>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>

      {/* Render distance markers */}
      {distanceMarkers.map((marker, index) => (
        <React.Fragment key={index}>
          <Polyline
            positions={[
              marker.selectingUserPosition,
              marker.selectedUserPosition,
            ]}
            color="green"
          />
          <Popup
            position={[
              (marker.selectingUserPosition[0] +
                marker.selectedUserPosition[0]) /
                2,
              (marker.selectingUserPosition[1] +
                marker.selectedUserPosition[1]) /
                2,
            ]}
          >
            Distance: {marker.distance} km
          </Popup>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default IntegratedMap;
