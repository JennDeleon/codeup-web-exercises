//
// $ npm install scenejs
//
// document
//     .querySelector(".play")
//     .appendChild(
//         Shape.poly({
//             strokeWidth: 10,
//             left: 5,
//             top: 5,
//             right: 5,
//             bottom: 5,
//             width: 50,
//             rotate: 90,
//             fill: "#333",
//             stroke: "#333"
//         })
//     );
//
// const clapperScene = new Scene(
//     {
//         ".clapper": {
//             2: "transform: translate(-50%, -50%) rotate(0deg)",
//             2.5: {
//                 transform: "rotate(-15deg)"
//             },
//             3: {
//                 transform: "rotate(0deg)"
//             },
//             3.5: {
//                 transform: "rotate(-10deg)"
//             }
//         },
//         ".clapper-container": {
//             0: Scene.zoomIn({ duration: 1 })
//         },
//         ".circle": {
//             0.3: Scene.zoomIn({ duration: 1 })
//         },
//         ".play": {
//             0: {
//                 transform: "translate(-50%, -50%)"
//             },
//             0.6: Scene.zoomIn({ duration: 1 })
//         },
//         ".top .stick1": {
//             2: {
//                 transform: {
//                     rotate: "0deg"
//                 }
//             },
//             2.5: {
//                 transform: {
//                     rotate: "-20deg"
//                 }
//             },
//             3: {
//                 transform: {
//                     rotate: "0deg"
//                 }
//             },
//             3.5: {
//                 transform: {
//                     rotate: "-10deg"
//                 }
//             }
//         },
//         ".stick1 .rect": (i) => ({
//             0: {
//                 transform: {
//                     scale: 0,
//                     skew: "15deg"
//                 }
//             },
//             0.7: {
//                 transform: {
//                     scale: 1
//                 }
//             },
//             options: {
//                 delay: 0.6 + i * 0.1
//             }
//         }),
//         ".stick2 .rect": (i) => ({
//             0: {
//                 transform: {
//                     scale: 0,
//                     skew: "-15deg"
//                 }
//             },
//             0.7: {
//                 transform: {
//                     scale: 1
//                 }
//             },
//             options: {
//                 delay: 0.8 + i * 0.1
//             }
//         })
//     },
//     {
//         easing: Scene.EASE_IN_OUT,
//         selector: true
//     }
// ).playCSS();
// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
// console.log(sayHello("Jennifer"))

var myOutput = originalString + " is an example of " + description + " thinking.";

function