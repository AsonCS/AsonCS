"use strict";var o=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var g=(r,t)=>{for(var e in t)o(r,e,{get:t[e],enumerable:!0})},C=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of m(t))!d.call(r,s)&&s!==e&&o(r,s,{get:()=>t[s],enumerable:!(i=p(t,s))||i.enumerable});return r};var y=r=>C(o({},"__esModule",{value:!0}),r);var x={};g(x,{datoCmsResourcesCertificatesRepository:()=>n});module.exports=y(x);var f=require("@ason_cs_ts/shared-remote_config");var l=require("@datocms/cda-client"),c=require("@ason_cs_ts/shared");async function a(r,t){try{return await(0,l.executeQuery)(r,{token:process.env.DATOCMS_READONLY_TOKEN})}catch(e){return(0,c.getLogger)().error("@datocms/cda-client.executeQuery",e),t}}function u(){return a(`
			{
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
			}
		`,{allCertificates:[]})}function n(){return{async getCertificates(){let r=await u().then(t=>t.allCertificates.map(e=>{let i=new Date(e.date);return{dateDay:i.getDate()+1,dateMonth:i.getMonth()+1,dateYear:i.getFullYear(),description:e.description,image:e.image.url,issuer:e.issuer,issuerLink:e.issuerLink,pdf:e.pdf.url,title:e.title,url:e.url}}));return r.length>0?r:f.defaultCertificates}}}0&&(module.exports={datoCmsResourcesCertificatesRepository});
