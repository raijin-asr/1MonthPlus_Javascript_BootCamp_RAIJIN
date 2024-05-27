//normal load
//<script src="Scripts.js"></script>
    //first parse html and css, then load js file, stops parsing html and css until js file is loaded
    //html, css parse stops when js file is fetched and executed

//async load
//<script async src="Scripts.js"></script>
    //parse html and css, then load js file, continue parsing html and css while js file is loaded
    //html, css parse, js file parse during fetch phase, continue parse of html, css AFTER execute of js file
    //if js file is dependent on html or css, then async is not used
    //if js file is independent of html or css, then async is used for faster loading of js files
    //js file is fetched and executed at once
    //images and videos are shown slow
    //for large js files, async is used for faster loading of js files

//defer load
//<script defer src="Scripts.js"></script>
    //parse html and css, then load js file, stops parsing html and css until js file is loaded
    //fetches js file during parsing html and css one by one, until js file is fetched and after parse is completed, js file is executed
    //if one file is dependent on another file, then defer is used for faster loading of js files
    //all js files dependent are fetched and executed at last
    //all images, video are shown fast