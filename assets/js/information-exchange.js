window.onload = function(){
    var myli1 = document.getElementById("select1");
	var myli2 = document.getElementById("select2");
    var myselect1 = document.getElementById("information1");  
	var myselect2 = document.getElementById("information2"); 
    myli1.onclick = function(){
        myli1.className="on";
		myli2.className="off";
		myselect1.className="show";
		myselect1.className="hide";
    };
	myli2.onclick = function(){
		myli2.className="on";
		myli1.className="off";
		myselect2.className="show";
		myselect1.className="hide";
	};
}
