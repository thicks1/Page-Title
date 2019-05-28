$("button").click(function() {
    var input = $("input").val();
    $(".images").html("");
    if (input === "exhausted") {
         exhausted();
    } else if (input === "angry") {
               angry();
        } else if (input === "sad") {
               sad();
            } else if (input === "happy") {
                happy();
                } else {
        alert("Invalid Input");
        
    }
});
 var images=["happy","exhausted","sad","angry"];
function changeBackground(backgroundcolor){
    $('body').css('background-color',backgroundcolor);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}
function exhausted() {
    changeBackground("yellow");
    displayImage("https://cdn.shopify.com/s/files/1/1061/1924/products/Tired_Face_Emoji_a5bdf862-1509-419f-9e2a-c9208ae1938b_large.png?v=1480481057");
    changeTextColor("green");
}
function angry() {
    changeBackground("red");
    displayImage("https://vignette.wikia.nocookie.net/muppet/images/5/5f/OscarsClassicStare.jpg/revision/latest?cb=20120222062511");
    changeTextColor("white");
}
function sad() {
    changeBackground("black");
    displayImage("https://secure.img1-fg.wfcdn.com/im/06273442/resize-h800-w800%5Ecompr-r85/2746/27462969/Disney+Pixar+Inside+Out+Sadness+Life+Size+Cardboard+Cutout.jpg");
    changeTextColor("yellow");
}
function happy() {
    changeBackground("purple");
    displayImage("https://cdn-images-1.medium.com/max/1200/1*m_Jj-U-0087w1ytSQCx59w.jpeg");
    changeTextColor("pink");
}

    
    
