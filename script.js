function recommend() {

    console.log(document.getElementById('track-list'));
    if (!(document.getElementById('track-list') == null)) {
      document.getElementById("track-list").outerHTML = "";
    }

    const app = document.getElementById('root');
  
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'track-list');
  
    app.appendChild(ul);
  
    var trackList = [];
  
    var header = {
      'Accept': "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQA3XrZqi-bYhqYOs9G60RWHqavlF5kcmGHb-YNvRUjZoCg7PZTjOwqZIq5qYDPJ65Y48jfaQmdAOvGNKu8"
  
    };
  
    const getData = () => {
      try {
        return axios.get('https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&min_valence=0.5&max_valence=1.0',{'headers':header})
      } catch (error) {
        if (response.status == 401) {
          console.log("Get new token.")
        } else {
          console.log(error)
        }
      }
    }
  
    const getTracks = async () => {
      const breeds = getData()
        .then(response => {
          if (response.data.tracks) {
            for (counter = 0; counter < 5; counter++) {
  
              const li = document.createElement('li');
              li.textContent = response.data.tracks[counter].name + " by " + response.data.tracks[counter].album.artists[0].name;
  
              ul.appendChild(li);
  
  
              trackList.push([response.data.tracks[counter].name, response.data.tracks[counter].album.artists[0].name])
              //console.log(response.data.tracks[counter].name + " by " + response.data.tracks[counter].album.artists[0].name)
            }
          }
          trackList.forEach(element => {
            console.log(element)
          });
        
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    getTracks()
  }