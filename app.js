//1. Write 4 XPath locators

• Wiki logo - //a[@class="mw-wiki-logo"]
• Div element for Article count - //div[@id="articlecount"], //div[@id="articlecount"]/a[@title="Special:Statistics"],
//div[@id="articlecount"]/a[1]
• 4-th item from "Did you know…" list - //div[@id="mp-dyk"]/ul/li[4]
• Count of ‘Interaction’ elements - count(//div[@id="p-interaction"]/div/ul/li);

//2. Write 4 CSS selectors
• Wiki logo   -   .mw-wiki-logo
• Div element for Article count - #articlecount, div + a, #articlecount  a[title="Special:Statistics"]
• Main page link - #n-mainpage-description a:link
• 2-nd item from "Did you know…" list  -  #mp-dyk >  ul > :nth-child(2)