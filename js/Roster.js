
const gkSet = new Set();
const dfSet = new Set();
const mfSet = new Set();
const fwSet = new Set();

function handleDf(idx) {
    let rootElement = document.getElementById('defenders');
    let articleElement = rootElement.querySelectorAll('article')[idx];

    let imgs = articleElement.querySelectorAll("img");
    console.log(imgs[0].src + " " + imgs[0].alt);

    if (mode == 'roster') {
        let isSelected = (imgs[1].style.opacity == 1.0);

        if(isSelected) {
            imgs[1].style.opacity = 0.0; 
            dfSet.delete(idx);
        } else {
            if (dfSet.size == 9) {
                alert('Please unselect a defender before selecting.');
                return;
            }

            imgs[1].style.opacity = 1.0;
            dfSet.add(idx);

            if (dfSet.size == 9) {
                scrollToElement('mf_instruction', true)
            }
        }
    } else {
        document.location.href='#' + teamFormation;
        updateTeam(imgs[0].src, imgs[0].alt);
    }
}

function handleMf(idx) {
    let rootElement = document.getElementById('midfielders');
    let articleElement = rootElement.querySelectorAll('article')[idx];

    let imgs = articleElement.querySelectorAll("img");
    console.log(imgs[0].src + " " + imgs[0].alt);

    if (mode == 'roster') {
        let isSelected = (imgs[1].style.opacity == 1.0);

        if(isSelected) {
            imgs[1].style.opacity = 0.0; 
            mfSet.delete(idx);
        } else {
            
            if (mfSet.size == 7) {
                alert('Please unselect a midfielder before selecting.');
                return;
            }

            imgs[1].style.opacity = 1.0;
            mfSet.add(idx);

            
            if (mfSet.size == 7) {
                scrollToElement('fw_instruction', true)
            }
        }
    } else {
        document.location.href='#' + teamFormation;
        updateTeam(imgs[0].src, imgs[0].alt);
    }
}

function handleFw(idx) {
    let rootElement = document.getElementById('forwards');
    let articleElement = rootElement.querySelectorAll('article')[idx];

    let imgs = articleElement.querySelectorAll("img");
    console.log(imgs[0].src + " " + imgs[0].alt);

    if (mode == 'roster') {
        let isSelected = (imgs[1].style.opacity == 1.0);

        if(isSelected) {
            imgs[1].style.opacity = 0.0; 
            fwSet.delete(idx);
        } else {
            if (fwSet.size == 7) {
                alert('Please unselect a forward before selecting.');
                return;
            }

            imgs[1].style.opacity = 1.0;
            fwSet.add(idx);

            if (fwSet.size == 7) {
                scrollToElement('share', true);
            }
        }
    } else {
        document.location.href='#' + teamFormation;
            updateTeam(imgs[0].src, imgs[0].alt);
        }
}

function updateTeam(src, alt) {
    let field = document.getElementById("field" + teamFormation);
    let element = field.children[idxToUpdate];
    let div = element.children[0];
    let img = element.children[1];

    div.innerText = alt;
    img.src = src;
    element.setAttribute("selected", true);

    let results = field.querySelectorAll('div[selected="true"');
    if(results.length == 11) {
        document.getElementById("generate_button_" + teamFormation).style.display = 'block';
    }
}

function handleGK(idx) {
    let rootElement = document.getElementById('goalkeepers');
    let articleElement = rootElement.querySelectorAll('article')[idx];
    let imgs = articleElement.querySelectorAll("img");
    console.log(imgs[0].src + " " + imgs[0].alt);
    
    if (mode == 'roster') {
        let rootElement = document.getElementById('goalkeepers');
        let articleElement = rootElement.querySelectorAll('article')[idx];

        let imgs = articleElement.querySelectorAll("img");
        console.log(imgs[0].src + " " + imgs[0].alt);
        let isSelected = (imgs[1].style.opacity == 1.0);

        if(isSelected) {
            imgs[1].style.opacity = 0.0; 
            gkSet.delete(idx);
        } else {
            if (gkSet.size == 3) {
                alert('Please unselect a goalkeeper before selecting.');
                return;
            }
            
            imgs[1].style.opacity = 1.0;
            gkSet.add(idx);

            if (gkSet.size == 3) {
                scrollToElement('df_instruction', true)
            }
        }
    } else {
        scrollToElement(teamFormation, true);
        updateTeam(imgs[0].src, imgs[0].alt);
    }
}

function generate11() {
    document.getElementById('generated_area').style.display = 'block';
    
    let target = document.getElementById('roster_generated');
    let cloned = document.getElementById('field' + teamFormation).cloneNode(true);
    target.appendChild(cloned);

    switch(share_option) {
        case 0: 
            download('generated_area');
            break;
        case 1:
            getLink2('generated_area');
            break;
        case 2:
            shareToTwitter('generated_area');
            break;
        case 3:
            shareToFacebook('generated_area');
            break;
    }
    setTimeout(function() {
            document.getElementById('generated_area').style.display = 'none';
            target.innerHTML = '';

            resetSelection();
        }, 1000);
}

function generate23() {
    document.getElementById('generated_area').style.display = 'block';
    
    let gkRoot = document.getElementById('goalkeepers');
    let dfRoot = document.getElementById('defenders');
    let mfRoot = document.getElementById('midfielders');
    let fwRoot = document.getElementById('forwards');
    let target = document.getElementById('roster_generated');

    gkSet.forEach(idx => {console.log(idx)
        let cloned = gkRoot.children[idx].cloneNode(true);
        target.appendChild(cloned);
    });
    dfSet.forEach(idx => {
        let cloned = dfRoot.children[idx].cloneNode(true);
        target.appendChild(cloned);
    });
    mfSet.forEach(idx => {
        let cloned = mfRoot.children[idx].cloneNode(true);
        target.appendChild(cloned);
    });
    fwSet.forEach(idx => {
        let cloned = fwRoot.children[idx].cloneNode(true);
        target.appendChild(cloned);
    });	

    setTimeout(function() {
        switch(share_option) {
            case 0: 
                download('generated_area');
                break;
            case 1:
                getLink('generated_area');
                break;
            case 2:
                shareToTwitter('generated_area');
                break;
            case 3:
                shareToFacebook('generated_area');
                break;
        }
        
        setTimeout(function() {
            document.getElementById('generated_area').style.display = 'none';
            target.innerHTML = '';

            resetSelection();
        }, 1000);
    }, 1000);

}

function resetSelection() {
    dfSet.clear();
    gkSet.clear();
    mfSet.clear();
    fwSet.clear();

    let checkMarks = document.querySelectorAll(".checkmark");
    checkMarks.forEach(e => {
        e.style.opacity = 0.0;
    });
}

function scrollToElement(elementName, smooth) {
    let target = document.getElementById(elementName);
    if (smooth) {
        target.scrollIntoView( { behavior: 'smooth'});
    } else {
        document.location.href = '#' + elementName;
    }	
}

var share_option = 0;
var mode = 'roster';
var shadowField = null;

function chooseType(type) {
    mode = type;
    resetSelection();

    if (type == 'roster') {
        
        document.getElementById('team442').style.display = 'none';
        document.getElementById('team433').style.display = 'none';
        document.getElementById('team352').style.display = 'none';
        document.getElementById('team541').style.display = 'none';	

        document.getElementById('gk_instruction').innerText = "Pick 3 keepers.";
        document.getElementById('df_instruction').innerText = "Pick 8 defenders + 1 backup.";
        document.getElementById('mf_instruction').innerText = "Pick 6 midfielders + 1 backup.";
        document.getElementById('fw_instruction').innerText = "Pick 6 forwards + 1 backup.";
        document.getElementById('formation').style.display = 'none';

        scrollToElement('gk_instruction', true);

    } else { // team 11
        document.getElementById('gk_instruction').innerText = "Pick your keeper.";
        document.getElementById('df_instruction').innerText = "Pick your defender.";
        document.getElementById('mf_instruction').innerText = "Pick your midfield.";
        document.getElementById('fw_instruction').innerText = "Pick your forward.";

        document.getElementById('formation').style.display = 'block';
        scrollToElement('formation', true);
    }
}
var teamFormation = '';
function chooseForm(form) {
    teamFormation = form;
    
    document.getElementById('team442').style.display = 'none';
    document.getElementById('team433').style.display = 'none';
    document.getElementById('team352').style.display = 'none';
    document.getElementById('team541').style.display = 'none';
    
    document.getElementById(form).style.display = 'block';

    scrollToElement('field' + form, true);
}

function handleShareOption(idx) {
    let allShares = document.querySelectorAll('.share');
    allShares.forEach(e => {
        e.style.opacity = 0;
    });
    allShares[idx].style.opacity = 1;
    share_option = idx;

    if (mode == 'roster') {
        generate23();
    } else {
        generate11();
    }

}

var idxToUpdate = 0;

function choosePlayer(pos, idx) {
    if(pos == 'GK') {
        
        scrollToElement('gk_instruction', false);
        idxToUpdate = idx;
    } else if (pos == 'DF') {
        
        scrollToElement('df_instruction', false);
        idxToUpdate = idx;
    } else if (pos == 'MF') {
        
        scrollToElement('mf_instruction', false);
        idxToUpdate = idx;
    } else {
        
        scrollToElement('fw_instruction', false);
        idxToUpdate = idx;
    }
}