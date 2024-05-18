
data = '{"countries":[{"id":1,"name":"Australia","cities":[{"name":"Sydney, Australia","imageUrl":"images/april-pethy-Sydney-unsplash.jpg","description":"A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."},{"name":"Melbourne, Australia","imageUrl":"images/endmitry-osipenko-Melbourne-unsplash.jpg","description":"A cultural hub famous for its art, food, and diverse neighborhoods."}]},{"id":2,"name":"Japan","cities":[{"name":"Tokyo, Japan","imageUrl":"images/louie-martinez-tokyo-unsplash.jpg","description":"A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."},{"name":"Kyoto, Japan","imageUrl":"images/su-san-lee-kyoto-unsplash.jpg","description":"Known for its historic temples, gardens, and traditional tea houses."}]},{"id":3,"name":"Brazil","cities":[{"name":"Rio de Janeiro, Brazil","imageUrl":"images/raphael-nogueira-riodejaneiro-unsplash.jpg","description":"A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."},{"name":"São Paulo, Brazil","imageUrl":"images/rebecca-hausner-saopaulo-unsplash.jpg","description":"The financial hub with diverse culture, arts, and a vibrant nightlife."}]}],"temples":[{"id":1,"name":"Angkor Wat, Cambodia","imageUrl":"images/laurentiu-morariu-angkorwat-unsplash.jpg","description":"A UNESCO World Heritage site and the largest religious monument in the world."},{"id":2,"name":"Taj Mahal, India","imageUrl":"images/sanin-sn-tajmahal-unsplash.jpg","description":"An iconic symbol of love and a masterpiece of Mughal architecture."}],"beaches":[{"id":1,"name":"Bora Bora, French Polynesia","imageUrl":"images/roman-borabora-unsplash.jpg","description":"An island known for its stunning turquoise waters and luxurious overwater bungalows."},{"id":2,"name":"Copacabana Beach, Brazil","imageUrl":"images/eelco-bohtlingk-copacabana-unsplash.jpg","description":"A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."}]}'

var db = JSON.parse(data);
  


/* Descomentar quando for para produção. Já testado e funcionou.
var db = {};

let opts = {
    method: "GET",
    mode: "no-cors"
}
fetch("travel_recommendation_api.json", opts)
    .then(
        (resp) => {
            if (resp.ok) {
                console.log("Fetch went well...");
                return resp.json();
            }
        }
    )
    .then(
        (respdata) => {
            db = JSON.parse(JSON.stringify(respdata));
        }
    )
    .catch (
            (error) => {
                console.log ("Something wrong importing the JSON:");
                console.log (error.message);
            }
        )
*/

function dbSearch (keyword) {
    if (keyword == "") return;

    if (keyword.toLowerCase().includes("beach")) {
        return db.beaches;
    } 
    
    if (keyword.toLowerCase().includes("temple")) {
        return db.temples;
    }

    if (keyword.toLowerCase().includes("countr")) {
        let cities = []
        for (let i = 0; i < db.countries.length; i++) {
            for (let j = 0; j < db.countries[i].cities.length; j++) {
                cities.push(db.countries[i].cities[j]);
            } 
        }

        return cities;
    }

    return [];
}

