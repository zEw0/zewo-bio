window.ondataload = () => { }
fetch("https://api.lanyard.rest/v1/users/465691254332719104").then((a) => a.json().then((a) => {
    window.lanyard = a.data
    window.ondataload()

    if (window.lanyard.discord_status != "offline") {
        stattext.innerText = "Online"
        document.getElementById("stattext").style.color='#0BC544'
        document.getElementById("statsymbol").style.backgroundColor='#0BC544'
        }

        const imagepfp = `https://cdn.discordapp.com/avatars/465691254332719104/${window.lanyard.discord_user.avatar}`
        document.getElementById("pfp").style.backgroundImage= `url(${imagepfp})`

}))

/*if(window.lanyard.discord_status = "dnd"){
    stattext.innerText = "Online"
    document.getElementById("stattext").style.color='#AB0909'*/

    function pagetitle(){
        var Flip = false;

	        var CurStr = "";
	        var Pos = 0;
	        var Invert = false;

	        var TextL = "zewo.bio";
	        var TextR = "zewo.bio";

	        function loop() {
	            var Target = Flip ? TextR : TextL;

	            if (Pos > Target.length) {
	                Invert = true;
	            } else if (Pos < 0) {
	                if (Invert) {
	                    Flip = !Flip;
	                    Target = Flip ? TextR : TextL;

	                    Pos = 0;
	                }

	                Invert = false;
	            }

	            CurStr = Target.substring(0, Pos);
	            Pos += (Invert ? -1 : 1);

	            if (CurStr.length == 0)
	                CurStr = "z";

	            document.getElementsByTagName("title")[0].innerHTML = CurStr;
	        }

	        setInterval(loop, 300);
    }

	function showtoast() {
		var x = document.getElementById("toast");
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	  } 