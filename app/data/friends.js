// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// applicants data
const friends = [{
    "name": "Hannah",
        "photo": "https://cdn.shopify.com/s/files/1/0313/9945/products/princess_allura_ring_small_06c91eb1-560d-45b3-9f4f-6d5b91948526_medium.jpg?v=1526314376",
            "scores": [
                1,
                3,
                3,
                2,
                1,
                1,
                2,
                5,
                3,
                4
            ]
},
{
    "name": "Joe",
        "photo": "https://assets.entrepreneur.com/content/1x1/300/20160811224121-JeffRojas.jpeg?width=100",
            "scores": [
                5,
                2,
                1,
                4,
                2,
                3,
                4,
                2,
                1,
                5
            ]
},
{
    "name": "Bob",
        "photo": "https://cdn-images-1.medium.com/fit/c/100/100/0*nRVuVpfiFOtWEhDQ.jpeg",
            "scores": [
                4,
                2,
                1,
                5,
                3,
                4,
                3,
                2,
                1,
                1
            ]
},
{
    "name": "Vanessa",
        "photo": "https://www.incimages.com/uploaded_files/image/100x100/_DSC4034-3_346068.jpg",
            "scores": [
                1,
                1,
                3,
                5,
                1,
                1,
                2,
                5,
                3,
                4
            ]
},
{
    "name": "Tina",
        "photo": "https://i.ytimg.com/vi/oGpFcHTxjZs/maxresdefault.jpgS",
            "scores": [
                1,
                3,
                2,
                5,
                1,
                1,
                2,
                1,
                5,
                1
            ]
}]

module.exports = friends;

// Capture the form inputs
// $("#submit").on("click", function (event) {
//     event.preventDefault();

