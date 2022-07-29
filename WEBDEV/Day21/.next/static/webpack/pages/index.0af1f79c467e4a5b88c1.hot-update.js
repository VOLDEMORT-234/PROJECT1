webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\Win-10\\Desktop\\github\\WEBDEV\\Day21\\pages\\index.js";
// import { useEffect, useState } from "react";


 // import Layout from "../components/layout/Layout";
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first tumps",
//     image:
//       "",
//     address: "Some addres 5,NYC",
//     description: "This is first meetup",
//   },
//   {
//     id: "m2",
//     title: "A second tumps",
//     image:
//       "https://th.bing.com/th/id/R.e35ee12fbd7ad0533f485e1d03274dd5?rik=LB3gAJUchVHYsw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffFXBCPi.jpg&ehk=iiGoQMd7vTFbSQ8SZLryJiuPsNNkJd%2fVviSkrGotX0I%3d&risl=&pid=ImgRaw&r=0",
//     address: "Some addres 10,NYC",
//     description: "This is second meetup",
//   },
// ];
// Two forms of pre-rendering=static generation and server side rendering very important

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   // send http request
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  return (
    /*#__PURE__*/
    // <Layout>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), "React Meetups"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        meetups: props.meetups
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this) // {/* </Layout> */}

  );
} // getServersideprops  is better than getStaticProps is better depends on  situation
// hey baby hey baby hai;
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     // revalidate not make any sence here
//   };
// }


_c = HomePage;
//preserve name very important
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDRTtBQUNBLHlFQUFDLDhDQUFEO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxnQ0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UscUVBQUMsc0VBQUQ7QUFBWSxlQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLENBVUU7O0FBVkY7QUFZRCxDLENBRUQ7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQW5DU0YsUTtBQXNFVDs7QUFDZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGFmMWY3OWM0NjdlNGE1Yjg4YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuXHJcbi8vIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IFwibTFcIixcclxuLy8gICAgIHRpdGxlOiBcIkEgZmlyc3QgdHVtcHNcIixcclxuLy8gICAgIGltYWdlOlxyXG4vLyAgICAgICBcIlwiLFxyXG4vLyAgICAgYWRkcmVzczogXCJTb21lIGFkZHJlcyA1LE5ZQ1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBmaXJzdCBtZWV0dXBcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiBcIm0yXCIsXHJcbi8vICAgICB0aXRsZTogXCJBIHNlY29uZCB0dW1wc1wiLFxyXG4vLyAgICAgaW1hZ2U6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly90aC5iaW5nLmNvbS90aC9pZC9SLmUzNWVlMTJmYmQ3YWQwNTMzZjQ4NWUxZDAzMjc0ZGQ1P3Jpaz1MQjNnQUpVY2hWSFlzdyZyaXU9aHR0cCUzYSUyZiUyZndhbGxwYXBlcmNhdmUuY29tJTJmd3AlMmZmRlhCQ1BpLmpwZyZlaGs9aWlHb1FNZDd2VEZiU1E4U1pMcnlKaXVQc05Oa0pkJTJmVnZpU2tyR290WDBJJTNkJnJpc2w9JnBpZD1JbWdSYXcmcj0wXCIsXHJcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzIDEwLE5ZQ1wiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBzZWNvbmQgbWVldHVwXCIsXHJcbi8vICAgfSxcclxuLy8gXTtcclxuLy8gVHdvIGZvcm1zIG9mIHByZS1yZW5kZXJpbmc9c3RhdGljIGdlbmVyYXRpb24gYW5kIHNlcnZlciBzaWRlIHJlbmRlcmluZyB2ZXJ5IGltcG9ydGFudFxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAvLyBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIC8vIHNlbmQgaHR0cCByZXF1ZXN0XHJcbiAgLy8gICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gIC8vIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gPExheW91dD5cclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWQ+PHRpdGxlPlxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgUmVhY3QgTWVldHVwc1xyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcblxyXG4gICAgLy8gey8qIDwvTGF5b3V0PiAqL31cclxuICApO1xyXG59XHJcblxyXG4vLyBnZXRTZXJ2ZXJzaWRlcHJvcHMgIGlzIGJldHRlciB0aGFuIGdldFN0YXRpY1Byb3BzIGlzIGJldHRlciBkZXBlbmRzIG9uICBzaXR1YXRpb25cclxuLy8gaGV5IGJhYnkgaGV5IGJhYnkgaGFpO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgIC8vIGZldGNoIGRhdGEgZnJvbSBBUElcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgLy8gcmV2YWxpZGF0ZSBub3QgbWFrZSBhbnkgc2VuY2UgaGVyZVxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcblxyXG4gIC8vIE1vbmdvQ2xpZW50LmNvbm5lY3QoJycpXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vZGVlcGVzaDIxMTAwOkRlZXBlc2heMTIzQGNsdXN0ZXIwLmd6OHFrc28ubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7IC8vYnkgZGVmYXVsdCBmaW5iZCBhbGwgZG9jdW1lbnRcclxuICBjbGllbnQuY2xvc2UoKTtcclxuICAvLyBmZXRjaChcIi9hcGkvbWVldHVwc1wiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IEpTT04ucGFyc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgIH0pKVxyXG4gICAgICAgIClcclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLCAvL251bWJlciBvZiBzZWNvdW5kIG5leHQuanMgd2FpdFxyXG4gICAgLy8gcmVndWxhciB1cGRhdGVcclxuICB9O1xyXG59XHJcbi8vcHJlc2VydmUgbmFtZSB2ZXJ5IGltcG9ydGFudFxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==