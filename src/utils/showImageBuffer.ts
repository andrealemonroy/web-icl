export const returnLinkPDFFromBuffer = (bufferObj: any) => {
  // Ensure bufferObj is an object with 'data' and 'type' fields
  if (
    !bufferObj ||
    !Array.isArray(bufferObj.data) ||
    bufferObj.type !== 'Buffer'
  ) {
    console.error('Invalid buffer object.');
    return null;
  }

  // Convert the bufferObj to a Uint8Array
  const uint8Array = new Uint8Array(bufferObj.data);

  // Create a Blob from the Uint8Array
  const blob = new Blob([uint8Array], { type: 'application/pdf' });

  // Check if the URL class is available (it should be in a browser environment)
  if (window.URL) {
    return window.URL.createObjectURL(blob);
  } else {
    console.error(
      'URL class not available. Your environment may not support this operation.'
    );
    return null;
  }
};
