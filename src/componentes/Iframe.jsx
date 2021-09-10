import React from 'react';

const Iframe = (props) => {
  const content= props.content;

   let iframe_ref = null;
   const writeHTML = (frame) => {
   if (!frame) {
     return;
   }
   iframe_ref = frame;
   let doc = frame.contentDocument;
   doc.open();
   doc.write(content);
   doc.close();
   frame.style.width = '100%';
   frame.style.height =     `${frame.contentWindow.document.body.scrollHeight}px`;
 };
 return (
  <iframe src="about:blank" scrolling="yes" frameBorder="0"  ref= {writeHTML} 
  />
 );
};
export default Iframe;