{"version":3,"sources":["vimeo.js"],"names":["root","factory","define","amd","videojs","Vimeo","module","exports","require","this","VimeoState","UNSTARTED","ENDED","PLAYING","PAUSED","BUFFERING","Tech","getComponent","extend","constructor","options","ready","call","poster","setPoster","setSrc","options_","source","src","setTimeout","el_","parentNode","className","isApiReady","initPlayer","apiReadyQueue","push","$","getJSON","baseApiUrl","videoId","format","_this","data","thumbnail_large","bind","dispose","replace","createEl","vimeo","vimeoInfo","baseUrl","parseUrl","wrapperId","playerId","oldWrapper","document","getElementById","removeChild","iframe","createElement","setAttribute","techId","divWrapper","offsetHeight","appendChild","self","api","$f","players","on","window","addEventListener","event","state","volume","muted","muteVolume","time","duration","buffered","url","error","addEvent","id","onReady","onLoadProgress","onPlayProgress","onPlay","onPause","onFinish","onSeek","triggerReady","trigger","startMuted","setMuted","playOnReady","play","durationUpdate","percent","seconds","onError","errorNumber","code","arg","poster_","autoplay","_isOnMobile","isReady_","thumbnail_small","checkHighResPoster","supportsFullScreen","load","pause","paused","currentTime","setCurrentTime","player_","createTimeRange","setVolume","percentAsDecimal","currentSrc","uri","_uri","image","Image","onload","naturalHeight","naturalWidth","onerror","height","width","e","isSupported","canPlaySource","type","test","navigator","userAgent","result","regex","match","injectCss","css","head","getElementsByTagName","style","styleSheet","cssText","createTextNode","vimeoIframeAPIReady","i","length","registerTech","Froogaloop","fn","init","eventCallbacks","hasWindowEvent","isReady","slice","Array","prototype","playerOrigin","element","wasReady","method","valueOrCallback","target_id","params","isFunction","callback","storeCallback","postMessage","eventName","removeEvent","removed","removeCallback","target","contentWindow","JSON","stringify","value","onMessageReceived","parse","origin","eventData","player_id","getCallback","undefined","apply","obj","isArray","toString","attachEvent"],"mappings":"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","file":""}