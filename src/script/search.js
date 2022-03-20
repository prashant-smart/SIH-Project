let search_data_array;

function match_search(key_to_search, elm) {
    key_to_search = key_to_search.toLowerCase();
    return (elm.name.toLowerCase().includes(key_to_search) || elm.address.toLowerCase().includes(key_to_search) || elm.known_as.toLowerCase().includes(key_to_search) || elm.year_established.toLowerCase().includes(key_to_search) || elm.location.toLowerCase().includes(key_to_search))
}
search_bar_homepage.addEventListener('input', () => {
    let key_to_search = search_bar_homepage.value;
    key_to_search = key_to_search.toLowerCase();
    if (key_to_search != '') {
        search_data_array = college_data.filter((elm) => {
            return match_search(key_to_search, elm);
        })

    } else search_data_array = college_data;
    college_card_container.innerHTML = '';
    if (search_data_array.length == 0) {
        college_card_container.innerHTML = "<b>No Result Found</b>"
    } else fill_cards(search_data_array, college_card_container);

})