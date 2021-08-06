import { useState } from 'react';
import QRCode from 'qrcode.react';
function App() {
  const [value, setValue] = useState('');
  const downloadQr = () => {
    let canvas = document.getElementById('qrcode');
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL()
    link.click();
  }
  return (
    <center className='m-auto mt-4 border tag bg-light'>
      <h3>Make your QRcode</h3>
      <input type='text' value={value} placeholder='write anything here ...' onChange={(e) => { setValue(e.target.value) }} /><br />
      <QRCode
        id='qrcode'
        value={value}
        size={170}
        level={'L'}
        includeMargin={true}
      />
      <button onClick={downloadQr}><i class="fa fa-download" aria-hidden="true"></i></button>
    </center>
  );
}

export default App;
