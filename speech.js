let textEl = document.getElementById("text");
let generateButtonEl = document.getElementById("generateButton");
let VoiceType = document.getElementById("status");
let pitchOfVoice = document.getElementById("pitchOfVoice");
let VolumeOfVoice = document.getElementById("VolumeOfVoice");
let rateOfVoice = document.getElementById("rateOfVoice");

let voiceData = {
    text: textEl.value,
    voice: "Hindi Male",
    pitchVal: {
        pitch: null
    },
    VolumeVal: {
        volume: null
    },
    rateVal: {
        rate: null
    }
}

VoiceType.addEventListener("change", function() {
    voiceData.voice = event.target.value;
});

pitchOfVoice.addEventListener("change", function() {
    voiceData.pitchVal.pitch = event.target.value;
});

VolumeOfVoice.addEventListener("change", function() {
    voiceData.VolumeVal.volume = event.target.value;
});

rateOfVoice.addEventListener("change", function() {
    voiceData.rateVal.rate = event.target.value;
});

console.log(voiceData.pitchVal);
generateButtonEl.addEventListener("click", function() {
    responsiveVoice.speak(textEl.value, voiceData.voice, voiceData.pitchVal, voiceData.VolumeVal.volume, voiceData.rateVal.rate);
});