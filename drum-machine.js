const drumMachine = document.getElementById("drum-machine");
const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

const power = document.getElementById("power");
const volume = document.getElementById("volume");
const bank = document.getElementById("bank");
const bankName = document.getElementById("bank-name");

function animatePad(pad) {

    pad.classList.add("active");

    setTimeout(() => {

        pad.classList.remove("active");

    }, 100);

}

function playPad(pad) {

    if (!power.checked) {

        display.textContent = "Power Off";

        return;

    }

    const audio = pad.querySelector("audio");

    audio.currentTime = 0;

    audio.volume = volume.value;

    audio.play();

    display.textContent = pad.dataset.name;

    animatePad(pad);

}

drumPads.forEach((pad) => {

    pad.addEventListener("click", () => {

        playPad(pad);

    });

});

document.addEventListener("keydown", (event) => {

    if (!power.checked) {

        return;

    }

    const key = event.key.toUpperCase();

    const pad = document.querySelector(`.drum-pad[id="${key}"]`);

    if (!pad) {

        return;

    }

    playPad(pad);

});
const heaterKit = {
    Q: {
        name: "Heater 1",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3"
    },
    W: {
        name: "Heater 2",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3"
    },
    E: {
        name: "Heater 3",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3"
    },
    A: {
        name: "Heater 4",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3"
    },
    S: {
        name: "Clap",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3"
    },
    D: {
        name: "Open-HH",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3"
    },
    Z: {
        name: "Kick-n'-Hat",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3"
    },
    X: {
        name: "Kick",
        src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3"
    },
    C: {
        name: "Closed-HH",
        src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3"
    }
};

const pianoKit = {
    Q: {
        name: "Chord 1",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    W: {
        name: "Chord 2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    E: {
        name: "Chord 3",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    A: {
        name: "Shaker",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    S: {
        name: "Open HH",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    D: {
        name: "Closed HH",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    Z: {
        name: "Punchy Kick",
        src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    X: {
        name: "Side Stick",
        src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    C: {
        name: "Snare",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
};

function loadBank(soundBank) {

    drumPads.forEach((pad) => {

        const key = pad.id;

        const audio = pad.querySelector("audio");

        audio.src = soundBank[key].src;

        pad.dataset.name = soundBank[key].name;

    });

}

power.addEventListener("change", () => {

    if (power.checked) {

        display.textContent = "Power On";

    } else {

        display.textContent = "Power Off";

    }

});

volume.addEventListener("input", () => {

    if (!power.checked) {

        return;

    }

    display.textContent =
        "Volume : " +
        Math.round(volume.value * 100);

});

bank.addEventListener("change", () => {

    if (!power.checked) {

        return;

    }

    if (bank.checked) {

        loadBank(pianoKit);

        bankName.textContent = "Smooth Piano Kit";

        display.textContent = "Smooth Piano Kit";

    } else {

        loadBank(heaterKit);

        bankName.textContent = "Heater Kit";

        display.textContent = "Heater Kit";

    }

});

loadBank(heaterKit);