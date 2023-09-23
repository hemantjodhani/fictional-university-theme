import "../css/style.scss"

import MobileMenu from "./modules/MobileMenu"
import HeroSlider from "./modules/HeroSlider"

const mobileMenu = new MobileMenu()
const heroSlider = new HeroSlider()

jQuery(document).ready(function($) {
    function fetchSearchResults(searchQuery) {
        var link = "http://localhost:10003/wp-admin/admin-ajax.php";

        jQuery.ajax({
            url: link,
            type: 'GET',
            data: {
                action: 'fetch_posts',
                search_query: searchQuery, 
            },
            success: function(response) {
                console.log(response);
            },
            error: function(error){
                console.error(error);
            }
        });
    }

    $('#search-term').keyup(function() {
        var searchQuery = $(this).val();
        fetchSearchResults(searchQuery);
    });

    $('.js-search-trigger, .search-overlay__close').click(function() {
        $('.search-overlay').toggleClass('search-overlay--active');
    });
});
