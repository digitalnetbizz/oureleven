class Formation {
  static TemplateUri = "/team-template.html";
  static DataUri = "/data/formations.json";
  static PixelLiteral = "px";
  static DivTag = "div";
  static ImgTag = "img";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.count = 0;
  }

  get templateUri() {
    return this.baseUrl + Formation.TemplateUri;
  }

  get dataUri() {
    return this.baseUrl + Formation.DataUri;
  }

  createPosition(item, container, refElement) {
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
    positionDiv.setAttribute(attributeIndex, this.count++);

    let positionDisplay = document.createElement(Formation.DivTag);
    positionDisplay.className = "positionDisplay";
    positionDisplay.innerText = item.display;
    positionDiv.appendChild(positionDisplay);

    let positionImg = document.createElement(Formation.ImgTag);
    positionImg.src = "images/shadow.png";
    positionImg.className = "positionImg";
    positionDiv.appendChild(positionImg);

    container.insertBefore(positionDiv, refElement);
  }

  createFieldContainer(form, template) {
    let shadowDiv = document.createElement(Formation.DivTag);
    shadowDiv.innerHTML = template;
    let article = shadowDiv.querySelector("#team");
    let button = shadowDiv.querySelector("#generate_button_team");
    let div = shadowDiv.querySelector("#fieldteam");
    article.id = article.id + form.formation;
    button.id = button.id + form.formation;
    div.id = div.id + form.formation;

    let refElement = div.children[0];
    this.count = 0;
    form.team.forEach((item) => {
      this.createPosition(item, div, refElement);
    });
    let markerElement = document.getElementById("marker");
    article.remove();
    document.body.insertBefore(article, markerElement);
  }

  createFormationOption(form) {
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

  async populate() {
    let template = null;
    let templateResp = await fetch(this.templateUri);
    template = await templateResp.text();

    let resp = await fetch(this.dataUri);
    let json = await resp.json();
    json.forEach((form) => {
      this.createFieldContainer(form, template);
      this.createFormationOption(form);
    });
  }
}
