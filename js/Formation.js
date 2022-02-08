class Formation {

    static TemplateUri = '/team-template.html';
    static DataUri = '/data/formations.json';

    get templateUri() {
        return "https://oureleven.com" + Formation.TemplateUri;
    }

    get dataUri() {
        return "https://oureleven.com" + Formation.DataUri;
    }

    createPosition(item) {
        let positionDiv = document.createElement('div');
        positionDiv.onclick = (e) => {
            let element = e.currentTarget;
            choosePlayer(element.getAttribute('pick'), element.getAttribute('idx'));
        };
        positionDiv.className = 'positions';
        positionDiv.style.top = item.top + 'px';
        positionDiv.style.left = item.left + 'px';
        positionDiv.setAttribute('pick', item.pick);
        positionDiv.setAttribute('idx', count++);

        let positionDisplay = document.createElement('div');
        positionDisplay.className = 'positionDisplay';
        positionDisplay.innerText = item.display;
        positionDiv.appendChild(positionDisplay);

        let positionImg = document.createElement('img');
        positionImg.src = 'images/shadow.png';
        positionImg.className = 'positionImg';
        positionDiv.appendChild(positionImg);

        div.insertBefore(positionDiv, refElement);
    }

    createFieldContainer(form) {
        let shadowDiv = document.createElement('div');
        shadowDiv.innerHTML = template;
        let article = shadowDiv.querySelector('#team');
        let button = shadowDiv.querySelector('#generate_button_team');
        let div = shadowDiv.querySelector('#fieldteam');
        article.id = article.id + form.formation;
        button.id = button.id + form.formation;
        div.id = div.id + form.formation;

        let refElement = div.children[0];

        var count = 0;
        form.team.forEach(item => {
            this.createPosition(item);
        });
        let markerElement = document.getElementById("marker");
        article.remove();
        document.body.insertBefore(article, markerElement);
    }

    populate() {
        window.onload = () => {
            let template = null;
            fetch(this.templateUri, {mode: 'no-cors', redirect: 'follow'})
                  .then(response => response.text())
                    .then(async (data) => {
                        template = data;

                        let resp = await fetch(this.dataUri, {mode: 'no-cors', redirect: 'follow'});
                        console.log(resp.text());
                            let json = resp.json();                        
                            json.forEach(form => {
                                this.createFieldContainer(form); 
                            });

                    });
        }
    }
}