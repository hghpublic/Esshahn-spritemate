
/*

    Class Window

 */

class Window_Preview
{
    constructor(config)
    {
        this.id = "window-" + $('div[id^="window-"]').length;
        this.title = config.title; 
        this.resizable = false; 
        this.type = "preview";
        this.left = config.left;
        this.top = config.top;
        this.width = "auto"; //24 * this.zoomFactor;
        this.height = "auto"; //21 * this.zoomFactor;
        this.resizable = true;
        this.position = { at: "left+"+this.left+" top+"+this.top };
        
        this.create_window();  
    }
             
       
    create_window()
    {
        $( "#app" ).append( "<div id='"+this.id+"' class='"+this.type+"' title='"+this.title+"'></div>" );
        $("#" + this.id).dialog({
            width: this.width,
            height: this.height,
            dialogClass: "no-close",
            position: this.position,
            resizable: this.resizable,
            buttons: this.buttons
        });

    }
}
