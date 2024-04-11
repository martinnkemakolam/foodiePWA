/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --white: #fff;
    --light-white: #ccc;
    --button: #9cf;
    --text-H1: #333;
    --text-p: #444;

}
body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
}
h1, p{
    margin: 0;
}
a{
    text-decoration: none;
    color: #000;
}
section{
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    /* overflow: hidden; */
    /* display: flex; */
    flex-direction: column;
    max-width: 1500px;
    margin: 0 auto;
    padding: 10px 40px; 
    background-color: var(--white);
}
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
}
.header .links{
    display: flex;
    gap: 30px;
    padding: 20px 0;
}
.header .links a{
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 20px;
    color: #333;
    transition: all 300ms;
}
.header .links a:hover{
    color: #ebb569;
    text-decoration: underline;
}
.header .searchbar{
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: #6e6767;
    border-radius: 10px;
    color: white;
}
.header .searchbar input, select{
    border: none;
    color: white;
    outline: none;
    background-color: #6e6767;
}
.header .searchbar select{
    padding: 10px 20px;
}
select option{
    font-size: 20px;
    margin: 10px 0 ;
}
.header .searchbar .line{
    width: 2px;
    background-color: white;
}
.header .searchbar input::placeholder{
    color: white;
}
.categoryBody{
    display: flex;
    margin: 0 auto;
    width: fit-content;
    align-items: center;
    justify-content: start;
    gap: 20px;
    align-content: center;
}
.categoryBody .category{
    width: 100px;
    height: 150px;
    border-radius: 20px;
    background-color: var(--light-white);
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
}
.category img{
    width: 100%;
    height: 60%;
    border-radius: 20px;
}
.category p{
    color: var(--text-p);
    margin: 0;
    font-weight: 500;
    text-transform: capitalize;
}
.foodContainer{
    margin-top: 50px;
}
.foodContainer h2{
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 500;
    color: var(--text-H1);
}
.foodGrid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    gap: 40px;
    max-width: 2000px;
}
.foodGrid .food{
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
    width: 100%;
    cursor:context-menu;
    background-color: white;
    border: 1px solid #6e6767;
    border-radius: 30px;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
}
.food .product{
    width: 100%;
}
.food h1{
    font-size: 40px;
    margin: 0;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
}
.food h2{
    font-size: 20px;
    margin: 0;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
}
.food p{
    font-size: 15px;
    margin: 0;
    font-weight: 400;
    text-align: center;
}
.food .bottom{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}
.food .cartBtn{
    display: flex;
    gap: 5px;
}
.amount{
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    gap: 10px;
}
.cartBtn button, .cmsCard button, label, form button{
    display: flex;
    width: max-content;
    background-color: #ebb569;
    border: none;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

.overlay{
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 11;
    background-color: #00000030;
    position: fixed;
    justify-content: center;
    align-items: center;
}
.checkOutOverlay{
    width: 500px;
    height: fit-content;
    background-color: white;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
}
.checkOutOverlay .close{
    position: absolute;
    right: 30px;
    top: 30px
}
.checkOutOverlay>*{
    gap: 15px;
    flex-direction: column;
    display: flex;
}
.cartBtn button p, .cmsCard button, label, form button{
    font-size: 15px;
    margin: 0;
    font-weight: 700;
    color: var(--text-p);
    /* color: white; */
    width: 100%;
}
label, form button{
    margin: 0 auto;
    width: fit-content;
    padding: 10px 25px;
}

.myCart > h1{
    font-size: 30px;
    text-align: center;
}
.name{
    font-size: 20px;
}
.cartContainer{
    display: flex;
    gap: 20px;
    width: 100%;
    margin-top: 40px;
    justify-content: center;
}
.cartContainer .table{
    flex: 1 0 0;
}
.row{
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
}
.tableBody{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.border{
    padding: 5px 10px;
    border: 1px solid #ebb569;
}
.icon{
    width: 30px;
    height: 30px;
}
.wide{
    width: 150px;
}
.medium{
    width: 75px;
    display: flex;
    gap: 5px;
    justify-content: center;
}
td{
    display: flex;
    width: 100%;
    align-items: center;
}
.checkOut{
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #ebb569;
    padding: 5px 10px;
}
.checkOut button{
    width: 100%;
    height: 30px;
    background-color: #ebb569;
    outline: none;
    border: none;

}

.nodisplay{
    display: none;
}

.flex{
    display: flex;
    justify-content: space-between;
}
.holder{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.cmsCard{
    /* background-color: rgb(223, 220, 220); */
    gap: 5px;
    display: flex;
    border-radius: 3px;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid #6e6767;
}
.cmsCard .proImg{
    width: 100px;
    height: 100px;
}
.cmsCard .detail{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.cmsCard .button{
    display: flex;
    gap: 5px;
}

.imgAdder{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    padding: 20px 10px;
    gap: 20px;
    border: 1px solid #6e6767;
    border-radius: 20px;
}
.imgAdder img{
    border: 1px solid #6e6767;
    width: 300px;
    height: 300px;
    object-fit: fill;
    border-radius: 20px;
}

.add{
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 2fr;
}
.notification{
    width: 100%;
    padding: 20px 5px;
    font-size: 20px;
    font-weight: 500;
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 10000;
    box-sizing: border-box;
    transition: all 300ms;
    text-align: center;
    background-color: #eee;
}


.myCart.left{
    right: -1000%;
}
.shoppingCart{
    width: 700px;
    height: 500px;
    overflow: auto;
    display: grid;
    padding: 20px;
    gap: 30px;
    background-color: white;
    border-radius: 20px;
}
/* .icon{
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
} */
.shoppingCart .head{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.head h1{
    font-size: 20px;
    color: var(--text-H1);
    font-weight: 500;
}
.shoppingCart .head button{
    color: red;
    text-decoration: underline;
    background-color: transparent;
    border: none;
    font-size: 20px;
    outline: none;
}
.shoppingCart .body{
    display: grid;
    transition: all 300ms ;
}
.body.remove{
    background-color: rebeccapurple;
    position: absolute;
    left: 100%;
}
.body .obj{
    display: flex;
    align-items: center;
    justify-content: space-between;   
}
.obj h1{
    font-size: 35px;
    font-weight: 900;
    color: var(--text-H1);
}
.obj p{
    font-size: 25px;
    font-weight: 900;
}
.rest{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: 0 auto;
}
.rest.remove{
    display: none;
}
.rest img{
    width: 100%;
}
.obj img{
    width: 20%;
}
.shoppingCart .total{
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-self: end;
}
.total h2{
    margin: 0;
}
.total p{
    margin: 0;
    font-size: 30px;
    font-weight: 900;
}
form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
form div{
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    border: 1px solid #6e6767;
}
form textarea{
    height: 300px;
    resize: none;
}
input:focus{
    border-bottom: 1px solid black;
}
form .label{
    font-size: 15px;
}

.order{
    position: fixed;
    top: -1000px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background-color: var(--button);
}
.order.show{
    top: 0;
}
.order form{
    /* background-color: white; */
    width: fit-content;
    padding: 14px 20px;
    width: 400px;
    background-color: white;
}
.order form div{
    display: flex;
    gap: 15px;
    width: 100%;
    flex-direction: column;
}
.pending{
    margin-top: 50px
}
.scroll{
    width: 100%;
    overflow-y: auto;
}
footer{
    position: fixed;
    bottom: 0;
    color: white;
    padding: 20px;
    box-sizing: border-box;
    background: #333;
    width: 100%;
    left: 0;
    display: none;
    justify-content: space-between;
}
.category.active{
    scale: 0.9;
    border: 1px solid #333;
    /* opacity: 0.7; */
}
@media (max-width: 800px) {
    section{
        padding: 0;
    }
    .header{
        z-index: 1;
        position: sticky;
        padding: 20px 30px;
        top: 0px;
        box-sizing: border-box;
        box-shadow: -10px -19px 50px black;
        flex-direction: column;
    }
    .searchbar{
        width: 100%;
        box-sizing: border-box;
    }
    .searchbar input{
        flex: 1 0 0;
    }
    .foodContainer{
        padding: 30px;
    }
    .categoryBody{
        margin-top: 30px;
    }
    .foodGrid{
        grid-template-columns: 1fr;
    }

    .myCart{
        padding: 0;
    }
    .shoppingCart{
        height: 100%;
        overflow: auto;
    }
    .icon{
        width: 30px;
        height: 30px;
        top: 50px;
    }
    .obj h1, .obj p{
        font-size: 20px;
    }
    .order form{
        width: fit-content;
    }
    .cartContainer{
        flex-direction: column;
        align-items: center;
    }
}`, "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,cAAc;;AAElB;AACA;IACI,4DAA4D;IAC5D,SAAS;IACT,UAAU;AACd;AACA;IACI,SAAS;AACb;AACA;IACI,qBAAqB;IACrB,WAAW;AACf;AACA;IACI,WAAW;IACX,mBAAmB;IACnB,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,eAAe;AACnB;AACA;IACI,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;AACjB;AACA;IACI,WAAW;IACX,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,oBAAoB;IACpB,SAAS;IACT,gBAAgB;IAChB,0BAA0B;AAC9B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;IACT,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;IACf,SAAS;IACT,kBAAkB;IAClB,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,SAAS;IACT,kBAAkB;IAClB,0BAA0B;IAC1B,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,SAAS;IACT,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,SAAS;AACb;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,WAAW;IACX,2BAA2B;IAC3B,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX;AACJ;AACA;IACI,SAAS;IACT,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,eAAe;IACf,SAAS;IACT,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,gBAAgB;IAChB,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,QAAQ;IACR,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yBAAyB;IACzB,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,YAAY;;AAEhB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,0CAA0C;IAC1C,QAAQ;IACR,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;IACT,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;AAClC;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,MAAM;IACN,WAAW;IACX,cAAc;IACd,sBAAsB;IACtB,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,aAAa;IACb,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;;;;;GAMG;AACH;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,eAAe;IACf,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,UAAU;IACV,0BAA0B;IAC1B,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;AACA;IACI,aAAa;AACjB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;AACd;AACA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;AACA;IACI,SAAS;AACb;AACA;IACI,SAAS;IACT,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,8BAA8B;AAClC;AACA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,+BAA+B;AACnC;AACA;IACI,MAAM;AACV;AACA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,sBAAsB;AAC1B;AACA;IACI;AACJ;AACA;IACI,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,SAAS;IACT,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,WAAW;IACX,OAAO;IACP,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,UAAU;IACV,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;QACV,gBAAgB;QAChB,kBAAkB;QAClB,QAAQ;QACR,sBAAsB;QACtB,kCAAkC;QAClC,sBAAsB;IAC1B;IACA;QACI,WAAW;QACX,sBAAsB;IAC1B;IACA;QACI,WAAW;IACf;IACA;QACI,aAAa;IACjB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,0BAA0B;IAC9B;;IAEA;QACI,UAAU;IACd;IACA;QACI,YAAY;QACZ,cAAc;IAClB;IACA;QACI,WAAW;QACX,YAAY;QACZ,SAAS;IACb;IACA;QACI,eAAe;IACnB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,sBAAsB;QACtB,mBAAmB;IACvB;AACJ","sourcesContent":[":root{\r\n    --white: #fff;\r\n    --light-white: #ccc;\r\n    --button: #9cf;\r\n    --text-H1: #333;\r\n    --text-p: #444;\r\n\r\n}\r\nbody{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nh1, p{\r\n    margin: 0;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: #000;\r\n}\r\nsection{\r\n    width: 100%;\r\n    height: fit-content;\r\n    box-sizing: border-box;\r\n    /* overflow: hidden; */\r\n    /* display: flex; */\r\n    flex-direction: column;\r\n    max-width: 1500px;\r\n    margin: 0 auto;\r\n    padding: 10px 40px; \r\n    background-color: var(--white);\r\n}\r\n.header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: white;\r\n}\r\n.header .links{\r\n    display: flex;\r\n    gap: 30px;\r\n    padding: 20px 0;\r\n}\r\n.header .links a{\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: #333;\r\n    transition: all 300ms;\r\n}\r\n.header .links a:hover{\r\n    color: #ebb569;\r\n    text-decoration: underline;\r\n}\r\n.header .searchbar{\r\n    display: flex;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    background-color: #6e6767;\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n.header .searchbar input, select{\r\n    border: none;\r\n    color: white;\r\n    outline: none;\r\n    background-color: #6e6767;\r\n}\r\n.header .searchbar select{\r\n    padding: 10px 20px;\r\n}\r\nselect option{\r\n    font-size: 20px;\r\n    margin: 10px 0 ;\r\n}\r\n.header .searchbar .line{\r\n    width: 2px;\r\n    background-color: white;\r\n}\r\n.header .searchbar input::placeholder{\r\n    color: white;\r\n}\r\n.categoryBody{\r\n    display: flex;\r\n    margin: 0 auto;\r\n    width: fit-content;\r\n    align-items: center;\r\n    justify-content: start;\r\n    gap: 20px;\r\n    align-content: center;\r\n}\r\n.categoryBody .category{\r\n    width: 100px;\r\n    height: 150px;\r\n    border-radius: 20px;\r\n    background-color: var(--light-white);\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n}\r\n.category img{\r\n    width: 100%;\r\n    height: 60%;\r\n    border-radius: 20px;\r\n}\r\n.category p{\r\n    color: var(--text-p);\r\n    margin: 0;\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n}\r\n.foodContainer{\r\n    margin-top: 50px;\r\n}\r\n.foodContainer h2{\r\n    text-transform: capitalize;\r\n    font-size: 35px;\r\n    font-weight: 500;\r\n    color: var(--text-H1);\r\n}\r\n.foodGrid{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 50px;\r\n    gap: 40px;\r\n    max-width: 2000px;\r\n}\r\n.foodGrid .food{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 14px;\r\n    height: 100%;\r\n    width: 100%;\r\n    cursor:context-menu;\r\n    background-color: white;\r\n    border: 1px solid #6e6767;\r\n    border-radius: 30px;\r\n    overflow: hidden;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n}\r\n.food .product{\r\n    width: 100%;\r\n}\r\n.food h1{\r\n    font-size: 40px;\r\n    margin: 0;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    font-weight: 700;\r\n}\r\n.food h2{\r\n    font-size: 20px;\r\n    margin: 0;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    font-weight: 700;\r\n}\r\n.food p{\r\n    font-size: 15px;\r\n    margin: 0;\r\n    font-weight: 400;\r\n    text-align: center;\r\n}\r\n.food .bottom{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    align-content: center;\r\n    align-items: center;\r\n}\r\n.food .cartBtn{\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n.amount{\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n    padding: 20px;\r\n    cursor: pointer;\r\n    gap: 10px;\r\n}\r\n.cartBtn button, .cmsCard button, label, form button{\r\n    display: flex;\r\n    width: max-content;\r\n    background-color: #ebb569;\r\n    border: none;\r\n    border-radius: 10px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    cursor: pointer;\r\n}\r\n\r\n.overlay{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 11;\r\n    background-color: #00000030;\r\n    position: fixed;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.checkOutOverlay{\r\n    width: 500px;\r\n    height: fit-content;\r\n    background-color: white;\r\n    padding: 30px;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n}\r\n.checkOutOverlay .close{\r\n    position: absolute;\r\n    right: 30px;\r\n    top: 30px\r\n}\r\n.checkOutOverlay>*{\r\n    gap: 15px;\r\n    flex-direction: column;\r\n    display: flex;\r\n}\r\n.cartBtn button p, .cmsCard button, label, form button{\r\n    font-size: 15px;\r\n    margin: 0;\r\n    font-weight: 700;\r\n    color: var(--text-p);\r\n    /* color: white; */\r\n    width: 100%;\r\n}\r\nlabel, form button{\r\n    margin: 0 auto;\r\n    width: fit-content;\r\n    padding: 10px 25px;\r\n}\r\n\r\n.myCart > h1{\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n.name{\r\n    font-size: 20px;\r\n}\r\n.cartContainer{\r\n    display: flex;\r\n    gap: 20px;\r\n    width: 100%;\r\n    margin-top: 40px;\r\n    justify-content: center;\r\n}\r\n.cartContainer .table{\r\n    flex: 1 0 0;\r\n}\r\n.row{\r\n    display: flex;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.tableBody{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n.border{\r\n    padding: 5px 10px;\r\n    border: 1px solid #ebb569;\r\n}\r\n.icon{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n.wide{\r\n    width: 150px;\r\n}\r\n.medium{\r\n    width: 75px;\r\n    display: flex;\r\n    gap: 5px;\r\n    justify-content: center;\r\n}\r\ntd{\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n.checkOut{\r\n    width: 400px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    border: 1px solid #ebb569;\r\n    padding: 5px 10px;\r\n}\r\n.checkOut button{\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: #ebb569;\r\n    outline: none;\r\n    border: none;\r\n\r\n}\r\n\r\n.nodisplay{\r\n    display: none;\r\n}\r\n\r\n.flex{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.holder{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n.cmsCard{\r\n    /* background-color: rgb(223, 220, 220); */\r\n    gap: 5px;\r\n    display: flex;\r\n    border-radius: 3px;\r\n    align-items: center;\r\n    padding: 10px 15px;\r\n    border: 1px solid #6e6767;\r\n}\r\n.cmsCard .proImg{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.cmsCard .detail{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n.cmsCard .button{\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n\r\n.imgAdder{\r\n    width: 100%;\r\n    display: flex;\r\n    box-sizing: border-box;\r\n    flex-direction: column;\r\n    padding: 20px 10px;\r\n    gap: 20px;\r\n    border: 1px solid #6e6767;\r\n    border-radius: 20px;\r\n}\r\n.imgAdder img{\r\n    border: 1px solid #6e6767;\r\n    width: 300px;\r\n    height: 300px;\r\n    object-fit: fill;\r\n    border-radius: 20px;\r\n}\r\n\r\n.add{\r\n    display: grid;\r\n    gap: 20px;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n.notification{\r\n    width: 100%;\r\n    padding: 20px 5px;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    position: fixed;\r\n    top: 0;\r\n    left: -100%;\r\n    z-index: 10000;\r\n    box-sizing: border-box;\r\n    transition: all 300ms;\r\n    text-align: center;\r\n    background-color: #eee;\r\n}\r\n\r\n\r\n.myCart.left{\r\n    right: -1000%;\r\n}\r\n.shoppingCart{\r\n    width: 700px;\r\n    height: 500px;\r\n    overflow: auto;\r\n    display: grid;\r\n    padding: 20px;\r\n    gap: 30px;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n}\r\n/* .icon{\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 30px;\r\n    width: 50px;\r\n    height: 50px;\r\n} */\r\n.shoppingCart .head{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n.head h1{\r\n    font-size: 20px;\r\n    color: var(--text-H1);\r\n    font-weight: 500;\r\n}\r\n.shoppingCart .head button{\r\n    color: red;\r\n    text-decoration: underline;\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 20px;\r\n    outline: none;\r\n}\r\n.shoppingCart .body{\r\n    display: grid;\r\n    transition: all 300ms ;\r\n}\r\n.body.remove{\r\n    background-color: rebeccapurple;\r\n    position: absolute;\r\n    left: 100%;\r\n}\r\n.body .obj{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;   \r\n}\r\n.obj h1{\r\n    font-size: 35px;\r\n    font-weight: 900;\r\n    color: var(--text-H1);\r\n}\r\n.obj p{\r\n    font-size: 25px;\r\n    font-weight: 900;\r\n}\r\n.rest{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 0 auto;\r\n}\r\n.rest.remove{\r\n    display: none;\r\n}\r\n.rest img{\r\n    width: 100%;\r\n}\r\n.obj img{\r\n    width: 20%;\r\n}\r\n.shoppingCart .total{\r\n    display: flex;\r\n    gap: 10px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-self: end;\r\n}\r\n.total h2{\r\n    margin: 0;\r\n}\r\n.total p{\r\n    margin: 0;\r\n    font-size: 30px;\r\n    font-weight: 900;\r\n}\r\nform{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 15px;\r\n}\r\nform div{\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px 15px;\r\n    display: flex;\r\n    gap: 10px;\r\n    flex-direction: column;\r\n    border: 1px solid #6e6767;\r\n}\r\nform textarea{\r\n    height: 300px;\r\n    resize: none;\r\n}\r\ninput:focus{\r\n    border-bottom: 1px solid black;\r\n}\r\nform .label{\r\n    font-size: 15px;\r\n}\r\n\r\n.order{\r\n    position: fixed;\r\n    top: -1000px;\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n    background-color: var(--button);\r\n}\r\n.order.show{\r\n    top: 0;\r\n}\r\n.order form{\r\n    /* background-color: white; */\r\n    width: fit-content;\r\n    padding: 14px 20px;\r\n    width: 400px;\r\n    background-color: white;\r\n}\r\n.order form div{\r\n    display: flex;\r\n    gap: 15px;\r\n    width: 100%;\r\n    flex-direction: column;\r\n}\r\n.pending{\r\n    margin-top: 50px\r\n}\r\n.scroll{\r\n    width: 100%;\r\n    overflow-y: auto;\r\n}\r\nfooter{\r\n    position: fixed;\r\n    bottom: 0;\r\n    color: white;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n    background: #333;\r\n    width: 100%;\r\n    left: 0;\r\n    display: none;\r\n    justify-content: space-between;\r\n}\r\n.category.active{\r\n    scale: 0.9;\r\n    border: 1px solid #333;\r\n    /* opacity: 0.7; */\r\n}\r\n@media (max-width: 800px) {\r\n    section{\r\n        padding: 0;\r\n    }\r\n    .header{\r\n        z-index: 1;\r\n        position: sticky;\r\n        padding: 20px 30px;\r\n        top: 0px;\r\n        box-sizing: border-box;\r\n        box-shadow: -10px -19px 50px black;\r\n        flex-direction: column;\r\n    }\r\n    .searchbar{\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    .searchbar input{\r\n        flex: 1 0 0;\r\n    }\r\n    .foodContainer{\r\n        padding: 30px;\r\n    }\r\n    .categoryBody{\r\n        margin-top: 30px;\r\n    }\r\n    .foodGrid{\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .myCart{\r\n        padding: 0;\r\n    }\r\n    .shoppingCart{\r\n        height: 100%;\r\n        overflow: auto;\r\n    }\r\n    .icon{\r\n        width: 30px;\r\n        height: 30px;\r\n        top: 50px;\r\n    }\r\n    .obj h1, .obj p{\r\n        font-size: 20px;\r\n    }\r\n    .order form{\r\n        width: fit-content;\r\n    }\r\n    .cartContainer{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./component/pug/add.pug":
/*!*******************************!*\
  !*** ./component/pug/add.pug ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection\u003E\u003Cheader-element\u003E\u003C\u002Fheader-element\u003E\u003Csection class=\"add\"\u003E\u003Cdiv class=\"left\"\u003E\u003Caddimage-element imgsrc=\".\u002Fimages\u002Fburger.jpg\"\u003E\u003C\u002Faddimage-element\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"right\"\u003E\u003Cform-element\u003E\u003C\u002Fform-element\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/card.pug":
/*!********************************!*\
  !*** ./component/pug/card.pug ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop) {pug_html = pug_html + "\u003Cdiv class=\"food\"\u003E\u003Cimg" + (" class=\"product\""+pug.attr("src", prop.src, true, true)) + "\u003E\u003Ch1\u003E" + (pug.escape(null == (pug_interp = prop.name) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = prop.detail) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"bottom\"\u003E\u003Ca" + (pug.attr("href", `.#/product/${prop.uid}`, true, true)) + "\u003Eview product \u003C\u002Fa\u003E\u003Cdiv class=\"cartBtn\"\u003E\u003Ch2\u003E" + (pug.escape(null == (pug_interp = prop.price) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cbutton data-addtocart\u003E\u003Cimg width=\"30px\" height=\"30px\" src=\".\u002Fimages\u002Ficons\u002Fcart.png\" data-addtocart\u003E\u003Cp data-addtocart\u003EAdd to cart\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/cardHolder.pug":
/*!**************************************!*\
  !*** ./component/pug/cardHolder.pug ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {pug_html = pug_html + "\u003Cdiv class=\"foodGrid\"\u003E";
if (state.model.product.length > 0) {
// iterate state.model.product
;(function(){
  var $$obj = state.model.product;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var value = $$obj[index];
pug_html = pug_html + "\u003Ccard-element" + (pug.attr("amount", value.amount, true, true)+pug.attr("name", value.name , true, true)+pug.attr("count", value.count, true, true)+pug.attr("src", value.foodsrc, true, true)+pug.attr("detail", value.detail, true, true)+pug.attr("uid", value.uid, true, true)) + "\u003E\u003C\u002Fcard-element\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var value = $$obj[index];
pug_html = pug_html + "\u003Ccard-element" + (pug.attr("amount", value.amount, true, true)+pug.attr("name", value.name , true, true)+pug.attr("count", value.count, true, true)+pug.attr("src", value.foodsrc, true, true)+pug.attr("detail", value.detail, true, true)+pug.attr("uid", value.uid, true, true)) + "\u003E\u003C\u002Fcard-element\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cdiv\u003ENo product currently available\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/cart.pug":
/*!********************************!*\
  !*** ./component/pug/cart.pug ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"myCart\"\u003E\u003Coverlay-element\u003E\u003C\u002Foverlay-element\u003E\u003Cheader-element\u003E\u003C\u002Fheader-element\u003E\u003Ch1\u003ECart\u003C\u002Fh1\u003E\u003Cdiv class=\"cartContainer\"\u003E\u003Ctable-element\u003E\u003C\u002Ftable-element\u003E\u003Ccheckout-element\u003E\u003C\u002Fcheckout-element\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/checkout.pug":
/*!************************************!*\
  !*** ./component/pug/checkout.pug ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {pug_html = pug_html + "\u003Cdiv class=\"checkOut\"\u003E\u003Ch1\u003ETotal\u003C\u002Fh1\u003E\u003Cdiv class=\"flex\"\u003E\u003Cp class=\"bold\"\u003ESub-total\u003C\u002Fp\u003E\u003Cp class=\"subtotal\"\u003E$" + (pug.escape(null == (pug_interp = state.model.sum) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"flex\"\u003E\u003Cp\u003EDelivery\u003C\u002Fp\u003E\u003Cimg width=\"15px\" height=\"15px\" src=\".\u002Fimages\u002Ficons\u002Finformation.png\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton data-checkout\u003Echeck out\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/checkoutform.pug":
/*!****************************************!*\
  !*** ./component/pug/checkoutform.pug ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {pug_html = pug_html + "\u003Cdiv\u003E\u003Ch1\u003ECheck out form\u003C\u002Fh1\u003E\u003Cp\u003EEnter your detail bellow to order \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cform\u003E\u003Cdiv\u003E\u003Cp\u003ECard number\u003C\u002Fp\u003E\u003Cinput type=\"number\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cp\u003ECVV number\u003C\u002Fp\u003E\u003Cinput type=\"number\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cp\u003EExpire date\u003C\u002Fp\u003E\u003Cinput type=\"number\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton\u003EPay " + (pug.escape(null == (pug_interp = state.model.sum) ? "" : pug_interp)) + " now\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/cms.pug":
/*!*******************************!*\
  !*** ./component/pug/cms.pug ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop) {pug_html = pug_html + "\u003Cdiv class=\"cmsCard\"\u003E\u003Cimg" + (" class=\"proImg\""+pug.attr("src", prop.imgsrc, true, true)) + "\u003E\u003Cdiv class=\"detail\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = prop.name) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = prop.extra) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp\u003E$" + (pug.escape(null == (pug_interp = prop.price) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"button\"\u003E\u003Cbutton data-edit\u003E\u003Cimg class=\"icon\" src=\".\u002Fimages\u002Ficons\u002Fedit.png\"\u003E\u003Ca" + (pug.attr("href", `.#/cms/edit/${prop.uid}`, true, true)) + "\u003E Edit\u003C\u002Fa\u003E\u003C\u002Fbutton\u003E\u003Cbutton data-delete\u003E\u003Cimg class=\"icon\" src=\".\u002Fimages\u002Ficons\u002Ftrash.png\"\u003E\u003CP\u003EDelete\u003C\u002FP\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/cmsholder.pug":
/*!*************************************!*\
  !*** ./component/pug/cmsholder.pug ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {pug_html = pug_html + "\u003Cdiv class=\"holder\"\u003E";
if (state.model.product.length > 0) {
// iterate state.model.product
;(function(){
  var $$obj = state.model.product;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var value = $$obj[index];
pug_html = pug_html + "\u003Ccms-element" + (pug.attr("imgsrc", value.foodsrc, true, true)+pug.attr("name", value.name, true, true)+pug.attr("extra", value.detail, true, true)+pug.attr("price", value.price, true, true)+pug.attr("uid", value.uid, true, true)) + "\u003E\u003C\u002Fcms-element\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var value = $$obj[index];
pug_html = pug_html + "\u003Ccms-element" + (pug.attr("imgsrc", value.foodsrc, true, true)+pug.attr("name", value.name, true, true)+pug.attr("extra", value.detail, true, true)+pug.attr("price", value.price, true, true)+pug.attr("uid", value.uid, true, true)) + "\u003E\u003C\u002Fcms-element\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cdiv\u003ENo product currently in cms\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/cmspage.pug":
/*!***********************************!*\
  !*** ./component/pug/cmspage.pug ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {pug_html = pug_html + "\u003Csection\u003E\u003Cheader-element\u003E\u003C\u002Fheader-element\u003E";
if (state.model.isAuthenticated) {
pug_html = pug_html + "\u003Ccmsholder-element\u003E\u003C\u002Fcmsholder-element\u003E";
}
else {
pug_html = pug_html + "\u003Csignin-element\u003E\u003C\u002Fsignin-element\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/count.pug":
/*!*********************************!*\
  !*** ./component/pug/count.pug ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop) {pug_html = pug_html + "\u003Cdiv class=\"amount\"\u003E\u003Cdiv data-minus\u003E-\u003C\u002Fdiv\u003E\u003Cdiv class=\"border\" data-count\u003E" + (pug.escape(null == (pug_interp = prop.count) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv data-plus\u003E+\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/edit.pug":
/*!********************************!*\
  !*** ./component/pug/edit.pug ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop, state) {pug_html = pug_html + "\u003Csection\u003E\u003C\u002Fsection\u003E";
let val = state.model.product.filter(e=> +e.uid === +prop.param)
{
pug_html = pug_html + "\u003Cheader-element\u003E\u003C\u002Fheader-element\u003E";
if (val.length > 0) {
pug_html = pug_html + "\u003Csection class=\"add\"\u003E\u003Cdiv class=\"left\"\u003E\u003Caddimage-element" + (pug.attr("imgsrc", val[0].foodsrc, true, true)) + "\u003E\u003C\u002Faddimage-element\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"right\"\u003E\u003Cform-element" + (pug.attr("name", val[0].name, true, true)+pug.attr("detail", val[0].detail, true, true)+pug.attr("price", val[0].price, true, true)+pug.attr("imgsrc", val[0].foodsrc, true, true)+pug.attr("uid", val[0].uid, true, true)+" edit=\"true\"") + "\u003E\u003C\u002Fform-element\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
}
else {
pug_html = pug_html + "\u003Ch1\u003EProduct doesn't exist \u003C\u002Fh1\u003E";
}
}}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/form.pug":
/*!********************************!*\
  !*** ./component/pug/form.pug ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop) {pug_html = pug_html + "\u003Cdiv class=\"imgAdder\"\u003E\u003Ch1\u003EGeneral\u003C\u002Fh1\u003E\u003Cform\u003E\u003Cdiv\u003E\u003Cp\u003EProduct name\u003C\u002Fp\u003E\u003Cinput" + (" type=\"text\" placeholder=\"Enter product name\" id=\"name\""+pug.attr("value", prop.name, true, true)) + "\u003E\u003Cp\u003EProduct names is recommended to be unique\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cp\u003EProduct description\u003C\u002Fp\u003E\u003Ctextarea id=\"detail\"\u003E" + (pug.escape(null == (pug_interp = prop.detail) ? "" : pug_interp)) + "\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cp\u003EProduct price\u003C\u002Fp\u003E\u003Cinput" + (" type=\"number\" placeholder=\"Enter product price\" id=\"price\""+pug.attr("value", prop.price, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
if (prop.edit) {
pug_html = pug_html + "\u003Cbutton data-edit\u003EEdit\u003C\u002Fbutton\u003E";
}
else {
pug_html = pug_html + "\u003Cbutton data-add\u003ESubmit\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/header.pug":
/*!**********************************!*\
  !*** ./component/pug/header.pug ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state, url) {pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"links\"\u003E\u003Ca href=\".\u002F#\u002F\"\u003EProduct\u003C\u002Fa\u003E";
if (state.model.isAuthenticated) {
pug_html = pug_html + "\u003Ca href=\".\u002F#\u002Fcms\"\u003ECMS\u003C\u002Fa\u003E";
}
pug_html = pug_html + "\u003Ca href=\".\u002F#\u002Fcart\"\u003ECart\u003C\u002Fa\u003E\u003Ca href=\".\u002F#\u002Forders\"\u003EOrders\u003C\u002Fa\u003E";
if (!state.model.isLoggedin && url !== '#/cms') {
pug_html = pug_html + "\u003Cp data-login\u003ESignin\u002FSignup\u003C\u002Fp\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if (url === '#/') {
pug_html = pug_html + "\u003Cdiv class=\"searchbar\"\u003E\u003Cimg width=\"30px\" height=\"30px\" src=\"images\u002Ficons\u002Fsearch.png\"\u003E\u003Cinput data-input placeholder=\"Search\"\u003E\u003Cdiv class=\"line\"\u003E\u003C\u002Fdiv\u003E\u003Cselect data-option\u003E\u003Coption data-option value=\"food\" selected\u003EFood\u003C\u002Foption\u003E\u003Coption data-option value=\"food 1\"\u003EFood 1\u003C\u002Foption\u003E\u003Coption data-option value=\"food 2\"\u003EFood 2\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
}
if (url === '#/cms' && state.model.isAuthenticated) {
pug_html = pug_html + "\u003Cdiv class=\"searchbar\"\u003E\u003Cimg width=\"30px\" height=\"30px\" src=\"images\u002Ficons\u002Fsearch.png\"\u003E\u003Cinput data-input placeholder=\"Search\"\u003E\u003Cdiv class=\"line\"\u003E\u003C\u002Fdiv\u003E\u003Cbutton\u003E\u003Ca href=\".\u002F#\u002Fcms\u002Fadd\"\u003EAdd a product\u003C\u002Fa\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/img.pug":
/*!*******************************!*\
  !*** ./component/pug/img.pug ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop) {pug_html = pug_html + "\u003Cdiv class=\"imgAdder\"\u003E\u003Ch1\u003EThumbnail \u003C\u002Fh1\u003E\u003Cimg" + (pug.attr("src", prop.imgsrc, true, true)) + "\u003E\u003Cp\u003ESet the product thumbnail image. Only *.png, *.jpg and *.jpeg files are supported\u003C\u002Fp\u003E\u003Cinput class=\"nodisplay\" type=\"file\" id=\"selector\" accept=\"image\u002F*\" data-file\u003E\u003Clabel for=\"selector\"\u003ESelect image\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E";}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/order.pug":
/*!*********************************!*\
  !*** ./component/pug/order.pug ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {pug_mixins["row"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv\u003E";
if (state.model.order > 1) {
// iterate state.model.order
;(function(){
  var $$obj = state.model.order;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var value = $$obj[index];
pug_html = pug_html + "\u003Cdiv\u003E \u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var value = $$obj[index];
pug_html = pug_html + "\u003Cdiv\u003E \u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Ch1\u003ENo product\u003C\u002Fh1\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003Csection\u003E\u003Cheader-element\u003E\u003C\u002Fheader-element\u003E\u003Ch1\u003EOrder\u003C\u002Fh1\u003E\u003Cdiv\u003E\u003Cdiv\u003E\u003Cp\u003EOrder\u003C\u002Fp\u003E\u003Cp\u003EAmount\u003C\u002Fp\u003E\u003Cp\u003EPrice\u003C\u002Fp\u003E\u003Cp\u003EOrder number\u003C\u002Fp\u003E\u003Cp\u003EOrder date\u003C\u002Fp\u003E\u003Cp\u003EDelivery date \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
pug_mixins["row"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/overlay.pug":
/*!***********************************!*\
  !*** ./component/pug/overlay.pug ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {if (state.model.showOverlay) {
pug_html = pug_html + "\u003Cdiv class=\"overlay\"\u003E\u003Cdiv class=\"checkOutOverlay\"\u003E\u003Cdiv class=\"close\" data-close\u003Eclose\u003C\u002Fdiv\u003E";
if (state.model.isLoggedin) {
pug_html = pug_html + "\u003Ccheckoutform-element\u003E\u003C\u002Fcheckoutform-element\u003E";
}
else {
pug_html = pug_html + "\u003Csignin-element\u003E \u003C\u002Fsignin-element\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/product.pug":
/*!***********************************!*\
  !*** ./component/pug/product.pug ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection\u003E\u003Coverlay-element\u003E\u003C\u002Foverlay-element\u003E\u003Cheader-element\u003E\u003C\u002Fheader-element\u003E\u003Cfooter\u003E\u003Cp\u003EInstall our application\u003C\u002Fp\u003E\u003Cbutton id=\"install\"\u003EInstall\u003C\u002Fbutton\u003E\u003C\u002Ffooter\u003E\u003Cdiv class=\"foodContainer\"\u003E\u003Cholder-element\u003E\u003C\u002Fholder-element\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/product[id].pug":
/*!***************************************!*\
  !*** ./component/pug/product[id].pug ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop, state) {let val = state.model.product.filter(e=> +e.uid === +prop.param)
pug_html = pug_html + "\u003Csection\u003E\u003Cheader-component\u003E\u003C\u002Fheader-component\u003E";
if (val.length > 0) {
pug_html = pug_html + "\u003Cdiv\u003E \u003Cimg" + (pug.attr("src", val[0].foodsrc, true, true)) + "\u003E\u003Cdiv\u003E \u003Ch1\u003E" + (pug.escape(null == (pug_interp = val[0].name) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = val[0].detail) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Ch2\u003E" + (pug.escape(null == (pug_interp = val[0].price) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003Cdiv\u003E \u003Camount-element" + (pug.attr("count", val[0].count, true, true)) + "\u003E\u003C\u002Famount-element\u003E\u003Cbutton data-addtocart\u003E\u003Cimg width=\"30px\" height=\"30px\" src=\".\u002Fimages\u002Ficons\u002Fcart.png\" data-addtocart\u003E\u003Cp data-addtocart\u003EAdd to cart\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E \u003Ch2\u003EReview\u003C\u002Fh2\u003E";
if (val[0].review.length > 0) {
pug_html = pug_html + "\u003Cdiv\u003E \u003Cdiv\u003E \u003Cimg src=\"\" alt=\"\"\u003E\u003Cdiv\u003E \u003Ch3\u003EName\u003C\u002Fh3\u003E\u003Cstar-component count=\"3\"\u003E\u003C\u002Fstar-component\u003E\u003Cp\u003ELorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit animi quia recusandae totam accusamus\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E \u003Cimg src=\"\" alt=\"\"\u003E\u003Cdiv\u003E \u003Ch3\u003EName\u003C\u002Fh3\u003E\u003Cstar-component count=\"3\"\u003E\u003C\u002Fstar-component\u003E\u003Cp\u003ELorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit animi quia recusandae totam accusamus\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Ch1\u003ENo reviews\u003C\u002Fh1\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\u003Ch1\u003EProduct doesn't exist \u003C\u002Fh1\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E";}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/roll.pug":
/*!********************************!*\
  !*** ./component/pug/roll.pug ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (prop) {pug_html = pug_html + "\u003Cdiv class=\"row border\"\u003E\u003Cdiv class=\"wide\"\u003E\u003Cimg" + (pug.attr("src", prop.imgsrc, true, true)+" width=\"50px\" height=\"50px\"") + "\u003E\u003Cdiv\u003E\u003Ch1 class=\"name\"\u003E" + (pug.escape(null == (pug_interp = prop.name) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = prop.number) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\"\u003E\u003Camount-element" + (pug.attr("count", prop.count, true, true)) + "\u003E\u003C\u002Famount-element\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\"\u003E $" + (pug.escape(null == (pug_interp = prop.price) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\"\u003E$" + (pug.escape(null == (pug_interp = prop.total) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\" data-remove\u003E\u003Cimg src=\".\u002Fimages\u002Ficons\u002Ftrash.png\" width=\"30px\" height=\"30px\" data-remove\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"prop" in locals_for_with?locals_for_with.prop:typeof prop!=="undefined"?prop:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/signin.pug":
/*!**********************************!*\
  !*** ./component/pug/signin.pug ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {pug_html = pug_html + "\u003Cdiv\u003E";
if (state.model.loginForm) {
pug_html = pug_html + "\u003Cp\u003EDon't have an account?\u003C\u002Fp\u003E\u003Cspan data-toggle\u003ESign up.\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cp\u003EAlready have an account?\u003C\u002Fp\u003E\u003Cspan data-toggle\u003ESign in.\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
if (state.model.loginForm) {
pug_html = pug_html + "\u003Ch1\u003ESign in\u003C\u002Fh1\u003E";
}
else {
pug_html = pug_html + "\u003Ch1\u003ESign up\u003C\u002Fh1\u003E";
}
pug_html = pug_html + "\u003Cdiv\u003E\u003Cform\u003E\u003Cdiv\u003E\u003Cp\u003EEmail:\u003C\u002Fp\u003E\u003Cinput type=\"email\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cp\u003EPassword:\u003C\u002Fp\u003E\u003Cinput type=\"password\"\u003E\u003C\u002Fdiv\u003E";
if (state.model.loginForm) {
pug_html = pug_html + "\u003Cdiv\u003E\u003Cinput type=\"checkbox\"\u003E\u003Cp\u003EI've read and agreed with the terms and conditions\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
}
if (state.model.loginForm) {
pug_html = pug_html + "\u003Cbutton\u003ESign in\u003C\u002Fbutton\u003E";
}
else {
pug_html = pug_html + "\u003Cbutton\u003ESign up\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./component/pug/table.pug":
/*!*********************************!*\
  !*** ./component/pug/table.pug ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (state) {let prod = state.model.product.filter((ele)=> ele.count>0)
pug_mixins["rows"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (prod.length > 0) {
// iterate prod
;(function(){
  var $$obj = prod;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var value = $$obj[index];
pug_html = pug_html + "\u003Croll-element" + (pug.attr("imgsrc", value.foodsrc, true, true)+pug.attr("number", value.uid , true, true)+pug.attr("name", value.name , true, true)+pug.attr("count", value.count, true, true)+pug.attr("price", value.price , true, true)+pug.attr("total", value.price * value.count, true, true)) + "\u003E\u003C\u002Froll-element\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var value = $$obj[index];
pug_html = pug_html + "\u003Croll-element" + (pug.attr("imgsrc", value.foodsrc, true, true)+pug.attr("number", value.uid , true, true)+pug.attr("name", value.name , true, true)+pug.attr("count", value.count, true, true)+pug.attr("price", value.price , true, true)+pug.attr("total", value.price * value.count, true, true)) + "\u003E\u003C\u002Froll-element\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cdiv\u003ENo product in cart\u003C\u002Fdiv\u003E";
}
};
pug_html = pug_html + "\u003Cdiv class=\"tableBody\"\u003E\u003Cdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"wide\"\u003EProduct details\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\"\u003EQuality\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\"\u003EPrice\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\"\u003ETotal\u003C\u002Fdiv\u003E\u003Cdiv class=\"medium\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E";
pug_mixins["rows"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./component/unitComponent.js":
/*!************************************!*\
  !*** ./component/unitComponent.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _elementCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elementCreator.js */ "./elementCreator.js");
/* harmony import */ var _stateManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stateManager.js */ "./stateManager.js");
/* harmony import */ var _pug_header_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pug/header.pug */ "./component/pug/header.pug");
/* harmony import */ var _pug_card_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pug/card.pug */ "./component/pug/card.pug");
/* harmony import */ var _pug_cardHolder_pug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pug/cardHolder.pug */ "./component/pug/cardHolder.pug");
/* harmony import */ var _pug_table_pug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pug/table.pug */ "./component/pug/table.pug");
/* harmony import */ var _pug_roll_pug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pug/roll.pug */ "./component/pug/roll.pug");
/* harmony import */ var _pug_checkout_pug__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pug/checkout.pug */ "./component/pug/checkout.pug");
/* harmony import */ var _pug_count_pug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pug/count.pug */ "./component/pug/count.pug");
/* harmony import */ var _pug_cms_pug__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pug/cms.pug */ "./component/pug/cms.pug");
/* harmony import */ var _pug_cmsholder_pug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pug/cmsholder.pug */ "./component/pug/cmsholder.pug");
/* harmony import */ var _pug_product_pug__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pug/product.pug */ "./component/pug/product.pug");
/* harmony import */ var _pug_cart_pug__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pug/cart.pug */ "./component/pug/cart.pug");
/* harmony import */ var _pug_cmspage_pug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pug/cmspage.pug */ "./component/pug/cmspage.pug");
/* harmony import */ var _pug_add_pug__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pug/add.pug */ "./component/pug/add.pug");
/* harmony import */ var _pug_img_pug__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pug/img.pug */ "./component/pug/img.pug");
/* harmony import */ var _pug_form_pug__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pug/form.pug */ "./component/pug/form.pug");
/* harmony import */ var _pug_overlay_pug__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pug/overlay.pug */ "./component/pug/overlay.pug");
/* harmony import */ var _pug_checkoutform_pug__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pug/checkoutform.pug */ "./component/pug/checkoutform.pug");
/* harmony import */ var _pug_signin_pug__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pug/signin.pug */ "./component/pug/signin.pug");
/* harmony import */ var _pug_edit_pug__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pug/edit.pug */ "./component/pug/edit.pug");
/* harmony import */ var _pug_order_pug__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pug/order.pug */ "./component/pug/order.pug");
/* harmony import */ var _pug_product_id_pug__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pug/product[id].pug */ "./component/pug/product[id].pug");
/* harmony import */ var _utility_utility_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utility/utility.js */ "./utility/utility.js");

























let data = {
    imgsrc: undefined
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);
;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'header-element',
    atr: [],
    pugFunc: _pug_header_pug__WEBPACK_IMPORTED_MODULE_2__,
    func: [{
        event: 'input',
        callback: function(e){
                if ('input' in e.target.dataset) {
                    console.log('worked', document.querySelector('.foodGrid'), this);
                }
        },
    }, {
        event: 'change',
        callback: function(e){
            if ('option' in e.target.dataset) {
                console.log('worked', e.target.value);   
            }
        }
    },{
        event: 'click',
        callback: function(e){
            if('login' in e.target.dataset) {
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.showOverlay(document.querySelector('overlay-element'))
            }
        }
    }]
})
;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'card-element',
    pugFunc: _pug_card_pug__WEBPACK_IMPORTED_MODULE_3__,
    atr: ['src', 'name', 'detail', 'count', 'uid', 'price'],
    func: [{
        event: 'click',
        callback: function (e) {
            if('addtocart' in e.target.dataset) {
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.editProductCount(true, this.value.uid, document.querySelector('.foodGrid').parentElement)
                // console.log(model.product)
            } else if ('minus' in e.target.dataset) {
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.editProductCount(false, this.value.uid, document.querySelector('.foodGrid').parentElement)
                // console.log(model.product)
            }else if ('plus' in e.target.dataset){
                // console.log('called plus', e.target.dataset)
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.editProductCount(true, this.value.uid, document.querySelector('.foodGrid').parentElement)
                // console.log(model.product)
            }        
        }
    }],
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'holder-element',
    pugFunc: _pug_cardHolder_pug__WEBPACK_IMPORTED_MODULE_4__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'table-element',
    pugFunc: _pug_table_pug__WEBPACK_IMPORTED_MODULE_5__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'roll-element',
    pugFunc: _pug_roll_pug__WEBPACK_IMPORTED_MODULE_6__,
    atr: ['imgsrc', 'name', 'number', 'count', 'price', 'total'],
    func: [{
        event: 'click',
        callback: function(e){
            if ('plus' in e.target.dataset) {
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.editProductCount(true, this.value.number, [document.querySelector('table-element'), document.querySelector('checkout-element')])   
            }else if('minus' in e.target.dataset) {
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.editProductCount(false, this.value.number, [document.querySelector('table-element'), document.querySelector('checkout-element')])   
            }else if ('remove' in e.target.dataset){
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.removeFromCart(this.value.number, [document.querySelector('table-element'), document.querySelector('checkout-element')])
            }
        }
    }]
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'checkout-element',
    pugFunc: _pug_checkout_pug__WEBPACK_IMPORTED_MODULE_7__,
    func: [
        {
            event: 'click',
            callback: function (e){
                if ('checkout' in e.target.dataset) {
                    _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.showOverlay(document.querySelector('cart-page'))
                }
            }
        }
    ]
})



;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "amount-element",
    pugFunc: _pug_count_pug__WEBPACK_IMPORTED_MODULE_8__,
    atr: ['count']
})


;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "cms-element",
    pugFunc: _pug_cms_pug__WEBPACK_IMPORTED_MODULE_9__,
    atr: ['imgsrc', 'name', 'extra', 'price', 'uid'],
    func: [{
        event: "click",
        callback: function(e){
            if ('delete' in e.target.dataset) {
                console.log(this.value.uid)
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.deleteProduct(this.value.uid)
            }else if ('edit' in e.target.dataset) {
                // route to edit page
            }
        }
    }]
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "cmsholder-element",
    pugFunc: _pug_cmsholder_pug__WEBPACK_IMPORTED_MODULE_10__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'addimage-element',
    pugFunc: _pug_img_pug__WEBPACK_IMPORTED_MODULE_15__,
    atr: ['imgsrc'],
    func: [
        {
            event: "change",
            callback: function(e){
                if('file' in e.target.dataset){
                    let file = e.target.files[0]
                    let fileReader = new FileReader()
                    fileReader.onload=(e)=>{
                        let result = e.target.result
                        this.value.imgsrc = result
                        document.querySelector('form-element').setAttribute('imgsrc', result)
                        this.render()
                    }
                    fileReader.readAsDataURL(file)
                }
            }
        }
    ]
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'form-element',
    pugFunc: _pug_form_pug__WEBPACK_IMPORTED_MODULE_16__,
    atr: ['name', 'detail', 'price', 'imgsrc', 'edit', 'uid'],
    func: [
        {
            event: "click",
            callback: function(e){
                e.preventDefault()
                if ('add' in e.target.dataset) {
                    let payload = {
                        name: _utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.getValue.bind(this)("#name"),
                        detail: _utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.getValue.bind(this)("#detail"),
                        foodsrc: this.value.imgsrc,
                        price: _utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.getValue.bind(this)("#price")
                    }
                    if ((0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.objHasAnEmptyValue)(payload)){
                        alert('cant have an empty field')
                        return
                    }
                    _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.addProduct(payload)
                }else if ('edit' in e.target.dataset) {
                    let payload = {
                        name: _utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.getValue.call(this, ["#name"]),
                        detail: _utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.getValue.call(this, ["#detail"]),
                        foodsrc: this.value.imgsrc,
                        count: 0,
                        price: _utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.getValue.call(this, ["#price"]),
                        uid: this.value.uid
                    }
                    if ((0,_utility_utility_js__WEBPACK_IMPORTED_MODULE_23__.objHasAnEmptyValue)(payload)) {
                        console.log(payload)
                        alert('cant have an empty field')
                        return
                    }
                    _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.editProduct(payload)
                }
            }
        }
    ]
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'overlay-element',
    pugFunc: _pug_overlay_pug__WEBPACK_IMPORTED_MODULE_17__,
    func: [{
            event: 'click',
            callback: function(e){
                if ('close' in e.target.dataset) {
                    _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.showOverlay(this)
                }
            }
        }]
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'checkoutform-element',
    pugFunc: _pug_checkoutform_pug__WEBPACK_IMPORTED_MODULE_18__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'signin-element',
    pugFunc: _pug_signin_pug__WEBPACK_IMPORTED_MODULE_19__,
    func: [{
        event: 'click',
        callback: function(e){
            if('toggle' in e.target.dataset){
                _stateManager_js__WEBPACK_IMPORTED_MODULE_1__.controlller.switchForm(this)
            }
        }
    }]
})
// for view
;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'product-page',
    pugFunc: _pug_product_pug__WEBPACK_IMPORTED_MODULE_11__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'cart-page',
    pugFunc: _pug_cart_pug__WEBPACK_IMPORTED_MODULE_12__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'cms-page',
    pugFunc: _pug_cmspage_pug__WEBPACK_IMPORTED_MODULE_13__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'add-page',
    pugFunc: _pug_add_pug__WEBPACK_IMPORTED_MODULE_14__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'edit-page',
    pugFunc: _pug_edit_pug__WEBPACK_IMPORTED_MODULE_20__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: 'order-page',
    pugFunc: _pug_order_pug__WEBPACK_IMPORTED_MODULE_21__
})

;(0,_elementCreator_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: "dynamicproduct-page",
    pugFunc: _pug_product_id_pug__WEBPACK_IMPORTED_MODULE_22__
})

/***/ }),

/***/ "./elementCreator.js":
/*!***************************!*\
  !*** ./elementCreator.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ elementCreator)
/* harmony export */ });
/* harmony import */ var _stateManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateManager.js */ "./stateManager.js");

function elementCreator({name,atr = [],pugFunc,func = []}) {
    class test extends HTMLElement {
        constructor(){
            super()
        }
        static observedAttributes = [...atr, 'param']
        value = {
            param: undefined 
        }
        populateValue=(()=>{
            atr.forEach((name)=>{
                this.value[name] = ''
            })
        })()
        attributeChangedCallback(name, oldValue, newValue){
            this.value[name] = newValue
        }
        render(){
            let virtualDom = this.cloneNode(true)
            let pugHtml = pugFunc({prop: this.value, state: (0,_stateManager_js__WEBPACK_IMPORTED_MODULE_0__.view)(), url: document.location.hash})
            virtualDom.innerHTML = pugHtml
            if (virtualDom.innerHTML === this.innerHTML) {
                // console.log('also called',this)
                return
            }else{
                // console.log('called', this)
                this.innerHTML = virtualDom.innerHTML
                func.forEach(({event,callback})=>{
                    this.addEventListener(event, callback, false)
                })
            }
        }
        connectedCallback(){
            this.render()
        }
    }
    customElements.define(name, test)
}

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
let router = ()=>{
    let views = []
    let addRoute=(url, htmlString)=>{
        let urlMatch = url.match(':id')
        if (urlMatch){
            let inCompleteRegex = url.slice(0, urlMatch.index)
            let regex = inCompleteRegex + '(.+)'   
            views.push({htmlString, url, regexTest: new RegExp(regex)})
        }else{
            views.push({htmlString, url})
        }
    }
    
    let currentRoute =()=>{
        let app = document.querySelector('#app')
        let {hash} = window.location
        let param
        let current = views.find((e)=>{
            if (e.regexTest && e.regexTest.test(hash)) {
                let arr = hash.split('/')
                param = arr[arr.length - 1]
                return e
            }else if (e.url === hash) {
                param = undefined
                return e
            }
        })
        if (current) {
            app.render(current.htmlString(param))
        }else{
            app.render('no page found')
        }
    }
    let start=()=>{
        addEventListener('hashchange', currentRoute)
        if (!location.hash) {
            location.hash = '#/'
        }
        currentRoute()
    }
    return {
        addRoute, start
    }
}

/***/ }),

/***/ "./stateManager.js":
/*!*************************!*\
  !*** ./stateManager.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   controlller: () => (/* binding */ controlller),
/* harmony export */   view: () => (/* binding */ view)
/* harmony export */ });
let model = {
    product: [
        {
        name: 'Burger 1',
        foodsrc: './images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '10',
        count: '0',
        uid: '001',
        review: [
        ]

     }, 
     {
        name: 'Burger 2',
        foodsrc: '/images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '30',
        count: '0',
        uid: '002',
        review: [
        ]
    }, {
        name: 'Burger 3',
        foodsrc: '/images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '15',
        count: '0',
        uid: '003',
        review: [
        ]
    },{
        name: 'Burger 12',
        foodsrc: '/images/burger.jpg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis consequatur expedita non iste eveniet accusantium alias aliquid officia illum.',
        price: '15',
        count: '0',
        uid: '0012',
        review: [
        ]
    }
    ],
    isLoggedin: false,
    isAuthenticated: true,
    loginForm: false,
    showOverlay: false,
    sum: 0
}
// 'foodsrc', 'name', 'detail', 'price', 'count'
 let checkoutPrice=(model)=>{
    let sum = 0
    model.product.forEach((ele)=>{
        sum = sum + +ele.count * +ele.price 
    })
    model.sum = sum
    return {model}
}

let render = ()=>{
    // loop through all elements and call a render method\
    let count = 0
    // function lopper(ele) {
    //     count++
    //     if (ele.hasChildNodes()){
    //         if (ele.render && count > 1) {
    //             ele.render()
    //         }
    //         ele.childNodes.forEach(e => lopper(e))
    //     }else{
    //         if (ele.render) {
    //             ele.render()
    //         }
    //         return
    //     }
    // }
    function renderPage() {
        renderPage.pages = ['add-page', 'cms-page', 'cart-page', 'product-page']
        renderPage.pages.forEach((page)=>{
            let isAvailable = document.querySelector(page)
            if (isAvailable) {
                isAvailable.render()
            }else{
                return
            }
        })
    }
    renderPage()

}

let view =()=> Object.freeze(checkoutPrice(model))
 

let controlller = {
    addToCart: (arg)=>{
        model.cart.push(arg)
        render()
    },
    editProductCount: (increment, uid)=>{
        let currentProduct = model.product.find((value, index)=> +value.uid === +uid)
        console.log(uid, currentProduct, model.product)
        if (currentProduct){
            if (increment) {
                currentProduct.count = +currentProduct.count + 1
            }else{
                currentProduct.count = +currentProduct.count - 1
            }
        }
        render()
    },
    removeFromCart: (uid)=>{
        let currentProduct = model.product.find((value, index)=> value.uid === uid)
        if (currentProduct) {
            currentProduct.count = 0
        }
        render()
    },
    showOverlay: ()=>{
        model.showOverlay = !model.showOverlay
        render()
    },
    switchForm: ()=>{
        model.loginForm = !model.loginForm
        render()
    },
    addProduct: (payload)=>{
        //post data to api
        model.product.push({
            ...payload, count: 0, uid: Math.floor(Math.random() * 1000) 
        })
    },
    editProduct: (payload)=>{
        let uid = payload.uid
        model.product = model.product.map((ele)=>{
            if (ele.uid === uid) {
                return payload
            }else{
                return ele
            }
        })
        render()
    },
    deleteProduct: (uid)=>{
        model.product = model.product.filter((ele)=> ele.uid !== uid)
        render()
    }
}


/***/ }),

/***/ "./utility/utility.js":
/*!****************************!*\
  !*** ./utility/utility.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValue: () => (/* binding */ getValue),
/* harmony export */   objHasAnEmptyValue: () => (/* binding */ objHasAnEmptyValue)
/* harmony export */ });
let objHasAnEmptyValue=(obj)=> {
    console.log(obj)
    let value = false
    Object.values(obj).forEach(ele=>{
        if(typeof ele === 'undefined' || typeof ele === "null" || ele.length === 0){
            value = true
        }
    })
    return value
}
let getValue = function(e){
    console.log(e)
    return this.querySelector(e).value
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./appComponent.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ "./router.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _component_unitComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/unitComponent.js */ "./component/unitComponent.js");




// import './style.css'
// we can't seem to work with offline files and importing files 
let route = (0,_router_js__WEBPACK_IMPORTED_MODULE_0__.router)()
class app extends HTMLElement{
    connectedCallback(){
        route.addRoute('#/',(param)=>`<product-page param=${param}></product-page>`)
        route.addRoute('#/cart',(param)=>`<cart-page param=${param}></cart-page>`)
        route.addRoute('#/cms',(param)=>`<cms-page param=${param}></cms-page>`)
        route.addRoute('#/cms/add',(param)=>`<add-page param=${param}></add-page>`)
        route.addRoute('#/cms/edit/:id',(param)=>`<edit-page param=${param}></edit-page>`)
        route.addRoute('#/orders', (param)=> `<order-page param=${param}></order-page>`)
        route.addRoute('#/product/:id', (param)=>`<dynamicproduct-page param=${param}></dynamicproduct-page>`)
        route.start()
    }
    render=(str)=>{
        this.innerHTML = str
    }
}

customElements.define('app-component', app)

// register SW
navigator.serviceWorker.register('sw.js')

let promptObj;

window.addEventListener('beforeinstallprompt', (e)=>{
    console.log(e)
    e.preventDefault()
    promptObj = e
    // showFooter(true)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lHO0FBQ2pCO0FBQ3hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRFQUE0RSxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLCtCQUErQixzQkFBc0IsNEJBQTRCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLFNBQVMsU0FBUyxxRUFBcUUsa0JBQWtCLG1CQUFtQixLQUFLLFVBQVUsa0JBQWtCLEtBQUssTUFBTSw4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TmtDO0FBQ2xDO0FBQ29CO0FBQzJCO0FBQy9DO0FBQ0E7QUFDQSxZQUFZLGtEQUFNO0FBQ2xCO0FBQ0E7QUFDQSw0REFBNEQsTUFBTTtBQUNsRSw2REFBNkQsTUFBTTtBQUNuRSwyREFBMkQsTUFBTTtBQUNqRSwrREFBK0QsTUFBTTtBQUNyRSxxRUFBcUUsTUFBTTtBQUMzRSxrRUFBa0UsTUFBTTtBQUN4RSwrRUFBK0UsTUFBTTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RpZXB3YS8uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvYWRkLnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL2NhcmQucHVnIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvY2FyZEhvbGRlci5wdWciLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vY29tcG9uZW50L3B1Zy9jYXJ0LnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL2NoZWNrb3V0LnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL2NoZWNrb3V0Zm9ybS5wdWciLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vY29tcG9uZW50L3B1Zy9jbXMucHVnIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvY21zaG9sZGVyLnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL2Ntc3BhZ2UucHVnIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvY291bnQucHVnIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvZWRpdC5wdWciLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vY29tcG9uZW50L3B1Zy9mb3JtLnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL2hlYWRlci5wdWciLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vY29tcG9uZW50L3B1Zy9pbWcucHVnIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvb3JkZXIucHVnIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvb3ZlcmxheS5wdWciLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vY29tcG9uZW50L3B1Zy9wcm9kdWN0LnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL3Byb2R1Y3RbaWRdLnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL3JvbGwucHVnIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2NvbXBvbmVudC9wdWcvc2lnbmluLnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9jb21wb25lbnQvcHVnL3RhYmxlLnB1ZyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9vZGllcHdhL2lnbm9yZWR8QzpcXFVzZXJzXFxua2VtYVxcT25lRHJpdmVcXERvY3VtZW50c1xcY29kZVxcbGVhcm5pbmdcXFByb2plY3RcXEpTXFxmb29kaWVQV0FcXG5vZGVfbW9kdWxlc1xccHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vY29tcG9uZW50L3VuaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vZWxlbWVudENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vZm9vZGllcHdhLy4vcm91dGVyLmpzIiwid2VicGFjazovL2Zvb2RpZXB3YS8uL3N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9mb29kaWVwd2EvLi91dGlsaXR5L3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vZm9vZGllcHdhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2RpZXB3YS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb29kaWVwd2Evd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvb2RpZXB3YS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvb2RpZXB3YS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2RpZXB3YS8uL2FwcENvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xyXG4gICAgLS13aGl0ZTogI2ZmZjtcclxuICAgIC0tbGlnaHQtd2hpdGU6ICNjY2M7XHJcbiAgICAtLWJ1dHRvbjogIzljZjtcclxuICAgIC0tdGV4dC1IMTogIzMzMztcclxuICAgIC0tdGV4dC1wOiAjNDQ0O1xyXG5cclxufVxyXG5ib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5oMSwgcHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuc2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZGVyIC5saW5rc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuLmhlYWRlciAubGlua3MgYXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG4uaGVhZGVyIC5saW5rcyBhOmhvdmVye1xyXG4gICAgY29sb3I6ICNlYmI1Njk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uaGVhZGVyIC5zZWFyY2hiYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTY3Njc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkZXIgLnNlYXJjaGJhciBpbnB1dCwgc2VsZWN0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZTY3Njc7XHJcbn1cclxuLmhlYWRlciAuc2VhcmNoYmFyIHNlbGVjdHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufVxyXG5zZWxlY3Qgb3B0aW9ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgO1xyXG59XHJcbi5oZWFkZXIgLnNlYXJjaGJhciAubGluZXtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZGVyIC5zZWFyY2hiYXIgaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXRlZ29yeUJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2F0ZWdvcnlCb2R5IC5jYXRlZ29yeXtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtd2hpdGUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY2F0ZWdvcnkgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmNhdGVnb3J5IHB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uZm9vZENvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmZvb2RDb250YWluZXIgaDJ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1IMSk7XHJcbn1cclxuLmZvb2RHcmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XHJcbn1cclxuLmZvb2RHcmlkIC5mb29ke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGN1cnNvcjpjb250ZXh0LW1lbnU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTY3Njc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mb29kIC5wcm9kdWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZvb2QgaDF7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmZvb2QgaDJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmZvb2QgcHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvb2QgLmJvdHRvbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZvb2QgLmNhcnRCdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuLmFtb3VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbi5jYXJ0QnRuIGJ1dHRvbiwgLmNtc0NhcmQgYnV0dG9uLCBsYWJlbCwgZm9ybSBidXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViYjU2OTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3ZlcmxheXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2hlY2tPdXRPdmVybGF5e1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNoZWNrT3V0T3ZlcmxheSAuY2xvc2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRvcDogMzBweFxyXG59XHJcbi5jaGVja091dE92ZXJsYXk+KntcclxuICAgIGdhcDogMTVweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jYXJ0QnRuIGJ1dHRvbiBwLCAuY21zQ2FyZCBidXR0b24sIGxhYmVsLCBmb3JtIGJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wKTtcclxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmxhYmVsLCBmb3JtIGJ1dHRvbntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG59XHJcblxyXG4ubXlDYXJ0ID4gaDF7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hbWV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmNhcnRDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNhcnRDb250YWluZXIgLnRhYmxle1xyXG4gICAgZmxleDogMSAwIDA7XHJcbn1cclxuLnJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi50YWJsZUJvZHl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMjBweDtcclxufVxyXG4uYm9yZGVye1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJiNTY5O1xyXG59XHJcbi5pY29ue1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuLndpZGV7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLm1lZGl1bXtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxudGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jaGVja091dHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViYjU2OTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5jaGVja091dCBidXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmI1Njk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxufVxyXG5cclxuLm5vZGlzcGxheXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaG9sZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuLmNtc0NhcmR7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjAsIDIyMCk7ICovXHJcbiAgICBnYXA6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZlNjc2NztcclxufVxyXG4uY21zQ2FyZCAucHJvSW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4uY21zQ2FyZCAuZGV0YWlse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuLmNtc0NhcmQgLmJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLmltZ0FkZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNmU2NzY3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uaW1nQWRkZXIgaW1ne1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZlNjc2NztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmFkZHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbn1cclxuLm5vdGlmaWNhdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogLTEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG5cclxuLm15Q2FydC5sZWZ0e1xyXG4gICAgcmlnaHQ6IC0xMDAwJTtcclxufVxyXG4uc2hvcHBpbmdDYXJ0e1xyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLyogLmljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59ICovXHJcbi5zaG9wcGluZ0NhcnQgLmhlYWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaGVhZCBoMXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LUgxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNob3BwaW5nQ2FydCAuaGVhZCBidXR0b257XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNob3BwaW5nQ2FydCAuYm9keXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgO1xyXG59XHJcbi5ib2R5LnJlbW92ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG59XHJcbi5ib2R5IC5vYmp7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgICBcclxufVxyXG4ub2JqIGgxe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LUgxKTtcclxufVxyXG4ub2JqIHB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5yZXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ucmVzdC5yZW1vdmV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yZXN0IGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5vYmogaW1ne1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG4uc2hvcHBpbmdDYXJ0IC50b3RhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG59XHJcbi50b3RhbCBoMntcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4udG90YWwgcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuZm9ybSBkaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTY3Njc7XHJcbn1cclxuZm9ybSB0ZXh0YXJlYXtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuZm9ybSAubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5vcmRlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uKTtcclxufVxyXG4ub3JkZXIuc2hvd3tcclxuICAgIHRvcDogMDtcclxufVxyXG4ub3JkZXIgZm9ybXtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm9yZGVyIGZvcm0gZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ucGVuZGluZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHhcclxufVxyXG4uc2Nyb2xse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNhdGVnb3J5LmFjdGl2ZXtcclxuICAgIHNjYWxlOiAwLjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogb3BhY2l0eTogMC43OyAqL1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgc2VjdGlvbntcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTEwcHggLTE5cHggNTBweCBibGFjaztcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaGJhcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaGJhciBpbnB1dHtcclxuICAgICAgICBmbGV4OiAxIDAgMDtcclxuICAgIH1cclxuICAgIC5mb29kQ29udGFpbmVye1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnlCb2R5e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9vZEdyaWR7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Q2FydHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnNob3BwaW5nQ2FydHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuaWNvbntcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLm9iaiBoMSwgLm9iaiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5vcmRlciBmb3Jte1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIH1cclxuICAgIC5jYXJ0Q29udGFpbmVye1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSw0REFBNEQ7SUFDNUQsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksU0FBUztB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bkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLE1BQU07QUFDVjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsT0FBTztJQUNQLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLHNCQUFzQjtRQUN0QixrQ0FBa0M7UUFDbEMsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcclxcbiAgICAtLXdoaXRlOiAjZmZmO1xcclxcbiAgICAtLWxpZ2h0LXdoaXRlOiAjY2NjO1xcclxcbiAgICAtLWJ1dHRvbjogIzljZjtcXHJcXG4gICAgLS10ZXh0LUgxOiAjMzMzO1xcclxcbiAgICAtLXRleHQtcDogIzQ0NDtcXHJcXG5cXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbmgxLCBwe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcbnNlY3Rpb257XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcclxcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggNDBweDsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlciAubGlua3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbn1cXHJcXG4uaGVhZGVyIC5saW5rcyBhe1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbn1cXHJcXG4uaGVhZGVyIC5saW5rcyBhOmhvdmVye1xcclxcbiAgICBjb2xvcjogI2ViYjU2OTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcbi5oZWFkZXIgLnNlYXJjaGJhcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2NzY3O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5oZWFkZXIgLnNlYXJjaGJhciBpbnB1dCwgc2VsZWN0e1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZlNjc2NztcXHJcXG59XFxyXFxuLmhlYWRlciAuc2VhcmNoYmFyIHNlbGVjdHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbn1cXHJcXG5zZWxlY3Qgb3B0aW9ue1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwIDtcXHJcXG59XFxyXFxuLmhlYWRlciAuc2VhcmNoYmFyIC5saW5le1xcclxcbiAgICB3aWR0aDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlciAuc2VhcmNoYmFyIGlucHV0OjpwbGFjZWhvbGRlcntcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uY2F0ZWdvcnlCb2R5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNhdGVnb3J5Qm9keSAuY2F0ZWdvcnl7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtd2hpdGUpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLmNhdGVnb3J5IGltZ3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNjAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uY2F0ZWdvcnkgcHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtcCk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcbi5mb29kQ29udGFpbmVye1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG4uZm9vZENvbnRhaW5lciBoMntcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtSDEpO1xcclxcbn1cXHJcXG4uZm9vZEdyaWR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMjAwMHB4O1xcclxcbn1cXHJcXG4uZm9vZEdyaWQgLmZvb2R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTRweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgY3Vyc29yOmNvbnRleHQtbWVudTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTY3Njc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5mb29kIC5wcm9kdWN0e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZvb2QgaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4uZm9vZCBoMntcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5mb29kIHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb29kIC5ib3R0b217XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvb2QgLmNhcnRCdG57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG4uYW1vdW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5jYXJ0QnRuIGJ1dHRvbiwgLmNtc0NhcmQgYnV0dG9uLCBsYWJlbCwgZm9ybSBidXR0b257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViYjU2OTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzMDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNoZWNrT3V0T3ZlcmxheXtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uY2hlY2tPdXRPdmVybGF5IC5jbG9zZXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMzBweDtcXHJcXG4gICAgdG9wOiAzMHB4XFxyXFxufVxcclxcbi5jaGVja091dE92ZXJsYXk+KntcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4uY2FydEJ0biBidXR0b24gcCwgLmNtc0NhcmQgYnV0dG9uLCBsYWJlbCwgZm9ybSBidXR0b257XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wKTtcXHJcXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxubGFiZWwsIGZvcm0gYnV0dG9ue1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5teUNhcnQgPiBoMXtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5uYW1le1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcbi5jYXJ0Q29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNhcnRDb250YWluZXIgLnRhYmxle1xcclxcbiAgICBmbGV4OiAxIDAgMDtcXHJcXG59XFxyXFxuLnJvd3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLnRhYmxlQm9keXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uYm9yZGVye1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViYjU2OTtcXHJcXG59XFxyXFxuLmljb257XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbi53aWRle1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxufVxcclxcbi5tZWRpdW17XFxyXFxuICAgIHdpZHRoOiA3NXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbnRke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNoZWNrT3V0e1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViYjU2OTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcbi5jaGVja091dCBidXR0b257XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmI1Njk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5vZGlzcGxheXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXh7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmhvbGRlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uY21zQ2FyZHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIwLCAyMjApOyAqL1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTY3Njc7XFxyXFxufVxcclxcbi5jbXNDYXJkIC5wcm9JbWd7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuLmNtc0NhcmQgLmRldGFpbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uY21zQ2FyZCAuYnV0dG9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0FkZGVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTY3Njc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbi5pbWdBZGRlciBpbWd7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ZTY3Njc7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxyXFxufVxcclxcbi5ub3RpZmljYXRpb257XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogLTEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm15Q2FydC5sZWZ0e1xcclxcbiAgICByaWdodDogLTEwMDAlO1xcclxcbn1cXHJcXG4uc2hvcHBpbmdDYXJ0e1xcclxcbiAgICB3aWR0aDogNzAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4vKiAuaWNvbntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDMwcHg7XFxyXFxuICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbn0gKi9cXHJcXG4uc2hvcHBpbmdDYXJ0IC5oZWFke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5oZWFkIGgxe1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LUgxKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLnNob3BwaW5nQ2FydCAuaGVhZCBidXR0b257XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5zaG9wcGluZ0NhcnQgLmJvZHl7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyA7XFxyXFxufVxcclxcbi5ib2R5LnJlbW92ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMDAlO1xcclxcbn1cXHJcXG4uYm9keSAub2Jqe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICAgXFxyXFxufVxcclxcbi5vYmogaDF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtSDEpO1xcclxcbn1cXHJcXG4ub2JqIHB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuLnJlc3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4ucmVzdC5yZW1vdmV7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5yZXN0IGltZ3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5vYmogaW1ne1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG4uc2hvcHBpbmdDYXJ0IC50b3RhbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuLnRvdGFsIGgye1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi50b3RhbCBwe1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuZm9ybXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG59XFxyXFxuZm9ybSBkaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZlNjc2NztcXHJcXG59XFxyXFxuZm9ybSB0ZXh0YXJlYXtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5pbnB1dDpmb2N1c3tcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5mb3JtIC5sYWJlbHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAtMTAwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uKTtcXHJcXG59XFxyXFxuLm9yZGVyLnNob3d7XFxyXFxuICAgIHRvcDogMDtcXHJcXG59XFxyXFxuLm9yZGVyIGZvcm17XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm9yZGVyIGZvcm0gZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucGVuZGluZ3tcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweFxcclxcbn1cXHJcXG4uc2Nyb2xse1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuZm9vdGVye1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uY2F0ZWdvcnkuYWN0aXZle1xcclxcbiAgICBzY2FsZTogMC45O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgICAvKiBvcGFjaXR5OiAwLjc7ICovXFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICBzZWN0aW9ue1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuaGVhZGVye1xcclxcbiAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuICAgICAgICB0b3A6IDBweDtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAtMTBweCAtMTlweCA1MHB4IGJsYWNrO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuc2VhcmNoYmFye1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB9XFxyXFxuICAgIC5zZWFyY2hiYXIgaW5wdXR7XFxyXFxuICAgICAgICBmbGV4OiAxIDAgMDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vZENvbnRhaW5lcntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNhdGVnb3J5Qm9keXtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb2RHcmlke1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm15Q2FydHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNob3BwaW5nQ2FydHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5pY29ue1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICB0b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm9iaiBoMSwgLm9iaiBwe1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5vcmRlciBmb3Jte1xcclxcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJ0Q29udGFpbmVye1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvblxcdTAwM0VcXHUwMDNDaGVhZGVyLWVsZW1lbnRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkZXItZWxlbWVudFxcdTAwM0VcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiYWRkXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZWZ0XFxcIlxcdTAwM0VcXHUwMDNDYWRkaW1hZ2UtZWxlbWVudCBpbWdzcmM9XFxcIi5cXHUwMDJGaW1hZ2VzXFx1MDAyRmJ1cmdlci5qcGdcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYWRkaW1hZ2UtZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJyaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2Zvcm0tZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmZvcm0tZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHByb3ApIHtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb29kXFxcIlxcdTAwM0VcXHUwMDNDaW1nXCIgKyAoXCIgY2xhc3M9XFxcInByb2R1Y3RcXFwiXCIrcHVnLmF0dHIoXCJzcmNcIiwgcHJvcC5zcmMsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NoMVxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBwcm9wLm5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBwcm9wLmRldGFpbCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYm90dG9tXFxcIlxcdTAwM0VcXHUwMDNDYVwiICsgKHB1Zy5hdHRyKFwiaHJlZlwiLCBgLiMvcHJvZHVjdC8ke3Byb3AudWlkfWAsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRXZpZXcgcHJvZHVjdCBcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FydEJ0blxcXCJcXHUwMDNFXFx1MDAzQ2gyXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHByb3AucHJpY2UpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZoMlxcdTAwM0VcXHUwMDNDYnV0dG9uIGRhdGEtYWRkdG9jYXJ0XFx1MDAzRVxcdTAwM0NpbWcgd2lkdGg9XFxcIjMwcHhcXFwiIGhlaWdodD1cXFwiMzBweFxcXCIgc3JjPVxcXCIuXFx1MDAyRmltYWdlc1xcdTAwMkZpY29uc1xcdTAwMkZjYXJ0LnBuZ1xcXCIgZGF0YS1hZGR0b2NhcnRcXHUwMDNFXFx1MDAzQ3AgZGF0YS1hZGR0b2NhcnRcXHUwMDNFQWRkIHRvIGNhcnRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJwcm9wXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5wcm9wOnR5cGVvZiBwcm9wIT09XCJ1bmRlZmluZWRcIj9wcm9wOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHN0YXRlKSB7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vZEdyaWRcXFwiXFx1MDAzRVwiO1xuaWYgKHN0YXRlLm1vZGVsLnByb2R1Y3QubGVuZ3RoID4gMCkge1xuLy8gaXRlcmF0ZSBzdGF0ZS5tb2RlbC5wcm9kdWN0XG47KGZ1bmN0aW9uKCl7XG4gIHZhciAkJG9iaiA9IHN0YXRlLm1vZGVsLnByb2R1Y3Q7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgaW5kZXggPCAkJGw7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gJCRvYmpbaW5kZXhdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2NhcmQtZWxlbWVudFwiICsgKHB1Zy5hdHRyKFwiYW1vdW50XCIsIHZhbHVlLmFtb3VudCwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJuYW1lXCIsIHZhbHVlLm5hbWUgLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImNvdW50XCIsIHZhbHVlLmNvdW50LCB0cnVlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCB2YWx1ZS5mb29kc3JjLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImRldGFpbFwiLCB2YWx1ZS5kZXRhaWwsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwidWlkXCIsIHZhbHVlLnVpZCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZjYXJkLWVsZW1lbnRcXHUwMDNFXCI7XG4gICAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgaW5kZXggaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIHZhbHVlID0gJCRvYmpbaW5kZXhdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2NhcmQtZWxlbWVudFwiICsgKHB1Zy5hdHRyKFwiYW1vdW50XCIsIHZhbHVlLmFtb3VudCwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJuYW1lXCIsIHZhbHVlLm5hbWUgLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImNvdW50XCIsIHZhbHVlLmNvdW50LCB0cnVlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCB2YWx1ZS5mb29kc3JjLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImRldGFpbFwiLCB2YWx1ZS5kZXRhaWwsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwidWlkXCIsIHZhbHVlLnVpZCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZjYXJkLWVsZW1lbnRcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG59XG5lbHNlIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcXHUwMDNFTm8gcHJvZHVjdCBjdXJyZW50bHkgYXZhaWxhYmxlXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjt9LmNhbGwodGhpcyxcInN0YXRlXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5zdGF0ZTp0eXBlb2Ygc3RhdGUhPT1cInVuZGVmaW5lZFwiP3N0YXRlOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcIm15Q2FydFxcXCJcXHUwMDNFXFx1MDAzQ292ZXJsYXktZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRm92ZXJsYXktZWxlbWVudFxcdTAwM0VcXHUwMDNDaGVhZGVyLWVsZW1lbnRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkZXItZWxlbWVudFxcdTAwM0VcXHUwMDNDaDFcXHUwMDNFQ2FydFxcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FydENvbnRhaW5lclxcXCJcXHUwMDNFXFx1MDAzQ3RhYmxlLWVsZW1lbnRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ0YWJsZS1lbGVtZW50XFx1MDAzRVxcdTAwM0NjaGVja291dC1lbGVtZW50XFx1MDAzRVxcdTAwM0NcXHUwMDJGY2hlY2tvdXQtZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoc3RhdGUpIHtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGVja091dFxcXCJcXHUwMDNFXFx1MDAzQ2gxXFx1MDAzRVRvdGFsXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmbGV4XFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwiYm9sZFxcXCJcXHUwMDNFU3ViLXRvdGFsXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwIGNsYXNzPVxcXCJzdWJ0b3RhbFxcXCJcXHUwMDNFJFwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHN0YXRlLm1vZGVsLnN1bSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmxleFxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFRGVsaXZlcnlcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2ltZyB3aWR0aD1cXFwiMTVweFxcXCIgaGVpZ2h0PVxcXCIxNXB4XFxcIiBzcmM9XFxcIi5cXHUwMDJGaW1hZ2VzXFx1MDAyRmljb25zXFx1MDAyRmluZm9ybWF0aW9uLnBuZ1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2J1dHRvbiBkYXRhLWNoZWNrb3V0XFx1MDAzRWNoZWNrIG91dFxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwic3RhdGVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnN0YXRlOnR5cGVvZiBzdGF0ZSE9PVwidW5kZWZpbmVkXCI/c3RhdGU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoc3RhdGUpIHtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NoMVxcdTAwM0VDaGVjayBvdXQgZm9ybVxcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFRW50ZXIgeW91ciBkZXRhaWwgYmVsbG93IHRvIG9yZGVyIFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZm9ybVxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NwXFx1MDAzRUNhcmQgbnVtYmVyXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFQ1ZWIG51bWJlclxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDaW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NwXFx1MDAzRUV4cGlyZSBkYXRlXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NidXR0b25cXHUwMDNFUGF5IFwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHN0YXRlLm1vZGVsLnN1bSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCIgbm93XFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZmb3JtXFx1MDAzRVwiO30uY2FsbCh0aGlzLFwic3RhdGVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnN0YXRlOnR5cGVvZiBzdGF0ZSE9PVwidW5kZWZpbmVkXCI/c3RhdGU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAocHJvcCkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNtc0NhcmRcXFwiXFx1MDAzRVxcdTAwM0NpbWdcIiArIChcIiBjbGFzcz1cXFwicHJvSW1nXFxcIlwiK3B1Zy5hdHRyKFwic3JjXCIsIHByb3AuaW1nc3JjLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkZXRhaWxcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHByb3AubmFtZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gcHJvcC5leHRyYSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFJFwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHByb3AucHJpY2UpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ1dHRvblxcXCJcXHUwMDNFXFx1MDAzQ2J1dHRvbiBkYXRhLWVkaXRcXHUwMDNFXFx1MDAzQ2ltZyBjbGFzcz1cXFwiaWNvblxcXCIgc3JjPVxcXCIuXFx1MDAyRmltYWdlc1xcdTAwMkZpY29uc1xcdTAwMkZlZGl0LnBuZ1xcXCJcXHUwMDNFXFx1MDAzQ2FcIiArIChwdWcuYXR0cihcImhyZWZcIiwgYC4jL2Ntcy9lZGl0LyR7cHJvcC51aWR9YCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFIEVkaXRcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXFx1MDAzQ2J1dHRvbiBkYXRhLWRlbGV0ZVxcdTAwM0VcXHUwMDNDaW1nIGNsYXNzPVxcXCJpY29uXFxcIiBzcmM9XFxcIi5cXHUwMDJGaW1hZ2VzXFx1MDAyRmljb25zXFx1MDAyRnRyYXNoLnBuZ1xcXCJcXHUwMDNFXFx1MDAzQ1BcXHUwMDNFRGVsZXRlXFx1MDAzQ1xcdTAwMkZQXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwicHJvcFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgucHJvcDp0eXBlb2YgcHJvcCE9PVwidW5kZWZpbmVkXCI/cHJvcDp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChzdGF0ZSkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImhvbGRlclxcXCJcXHUwMDNFXCI7XG5pZiAoc3RhdGUubW9kZWwucHJvZHVjdC5sZW5ndGggPiAwKSB7XG4vLyBpdGVyYXRlIHN0YXRlLm1vZGVsLnByb2R1Y3RcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gc3RhdGUubW9kZWwucHJvZHVjdDtcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyBpbmRleCA8ICQkbDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSAkJG9ialtpbmRleF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDY21zLWVsZW1lbnRcIiArIChwdWcuYXR0cihcImltZ3NyY1wiLCB2YWx1ZS5mb29kc3JjLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcIm5hbWVcIiwgdmFsdWUubmFtZSwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJleHRyYVwiLCB2YWx1ZS5kZXRhaWwsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwicHJpY2VcIiwgdmFsdWUucHJpY2UsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwidWlkXCIsIHZhbHVlLnVpZCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZjbXMtZWxlbWVudFxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBpbmRleCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7XG4gICAgICB2YXIgdmFsdWUgPSAkJG9ialtpbmRleF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDY21zLWVsZW1lbnRcIiArIChwdWcuYXR0cihcImltZ3NyY1wiLCB2YWx1ZS5mb29kc3JjLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcIm5hbWVcIiwgdmFsdWUubmFtZSwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJleHRyYVwiLCB2YWx1ZS5kZXRhaWwsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwicHJpY2VcIiwgdmFsdWUucHJpY2UsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwidWlkXCIsIHZhbHVlLnVpZCwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZjbXMtZWxlbWVudFxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0VObyBwcm9kdWN0IGN1cnJlbnRseSBpbiBjbXNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwic3RhdGVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnN0YXRlOnR5cGVvZiBzdGF0ZSE9PVwidW5kZWZpbmVkXCI/c3RhdGU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAoc3RhdGUpIHtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvblxcdTAwM0VcXHUwMDNDaGVhZGVyLWVsZW1lbnRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkZXItZWxlbWVudFxcdTAwM0VcIjtcbmlmIChzdGF0ZS5tb2RlbC5pc0F1dGhlbnRpY2F0ZWQpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NjbXNob2xkZXItZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmNtc2hvbGRlci1lbGVtZW50XFx1MDAzRVwiO1xufVxuZWxzZSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2lnbmluLWVsZW1lbnRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzaWduaW4tZWxlbWVudFxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIjt9LmNhbGwodGhpcyxcInN0YXRlXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5zdGF0ZTp0eXBlb2Ygc3RhdGUhPT1cInVuZGVmaW5lZFwiP3N0YXRlOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHByb3ApIHtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJhbW91bnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgZGF0YS1taW51c1xcdTAwM0UtXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYm9yZGVyXFxcIiBkYXRhLWNvdW50XFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHByb3AuY291bnQpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBkYXRhLXBsdXNcXHUwMDNFK1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwicHJvcFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgucHJvcDp0eXBlb2YgcHJvcCE9PVwidW5kZWZpbmVkXCI/cHJvcDp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChwcm9wLCBzdGF0ZSkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIjtcbmxldCB2YWwgPSBzdGF0ZS5tb2RlbC5wcm9kdWN0LmZpbHRlcihlPT4gK2UudWlkID09PSArcHJvcC5wYXJhbSlcbntcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NoZWFkZXItZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRlci1lbGVtZW50XFx1MDAzRVwiO1xuaWYgKHZhbC5sZW5ndGggPiAwKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiYWRkXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsZWZ0XFxcIlxcdTAwM0VcXHUwMDNDYWRkaW1hZ2UtZWxlbWVudFwiICsgKHB1Zy5hdHRyKFwiaW1nc3JjXCIsIHZhbFswXS5mb29kc3JjLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFkZGltYWdlLWVsZW1lbnRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicmlnaHRcXFwiXFx1MDAzRVxcdTAwM0Nmb3JtLWVsZW1lbnRcIiArIChwdWcuYXR0cihcIm5hbWVcIiwgdmFsWzBdLm5hbWUsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwiZGV0YWlsXCIsIHZhbFswXS5kZXRhaWwsIHRydWUsIHRydWUpK3B1Zy5hdHRyKFwicHJpY2VcIiwgdmFsWzBdLnByaWNlLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImltZ3NyY1wiLCB2YWxbMF0uZm9vZHNyYywgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJ1aWRcIiwgdmFsWzBdLnVpZCwgdHJ1ZSwgdHJ1ZSkrXCIgZWRpdD1cXFwidHJ1ZVxcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmZvcm0tZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7XG59XG5lbHNlIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NoMVxcdTAwM0VQcm9kdWN0IGRvZXNuJ3QgZXhpc3QgXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcIjtcbn1cbn19LmNhbGwodGhpcyxcInByb3BcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnByb3A6dHlwZW9mIHByb3AhPT1cInVuZGVmaW5lZFwiP3Byb3A6dW5kZWZpbmVkLFwic3RhdGVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnN0YXRlOnR5cGVvZiBzdGF0ZSE9PVwidW5kZWZpbmVkXCI/c3RhdGU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAocHJvcCkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImltZ0FkZGVyXFxcIlxcdTAwM0VcXHUwMDNDaDFcXHUwMDNFR2VuZXJhbFxcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXFx1MDAzQ2Zvcm1cXHUwMDNFXFx1MDAzQ2RpdlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VQcm9kdWN0IG5hbWVcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2lucHV0XCIgKyAoXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHByb2R1Y3QgbmFtZVxcXCIgaWQ9XFxcIm5hbWVcXFwiXCIrcHVnLmF0dHIoXCJ2YWx1ZVwiLCBwcm9wLm5hbWUsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVByb2R1Y3QgbmFtZXMgaXMgcmVjb21tZW5kZWQgdG8gYmUgdW5pcXVlXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFUHJvZHVjdCBkZXNjcmlwdGlvblxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDdGV4dGFyZWEgaWQ9XFxcImRldGFpbFxcXCJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gcHJvcC5kZXRhaWwpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZ0ZXh0YXJlYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NwXFx1MDAzRVByb2R1Y3QgcHJpY2VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2lucHV0XCIgKyAoXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgcHJvZHVjdCBwcmljZVxcXCIgaWQ9XFxcInByaWNlXFxcIlwiK3B1Zy5hdHRyKFwidmFsdWVcIiwgcHJvcC5wcmljZSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG5pZiAocHJvcC5lZGl0KSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDYnV0dG9uIGRhdGEtZWRpdFxcdTAwM0VFZGl0XFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXCI7XG59XG5lbHNlIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NidXR0b24gZGF0YS1hZGRcXHUwMDNFU3VibWl0XFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXCI7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmZvcm1cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJwcm9wXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5wcm9wOnR5cGVvZiBwcm9wIT09XCJ1bmRlZmluZWRcIj9wcm9wOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImxpbmtzXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIuXFx1MDAyRiNcXHUwMDJGXFxcIlxcdTAwM0VQcm9kdWN0XFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xuaWYgKHN0YXRlLm1vZGVsLmlzQXV0aGVudGljYXRlZCkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2EgaHJlZj1cXFwiLlxcdTAwMkYjXFx1MDAyRmNtc1xcXCJcXHUwMDNFQ01TXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2EgaHJlZj1cXFwiLlxcdTAwMkYjXFx1MDAyRmNhcnRcXFwiXFx1MDAzRUNhcnRcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiLlxcdTAwMkYjXFx1MDAyRm9yZGVyc1xcXCJcXHUwMDNFT3JkZXJzXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVwiO1xuaWYgKCFzdGF0ZS5tb2RlbC5pc0xvZ2dlZGluICYmIHVybCAhPT0gJyMvY21zJykge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3AgZGF0YS1sb2dpblxcdTAwM0VTaWduaW5cXHUwMDJGU2lnbnVwXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG5pZiAodXJsID09PSAnIy8nKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJzZWFyY2hiYXJcXFwiXFx1MDAzRVxcdTAwM0NpbWcgd2lkdGg9XFxcIjMwcHhcXFwiIGhlaWdodD1cXFwiMzBweFxcXCIgc3JjPVxcXCJpbWFnZXNcXHUwMDJGaWNvbnNcXHUwMDJGc2VhcmNoLnBuZ1xcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IGRhdGEtaW5wdXQgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibGluZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ3NlbGVjdCBkYXRhLW9wdGlvblxcdTAwM0VcXHUwMDNDb3B0aW9uIGRhdGEtb3B0aW9uIHZhbHVlPVxcXCJmb29kXFxcIiBzZWxlY3RlZFxcdTAwM0VGb29kXFx1MDAzQ1xcdTAwMkZvcHRpb25cXHUwMDNFXFx1MDAzQ29wdGlvbiBkYXRhLW9wdGlvbiB2YWx1ZT1cXFwiZm9vZCAxXFxcIlxcdTAwM0VGb29kIDFcXHUwMDNDXFx1MDAyRm9wdGlvblxcdTAwM0VcXHUwMDNDb3B0aW9uIGRhdGEtb3B0aW9uIHZhbHVlPVxcXCJmb29kIDJcXFwiXFx1MDAzRUZvb2QgMlxcdTAwM0NcXHUwMDJGb3B0aW9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VsZWN0XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufVxuaWYgKHVybCA9PT0gJyMvY21zJyAmJiBzdGF0ZS5tb2RlbC5pc0F1dGhlbnRpY2F0ZWQpIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcInNlYXJjaGJhclxcXCJcXHUwMDNFXFx1MDAzQ2ltZyB3aWR0aD1cXFwiMzBweFxcXCIgaGVpZ2h0PVxcXCIzMHB4XFxcIiBzcmM9XFxcImltYWdlc1xcdTAwMkZpY29uc1xcdTAwMkZzZWFyY2gucG5nXFxcIlxcdTAwM0VcXHUwMDNDaW5wdXQgZGF0YS1pbnB1dCBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJsaW5lXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDYnV0dG9uXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIi5cXHUwMDJGI1xcdTAwMkZjbXNcXHUwMDJGYWRkXFxcIlxcdTAwM0VBZGQgYSBwcm9kdWN0XFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJzdGF0ZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguc3RhdGU6dHlwZW9mIHN0YXRlIT09XCJ1bmRlZmluZWRcIj9zdGF0ZTp1bmRlZmluZWQsXCJ1cmxcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnVybDp0eXBlb2YgdXJsIT09XCJ1bmRlZmluZWRcIj91cmw6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDs7dmFyIGxvY2Fsc19mb3Jfd2l0aCA9IChsb2NhbHMgfHwge30pOyhmdW5jdGlvbiAocHJvcCkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImltZ0FkZGVyXFxcIlxcdTAwM0VcXHUwMDNDaDFcXHUwMDNFVGh1bWJuYWlsIFxcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIHByb3AuaW1nc3JjLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VTZXQgdGhlIHByb2R1Y3QgdGh1bWJuYWlsIGltYWdlLiBPbmx5ICoucG5nLCAqLmpwZyBhbmQgKi5qcGVnIGZpbGVzIGFyZSBzdXBwb3J0ZWRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2lucHV0IGNsYXNzPVxcXCJub2Rpc3BsYXlcXFwiIHR5cGU9XFxcImZpbGVcXFwiIGlkPVxcXCJzZWxlY3RvclxcXCIgYWNjZXB0PVxcXCJpbWFnZVxcdTAwMkYqXFxcIiBkYXRhLWZpbGVcXHUwMDNFXFx1MDAzQ2xhYmVsIGZvcj1cXFwic2VsZWN0b3JcXFwiXFx1MDAzRVNlbGVjdCBpbWFnZVxcdTAwM0NcXHUwMDJGbGFiZWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJwcm9wXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5wcm9wOnR5cGVvZiBwcm9wIT09XCJ1bmRlZmluZWRcIj9wcm9wOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHN0YXRlKSB7cHVnX21peGluc1tcInJvd1wiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbigpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0VcIjtcbmlmIChzdGF0ZS5tb2RlbC5vcmRlciA+IDEpIHtcbi8vIGl0ZXJhdGUgc3RhdGUubW9kZWwub3JkZXJcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gc3RhdGUubW9kZWwub3JkZXI7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDAsICQkbCA9ICQkb2JqLmxlbmd0aDsgaW5kZXggPCAkJGw7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gJCRvYmpbaW5kZXhdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG4gICAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyICQkbCA9IDA7XG4gICAgZm9yICh2YXIgaW5kZXggaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIHZhbHVlID0gJCRvYmpbaW5kZXhdO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG4gICAgfVxuICB9XG59KS5jYWxsKHRoaXMpO1xuXG59XG5lbHNlIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NoMVxcdTAwM0VObyBwcm9kdWN0XFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uXFx1MDAzRVxcdTAwM0NoZWFkZXItZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRlci1lbGVtZW50XFx1MDAzRVxcdTAwM0NoMVxcdTAwM0VPcmRlclxcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXFx1MDAzQ2RpdlxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NwXFx1MDAzRU9yZGVyXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NwXFx1MDAzRUFtb3VudFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VQcmljZVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VPcmRlciBudW1iZXJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFT3JkZXIgZGF0ZVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VEZWxpdmVyeSBkYXRlIFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJyb3dcIl0oKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIjt9LmNhbGwodGhpcyxcInN0YXRlXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5zdGF0ZTp0eXBlb2Ygc3RhdGUhPT1cInVuZGVmaW5lZFwiP3N0YXRlOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3ZhciBsb2NhbHNfZm9yX3dpdGggPSAobG9jYWxzIHx8IHt9KTsoZnVuY3Rpb24gKHN0YXRlKSB7aWYgKHN0YXRlLm1vZGVsLnNob3dPdmVybGF5KSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJvdmVybGF5XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGVja091dE92ZXJsYXlcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWNsb3NlXFx1MDAzRWNsb3NlXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG5pZiAoc3RhdGUubW9kZWwuaXNMb2dnZWRpbikge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2NoZWNrb3V0Zm9ybS1lbGVtZW50XFx1MDAzRVxcdTAwM0NcXHUwMDJGY2hlY2tvdXRmb3JtLWVsZW1lbnRcXHUwMDNFXCI7XG59XG5lbHNlIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzaWduaW4tZWxlbWVudFxcdTAwM0UgXFx1MDAzQ1xcdTAwMkZzaWduaW4tZWxlbWVudFxcdTAwM0VcIjtcbn1cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufX0uY2FsbCh0aGlzLFwic3RhdGVcIiBpbiBsb2NhbHNfZm9yX3dpdGg/bG9jYWxzX2Zvcl93aXRoLnN0YXRlOnR5cGVvZiBzdGF0ZSE9PVwidW5kZWZpbmVkXCI/c3RhdGU6dW5kZWZpbmVkKSk7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvblxcdTAwM0VcXHUwMDNDb3ZlcmxheS1lbGVtZW50XFx1MDAzRVxcdTAwM0NcXHUwMDJGb3ZlcmxheS1lbGVtZW50XFx1MDAzRVxcdTAwM0NoZWFkZXItZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRlci1lbGVtZW50XFx1MDAzRVxcdTAwM0Nmb290ZXJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFSW5zdGFsbCBvdXIgYXBwbGljYXRpb25cXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2J1dHRvbiBpZD1cXFwiaW5zdGFsbFxcXCJcXHUwMDNFSW5zdGFsbFxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZm9vdGVyXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb2RDb250YWluZXJcXFwiXFx1MDAzRVxcdTAwM0Nob2xkZXItZWxlbWVudFxcdTAwM0VcXHUwMDNDXFx1MDAyRmhvbGRlci1lbGVtZW50XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChwcm9wLCBzdGF0ZSkge2xldCB2YWwgPSBzdGF0ZS5tb2RlbC5wcm9kdWN0LmZpbHRlcihlPT4gK2UudWlkID09PSArcHJvcC5wYXJhbSlcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uXFx1MDAzRVxcdTAwM0NoZWFkZXItY29tcG9uZW50XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyLWNvbXBvbmVudFxcdTAwM0VcIjtcbmlmICh2YWwubGVuZ3RoID4gMCkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIHZhbFswXS5mb29kc3JjLCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRSBcXHUwMDNDaDFcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gdmFsWzBdLm5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB2YWxbMF0uZGV0YWlsKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDaDJcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gdmFsWzBdLnByaWNlKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGaDJcXHUwMDNFXFx1MDAzQ2RpdlxcdTAwM0UgXFx1MDAzQ2Ftb3VudC1lbGVtZW50XCIgKyAocHVnLmF0dHIoXCJjb3VudFwiLCB2YWxbMF0uY291bnQsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYW1vdW50LWVsZW1lbnRcXHUwMDNFXFx1MDAzQ2J1dHRvbiBkYXRhLWFkZHRvY2FydFxcdTAwM0VcXHUwMDNDaW1nIHdpZHRoPVxcXCIzMHB4XFxcIiBoZWlnaHQ9XFxcIjMwcHhcXFwiIHNyYz1cXFwiLlxcdTAwMkZpbWFnZXNcXHUwMDJGaWNvbnNcXHUwMDJGY2FydC5wbmdcXFwiIGRhdGEtYWRkdG9jYXJ0XFx1MDAzRVxcdTAwM0NwIGRhdGEtYWRkdG9jYXJ0XFx1MDAzRUFkZCB0byBjYXJ0XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFIFxcdTAwM0NoMlxcdTAwM0VSZXZpZXdcXHUwMDNDXFx1MDAyRmgyXFx1MDAzRVwiO1xuaWYgKHZhbFswXS5yZXZpZXcubGVuZ3RoID4gMCkge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0UgXFx1MDAzQ2RpdlxcdTAwM0UgXFx1MDAzQ2ltZyBzcmM9XFxcIlxcXCIgYWx0PVxcXCJcXFwiXFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFIFxcdTAwM0NoM1xcdTAwM0VOYW1lXFx1MDAzQ1xcdTAwMkZoM1xcdTAwM0VcXHUwMDNDc3Rhci1jb21wb25lbnQgY291bnQ9XFxcIjNcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3Rhci1jb21wb25lbnRcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcHJlaGVuZGVyaXQgYW5pbWkgcXVpYSByZWN1c2FuZGFlIHRvdGFtIGFjY3VzYW11c1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRSBcXHUwMDNDaW1nIHNyYz1cXFwiXFxcIiBhbHQ9XFxcIlxcXCJcXHUwMDNFXFx1MDAzQ2RpdlxcdTAwM0UgXFx1MDAzQ2gzXFx1MDAzRU5hbWVcXHUwMDNDXFx1MDAyRmgzXFx1MDAzRVxcdTAwM0NzdGFyLWNvbXBvbmVudCBjb3VudD1cXFwiM1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzdGFyLWNvbXBvbmVudFxcdTAwM0VcXHUwMDNDcFxcdTAwM0VMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVwcmVoZW5kZXJpdCBhbmltaSBxdWlhIHJlY3VzYW5kYWUgdG90YW0gYWNjdXNhbXVzXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufVxuZWxzZSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaDFcXHUwMDNFTm8gcmV2aWV3c1xcdTAwM0NcXHUwMDJGaDFcXHUwMDNFXCI7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2gxXFx1MDAzRVByb2R1Y3QgZG9lc24ndCBleGlzdCBcXHUwMDNDXFx1MDAyRmgxXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVwiO30uY2FsbCh0aGlzLFwicHJvcFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgucHJvcDp0eXBlb2YgcHJvcCE9PVwidW5kZWZpbmVkXCI/cHJvcDp1bmRlZmluZWQsXCJzdGF0ZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguc3RhdGU6dHlwZW9mIHN0YXRlIT09XCJ1bmRlZmluZWRcIj9zdGF0ZTp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChwcm9wKSB7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwicm93IGJvcmRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid2lkZVxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwic3JjXCIsIHByb3AuaW1nc3JjLCB0cnVlLCB0cnVlKStcIiB3aWR0aD1cXFwiNTBweFxcXCIgaGVpZ2h0PVxcXCI1MHB4XFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFXFx1MDAzQ2gxIGNsYXNzPVxcXCJuYW1lXFxcIlxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBwcm9wLm5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBwcm9wLm51bWJlcikgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVkaXVtXFxcIlxcdTAwM0VcXHUwMDNDYW1vdW50LWVsZW1lbnRcIiArIChwdWcuYXR0cihcImNvdW50XCIsIHByb3AuY291bnQsIHRydWUsIHRydWUpKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGYW1vdW50LWVsZW1lbnRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVkaXVtXFxcIlxcdTAwM0UgJFwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHByb3AucHJpY2UpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVkaXVtXFxcIlxcdTAwM0UkXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gcHJvcC50b3RhbCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZWRpdW1cXFwiIGRhdGEtcmVtb3ZlXFx1MDAzRVxcdTAwM0NpbWcgc3JjPVxcXCIuXFx1MDAyRmltYWdlc1xcdTAwMkZpY29uc1xcdTAwMkZ0cmFzaC5wbmdcXFwiIHdpZHRoPVxcXCIzMHB4XFxcIiBoZWlnaHQ9XFxcIjMwcHhcXFwiIGRhdGEtcmVtb3ZlXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO30uY2FsbCh0aGlzLFwicHJvcFwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGgucHJvcDp0eXBlb2YgcHJvcCE9PVwidW5kZWZpbmVkXCI/cHJvcDp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChzdGF0ZSkge3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXZcXHUwMDNFXCI7XG5pZiAoc3RhdGUubW9kZWwubG9naW5Gb3JtKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDcFxcdTAwM0VEb24ndCBoYXZlIGFuIGFjY291bnQ/XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NzcGFuIGRhdGEtdG9nZ2xlXFx1MDAzRVNpZ24gdXAuXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVwiO1xufVxuZWxzZSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDcFxcdTAwM0VBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW4gZGF0YS10b2dnbGVcXHUwMDNFU2lnbiBpbi5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXCI7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbmlmIChzdGF0ZS5tb2RlbC5sb2dpbkZvcm0pIHtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NoMVxcdTAwM0VTaWduIGluXFx1MDAzQ1xcdTAwMkZoMVxcdTAwM0VcIjtcbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2gxXFx1MDAzRVNpZ24gdXBcXHUwMDNDXFx1MDAyRmgxXFx1MDAzRVwiO1xufVxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0VcXHUwMDNDZm9ybVxcdTAwM0VcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NwXFx1MDAzRUVtYWlsOlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDaW5wdXQgdHlwZT1cXFwiZW1haWxcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFUGFzc3dvcmQ6XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG5pZiAoc3RhdGUubW9kZWwubG9naW5Gb3JtKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2XFx1MDAzRVxcdTAwM0NpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFSSd2ZSByZWFkIGFuZCBhZ3JlZWQgd2l0aCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnNcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59XG5pZiAoc3RhdGUubW9kZWwubG9naW5Gb3JtKSB7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDYnV0dG9uXFx1MDAzRVNpZ24gaW5cXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcIjtcbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2J1dHRvblxcdTAwM0VTaWduIHVwXFx1MDAzQ1xcdTAwMkZidXR0b25cXHUwMDNFXCI7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmZvcm1cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7fS5jYWxsKHRoaXMsXCJzdGF0ZVwiIGluIGxvY2Fsc19mb3Jfd2l0aD9sb2NhbHNfZm9yX3dpdGguc3RhdGU6dHlwZW9mIHN0YXRlIT09XCJ1bmRlZmluZWRcIj9zdGF0ZTp1bmRlZmluZWQpKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOzt2YXIgbG9jYWxzX2Zvcl93aXRoID0gKGxvY2FscyB8fCB7fSk7KGZ1bmN0aW9uIChzdGF0ZSkge2xldCBwcm9kID0gc3RhdGUubW9kZWwucHJvZHVjdC5maWx0ZXIoKGVsZSk9PiBlbGUuY291bnQ+MClcbnB1Z19taXhpbnNbXCJyb3dzXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKCl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5pZiAocHJvZC5sZW5ndGggPiAwKSB7XG4vLyBpdGVyYXRlIHByb2RcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gcHJvZDtcbiAgaWYgKCdudW1iZXInID09IHR5cGVvZiAkJG9iai5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyBpbmRleCA8ICQkbDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgdmFsdWUgPSAkJG9ialtpbmRleF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDcm9sbC1lbGVtZW50XCIgKyAocHVnLmF0dHIoXCJpbWdzcmNcIiwgdmFsdWUuZm9vZHNyYywgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJudW1iZXJcIiwgdmFsdWUudWlkICwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJuYW1lXCIsIHZhbHVlLm5hbWUgLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImNvdW50XCIsIHZhbHVlLmNvdW50LCB0cnVlLCB0cnVlKStwdWcuYXR0cihcInByaWNlXCIsIHZhbHVlLnByaWNlICwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJ0b3RhbFwiLCB2YWx1ZS5wcmljZSAqIHZhbHVlLmNvdW50LCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnJvbGwtZWxlbWVudFxcdTAwM0VcIjtcbiAgICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgJCRsID0gMDtcbiAgICBmb3IgKHZhciBpbmRleCBpbiAkJG9iaikge1xuICAgICAgJCRsKys7XG4gICAgICB2YXIgdmFsdWUgPSAkJG9ialtpbmRleF07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDcm9sbC1lbGVtZW50XCIgKyAocHVnLmF0dHIoXCJpbWdzcmNcIiwgdmFsdWUuZm9vZHNyYywgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJudW1iZXJcIiwgdmFsdWUudWlkICwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJuYW1lXCIsIHZhbHVlLm5hbWUgLCB0cnVlLCB0cnVlKStwdWcuYXR0cihcImNvdW50XCIsIHZhbHVlLmNvdW50LCB0cnVlLCB0cnVlKStwdWcuYXR0cihcInByaWNlXCIsIHZhbHVlLnByaWNlICwgdHJ1ZSwgdHJ1ZSkrcHVnLmF0dHIoXCJ0b3RhbFwiLCB2YWx1ZS5wcmljZSAqIHZhbHVlLmNvdW50LCB0cnVlLCB0cnVlKSkgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnJvbGwtZWxlbWVudFxcdTAwM0VcIjtcbiAgICB9XG4gIH1cbn0pLmNhbGwodGhpcyk7XG5cbn1cbmVsc2Uge1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdlxcdTAwM0VObyBwcm9kdWN0IGluIGNhcnRcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn1cbn07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJ0YWJsZUJvZHlcXFwiXFx1MDAzRVxcdTAwM0NkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicm93XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3aWRlXFxcIlxcdTAwM0VQcm9kdWN0IGRldGFpbHNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZWRpdW1cXFwiXFx1MDAzRVF1YWxpdHlcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZWRpdW1cXFwiXFx1MDAzRVByaWNlXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVkaXVtXFxcIlxcdTAwM0VUb3RhbFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lZGl1bVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJyb3dzXCJdKCk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjt9LmNhbGwodGhpcyxcInN0YXRlXCIgaW4gbG9jYWxzX2Zvcl93aXRoP2xvY2Fsc19mb3Jfd2l0aC5zdGF0ZTp0eXBlb2Ygc3RhdGUhPT1cInVuZGVmaW5lZFwiP3N0YXRlOnVuZGVmaW5lZCkpOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiLyogKGlnbm9yZWQpICovIiwiaW1wb3J0IGVsZW1lbnRDcmVhdG9yIGZyb20gXCIuLi9lbGVtZW50Q3JlYXRvci5qc1wiO1xyXG5pbXBvcnQge2NvbnRyb2xsbGVyfSBmcm9tIFwiLi4vc3RhdGVNYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vcHVnL2hlYWRlci5wdWdcIlxyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9wdWcvY2FyZC5wdWdcIlxyXG5pbXBvcnQgY2FyZEhvbGRlciBmcm9tIFwiLi9wdWcvY2FyZEhvbGRlci5wdWdcIlxyXG5pbXBvcnQgdGFibGUgZnJvbSBcIi4vcHVnL3RhYmxlLnB1Z1wiXHJcbmltcG9ydCByb2xsIGZyb20gXCIuL3B1Zy9yb2xsLnB1Z1wiXHJcbmltcG9ydCBjaGVja291dCBmcm9tIFwiLi9wdWcvY2hlY2tvdXQucHVnXCJcclxuaW1wb3J0IGNvdW50IGZyb20gXCIuL3B1Zy9jb3VudC5wdWdcIlxyXG5pbXBvcnQgY21zIGZyb20gXCIuL3B1Zy9jbXMucHVnXCJcclxuaW1wb3J0IGNtc2hvbGRlciBmcm9tIFwiLi9wdWcvY21zaG9sZGVyLnB1Z1wiXHJcbmltcG9ydCBwcm9kdWN0IGZyb20gXCIuL3B1Zy9wcm9kdWN0LnB1Z1wiXHJcbmltcG9ydCBjYXJ0IGZyb20gXCIuL3B1Zy9jYXJ0LnB1Z1wiXHJcbmltcG9ydCBjbXNwYWdlIGZyb20gXCIuL3B1Zy9jbXNwYWdlLnB1Z1wiXHJcbmltcG9ydCBhZGQgZnJvbSBcIi4vcHVnL2FkZC5wdWdcIlxyXG5pbXBvcnQgaW1nIGZyb20gXCIuL3B1Zy9pbWcucHVnXCJcclxuaW1wb3J0IGZvcm0gZnJvbSBcIi4vcHVnL2Zvcm0ucHVnXCJcclxuaW1wb3J0IG92ZXJsYXkgZnJvbSBcIi4vcHVnL292ZXJsYXkucHVnXCJcclxuaW1wb3J0IGNoZWNrb3V0Zm9ybSBmcm9tIFwiLi9wdWcvY2hlY2tvdXRmb3JtLnB1Z1wiXHJcbmltcG9ydCBzaWduaW4gZnJvbSBcIi4vcHVnL3NpZ25pbi5wdWdcIlxyXG5pbXBvcnQgZWRpdCBmcm9tIFwiLi9wdWcvZWRpdC5wdWdcIlxyXG5pbXBvcnQgb3JkZXIgZnJvbSBcIi4vcHVnL29yZGVyLnB1Z1wiXHJcbmltcG9ydCBkeW5wcm9kdWN0IGZyb20gXCIuL3B1Zy9wcm9kdWN0W2lkXS5wdWdcIlxyXG5pbXBvcnQgeyBvYmpIYXNBbkVtcHR5VmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0eS91dGlsaXR5LmpzXCI7XHJcbmltcG9ydCB7IGdldFZhbHVlIH0gZnJvbSBcIi4uL3V0aWxpdHkvdXRpbGl0eS5qc1wiO1xyXG5sZXQgZGF0YSA9IHtcclxuICAgIGltZ3NyYzogdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZGF0YVxyXG5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICBuYW1lOiAnaGVhZGVyLWVsZW1lbnQnLFxyXG4gICAgYXRyOiBbXSxcclxuICAgIHB1Z0Z1bmM6IGhlYWRlcixcclxuICAgIGZ1bmM6IFt7XHJcbiAgICAgICAgZXZlbnQ6ICdpbnB1dCcsXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCdpbnB1dCcgaW4gZS50YXJnZXQuZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JrZWQnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vZEdyaWQnKSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sIHtcclxuICAgICAgICBldmVudDogJ2NoYW5nZScsXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoJ29wdGlvbicgaW4gZS50YXJnZXQuZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvcmtlZCcsIGUudGFyZ2V0LnZhbHVlKTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0se1xyXG4gICAgICAgIGV2ZW50OiAnY2xpY2snLFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaWYoJ2xvZ2luJyBpbiBlLnRhcmdldC5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGxlci5zaG93T3ZlcmxheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdvdmVybGF5LWVsZW1lbnQnKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn0pXHJcbmVsZW1lbnRDcmVhdG9yKHtcclxuICAgIG5hbWU6ICdjYXJkLWVsZW1lbnQnLFxyXG4gICAgcHVnRnVuYzogY2FyZCxcclxuICAgIGF0cjogWydzcmMnLCAnbmFtZScsICdkZXRhaWwnLCAnY291bnQnLCAndWlkJywgJ3ByaWNlJ10sXHJcbiAgICBmdW5jOiBbe1xyXG4gICAgICAgIGV2ZW50OiAnY2xpY2snLFxyXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZignYWRkdG9jYXJ0JyBpbiBlLnRhcmdldC5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGxlci5lZGl0UHJvZHVjdENvdW50KHRydWUsIHRoaXMudmFsdWUudWlkLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vZEdyaWQnKS5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobW9kZWwucHJvZHVjdClcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgnbWludXMnIGluIGUudGFyZ2V0LmRhdGFzZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsbGVyLmVkaXRQcm9kdWN0Q291bnQoZmFsc2UsIHRoaXMudmFsdWUudWlkLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vZEdyaWQnKS5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobW9kZWwucHJvZHVjdClcclxuICAgICAgICAgICAgfWVsc2UgaWYgKCdwbHVzJyBpbiBlLnRhcmdldC5kYXRhc2V0KXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsZWQgcGx1cycsIGUudGFyZ2V0LmRhdGFzZXQpXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGxlci5lZGl0UHJvZHVjdENvdW50KHRydWUsIHRoaXMudmFsdWUudWlkLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vZEdyaWQnKS5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobW9kZWwucHJvZHVjdClcclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfV0sXHJcbn0pXHJcblxyXG5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICBuYW1lOiAnaG9sZGVyLWVsZW1lbnQnLFxyXG4gICAgcHVnRnVuYzogY2FyZEhvbGRlclxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogJ3RhYmxlLWVsZW1lbnQnLFxyXG4gICAgcHVnRnVuYzogdGFibGVcclxufSlcclxuXHJcbmVsZW1lbnRDcmVhdG9yKHtcclxuICAgIG5hbWU6ICdyb2xsLWVsZW1lbnQnLFxyXG4gICAgcHVnRnVuYzogcm9sbCxcclxuICAgIGF0cjogWydpbWdzcmMnLCAnbmFtZScsICdudW1iZXInLCAnY291bnQnLCAncHJpY2UnLCAndG90YWwnXSxcclxuICAgIGZ1bmM6IFt7XHJcbiAgICAgICAgZXZlbnQ6ICdjbGljaycsXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoJ3BsdXMnIGluIGUudGFyZ2V0LmRhdGFzZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsbGVyLmVkaXRQcm9kdWN0Q291bnQodHJ1ZSwgdGhpcy52YWx1ZS5udW1iZXIsIFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZS1lbGVtZW50JyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NoZWNrb3V0LWVsZW1lbnQnKV0pICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKCdtaW51cycgaW4gZS50YXJnZXQuZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxsZXIuZWRpdFByb2R1Y3RDb3VudChmYWxzZSwgdGhpcy52YWx1ZS5udW1iZXIsIFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZS1lbGVtZW50JyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NoZWNrb3V0LWVsZW1lbnQnKV0pICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgncmVtb3ZlJyBpbiBlLnRhcmdldC5kYXRhc2V0KXtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsbGVyLnJlbW92ZUZyb21DYXJ0KHRoaXMudmFsdWUubnVtYmVyLCBbZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUtZWxlbWVudCcpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjaGVja291dC1lbGVtZW50JyldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufSlcclxuXHJcbmVsZW1lbnRDcmVhdG9yKHtcclxuICAgIG5hbWU6ICdjaGVja291dC1lbGVtZW50JyxcclxuICAgIHB1Z0Z1bmM6IGNoZWNrb3V0LFxyXG4gICAgZnVuYzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZXZlbnQ6ICdjbGljaycsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgICAgICAgICBpZiAoJ2NoZWNrb3V0JyBpbiBlLnRhcmdldC5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxsZXIuc2hvd092ZXJsYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FydC1wYWdlJykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcblxyXG5cclxuXHJcbmVsZW1lbnRDcmVhdG9yKHtcclxuICAgIG5hbWU6IFwiYW1vdW50LWVsZW1lbnRcIixcclxuICAgIHB1Z0Z1bmM6IGNvdW50LFxyXG4gICAgYXRyOiBbJ2NvdW50J11cclxufSlcclxuXHJcblxyXG5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICBuYW1lOiBcImNtcy1lbGVtZW50XCIsXHJcbiAgICBwdWdGdW5jOiBjbXMsXHJcbiAgICBhdHI6IFsnaW1nc3JjJywgJ25hbWUnLCAnZXh0cmEnLCAncHJpY2UnLCAndWlkJ10sXHJcbiAgICBmdW5jOiBbe1xyXG4gICAgICAgIGV2ZW50OiBcImNsaWNrXCIsXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoJ2RlbGV0ZScgaW4gZS50YXJnZXQuZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZS51aWQpXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGxlci5kZWxldGVQcm9kdWN0KHRoaXMudmFsdWUudWlkKVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoJ2VkaXQnIGluIGUudGFyZ2V0LmRhdGFzZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJvdXRlIHRvIGVkaXQgcGFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxufSlcclxuXHJcbmVsZW1lbnRDcmVhdG9yKHtcclxuICAgIG5hbWU6IFwiY21zaG9sZGVyLWVsZW1lbnRcIixcclxuICAgIHB1Z0Z1bmM6IGNtc2hvbGRlclxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogJ2FkZGltYWdlLWVsZW1lbnQnLFxyXG4gICAgcHVnRnVuYzogaW1nLFxyXG4gICAgYXRyOiBbJ2ltZ3NyYyddLFxyXG4gICAgZnVuYzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZXZlbnQ6IFwiY2hhbmdlXCIsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGlmKCdmaWxlJyBpbiBlLnRhcmdldC5kYXRhc2V0KXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQ9KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBlLnRhcmdldC5yZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZS5pbWdzcmMgPSByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS1lbGVtZW50Jykuc2V0QXR0cmlidXRlKCdpbWdzcmMnLCByZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcblxyXG5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICBuYW1lOiAnZm9ybS1lbGVtZW50JyxcclxuICAgIHB1Z0Z1bmM6IGZvcm0sXHJcbiAgICBhdHI6IFsnbmFtZScsICdkZXRhaWwnLCAncHJpY2UnLCAnaW1nc3JjJywgJ2VkaXQnLCAndWlkJ10sXHJcbiAgICBmdW5jOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBldmVudDogXCJjbGlja1wiLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIGlmICgnYWRkJyBpbiBlLnRhcmdldC5kYXRhc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdldFZhbHVlLmJpbmQodGhpcykoXCIjbmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBnZXRWYWx1ZS5iaW5kKHRoaXMpKFwiI2RldGFpbFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vZHNyYzogdGhpcy52YWx1ZS5pbWdzcmMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBnZXRWYWx1ZS5iaW5kKHRoaXMpKFwiI3ByaWNlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmpIYXNBbkVtcHR5VmFsdWUocGF5bG9hZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnY2FudCBoYXZlIGFuIGVtcHR5IGZpZWxkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsbGVyLmFkZFByb2R1Y3QocGF5bG9hZClcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmICgnZWRpdCcgaW4gZS50YXJnZXQuZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBnZXRWYWx1ZS5jYWxsKHRoaXMsIFtcIiNuYW1lXCJdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBnZXRWYWx1ZS5jYWxsKHRoaXMsIFtcIiNkZXRhaWxcIl0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb29kc3JjOiB0aGlzLnZhbHVlLmltZ3NyYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBnZXRWYWx1ZS5jYWxsKHRoaXMsIFtcIiNwcmljZVwiXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy52YWx1ZS51aWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iakhhc0FuRW1wdHlWYWx1ZShwYXlsb2FkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnY2FudCBoYXZlIGFuIGVtcHR5IGZpZWxkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsbGVyLmVkaXRQcm9kdWN0KHBheWxvYWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcblxyXG5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICBuYW1lOiAnb3ZlcmxheS1lbGVtZW50JyxcclxuICAgIHB1Z0Z1bmM6IG92ZXJsYXksXHJcbiAgICBmdW5jOiBbe1xyXG4gICAgICAgICAgICBldmVudDogJ2NsaWNrJyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCdjbG9zZScgaW4gZS50YXJnZXQuZGF0YXNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsbGVyLnNob3dPdmVybGF5KHRoaXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogJ2NoZWNrb3V0Zm9ybS1lbGVtZW50JyxcclxuICAgIHB1Z0Z1bmM6IGNoZWNrb3V0Zm9ybVxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogJ3NpZ25pbi1lbGVtZW50JyxcclxuICAgIHB1Z0Z1bmM6IHNpZ25pbixcclxuICAgIGZ1bmM6IFt7XHJcbiAgICAgICAgZXZlbnQ6ICdjbGljaycsXHJcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZigndG9nZ2xlJyBpbiBlLnRhcmdldC5kYXRhc2V0KXtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsbGVyLnN3aXRjaEZvcm0odGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcbn0pXHJcbi8vIGZvciB2aWV3XHJcbmVsZW1lbnRDcmVhdG9yKHtcclxuICAgIG5hbWU6ICdwcm9kdWN0LXBhZ2UnLFxyXG4gICAgcHVnRnVuYzogcHJvZHVjdFxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogJ2NhcnQtcGFnZScsXHJcbiAgICBwdWdGdW5jOiBjYXJ0XHJcbn0pXHJcblxyXG5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICBuYW1lOiAnY21zLXBhZ2UnLFxyXG4gICAgcHVnRnVuYzogY21zcGFnZVxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogJ2FkZC1wYWdlJyxcclxuICAgIHB1Z0Z1bmM6IGFkZFxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogJ2VkaXQtcGFnZScsXHJcbiAgICBwdWdGdW5jOiBlZGl0XHJcbn0pXHJcblxyXG5lbGVtZW50Q3JlYXRvcih7XHJcbiAgICBuYW1lOiAnb3JkZXItcGFnZScsXHJcbiAgICBwdWdGdW5jOiBvcmRlclxyXG59KVxyXG5cclxuZWxlbWVudENyZWF0b3Ioe1xyXG4gICAgbmFtZTogXCJkeW5hbWljcHJvZHVjdC1wYWdlXCIsXHJcbiAgICBwdWdGdW5jOiBkeW5wcm9kdWN0XHJcbn0pIiwiaW1wb3J0IHsgdmlldyB9IGZyb20gXCIuL3N0YXRlTWFuYWdlci5qc1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsZW1lbnRDcmVhdG9yKHtuYW1lLGF0ciA9IFtdLHB1Z0Z1bmMsZnVuYyA9IFtdfSkge1xyXG4gICAgY2xhc3MgdGVzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRpYyBvYnNlcnZlZEF0dHJpYnV0ZXMgPSBbLi4uYXRyLCAncGFyYW0nXVxyXG4gICAgICAgIHZhbHVlID0ge1xyXG4gICAgICAgICAgICBwYXJhbTogdW5kZWZpbmVkIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwb3B1bGF0ZVZhbHVlPSgoKT0+e1xyXG4gICAgICAgICAgICBhdHIuZm9yRWFjaCgobmFtZSk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVbbmFtZV0gPSAnJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pKClcclxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVtuYW1lXSA9IG5ld1ZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgICAgICBsZXQgdmlydHVhbERvbSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgIGxldCBwdWdIdG1sID0gcHVnRnVuYyh7cHJvcDogdGhpcy52YWx1ZSwgc3RhdGU6IHZpZXcoKSwgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5oYXNofSlcclxuICAgICAgICAgICAgdmlydHVhbERvbS5pbm5lckhUTUwgPSBwdWdIdG1sXHJcbiAgICAgICAgICAgIGlmICh2aXJ0dWFsRG9tLmlubmVySFRNTCA9PT0gdGhpcy5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhbHNvIGNhbGxlZCcsdGhpcylcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsZWQnLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB2aXJ0dWFsRG9tLmlubmVySFRNTFxyXG4gICAgICAgICAgICAgICAgZnVuYy5mb3JFYWNoKCh7ZXZlbnQsY2FsbGJhY2t9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKG5hbWUsIHRlc3QpXHJcbn0iLCJleHBvcnQgbGV0IHJvdXRlciA9ICgpPT57XHJcbiAgICBsZXQgdmlld3MgPSBbXVxyXG4gICAgbGV0IGFkZFJvdXRlPSh1cmwsIGh0bWxTdHJpbmcpPT57XHJcbiAgICAgICAgbGV0IHVybE1hdGNoID0gdXJsLm1hdGNoKCc6aWQnKVxyXG4gICAgICAgIGlmICh1cmxNYXRjaCl7XHJcbiAgICAgICAgICAgIGxldCBpbkNvbXBsZXRlUmVnZXggPSB1cmwuc2xpY2UoMCwgdXJsTWF0Y2guaW5kZXgpXHJcbiAgICAgICAgICAgIGxldCByZWdleCA9IGluQ29tcGxldGVSZWdleCArICcoLispJyAgIFxyXG4gICAgICAgICAgICB2aWV3cy5wdXNoKHtodG1sU3RyaW5nLCB1cmwsIHJlZ2V4VGVzdDogbmV3IFJlZ0V4cChyZWdleCl9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2aWV3cy5wdXNoKHtodG1sU3RyaW5nLCB1cmx9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGN1cnJlbnRSb3V0ZSA9KCk9PntcclxuICAgICAgICBsZXQgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcbiAgICAgICAgbGV0IHtoYXNofSA9IHdpbmRvdy5sb2NhdGlvblxyXG4gICAgICAgIGxldCBwYXJhbVxyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdmlld3MuZmluZCgoZSk9PntcclxuICAgICAgICAgICAgaWYgKGUucmVnZXhUZXN0ICYmIGUucmVnZXhUZXN0LnRlc3QoaGFzaCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBoYXNoLnNwbGl0KCcvJylcclxuICAgICAgICAgICAgICAgIHBhcmFtID0gYXJyW2Fyci5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGUudXJsID09PSBoYXNoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbSA9IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgYXBwLnJlbmRlcihjdXJyZW50Lmh0bWxTdHJpbmcocGFyYW0pKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhcHAucmVuZGVyKCdubyBwYWdlIGZvdW5kJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgc3RhcnQ9KCk9PntcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY3VycmVudFJvdXRlKVxyXG4gICAgICAgIGlmICghbG9jYXRpb24uaGFzaCkge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyMvJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50Um91dGUoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRSb3V0ZSwgc3RhcnRcclxuICAgIH1cclxufSIsImxldCBtb2RlbCA9IHtcclxuICAgIHByb2R1Y3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogJ0J1cmdlciAxJyxcclxuICAgICAgICBmb29kc3JjOiAnLi9pbWFnZXMvYnVyZ2VyLmpwZycsXHJcbiAgICAgICAgZGV0YWlsOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZW5pdGkgdmVyaXRhdGlzIGNvbnNlcXVhdHVyIGV4cGVkaXRhIG5vbiBpc3RlIGV2ZW5pZXQgYWNjdXNhbnRpdW0gYWxpYXMgYWxpcXVpZCBvZmZpY2lhIGlsbHVtLicsXHJcbiAgICAgICAgcHJpY2U6ICcxMCcsXHJcbiAgICAgICAgY291bnQ6ICcwJyxcclxuICAgICAgICB1aWQ6ICcwMDEnLFxyXG4gICAgICAgIHJldmlldzogW1xyXG4gICAgICAgIF1cclxuXHJcbiAgICAgfSwgXHJcbiAgICAge1xyXG4gICAgICAgIG5hbWU6ICdCdXJnZXIgMicsXHJcbiAgICAgICAgZm9vZHNyYzogJy9pbWFnZXMvYnVyZ2VyLmpwZycsXHJcbiAgICAgICAgZGV0YWlsOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZW5pdGkgdmVyaXRhdGlzIGNvbnNlcXVhdHVyIGV4cGVkaXRhIG5vbiBpc3RlIGV2ZW5pZXQgYWNjdXNhbnRpdW0gYWxpYXMgYWxpcXVpZCBvZmZpY2lhIGlsbHVtLicsXHJcbiAgICAgICAgcHJpY2U6ICczMCcsXHJcbiAgICAgICAgY291bnQ6ICcwJyxcclxuICAgICAgICB1aWQ6ICcwMDInLFxyXG4gICAgICAgIHJldmlldzogW1xyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnQnVyZ2VyIDMnLFxyXG4gICAgICAgIGZvb2RzcmM6ICcvaW1hZ2VzL2J1cmdlci5qcGcnLFxyXG4gICAgICAgIGRldGFpbDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERlbGVuaXRpIHZlcml0YXRpcyBjb25zZXF1YXR1ciBleHBlZGl0YSBub24gaXN0ZSBldmVuaWV0IGFjY3VzYW50aXVtIGFsaWFzIGFsaXF1aWQgb2ZmaWNpYSBpbGx1bS4nLFxyXG4gICAgICAgIHByaWNlOiAnMTUnLFxyXG4gICAgICAgIGNvdW50OiAnMCcsXHJcbiAgICAgICAgdWlkOiAnMDAzJyxcclxuICAgICAgICByZXZpZXc6IFtcclxuICAgICAgICBdXHJcbiAgICB9LHtcclxuICAgICAgICBuYW1lOiAnQnVyZ2VyIDEyJyxcclxuICAgICAgICBmb29kc3JjOiAnL2ltYWdlcy9idXJnZXIuanBnJyxcclxuICAgICAgICBkZXRhaWw6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWxlbml0aSB2ZXJpdGF0aXMgY29uc2VxdWF0dXIgZXhwZWRpdGEgbm9uIGlzdGUgZXZlbmlldCBhY2N1c2FudGl1bSBhbGlhcyBhbGlxdWlkIG9mZmljaWEgaWxsdW0uJyxcclxuICAgICAgICBwcmljZTogJzE1JyxcclxuICAgICAgICBjb3VudDogJzAnLFxyXG4gICAgICAgIHVpZDogJzAwMTInLFxyXG4gICAgICAgIHJldmlldzogW1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgIF0sXHJcbiAgICBpc0xvZ2dlZGluOiBmYWxzZSxcclxuICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuICAgIGxvZ2luRm9ybTogZmFsc2UsXHJcbiAgICBzaG93T3ZlcmxheTogZmFsc2UsXHJcbiAgICBzdW06IDBcclxufVxyXG4vLyAnZm9vZHNyYycsICduYW1lJywgJ2RldGFpbCcsICdwcmljZScsICdjb3VudCdcclxuIGxldCBjaGVja291dFByaWNlPShtb2RlbCk9PntcclxuICAgIGxldCBzdW0gPSAwXHJcbiAgICBtb2RlbC5wcm9kdWN0LmZvckVhY2goKGVsZSk9PntcclxuICAgICAgICBzdW0gPSBzdW0gKyArZWxlLmNvdW50ICogK2VsZS5wcmljZSBcclxuICAgIH0pXHJcbiAgICBtb2RlbC5zdW0gPSBzdW1cclxuICAgIHJldHVybiB7bW9kZWx9XHJcbn1cclxuXHJcbmxldCByZW5kZXIgPSAoKT0+e1xyXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBlbGVtZW50cyBhbmQgY2FsbCBhIHJlbmRlciBtZXRob2RcXFxyXG4gICAgbGV0IGNvdW50ID0gMFxyXG4gICAgLy8gZnVuY3Rpb24gbG9wcGVyKGVsZSkge1xyXG4gICAgLy8gICAgIGNvdW50KytcclxuICAgIC8vICAgICBpZiAoZWxlLmhhc0NoaWxkTm9kZXMoKSl7XHJcbiAgICAvLyAgICAgICAgIGlmIChlbGUucmVuZGVyICYmIGNvdW50ID4gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZWxlLnJlbmRlcigpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxlLmNoaWxkTm9kZXMuZm9yRWFjaChlID0+IGxvcHBlcihlKSlcclxuICAgIC8vICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgaWYgKGVsZS5yZW5kZXIpIHtcclxuICAgIC8vICAgICAgICAgICAgIGVsZS5yZW5kZXIoKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHJldHVyblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIGZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XHJcbiAgICAgICAgcmVuZGVyUGFnZS5wYWdlcyA9IFsnYWRkLXBhZ2UnLCAnY21zLXBhZ2UnLCAnY2FydC1wYWdlJywgJ3Byb2R1Y3QtcGFnZSddXHJcbiAgICAgICAgcmVuZGVyUGFnZS5wYWdlcy5mb3JFYWNoKChwYWdlKT0+e1xyXG4gICAgICAgICAgICBsZXQgaXNBdmFpbGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhZ2UpXHJcbiAgICAgICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgaXNBdmFpbGFibGUucmVuZGVyKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXJQYWdlKClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgdmlldyA9KCk9PiBPYmplY3QuZnJlZXplKGNoZWNrb3V0UHJpY2UobW9kZWwpKVxyXG4gXHJcblxyXG5leHBvcnQgbGV0IGNvbnRyb2xsbGVyID0ge1xyXG4gICAgYWRkVG9DYXJ0OiAoYXJnKT0+e1xyXG4gICAgICAgIG1vZGVsLmNhcnQucHVzaChhcmcpXHJcbiAgICAgICAgcmVuZGVyKClcclxuICAgIH0sXHJcbiAgICBlZGl0UHJvZHVjdENvdW50OiAoaW5jcmVtZW50LCB1aWQpPT57XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9kdWN0ID0gbW9kZWwucHJvZHVjdC5maW5kKCh2YWx1ZSwgaW5kZXgpPT4gK3ZhbHVlLnVpZCA9PT0gK3VpZClcclxuICAgICAgICBjb25zb2xlLmxvZyh1aWQsIGN1cnJlbnRQcm9kdWN0LCBtb2RlbC5wcm9kdWN0KVxyXG4gICAgICAgIGlmIChjdXJyZW50UHJvZHVjdCl7XHJcbiAgICAgICAgICAgIGlmIChpbmNyZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9kdWN0LmNvdW50ID0gK2N1cnJlbnRQcm9kdWN0LmNvdW50ICsgMVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9kdWN0LmNvdW50ID0gK2N1cnJlbnRQcm9kdWN0LmNvdW50IC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlcigpXHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRnJvbUNhcnQ6ICh1aWQpPT57XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9kdWN0ID0gbW9kZWwucHJvZHVjdC5maW5kKCh2YWx1ZSwgaW5kZXgpPT4gdmFsdWUudWlkID09PSB1aWQpXHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9kdWN0LmNvdW50ID0gMFxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXIoKVxyXG4gICAgfSxcclxuICAgIHNob3dPdmVybGF5OiAoKT0+e1xyXG4gICAgICAgIG1vZGVsLnNob3dPdmVybGF5ID0gIW1vZGVsLnNob3dPdmVybGF5XHJcbiAgICAgICAgcmVuZGVyKClcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hGb3JtOiAoKT0+e1xyXG4gICAgICAgIG1vZGVsLmxvZ2luRm9ybSA9ICFtb2RlbC5sb2dpbkZvcm1cclxuICAgICAgICByZW5kZXIoKVxyXG4gICAgfSxcclxuICAgIGFkZFByb2R1Y3Q6IChwYXlsb2FkKT0+e1xyXG4gICAgICAgIC8vcG9zdCBkYXRhIHRvIGFwaVxyXG4gICAgICAgIG1vZGVsLnByb2R1Y3QucHVzaCh7XHJcbiAgICAgICAgICAgIC4uLnBheWxvYWQsIGNvdW50OiAwLCB1aWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZWRpdFByb2R1Y3Q6IChwYXlsb2FkKT0+e1xyXG4gICAgICAgIGxldCB1aWQgPSBwYXlsb2FkLnVpZFxyXG4gICAgICAgIG1vZGVsLnByb2R1Y3QgPSBtb2RlbC5wcm9kdWN0Lm1hcCgoZWxlKT0+e1xyXG4gICAgICAgICAgICBpZiAoZWxlLnVpZCA9PT0gdWlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF5bG9hZFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVuZGVyKClcclxuICAgIH0sXHJcbiAgICBkZWxldGVQcm9kdWN0OiAodWlkKT0+e1xyXG4gICAgICAgIG1vZGVsLnByb2R1Y3QgPSBtb2RlbC5wcm9kdWN0LmZpbHRlcigoZWxlKT0+IGVsZS51aWQgIT09IHVpZClcclxuICAgICAgICByZW5kZXIoKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgb2JqSGFzQW5FbXB0eVZhbHVlPShvYmopPT4ge1xyXG4gICAgY29uc29sZS5sb2cob2JqKVxyXG4gICAgbGV0IHZhbHVlID0gZmFsc2VcclxuICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKGVsZT0+e1xyXG4gICAgICAgIGlmKHR5cGVvZiBlbGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlbGUgPT09IFwibnVsbFwiIHx8IGVsZS5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbn1cclxuZXhwb3J0IGxldCBnZXRWYWx1ZSA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3IoZSkudmFsdWVcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3JvdXRlcn0gZnJvbSBcIi4vcm91dGVyLmpzXCJcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCBkYXRhIGZyb20gXCIuL2NvbXBvbmVudC91bml0Q29tcG9uZW50LmpzXCJcclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuLy8gd2UgY2FuJ3Qgc2VlbSB0byB3b3JrIHdpdGggb2ZmbGluZSBmaWxlcyBhbmQgaW1wb3J0aW5nIGZpbGVzIFxyXG5sZXQgcm91dGUgPSByb3V0ZXIoKVxyXG5jbGFzcyBhcHAgZXh0ZW5kcyBIVE1MRWxlbWVudHtcclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7XHJcbiAgICAgICAgcm91dGUuYWRkUm91dGUoJyMvJywocGFyYW0pPT5gPHByb2R1Y3QtcGFnZSBwYXJhbT0ke3BhcmFtfT48L3Byb2R1Y3QtcGFnZT5gKVxyXG4gICAgICAgIHJvdXRlLmFkZFJvdXRlKCcjL2NhcnQnLChwYXJhbSk9PmA8Y2FydC1wYWdlIHBhcmFtPSR7cGFyYW19PjwvY2FydC1wYWdlPmApXHJcbiAgICAgICAgcm91dGUuYWRkUm91dGUoJyMvY21zJywocGFyYW0pPT5gPGNtcy1wYWdlIHBhcmFtPSR7cGFyYW19PjwvY21zLXBhZ2U+YClcclxuICAgICAgICByb3V0ZS5hZGRSb3V0ZSgnIy9jbXMvYWRkJywocGFyYW0pPT5gPGFkZC1wYWdlIHBhcmFtPSR7cGFyYW19PjwvYWRkLXBhZ2U+YClcclxuICAgICAgICByb3V0ZS5hZGRSb3V0ZSgnIy9jbXMvZWRpdC86aWQnLChwYXJhbSk9PmA8ZWRpdC1wYWdlIHBhcmFtPSR7cGFyYW19PjwvZWRpdC1wYWdlPmApXHJcbiAgICAgICAgcm91dGUuYWRkUm91dGUoJyMvb3JkZXJzJywgKHBhcmFtKT0+IGA8b3JkZXItcGFnZSBwYXJhbT0ke3BhcmFtfT48L29yZGVyLXBhZ2U+YClcclxuICAgICAgICByb3V0ZS5hZGRSb3V0ZSgnIy9wcm9kdWN0LzppZCcsIChwYXJhbSk9PmA8ZHluYW1pY3Byb2R1Y3QtcGFnZSBwYXJhbT0ke3BhcmFtfT48L2R5bmFtaWNwcm9kdWN0LXBhZ2U+YClcclxuICAgICAgICByb3V0ZS5zdGFydCgpXHJcbiAgICB9XHJcbiAgICByZW5kZXI9KHN0cik9PntcclxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IHN0clxyXG4gICAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1jb21wb25lbnQnLCBhcHApXHJcblxyXG4vLyByZWdpc3RlciBTV1xyXG5uYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc3cuanMnKVxyXG5cclxubGV0IHByb21wdE9iajtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnN0YWxscHJvbXB0JywgKGUpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBwcm9tcHRPYmogPSBlXHJcbiAgICAvLyBzaG93Rm9vdGVyKHRydWUpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9