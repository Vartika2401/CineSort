// app.js

document.addEventListener('DOMContentLoaded', () => {
  // --- Game State ---
  let activeFranchiseId = null;
  let activeFranchise = null;
  let timelineMode = 'in-universe'; // 'in-universe' or 'release-date'
  let activeTab = 'movie'; // 'movie' or 'tv'
  let score = 0;
  let streak = 0;
  let lives = 3;
  let deck = [];
  let placedCards = [];
  let drawnCard = null;
  let drawnCards = []; // supports multiple cards (e.g. for TENET God Tier mode)
  let customDecks = {};

  // --- Load Custom Decks ---
  function loadCustomDecks() {
    const stored = localStorage.getItem('cinesort_custom_decks');
    if (stored) {
      try {
        customDecks = JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse custom decks from local storage", e);
        customDecks = {};
      }
    }
  }

  function saveCustomDecks() {
    localStorage.setItem('cinesort_custom_decks', JSON.stringify(customDecks));
  }

  // --- UI Elements ---
  const screens = {
    landing: document.getElementById('landing-screen'),
    game: document.getElementById('game-screen'),
    builder: document.getElementById('builder-screen')
  };

  const activeModeInUniverse = document.getElementById('mode-in-universe');
  const activeModeReleaseDate = document.getElementById('mode-release-date');
  const activeFranchiseName = document.getElementById('active-franchise-name');
  const activeModeLabel = document.getElementById('active-mode-label');
  const scoreVal = document.getElementById('score-val');
  const streakVal = document.getElementById('streak-val');
  const livesBox = document.getElementById('lives-box');
  const drawerCardContainer = document.getElementById('drawer-card-container');
  const timelineContainer = document.getElementById('timeline-container');
  const timelineScrollPane = document.getElementById('timeline-scroll-pane');
  
  // Modals
  const rulesModal = document.getElementById('rules-modal');
  const gameOverModal = document.getElementById('game-over-modal');
  const gameOverScore = document.getElementById('game-over-score');
  const gameOverHighscore = document.getElementById('game-over-highscore');

  // --- Audio controls ---
  const soundBtn = document.getElementById('sound-btn');
  const soundIconOn = document.getElementById('sound-icon-on');
  const soundIconOff = document.getElementById('sound-icon-off');

  soundBtn.addEventListener('click', () => {
    const isMuted = SoundManager.toggleMute();
    if (isMuted) {
      soundIconOn.classList.add('hidden');
      soundIconOff.classList.remove('hidden');
    } else {
      soundIconOn.classList.remove('hidden');
      soundIconOff.classList.add('hidden');
    }
  });

  // --- Screen Navigation ---
  function showScreen(screenId) {
    Object.keys(screens).forEach(key => {
      if (key === screenId) {
        screens[key].classList.remove('hidden');
      } else {
        screens[key].classList.add('hidden');
      }
    });
    // Trigger audio init on click/interaction
    SoundManager.playClick();
  }

  // Mode Toggles on Landing Screen
  activeModeInUniverse.addEventListener('click', () => {
    timelineMode = 'in-universe';
    activeModeInUniverse.classList.add('active');
    activeModeReleaseDate.classList.remove('active');
    SoundManager.playClick();
    renderFranchiseGrid();
  });

  activeModeReleaseDate.addEventListener('click', () => {
    timelineMode = 'release-date';
    activeModeReleaseDate.classList.add('active');
    activeModeInUniverse.classList.remove('active');
    SoundManager.playClick();
    renderFranchiseGrid();
  });

  // Tab Toggles on Landing Screen
  const tabMovies = document.getElementById('tab-movies');
  const tabTv = document.getElementById('tab-tv');

  tabMovies.addEventListener('click', () => {
    activeTab = 'movie';
    tabMovies.classList.add('active');
    tabTv.classList.remove('active');
    SoundManager.playClick();
    renderFranchiseGrid();
  });

  tabTv.addEventListener('click', () => {
    activeTab = 'tv';
    tabTv.classList.add('active');
    tabMovies.classList.remove('active');
    SoundManager.playClick();
    renderFranchiseGrid();
  });

  // Rules Modal
  document.getElementById('rules-btn').addEventListener('click', () => {
    rulesModal.classList.remove('hidden');
    SoundManager.playClick();
  });
  document.getElementById('close-rules-btn').addEventListener('click', () => {
    rulesModal.classList.add('hidden');
    SoundManager.playClick();
  });

  // Back from Game Screen
  document.getElementById('game-back-btn').addEventListener('click', () => {
    showScreen('landing');
    document.body.className = 'theme-mcu'; // reset background theme
    document.getElementById('inspect-bar').classList.add('hidden');
  });

  // Back from Builder Screen
  document.getElementById('builder-back-btn').addEventListener('click', () => {
    showScreen('landing');
    renderFranchiseGrid();
  });

  // --- Render Categories in Landing Grid ---
  function renderFranchiseGrid() {
    const grid = document.getElementById('franchise-grid');
    grid.innerHTML = '';

    // Built-in categories
    const movieKeys = ['mcu', 'starwars', 'harrypotter', 'lotr', 'tenet'];
    const tvKeys = ['got', 'vampirediaries', 'friends', 'b99'];
    const activeKeys = activeTab === 'movie' ? movieKeys : tvKeys;

    Object.keys(TIMELINE_DATA).forEach(key => {
      if (activeKeys.includes(key)) {
        const data = TIMELINE_DATA[key];
        const card = createCategoryCard(key, data, false);
        grid.appendChild(card);
      }
    });

    // Custom categories
    const customSection = document.getElementById('custom-timelines-section');
    const customGrid = document.getElementById('custom-franchise-grid');
    customGrid.innerHTML = '';

    const customKeys = Object.keys(customDecks);
    if (customKeys.length > 0) {
      customSection.classList.remove('hidden');
      customKeys.forEach(key => {
        const data = customDecks[key];
        const card = createCategoryCard(key, data, true);
        customGrid.appendChild(card);
      });
    } else {
      customSection.classList.add('hidden');
    }
  }

  function createCategoryCard(id, data, isCustom) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.setProperty('--card-theme-color', data.color || '#a2d2ff');
    card.style.setProperty('--card-glow', `${data.color}26` || 'rgba(162,210,255,0.15)');

    const iconHtml = data.icon || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M5 12h14"/></svg>`;
    const totalEvents = data.events.length;
    const highscore = getHighScore(id, timelineMode);

    card.innerHTML = `
      <div class="category-icon">${iconHtml}</div>
      <div>
        <h3>${data.name}</h3>
        <p>${totalEvents} events to sort. ${isCustom ? 'User Created Deck.' : 'Official Timeline.'}</p>
      </div>
      <div style="width:100%; display:flex; flex-direction:column; gap:0.5rem;">
        <div style="font-size: 0.75rem; color: var(--text-secondary);">Best Streak: <span style="font-weight:700; color:#fff;">${highscore}</span></div>
        <div style="display:flex; gap:0.5rem; justify-content:center; width:100%;">
          <button class="btn-primary play-btn" style="flex:1; padding:0.5rem; font-size:0.85rem; background: ${data.color || 'var(--primary-color)'}">Play</button>
          ${isCustom ? `<button class="btn-secondary delete-deck-btn" style="padding:0.5rem;" aria-label="Delete deck">🗑️</button>` : ''}
        </div>
      </div>
    `;

    // Bind Play Button
    card.querySelector('.play-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      initGame(id, isCustom);
    });

    // Bind Delete Button if custom
    if (isCustom) {
      card.querySelector('.delete-deck-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`Are you sure you want to delete the "${data.name}" timeline?`)) {
          delete customDecks[id];
          saveCustomDecks();
          renderFranchiseGrid();
        }
      });
    }

    return card;
  }

  // --- High Score Tracking ---
  function getHighScore(franchiseId, mode) {
    const scoreKey = `cinesort_highscore_${franchiseId}_${mode}`;
    return parseInt(localStorage.getItem(scoreKey) || '0', 10);
  }

  function setHighScore(franchiseId, mode, val) {
    const scoreKey = `cinesort_highscore_${franchiseId}_${mode}`;
    const current = getHighScore(franchiseId, mode);
    if (val > current) {
      localStorage.setItem(scoreKey, val.toString());
      return true;
    }
    return false;
  }

  // --- Game Engine Logic ---
  function initGame(franchiseId, isCustom) {
    activeFranchiseId = franchiseId;
    document.getElementById('inspect-bar').classList.add('hidden');
    activeFranchise = isCustom ? customDecks[franchiseId] : TIMELINE_DATA[franchiseId];
    
    // Set Visual Theme Class on body
    document.body.className = `theme-${isCustom ? 'custom' : franchiseId}`;
    
    // For TENET, force in-universe calendar mode since release date does not apply to a single movie
    let activeTimelineMode = timelineMode;
    if (franchiseId === 'tenet') {
      activeTimelineMode = 'in-universe';
    }
    
    // Update Header Labels
    activeFranchiseName.textContent = activeFranchise.name;
    activeModeLabel.textContent = activeTimelineMode === 'in-universe' 
      ? (franchiseId === 'tenet' ? 'GOD Tier Chronological Timeline' : 'In-Universe Chronological Timeline')
      : 'Real-World Release Date Timeline';

    // Clear stats
    score = 0;
    streak = 0;
    lives = 3;
    updateStatsDisplay();

    // Map Deck Events based on active mode
    deck = activeFranchise.events.map(event => {
      const mapped = {
        id: event.id,
        title: event.title,
        description: event.description
      };

      if (activeTimelineMode === 'in-universe') {
        mapped.year = event.inUniverseYear;
        mapped.displayYear = event.inUniverseDisplay;
      } else {
        mapped.year = event.releaseYear;
        mapped.displayYear = event.releaseDisplay;
      }
      return mapped;
    });

    // Validation
    if (deck.length < 2) {
      alert("This timeline does not contain enough events to play. Please add at least 3 events.");
      return;
    }

    // Shuffle deck
    shuffle(deck);

    // Initial board setup
    placedCards = [deck.pop()]; // Take first card as start anchor
    
    drawnCard = null;
    drawnCards = [];
    
    showScreen('game');
    
    // Draw first active mystery card
    drawNextCard();
    renderTimeline();
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function drawNextCard() {
    if (deck.length === 0) {
      triggerVictory();
      return;
    }

    drawnCard = deck.pop();
    drawnCards = [drawnCard];

    // Clear and render active drawer card
    drawerCardContainer.innerHTML = '';
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.draggable = true;
    cardEl.id = 'mystery-card';
    cardEl.dataset.id = drawnCard.id;
    
    // Add custom flow color class for TENET
    if (activeFranchiseId === 'tenet' && drawnCard.flow) {
      cardEl.classList.add(`flow-${drawnCard.flow}`);
    }
    
    cardEl.innerHTML = `
      <div class="card-header-content">
        <div class="card-title">${drawnCard.title}</div>
        <div class="card-desc">${drawnCard.description}</div>
      </div>
      <div class="card-footer">
        <div class="card-date" style="color: var(--text-secondary)">?</div>
        <div class="card-type-tag">${drawnCard.flow ? drawnCard.flow.toUpperCase() : 'Place Me'}</div>
      </div>
    `;

    // Bind Drag Actions
    cardEl.addEventListener('dragstart', handleDragStart);
    cardEl.addEventListener('dragend', handleDragEnd);

    // Mobile tap focus logic: tap card to zoom/preview
    cardEl.addEventListener('click', () => {
      SoundManager.playClick();
      cardEl.classList.toggle('highlight-active');
    });

    drawerCardContainer.appendChild(cardEl);
  }

  function updateStatsDisplay() {
    scoreVal.textContent = score;
    streakVal.textContent = streak;
    if (streak > 0 && streak % 5 === 0) {
      streakVal.classList.add('streak-pulse');
    } else {
      streakVal.classList.remove('streak-pulse');
    }

    // Render Lives indicators
    livesBox.innerHTML = '';
    const lifeIconHtml = activeFranchise.lifeIcon || `<svg viewBox="0 0 24 24" class="life-icon" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

    for (let i = 0; i < 3; i++) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = lifeIconHtml;
      const icon = wrapper.firstElementChild;
      if (i >= lives) {
        icon.classList.add('lost');
      }
      livesBox.appendChild(icon);
    }
  }

  // --- Render Timeline & Drop Zones ---
  function renderTimeline() {
    timelineContainer.innerHTML = '';

    // Group placed cards by year (simultaneous events)
    const slots = [];
    placedCards.forEach(card => {
      const existingSlot = (activeFranchiseId === 'tenet') 
        ? slots.find(s => s.year === card.year) 
        : null;
        
      if (existingSlot) {
        existingSlot.cards.push(card);
      } else {
        slots.push({
          year: card.year,
          cards: [card]
        });
      }
    });

    // Set dynamic body class based on whether any stacked simultaneous events exist
    const hasStacks = slots.some(slot => slot.cards.length > 1);
    if (activeFranchiseId === 'tenet' && hasStacks) {
      document.body.classList.add('timeline-has-stacks');
    } else {
      document.body.classList.remove('timeline-has-stacks');
    }

    let flatIndex = 0;

    // Render first drop zone (index 0)
    timelineContainer.appendChild(createDropZone(0));

    // Render slots (which contain stacked cards) and subsequent drop zones
    slots.forEach((slot) => {
      const slotEl = document.createElement('div');
      slotEl.className = 'timeline-slot';

<<<<<<< HEAD
      const cardEl = document.createElement('div');
      cardEl.className = `card timeline-card${card.isMistake ? ' mistake-card' : ''}`;
      cardEl.innerHTML = `
        <div>
          <div class="card-title">${card.title}</div>
          <div class="card-desc">${card.description}</div>
        </div>
        <div class="card-footer">
          <div class="card-date">${card.displayYear}</div>
          <div class="card-type-tag">${card.isMistake ? 'Mistake' : 'Timeline'}</div>
        </div>
      `;
=======
      // Render all cards inside this slot (stacked vertically)
      slot.cards.forEach(card => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'timeline-card-wrapper';
>>>>>>> 8fe6eb2565decc53189a43bb4fbb5529b6c2aa9b

        const cardEl = document.createElement('div');
        cardEl.className = 'card timeline-card';
        
        // Add custom flow color class for TENET
        if (activeFranchiseId === 'tenet' && card.flow) {
          cardEl.classList.add(`flow-${card.flow}`);
        }

        cardEl.innerHTML = `
          <div class="card-header-content">
            <div class="card-title">${card.title}</div>
            <div class="card-desc">${card.description}</div>
          </div>
          <div class="card-footer">
            <div class="card-date">${card.displayYear}</div>
            <div class="card-type-tag">${card.flow ? card.flow.toUpperCase() : 'Timeline'}</div>
          </div>
        `;

        cardWrapper.appendChild(cardEl);
        slotEl.appendChild(cardWrapper);
      });

      // Render a vertical drop zone at the top of the stack if the drawn card has the SAME year
      // (This prompts the player to drop/add the card directly above the existing simultaneous events!)
      if (activeFranchiseId === 'tenet' && drawnCard && drawnCard.year === slot.year && !slot.cards.some(c => c.id === drawnCard.id)) {
        const verticalZone = document.createElement('div');
        verticalZone.className = 'vertical-drop-zone';

        verticalZone.innerHTML = `
          <button class="vertical-drop-btn" aria-label="Add simultaneous event here">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" width="14" height="14">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <div style="font-size: 0.65rem; color: var(--primary-color); font-weight: 700;">CONVERGE</div>
        `;

        // Drag-and-drop events on the vertical drop zone
        verticalZone.addEventListener('dragover', handleDragOver);
        verticalZone.addEventListener('dragleave', handleDragLeave);
        
        const targetFlatIndex = flatIndex; // capture current flatIndex
        
        verticalZone.addEventListener('drop', (e) => {
          e.preventDefault();
          const data = e.dataTransfer.getData('text/plain');
          if (data === 'drawn-card') {
            verifyPlacement(targetFlatIndex);
          }
        });

        // Click / tap click placement
        verticalZone.querySelector('.vertical-drop-btn').addEventListener('click', () => {
          verifyPlacement(targetFlatIndex);
        });

        slotEl.appendChild(verticalZone);
      }

      timelineContainer.appendChild(slotEl);

      // Increment running flatIndex by the number of cards in this slot
      flatIndex += slot.cards.length;

      // Render subsequent drop zone (index flatIndex)
      timelineContainer.appendChild(createDropZone(flatIndex));
    });
  }

  function createDropZone(index) {
    const zone = document.createElement('div');
    zone.className = 'drop-zone';
    zone.dataset.index = index;

    zone.innerHTML = `
      <div class="drop-zone-line"></div>
      <button class="drop-btn" aria-label="Insert event here">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    `;

    // Drag-and-drop Events
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('dragleave', handleDragLeave);
    zone.addEventListener('drop', handleDrop);

    // Tap/Click placement (mobile fallback & quick navigation)
    zone.querySelector('.drop-btn').addEventListener('click', () => {
      verifyPlacement(index);
    });

    return zone;
  }

  // --- Drag and Drop Handlers ---
  function handleDragStart(e) {
    const cardId = this.dataset.id;
    if (activeFranchiseId === 'tenet') {
      const found = drawnCards.find(c => c.id === cardId);
      if (found) {
        drawnCard = found;
      }
    }
    document.body.classList.add('dragging-active');
    setTimeout(() => {
      this.classList.add('dragging');
    }, 0);
    e.dataTransfer.setData('text/plain', 'drawn-card');
  }

  function handleDragEnd() {
    document.body.classList.remove('dragging-active');
    this.classList.remove('dragging');
  }

  function handleDragOver(e) {
    e.preventDefault();
    this.classList.add('drag-over');
  }

  function handleDragLeave() {
    this.classList.remove('drag-over');
  }

  function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'drawn-card') {
      const index = parseInt(this.dataset.index, 10);
      verifyPlacement(index);
    }
  }

  // --- Insertion Verification ---
  function verifyPlacement(targetIndex) {
    if (!drawnCard) return;

    let isCorrect = false;

    // Check bounds sorting validity
    if (targetIndex === 0) {
      // Placed at the very beginning: must be older than/equal to the first element
      isCorrect = (drawnCard.year <= placedCards[0].year);
    } else if (targetIndex === placedCards.length) {
      // Placed at the very end: must be newer than/equal to the last element
      isCorrect = (drawnCard.year >= placedCards[placedCards.length - 1].year);
    } else {
      // Placed between index-1 and index
      const prevVal = placedCards[targetIndex - 1].year;
      const nextVal = placedCards[targetIndex].year;
      isCorrect = (drawnCard.year >= prevVal && drawnCard.year <= nextVal);
    }

    if (isCorrect) {
      // --- CORRECT ANSWER ---
      SoundManager.playCorrect();
      
      // Insert into placed array
      placedCards.splice(targetIndex, 0, drawnCard);
      
      // Add score & streak
      score = placedCards.length - 1;
      streak = placedCards.length - 1;
      
      if (streak > 0 && streak % 5 === 0) {
        SoundManager.playStreak();
        triggerConfettiCanvas();
      }

      // Re-render, draw next card, and auto scroll to new card
      const newCardId = drawnCard.id;
      drawnCards = drawnCards.filter(c => c.id !== newCardId);
      drawnCard = null;
      updateStatsDisplay();
      renderTimeline();
      drawNextCard();
      
      // Visual Feedback: Find inserted card and glow it
      setTimeout(() => {
        highlightInsertedCard(newCardId, 'correct-flash');
      }, 50);

    } else {
      // --- WRONG ANSWER ---
      SoundManager.playIncorrect();
      lives -= 1;

      // Screen Shake
      document.getElementById('game-screen').classList.add('shake');
      setTimeout(() => {
        document.getElementById('game-screen').classList.remove('shake');
      }, 500);

      // Find correct placement index
      let correctIndex = 0;
      while (correctIndex < placedCards.length && placedCards[correctIndex].year < drawnCard.year) {
        correctIndex++;
      }

      // Place the card in its CORRECT location to keep board sorted
      const failedCard = drawnCard;
      failedCard.isMistake = true;
      placedCards.splice(correctIndex, 0, failedCard);
      drawnCards = drawnCards.filter(c => c.id !== failedCard.id);
      drawnCard = null;

      // Update stats based on new placed cards count
      score = placedCards.length - 1;
      streak = placedCards.length - 1;
      updateStatsDisplay();

      renderTimeline();

      // Highlight the wrong placement & auto-scroll
      setTimeout(() => {
        highlightInsertedCard(failedCard.id, 'incorrect-flash');
        // Check game over
        if (lives <= 0) {
          setTimeout(() => {
            triggerGameOver();
          }, 2200); // 2.2s delay to let the player see where the final card correctly fits on the timeline
        } else {
          drawNextCard();
        }
      }, 50);
    }
  }

  function highlightInsertedCard(cardId, animationClass) {
    // Find newly created card in timeline container
    // We didn't bind id directly to cards in render, let's find it by description content or re-map.
    // Actually, let's look at all timeline cards in DOM:
    const cardsDom = timelineContainer.querySelectorAll('.timeline-card');
    placedCards.forEach((c, idx) => {
      if (c.id === cardId) {
        const element = cardsDom[idx];
        if (element) {
          element.classList.add(animationClass);
          element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }
    });
  }

  function triggerVictory() {
    SoundManager.playStreak();
    triggerConfettiCanvas();
    alert("Incredible! You sorted all events in the timeline!");
    showScreen('landing');
  }

  function triggerGameOver() {
    SoundManager.playGameOver();
    gameOverScore.textContent = score;

    const isNewHigh = setHighScore(activeFranchiseId, timelineMode, score);
    gameOverHighscore.textContent = getHighScore(activeFranchiseId, timelineMode);
    
    if (isNewHigh) {
      gameOverHighscore.style.color = '#ffb703';
      gameOverHighscore.textContent += " (NEW RECORD!)";
    } else {
      gameOverHighscore.style.color = '';
    }

    gameOverModal.classList.remove('hidden');
  }

  // Modal actions
  document.getElementById('retry-game-btn').addEventListener('click', () => {
    gameOverModal.classList.add('hidden');
    initGame(activeFranchiseId, activeFranchiseId.startsWith('custom_'));
  });

  document.getElementById('inspect-timeline-btn').addEventListener('click', () => {
    gameOverModal.classList.add('hidden');
    document.getElementById('inspect-bar').classList.remove('hidden');
    SoundManager.playClick();
  });

  document.getElementById('restore-modal-btn').addEventListener('click', () => {
    document.getElementById('inspect-bar').classList.add('hidden');
    gameOverModal.classList.remove('hidden');
    SoundManager.playClick();
  });

  document.getElementById('quit-game-btn').addEventListener('click', () => {
    gameOverModal.classList.add('hidden');
    showScreen('landing');
    document.body.className = 'theme-mcu';
    renderFranchiseGrid();
  });

  // --- Confetti particle engine ---
  function triggerConfettiCanvas() {
    const colors = ['#e63946', '#2ec4b6', '#ffb703', '#ffffff', '#457b9d'];
    const count = 60;
    const body = document.body;

    for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.background = randomColor;
      
      // Spanning across screen bottom/middle
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = `${Math.random() * 40 + 20}vh`;

      // Set CSS variables for path velocity
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 200 + 100;
      confetti.style.setProperty('--x', `${Math.cos(angle) * dist}px`);
      confetti.style.setProperty('--y', `${Math.sin(angle) * dist + 150}px`);

      body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 1500);
    }
  }


  // ================= CUSTOM TIMELINE CREATOR LOGIC =================
  let builderDeck = {
    name: "",
    color: "#a2d2ff",
    events: []
  };

  const openBuilderBtn = document.getElementById('open-builder-btn');
  const addCardForm = document.getElementById('add-card-form');
  const deckTitleInput = document.getElementById('deck-title');
  const cardTitleInput = document.getElementById('card-title-input');
  const cardDescInput = document.getElementById('card-desc-input');
  const cardYearInput = document.getElementById('card-year-input');
  const cardDisplayYearInput = document.getElementById('card-display-year-input');
  const builderList = document.getElementById('builder-list');
  const builderCount = document.getElementById('builder-count');
  const builderEmptyState = document.getElementById('builder-empty-state');
  const saveDeckBtn = document.getElementById('save-deck-btn');
  const clearDeckBtn = document.getElementById('clear-deck-btn');
  
  // Open Builder Screen
  openBuilderBtn.addEventListener('click', () => {
    // Reset builder form state
    builderDeck = {
      name: "",
      color: "#a2d2ff",
      events: []
    };
    deckTitleInput.value = "";
    addCardForm.reset();
    renderBuilderList();
    showScreen('builder');
  });

  // Add Card
  addCardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = cardTitleInput.value.trim();
    const desc = cardDescInput.value.trim();
    const year = parseFloat(cardYearInput.value);
    const displayYear = cardDisplayYearInput.value.trim();

    if (!title || !desc || isNaN(year) || !displayYear) return;

    const event = {
      id: `custom-event-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      title: title,
      description: desc,
      // For custom decks, we simplify and store same values in both mode keys
      inUniverseYear: year,
      inUniverseDisplay: displayYear,
      releaseYear: year,
      releaseDisplay: displayYear
    };

    builderDeck.events.push(event);
    
    // Reset inputs except title
    cardTitleInput.value = "";
    cardDescInput.value = "";
    cardYearInput.value = "";
    cardDisplayYearInput.value = "";
    cardTitleInput.focus();

    SoundManager.playClick();
    renderBuilderList();
  });

  // Render Added Cards List
  function renderBuilderList() {
    builderList.innerHTML = '';
    builderCount.textContent = builderDeck.events.length;

    if (builderDeck.events.length === 0) {
      builderList.appendChild(builderEmptyState);
      return;
    }

    // Sort preview by year for visibility
    const previewList = [...builderDeck.events].sort((a, b) => a.inUniverseYear - b.inUniverseYear);

    previewList.forEach((event, idx) => {
      const item = document.createElement('div');
      item.className = 'custom-list-item';
      
      item.innerHTML = `
        <div class="item-info">
          <div class="item-title">${event.title}</div>
          <div class="item-year">${event.inUniverseDisplay}</div>
        </div>
        <div class="item-actions">
          <button class="btn-icon danger delete-card-btn" data-id="${event.id}">✕</button>
        </div>
      `;

      item.querySelector('.delete-card-btn').addEventListener('click', () => {
        builderDeck.events = builderDeck.events.filter(e => e.id !== event.id);
        SoundManager.playClick();
        renderBuilderList();
      });

      builderList.appendChild(item);
    });
  }

  // Clear Deck
  clearDeckBtn.addEventListener('click', () => {
    if (builderDeck.events.length > 0 && confirm("Are you sure you want to clear all added events?")) {
      builderDeck.events = [];
      renderBuilderList();
      SoundManager.playClick();
    }
  });

  // Save Deck to Local Storage
  saveDeckBtn.addEventListener('click', () => {
    const deckName = deckTitleInput.value.trim();
    if (!deckName) {
      alert("Please enter a Title for your custom timeline deck.");
      deckTitleInput.focus();
      return;
    }

    if (builderDeck.events.length < 3) {
      alert("Please add at least 3 events to construct a valid playable timeline.");
      return;
    }

    builderDeck.name = deckName;
    const customId = `custom_${Date.now()}`;
    customDecks[customId] = builderDeck;

    saveCustomDecks();
    alert(`"${deckName}" has been successfully saved to your browser's local storage!`);
    
    showScreen('landing');
    renderFranchiseGrid();
  });

  // Export JSON
  document.getElementById('export-btn').addEventListener('click', () => {
    const deckName = deckTitleInput.value.trim();
    if (!deckName) {
      alert("Please enter a Title for your deck before exporting.");
      return;
    }
    if (builderDeck.events.length === 0) {
      alert("Please add some events before exporting.");
      return;
    }

    builderDeck.name = deckName;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(builderDeck, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${deckName.toLowerCase().replace(/[^a-z0-9]/g, '_')}_timeline.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  // Import JSON triggers
  const importBtn = document.getElementById('import-btn');
  const importFileInput = document.getElementById('import-file-input');

  importBtn.addEventListener('click', () => {
    importFileInput.click();
  });

  importFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        
        // Simple structure validation
        if (!imported.name || !Array.isArray(imported.events)) {
          throw new Error("Invalid format. Timeline JSON must contain a 'name' (string) and 'events' (array).");
        }

        builderDeck = {
          name: imported.name,
          color: imported.color || '#a2d2ff',
          events: imported.events.map(ev => ({
            id: ev.id || `custom-event-${Date.now()}-${Math.random()}`,
            title: ev.title || "Untitled Event",
            description: ev.description || "",
            inUniverseYear: ev.inUniverseYear ?? ev.year ?? 0,
            inUniverseDisplay: ev.inUniverseDisplay ?? ev.displayYear ?? "0",
            releaseYear: ev.releaseYear ?? ev.year ?? 0,
            releaseDisplay: ev.releaseDisplay ?? ev.displayYear ?? "0"
          }))
        };

        deckTitleInput.value = builderDeck.name;
        renderBuilderList();
        alert(`Successfully imported "${builderDeck.name}" with ${builderDeck.events.length} events!`);

      } catch (err) {
        alert("Failed to import JSON file. " + err.message);
      }
      importFileInput.value = ''; // Reset file input
    };
    reader.readAsText(file);
  });

  // --- Magic Auto-Generator State ---
  let magicSearchType = 'tv'; // 'tv' or 'movie'
  let magicFetchedItems = [];
  let magicSearchMeta = { name: "" };

  const magicTypeTv = document.getElementById('magic-type-tv');
  const magicTypeMovie = document.getElementById('magic-type-movie');
  const tmdbKeyContainer = document.getElementById('tmdb-key-container');
  const tmdbApiKeyInput = document.getElementById('tmdb-api-key');
  const magicSearchInput = document.getElementById('magic-search-input');
  const magicSearchLabel = document.getElementById('magic-search-label');
  const magicSearchBtn = document.getElementById('magic-search-btn');
  const magicStatusMsg = document.getElementById('magic-status-msg');
  const magicOptionsBox = document.getElementById('magic-options-box');
  const magicShowName = document.getElementById('magic-show-name');
  const magicImportType = document.getElementById('magic-import-type');
  const magicImportBtn = document.getElementById('magic-import-btn');

  // Load saved TMDb key if exists
  tmdbApiKeyInput.value = localStorage.getItem('cinesort_tmdb_key') || '';

  // Listen for changes and save key
  tmdbApiKeyInput.addEventListener('input', () => {
    localStorage.setItem('cinesort_tmdb_key', tmdbApiKeyInput.value.trim());
  });

  // Toggle Search Types
  magicTypeTv.addEventListener('click', () => {
    magicSearchType = 'tv';
    magicTypeTv.classList.add('active');
    magicTypeMovie.classList.remove('active');
    tmdbKeyContainer.classList.add('hidden');
    magicSearchLabel.textContent = 'TV Show Search';
    magicSearchInput.placeholder = 'e.g. Breaking Bad, The Office';
    magicOptionsBox.classList.add('hidden');
    SoundManager.playClick();
  });

  magicTypeMovie.addEventListener('click', () => {
    magicSearchType = 'movie';
    magicTypeMovie.classList.add('active');
    magicTypeTv.classList.remove('active');
    tmdbKeyContainer.classList.remove('hidden');
    magicSearchLabel.textContent = 'Movie Franchise Search';
    magicSearchInput.placeholder = 'e.g. Toy Story, Harry Potter';
    magicOptionsBox.classList.add('hidden');
    SoundManager.playClick();
  });

  // Search Trigger
  magicSearchBtn.addEventListener('click', async () => {
    const query = magicSearchInput.value.trim();
    if (!query) {
      alert("Please enter a show or movie franchise search term.");
      magicSearchInput.focus();
      return;
    }

    SoundManager.playClick();
    showSearchStatus(true, '<span class="loading-spinner"></span>Searching database...');
    magicOptionsBox.classList.add('hidden');
    magicFetchedItems = [];

    try {
      if (magicSearchType === 'tv') {
        await fetchTvShow(query);
      } else {
        await fetchMovieFranchise(query);
      }
    } catch (err) {
      console.error(err);
      showSearchStatus(true, `Error: ${err.message}`, true);
    }
  });

  function showSearchStatus(show, text, isError = false) {
    if (show) {
      magicStatusMsg.innerHTML = text;
      magicStatusMsg.style.color = isError ? '#e63946' : 'var(--primary-color)';
      magicStatusMsg.classList.remove('hidden');
    } else {
      magicStatusMsg.classList.add('hidden');
    }
  }

  // Fetch TV Show from TVmaze
  async function fetchTvShow(query) {
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(query)}&embed=episodes`;
    const response = await fetch(url);
    
    if (response.status === 404) {
      showSearchStatus(true, "Show not found. Please try another query (e.g. 'Breaking Bad').", true);
      return;
    }
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from TVmaze (Status ${response.status})`);
    }

    const data = await response.json();
    const episodes = (data._embedded && data._embedded.episodes) ? data._embedded.episodes.filter(ep => ep.airdate) : [];
    
    if (episodes.length === 0) {
      showSearchStatus(true, "Found the show, but it has no episodes cataloged.", true);
      return;
    }

    // Store in temp memory
    magicFetchedItems = episodes.map(ep => ({
      id: ep.id,
      title: ep.name,
      description: ep.summary ? ep.summary.replace(/<[^>]*>/g, '').trim() : '',
      dateStr: ep.airdate,
      season: ep.season,
      number: ep.number,
      source: `S${ep.season}E${ep.number}`
    }));

    magicSearchMeta = { name: data.name };

    // Setup Option selector
    magicShowName.textContent = `Found: "${data.name}" (${episodes.length} episodes)`;
    
    showSearchStatus(false);
    magicOptionsBox.classList.remove('hidden');
    
    // Auto-fill Deck Name
    deckTitleInput.value = `${data.name} (Episodes)`;
  }

  // Fetch Movie Franchise / Collection from TMDb
  async function fetchMovieFranchise(query) {
    const apiKey = tmdbApiKeyInput.value.trim();
    if (!apiKey) {
      showSearchStatus(true, "TMDb API Key is required for movie searches. Get one free on TMDb's website.", true);
      tmdbApiKeyInput.focus();
      return;
    }

    // Try Search Collections first
    const collectionSearchUrl = `https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US`;
    
    let collectionRes;
    try {
      collectionRes = await fetch(collectionSearchUrl);
    } catch (e) {
      throw new Error("Network error connecting to TMDb.");
    }

    if (!collectionRes.ok) {
      if (collectionRes.status === 401) {
        throw new Error("Invalid TMDb API Key. Please verify your key.");
      }
      throw new Error(`TMDb API error (Status ${collectionRes.status})`);
    }

    const collectionData = await collectionRes.json();
    let movies = [];
    let franchiseName = "";

    if (collectionData.results && collectionData.results.length > 0) {
      const collectionId = collectionData.results[0].id;
      franchiseName = collectionData.results[0].name;
      
      const detailUrl = `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${apiKey}&language=en-US`;
      const detailRes = await fetch(detailUrl);
      
      if (detailRes.ok) {
        const detailData = await detailRes.json();
        movies = detailData.parts || [];
      }
    }

    // Fallback: search movies directly
    if (movies.length === 0) {
      const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=en-US`;
      const movieRes = await fetch(movieSearchUrl);
      if (!movieRes.ok) {
        throw new Error(`TMDb API error (Status ${movieRes.status})`);
      }
      const movieData = await movieRes.json();
      movies = movieData.results || [];
      franchiseName = query;
    }

    movies = movies.filter(m => m.release_date);

    if (movies.length === 0) {
      showSearchStatus(true, "No movies found matching that franchise query.", true);
      return;
    }

    movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

    magicFetchedItems = movies.map(m => ({
      id: m.id,
      title: m.title,
      description: m.overview || 'No overview available.',
      dateStr: m.release_date,
      source: m.title
    }));

    magicSearchMeta = { name: franchiseName };

    magicShowName.textContent = `Found: "${franchiseName}" (${movies.length} movies)`;
    showSearchStatus(false);
    magicOptionsBox.classList.remove('hidden');

    deckTitleInput.value = franchiseName;
  }

  // Import into Deck Action
  magicImportBtn.addEventListener('click', () => {
    if (magicFetchedItems.length === 0) return;

    const importType = magicImportType.value;
    let itemsToProcess = [];

    if (importType === 'all') {
      itemsToProcess = [...magicFetchedItems];
    } else if (importType === 'season-1') {
      itemsToProcess = magicFetchedItems.filter(item => item.season === 1);
      if (itemsToProcess.length === 0) {
        alert("This series has no season 1 items found in our list.");
        return;
      }
    } else if (importType === 'random-30') {
      itemsToProcess = getRandomSample(magicFetchedItems, 30);
    } else if (importType === 'random-50') {
      itemsToProcess = getRandomSample(magicFetchedItems, 50);
    }

    builderDeck.events = [];

    itemsToProcess.forEach(item => {
      const dateObj = new Date(item.dateStr);
      let year = 2000;
      let displayDate = item.dateStr;

      if (item.dateStr && !isNaN(dateObj.getTime())) {
        const fullYear = dateObj.getFullYear();
        const monthFraction = dateObj.getMonth() / 12;
        const dayFraction = dateObj.getDate() / 365;
        year = fullYear + monthFraction + dayFraction;

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        displayDate = dateObj.toLocaleDateString('en-US', options);
      }

      let desc = item.description || "No description available.";
      if (desc.length > 180) {
        desc = desc.substring(0, 177) + "...";
      }

      builderDeck.events.push({
        id: `magic-${item.id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title: item.title,
        description: desc,
        inUniverseYear: year,
        inUniverseDisplay: `${displayDate} (${item.source})`,
        releaseYear: year,
        releaseDisplay: `${displayDate} (${item.source})`
      });
    });

    builderDeck.events.sort((a, b) => a.inUniverseYear - b.inUniverseYear);

    renderBuilderList();
    
    magicOptionsBox.classList.add('hidden');
    magicSearchInput.value = "";
    
    SoundManager.playStreak();
    alert(`Successfully loaded ${builderDeck.events.length} cards into your deck preview! You can now review, edit them, or click 'Save & Publish' to play.`);
  });

  function getRandomSample(arr, size) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  }

  // --- Quick Play Auto-Generator ---
  const quickPlaySearch = document.getElementById('quick-play-search');
  const quickPlayBtn = document.getElementById('quick-play-btn');
  const quickPlayStatus = document.getElementById('quick-play-status');

  quickPlayBtn.addEventListener('click', async () => {
    const query = quickPlaySearch.value.trim();
    if (!query) {
      alert("Please enter a TV show or Anime search term.");
      quickPlaySearch.focus();
      return;
    }

    SoundManager.playClick();
    quickPlayStatus.innerHTML = '<span class="loading-spinner"></span>Generating deck...';
    quickPlayStatus.classList.remove('hidden');
    quickPlayBtn.disabled = true;

    try {
      let events = [];
      let franchiseName = "";
      let color = "#1d4ed8"; // default NYPD-like blue for quickplays

      const url = `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(query)}&embed=episodes`;
      const res = await fetch(url);
      if (res.status === 404) {
        throw new Error("Show or Anime not found. Please try another search (e.g. 'Attack on Titan').");
      }
      if (!res.ok) throw new Error("Error connecting to database.");
      
      const data = await res.json();
      const episodes = (data._embedded && data._embedded.episodes) ? data._embedded.episodes.filter(ep => ep.airdate) : [];
      if (episodes.length === 0) throw new Error("This show has no episodes available.");

      franchiseName = data.name;
      // Sample random 30 episodes
      const sampled = getRandomSample(episodes, 30);
      events = sampled.map(ep => {
        const dateObj = new Date(ep.airdate);
        const year = ep.airdate && !isNaN(dateObj.getTime())
          ? dateObj.getFullYear() + (dateObj.getMonth() / 12) + (dateObj.getDate() / 365)
          : 2000;
        const displayDate = ep.airdate && !isNaN(dateObj.getTime())
          ? dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
          : ep.airdate;
        
        let desc = ep.summary ? ep.summary.replace(/<[^>]*>/g, '').trim() : '';
        if (desc.length > 180) desc = desc.substring(0, 177) + "...";

        return {
          id: `magic-quick-${ep.id}-${Date.now()}`,
          title: ep.name,
          description: desc,
          inUniverseYear: year,
          inUniverseDisplay: `${displayDate} (S${ep.season}E${ep.number})`,
          releaseYear: year,
          releaseDisplay: `${displayDate} (S${ep.season}E${ep.number})`
        };
      });

      // Construct temporary deck
      const generatedFranchise = {
        name: franchiseName,
        color: color,
        gradient: `linear-gradient(135deg, #0f172a 0%, ${color} 100%)`,
        events: events
      };

      // Assign to customDecks so it can be managed by play/retry routines
      const tempId = `custom_quickplay_${Date.now()}`;
      customDecks[tempId] = generatedFranchise;

      quickPlayStatus.classList.add('hidden');
      quickPlaySearch.value = "";
      
      initGame(tempId, true);

    } catch (err) {
      alert(err.message);
      quickPlayStatus.classList.add('hidden');
    } finally {
      quickPlayBtn.disabled = false;
    }
  });

  // --- Init Landing App Screen ---
  loadCustomDecks();
  renderFranchiseGrid();

});
