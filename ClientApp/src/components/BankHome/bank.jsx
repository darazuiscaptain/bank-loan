// RawHtmlToReactExample.jsx
import React from "react";
import {test} from "./test";
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/carousel-offer.css';
import './assets/css/loan_calc.css';
import './assets/css/select2.min.css';
// import './assets/js/scripts'

//import './assets/css/font-awesome.min.css';
import './assets/css/smartbanner.css';
/**
 * Turn a raw string representing HTML code into an HTML 'Element' object.
 *
 * This uses the technique described by this StackOverflow answer: https://stackoverflow.com/a/35385518
 * Note: this only supports HTML that describes a single top-level element. See the linked post for more options.
 *
 * @param {String} rawHtml A raw string representing HTML code
 * @return {Element} an HTML element
 */
function htmlStringToElement(rawHtml) {
    const template = document.createElement('template');
    rawHtml = rawHtml.trim();
    template.innerHTML = rawHtml;
    return template.content.firstChild;
}

/**
 * Turn an HTML element into a React element.
 *
 * This uses a recursive algorithm. For illustrative purposes it logs to the console.
 *
 * @param {Element} el
 * @return {ReactElement} (or a string in the case of text nodes?)
 */
function elementToReact(el) {
    const tagName = el.tagName?.toLowerCase(); // Note: 'React.createElement' prefers lowercase tag names for HTML elements.
    const descriptor = tagName ?? el.nodeName;
    const childNodes = Array.from(el.childNodes);
    if (childNodes.length > 0) {
        console.log(`This element ('${descriptor}') has child nodes. Let's transform them now.`);
        const childReactElements = childNodes.map(childNode => elementToReact(childNode)).filter(el => {
            // In the edge case that we found an unsupported node type, we'll just filter it out.
            return el !== null
        });
        return React.createElement(tagName, null, ...childReactElements);
    } else {
        // This is a "bottom out" point. The recursion stops here. The element is either a text node, a comment node,
        // and maybe some other types. I'm not totally sure. Reference the docs to understand the different node
        // types: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        console.log(`This element ('${descriptor}') has no child nodes.`);

        // For simplicity, let's only support text nodes.
        const nodeType = el.nodeType;
        if (nodeType === Node.TEXT_NODE) {
            return el.textContent;
        } else {
            console.warn(`Unsupported node type: ${nodeType}. Consider improving this function to support this type`);
            return null;
        }
    }
}

export function BankIndex() {
    const myRawHtml = `<p>This is <em>raw</em> HTML with some nested tags. Let's incorporate it into a React element.`;
    const grap_test=test
    const myElement = htmlStringToElement(test);
    const myReactElement = elementToReact(myElement);


    return (<>


        {/* Technique #1: Use React's 'dangerouslySetInnerHTML' attribute */}


        <div
 
            dangerouslySetInnerHTML = {
                { __html:grap_test          }
            }

        >
        </div>

        {/* Technique #2: Use a recursive algorithm to turn an HTML element into a React element */}

    </>)
}
