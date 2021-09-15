export function setHeader (id, ref  ) {

  const selObj= window.getSelection().toString();  
  const  selRange = selObj.getRangeAt(0);
  console.log(selRange);

  /*
    const openTag =  `<${id}>`;
    const closeTag = `</${id}>`;
    const txtEditor = ref.current;
    const start = txtEditor.selectionStart;
    // obtain the index of the last selected character
    const finish = txtEditor.selectionEnd;

    let texto = txtEditor.value;
    const output1 = [
      texto.slice(0, finish),
      closeTag,
      texto.slice(finish),
    ].join("");
    const output2 = [
      output1.slice(0, start),
      openTag,
      output1.slice(start),
    ].join("");

    //console.log(output1);
    console.log(output2);
    txtEditor.value = output2;

    */

}