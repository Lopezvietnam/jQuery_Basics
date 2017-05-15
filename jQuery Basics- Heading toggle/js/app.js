// Problem: Looks terrible in smaller devices.



// Solution: To hide the text links and swap tehm out with a more appropriate navigation

// Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);


// Cylcle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  // Create an option
  var $option = $("<option></option>"); 
  
// Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")){
   $option.prop("selected", true);
  }
  
  
//option's value is the href
 $option.val($anchor.attr("href"));
// option's text is the text of link
  $option.text($anchor.text());
// append option to select
  $select.append($option);
});
// Create  button 
  //Bind change listener  to button             
$select.change(function() {
//go to select's location
 window.location = $select.val(); 
});

//Modify CSS to hide links on small widths and show button and select
//Also hides select and button on larger width and show's links 














