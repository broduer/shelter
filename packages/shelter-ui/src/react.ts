// this is nonideal :(
import exfiltrate from "../../shelter/src/exfiltrate";

// exfiltrate react
export let React, ReactDOM;

exfiltrate("createElement").then((v) => (React = v));
exfiltrate("findDOMNode").then((v) => (ReactDOM = v));
