# GAEvents

Handle Google Analytics Event Tracking via data attributes in your HTML.

### How to Use
1. Include after you have instantiated the `ga( 'create' , 'UA-XXXX-Y' )` method.
2. Add the class names you wish to track to the `_track` object, or add `.ga-track` to your elements
3. Populate the data-attributes on the HTML elements you wish to track
4. Use on any `a` element, or add an `href` attribute to any other element and have the plugin treat it as an `a`.

### Attributes
| Attribute | Field Name | Link   |
| :------- | :---- | :--- |
| data-ec | eventCategory |  [Google Documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventCategory)    |
| data-ea    | eventAction   |  [Google Documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventAction)   |
| data-el     | eventLabel    |  [Google Documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventLabel)  |
| data-ev     | eventValue    |  [Google Documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue)  |

### Useful Links
- [Analytics.js Field Reference](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference)

### Todo:
- Remove jQuery dependency
- Comment properly
- Implement Promises before navigating the user
