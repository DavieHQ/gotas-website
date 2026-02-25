(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Gotas Website/src/components/PhilosophySection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "revealed": "PhilosophySection-module__a6v3mG__revealed",
  "section": "PhilosophySection-module__a6v3mG__section",
  "text": "PhilosophySection-module__a6v3mG__text",
  "word": "PhilosophySection-module__a6v3mG__word",
});
}),
"[project]/Documents/Gotas Website/src/components/PhilosophySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhilosophySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$PhilosophySection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/src/components/PhilosophySection.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function PhilosophySection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const text = "We prioritize integrity, dedication, creativity, and excellence in what we do. We are trusted and efficient; we give the best as it suits the preferential needs of our prospects.";
    const words = text.split(" ");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhilosophySection.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "PhilosophySection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["PhilosophySection.useEffect"], {
                threshold: 0.2,
                rootMargin: '0px 0px -10% 0px'
            });
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
            return ({
                "PhilosophySection.useEffect": ()=>observer.disconnect()
            })["PhilosophySection.useEffect"];
        }
    }["PhilosophySection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$PhilosophySection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$PhilosophySection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text} ${isVisible ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$PhilosophySection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealed : ''}`,
                children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$PhilosophySection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].word,
                        style: {
                            transitionDelay: `${index * 0.04}s`
                        },
                        children: [
                            word,
                            " "
                        ]
                    }, index, true, {
                        fileName: "[project]/Documents/Gotas Website/src/components/PhilosophySection.tsx",
                        lineNumber: 40,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Gotas Website/src/components/PhilosophySection.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Gotas Website/src/components/PhilosophySection.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Gotas Website/src/components/PhilosophySection.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(PhilosophySection, "t6xTCIDW8wBKaEAVt1RBRErIU/M=");
_c = PhilosophySection;
var _c;
__turbopack_context__.k.register(_c, "PhilosophySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Gotas Website/src/components/VideoShowcase.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "VideoShowcase-module__RSqlEW__container",
  "description": "VideoShowcase-module__RSqlEW__description",
  "header": "VideoShowcase-module__RSqlEW__header",
  "heading": "VideoShowcase-module__RSqlEW__heading",
  "infoBox": "VideoShowcase-module__RSqlEW__infoBox",
  "playButton": "VideoShowcase-module__RSqlEW__playButton",
  "playIcon": "VideoShowcase-module__RSqlEW__playIcon",
  "section": "VideoShowcase-module__RSqlEW__section",
  "statBox": "VideoShowcase-module__RSqlEW__statBox",
  "statLabel": "VideoShowcase-module__RSqlEW__statLabel",
  "statNumber": "VideoShowcase-module__RSqlEW__statNumber",
  "statsGrid": "VideoShowcase-module__RSqlEW__statsGrid",
  "videoPlaceholder": "VideoShowcase-module__RSqlEW__videoPlaceholder",
  "videoWrapper": "VideoShowcase-module__RSqlEW__videoWrapper",
});
}),
"[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/src/components/VideoShowcase.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CountUpStat({ endValue, suffix, label }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUpStat.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "CountUpStat.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["CountUpStat.useEffect"], {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "CountUpStat.useEffect": ()=>observer.disconnect()
            })["CountUpStat.useEffect"];
        }
    }["CountUpStat.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUpStat.useEffect": ()=>{
            if (!isVisible) return;
            let start = 0;
            const duration = 2000;
            let animationFrameId;
            const animate = {
                "CountUpStat.useEffect.animate": (timestamp)=>{
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    setCount(Math.floor(easeOutQuart * endValue));
                    if (progress < 1) {
                        animationFrameId = requestAnimationFrame(animate);
                    }
                }
            }["CountUpStat.useEffect.animate"];
            animationFrameId = requestAnimationFrame(animate);
            return ({
                "CountUpStat.useEffect": ()=>cancelAnimationFrame(animationFrameId)
            })["CountUpStat.useEffect"];
        }
    }["CountUpStat.useEffect"], [
        endValue,
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statBox,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                children: [
                    count,
                    suffix
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(CountUpStat, "aVsmI+hvhRaIWCpqIhZOvGBssz4=");
_c = CountUpStat;
function VideoShowcase() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                            children: "Experience the Extraordinary"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            children: "Take a cinematic tour of our flagship properties and discover what makes Gotas Diamond the premier choice for luxury real estate in Abuja."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoPlaceholder,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playButton,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playIcon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                                    lineNumber: 70,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Gotas Ecocity IDU Gousa"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "A masterpiece of modern suburban living"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$VideoShowcase$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUpStat, {
                            endValue: 10,
                            suffix: "+",
                            label: "Years Experience"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUpStat, {
                            endValue: 500,
                            suffix: "+",
                            label: "Happy Clients"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CountUpStat, {
                            endValue: 50,
                            suffix: "+",
                            label: "Real Estate Experts"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Gotas Website/src/components/VideoShowcase.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
_c1 = VideoShowcase;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountUpStat");
__turbopack_context__.k.register(_c1, "VideoShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Gotas Website/src/components/ProjectsHighlight.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "ProjectsHighlight-module__kYDAoG__arrow",
  "card": "ProjectsHighlight-module__kYDAoG__card",
  "carouselContainer": "ProjectsHighlight-module__kYDAoG__carouselContainer",
  "content": "ProjectsHighlight-module__kYDAoG__content",
  "downloadBtn": "ProjectsHighlight-module__kYDAoG__downloadBtn",
  "downloadIcon": "ProjectsHighlight-module__kYDAoG__downloadIcon",
  "downloadSection": "ProjectsHighlight-module__kYDAoG__downloadSection",
  "header": "ProjectsHighlight-module__kYDAoG__header",
  "headerTop": "ProjectsHighlight-module__kYDAoG__headerTop",
  "heading": "ProjectsHighlight-module__kYDAoG__heading",
  "imageOverlay": "ProjectsHighlight-module__kYDAoG__imageOverlay",
  "imageWrapper": "ProjectsHighlight-module__kYDAoG__imageWrapper",
  "linkBtn": "ProjectsHighlight-module__kYDAoG__linkBtn",
  "scrollBtn": "ProjectsHighlight-module__kYDAoG__scrollBtn",
  "scrollControls": "ProjectsHighlight-module__kYDAoG__scrollControls",
  "section": "ProjectsHighlight-module__kYDAoG__section",
  "tagline": "ProjectsHighlight-module__kYDAoG__tagline",
});
}),
"[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Gotas Website/src/components/ProjectsHighlight.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const projects = [
    {
        id: 'gotas-ecocity-idu-gousa',
        title: 'Gotas Ecocity IDU. Gousa',
        description: 'A harmonious blend of nature and modern living with state-of-the-art facilities.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/gotas-ecocity-idu-gousa'
    },
    {
        id: 'kingsland-idu-gousa',
        title: 'Kingsland IDU/Gousa',
        description: 'Premium luxury estates designed for the elite, offering unmatched comfort and security.',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/kingsland-idu-gousa'
    },
    {
        id: 'kings-garden-estate-kabusa',
        title: 'Kings Garden Estate Kabusa',
        description: 'Your tranquil getaway within the city, featuring serene landscapes and exquisite architecture.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1153&q=80',
        link: '/properties/kings-garden-estate-kabusa'
    },
    {
        id: 'the-aurora-by-gotas',
        title: 'The Aurora By Gotas',
        description: 'A perfected blend of luxury, convenience, nature and smart living on a slim budget.',
        image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
        link: '/properties/the-aurora-by-gotas'
    }
];
function ProjectsHighlight() {
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (direction)=>{
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -380 : 380;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerTop,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
                                    children: "Our Properties"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                                    children: "Projects Highlight"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollControls,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollBtn,
                                    onClick: ()=>scroll('left'),
                                    "aria-label": "Scroll left",
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollBtn,
                                    onClick: ()=>scroll('right'),
                                    "aria-label": "Scroll right",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselContainer,
                    ref: scrollRef,
                    children: projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageOverlay
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper,
                                    style: {
                                        backgroundImage: `url(${project.image})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: project.link,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkBtn,
                                            children: [
                                                "View Project",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                            lineNumber: 71,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                    lineNumber: 68,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadSection,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$src$2f$components$2f$ProjectsHighlight$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].downloadIcon,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 15L8 11H11V3H13V11H16L12 15Z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Gotas__Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 19H20V17H4V19Z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, this),
                            "Download Application Form"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Gotas Website/src/components/ProjectsHighlight.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(ProjectsHighlight, "rUl6RJdP9XfufN21BrtKqIOri0o=");
_c = ProjectsHighlight;
var _c;
__turbopack_context__.k.register(_c, "ProjectsHighlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Gotas%20Website_src_components_560ae5d3._.js.map