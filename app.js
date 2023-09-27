console.log("Let's get this party started!");

// GIPHY API: http://api.giphy.com/v1/gifs/search
// GIPHY KEY: AkwZDif7fmlEgIB9mPrAqD88mN3KtXrC

const $giphyList = $("#giphy-list");
const $search = $("#input-box");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newDiv = $("<div>");
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
    });
    $newCol.append($newGif);
    $giphyList.append($newDiv);
  }
}

$("#container").on("submit", async function (e) {
  e.preventDefault();

  let search = $search.val();
  $search.val("");

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: search, api_key: "AkwZDif7fmlEgIB9mPrAqD88mN3KtXrC" },
  });
  addGif(res.data);
});

$("#remove").on("click", function () {
  $giphyList.empty();
});
