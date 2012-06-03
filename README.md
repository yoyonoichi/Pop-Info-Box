Visit [Demo Page](http://www.the8thocean.com/misc/jqueryplugins/popInfoBox/demo/)

## HTML side

		Add class "apply_popinfobox" to HTML tag (this class name is changable).
		Add attribute "content" and the value to the HTML tag (this attribute name is changable).
		ex.) <strong class="apply_popinfobox" content="A content you want to show.">

## JAVASCRIPT side

		$.popInfoBox({options});

#### Options

*	applyClass: class name to trigger this plugin ... (string) (default - 'apply_popinfobox')
*	applyAttribute: attribute name of a content ... (object) (default - {content:'content'})
* 	opacity: (number) (default - 0.9)
*	borderRadius: (int) (default - 15)
*	gap: length (pixels) from a cursor ... (int) (default - 10)
*	zIndex: (int) (default - 100)
*	class: class name of pop-up information box ... (string) (default - 'popinfobox')