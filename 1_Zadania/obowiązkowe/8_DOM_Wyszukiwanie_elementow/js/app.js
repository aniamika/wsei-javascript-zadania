document.addEventListener("DOMContentLoaded", function () {

// 8_DOM_Wyszukiwanie_elementow_0

    var Title = document.querySelector('.title');
    console.log(Title);

    function getDataAnimation(Title) {
        var DataAnimation = Title.getAttribute('data-animation');
        console.log(DataAnimation);
        return DataAnimation;
    }

// 8_DOM_Wyszukiwanie_elementow_1

    // 8_DOM_Wyszukiwanie_elementow_1_1
    var Home = document.getElementById('home');
    var Home2 = document.querySelector('#home');
    console.log(Home);
    console.log(Home2);
    // 8_DOM_Wyszukiwanie_elementow_1_2
    var ListItemWithDataDirection = document.querySelector('li[data-direction]');
    console.log(ListItemWithDataDirection);
    // 8_DOM_Wyszukiwanie_elementow_1_3
    var BlockElement = document.querySelector('.block');
    console.log(BlockElement);


// 8_DOM_Wyszukiwanie_elementow_2

    // 8_DOM_Wyszukiwanie_elementow_2_1
    var NavigationItems = document.querySelectorAll('nav li');
    console.log(NavigationItems);
    // 8_DOM_Wyszukiwanie_elementow_2_2
    var ParagraphsInsideDivs = document.querySelectorAll('div p');
    console.log(ParagraphsInsideDivs);
    // 8_DOM_Wyszukiwanie_elementow_2_3
    var DivsInArticle = document.querySelectorAll('article div');
    console.log(DivsInArticle);


// 8_DOM_Wyszukiwanie_elementow_3

    // 8_DOM_Wyszukiwanie_elementow_3_1
    var TagArticleClassFirst = document.querySelector('article.first');
    console.log(TagArticleClassFirst);
    // 8_DOM_Wyszukiwanie_elementow_3_2
    var TagArticleClassFirstH2 = document.querySelectorAll('article.first h2');
    console.log(TagArticleClassFirstH2.length);

});
