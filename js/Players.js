class Players {
    static DataUri = "/data/players.json";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    get dataUri() {
        return this.baseUrl + Players.DataUri;
    }

    populatePlayers(candidates, container, handler) {
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
			imgElements[0].src = "players/" + data.img;
			imgElements[0].alt = data.alt;
			imgElements[2].src = "flags/" + data.flag + ".png"

			let h3Element = element.querySelector("h3");
			h3Element.innerText = data.name;

			let spanElements = element.querySelectorAll("span");
			spanElements[1].innerText = data.position;
			spanElements[2].innerText = data.club;

			container.appendChild(element);
		});
	}

    	
	async populate() {
        let resp = await fetch(this.dataUri);
        let players = await resp.json();

        let gkContainer = document.getElementById("goalkeepers");
        let dfContainer = document.getElementById("defenders");
        let mfContainer = document.getElementById("midfielders");
        let fwContainer = document.getElementById("forwards");

        populatePlayers(players.gk_candidates, gkContainer, handleGK);
        populatePlayers(players.df_candidates, dfContainer, handleDf);
        populatePlayers(players.mf_candidates, mfContainer, handleMf);
        populatePlayers(players.fw_candidates, fwContainer, handleFw);        
    }
}