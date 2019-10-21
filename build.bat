rm -rf package-lock.json

pyinstaller main.py ^
    --onefile ^
    --clean ^
    --windowed --noconsole ^
    --hidden-import "clr" --name "Snippets" ^
    --icon "icon.ico" ^
    --paths "E:\PYTHON\pyswebview-demos\venv\Scripts/" ^
    --add-data "assets;assets" ^
    --add-data "storage;storage" ^
    --add-data "E:\PYTHON\pyswebview-demos\venv\Lib\site-packages\webview\lib\WebBrowserInterop.x64.dll;./" ^
    --add-data "E:\PYTHON\pyswebview-demos\venv\Lib\site-packages\webview\lib\WebBrowserInterop.x86.dll;./" ^
    --add-data "E:\PYTHON\pyswebview-demos\venv\Lib\site-packages\webview\lib\Microsoft.Toolkit.Forms.UI.Controls.WebView.dll;./" ^
    --exclude-module "tkinter"

rm -rf build
rm -rf Snippets.spec
rm -rf __pycache__

