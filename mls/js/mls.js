
  var count = 0;
  var teamName = "";

  function createPosition(item, container, refElement) {
    const attributePick = "pick";
    const attributeIndex = "idx";

    let positionDiv = document.createElement(Formation.DivTag);
    positionDiv.onclick = (e) => {
      let element = e.currentTarget;
      choosePlayer(element.getAttribute(attributePick), 
                    element.getAttribute(attributeIndex));
    };
    positionDiv.className = "positions";
    positionDiv.style.top = item.top + Formation.PixelLiteral;
    positionDiv.style.left = item.left + Formation.PixelLiteral;
    positionDiv.setAttribute(attributePick, item.pick);
    positionDiv.setAttribute(attributeIndex, count++);

    let positionDisplay = document.createElement(Formation.DivTag);
    positionDisplay.className = "positionDisplay";
    positionDisplay.innerText = item.display;
    positionDiv.appendChild(positionDisplay);

    let positionImg = document.createElement(Formation.ImgTag);
    positionImg.src = "../images/shadow.png";
    positionImg.className = "positionImg";
    positionDiv.appendChild(positionImg);

    container.insertBefore(positionDiv, refElement);
  }

  function createFieldContainer(form, template) {
    let templateParent = document.getElementById("templateArea");
    let article = templateParent.children[2].cloneNode(true);
    let button = article.querySelector("#generate_button_team");
    let div = article.querySelector("#fieldteam");
    div.children[0].innerText = teamName;
    article.id = article.id + form.formation;
    button.id = button.id + form.formation;
    div.id = div.id + form.formation;

    let refElement = div.children[0];
    count = 0;
    form.team.forEach((item) => {
      createPosition(item, div, refElement);
    });
    let markerElement = document.getElementById("marker");
    article.remove();
    document.body.insertBefore(article, markerElement);
  }

  function createFormationOption(form) {
    const parent = document.getElementById("formationPickContainer");
	let templateParent = document.getElementById("templateArea");

    let element = templateParent.children[1].cloneNode(true);
    element.style.display = 'block';
    let descElement = element.querySelector(".formationDesc");
    descElement.innerText = form.description;
    let aElement = element.querySelector(".formSelectionButton");
    aElement.innerText = form.formationDisplay;
    aElement.onclick = () => {
      chooseForm('team' + form.formation);
    };
    parent.appendChild(element);
  }

  function populatePlayers(candidates, container, handler) {
		let templateParent = document.getElementById("templateArea");

		var count = 0;
		candidates.forEach(data => {
			let element = templateParent.children[0].cloneNode(true);
			element.style.display = 'block';
			let article = element.children[0];
			article.setAttribute("idx", count++);
			article.onclick = (e) => {
				let curr = e.currentTarget;
				handler(parseInt(curr.getAttribute("idx")));
			}
			let imgElements = element.querySelectorAll("img");
            if(data.img.length > 0) {
                imgElements[0].src = "./" + data.img;
            } else {
                imgElements[0].src = '../images/shadow.png';
            }

			imgElements[0].alt = data.alt;
			imgElements[2].src = "../flags/" + data.flag + ".png"

			let h3Element = element.querySelector("h3");
			h3Element.innerText = data.name;

			let spanElements = element.querySelectorAll("span");
			spanElements[1].innerText = data.position;
			spanElements[2].innerText = data.club;
            teamName = data.club;
			container.appendChild(element);
		});
	}

    	
	function populate() {
        const players = teamData();

        let gkContainer = document.getElementById("goalkeepers");
        let dfContainer = document.getElementById("defenders");
        let mfContainer = document.getElementById("midfielders");
        let fwContainer = document.getElementById("forwards");

        populatePlayers(players.gk_candidates, gkContainer, handleGK);
        populatePlayers(players.df_candidates, dfContainer, handleDf);
        populatePlayers(players.mf_candidates, mfContainer, handleMf);
        populatePlayers(players.fw_candidates, fwContainer, handleFw);        
    }