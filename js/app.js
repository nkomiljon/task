const JSON =  [
	{
		"title": "Заголовок пункта меню",
		"url": "https://test.site/item1"
	},
	{
		"title": "Заголовок пункта меню1",
		"url": "https://test.site/item2",
		"children": [{
			"title": "Заголовок пункта меню2",
			"url": "https://test.site/item3"
		},
		{
			"title": "Заголовок пункта меню3",
			"url": "https://test.site/item3",
			"children": [{
				"title": "Заголовок пункта меню4",
				"url": "https://test.site/item4"
			},
			{
				"title": "Заголовок пункта меню6",
				"url": "https://test.site/item6"
			}
			]
		}
		]
	},
	{
		"title": "Заголовок пункта меню5",
		"url": "https://test.site/item5"
	}
];




function ParserMenu(ul, JSON) {
   for (let i = 0; i < JSON.length; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');

         a.href = JSON[i].url,
         a.textContent = JSON[i].title;
         ul.appendChild(li);
         li.appendChild(a);
            

       if (JSON[i].children != null) {
          for (let j = 0; j < JSON[i].children.length; j++) {
             const childLi = document.createElement('li');
             const childA = document.createElement('a');
             childA.href = JSON[i].children[j].url;
             childA.textContent = JSON[i].children[j].title;
             a.appendChild(childLi);
             childLi.appendChild(childA);


             if (JSON[i].children[j].children != null) {
                for (let k = 0; k < JSON[i].children[j].children.length; k++) {
                   const secondChildLi = document.createElement('li');
                   const secondChildA = document.createElement('a');

                   secondChildA.href = JSON[i].children[j].children[k].url;
                   secondChildA.textContent = JSON[i].children[j].children[k].title;
                   childA.appendChild(secondChildLi);
                   secondChildLi.appendChild(secondChildA);
                }
             }
          }
       }
    }
}

const menu = document.querySelector('#menu');
ParserMenu(menu, JSON);
