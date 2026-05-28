const SoundManager = (() => {
  let isMuted = false;
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, type, duration, startVol, endVol, delay = 0) {
    if (isMuted) return;
    initAudio();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
    
    gainNode.gain.setValueAtTime(startVol, audioCtx.currentTime + delay);
    gainNode.gain.exponentialRampToValueAtTime(endVol, audioCtx.currentTime + delay + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + duration);
  }

  return {
    toggleMute: () => {
      isMuted = !isMuted;
      return isMuted;
    },
    getMuted: () => isMuted,
    playClick: () => {
      // Gentle mechanical click
      playTone(600, 'sine', 0.05, 0.1, 0.01);
    },
    playCorrect: () => {
      // Pleasant rising major arpeggio
      const now = 0;
      playTone(523.25, 'triangle', 0.15, 0.2, 0.01, now); // C5
      playTone(659.25, 'triangle', 0.15, 0.2, 0.01, now + 0.07); // E5
      playTone(783.99, 'triangle', 0.15, 0.2, 0.01, now + 0.14); // G5
      playTone(1046.50, 'triangle', 0.3, 0.3, 0.01, now + 0.21); // C6
    },
    playIncorrect: () => {
      // Dissonant descending synth buzzer
      initAudio();
      if (isMuted) return;

      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
      osc.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.35); // A2

      gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime);
      osc.stop(audioCtx.currentTime + 0.35);
    },
    playStreak: () => {
      // Bright triumphant fanfare
      const now = 0;
      playTone(587.33, 'sine', 0.1, 0.25, 0.05, now); // D5
      playTone(739.99, 'sine', 0.1, 0.25, 0.05, now + 0.08); // F#5
      playTone(880.00, 'sine', 0.1, 0.25, 0.05, now + 0.16); // A5
      playTone(1174.66, 'sine', 0.4, 0.3, 0.01, now + 0.24); // D6
    },
    playGameOver: () => {
      // Sad minor descent
      const now = 0;
      playTone(392.00, 'sawtooth', 0.2, 0.15, 0.02, now); // G4
      playTone(349.23, 'sawtooth', 0.2, 0.15, 0.02, now + 0.15); // F4
      playTone(311.13, 'sawtooth', 0.2, 0.15, 0.02, now + 0.30); // Eb4
      playTone(246.94, 'sawtooth', 0.5, 0.2, 0.01, now + 0.45); // B3
    }
  };
})();
