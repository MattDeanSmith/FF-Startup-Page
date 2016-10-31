// Main link operating
  // Listening for core onclick
  document.getElementById('showCore').addEventListener("click", showCore);
  function showCore() {
    document.getElementById('core').style.display = 'block';
    document.getElementById('entertain').style.display = 'none';
    document.getElementById('news').style.display = 'none';
    document.getElementById('chans').style.display = 'none';
    document.getElementById('etc').style.display = 'none';
  };

  // Listening for news onclick
  document.getElementById('showNews').addEventListener("click", showNews);
  function showNews() {
    document.getElementById('news').style.display = 'block';
    document.getElementById('core').style.display = 'none';
    document.getElementById('entertain').style.display = 'none';
    document.getElementById('chans').style.display = 'none';
    document.getElementById('etc').style.display = 'none';
  };

  // Listening for entertain onclick
  document.getElementById('showEntertain').addEventListener("click", showEntertain);
  function showEntertain() {
    document.getElementById('entertain').style.display = 'block';
    document.getElementById('core').style.display = 'none';
    document.getElementById('news').style.display = 'none';
    document.getElementById('chans').style.display = 'none';
    document.getElementById('etc').style.display = 'none';
  };

  // Listening for chans onclick
  document.getElementById('showChans').addEventListener("click", showChans);
  function showChans() {
    document.getElementById('chans').style.display = 'block';
    document.getElementById('core').style.display = 'none';
    document.getElementById('news').style.display = 'none';
    document.getElementById('entertain').style.display = 'none';
    document.getElementById('etc').style.display = 'none';
  };

  // Listening for etc onclick
  document.getElementById('showEtc').addEventListener("click", showEtc);
  function showEtc() {
    document.getElementById('etc').style.display = 'block';
    document.getElementById('core').style.display = 'none';
    document.getElementById('news').style.display = 'none';
    document.getElementById('entertain').style.display = 'none';
    document.getElementById('chans').style.display = 'none';
  };

  // Listening for CLOSE ALL onclick
  document.getElementById('closeAll').addEventListener("click", closeAll);
  function closeAll() {
    document.getElementById('etc').style.display = 'none';
    document.getElementById('core').style.display = 'none';
    document.getElementById('news').style.display = 'none';
    document.getElementById('entertain').style.display = 'none';
    document.getElementById('chans').style.display = 'none';
  };
