Media Query 

1. Using Media query we can make our website responsive
2. We have two operators, comma & and where comma is used to get multiple condition, and is used for seperate each condition
 Eg: @media screen, (max-width: 768px) and (min-width: 768px)
     @media screen and (max-width: 768px)

Media Type
    all => All media type devices
    print => Workes on printer
    screen => Computer screens, tablets, smart phones etc 
    speech => Screen readers that reads the page out

Max-width 
    It will apply styles for the given border (Eg: 500px - apply styles till 500px)
    It will change the background color when screen size is 0px to 500px 
   
   @media screen and (max-width: 500px) {
    .container {
        background-color: $color-1;
    }
}

Min-width
    It is reverse of max-width, inside the border styles will not apply 
    For ex :500px then for 0px to 500px given styles will not be applied other border it will apply styles 

    @media screen and (min-width: 500px) {
    .container {
        background-color: $color-1;
    }
}

Desktop First Approach => Bigger screen at the first then the smaller one
Mobile First Appraoch => Smaller screen first then the smaller one 

Landscape & Potrait 

@media all and (orientation: landscape) {
   // Styles for landscape mode.
}
@media all and (orientation: portrait) {
   // Styles for portrait mode.
}