"use strict";var o=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var m=(t,e)=>{for(var r in e)o(t,r,{get:e[r],enumerable:!0})},C=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of d(e))!g.call(t,i)&&i!==r&&o(t,i,{get:()=>e[i],enumerable:!(s=p(e,i))||s.enumerable});return t};var f=t=>C(o({},"__esModule",{value:!0}),t);var c={};m(c,{datoCmsResourcesCertificatesRepository:()=>a});module.exports=f(c);var n=require("@datocms/cda-client"),u=require("@ason_cs_ts/shared-remote_config"),l=require("@ason_cs_ts/shared");function a(){return{async getCertificates(){let t=await(0,n.executeQuery)(`{
                    allCertificates {
                        date
                        description
                        image {
                            url
                        }
                        issuer
                        issuerLink
                        pdf {
                            url
                        }
                        title
                        url
                    }
                }`,{token:process.env.DATOCMS_READONLY_TOKEN}).then(e=>e.allCertificates).catch(e=>((0,l.getLogger)().error("datoCmsResourcesCertificatesRepository",e),[]));return t.length>0?t.map(e=>{let r=new Date(e.date),s={dateDay:r.getDate()+1,dateMonth:r.getMonth()+1,dateYear:r.getFullYear(),description:e.description,image:e.image.url,issuer:e.issuer,issuerLink:e.issuerLink,pdf:e.pdf.url,title:e.title,url:e.url};return console.log(e.date,s),s}):u.defaultCertificates}}}0&&(module.exports={datoCmsResourcesCertificatesRepository});
