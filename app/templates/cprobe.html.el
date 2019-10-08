<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>HTML canvas test</title>
    
  </head>
  <body style="font-family:Arial;">
    <h1>Screen parameters test</h1>
    <p id="n1"></p>
    <p id="n2"></p>
    <canvas id="can1"></canvas>
    <script>
        function t(id, text) {
            var element = document.getElementById(id)
            element.innerHTML = ""
            var text = document.createTextNode(text)
            element.appendChild(text)
        }
        
        function drawAction(ctx, x, y, ratio, text) {
            ctx.font = "15px Arial";
            ctx.scale(ratio, ratio)
      
            
            
            ctx.fillStyle = "white"
            ctx.fillRect(x + 4, y + 4, 200, 50)
            ctx.strokeStyle = "black"
            ctx.strokeRect(x + 4.5, y + 4.5, 200, 50)

            ctx.fillStyle = "black"
            ctx.fillText(text, x + 14, y + 38);
        }
        
        function setupCanvas() {
            var ratio = window.devicePixelRatio
            var canvas = document.getElementById("can1")
            var w = 300;
            var h = 200;
            canvas.style.width = w + "px"
            canvas.style.height = h + "px"
            canvas.style.background = "#ffffd0"
            canvas.width = w * ratio
            canvas.height = h * ratio
            
            w = 250
            h = 100
            var canvas2 = document.createElement("canvas")
            
            canvas2.style.width = w + "px"
            canvas2.style.height = h + "px"
            canvas2.style.background = "#d0ffd0"
            canvas2.width = w * ratio
            canvas2.height = h * ratio            
            
            var ctx = canvas2.getContext("2d");
            drawAction(ctx, 0, 0, ratio, "Render to texture")
            
            var ctxMain = canvas.getContext("2d")
            //ctxMain.scale(ratio, ratio)
            ctxMain.drawImage(canvas2, 5, 5)
            
            drawAction(ctxMain, 3, 70, ratio, "Direct render")

        }
        
        t("n1", "window.devicePixelRatio: " + window.devicePixelRatio)
        t("n1", "window.devicePixelRatio: " + window.devicePixelRatio)
        
        setupCanvas()
    </script>
  </body>
</html>