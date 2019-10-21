# snipeptsapp
Es una aplicación creada con Pywebview para crear trozos de codigo (Snippets) y tenerlos a mano sin conexion a internet.

### instalación

Crear entorno (VENV) y instalar esto:

- PyInstaller
- pywebview
- cefpython3 ( opcional para tener chromium )

Activar entorno virtual **venv/Scripts/activate**
Ejecutar **python main.py**

Lleva un archivo **glupfile.js** para comprimir el css y el javascript.

      npm install
      gulp 
  
### Crear ejécutable con Pyinstaller

Prímero necesitas copiar **WebBrowserInterop.x64.dll**, y **WebBrowserInterop.x86.dll** en la carpeta del entorno virtual **venv\Lib\site-packages\webview\lib\** y 
luego añadir en **--paths** la direccion de Python del entorno por ejemplo 

**--paths "E:\PYTHON\pyswebview-demos\venv\Scripts/"**

Y también añadir los datos

**--add-data "assets;assets"** Para la carpeta assets
 
**--add-data "storage;storage"** Para la carpeta storage

**--add-data "C:\demos\venv\Lib\site-packages\webview\lib\WebBrowserInterop.x64.dll;./"** Dll necesaria 

**--add-data "C:\demos\venv\Lib\site-packages\webview\lib\WebBrowserInterop.x86.dll;./"** Dll necesaria

**--add-data "C:\demos\venv\Lib\site-packages\webview\lib\Microsoft.Toolkit.Forms.UI.Controls.WebView.dll;./"** Dll necesaria


**Ejemplo:**

      pyinstaller main.py ^
          --onefile ^
          --clean ^
          --windowed --noconsole ^
          --hidden-import "clr" --name "Snippets" ^
          --icon "icon.ico" ^
          --paths "E:\PYTHON\venv\Scripts\" ^
          --add-data "assets;assets" ^
          --add-data "storage;storage" ^
          --add-data "C:\PYTHON\venv\Lib\site-packages\webview\lib\WebBrowserInterop.x64.dll;.\" ^
          --add-data "C:\PYTHON\venv\Lib\site-packages\webview\lib\WebBrowserInterop.x86.dll;.\" ^
          --add-data "C:\PYTHON\venv\Lib\site-packages\webview\lib\Microsoft.Toolkit.Forms.UI.Controls.WebView.dll;.\" ^
          --exclude-module "tkinter"

Guardar como build.bat y ejecutar 

luego copiar la carpeta storage en la carpeta dist y ya podra usarse.

**:( Solo ha sido probado en Windows 10 version 1903**