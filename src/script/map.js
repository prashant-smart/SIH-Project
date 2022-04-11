let college_data = JSON.parse(localStorage.getItem("COLLEGE_DATA"));
mapboxgl.accessToken =
    "pk.eyJ1IjoiYXJ5YW5ubm5ubiIsImEiOiJjbDB6OXBvazEwbHdhM2pueDFhbzZqcjI2In0.e1hpRNxdYXG_7AJWEcMQBg";

/**
 * Add the map to the page
 */
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [77.216721, 28.6448],
    zoom: 4,
    scrollZoom: false,
});

let array_of_info_college_location = [];

college_data.forEach((elm) => {
    let json_data = {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [elm.geocode.longitude, elm.geocode.latitude],
        },
        properties: {
            phoneFormatted: "011-2659-7135",
            phone: "011-2659-7135",
            address: elm.address,
            location: elm.location,
        },
    };
    if (elm.geocode.longitude != "NULL" && elm.geocode.latitude != "NULL") {
        array_of_info_college_location.push(json_data);
    } else {
        json_data.geometry.coordinates[0] = 0;
        json_data.geometry.coordinates[1] = 0;
        array_of_info_college_location.push(json_data);
    }
});

const stores = {
    type: "FeatureCollection",
    features: array_of_info_college_location,
};

/**
 * Assign a unique id to each store. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
stores.features.forEach((store, i) => {
    store.properties.id = i;
});

/**
 * Wait until the map loads to make changes to the map.
 */
map.on("load", () => {
    /**
     * This is where your '.addLayer()' used to be, instead
     * add only the source without styling a layer
     */
    map.addSource("places", {
        type: "geojson",
        data: stores,
    });

    /**
     * Add all the things to the page:
     * - The location listings on the side of the page
     * - The markers onto the map
     */
    buildLocationList(stores);
    addMarkers();
});

/**
 * Add a marker to the map for every store listing.
 **/
function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    for (const marker of stores.features) {
        /* Create a div element for the marker. */
        const el = document.createElement("div");
        /* Assign a unique `id` to the marker. */
        el.id = `marker-${marker.properties.id}`;
        /* Assign the `marker` class to each marker for styling. */
        el.className = "marker";

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        if (marker.geometry.coordinates[0] !== 0 && marker.geometry.coordinates[1] !== 0) {
            new mapboxgl.Marker(el, { offset: [0, -23] })
                .setLngLat(marker.geometry.coordinates)
                .addTo(map);
        }

        /**
         * Listen to the element and when it is clicked, do three things:
         * 1. Fly to the point
         * 2. Close all other popups and display popup for clicked store
         * 3. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        el.addEventListener("click", (e) => {
            /* Fly to the point */
            flyToStore(marker);
            /* Close all other popups and display popup for clicked store */
            createPopUp(marker);
            /* Highlight listing in sidebar */
            const activeItem = document.getElementsByClassName("active");
            e.stopPropagation();
            if (activeItem[0]) {
                activeItem[0].classList.remove("active");
            }
            const listing = document.getElementById(
                `listing-${marker.properties.id}`
            );
            listing.classList.add("active");
        });
    }
}

/**
 * Add a listing for each store to the sidebar.
 **/
let all_college_details_of_map_page = [];

function buildLocationList(stores) {
    for (const store of stores.features) {
        /* Add a new listing section to the sidebar. */
        const listings = document.getElementById('listings');
        const listing = listings.appendChild(document.createElement('div'));
        /* Assign a unique `id` to the listing. */
        listing.id = `listing-${store.properties.id}`;
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'item';

        /* Add the link to the individual listing created above. */
        const link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = `link-${store.properties.id}`;
        link.innerHTML = `${store.properties.address}`;

        /* Add details to the individual listing. */
        const details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${store.properties.city}`;
        if (store.properties.phone) {
            details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
        }

        /**
         * Listen to the element and when it is clicked, do four things:
         * 1. Update the `currentFeature` to the store associated with the clicked link
         * 2. Fly to the point
         * 3. Close all other popups and display popup for clicked store
         * 4. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        link.addEventListener('click', function() {
            for (const feature of stores.features) {
                if (this.id === `link-${feature.properties.id}`) {
                    flyToStore(feature);
                    createPopUp(feature);
                }
            }
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
        all_college_details_of_map_page.push(listing);
    }
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15,
    });
}

/**
 * Create a Mapbox GL JS `Popup`.
 **/
function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName("mapboxgl-popup");
    if (popUps[0]) popUps[0].remove();
    const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
            `<h3>College Address</h3><h6>${currentFeature.properties.address}</h6>`
        )
        .addTo(map);
}

function search_helper(to_be_match) {
    let arr = [];
    if (to_be_match != "") {
        to_be_match = to_be_match.toUpperCase();
        arr = all_college_details_of_map_page.filter((elm) => {
            let target = elm.children[0].innerHTML;
            target = target.toUpperCase();
            if (target.includes(to_be_match)) {
                return elm;
            }
        });
    } else arr = all_college_details_of_map_page;
    let parent_div = document.getElementById("listings");
    parent_div.innerHTML = '';
    console.log(arr);
    arr.forEach((elm) => {
        parent_div.appendChild(elm)
    });
}
let search_bar = document.getElementsByClassName('search-bar-homepage')[0];
search_bar.addEventListener('input', () => {
    console.log(search_bar.value);
    search_helper(search_bar.value);
})

if (localStorage.getItem("MAP_INDEX") != null) {
    var index = Number(localStorage.getItem("MAP_INDEX"));
    if (
        array_of_info_college_location[index].geometry.coordinates[0] != 0 &&
        array_of_info_college_location[index].geometry.coordinates[1] != 0
    ) {
        flyToStore(array_of_info_college_location[index]);
        createPopUp(array_of_info_college_location[index]);
    }
    localStorage.removeItem("MAP_INDEX");
}