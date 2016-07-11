import { app, BrowserWindow, Menu } from 'electron';

/* import installExtension,
 *   { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';*/

let menu;
let template;
let mainWindow = null;


if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', async () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app/app.html`);

  /* if (process.env.NODE_ENV === 'development') {
   *   installExtension(REACT_DEVELOPER_TOOLS)
   *     .then((name) => console.log(`Added Extension:  ${name}`))
   *     .catch((err) => console.log('An error occurred: ', err));

   *   installExtension(REDUX_DEVTOOLS)
   *     .then((name) => console.log(`Added Extension:  ${name}`))
   *     .catch((err) => console.log('An error occurred: ', err));
   * }*/

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
    mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([{
        label: 'Inspect element',
        click() {
          mainWindow.inspectElement(x, y);
        }
      }]).popup(mainWindow);
    });
  }

  template = [{
    label: '&View',
    submenu: (process.env.NODE_ENV === 'development') ? [{
      label: '&Reload',
      accelerator: 'Ctrl+R',
      click() {
        mainWindow.webContents.reload();
      }
    }, {
      label: 'Toggle &Full Screen',
      accelerator: 'F11',
      click() {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
      }
    }, {
      label: 'Toggle &Developer Tools',
      accelerator: 'Alt+Ctrl+I',
      click() {
        mainWindow.toggleDevTools();
      }
    }] : [{
      label: 'Toggle &Full Screen',
      accelerator: 'F11',
      click() {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
      }
    }]
  }];
  menu = Menu.buildFromTemplate(template);
  mainWindow.setMenu(menu);
}
);
