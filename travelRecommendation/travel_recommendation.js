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
            db = respdata;
        }
    )
    .catch (
            (error) => {
                console.log ("Something wrong importing the JSON:");
                console.log (error.message);
            }
        )


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
            for (let j = 0; j < db.countries.cities.length; j++) {
                cities.push(db.countries[i].cities[j]);
            } 
        }

        return cities;
    }

    return [];
}

