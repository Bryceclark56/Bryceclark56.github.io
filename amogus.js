// https://www.youtube.com/watch?v=neeBnp9JpCE
const amogus_deadbody = "https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z9b2a7e929faa13a473850510_f1086ce5cf11d34ee_d20210310_m052952_c000_v0001075_t0018";
const amogus_drip = "https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z9b2a7e929faa13a473850510_f10306c64124d325b_d20210310_m062616_c000_v0001079_t0021";

let amogus;
let last_3_keys = ["", "", ""];
let sus_counter = 0;

// I think you're the imposter
function madSus() {
    console.log("that's mad sus, bro");

    let styles = document.querySelector("#awsheet");
    styles.sheet.insertRule(`
        #sus:link, #sus:visited, #sus:active {
            background-color: rgba(255, 0, 0, .5);
            transition: 6s;
        }
    `);
    styles.sheet.insertRule(`
        #sus:hover, #sus:focus {
            background-color: rgba(255, 0, 0, 1);
            transition: 0.6s;
        }
    `);
}

// Reset sus counter and various related items
function notSus() {
    let styles = document.querySelector("#awsheet");
    const nrules = styles.sheet.cssRules.length;
    styles.sheet.removeRule(nrules - 1);
    styles.sheet.removeRule(nrules - 2);

    amogus.src = amogus_deadbody;
    sus_counter = 1;
    amogus.load();
}

function amogusKeys(event) {
    last_3_keys.shift();
    last_3_keys.push(event.key);

    if (last_3_keys.join("") === "sus") {
        sus_counter++;

        if (sus_counter === 3) {
            amogus.src = amogus_drip;
            amogus.load();
            madSus();
        }
        else {
            if (sus_counter > 3) {
                notSus();
            }
            console.log("that's sus");
        }

        // Force seek to beginning if already playing
        if (!amogus.paused) amogus.currentTime = 0;
        amogus.play();

        fetch("https://sus.hearra.net:50010/sus/meeting");
    }
}

window.onload = () => {
    console.log("Hexagons are rad!");

    amogus = document.querySelector("#amogus");
    amogus.src = amogus_deadbody;

    document.addEventListener("keypress", amogusKeys);
    amogus.onended = () => {
        if (sus_counter === 3) {
            notSus();
        }
    }
}
