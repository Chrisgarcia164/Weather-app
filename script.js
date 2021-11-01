const submitBtn = $('#submit-btn')
var city = $('#city-search')
var temp = $('#temperature')
var humidity = $('#humid')
var wind = $('#current-wind')
var uv = $('#uv-index')

submitBtn.on('click', function cityInfo(){
    console.log(city.val())
    console.log('hello world')
})