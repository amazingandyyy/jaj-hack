/**
 * Copyright @ 2017 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["require","exports","esri/views/3d/webgl-engine/lib/Util"],function(t,e,r){function i(t){switch(t){case 5126:return 4;case 5120:case 5121:return 1;default:return 2}}var s=r.assert,a=function(){function t(t,e,r){this.stride=0,this.attributes={},this.attrNames=t,this.attrSizes=e,this.attrTypes=r,this.init()}return t.prototype.init=function(){var t=this.attrNames.length;if(s(this.attrSizes.length===t),this.attrTypes)s(this.attrTypes.length===t);else{this.attrTypes=new Array(this.attrNames.length);for(var e=0;e<this.attrTypes.length;e++)this.attrTypes[e]=5126}for(var e=0;t>e;e++){var r={offset:this.stride,size:this.attrSizes[e],type:this.attrTypes[e]};s(r.size*i(this.attrTypes[e])%4===0,"attribute byte length must be a multiple of 4"),this.stride+=this.attrSizes[e]*i(this.attrTypes[e])/4,this.attributes[this.attrNames[e]]=r}},t.prototype.getStride=function(){return this.stride},t.prototype.getAttributes=function(){return this.attributes},t.prototype.hasAttribute=function(t){return t in this.attributes},t.prototype.enableVertexAttribArrays=function(t,e){for(var r=0;r<this.attrNames.length;++r){var i=this.attrNames[r],s=this.attributes[i],a=e.getAttribLocation(i);if(a>-1)if(16===s.size)for(var n=0;4>n;n++)t.enableVertexAttribArray(a+n);else t.enableVertexAttribArray(a)}},t.prototype.disableVertexAttribArrays=function(t,e){for(var r=0;r<this.attrNames.length;++r){var i=this.attrNames[r],s=this.attributes[i],a=e.getAttribLocation(i);if(a>-1)if(16===s.size)for(var n=0;4>n;n++)t.disableVertexAttribArray(a+n);else t.disableVertexAttribArray(a)}},t.prototype.setVertexAttribPointers=function(t,e){for(var r=0;r<this.attrNames.length;++r){var i=this.attrNames[r],s=this.attributes[i],a=s.size,n=4*s.offset,h=s.type,o=e.getAttribLocation(i);if(o>-1)if(16===a)for(var f=0;4>f;f++)t.vertexAttribPointer(o+f,4,h,!1,4*this.stride,n+16*f);else t.vertexAttribPointer(o,a,h,!1,4*this.stride,n)}},t}();return a});