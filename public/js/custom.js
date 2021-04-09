let countries_json;
let all_countries = [];
    
$(function() {
    /*Dropdown Menu*/
    $('.dropdown').on("click", function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
    });
    
    $.getJSON("./countries.json", function(data) {
        countries_json = data;
        collectCountries();
        // oninput function
        $('#my-input').on('input', function(elem){ 
            filterCountries(elem.target.value);
        });
    });
});
function collectCountries() {
    // Read countries_json and extract only countries names
    for (const country in countries_json) {
        all_countries.push(country.toUpperCase());
    }
}

function filterCountries(input) {
    let input_uc = input.toUpperCase();
    let matched_items = [];
    if (input) {
        matched_items = all_countries.filter((item) => {
            return item.startsWith(input_uc);
        });
        showAutocomplete(matched_items);
    }
}

function showAutocomplete(countries) {
    // Clean old valies
    $("#matched-countries-list").html("");
    // Animation
    $("#matched-countries-list").animate({
        height: '300px'
    }, "slow");
    // Load new values
    for (let i = 0; i < countries.length; i++) {
        // Change the case of letters to 'Abc' mode
        let country = countries[i].charAt(0).toUpperCase() + countries[i].toLowerCase().slice(1);
        $("#matched-countries-list").append(`<div id="country_${i}">${country}</div>`);
        $("#country_" + i).on('click', () => {
        showCitiesList(country);
        });
    }
}

function showCitiesList(country) {
    // Clean values
    $("#matched-countries-list").html("");
    $("#cities-list").html("");
    // Visual structure
    $("#result-panel").html(`<div>${country}:</div><ul class="cities-list" id="cities-list"></ul>`);
    // Load list
    for (const city of countries_json[country]) {
        $("#cities-list").append(`<li>${city}</li>`);
        $("#my-input").val(country);
    }
}